// app/api/create-payment-intent/route.js (FIXED VERSION)
import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      amount,
      currency = 'usd',
      donationType,
      impact,
      customerInfo,
      paymentMethodId
    } = body;

    // Validate required fields
    if (!amount || amount < 50) { // Minimum $0.50
      return NextResponse.json(
        { error: 'Invalid amount' },
        { status: 400 }
      );
    }

    // Create or retrieve customer
    let customer;
    if (customerInfo.email) {
      // Check if customer already exists
      const existingCustomers = await stripe.customers.list({
        email: customerInfo.email,
        limit: 1,
      });

      if (existingCustomers.data.length > 0) {
        customer = existingCustomers.data[0];
      } else {
        // Create new customer
        customer = await stripe.customers.create({
          email: customerInfo.email,
          name: customerInfo.fullName,
          phone: customerInfo.phone,
          address: {
            line1: customerInfo.address,
            city: customerInfo.city,
            postal_code: customerInfo.zipCode,
          },
          metadata: {
            donationType,
            impact,
          },
        });
      }
    }

    // For recurring donations, create a subscription instead
    if (donationType === 'monthly') {
      // First create a product and price for the subscription
      const product = await stripe.products.create({
        name: `Monthly Donation - ${impact}`,
        type: 'service',
      });

      const price = await stripe.prices.create({
        unit_amount: Math.round(amount),
        currency,
        recurring: { interval: 'month' },
        product: product.id,
      });

      // Create subscription
      const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [{ price: price.id }],
        payment_behavior: 'default_incomplete',
        payment_settings: { save_default_payment_method: 'on_subscription' },
        expand: ['latest_invoice.payment_intent'],
        metadata: {
          donationType,
          impact,
          customerName: customerInfo.fullName,
        },
      });

      return NextResponse.json({
        client_secret: subscription.latest_invoice.payment_intent.client_secret,
        subscription_id: subscription.id,
      });
    }

    // Create payment intent WITHOUT auto-confirming
    const paymentIntentData = {
      amount: Math.round(amount), // Amount in cents
      currency,
      customer: customer?.id,
      // REMOVED: payment_method, confirmation_method, confirm
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        donationType,
        impact,
        customerName: customerInfo.fullName,
        customerEmail: customerInfo.email,
      },
      description: `${donationType === 'monthly' ? 'Monthly' : 'One-time'} donation for ${impact} programs`,
    };

    const paymentIntent = await stripe.paymentIntents.create(paymentIntentData);

    return NextResponse.json({
      client_secret: paymentIntent.client_secret,
      payment_intent_id: paymentIntent.id,
    });

  } catch (error) {
    console.error('Stripe error:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred while processing the payment' },
      { status: 500 }
    );
  }
}
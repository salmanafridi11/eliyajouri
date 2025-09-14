"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import {
  FaCheckCircle,
  FaGraduationCap,
  FaHeartbeat,
  FaFemale,
  FaShieldAlt,
  FaInfoCircle,
  FaStripe,
  FaSpinner,
} from "react-icons/fa";

// Initialize Stripe
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "pk_test_your_key_here"
);

// Card element options
const cardElementOptions = {
  style: {
    base: {
      fontSize: "16px",
      color: "#424770",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#9e2146",
    },
  },
};

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const [donationType, setDonationType] = useState("one-time");
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedImpact, setSelectedImpact] = useState("general");

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      zipCode: "",
      taxReceipt: true,
    },
  });

  const amounts = [
    { value: 25, description: "Provides school supplies for 5 children" },
    { value: 50, description: "Funds a health screening for 10 people" },
    { value: 100, description: "Sponsors a month of tutoring sessions" },
    { value: 250, description: "Supports women's entrepreneurship training" },
    { value: 500, description: "Funds community health outreach program" },
  ];

  const impactOptions = [
    {
      id: "general",
      title: "General Fund",
      description: "Support all our programs where the need is greatest",
      icon: FaCheckCircle,
    },
    {
      id: "education",
      title: "Education Programs",
      description: "Fund literacy, tutoring and STEM initiatives",
      icon: FaGraduationCap,
    },
    {
      id: "health",
      title: "Health Initiatives",
      description: "Support healthcare access and wellness programs",
      icon: FaHeartbeat,
    },
    {
      id: "womens",
      title: "Women's Empowerment",
      description:
        "Empower women and girls through leadership and entrepreneurship",
      icon: FaFemale,
    },
  ];

  const getSelectedAmountValue = () => {
    if (selectedAmount) return selectedAmount;
    if (customAmount) return parseFloat(customAmount) || 0;
    return 0;
  };

  const onSubmit = async (formData) => {
    if (!stripe || !elements) {
      return;
    }

    const amount = getSelectedAmountValue();
    if (amount <= 0) {
      setPaymentError("Please select a donation amount");
      return;
    }

    setIsProcessing(true);
    setPaymentError(null);

    const cardElement = elements.getElement(CardElement);

    // Create payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        address: {
          line1: formData.address,
          city: formData.city,
          postal_code: formData.zipCode,
        },
      },
    });

    if (error) {
      setPaymentError(error.message);
      setIsProcessing(false);
      return;
    }

    try {
      // Create payment intent on your backend
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amount * 100, // Convert to cents
          currency: "usd",
          donationType,
          impact: selectedImpact,
          customerInfo: formData,
          paymentMethodId: paymentMethod.id,
        }),
      });

      const { client_secret: clientSecret } = await response.json();

      // Confirm payment
      const { error: confirmError } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: paymentMethod.id,
        }
      );

      if (confirmError) {
        setPaymentError(confirmError.message);
      } else {
        setPaymentSuccess(true);
        // Reset form or redirect to success page
        console.log("Payment successful!");
      }
    } catch (err) {
      setPaymentError("Network error. Please try again.");
    }

    setIsProcessing(false);
  };

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8 px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-4">
            Your donation of ${getSelectedAmountValue()} has been processed
            successfully.
          </p>
          {/* <p className="text-sm text-gray-500">
            A receipt has been sent to your email address.
          </p> */}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#29573b] py-8 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden pt-6">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Support Our Mission
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your donation directly funds programs that transform lives in New
              York City and Morocco. Every contribution makes a meaningful
              difference.
            </p>
          </div>
          {/* Donation Type */}
          <div className="p-6 sm:p-8 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Choose Your Giving Type
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setDonationType("one-time")}
                className={`p-4 rounded-lg border-2 transition-all ${
                  donationType === "one-time"
                    ? "border-orange-500 bg-orange-50 text-orange-700"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="font-semibold">One-time Donation</div>
                <div className="text-sm text-gray-600 mt-1">
                  Make a single donation to support our programs immediately.
                </div>
              </button>
              <button
                type="button"
                onClick={() => setDonationType("monthly")}
                className={`p-4 rounded-lg border-2 transition-all ${
                  donationType === "monthly"
                    ? "border-orange-500 bg-orange-50 text-orange-700"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="font-semibold">Monthly Donation</div>
                <div className="text-sm text-gray-600 mt-1">
                  Sustain our impact with ongoing monthly support.
                </div>
              </button>
            </div>
          </div>

          {/* Amount Selection */}
          <div className="p-6 sm:p-8 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Select Amount
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              {amounts.map((amount) => (
                <button
                  key={amount.value}
                  type="button"
                  onClick={() => {
                    setSelectedAmount(amount.value);
                    setCustomAmount("");
                  }}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    selectedAmount === amount.value
                      ? "border-orange-500 bg-orange-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    ${amount.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {amount.description}
                  </div>
                </button>
              ))}
              <div
                className={`p-4 rounded-lg border-2 ${
                  customAmount
                    ? "border-orange-500 bg-orange-50"
                    : "border-gray-200"
                }`}
              >
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  Custom Amount
                </div>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2">$</span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    placeholder="0"
                    className="flex-1 border-0 bg-transparent text-xl font-semibold focus:outline-none focus:ring-0"
                    min="1"
                  />
                </div>
              </div>
            </div>
            {!getSelectedAmountValue() && (
              <p className="text-red-500 text-sm">
                Please select a donation amount
              </p>
            )}
          </div>

          {/* Impact Selection */}
          <div className="p-6 sm:p-8 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Choose Your Impact
            </h2>
            <div className="space-y-3">
              {impactOptions.map((option) => {
                const IconComponent = option.icon;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setSelectedImpact(option.id)}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all flex items-start ${
                      selectedImpact === option.id
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <IconComponent
                      className={`text-xl mr-3 mt-1 ${
                        selectedImpact === option.id
                          ? "text-orange-600"
                          : "text-gray-400"
                      }`}
                    />
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">
                        {option.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        {option.description}
                      </div>
                    </div>
                    <div
                      className={`ml-auto ${
                        selectedImpact === option.id
                          ? "text-orange-600"
                          : "text-gray-300"
                      }`}
                    >
                      <FaCheckCircle />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-8">
            {/* Stripe Payment */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <FaStripe className="text-purple-600 mr-2" />
                Payment Information
              </h2>

              <div className="p-4 bg-purple-50 rounded-lg mb-6">
                <div className="flex items-center justify-center mb-2">
                  <FaStripe className="text-purple-600 text-2xl" />
                </div>
                <p className="text-sm text-purple-800 text-center">
                  Secure payment processing powered by Stripe
                </p>
              </div>

              {/* Card Element */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Card Details *
                </label>
                <div className="p-3 border border-gray-300 rounded-lg">
                  <CardElement options={cardElementOptions} />
                </div>
              </div>

              {paymentError && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm">{paymentError}</p>
                </div>
              )}

              <div className="flex items-center text-sm text-gray-600">
                <FaShieldAlt className="text-green-600 mr-2" />
                Your payment is secured with 256-bit SSL encryption
              </div>
            </div>

            {/* Donor Information */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Donor Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    {...register("fullName", {
                      required: "Full name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                    })}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
                      errors.fullName ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid email address",
                      },
                    })}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    {...register("phone", {
                      pattern: {
                        value: /^[\+]?[0-9\s\-\(\)]{10,}$/,
                        message: "Please enter a valid phone number",
                      },
                    })}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    {...register("address")}
                    placeholder="Street Address"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 mb-3"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      {...register("city")}
                      placeholder="City"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                    <input
                      type="text"
                      {...register("zipCode", {
                        pattern: {
                          value: /^\d{5}(-\d{4})?$/,
                          message: "Please enter a valid ZIP code",
                        },
                      })}
                      placeholder="ZIP Code"
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
                        errors.zipCode ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                  </div>
                  {errors.zipCode && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.zipCode.message}
                    </p>
                  )}
                </div>
                {/* <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="taxReceipt"
                    {...register("taxReceipt")}
                    className="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500"
                  />
                  <label
                    htmlFor="taxReceipt"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Send me a tax deductible receipt via email
                  </label>
                </div> */}
              </div>
            </div>
          </div>

          {/* Impact Summary */}
          <div className="p-6 sm:p-8 bg-gray-50 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Your Impact Summary
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Donation Type:</span>
                <span className="font-medium capitalize">
                  {donationType.replace("-", " ")}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Amount:</span>
                <span className="font-medium">
                  ${getSelectedAmountValue() || "0"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Program:</span>
                <span className="font-medium">
                  {impactOptions.find((opt) => opt.id === selectedImpact)
                    ?.title || "General Fund"}
                </span>
              </div>
            </div>

            {!getSelectedAmountValue() && (
              <div className="mt-4 text-center text-gray-500">
                Select an amount to see your impact
              </div>
            )}

            <div className="mt-4 p-3 bg-blue-50 rounded-lg flex items-start">
              <FaInfoCircle className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-blue-800">
                <strong>Tax Deductible:</strong> This donation is tax deductible
                to the full extent allowed by law. Our EIN is 12-3456789.
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="p-6 sm:p-8">
            <button
              type="button"
              onClick={handleSubmit(onSubmit)}
              disabled={!stripe || isProcessing || !getSelectedAmountValue()}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-colors text-lg flex items-center justify-center"
            >
              {isProcessing ? (
                <>
                  <FaSpinner className="animate-spin mr-2" />
                  Processing...
                </>
              ) : (
                `Donate $${getSelectedAmountValue() || "0"}`
              )}
            </button>

            <div className="mt-4 text-center text-sm text-gray-500">
              <a
                href="#"
                className="text-orange-600 hover:text-orange-700 mr-4"
              >
                Terms of Service
              </a>
              <a href="#" className="text-orange-600 hover:text-orange-700">
                Privacy Policy
              </a>
            </div>

            <div className="flex justify-center space-x-4 mt-4">
              <FaShieldAlt className="text-gray-400 text-lg" />
              <FaStripe className="text-purple-600 text-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}

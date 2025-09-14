import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { Mission } from './sections/Mission'
import { Locations } from './sections/Locations'
import { Programs } from './sections/Programs'
import { WhyBothCountries } from './sections/WhyBothCountries'
import { GetInvolved } from './sections/GetInvolved'
import { Impact } from './sections/Impact'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'

export function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      
      <Hero />
      <Mission />
      <Locations />
      <Programs />
      <WhyBothCountries />
      <GetInvolved />
      <Impact />
      <Contact />
     
    </main>
  )
}
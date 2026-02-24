import Header from "./components/Header";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Features from "./components/Features";
import Benefits from "./components/Benefits";
import FAQ from "./components/FAQ";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import LiveChat from "./components/LiveChat";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-background)]">
      <Header />
      <main className="flex-grow">
        <Hero />
        <SocialProof />
        <Features />
        <Benefits />
        <BookingForm />
        <FAQ />
      </main>
      <Footer />
      <LiveChat />
    </div>
  );
}

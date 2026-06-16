import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Destinations } from "./components/Destinations";
import { TravelSection } from "./components/TravelSection";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      className="min-h-screen w-full overflow-x-hidden"
      style={{ fontFamily: "'Nunito', sans-serif" }}
    >
      <Navbar />
      <Hero />
      <Destinations />
      <TravelSection />
      <Testimonials />
      <Footer />
    </div>
  );
}

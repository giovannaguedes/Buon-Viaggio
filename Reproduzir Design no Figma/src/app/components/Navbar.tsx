import { useState, useEffect } from "react";
import { Menu, X, Plane } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Passeios", href: "#passeios" },
  { label: "Destinos", href: "#destinos" },
  { label: "Avaliações", href: "#avaliacoes" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1a2744]/95 backdrop-blur-md shadow-lg" : "bg-[#1a2744]/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-[#f5a623] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Plane className="w-4 h-4 text-white -rotate-45" />
            </div>
            <span
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-white text-xl font-bold italic tracking-wide"
            >
              Buon Viaggio!
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/80 hover:text-[#f5a623] transition-colors duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#f5a623] after:transition-all after:duration-200 hover:after:w-full"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              className="bg-[#f5a623] hover:bg-[#e09310] text-white px-5 py-2 rounded-full transition-all duration-200 hover:shadow-lg hover:scale-105 font-semibold"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Contato
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-[#f5a623] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1a2744] border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/80 hover:text-[#f5a623] transition-colors font-medium py-1"
              style={{ fontFamily: "'Nunito', sans-serif" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="bg-[#f5a623] hover:bg-[#e09310] text-white px-5 py-2 rounded-full text-center font-semibold transition-all"
            style={{ fontFamily: "'Nunito', sans-serif" }}
            onClick={() => setMenuOpen(false)}
          >
            Contato
          </a>
        </div>
      )}
    </nav>
  );
}

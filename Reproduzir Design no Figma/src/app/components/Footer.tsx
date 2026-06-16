import { useState } from "react";
import { Plane, Mail, Send } from "lucide-react";

const partners = [
  "Conectotur Adviasory",
  "Palatur Autem Rentum",
  "Samporius Lacinium Paulinus",
  "Samporius Iam Nlegirum",
  "Crommun Ped Quasem",
  "Qvos Fequinstuli Benedita",
  "Agapornis",
];

const socialLinks = [
  {
    id: "facebook",
    label: "Facebook",
    href: "#",
    color: "hover:text-[#1877F2] hover:bg-[#1877F2]/10",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "#",
    color: "hover:text-[#E1306C] hover:bg-[#E1306C]/10",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    id: "twitter",
    label: "X / Twitter",
    href: "#",
    color: "hover:text-white hover:bg-white/20",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.632L18.245 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  }

  return (
    <footer id="contato" className="bg-[#1a2744] text-white">
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-[#f5a623] rounded-full flex items-center justify-center">
              <Plane className="w-4 h-4 text-white -rotate-45" />
            </div>
            <span
              className="text-xl font-bold italic"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Buon Viaggio!
            </span>
          </div>
          <p
            className="text-white/60 text-sm leading-relaxed"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            <span className="font-semibold text-white/80">Buon Viaggio &amp; Turismo S.A.</span>
            <br />
            Avenida do Boa Vista, 2114 Porto, Portugal
          </p>
          <p
            className="text-white/50 text-xs mt-3"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            © Buon Viaggio &amp; Turismo S.A. Todos os direitos reservados 2024
          </p>
        </div>

        {/* Partners */}
        <div>
          <h4
            className="text-white font-bold uppercase tracking-wider mb-4 text-sm"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Nossos Parceiros
          </h4>
          <ul className="space-y-2">
            {partners.map((p) => (
              <li key={p}>
                <a
                  href="#"
                  className="text-white/60 hover:text-[#f5a623] text-sm transition-colors duration-200"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  {p}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4
            className="text-white font-bold uppercase tracking-wider mb-4 text-sm"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Assine a Nossa Newsletter
          </h4>
          {subscribed ? (
            <p
              className="text-[#f5a623] font-semibold text-sm"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Obrigado por se inscrever!
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu e-mail"
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#f5a623] transition-colors"
                style={{ fontFamily: "'Nunito', sans-serif" }}
                required
              />
              <button
                type="submit"
                className="bg-[#f5a623] hover:bg-[#e09310] text-white px-3 py-2 rounded-lg transition-all duration-200 hover:scale-105"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
          <p
            className="text-white/40 text-xs mt-3"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Receba as melhores ofertas diretamente no seu e-mail. Sem spam.
          </p>
        </div>

        {/* Social */}
        <div>
          <h4
            className="text-white font-bold uppercase tracking-wider mb-4 text-sm"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Siga Nossas Redes Sociais
          </h4>
          <div className="flex gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.id}
                href={s.href}
                aria-label={s.label}
                className={`w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/60 transition-all duration-200 hover:scale-110 hover:border-transparent ${s.color}`}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#f5a623]" />
            <a
              href="mailto:contato@buonviaggio.com"
              className="text-white/60 hover:text-[#f5a623] text-sm transition-colors"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              contato@buonviaggio.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4 text-center">
        <p
          className="text-white/30 text-xs"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          Desenvolvido com amor por Buon Viaggio — Viaje mais, preocupe-se menos.
        </p>
      </div>
    </footer>
  );
}

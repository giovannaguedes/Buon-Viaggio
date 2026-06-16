import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Patricia",
    role: "Jornalista",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&auto=format",
    text: "\"A Buenas Viagens transformou completamente a forma como viajo. O serviço é impecável, os preços são os melhores do mercado e a experiência do início ao fim foi absolutamente incrível. Já indiquei para toda a minha família e amigos!\"",
  },
  {
    id: 2,
    name: "Carlos Eduardo",
    role: "Fotógrafo",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&auto=format",
    text: "\"Viajei para 12 países com a Buenas Viagens. Cada detalhe é pensado com cuidado — desde a escolha dos voos até as dicas de hospedagem. Não consigo imaginar planejar uma viagem de outra forma!\"",
  },
  {
    id: 3,
    name: "Ana Beatriz",
    role: "Médica",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&auto=format",
    text: "\"Minha viagem de lua de mel para Paris foi perfeita graças à Buenas Viagens. Tudo organizado com muita atenção e carinho. Foi um sonho realizado que jamais esquecerei!\"",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section
      id="avaliacoes"
      className="py-20 px-4"
      style={{ background: "linear-gradient(135deg, #ede8ff 0%, #f0f4ff 50%, #e8eeff 100%)" }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p
            className="text-[#f5a623] uppercase tracking-widest text-sm font-semibold mb-2"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            O que dizem nossos clientes
          </p>
          <h2
            className="text-[#1a2744] italic"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.25rem", fontWeight: 600 }}
          >
            Avaliações dos Clientes
          </h2>
          <div className="w-16 h-1 bg-[#f5a623] mx-auto mt-4 rounded-full" />
        </div>

        <div className="relative bg-white rounded-3xl shadow-xl p-8 sm:p-12 text-center">
          <Quote className="w-10 h-10 text-[#e8eeff] absolute top-6 left-8" />

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-5 h-5 fill-[#f5a623] text-[#f5a623]" />
            ))}
          </div>

          {/* Text */}
          <p
            className="text-[#5a6a8a] leading-relaxed mb-8 text-base sm:text-lg italic max-w-2xl mx-auto"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {t.text}
          </p>

          {/* Avatar */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#e8eeff] shadow-md">
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p
                className="text-[#1a2744] font-bold"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                {t.name}
              </p>
              <p
                className="text-[#5a6a8a] text-sm italic"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {t.role}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border-2 border-[#dde4f5] hover:border-[#1e56a0] hover:bg-[#1e56a0] hover:text-white text-[#1a2744] flex items-center justify-center transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                    i === current ? "bg-[#1e56a0] w-6" : "bg-[#dde4f5] hover:bg-[#b0bfe0]"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border-2 border-[#dde4f5] hover:border-[#1e56a0] hover:bg-[#1e56a0] hover:text-white text-[#1a2744] flex items-center justify-center transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

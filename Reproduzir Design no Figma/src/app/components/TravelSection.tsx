import { ArrowRight } from "lucide-react";

const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop&auto=format",
    alt: "Casal viajando na praia",
    className: "col-span-2 row-span-1",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&auto=format",
    alt: "Viajante explorando a cidade",
    className: "col-span-1 row-span-2",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=300&h=200&fit=crop&auto=format",
    alt: "Estrada aberta entre montanhas",
    className: "col-span-1 row-span-1",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=300&h=200&fit=crop&auto=format",
    alt: "Destino exótico com dunas",
    className: "col-span-1 row-span-1",
  },
];

export function TravelSection() {
  return (
    <section id="passeios" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <div>
            <p
              className="text-[#f5a623] uppercase tracking-widest text-sm font-semibold mb-2"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Experiências únicas
            </p>
            <h2
              className="text-[#1a2744] italic mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.1rem", fontWeight: 600 }}
            >
              Próximos Passeios &amp; Destinos
            </h2>
            <div className="w-16 h-1 bg-[#1e56a0] rounded-full mb-6" />
            <p
              className="text-[#5a6a8a] leading-relaxed mb-4"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Explore os destinos mais deslumbrantes do planeta com pacotes exclusivos pensados para quem busca liberdade, conforto e aventura. Cada viagem é uma história única esperando para ser vivida.
            </p>
            <p
              className="text-[#5a6a8a] leading-relaxed mb-8"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Do azul profundo do Mediterrâneo às montanhas nevadas dos Alpes, dos templos milenares da Ásia às praias paradisíacas do Caribe — o mundo é seu. Escolha seu próximo destino e deixe que nós cuidamos de tudo.
            </p>
            <button
              className="bg-[#f5a623] hover:bg-[#1e56a0] text-white px-7 py-3 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-2 group"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Saiba mais
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Photo collage */}
          <div className="grid grid-cols-2 grid-rows-3 gap-3 h-96 lg:h-[480px]">
            <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden">
              <img
                src={photos[0].src}
                alt={photos[0].alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden">
              <img
                src={photos[1].src}
                alt={photos[1].alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden">
              <img
                src={photos[2].src}
                alt={photos[2].alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden">
              <img
                src={photos[3].src}
                alt={photos[3].alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

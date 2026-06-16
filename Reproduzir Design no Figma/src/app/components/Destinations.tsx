import { MapPin, Tag } from "lucide-react";

const destinations = [
  {
    id: 1,
    city: "Barcelona",
    country: "Espanha",
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=600&h=400&fit=crop&auto=format",
    price: "R$ 3.900,00",
    oldPrice: "R$ 5.400,00",
    description: "Mergulhe na arquitetura deslumbrante de Gaudí, praias vibrantes e uma culinária inigualável no coração da Catalunha.",
  },
  {
    id: 2,
    city: "Porto",
    country: "Portugal",
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&h=400&fit=crop&auto=format",
    price: "R$ 3.700,00",
    oldPrice: "R$ 5.200,00",
    description: "Descubra a cidade das pontes, do vinho do Porto e azulejos históricos às margens do Rio Douro.",
  },
  {
    id: 3,
    city: "Milão",
    country: "Itália",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=400&fit=crop&auto=format",
    price: "R$ 3.500,00",
    oldPrice: "R$ 4.200,00",
    description: "Capital da moda e design, com a majestosa Catedral Duomo e uma cena gastronômica sofisticada.",
  },
  {
    id: 4,
    city: "Londres",
    country: "Inglaterra",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop&auto=format",
    price: "R$ 4.200,00",
    oldPrice: "R$ 5.300,00",
    description: "A cidade mais cosmopolita do mundo, com museus gratuitos, teatros mundialmente famosos e história em cada esquina.",
  },
  {
    id: 5,
    city: "Lauterbrunnen",
    country: "Suíça",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&auto=format",
    price: "R$ 3.900,00",
    oldPrice: "R$ 5.100,00",
    description: "Um vale de sonho nos Alpes Suíços, com 72 cascatas, prados verdejantes e aldeias encantadoras.",
  },
  {
    id: 6,
    city: "Paris",
    country: "França",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop&auto=format",
    price: "R$ 4.500,00",
    oldPrice: "R$ 5.900,00",
    description: "A Cidade Luz encanta com a Torre Eiffel, museus icônicos e uma romantica atmosfera à beira do Sena.",
  },
];

export function Destinations() {
  return (
    <section
      id="destinos"
      className="py-20 px-4"
      style={{ background: "linear-gradient(135deg, #e8eeff 0%, #f0f4ff 50%, #ede8ff 100%)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p
            className="text-[#f5a623] uppercase tracking-widest text-sm font-semibold mb-2"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Melhores ofertas
          </p>
          <h2
            className="text-[#1a2744] italic"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.25rem", fontWeight: 600 }}
          >
            Para onde você quer viajar?
          </h2>
          <div className="w-16 h-1 bg-[#f5a623] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={dest.image}
                  alt={`${dest.city}, ${dest.country}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  <MapPin className="w-4 h-4 text-[#f5a623]" />
                  <h3
                    className="text-[#1a2744]"
                    style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "1rem" }}
                  >
                    <span className="font-bold">{dest.city}</span>
                    <span className="text-[#5a6a8a] font-normal">, {dest.country}</span>
                  </h3>
                </div>
                <p
                  className="text-[#5a6a8a] text-sm mb-4 leading-relaxed line-clamp-3"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  {dest.description}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div
                      className="text-[#1a2744] font-extrabold"
                      style={{ fontFamily: "'Nunito', sans-serif", fontSize: "1.1rem" }}
                    >
                      {dest.price}
                    </div>
                    <div
                      className="text-[#b0bfe0] line-through text-xs"
                      style={{ fontFamily: "'Nunito', sans-serif" }}
                    >
                      {dest.oldPrice}
                    </div>
                  </div>
                  <button
                    className="bg-[#f5a623] hover:bg-[#1e56a0] text-white px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 hover:shadow-md hover:scale-105 flex items-center gap-1.5"
                    style={{ fontFamily: "'Nunito', sans-serif" }}
                  >
                    <Tag className="w-3.5 h-3.5" />
                    Saiba mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

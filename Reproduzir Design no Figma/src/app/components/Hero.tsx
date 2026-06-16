import { useState } from "react";
import { Search, Calendar, MapPin } from "lucide-react";

export function Hero() {
  const [destination, setDestination] = useState("");
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&h=1080&fit=crop&auto=format')",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a2744]/70 via-[#1a2744]/40 to-[#1a2744]/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 mb-10">
        <p
          className="text-[#f5a623] text-lg mb-3 tracking-widest uppercase"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          Sua próxima aventura começa aqui
        </p>
        <h1
          className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold tracking-wide uppercase drop-shadow-2xl"
          style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800 }}
        >
          EXPLORE O MUNDO!
        </h1>
        <p
          className="text-white/75 mt-4 text-lg max-w-xl mx-auto"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          Passagens aéreas com os melhores preços para qualquer destino do planeta
        </p>
      </div>

      {/* Search bar */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-end">
            {/* Destination */}
            <div className="flex flex-col gap-1">
              <label
                className="text-[#5a6a8a] text-xs font-semibold uppercase tracking-wider flex items-center gap-1"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                <MapPin className="w-3 h-3" /> Para onde vamos?
              </label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Cidade ou país"
                className="border-b-2 border-[#dde4f5] focus:border-[#1e56a0] outline-none py-2 text-[#1a2744] placeholder-[#b0bfe0] transition-colors bg-transparent"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              />
            </div>

            {/* Departure */}
            <div className="flex flex-col gap-1">
              <label
                className="text-[#5a6a8a] text-xs font-semibold uppercase tracking-wider flex items-center gap-1"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                <Calendar className="w-3 h-3" /> Quando?
              </label>
              <input
                type="date"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                className="border-b-2 border-[#dde4f5] focus:border-[#1e56a0] outline-none py-2 text-[#1a2744] transition-colors bg-transparent"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              />
            </div>

            {/* Return */}
            <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:gap-3">
              <div className="flex flex-col gap-1 flex-1">
                <label
                  className="text-[#5a6a8a] text-xs font-semibold uppercase tracking-wider flex items-center gap-1"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  <Calendar className="w-3 h-3" /> Retorno
                </label>
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="border-b-2 border-[#dde4f5] focus:border-[#1e56a0] outline-none py-2 text-[#1a2744] transition-colors bg-transparent"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                />
              </div>
              <button
                className="bg-[#f5a623] hover:bg-[#e09310] text-white px-7 py-2.5 rounded-xl font-bold transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center gap-2 whitespace-nowrap sm:mb-0.5"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                <Search className="w-4 h-4" />
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center pt-2">
          <div className="w-1 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}

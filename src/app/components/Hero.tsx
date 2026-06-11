import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, PlayCircle } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100vh", paddingTop: 64 }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwcmVtaXVtJTIwY2F0dGxlJTIwYm92aW5lJTIwbGl2ZXN0b2NrJTIwZmFybXxlbnwxfHx8fDE3ODExNTMxNjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Ganado bovino premium en campo verde"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.32)" }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(26,46,32,0.92) 0%, rgba(26,46,32,0.7) 50%, rgba(30,58,74,0.75) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col justify-center" style={{ minHeight: "calc(100vh - 64px)" }}>
        <div className="max-w-3xl py-20">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 mb-6" style={{ background: "rgba(200,168,75,0.15)", border: "1px solid rgba(200,168,75,0.4)", borderRadius: 100, padding: "5px 14px" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#c8a84b", display: "inline-block" }} />
            <span style={{ color: "#c8a84b", fontSize: 12, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase" }}>
              Biotecnología Reproductiva Bovina
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              color: "#ffffff",
              fontSize: "clamp(32px, 5vw, 58px)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: -0.5,
              marginBottom: 24,
            }}
          >
            Genética bovina avanzada para aumentar la{" "}
            <span style={{ color: "#c8a84b" }}>productividad</span> de su finca
          </h1>

          {/* Subtitle */}
          <p
            style={{
              color: "rgba(255,255,255,0.72)",
              fontSize: "clamp(15px, 2vw, 18px)",
              lineHeight: 1.75,
              maxWidth: 580,
              marginBottom: 40,
            }}
          >
            Fertilización in vitro, embriones, semen, ADN y asesoría genética para ganadería tropical e internacional.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#contacto"
              style={{
                background: "linear-gradient(135deg, #c8a84b, #a07a28)",
                color: "#fff",
                fontSize: 15,
                fontWeight: 600,
                padding: "14px 28px",
                borderRadius: 5,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
              className="hover:opacity-90 transition-opacity"
            >
              Solicitar asesoría
              <ArrowRight size={16} />
            </a>
            <a
              href="#servicios"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1.5px solid rgba(255,255,255,0.3)",
                color: "#fff",
                fontSize: 15,
                fontWeight: 500,
                padding: "14px 28px",
                borderRadius: 5,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
              className="hover:bg-white/15 transition-colors"
            >
              <PlayCircle size={16} />
              Ver servicios
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-14 flex flex-wrap gap-8">
            {[
              { value: "+10 años", label: "de experiencia" },
              { value: "FIV", label: "Fertilización in vitro" },
              { value: "100%", label: "Enfoque científico" },
            ].map((item) => (
              <div key={item.value} className="flex flex-col">
                <span style={{ color: "#c8a84b", fontSize: 22, fontWeight: 700 }}>{item.value}</span>
                <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 13 }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #f4f5f3)" }}
      />
    </section>
  );
}

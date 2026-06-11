import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Dna } from "lucide-react";

const animals = [
  {
    name: "Brahman Royal 218",
    breed: "Brahman Americano",
    type: "Doble propósito",
    availability: ["Semen", "Embriones"],
    img: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwY2F0dGxlJTIwYm92aW5lJTIwbGl2ZXN0b2NrJTIwZmFybXxlbnwxfHx8fDE3ODExNTMxNjB8MA&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    name: "Girolando Elite 44",
    breed: "Girolando F1",
    type: "Leche",
    availability: ["Semen"],
    img: "https://images.unsplash.com/photo-1598715685267-0f45367d8071?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxwcmVtaXVtJTIwY2F0dGxlJTIwYm92aW5lJTIwbGl2ZXN0b2NrJTIwZmFybXxlbnwxfHx8fDE3ODExNTMxNjB8MA&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    name: "Nelore Imperial 09",
    breed: "Nelore PO",
    type: "Carne",
    availability: ["Embriones", "Venta"],
    img: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwcmVtaXVtJTIwY2F0dGxlJTIwYm92aW5lJTIwbGl2ZXN0b2NrJTIwZmFybXxlbnwxfHx8fDE3ODExNTMxNjB8MA&ixlib=rb-4.1.0&q=80&w=400",
  },
];

const typeBadgeColor: Record<string, { bg: string; text: string }> = {
  "Leche": { bg: "rgba(30,58,74,0.12)", text: "#1e3a4a" },
  "Carne": { bg: "rgba(26,46,32,0.12)", text: "#1a2e20" },
  "Doble propósito": { bg: "rgba(200,168,75,0.15)", text: "#7a5a10" },
};

export function GeneticCatalog() {
  return (
    <section
      id="catalogo"
      style={{ backgroundColor: "#ffffff", padding: "96px 0" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span
              style={{
                color: "#c8a84b",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 2.5,
                textTransform: "uppercase",
                display: "block",
                marginBottom: 12,
              }}
            >
              Material genético disponible
            </span>
            <h2
              style={{
                color: "#1a2e20",
                fontSize: "clamp(26px, 3.5vw, 38px)",
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: -0.3,
              }}
            >
              Catálogo genético destacado
            </h2>
          </div>
          <a
            href="#contacto"
            style={{
              color: "#1a2e20",
              fontSize: 14,
              fontWeight: 600,
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              whiteSpace: "nowrap",
              borderBottom: "2px solid #c8a84b",
              paddingBottom: 2,
            }}
          >
            Ver catálogo completo <ArrowRight size={14} />
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {animals.map((animal, i) => {
            const badge = typeBadgeColor[animal.type] ?? { bg: "#eee", text: "#333" };
            return (
              <div
                key={i}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: 12,
                  overflow: "hidden",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                {/* Image */}
                <div style={{ position: "relative", aspectRatio: "3/2", overflow: "hidden" }}>
                  <ImageWithFallback
                    src={animal.img}
                    alt={animal.name}
                    className="w-full h-full object-cover"
                    style={{ transition: "transform 0.4s" }}
                  />
                  {/* Type badge */}
                  <span
                    style={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      background: badge.bg,
                      color: badge.text,
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: 1,
                      textTransform: "uppercase",
                      padding: "4px 10px",
                      borderRadius: 4,
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {animal.type}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: "20px 22px 22px" }}>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 style={{ color: "#1a2e20", fontSize: 16, fontWeight: 700 }}>{animal.name}</h3>
                    <Dna size={16} style={{ color: "#c8a84b", flexShrink: 0, marginTop: 3 }} />
                  </div>
                  <p style={{ color: "#5a6a5e", fontSize: 13, marginBottom: 14 }}>{animal.breed}</p>

                  {/* Availability tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {animal.availability.map((a) => (
                      <span
                        key={a}
                        style={{
                          background: "#f4f5f3",
                          border: "1px solid #dde0db",
                          color: "#3a4e40",
                          fontSize: 11,
                          fontWeight: 600,
                          letterSpacing: 0.5,
                          padding: "3px 9px",
                          borderRadius: 4,
                        }}
                      >
                        {a}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contacto"
                    style={{
                      display: "block",
                      textAlign: "center",
                      background: "#1a2e20",
                      color: "#fff",
                      fontSize: 13,
                      fontWeight: 600,
                      padding: "10px",
                      borderRadius: 6,
                    }}
                    className="hover:opacity-85 transition-opacity"
                  >
                    Consultar ejemplar
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

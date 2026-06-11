import { Microscope, GitBranch, Baby, Droplets, Dna, BarChart3, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Microscope,
    title: "Fertilización In Vitro",
    desc: "Producción de embriones en laboratorio con los mejores protocolos FIV para bovinos de alto valor genético.",
  },
  {
    icon: Baby,
    title: "Transferencia de Embriones",
    desc: "Programa de TE con selección de receptoras y monitoreo completo para maximizar las tasas de preñez.",
  },
  {
    icon: GitBranch,
    title: "Embriones Sexados",
    desc: "Selección del sexo del ternero por tecnología genómica avanzada con alta precisión y confiabilidad.",
  },
  {
    icon: Droplets,
    title: "Venta y Evaluación de Semen",
    desc: "Catálogo de semen de toros de élite con evaluación andrológica completa y pruebas de fertilidad.",
  },
  {
    icon: Dna,
    title: "Pruebas de ADN",
    desc: "Análisis genómico para verificación de identidad, filiación y evaluación del potencial genético del animal.",
  },
  {
    icon: BarChart3,
    title: "Asesoría Genética",
    desc: "Consultoría especializada en mejoramiento genético y diseño de planes reproductivos para su explotación.",
  },
];

export function Services() {
  return (
    <section
      id="servicios"
      style={{ backgroundColor: "#f4f5f3", padding: "96px 0" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-xl mb-14">
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
            Nuestros servicios
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
            Soluciones genéticas para una ganadería más rentable
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(0,0,0,0.07)",
                  borderRadius: 10,
                  padding: "32px 28px",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}
                className="flex flex-col gap-4 group hover:shadow-lg"
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    background: "rgba(26,46,32,0.07)",
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={22} style={{ color: "#1a2e20" }} />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <h3 style={{ color: "#1a2e20", fontSize: 17, fontWeight: 700 }}>{service.title}</h3>
                  <p style={{ color: "#5a6a5e", fontSize: 14, lineHeight: 1.7 }}>{service.desc}</p>
                </div>
                <a
                  href="#contacto"
                  style={{
                    color: "#c8a84b",
                    fontSize: 13,
                    fontWeight: 600,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    marginTop: 4,
                  }}
                  className="hover:gap-2 transition-all"
                >
                  Conocer más <ArrowRight size={14} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

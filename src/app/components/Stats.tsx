import { FlaskConical, Globe, Award, Layers } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "+10 años",
    label: "de experiencia",
    sub: "Trayectoria comprobada en biotecnología reproductiva",
  },
  {
    icon: FlaskConical,
    value: "Laboratorio",
    label: "especializado",
    sub: "Infraestructura científica de alto nivel para FIV y embriones",
  },
  {
    icon: Globe,
    value: "Nacional e",
    label: "internacional",
    sub: "Cobertura en múltiples países con ganadería tropical",
  },
  {
    icon: Layers,
    value: "Soluciones",
    label: "genéticas integrales",
    sub: "Desde diagnóstico hasta seguimiento de resultados",
  },
];

export function Stats() {
  return (
    <section
      id="resultados"
      style={{ backgroundColor: "#1a2e20", padding: "64px 0" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className="text-center mb-12">
          <span
            style={{
              color: "#c8a84b",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 2.5,
              textTransform: "uppercase",
            }}
          >
            Por qué elegirnos
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(200,168,75,0.2)",
                  borderRadius: 8,
                  padding: "28px 24px",
                }}
                className="flex flex-col gap-4"
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    background: "rgba(200,168,75,0.12)",
                    border: "1px solid rgba(200,168,75,0.3)",
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={20} style={{ color: "#c8a84b" }} />
                </div>
                <div>
                  <p style={{ color: "#c8a84b", fontSize: 22, fontWeight: 700, lineHeight: 1.2 }}>
                    {stat.value}
                  </p>
                  <p style={{ color: "#ffffff", fontSize: 15, fontWeight: 600, lineHeight: 1.3, marginBottom: 6 }}>
                    {stat.label}
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, lineHeight: 1.6 }}>
                    {stat.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

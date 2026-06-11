import { Quote, MapPin, TrendingUp } from "lucide-react";

const cases = [
  {
    farm: "Hacienda San Isidro",
    location: "Córdoba, Colombia",
    problem: "Baja tasa de preñez y poca eficiencia reproductiva en el hato Brahman.",
    solution: "Implementación de programa FIV con donantes seleccionadas y receptoras sincronizadas.",
    result: "Tasa de preñez del 78% en primera ronda de FIV. 42 terneros nacidos en 8 meses.",
    quote: "CIGAC transformó por completo nuestra visión de la reproducción bovina. Los resultados superaron nuestras expectativas desde el primer ciclo.",
    author: "Gerente de producción",
  },
  {
    farm: "Finca El Progreso",
    location: "Portuguesa, Venezuela",
    problem: "Hato mestizo con baja producción láctea y prolificidad decreciente.",
    solution: "Cruzamiento genético con semen sexado de toros Girolando de alta EPD en producción de leche.",
    result: "Incremento del 34% en producción de leche por vaca en el primer año de mejoramiento.",
    quote: "La asesoría genética de CIGAC fue clave para rediseñar nuestro programa reproductivo con resultados medibles y sostenibles.",
    author: "Propietario",
  },
  {
    farm: "Rancho Los Álamos",
    location: "Tamaulipas, México",
    problem: "Necesidad de mejorar conformación y ganancia de peso en ganado de carne Nelore.",
    solution: "Transferencia de embriones sexados de toros Nelore PO con altos DEPs en ganancia de peso.",
    result: "Mejora de 18 kg en el promedio de peso al destete en la generación FIV versus generación anterior.",
    quote: "El nivel de detalle técnico y el seguimiento post-implementación que ofrece CIGAC no lo encontramos en ninguna otra empresa.",
    author: "Director técnico",
  },
];

export function Testimonials() {
  return (
    <section
      id="resultados"
      style={{ backgroundColor: "#f4f5f3", padding: "96px 0" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
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
            Casos de éxito
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
            Resultados que respaldan la genética
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <div
              key={i}
              style={{
                background: "#ffffff",
                border: "1px solid rgba(0,0,0,0.07)",
                borderRadius: 12,
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                gap: 20,
                boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
              }}
            >
              {/* Farm & location */}
              <div>
                <p style={{ color: "#1a2e20", fontSize: 17, fontWeight: 700 }}>{c.farm}</p>
                <div className="flex items-center gap-1 mt-1">
                  <MapPin size={12} style={{ color: "#c8a84b" }} />
                  <span style={{ color: "#7a8a7e", fontSize: 13 }}>{c.location}</span>
                </div>
              </div>

              {/* Problem / Solution / Result */}
              <div className="flex flex-col gap-3">
                <div style={{ background: "#fdf8ec", border: "1px solid rgba(200,168,75,0.2)", borderRadius: 6, padding: "10px 14px" }}>
                  <p style={{ color: "#7a5a10", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>Problema</p>
                  <p style={{ color: "#4a3a10", fontSize: 13, lineHeight: 1.6 }}>{c.problem}</p>
                </div>
                <div style={{ background: "rgba(26,46,32,0.05)", border: "1px solid rgba(26,46,32,0.12)", borderRadius: 6, padding: "10px 14px" }}>
                  <p style={{ color: "#1a2e20", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>Solución</p>
                  <p style={{ color: "#3a4e40", fontSize: 13, lineHeight: 1.6 }}>{c.solution}</p>
                </div>
              </div>

              {/* Result highlight */}
              <div className="flex items-start gap-3" style={{ padding: "12px 14px", background: "#1a2e20", borderRadius: 8 }}>
                <TrendingUp size={18} style={{ color: "#c8a84b", flexShrink: 0, marginTop: 2 }} />
                <p style={{ color: "#fff", fontSize: 13, lineHeight: 1.6 }}>{c.result}</p>
              </div>

              {/* Quote */}
              <div className="flex flex-col gap-2">
                <Quote size={18} style={{ color: "#c8a84b", opacity: 0.7 }} />
                <p style={{ color: "#5a6a5e", fontSize: 13, lineHeight: 1.75, fontStyle: "italic" }}>
                  "{c.quote}"
                </p>
                <p style={{ color: "#7a8a7e", fontSize: 12, fontWeight: 600 }}>— {c.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

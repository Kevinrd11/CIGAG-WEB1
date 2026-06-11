import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Enfoque técnico y científico",
  "Mejoramiento genético orientado a resultados",
  "Acompañamiento profesional continuo",
  "Soluciones para ganadería tropical",
];

export function Institutional() {
  return (
    <section
      id="nosotros"
      style={{ backgroundColor: "#f4f5f3", padding: "96px 0" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text block */}
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
              Quiénes somos
            </span>
            <h2
              style={{
                color: "#1a2e20",
                fontSize: "clamp(24px, 3vw, 36px)",
                fontWeight: 700,
                lineHeight: 1.25,
                letterSpacing: -0.3,
                marginBottom: 20,
              }}
            >
              Tecnología, genética y acompañamiento para el productor ganadero
            </h2>
            <p
              style={{
                color: "#4a5e52",
                fontSize: 15,
                lineHeight: 1.8,
                marginBottom: 32,
              }}
            >
              CIGAC integra biotecnología reproductiva, genética bovina y asesoría técnica para ayudar a fincas y empresas agropecuarias a mejorar su productividad de forma estratégica. Nuestro equipo combina formación científica con experiencia de campo para ofrecer soluciones reales.
            </p>

            {/* Benefits list */}
            <ul className="flex flex-col gap-3">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    style={{ color: "#c8a84b", marginTop: 2, flexShrink: 0 }}
                  />
                  <span style={{ color: "#1a2e20", fontSize: 15, lineHeight: 1.5 }}>{b}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contacto"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginTop: 36,
                background: "#1a2e20",
                color: "#fff",
                fontSize: 14,
                fontWeight: 600,
                padding: "13px 26px",
                borderRadius: 5,
              }}
              className="hover:opacity-90 transition-opacity"
            >
              Conocer más sobre CIGAC
            </a>
          </div>

          {/* Image block */}
          <div className="relative">
            <div
              style={{
                borderRadius: 12,
                overflow: "hidden",
                boxShadow: "0 24px 60px rgba(26,46,32,0.18)",
                aspectRatio: "4/3",
              }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1614935151651-0bea6508db6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbnRpZmljJTIwbGFib3JhdG9yeSUyMGJpb3RlY2hub2xvZ3klMjByZXNlYXJjaHxlbnwxfHx8fDE3ODExNTMxNjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Científico trabajando en laboratorio de biotecnología"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Accent badge */}
            <div
              style={{
                position: "absolute",
                bottom: -20,
                left: -20,
                background: "#1a2e20",
                border: "3px solid #c8a84b",
                borderRadius: 10,
                padding: "16px 20px",
                boxShadow: "0 12px 32px rgba(0,0,0,0.25)",
              }}
            >
              <p style={{ color: "#c8a84b", fontSize: 24, fontWeight: 700 }}>FIV</p>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 12 }}>Fertilización In Vitro</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

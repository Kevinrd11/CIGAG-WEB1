import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, MessageCircle } from "lucide-react";

export function CTAFinal() {
  return (
    <section
      style={{ position: "relative", overflow: "hidden", padding: "96px 0" }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1581594549595-35f6edc7b762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzY2llbnRpZmljJTIwbGFib3JhdG9yeSUyMGJpb3RlY2hub2xvZ3klMjByZXNlYXJjaHxlbnwxfHx8fDE3ODExNTMxNjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Laboratorio de biotecnología"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.22)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(26,46,32,0.9) 0%, rgba(30,58,74,0.85) 100%)" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span
          style={{
            color: "#c8a84b",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 2.5,
            textTransform: "uppercase",
            display: "block",
            marginBottom: 16,
          }}
        >
          Comience hoy
        </span>
        <h2
          style={{
            color: "#ffffff",
            fontSize: "clamp(28px, 4.5vw, 48px)",
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: -0.5,
            marginBottom: 20,
          }}
        >
          ¿Desea mejorar la genética de su hato?
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "clamp(14px, 2vw, 17px)",
            lineHeight: 1.75,
            maxWidth: 580,
            margin: "0 auto 40px",
          }}
        >
          Conversemos sobre los objetivos productivos de su finca y preparemos una estrategia genética a la medida.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#contacto"
            style={{
              background: "linear-gradient(135deg, #c8a84b, #a07a28)",
              color: "#fff",
              fontSize: 15,
              fontWeight: 600,
              padding: "15px 32px",
              borderRadius: 5,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
            className="hover:opacity-90 transition-opacity"
          >
            Solicitar asesoría <ArrowRight size={16} />
          </a>
          <a
            href="https://wa.me/573000000000"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#25D366",
              color: "#fff",
              fontSize: 15,
              fontWeight: 600,
              padding: "15px 32px",
              borderRadius: 5,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
            className="hover:opacity-90 transition-opacity"
          >
            <MessageCircle size={16} />
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

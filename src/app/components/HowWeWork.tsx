const steps = [
  {
    num: "01",
    title: "Diagnóstico de la finca",
    desc: "Evaluamos el estado actual del hato, los objetivos productivos y las condiciones ambientales para diseñar la estrategia correcta.",
  },
  {
    num: "02",
    title: "Selección genética",
    desc: "Identificamos los reproductores y donantes ideales según su orientación productiva: leche, carne o doble propósito.",
  },
  {
    num: "03",
    title: "Plan reproductivo",
    desc: "Diseñamos un programa de FIV, TE o inseminación adaptado a su capacidad operativa y metas productivas.",
  },
  {
    num: "04",
    title: "Implementación técnica",
    desc: "Nuestro equipo veterinario ejecuta los procedimientos con tecnología de laboratorio y protocolos científicamente validados.",
  },
  {
    num: "05",
    title: "Seguimiento de resultados",
    desc: "Monitoreamos preñeces, nacimientos y el desempeño genético de la nueva generación para ajustar continuamente.",
  },
];

export function HowWeWork() {
  return (
    <section
      style={{ backgroundColor: "#ffffff", padding: "96px 0" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
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
            Proceso de trabajo
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
            Cómo trabajamos
          </h2>
        </div>

        {/* Steps — desktop timeline / mobile stack */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div
            className="hidden lg:block absolute top-10 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, #c8a84b44, #c8a84b, #c8a84b44, transparent)" }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left relative">
                {/* Number bubble */}
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "#1a2e20",
                    border: "3px solid #c8a84b",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                    zIndex: 1,
                    position: "relative",
                  }}
                >
                  <span style={{ color: "#c8a84b", fontSize: 13, fontWeight: 700 }}>{step.num}</span>
                </div>

                <h3 style={{ color: "#1a2e20", fontSize: 15, fontWeight: 700, marginBottom: 8 }}>
                  {step.title}
                </h3>
                <p style={{ color: "#5a6a5e", fontSize: 13, lineHeight: 1.7 }}>
                  {step.desc}
                </p>

                {/* Mobile connector */}
                {i < steps.length - 1 && (
                  <div
                    className="lg:hidden w-px mt-6"
                    style={{ height: 0, border: "none" }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = ["Inicio", "Servicios", "Catálogo Genético", "Laboratorio", "Nosotros", "Contacto"];
const serviceLinks = ["Fertilización In Vitro", "Transferencia de Embriones", "Embriones Sexados", "Venta de Semen", "Pruebas de ADN", "Asesoría Genética"];

export function Footer() {
  return (
    <footer
      id="contacto"
      style={{ backgroundColor: "#101e15", borderTop: "1px solid rgba(200,168,75,0.2)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div
                style={{ background: "linear-gradient(135deg, #c8a84b, #a07a28)", width: 36, height: 36, borderRadius: 6 }}
                className="flex items-center justify-center shrink-0"
              >
                <span style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>CIG</span>
              </div>
              <div>
                <p style={{ color: "#c8a84b", fontSize: 18, fontWeight: 700, letterSpacing: 2 }}>CIGAC</p>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 9, letterSpacing: 1.5, textTransform: "uppercase" }}>Genética Bovina</p>
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, lineHeight: 1.8, marginBottom: 20 }}>
              Centro de Investigación en Genética y Asistencia de Campos. Biotecnología reproductiva bovina para fincas y empresas agropecuarias.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    width: 34,
                    height: 34,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 6,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.5)",
                  }}
                  className="hover:border-amber-500/50 hover:text-amber-400 transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p style={{ color: "#ffffff", fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
              Navegación
            </p>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    style={{ color: "rgba(255,255,255,0.5)", fontSize: 13 }}
                    className="hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p style={{ color: "#ffffff", fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
              Servicios
            </p>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#servicios"
                    style={{ color: "rgba(255,255,255,0.5)", fontSize: 13 }}
                    className="hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{ color: "#ffffff", fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
              Contacto
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Phone size={14} style={{ color: "#c8a84b", marginTop: 2, flexShrink: 0 }} />
                <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 13 }}>+57 300 000 0000</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} style={{ color: "#c8a84b", marginTop: 2, flexShrink: 0 }} />
                <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 13 }}>info@cigac.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} style={{ color: "#c8a84b", marginTop: 2, flexShrink: 0 }} />
                <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 13 }}>Colombia · Venezuela · México</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "16px 0" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 12 }}>
            © 2026 CIGAC — Todos los derechos reservados
          </p>
          <div className="flex gap-6">
            {["Privacidad", "Términos", "Cookies"].map((item) => (
              <a key={item} href="#" style={{ color: "rgba(255,255,255,0.3)", fontSize: 12 }} className="hover:text-white/60 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

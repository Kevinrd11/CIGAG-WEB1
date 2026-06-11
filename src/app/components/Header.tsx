import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Catálogo Genético", href: "#catalogo" },
  { label: "Laboratorio", href: "#laboratorio" },
  { label: "Resultados", href: "#resultados" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      style={{ backgroundColor: "#1a2e20", borderBottom: "1px solid rgba(200,168,75,0.25)" }}
      className="fixed top-0 left-0 right-0 z-50 w-full"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 shrink-0">
          <div
            style={{ background: "linear-gradient(135deg, #c8a84b, #a07a28)", width: 38, height: 38 }}
            className="rounded flex items-center justify-center shrink-0"
          >
            <span style={{ color: "#fff", fontSize: 13, fontWeight: 700, letterSpacing: 1 }}>CIG</span>
          </div>
          <div className="flex flex-col leading-none">
            <span style={{ color: "#c8a84b", fontSize: 18, fontWeight: 700, letterSpacing: 2 }}>CIGAC</span>
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 9, letterSpacing: 1.5, textTransform: "uppercase" }}>
              Genética Bovina
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{ color: "rgba(255,255,255,0.75)", fontSize: 13, letterSpacing: 0.3 }}
              className="hover:text-white transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#contacto"
          style={{
            background: "linear-gradient(135deg, #c8a84b, #a07a28)",
            color: "#fff",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: 0.5,
            padding: "9px 20px",
            borderRadius: 4,
          }}
          className="hidden lg:inline-flex items-center gap-2 shrink-0 whitespace-nowrap hover:opacity-90 transition-opacity"
        >
          Solicitar asesoría
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ color: "rgba(255,255,255,0.8)" }}
          className="lg:hidden p-1"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ backgroundColor: "#15261a", borderTop: "1px solid rgba(200,168,75,0.2)" }} className="lg:hidden">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{ color: "rgba(255,255,255,0.8)", fontSize: 14, padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                className="block"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              style={{
                background: "linear-gradient(135deg, #c8a84b, #a07a28)",
                color: "#fff",
                fontSize: 14,
                fontWeight: 600,
                padding: "11px 0",
                borderRadius: 4,
                textAlign: "center",
                marginTop: 12,
              }}
              className="block"
            >
              Solicitar asesoría
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

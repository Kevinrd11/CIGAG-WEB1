import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <>
      <style>{`
        .cigac-wa-btn {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 100;
          display: flex;
          align-items: center;
          gap: 0px;
          background: #25D366;
          color: #fff;
          border-radius: 50px;
          padding: 14px;
          box-shadow: 0 6px 24px rgba(37,211,102,0.45);
          transition: padding 0.3s ease, gap 0.3s ease;
          text-decoration: none;
          overflow: hidden;
          max-width: 52px;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .cigac-wa-btn:hover {
          padding: 14px 20px;
          max-width: 180px;
          gap: 10px;
        }
        .cigac-wa-btn .cigac-wa-label {
          font-size: 14px;
          font-weight: 600;
          max-width: 0;
          overflow: hidden;
          opacity: 0;
          transition: all 0.3s ease;
        }
        .cigac-wa-btn:hover .cigac-wa-label {
          max-width: 100px;
          opacity: 1;
        }
      `}</style>
      <a
        href="https://wa.me/573000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="cigac-wa-btn"
      >
        <MessageCircle size={22} style={{ flexShrink: 0 }} />
        <span className="cigac-wa-label">WhatsApp</span>
      </a>
    </>
  );
}

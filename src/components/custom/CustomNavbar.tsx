import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import { cls } from "@/lib/utils";

interface CustomNavbarProps {
  logo: string;
  navItems: { name: string; href: string }[];
  ctaButton: { text: string; href: string };
}

const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, onClose: () => void) => {
  if (href.startsWith("#")) {
    e.preventDefault();
    const element = document.getElementById(href.slice(1));
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  onClose();
};

export default function CustomNavbar({ logo, navItems, ctaButton }: CustomNavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const whatsappPhone = "34604250250";
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent("Hola Renexa, me gustaría solicitar información.")}`;

  return (
    <>
      <nav data-section="navbar" className="absolute inset-x-0 top-0 z-[1000] pointer-events-none">
        <div className="absolute z-10 top-5 left-1/2 -translate-x-1/2 flex items-center justify-between w-content-width pointer-events-auto">
          {/* Logo with Brand Icon */}
          <a
            href="/"
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="size-10 rounded-xl bg-gradient-to-br from-[#c89bff] to-[#65417c] p-0.5 shadow-lg shadow-[#c89bff]/25 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#050012] rounded-[10px] flex items-center justify-center">
                <svg className="w-5 h-5 text-[#c89bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
            </div>
            <span className="text-2xl font-bold tracking-tight text-white group-hover:text-[#c89bff] transition-colors">
              {logo}
            </span>
          </a>

          <div className="flex items-center gap-2 xl:gap-3 2xl:gap-4">
            <Button text={ctaButton.text} href={ctaButton.href} variant="primary" animate={false} className="hidden sm:inline-flex text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2" />

            <div
              className="relative flex items-center justify-center size-9 rounded cursor-pointer primary-button"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span
                className={cls(
                  "absolute w-3 h-px bg-primary-cta-text transition-all duration-300",
                  menuOpen ? "rotate-45" : "-translate-y-1"
                )}
              />
              <span
                className={cls(
                  "absolute w-3 h-px bg-primary-cta-text transition-all duration-300",
                  menuOpen ? "-rotate-45" : "translate-y-1"
                )}
              />
            </div>
          </div>
        </div>

        <div
          className="fixed inset-0 flex flex-col items-center justify-center bg-[#050012] pointer-events-auto transition-[clip-path] duration-700 ease-[cubic-bezier(0.9,0,0.1,1)]"
          style={{
            clipPath: menuOpen
              ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
              : "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
          }}
        >
          <div className="flex flex-col items-center">
            {navItems.map((item, index) => (
              <div key={item.name} className="overflow-hidden">
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, () => setMenuOpen(false))}
                  className="group flex items-center gap-4 py-4"
                  style={{
                    transform: menuOpen ? "translateY(0%)" : "translateY(100%)",
                    transition: "transform 0.5s cubic-bezier(0.7, 0, 0.3, 1)",
                    transitionDelay: menuOpen
                      ? `${0.3 + index * 0.05}s`
                      : `${(navItems.length - 1 - index) * 0.05}s`
                  }}
                >
                  <span className="text-6xl md:text-8xl font-medium text-white group-hover:text-[#c89bff] transition-colors">
                    {item.name}
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-[9999] flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
        <span className="font-semibold text-sm hidden sm:inline">WhatsApp</span>
      </a>
    </>
  );
}

import FooterSimpleCard from '@/components/sections/footer/FooterSimpleCard';
import NavbarFullscreenStatic from '@/components/ui/NavbarFullscreenStatic';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Inicio",
    "href": "#hero"
  },
  {
    "name": "IA Automation",
    "href": "#features"
  },
  {
    "name": "Resultados",
    "href": "#metrics"
  },
  {
    "name": "Testimonios",
    "href": "#testimonials"
  },
  {
    "name": "Contacto",
    "href": "#contact"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Bento",
    "href": "#bento"
  }
];

  return (
    <StyleProvider buttonVariant="magnetic" siteBackground="gridDots" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFullscreenStatic
      logo="Renexa"
      ctaButton={{
        text: "Solicitar Demo",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimpleCard
      brand="Renexa"
      columns={[
        {
          title: "Servicios",
          items: [
            {
              label: "Automatización",
              href: "#features",
            },
            {
              label: "IA Asistentes",
              href: "#features",
            },
          ],
        },
        {
          title: "Compañía",
          items: [
            {
              label: "Nosotros",
              href: "#about",
            },
            {
              label: "Contacto",
              href: "#contact",
            },
          ],
        },
      ]}
      copyright="© 2024 Renexa. Todos los derechos reservados."
      links={[
        {
          label: "Privacidad",
          href: "#",
        },
        {
          label: "Términos",
          href: "#",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}

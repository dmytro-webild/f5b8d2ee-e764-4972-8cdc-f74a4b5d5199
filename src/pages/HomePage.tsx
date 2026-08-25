import AboutMediaOverlay from '@/components/sections/about/AboutMediaOverlay';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSimple from '@/components/sections/faq/FaqSimple';
import FeaturesMediaCarousel from '@/components/sections/features/FeaturesMediaCarousel';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MetricsSimpleCards from '@/components/sections/metrics/MetricsSimpleCards';
import TestimonialOverlayCards from '@/components/sections/testimonial/TestimonialOverlayCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboardCarousel
      tag="Renexa Innovación"
      title="Transforma tu empresa con IA e integración digital"
      description="Automatiza procesos complejos, predice ventas y escala sin límites. Desde diseño web hasta chatbots inteligentes, te llevamos a la transformación digital que necesitas."
      primaryButton={{
        text: "Solicitar demostración",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Ver casos de éxito",
        href: "#features",
      }}
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-accounting-sales-statistics-computer-display_482257-122982.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/server-room-worker-oversees-ai-systems-processing-information_482257-110575.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/positive-worker-dancing-having-fun-startup-office-enjoying-listening-music-work-break-african-american-executive-manager-doing-dance-moves-after-finishing-company-investment-strategy_482257-74335.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/futurism-perspective-digital-nomads-lifestyle_23-2151252523.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-it-professional-using-tablet-building-ai-algorithms_482257-100475.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/hands-multitasking-with-laptop-notebook_23-2149311907.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutMediaOverlay
      tag="Quiénes Somos"
      title="Partner Integral en Transformación Digital"
      description="Renexa no solo implementa herramientas; rediseñamos el futuro de tu empresa. Combinamos diseño web de alta conversión con tecnología de IA avanzada para que tú te enfoques en lo que más importa: hacer crecer tu negocio."
      imageSrc="http://img.b2bpic.net/free-photo/group-graphic-designers-working-computer_1170-2926.jpg"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesMediaCarousel
      tag="Soluciones"
      title="IA e Integración al Servicio de tu Crecimiento"
      description="Nuestros servicios escalables ayudan a empresas de todos los tamaños a operar con mayor inteligencia y eficiencia."
      items={[
        {
          title: "Automatización de Tareas",
          description: "Reduce costos operativos eliminando procesos manuales tediosos con IA.",
          buttonIcon: "Zap",
          imageSrc: "http://img.b2bpic.net/free-photo/team-technicians-data-center-using-laptop-visualize-ai_482257-106308.jpg",
        },
        {
          title: "Pronóstico de Ventas",
          description: "Predice tendencias de ingresos y optimiza inventarios con algoritmos precisos.",
          buttonIcon: "TrendingUp",
          imageSrc: "http://img.b2bpic.net/free-photo/young-general-manager-using-green-screen-evaluating-performance-metrics_482257-124506.jpg",
        },
        {
          title: "Asistentes IA Inteligentes",
          description: "Atención al cliente 24/7 y gestión de leads con chatbots de lenguaje natural.",
          buttonIcon: "MessageSquare",
          imageSrc: "http://img.b2bpic.net/free-photo/flowchart-information-methodology-operation-icon_53876-133778.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="bento" data-section="bento">
    <SectionErrorBoundary name="bento">
          <FeaturesRevealCardsBento
      tag="IA Especializada"
      title="9 Pilares para la Transformación Inteligente"
      description="Implementamos soluciones específicas adaptadas a tus objetivos operativos y comerciales."
      items={[
        {
          title: "Task Automation",
          description: "Flujos de trabajo autónomos para back-office.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-science-background-with-connecting-lines-dots_1048-13023.jpg",
        },
        {
          title: "Sales Forecasting",
          description: "Inteligencia de datos para predecir cierres.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-abstract-particle-background_1048-11982.jpg",
        },
        {
          title: "AI Assistants",
          description: "Atención personalizada con IA avanzada.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-system-administrators-data-center-using-devices_482257-120660.jpg",
        },
        {
          title: "Dynamic Pricing",
          description: "Precios ajustables en tiempo real según demanda.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/business-leader-trader-searching-new-investment-solution_482257-116895.jpg",
        },
        {
          title: "Smart Integrations",
          description: "Sistemas conectados para un flujo de trabajo fluido.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-person-relaxing-apartment-enjoying-film-laptop_482257-116359.jpg",
        },
        {
          title: "Realtime Monitoring",
          description: "Supervisión constante de rendimiento comercial.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/male-worker-holding-smartphone-with-horizontal-green-screen-business-office-young-adult-working-with-blank-chroma-key-isolated-template-with-mockup-background-mobile-phone-display_482257-40952.jpg",
        },
        {
          title: "Content Generation",
          description: "Contenido estratégico generado mediante prompts.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-robot-hand-holding-metal-3d-mechanical-gear_181624-58873.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsSimpleCards
      tag="ROI Comprobado"
      title="Impacto Medible para tu Negocio"
      description="Datos que demuestran la eficacia de nuestras implementaciones de IA."
      metrics={[
        {
          value: "40%",
          description: "Reducción en costos operativos",
        },
        {
          value: "3x",
          description: "Incremento en tasa de conversión",
        },
        {
          value: "24/7",
          description: "Disponibilidad de atención al cliente",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialOverlayCards
      tag="Clientes"
      title="Lo que dicen nuestros líderes"
      description="Historias de éxito de empresas que transformaron su operación con Renexa."
      testimonials={[
        {
          id: "1",
          name: "Sarah Johnson",
          role: "CEO",
          company: "RetailGrowth",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1674.jpg",
        },
        {
          id: "2",
          name: "Michael Chen",
          role: "CTO",
          company: "InnovateLog",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-male-entrepreneur-using-desktop-pc-while-working-office-there-are-people-background_637285-1037.jpg",
        },
        {
          id: "3",
          name: "Emily Rodriguez",
          role: "Ops Manager",
          company: "ServiceFlow",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/business-man-working-late-office_23-2148991380.jpg",
        },
        {
          id: "4",
          name: "David Kim",
          role: "Director",
          company: "EcommercePro",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/charming-girl-with-laptop-office_23-2147787594.jpg",
        },
        {
          id: "5",
          name: "Ana Sofia",
          role: "Strategy Lead",
          company: "MarketDynamics",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/general-manager-leverages-analytics-report-writing-corporate-development-forecast_482257-136465.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSimple
      tag="Preguntas"
      title="Dudas frecuentes"
      description="Todo lo que necesitas saber antes de empezar tu transformación."
      items={[
        {
          question: "¿Es muy difícil integrar la IA?",
          answer: "Diseñamos sistemas que se integran de forma fluida con tus herramientas actuales sin disrupción.",
        },
        {
          question: "¿Qué tipo de soporte ofrecen?",
          answer: "Brindamos soporte técnico continuo y entrenamiento para tu equipo durante todo el proceso.",
        },
        {
          question: "¿Cómo se mide el éxito?",
          answer: "Definimos KPIs claros desde el inicio para asegurar un ROI positivo y medible.",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Contacto"
      text="¿Listo para escalar tu empresa?"
      primaryButton={{
        text: "Solicitar demostración",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Hablar con consultor",
        href: "#contact",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}

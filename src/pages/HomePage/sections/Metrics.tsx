import React from 'react';
import { Clock, TrendingUp, ShieldCheck, BarChart3, Sparkles, ArrowUpRight } from 'lucide-react';
import TextAnimation from '@/components/ui/TextAnimation';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';

export default function MetricsSection(): React.JSX.Element {
  const metrics = [
    {
      icon: Clock,
      value: "+120 hrs",
      title: "Horas de Trabajo Ahorradas",
      description: "Tiempo mensual recuperado por equipos al automatizar tareas administrativas y flujos de trabajo con IA.",
      highlight: true,
      badge: "Automatización IA",
    },
    {
      icon: TrendingUp,
      value: "65%",
      title: "Aumento de Eficiencia",
      description: "Aceleración en los tiempos de respuesta y ejecución de procesos operativos.",
      highlight: false,
    },
    {
      icon: ShieldCheck,
      value: "99.9%",
      title: "Precisión Operativa",
      description: "Eliminación de errores humanos en la captura y procesamiento de datos críticos.",
      highlight: false,
    },
    {
      icon: BarChart3,
      value: "3.5x",
      title: "Retorno de Inversión",
      description: "Recuperación estimada de la inversión en los primeros 6 meses de implementación.",
      highlight: false,
    },
  ];

  return (
    <section id="metrics" aria-label="Impacto Medible" className="bg-background relative overflow-hidden">
      <div className="flex flex-col mx-auto w-content-width">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="px-3 py-1 mb-1 text-sm card rounded w-fit flex items-center gap-2 text-foreground">
            <Sparkles className="size-4 text-primary-cta" />
            <span>Impacto Medible</span>
          </div>

          <TextAnimation
            text="Resultados reales impulsados por IA"
            variant="slide-up"
            gradientText={true}
            tag="h2"
            className="md:max-w-8/10 text-5xl md:text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance"
          />

          <TextAnimation
            text="Medimos el éxito en horas ahorradas, costos optimizados y procesos de negocio escalables."
            variant="slide-up"
            gradientText={false}
            tag="p"
            className="md:max-w-7/10 text-lg md:text-xl text-accent leading-snug text-center text-balance"
          />
        </div>

        {/* Metrics Grid */}
        <ScrollReveal variant="fade-blur">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <div
                  key={idx}
                  className={`flex flex-col justify-between p-6 xl:p-8 card rounded relative transition-all duration-300 hover:-translate-y-1 ${ metric.highlight ?'border-2 border-primary-cta/60 bg-secondary-cta/40 shadow-lg' : ''
                  }`}
                >
                  {metric.badge && (
                    <div className="absolute -top-3 right-4 px-3 py-0.5 text-xs font-semibold rounded primary-button text-primary-cta-text shadow-sm">
                      {metric.badge}
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg ${metric.highlight ?'primary-button text-primary-cta-text' : 'secondary-button text-secondary-cta-text'}`}>
                        <Icon className="size-6" strokeWidth={2} />
                      </div>
                      {metric.highlight && (
                        <span className="flex items-center text-xs font-medium text-primary-cta gap-1">
                          +Productividad <ArrowUpRight className="size-3" />
                        </span>
                      )}
                    </div>

                    <div className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-2">
                      {metric.value}
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {metric.title}
                    </h3>

                    <p className="text-sm text-accent leading-relaxed">
                      {metric.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Highlight Banner */}
        <ScrollReveal variant="slide-up">
          <div className="card rounded p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-primary-cta/30">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full primary-button shrink-0 hidden sm:flex">
                <Clock className="size-6 text-primary-cta-text" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground">
                  ¿Cuántas horas de trabajo manual podría ahorrar tu empresa?
                </h4>
                <p className="text-sm text-accent mt-1">
                  Evaluamos tus procesos actuales y estimamos el tiempo de trabajo que puedes redirigir a actividades de mayor valor.
                </p>
              </div>
            </div>
            <Button text="Calcula tu Ahorro" href="#contact" variant="primary" className="shrink-0" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
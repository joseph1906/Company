import { Cloud, ShieldCheck, Cpu, Headphones, Workflow, Smartphone } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    desc: "Migration, hébergement scalable et sauvegardes automatisées pour une continuité sans faille.",
    span: "md:col-span-2 md:row-span-2",
    featured: true,
  },
  {
    icon: ShieldCheck,
    title: "Cybersécurité",
    desc: "Audits, protection des endpoints et conformité RGPD.",
    span: "",
  },
  {
    icon: Workflow,
    title: "Automatisation",
    desc: "Workflows intelligents qui éliminent les tâches répétitives.",
    span: "",
  },
  {
    icon: Cpu,
    title: "Logiciels sur-mesure",
    desc: "Applications web internes pensées pour vos process réels.",
    span: "md:col-span-2",
  },
  {
    icon: Headphones,
    title: "Support 7j/7",
    desc: "Une équipe humaine, joignable, qui parle votre langue.",
    span: "",
  },
  {
    icon: Smartphone,
    title: "Mobilité",
    desc: "MDM, déploiement de flottes et apps métier mobile-first.",
    span: "",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <span className="text-sm uppercase tracking-[0.2em] text-accent">Services</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
            Une boîte à outils complète, <span className="text-gradient">au service de votre quotidien.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(220px,_auto)] gap-5">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className={`glass glow-border rounded-3xl p-7 md:p-8 group hover:-translate-y-1 transition-all duration-500 shadow-soft relative overflow-hidden ${s.span}`}
              >
                {s.featured && (
                  <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-gradient-primary opacity-20 blur-3xl group-hover:opacity-30 transition-opacity" />
                )}
                <div className="relative flex flex-col h-full">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary border border-border group-hover:bg-gradient-primary group-hover:border-transparent transition-all">
                    <Icon className="h-5 w-5 text-accent group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className={`mt-6 font-display font-semibold ${s.featured ? "text-3xl md:text-4xl" : "text-xl"}`}>
                    {s.title}
                  </h3>
                  <p className={`mt-3 text-muted-foreground leading-relaxed ${s.featured ? "text-base md:text-lg max-w-md" : "text-sm"}`}>
                    {s.desc}
                  </p>
                  {s.featured && (
                    <div className="mt-auto pt-8 flex items-center gap-2 text-sm text-accent font-medium">
                      Notre expertise phare →
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
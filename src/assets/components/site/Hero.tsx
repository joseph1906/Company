import heroImg from "@/assets/hero-network.jpg";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div
        className="absolute -top-32 right-0 w-[60%] h-[80%] opacity-50 pointer-events-none"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: "radial-gradient(ellipse at center, #000 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, #000 30%, transparent 70%)",
        }}
      />

      <div className="container relative">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-8">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span>Solutions IT pour le quotidien — depuis 2018</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight">
            Résolvons vos défis <span className="text-gradient">numériques</span> du quotidien.
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            NumériSolutions accompagne les PME et les équipes ambitieuses avec des
            solutions IT pragmatiques : infrastructure, automatisation, support
            réactif et logiciels sur-mesure.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:shadow-elevated transition-all"
            >
              Parlons de votre projet
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass text-foreground font-medium hover:bg-secondary transition-colors"
            >
              Découvrir nos services
            </a>
          </div>

          <dl className="mt-16 grid grid-cols-3 gap-6 max-w-xl">
            {[
              { k: "240+", v: "Projets livrés" },
              { k: "98%", v: "Clients satisfaits" },
              { k: "<2h", v: "Temps de réponse" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-3xl md:text-4xl font-semibold text-gradient">{s.k}</dt>
                <dd className="text-sm text-muted-foreground mt-1">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Hero;

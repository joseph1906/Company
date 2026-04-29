import { CheckCircle2 } from "lucide-react";

const points = [
  "Équipe française basée à Lyon, réactive et engagée",
  "Approche pragmatique : pas de sur-ingénierie",
  "Tarifs transparents, devis sous 48h",
  "Engagement de moyens & SLA contractuels",
];

const About = () => (
  <section id="about" className="py-24 relative">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="text-sm uppercase tracking-[0.2em] text-accent">À propos</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
            La technologie, <br /> au <span className="text-gradient">service des humains.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Fondée par des ingénieurs passionnés, NumériSolutions est née d'un constat simple :
            trop d'entreprises subissent leurs outils numériques au lieu d'en tirer parti.
            Notre mission, c'est de remettre l'IT à sa juste place — celle d'un levier discret,
            fluide et puissant.
          </p>

          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-foreground/90">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="glass rounded-3xl p-8 shadow-elevated relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gradient-primary opacity-30 blur-3xl" />
            <blockquote className="relative">
              <p className="font-display text-2xl md:text-3xl leading-snug">
                « En 6 semaines, ils ont automatisé ce qui nous prenait 3 jours par mois.
                Et le support est <span className="text-gradient">incomparable.</span> »
              </p>
              <footer className="mt-8 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center font-display font-semibold text-primary-foreground">
                  ML
                </div>
                <div>
                  <div className="font-medium">Marie Laurent</div>
                  <div className="text-sm text-muted-foreground">DAF, Atelier Verdier</div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;

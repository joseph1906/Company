const steps = [
  { n: "01", t: "Écoute & diagnostic", d: "Nous prenons le temps de comprendre vos enjeux, vos équipes et vos outils existants." },
  { n: "02", t: "Plan d'action clair", d: "Une feuille de route concrète, chiffrée, sans jargon — validée avec vous." },
  { n: "03", t: "Mise en œuvre agile", d: "Livraisons par itérations rapides pour mesurer la valeur dès les premières semaines." },
  { n: "04", t: "Accompagnement durable", d: "Support continu, formation et amélioration permanente de vos solutions." },
];

const Process = () => (
  <section id="process" className="py-24 relative">
    <div className="container">
      <div className="max-w-2xl mb-14">
        <span className="text-sm uppercase tracking-[0.2em] text-accent">Notre méthode</span>
        <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
          Un process <span className="text-gradient">limpide</span>, des résultats tangibles.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((s) => (
          <div key={s.n} className="glass rounded-3xl p-7 relative overflow-hidden hover:border-accent/40 transition-colors">
            <div className="font-display text-6xl font-semibold text-gradient opacity-90">{s.n}</div>
            <h3 className="mt-4 font-display text-xl font-semibold">{s.t}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;

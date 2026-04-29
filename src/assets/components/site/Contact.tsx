import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-24 relative">
    <div className="container">
      <div className="glass rounded-[2rem] p-10 md:p-16 relative overflow-hidden shadow-elevated">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-primary opacity-30 blur-3xl animate-pulse-glow" />

        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm uppercase tracking-[0.2em] text-accent">Contact</span>
            <h2 className="mt-4 font-display text-4xl md:text-6xl font-semibold leading-[1.05]">
              Prêt à simplifier <br /> votre <span className="text-gradient">quotidien IT</span> ?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              Échangeons 30 minutes — sans engagement — pour comprendre vos besoins
              et identifier les premiers gains rapides.
            </p>

            <div className="mt-10 space-y-4 text-sm">
              <a href="mailto:contact@numerisolutions.fr" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-4 w-4 text-accent" /> josephsajsawasawa@gmail.com
              </a>
              <a href="tel:+33400000000" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-4 w-4 text-accent" /> +243 977 853 370
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent" /> ULPGL GOMA, RDCongo
              </div>
            </div>
          </div>

          <form
            className="glass rounded-2xl p-7 space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-2 gap-4">
              <input className="w-full bg-secondary/60 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors" placeholder="Prénom" />
              <input className="w-full bg-secondary/60 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors" placeholder="Nom" />
            </div>
            <input className="w-full bg-secondary/60 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors" placeholder="Email professionnel" type="email" />
            <input className="w-full bg-secondary/60 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors" placeholder="Entreprise" />
            <textarea rows={4} className="w-full bg-secondary/60 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors resize-none" placeholder="Parlez-nous de votre besoin…" />
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:shadow-elevated transition-all"
            >
              Envoyer ma demande <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;

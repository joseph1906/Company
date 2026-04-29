import { Code2 } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border mt-12">
    <div className="container py-12 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
          <Code2 className="h-4 w-4 text-primary-foreground" />
        </span>
        <span className="font-display font-semibold">
          Numéri<span className="text-gradient">Solutions</span>
        </span>
      </div>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} NumériSolutions — Conçu avec rigueur à Goma.
      </p>
      <div className="flex gap-6 text-sm text-muted-foreground">
        <a href="#" className="hover:text-foreground transition-colors">Mentions légales</a>
        <a href="#" className="hover:text-foreground transition-colors">RGPD</a>
      </div>
    </div>
  </footer>
);

export default Footer;

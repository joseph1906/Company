import { Code2 } from "lucide-react";

const Navbar = () => {
  const links = [
    { label: "Services", href: "#services" },
    { label: "À propos", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="container mt-4">
        <nav className="glass rounded-full px-5 py-3 flex items-center justify-between shadow-soft">
          <a href="#" className="flex items-center gap-2 group">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
              <Code2 className="h-5 w-5 text-primary-foreground" />
            </span>
            <span className="font-display font-semibold text-lg tracking-tight">
              Numéri<span className="text-gradient">Solutions</span>
            </span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-foreground transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="text-sm font-medium px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90 transition-opacity"
          >
            Démarrer
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

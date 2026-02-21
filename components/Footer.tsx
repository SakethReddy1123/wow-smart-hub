import Link from "next/link";
import { Mail } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/franchise", label: "Franchise" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-wow-purple text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-heading text-lg font-bold text-white mb-4">
              WoW Smart Hub™
            </p>
            <p className="text-wow-pink/90 text-sm">
              Operated by BETAWOMEN LLP
            </p>
            <p className="text-white/80 text-sm mt-2">
              © 2026 WoW Smart Hub™
            </p>
          </div>
          <div>
            <p className="font-heading font-semibold mb-4">Contact</p>
            <a
              href="mailto:info@wowsmarthub.in"
              className="flex items-center gap-2 text-wow-pink hover:text-white transition mb-2"
            >
              <Mail size={18} />
              info@wowsmarthub.in
            </a>
            <a
              href="mailto:franchise@wowsmarthub.in"
              className="flex items-center gap-2 text-wow-pink hover:text-white transition"
            >
              <Mail size={18} />
              franchise@wowsmarthub.in
            </a>
          </div>
          <div>
            <p className="font-heading font-semibold mb-4">Quick Links</p>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

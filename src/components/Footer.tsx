import { Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ally-lopes-033411386",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/ally.llopez",
      label: "Instagram",
    },
    {
      icon: Mail,
      href: "mailto:ally.lopes24@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-sage/10 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo/Name */}
          <div>
            <h3 className="text-2xl font-bold font-outfit bg-gradient-to-r from-sky via-pink to-sage bg-clip-text text-transparent">
              ALLY LOPES
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              Computer Engineering Student | Creative Artist
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {quickLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-md hover:shadow-lg"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-border" />

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            <p>© 2024 Ally Lopes. All rights reserved.</p>
            <p className="mt-1">Designed & Developed by Ally Lopes</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

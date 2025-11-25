import { Mail, Phone, Linkedin, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ally.lopes24@gmail.com",
      href: "mailto:ally.lopes24@gmail.com",
      color: "sky",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9035446015",
      href: "tel:+919035446015",
      color: "pink",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "ally-lopes",
      href: "https://www.linkedin.com/in/ally-lopes-033411386",
      color: "sage",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@ally.llopez",
      href: "https://www.instagram.com/ally.llopez",
      color: "sky",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-sky/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-pink/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold font-outfit mb-4">
            Let's <span className="text-primary">Connect!</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky via-pink to-sage mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's Create Something Together!
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Contact Cards in Floating Layout */}
          <div className="relative mb-16">
            {/* Center Profile */}
            <div className={`flex justify-center mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-sky via-pink to-sage rounded-full p-1">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary">AL</span>
                  </div>
                </div>
                {/* Connecting lines decoration */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none">
                  <svg className="w-full h-full opacity-20" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-pink" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((contact, index) => (
                <Card
                  key={index}
                  className={`p-6 text-center hover-lift hover:shadow-xl transition-all duration-700 group ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 bg-${contact.color}/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <contact.icon className={`w-8 h-8 text-${contact.color}`} />
                  </div>
                  <h3 className="font-semibold mb-2">{contact.label}</h3>
                  <a
                    href={contact.href}
                    target={contact.label === "LinkedIn" || contact.label === "Instagram" ? "_blank" : undefined}
                    rel={contact.label === "LinkedIn" || contact.label === "Instagram" ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    {contact.value}
                  </a>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white shadow-colored-sky"
              onClick={() => window.location.href = "mailto:ally.lopes24@gmail.com"}
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-pink text-pink hover:bg-pink hover:text-white"
              onClick={() => window.location.href = "tel:+919035446015"}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

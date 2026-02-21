import Link from "next/link";
import { Sparkles, Coffee, Package, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export const metadata = {
  title: "Franchise | WoW Smart Hub | Women Powered Smart Community Kiosks",
  description:
    "Own a WoW Smart Hub franchise. Investment ₹10L–₹25L. Bloom, Rise & Signature models. Equipment, branding, training included.",
};

const models = [
  {
    name: "Bloom",
    investment: "₹10–12 Lakhs",
    description: "Compact community deployment. Key duplication, vending, cleaning, utility micro-services.",
    icon: Sparkles,
    color: "bg-wow-pink/30 text-wow-magenta",
  },
  {
    name: "Rise",
    investment: "₹15–18 Lakhs",
    description: "Everything in Bloom + Smart Coffee, Roti/Chapati machine, Quick-Serve Counter, Extended Retail.",
    icon: Coffee,
    color: "bg-wow-magenta/20 text-wow-magenta",
  },
  {
    name: "Signature",
    investment: "₹22–25 Lakhs",
    description: "Everything in Rise + Heavy-Duty Washing, Seating, Health Snack Bar, Juice Station, Premium Branding.",
    icon: Package,
    color: "bg-wow-purple/20 text-wow-purple",
  },
];

const includes = [
  "Equipment Setup",
  "Branding",
  "Training",
  "Vendor Network",
  "Operations Manual",
];

export default function FranchisePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.08%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
        <div className="container relative z-10 mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg max-w-4xl mx-auto">
            Own a Women-Powered Smart Business in Your Community
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-white/95 font-medium">
            Investment: <span className="text-wow-pink">₹10 Lakhs – ₹25 Lakhs</span>
          </p>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">
            Join a scalable, technology-enabled franchise model built for women entrepreneurs.
          </p>
        </div>
      </section>

      {/* Models: Bloom | Rise | Signature */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-wow-purple text-center mb-4">
            Choose Your Model
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Bloom · Rise · Signature — from compact kiosks to full-service hubs.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {models.map((model) => (
              <Card key={model.name} className="flex flex-col text-center">
                <CardHeader>
                  <div
                    className={`w-14 h-14 rounded-2xl ${model.color} flex items-center justify-center mx-auto mb-4`}
                  >
                    <model.icon size={28} />
                  </div>
                  <CardTitle className="text-xl">WoW Smart Hub – {model.name}</CardTitle>
                  <p className="font-semibold text-wow-purple text-lg mt-2">
                    {model.investment}
                  </p>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-gray-600">{model.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Includes */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-wow-pink/10 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-wow-purple text-center mb-12">
            What’s Included
          </h2>
          <ul className="flex flex-wrap justify-center gap-6 md:gap-10 max-w-3xl mx-auto">
            {includes.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-gray-800 font-medium"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-wow-magenta/20">
                  <CheckCircle2 className="text-wow-magenta" size={22} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Apply Now CTA */}
      <section className="py-16 md:py-24 bg-wow-purple text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ready to Own Your WoW Smart Hub?
          </h2>
          <p className="text-lg text-white/90 mb-10 max-w-xl mx-auto">
            Get in touch for franchise details, eligibility, and next steps.
          </p>
          <Button asChild size="lg" className="bg-white text-wow-purple hover:bg-white/90 shadow-soft">
            <Link href="/contact">Apply Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

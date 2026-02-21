import Link from "next/link";
import {
  Sparkles,
  Key,
  Bike,
  Coffee,
  Utensils,
  Shirt,
  Store,
  Users,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export const metadata = {
  title: "Services | WoW Smart Hub | Women Powered Smart Community Kiosks",
  description:
    "Explore Bloom, Rise, and Signature service formats. Smart kiosk services for communities: vending, cleaning, coffee, and more.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <section className="py-16 md:py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Three tiers designed for different community sizes and investment levels.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 space-y-20">
          {/* Bloom - detail */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Card>
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-wow-pink/30 flex items-center justify-center mb-4">
                  <Sparkles className="text-wow-magenta" size={28} />
                </div>
                <CardTitle className="text-2xl">WoW Smart Hub – Bloom</CardTitle>
                <p className="text-gray-600">
                  Ideal for compact community deployment. Core convenience services
                  that residents use every day.
                </p>
                <p className="font-semibold text-wow-purple text-lg mt-4">
                  Investment: ₹10–12 Lakhs
                </p>
              </CardHeader>
            </Card>
            <div>
              <h3 className="font-heading text-lg font-semibold text-wow-purple mb-4">
                Features
              </h3>
              <ul className="space-y-3">
                {[
                  { icon: Key, text: "Key Duplication" },
                  { icon: Shirt, text: "Helmet Cleaning & Sanitization" },
                  { icon: Shirt, text: "Shoe Cleaning & Polishing" },
                  { icon: Store, text: "Smart Snack Vending (₹5–₹50 range)" },
                  { icon: Bike, text: "Kids Bike Race Game Console" },
                  { icon: Store, text: "Mobile Cleaning & Accessories" },
                  { icon: Wrench, text: "Utility Micro Services Station" },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3">
                    <item.icon className="text-wow-magenta shrink-0" size={20} />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Rise - detail */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1">
              <h3 className="font-heading text-lg font-semibold text-wow-purple mb-4">
                Everything in Bloom, plus:
              </h3>
              <ul className="space-y-3">
                {[
                  { icon: Coffee, text: "Smart Coffee Machine" },
                  { icon: Utensils, text: "Automated Roti / Chapati Making Machine" },
                  { icon: Utensils, text: "Fresh Quick-Serve Counter" },
                  { icon: Store, text: "Extended Retail Display" },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3">
                    <item.icon className="text-wow-magenta shrink-0" size={20} />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="order-1 lg:order-2 border-wow-magenta/40">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-wow-magenta/20 flex items-center justify-center mb-4">
                  <Coffee className="text-wow-magenta" size={28} />
                </div>
                <CardTitle className="text-2xl">WoW Smart Hub – Rise</CardTitle>
                <p className="text-gray-600">
                  Expanded offering for larger communities with higher footfall.
                </p>
                <p className="font-semibold text-wow-purple text-lg mt-4">
                  Investment: ₹15–18 Lakhs
                </p>
              </CardHeader>
            </Card>
          </div>

          {/* Signature - detail */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Card>
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-wow-purple/20 flex items-center justify-center mb-4">
                  <Sparkles className="text-wow-purple" size={28} />
                </div>
                <CardTitle className="text-2xl">
                  WoW Smart Hub – Signature
                </CardTitle>
                <p className="text-gray-600">
                  Premium tier with full-service experience and premium branding.
                </p>
                <p className="font-semibold text-wow-purple text-lg mt-4">
                  Investment: ₹22–25 Lakhs
                </p>
              </CardHeader>
            </Card>
            <div>
              <h3 className="font-heading text-lg font-semibold text-wow-purple mb-4">
                Everything in Rise, plus:
              </h3>
              <ul className="space-y-3">
                {[
                  { icon: Shirt, text: "Commercial Heavy-Duty Washing Machine" },
                  { icon: Users, text: "Dedicated Seating Area" },
                  { icon: Store, text: "Health Snack Bar" },
                  { icon: Coffee, text: "Fresh Juice Station" },
                  { icon: Sparkles, text: "Premium Branding Layout" },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3">
                    <item.icon className="text-wow-purple shrink-0" size={20} />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-wow-pink/10">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-gray-700 mb-6">
            Ready to bring WoW Smart Hub to your community?
          </p>
          <Button asChild size="lg">
            <Link href="/franchise">Apply for Franchise</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

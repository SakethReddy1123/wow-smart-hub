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
  TrendingUp,
  Car,
  Briefcase,
  Wrench,
  ShoppingBag,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.08%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-60" />
        <div className="container relative z-10 mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg animate-fade-in max-w-4xl mx-auto">
            Smart Community Services. Women Powered.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto animate-slide-up">
            WoW Smart Hub™ is a technology-enabled, women-led smart kiosk
            ecosystem delivering everyday convenience services within residential
            communities.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button asChild size="lg" className="bg-white text-wow-purple hover:bg-white/90">
              <Link href="/franchise">Become a Franchise Partner</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-wow-purple">
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-wow-pink/10 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-wow-purple text-center mb-8">
            About WoW Smart Hub™
          </h2>
          <p className="max-w-3xl mx-auto text-center text-gray-700 text-lg leading-relaxed">
            WoW Smart Hub™ is a structured smart utility ecosystem operated under{" "}
            <strong>BETAWOMEN LLP</strong>. It enables women entrepreneurs to
            operate multi-service community kiosks within gated residential
            communities. The model combines retail convenience, technology
            monitoring and scalable franchise deployment.
          </p>
        </div>
      </section>

      {/* Service formats - 3 cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-wow-purple text-center mb-4">
            Service Formats
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose the tier that fits your community and investment capacity.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Bloom */}
            <Card className="flex flex-col">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-wow-pink/30 flex items-center justify-center mb-2">
                  <Sparkles className="text-wow-magenta" size={24} />
                </div>
                <CardTitle>WoW Smart Hub – Bloom</CardTitle>
                <p className="text-sm text-gray-600 mt-1">
                  Ideal for compact community deployment.
                </p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <Key size={16} className="text-wow-magenta shrink-0" />
                    Key Duplication
                  </li>
                  <li className="flex items-center gap-2">
                    <Shirt size={16} className="text-wow-magenta shrink-0" />
                    Helmet Cleaning & Sanitization
                  </li>
                  <li className="flex items-center gap-2">
                    <Shirt size={16} className="text-wow-magenta shrink-0" />
                    Shoe Cleaning & Polishing
                  </li>
                  <li className="flex items-center gap-2">
                    <Store size={16} className="text-wow-magenta shrink-0" />
                    Smart Snack Vending (₹5–₹50 range)
                  </li>
                  <li className="flex items-center gap-2">
                    <Bike size={16} className="text-wow-magenta shrink-0" />
                    Kids Bike Race Game Console
                  </li>
                  <li className="flex items-center gap-2">
                    <Store size={16} className="text-wow-magenta shrink-0" />
                    Mobile Cleaning & Accessories
                  </li>
                  <li className="flex items-center gap-2">
                    <Wrench size={16} className="text-wow-magenta shrink-0" />
                    Utility Micro Services Station
                  </li>
                </ul>
                <p className="mt-6 font-semibold text-wow-purple">
                  Investment: ₹10–12 Lakhs
                </p>
              </CardContent>
            </Card>

            {/* Rise */}
            <Card className="flex flex-col border-wow-magenta/40 ring-2 ring-wow-magenta/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-wow-magenta/20 flex items-center justify-center mb-2">
                  <Coffee className="text-wow-magenta" size={24} />
                </div>
                <CardTitle>WoW Smart Hub – Rise</CardTitle>
                <p className="text-sm text-gray-600 mt-1">
                  Includes everything in Bloom, plus:
                </p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <Coffee size={16} className="text-wow-magenta shrink-0" />
                    Smart Coffee Machine
                  </li>
                  <li className="flex items-center gap-2">
                    <Utensils size={16} className="text-wow-magenta shrink-0" />
                    Automated Roti / Chapati Making Machine
                  </li>
                  <li className="flex items-center gap-2">
                    <Utensils size={16} className="text-wow-magenta shrink-0" />
                    Fresh Quick-Serve Counter
                  </li>
                  <li className="flex items-center gap-2">
                    <Store size={16} className="text-wow-magenta shrink-0" />
                    Extended Retail Display
                  </li>
                </ul>
                <p className="mt-6 font-semibold text-wow-purple">
                  Investment: ₹15–18 Lakhs
                </p>
              </CardContent>
            </Card>

            {/* Signature */}
            <Card className="flex flex-col">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-wow-purple/20 flex items-center justify-center mb-2">
                  <Sparkles className="text-wow-purple" size={24} />
                </div>
                <CardTitle>WoW Smart Hub – Signature</CardTitle>
                <p className="text-sm text-gray-600 mt-1">
                  Includes everything in Rise, plus:
                </p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <Shirt size={16} className="text-wow-purple shrink-0" />
                    Commercial Heavy-Duty Washing Machine
                  </li>
                  <li className="flex items-center gap-2">
                    <Users size={16} className="text-wow-purple shrink-0" />
                    Dedicated Seating Area
                  </li>
                  <li className="flex items-center gap-2">
                    <Store size={16} className="text-wow-purple shrink-0" />
                    Health Snack Bar
                  </li>
                  <li className="flex items-center gap-2">
                    <Coffee size={16} className="text-wow-purple shrink-0" />
                    Fresh Juice Station
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles size={16} className="text-wow-purple shrink-0" />
                    Premium Branding Layout
                  </li>
                </ul>
                <p className="mt-6 font-semibold text-wow-purple">
                  Investment: ₹22–25 Lakhs
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg">
              <Link href="/services">View Full Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 md:py-24 bg-wow-purple text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose WoW Smart Hub™
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                <Users className="text-wow-pink" size={32} />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">
                Women Powered
              </h3>
              <p className="text-white/90 text-sm">
                Built by and for women entrepreneurs. Empowerment at the core.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                <Store className="text-wow-pink" size={32} />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">
                Community Focused
              </h3>
              <p className="text-white/90 text-sm">
                Services designed for gated communities and local convenience.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-wow-pink" size={32} />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">
                Scalable Franchise Model
              </h3>
              <p className="text-white/90 text-sm">
                Proven systems, training, and support for sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-wow-purple text-center mb-4">
            Coming Soon
          </h2>
          <p className="text-center text-gray-600 mb-12">
            We are expanding our ecosystem with new modules.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Store, label: "Rental Services Hub" },
              { icon: Car, label: "Community Car Share & Pooling" },
              { icon: Car, label: "Community Cab Aggregation" },
              { icon: Briefcase, label: "Semi-Skilled Job Placement Hub" },
              { icon: Wrench, label: "Home Services Coordination" },
              { icon: ShoppingBag, label: "Digital Community Marketplace" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-xl border border-wow-pink/30 bg-wow-pink/5 px-4 py-3"
              >
                <item.icon className="text-wow-magenta shrink-0" size={22} />
                <span className="font-medium text-gray-800">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-wow-pink/15 to-wow-purple text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Own a Women-Powered Smart Business in Your Community
          </h2>
          <p className="text-xl text-white/90 mb-6">
            Investment Range: <strong>₹10 Lakhs – ₹25 Lakhs</strong>
          </p>
          <ul className="flex flex-wrap justify-center gap-6 text-white/90 mb-10">
            <li>Equipment Setup</li>
            <li>Branding</li>
            <li>Training</li>
            <li>Vendor Network</li>
            <li>Operations Manual</li>
          </ul>
          <Button asChild size="lg" className="bg-white text-wow-purple hover:bg-white/90">
            <Link href="/franchise">Apply for Franchise</Link>
          </Button>
        </div>
      </section>

      {/* Testimonials / Impact */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-wow-purple text-center mb-12">
            Impact & Testimonials
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "WoW Smart Hub gave me the confidence to run my own business within my community. The training and support are exceptional.",
                author: "Community Partner, Bangalore",
              },
              {
                quote:
                  "Residents love the convenience—key duplication, snacks, and cleaning services right at the gate. It has become a daily stop.",
                author: "Society Manager, Pune",
              },
              {
                quote:
                  "A franchise model that truly empowers women. I am proud to be part of this vision and to serve my neighborhood.",
                author: "Franchise Owner, Hyderabad",
              },
            ].map((t, i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <Quote className="text-wow-pink mb-4" size={32} />
                  <p className="text-gray-700 italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                  <p className="text-sm font-medium text-wow-purple">{t.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

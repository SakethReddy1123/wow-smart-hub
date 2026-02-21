import { Users, Target, Heart, Building2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export const metadata = {
  title: "About | WoW Smart Hub | Women Powered Smart Community Kiosks",
  description:
    "Learn about WoW Smart Hub's mission, women empowerment vision, community impact, and parent company BETAWOMEN LLP.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="py-16 md:py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            About WoW Smart Hub™
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Women-powered smart kiosks for community convenience.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
            <Card>
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-wow-pink/30 flex items-center justify-center mb-4">
                  <Target className="text-wow-magenta" size={28} />
                </div>
                <CardTitle className="text-xl">Brand Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  WoW Smart Hub™ exists to bring smart, convenient services into
                  residential communities while creating sustainable entrepreneurship
                  opportunities. We combine technology-enabled kiosks with
                  women-led operations to deliver everyday utility—from key
                  duplication and vending to cleaning and quick-serve—right where
                  people live.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-wow-magenta/20 flex items-center justify-center mb-4">
                  <Users className="text-wow-magenta" size={28} />
                </div>
                <CardTitle className="text-xl">Women Empowerment Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Our model is designed by and for women entrepreneurs. We provide
                  equipment, branding, training, vendor networks, and operations
                  support so that women can own and run community kiosks with
                  confidence. Every WoW Smart Hub is an opportunity for financial
                  independence and community leadership.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
            <Card>
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-wow-purple/20 flex items-center justify-center mb-4">
                  <Heart className="text-wow-purple" size={28} />
                </div>
                <CardTitle className="text-xl">Community Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  WoW Smart Hubs serve gated communities with everyday convenience:
                  key duplication, helmet and shoe cleaning, snack vending, coffee,
                  quick-serve food, and utility micro-services. Residents get
                  time-saving services at their doorstep; communities gain a
                  reliable, women-run local business.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-wow-pink/30 flex items-center justify-center mb-4">
                  <Building2 className="text-wow-magenta" size={28} />
                </div>
                <CardTitle className="text-xl">Parent Company: BETAWOMEN LLP</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  WoW Smart Hub™ is operated under <strong>BETAWOMEN LLP</strong>,
                  a company committed to creating structured, scalable opportunities
                  for women in business. BETAWOMEN LLP oversees brand standards,
                  franchise operations, technology, and vendor partnerships to ensure
                  every WoW Smart Hub delivers quality and impact.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto text-center rounded-2xl bg-wow-pink/10 border border-wow-pink/30 p-8 md:p-12">
            <p className="font-heading text-lg font-semibold text-wow-purple mb-2">
              WoW Smart Hub™
            </p>
            <p className="text-gray-700">
              A structured smart utility ecosystem—technology-enabled, women-led,
              community-focused.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

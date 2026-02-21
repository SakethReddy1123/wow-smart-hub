import { Mail } from "lucide-react";

export const metadata = {
  title: "Contact | WoW Smart Hub | Women Powered Smart Community Kiosks",
  description:
    "Contact WoW Smart Hub for general enquiries or franchise opportunities. Email: info@wowsmarthub.in, franchise@wowsmarthub.in",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="py-16 md:py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Get in touch for general enquiries or franchise opportunities.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <div className="space-y-10">
            <div>
              <h2 className="font-heading text-xl font-semibold text-wow-purple mb-4">
                Email
              </h2>
              <a
                href="mailto:info@wowsmarthub.in"
                className="flex items-center gap-3 text-gray-700 hover:text-wow-magenta transition py-2"
              >
                <Mail className="text-wow-magenta shrink-0" size={24} />
                <span>info@wowsmarthub.in</span>
              </a>
            </div>
            <div>
              <h2 className="font-heading text-xl font-semibold text-wow-purple mb-4">
                Franchise Enquiries
              </h2>
              <a
                href="mailto:franchise@wowsmarthub.in"
                className="flex items-center gap-3 text-gray-700 hover:text-wow-magenta transition py-2"
              >
                <Mail className="text-wow-magenta shrink-0" size={24} />
                <span>franchise@wowsmarthub.in</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

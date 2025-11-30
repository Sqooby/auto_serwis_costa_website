import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-navy via-navy-dark to-navy text-white overflow-hidden">
      {/* Top Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-costa-blue via-costa-turquoise to-costa-green" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(30deg, transparent 48%, rgba(52, 152, 219, 0.2) 49%, rgba(52, 152, 219, 0.2) 51%, transparent 52%),
            linear-gradient(-30deg, transparent 48%, rgba(26, 188, 156, 0.2) 49%, rgba(26, 188, 156, 0.2) 51%, transparent 52%)
          `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container-custom mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-br from-costa-blue to-costa-turquoise rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-heading font-bold leading-tight">
                  AUTO SERVICE
                </span>
                <span className="text-sm font-heading font-semibold text-costa-blue">
                  COSTA
                </span>
              </div>
            </div>

            <p className="text-white/70 leading-relaxed">
              Zaufany serwis samochodowy w Rzeszowie. Fachowa diagnostyka,
              uczciwe ceny i perfekcyjna obsługa.
            </p>

            {/* Rating Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-4 h-4 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white font-heading font-bold">4.8/5</span>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6 flex items-center gap-2 text-white">
              <div className="w-1 h-6 bg-gradient-to-b from-costa-blue to-costa-turquoise rounded-full" />
              USŁUGI
            </h3>
            <ul className="space-y-3">
              {[
                {
                  href: "/uslugi#klimatyzacja",
                  label: "Serwis Klimatyzacji",
                  icon: "❄️",
                },
                {
                  href: "/uslugi#mechanika",
                  label: "Naprawy Mechaniczne",
                  icon: "🔧",
                },
                {
                  href: "/uslugi#diagnostyka",
                  label: "Diagnostyka Komputerowa",
                  icon: "💻",
                },
                { href: "/uslugi#opony", label: "Serwis Opon", icon: "🛞" },
              ].map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="group flex items-center gap-2 text-white/70 hover:text-costa-blue transition-colors"
                  >
                    <span className="transform group-hover:scale-110 transition-transform">
                      {service.icon}
                    </span>
                    <span>{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours Section */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6 flex items-center gap-2 text-white">
              <div className="w-1 h-6 bg-gradient-to-b from-costa-turquoise to-costa-green rounded-full" />
              GODZINY OTWARCIA
            </h3>
            <div className="space-y-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white/70 text-sm">
                    Poniedziałek - Piątek
                  </span>
                </div>
                <div className="flex items-center gap-2 text-costa-green font-heading font-bold">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>09:00 - 17:00</span>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white/70 text-sm">
                    Sobota - Niedziela
                  </span>
                </div>
                <div className="flex items-center gap-2 text-costa-red font-heading font-bold">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span>Nieczynne</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6 flex items-center gap-2 text-white">
              <div className="w-1 h-6 bg-gradient-to-b from-costa-green to-yellow-500 rounded-full" />
              KONTAKT
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+48880378675"
                  className="group flex items-start gap-3 text-white/70 hover:text-costa-blue transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-costa-blue/20 flex items-center justify-center group-hover:bg-costa-blue/30 transition-colors flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-costa-blue"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-white/50 mb-1">Telefon</div>
                    <div className="font-heading font-bold text-white group-hover:text-costa-blue">
                      880 378 675
                    </div>
                  </div>
                </a>
              </li>

              <li>
                <div className="flex items-start gap-3 text-white/70">
                  <div className="w-10 h-10 rounded-lg bg-costa-turquoise/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-costa-turquoise"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-white/50 mb-1">Adres</div>
                    <div className="text-white">
                      <p>Wandy Siemaszkowej 9</p>
                      <p>35-602 Rzeszów</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            {/* Quick Links */}
            <div className="mt-6 flex gap-3">
              <Link
                href="/kontakt"
                className="flex-1 text-center px-4 py-3 bg-gradient-to-r from-costa-blue to-costa-turquoise text-white font-heading font-semibold text-sm rounded-lg hover:shadow-lg hover:shadow-costa-blue/50 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Kontakt
              </Link>
              <Link
                href="/opinie"
                className="flex-1 text-center px-4 py-3 border-2 border-white/20 text-white font-heading font-semibold text-sm rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Opinie
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p className="text-center md:text-left">
            © {currentYear}{" "}
            <span className="text-white font-heading font-semibold">
              AUTO SERVICE COSTA
            </span>{" "}
            - Damian Paśko. Wszelkie prawa zastrzeżone.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/polityka-prywatnosci"
              className="hover:text-costa-blue transition-colors"
            >
              Polityka Prywatności
            </Link>
            <Link
              href="/regulamin"
              className="hover:text-costa-blue transition-colors"
            >
              Regulamin
            </Link>
            <Link
              href="/cookies"
              className="hover:text-costa-blue transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            name: "AUTO SERVICE COSTA - Damian Paśko",
            image: "https://autocosta.pl/hero-background.jpg",
            "@id": "https://autocosta.pl",
            url: "https://autocosta.pl",
            telephone: "+48880378675",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Wandy Siemaszkowej 9",
              addressLocality: "Rzeszów",
              postalCode: "35-602",
              addressCountry: "PL",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 50.052,
              longitude: 22.0335,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "09:00",
                closes: "17:00",
              },
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "55",
            },
          }),
        }}
      />
    </footer>
  );
}

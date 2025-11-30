import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section - Enhanced Design */}
      <section className="relative bg-navy text-white min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url(/images/muscular-car-service-worker-repairing-vehicle.jpg)",
              filter: "brightness(0.4) contrast(1.1)",
            }}
          />
          {/* Gradient Overlays for Depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/60" />

          {/* Technical Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                linear-gradient(rgba(52, 152, 219, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(52, 152, 219, 0.3) 1px, transparent 1px)
              `,
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          {/* Diagonal Accent Lines - Technical Precision */}
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
            <div
              className="absolute top-20 -right-32 w-96 h-1 bg-gradient-to-r from-transparent via-costa-blue to-transparent transform rotate-45 animate-pulse"
              style={{ animationDuration: "3s" }}
            />
            <div
              className="absolute top-40 -right-20 w-80 h-0.5 bg-gradient-to-r from-transparent via-costa-turquoise/50 to-transparent transform rotate-45"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="container-custom mx-auto px-4 py-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-8">
                {/* Premium Badge */}
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 animate-fade-in">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-5 h-5 text-yellow-400 fill-current animate-star-pulse"
                        style={{ animationDelay: `${star * 0.1}s` }}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-white font-heading font-bold text-lg">
                    4.8
                  </span>
                  <span className="text-white/80 text-sm">55 opinii</span>
                </div>

                {/* Main Heading with Technical Details */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-costa-blue font-mono text-sm tracking-wider animate-slide-in-left">
                    <div className="w-12 h-px bg-costa-blue" />
                    <span>PROFESSIONAL AUTO CARE</span>
                  </div>

                  <h1
                    className="font-heading font-bold leading-tight animate-slide-in-left"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <span className="block text-5xl md:text-6xl lg:text-7xl text-white mb-2">
                      AUTO SERVICE
                    </span>
                    <span className="block text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-costa-blue via-costa-turquoise to-costa-blue bg-clip-text text-transparent animate-gradient-x">
                      SERWIS KLIMATYZACJI
                    </span>
                    <span className="block text-3xl md:text-4xl lg:text-5xl text-white/90 mt-2">
                      Naprawy Mechaniczne
                    </span>
                  </h1>

                  <div
                    className="flex items-center gap-3 text-white/60 font-mono text-sm tracking-wider animate-slide-in-left"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>RZESZÓW, WANDY SIEMASZKOWEJ 9</span>
                  </div>
                </div>

                {/* Trust Statement */}
                <p
                  className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl animate-fade-in"
                  style={{ animationDelay: "0.6s" }}
                >
                  Zaufany warsztat mechaniczny z{" "}
                  <span className="text-costa-turquoise font-bold">
                    fachową diagnostyką
                  </span>
                  ,{" "}
                  <span className="text-costa-turquoise font-bold">
                    uczciwymi cenami
                  </span>{" "}
                  i{" "}
                  <span className="text-costa-turquoise font-bold">
                    perfekcyjną obsługą
                  </span>
                </p>

                {/* CTA Buttons */}
                <div
                  className="flex flex-col sm:flex-row gap-4 animate-slide-in-up"
                  style={{ animationDelay: "0.8s" }}
                >
                  <a
                    href="tel:+48880378675"
                    className="group relative px-8 py-4 bg-gradient-to-r from-costa-green to-green-600 text-white font-heading font-bold text-lg rounded-lg overflow-hidden shadow-2xl hover:shadow-costa-green/50 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <div className="relative flex items-center justify-center gap-3">
                      <svg
                        className="w-6 h-6 animate-phone-ring"
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
                      <span>880 378 675</span>
                    </div>
                  </a>

                  <Link
                    href="/kontakt"
                    className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-heading font-bold text-lg rounded-lg border-2 border-white/30 hover:bg-white hover:text-navy transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <span>UMÓW WIZYTĘ</span>
                      <svg
                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>

                {/* Scroll Indicator */}
                <div className="pt-8 animate-bounce-slow">
                  <a
                    href="#why-choose-us"
                    className="inline-flex flex-col items-center gap-2 text-white/60 hover:text-costa-blue transition-colors group"
                  >
                    <span className="text-xs font-mono tracking-wider">
                      PRZEWIŃ W DÓŁ
                    </span>
                    <svg
                      className="w-6 h-6 transform group-hover:translate-y-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right Side - Feature Highlights with Image */}
              <div className="lg:col-span-5 space-y-4 animate-slide-in-right">
                {/* Featured Workshop Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 group mb-6">
                  <div className="relative h-64">
                    <div
                      className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
                      style={{
                        backgroundImage:
                          "url(/images/happy-auto-repairman-his-colleague-communicating-while-working-together-workshop.jpg)",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white font-heading font-bold text-lg">
                        Profesjonalny Zespół
                      </p>
                      <p className="text-white/80 text-sm">
                        Doświadczenie i pasja w każdym działaniu
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature Cards */}
                {[
                  {
                    icon: "🔧",
                    title: "Fachowa Diagnostyka",
                    desc: "Nowoczesny sprzęt",
                  },
                  {
                    icon: "❄️",
                    title: "Serwis Klimatyzacji",
                    desc: "Wszystkie typy gazów",
                  },
                  {
                    icon: "✓",
                    title: "Uczciwe Ceny",
                    desc: "Bez ukrytych kosztów",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 hover:border-costa-blue/50 transition-all duration-300 transform hover:translate-x-2"
                    style={{ animationDelay: `${1.2 + index * 0.2}s` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-4xl transform group-hover:scale-110 transition-transform">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-heading font-bold text-lg mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-white/70 text-sm">{feature.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-costa-blue to-transparent" />
      </section>

      {/* Why Choose Us Section - Redesigned */}
      <section
        id="why-choose-us"
        className="relative section-padding bg-gradient-to-br from-light-gray via-white to-light-gray overflow-hidden"
      >
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-costa-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-costa-turquoise/5 rounded-full blur-3xl" />

        {/* Background Image - Subtle */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 opacity-5">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url(/images/happy-auto-repairman-his-colleague-communicating-while-working-together-workshop.jpg)",
            }}
          />
        </div>

        <div className="container-custom mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-costa-blue" />
              <span className="text-costa-blue font-mono text-sm tracking-wider uppercase">
                Zaufanie Naszych Klientów
              </span>
              <div className="w-12 h-px bg-costa-blue" />
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-navy">
              Dlaczego Klienci Wybierają{" "}
              <span className="text-costa-blue">COSTA</span>
            </h2>
            <p className="text-xl text-navy/70 max-w-2xl mx-auto">
              Prawdziwe opinie od prawdziwych klientów
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg
                    className="w-full h-full"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
                title: "Uczciwa i Rzetelna Obsługa",
                quote: "Nie zawyża kosztów, wszystko jasno wytłumaczy.",
                features: [
                  "Bez ukrytych opłat",
                  "Przejrzyste ceny",
                  "Jasna komunikacja",
                ],
                color: "costa-blue",
              },
              {
                icon: (
                  <svg
                    className="w-full h-full"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                ),
                title: "Fachowa Diagnostyka",
                quote:
                  "Jedyny mechanik, który prawidłowo zdiagnozował problem.",
                features: [
                  "Nowoczesny sprzęt",
                  "Trafna diagnoza",
                  "Rozwiązanie za 1 razem",
                ],
                color: "costa-turquoise",
              },
              {
                icon: (
                  <svg
                    className="w-full h-full"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                ),
                title: "Perfekcyjna Jakość",
                quote: "Wszystko solidnie, perfekcyjnie i na czas.",
                features: [
                  "Dbałość o szczegóły",
                  "Wysoka jakość",
                  "Terminowość",
                ],
                color: "yellow-500",
              },
              {
                icon: (
                  <svg
                    className="w-full h-full"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                ),
                title: "Wyjątkowa Obsługa",
                quote: "Wyjątkowe podejście do klienta za każdym razem.",
                features: [
                  "Przyjazna obsługa",
                  "Profesjonalizm",
                  "Klient na 1 miejscu",
                ],
                color: "costa-green",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-costa-blue/30"
              >
                {/* Colored Background Accent */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-${card.color}/10 rounded-full blur-2xl transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500`}
                />

                {/* Icon */}
                <div
                  className={`relative w-16 h-16 mb-6 text-${card.color} transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                >
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-heading font-bold mb-3 text-navy relative">
                  {card.title}
                </h3>

                {/* Quote */}
                <p className="text-navy/60 italic mb-6 text-sm leading-relaxed relative border-l-4 border-costa-blue/30 pl-4">
                  "{card.quote}"
                </p>

                {/* Features */}
                <ul className="space-y-2 relative">
                  {card.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-navy/80"
                    >
                      <svg
                        className={`w-4 h-4 flex-shrink-0 text-${card.color}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Decorative Corner Element */}
                <div className="absolute bottom-0 right-0 w-20 h-20 opacity-5 transform translate-x-4 translate-y-4">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="currentColor"
                      className={`text-${card.color}`}
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Gallery Section */}
      <section className="relative section-padding bg-white overflow-hidden">
        <div className="container-custom mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-costa-blue" />
              <span className="text-costa-blue font-mono text-sm tracking-wider uppercase">
                Nasz Warsztat
              </span>
              <div className="w-12 h-px bg-costa-blue" />
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-navy">
              Profesjonalne Zaplecze{" "}
              <span className="text-costa-blue">Techniczne</span>
            </h2>
            <p className="text-xl text-navy/70 max-w-2xl mx-auto">
              Nowoczesny sprzęt i doświadczony zespół - gwarancja najwyższej
              jakości usług
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image:
                  "/images/happy-auto-repairman-his-colleague-communicating-while-working-together-workshop.jpg",
                title: "Doświadczony Zespół",
                desc: "Fachowcy z pasją do motoryzacji",
              },
              {
                image: "/images/erik-mclean-hEELt_9YdiU-unsplash.jpg",
                title: "Nowoczesny Sprzęt",
                desc: "Najnowsze technologie diagnostyczne",
              },
              {
                image: "/images/pexels-avinashpatel-445399.jpg",
                title: "Dbałość o Szczegóły",
                desc: "Perfekcja w każdym działaniu",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-heading font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/90 text-sm">{item.desc}</p>
                  </div>

                  {/* Decorative Border */}
                  <div className="absolute inset-0 border-4 border-costa-blue/0 group-hover:border-costa-blue/50 transition-all duration-500 rounded-2xl" />
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { number: "15+", label: "Lat Doświadczenia" },
              { number: "2000+", label: "Zadowolonych Klientów" },
              { number: "4.8★", label: "Ocena Google" },
              { number: "100%", label: "Zaangażowania" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-light-gray to-white rounded-xl border-2 border-costa-blue/20 hover:border-costa-blue/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl md:text-5xl font-heading font-bold text-costa-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-navy/70 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Premium Redesign */}
      <section className="relative section-padding bg-navy text-white overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              radial-gradient(circle at 2px 2px, rgba(52, 152, 219, 0.5) 1px, transparent 0)
            `,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Diagonal Accent */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-costa-blue via-costa-turquoise to-costa-green" />

        <div className="container-custom mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-costa-blue" />
              <span className="text-costa-blue font-mono text-sm tracking-wider uppercase">
                Nasze Kompetencje
              </span>
              <div className="w-12 h-px bg-costa-blue" />
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Kompleksowe Usługi
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Profesjonalna opieka nad Twoim samochodem
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Serwis Klimatyzacji",
                desc: "Profesjonalny serwis klimatyzacji dla wszystkich typów pojazdów",
                image:
                  "/images/car-dashboard-radio-closeup-woman-sets-up-radio-while-driving-car.jpg",
                features: [
                  {
                    icon: "🔄",
                    text: "Uzupełnianie freonu (stary i nowy gaz)",
                  },
                  { icon: "🔍", text: "Wykrywanie nieszczelności" },
                  { icon: "🧼", text: "Czyszczenie i dezynfekcja" },
                  { icon: "🔧", text: "Wymiana sprężarki i podzespołów" },
                ],
                link: "/uslugi#klimatyzacja",
                gradient: "from-costa-blue to-costa-turquoise",
              },
              {
                title: "Naprawy Mechaniczne",
                desc: "Fachowe naprawy mechaniczne wszystkich marek i modeli",
                image: "/images/car-being-taking-care-workshop.jpg",
                features: [
                  { icon: "🔴", text: "Wymiana klocków i tarcz hamulcowych" },
                  { icon: "🛢️", text: "Wymiana oleju i filtrów" },
                  { icon: "⚡", text: "Naprawa rozrusznika i alternatora" },
                  { icon: "🔩", text: "Regeneracja bendiksa i zawieszenia" },
                ],
                link: "/uslugi#mechanika",
                gradient: "from-costa-turquoise to-costa-green",
              },
              {
                title: "Diagnostyka Komputerowa",
                desc: "Zaawansowana diagnostyka dla wszystkich typów pojazdów",
                image: "/images/erik-mclean-hEELt_9YdiU-unsplash.jpg",
                features: [
                  { icon: "📡", text: "Odczyt kodów błędów OBD-II" },
                  { icon: "🔬", text: "Analiza systemów pojazdu" },
                  { icon: "📊", text: "Testy wydajności" },
                  { icon: "⚙️", text: "Identyfikacja usterek" },
                ],
                link: "/uslugi#diagnostyka",
                gradient: "from-costa-turquoise to-costa-green400",
              },
              {
                title: "Serwis Opon i Kół",
                desc: "Kompleksowa obsługa opon i kół",
                image: "/images/pexels-maltelu-2244746.jpg",
                features: [
                  { icon: "🔄", text: "Wymiana opon sezonowych" },
                  { icon: "🆕", text: "Montaż nowych opon" },
                  { icon: "⚖️", text: "Wyważanie kół" },
                  { icon: "🔧", text: "Naprawa przebić" },
                ],
                link: "/uslugi#opony",
                gradient: "from-costa-green to-green-600",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-costa-blue/50 transition-all duration-500 hover:bg-white/10"
              >
                {/* Gradient Accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} rounded-t-2xl z-10`}
                />

                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                    style={{
                      backgroundImage: `url(${service.image})`,
                      filter: "brightness(0.7) contrast(1.1)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-heading font-bold mb-2 text-white">
                      {service.title}
                    </h3>
                    <p className="text-white/70">{service.desc}</p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-white/90"
                      >
                        <span className="text-2xl">{feature.icon}</span>
                        <span className="pt-1">{feature.text}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTAs */}
                  <div className="flex gap-3">
                    <Link
                      href={service.link}
                      className="flex-1 text-center px-6 py-3 bg-gradient-to-r from-costa-blue to-costa-turquoise text-white font-heading font-semibold rounded-lg hover:shadow-lg hover:shadow-costa-blue/50 transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                      Dowiedz się więcej
                    </Link>
                    <a
                      href="tel:+48880378675"
                      className="px-6 py-3 border-2 border-white/30 text-white font-heading font-semibold rounded-lg hover:bg-white hover:text-navy transition-all duration-300"
                    >
                      Zadzwoń
                    </a>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute bottom-4 right-4 w-24 h-24 opacity-5">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path
                      d="M0,100 L100,0 L100,100 Z"
                      fill="currentColor"
                      className="text-white"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-costa-green via-costa-turquoise to-costa-blue" />
      </section>

      {/* Reviews Section - Elegant Redesign */}
      <section className="section-padding bg-gradient-to-br from-light-gray via-white to-light-gray-medium relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-costa-blue/5 rounded-full blur-3xl" />

        <div className="container-custom mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-costa-blue" />
              <span className="text-costa-blue font-mono text-sm tracking-wider uppercase">
                Opinie Klientów
              </span>
              <div className="w-12 h-px bg-costa-blue" />
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-navy">
              Co Mówią Nasi <span className="text-costa-blue">Klienci</span>
            </h2>

            {/* Rating Summary */}
            <div className="inline-flex flex-col items-center gap-3 bg-white rounded-2xl shadow-xl p-8 border-2 border-costa-blue/20">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-8 h-8 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-navy mb-1">
                  4.8 / 5.0
                </div>
                <div className="text-navy/60">
                  Na podstawie 55 opinii Google
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                name: "Patryk Betlej",
                text: "Gorąco polecam! Wymiana hamulców, wymiana oleju, naprawa rozrusznika - wszystko wykonane perfekcyjnie.",
                rating: 5,
              },
              {
                name: "Łucja Hadam",
                text: "Wreszcie mechanik, któremu mogę zaufać. Trafna diagnoza, żadnych niepotrzebnych kosztów.",
                rating: 5,
              },
              {
                name: "Mariusz Jucha",
                text: "Perfekcyjnie i na czas. Najlepsze podejście do klienta, jakie kiedykolwiek doświadczyłem.",
                rating: 5,
              },
              {
                name: "Sylwester Nowak",
                text: "Bardzo dobra, szybka i profesjonalna obsługa. Polecam każdemu.",
                rating: 5,
              },
              {
                name: "Robert Kamiński",
                text: "Profesjonalne podejście, uczciwy mechanik. W końcu znalazłem kogoś, komu mogę zaufać.",
                rating: 5,
              },
              {
                name: "Anna Kowalska",
                text: "Szybko rozwiązał problem, który inni nie mogli naprawić. Świetna jakość obsługi.",
                rating: 5,
              },
            ].map((review, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border-2 border-transparent hover:border-costa-blue/30"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-navy/80 italic mb-4 leading-relaxed border-l-4 border-costa-blue/30 pl-4">
                  "{review.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-costa-blue to-costa-turquoise flex items-center justify-center text-white font-heading font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-navy">
                      {review.name}
                    </div>
                    <div className="text-sm text-navy/60">Klient Google</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/opinie"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-costa-blue to-costa-turquoise text-white font-heading font-bold text-lg rounded-lg shadow-xl hover:shadow-2xl hover:shadow-costa-blue/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span>Zobacz wszystkie 55 opinii Google</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner - Bold Design */}
      <section className="relative bg-gradient-to-br from-navy via-navy-dark to-navy text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(/images/car-being-taking-care-workshop.jpg)",
              filter: "brightness(0.3) contrast(1.1)",
            }}
          />
          <div className="absolute inset-0 bg-navy/80" />
        </div>

        {/* Animated Pattern Overlay */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(45deg, transparent 48%, rgba(52, 152, 219, 0.1) 49%, rgba(52, 152, 219, 0.1) 51%, transparent 52%),
              linear-gradient(-45deg, transparent 48%, rgba(26, 188, 156, 0.1) 49%, rgba(26, 188, 156, 0.1) 51%, transparent 52%)
            `,
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        {/* Glow Effects */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-costa-blue/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />

        <div className="container-custom mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-white">
              Potrzebujesz Naprawy lub Serwisu Klimatyzacji?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-2">
              Zadzwoń do nas już dziś po fachową obsługę
            </p>
            <div className="flex items-center justify-center gap-2 mb-8">
              <span className="text-yellow-400 text-2xl">★★★★★</span>
              <span className="text-xl font-bold">4.8/5</span>
              <span className="text-white/70">• 55 opinii</span>
            </div>

            <a
              href="tel:+48880378675"
              className="group inline-flex items-center gap-4 px-12 py-5 bg-gradient-to-r from-costa-green to-green-600 text-white font-heading font-bold text-xl rounded-xl shadow-2xl hover:shadow-costa-green/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <svg
                className="w-7 h-7 animate-phone-ring"
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
              <span>ZADZWOŃ: 880 378 675</span>
            </a>
          </div>
        </div>
      </section>

      {/* Location Section - Modern Design */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-costa-blue" />
              <span className="text-costa-blue font-mono text-sm tracking-wider uppercase">
                Nasza Lokalizacja
              </span>
              <div className="w-12 h-px bg-costa-blue" />
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-navy">
              Odwiedź Nasz <span className="text-costa-blue">Warsztat</span>
            </h2>
            <p className="text-xl text-navy/70">
              Wandy Siemaszkowej 9, 35-602 Rzeszów
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-4 ring-costa-blue/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.4!2d22.0335!3d50.052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfb2d0e6a8f91%3A0x0!2zNTDCsDAzJzA3LjIiTiAyMsKwMDInMDAuNiJF!5e0!3m2!1spl!2spl!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg
                      className="w-full h-full"
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
                  ),
                  title: "ADRES",
                  content: (
                    <>
                      <p className="text-navy/80 text-lg">
                        Wandy Siemaszkowej 9
                      </p>
                      <p className="text-navy/80 text-lg">35-602 Rzeszów</p>
                      <p className="text-navy/60 text-sm mt-2">
                        Plus Code: 223M+5C Rzeszów
                      </p>
                    </>
                  ),
                },
                {
                  icon: (
                    <svg
                      className="w-full h-full"
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
                  ),
                  title: "TELEFON",
                  content: (
                    <>
                      <a
                        href="tel:+48880378675"
                        className="text-3xl font-heading font-bold text-costa-blue hover:text-costa-turquoise transition-colors"
                      >
                        880 378 675
                      </a>
                      <p className="text-sm text-navy/60 mt-2">
                        (Kliknij, aby zadzwonić)
                      </p>
                    </>
                  ),
                },
                {
                  icon: (
                    <svg
                      className="w-full h-full"
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
                  ),
                  title: "GODZINY OTWARCIA",
                  content: (
                    <>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-navy/80">
                          Poniedziałek - Piątek:
                        </span>
                        <span className="font-heading font-bold text-costa-green">
                          09:00 - 17:00
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-navy/80">
                          Sobota - Niedziela:
                        </span>
                        <span className="font-heading font-bold text-costa-red">
                          Nieczynne
                        </span>
                      </div>
                    </>
                  ),
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white to-light-gray rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-costa-blue/30"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 text-costa-blue transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-lg mb-3 text-navy">
                        {item.title}
                      </h3>
                      <div>{item.content}</div>
                    </div>
                  </div>
                </div>
              ))}

              {/* CTA Buttons */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <a
                  href="https://www.google.com/maps/dir//Wandy+Siemaszkowej+9,+35-602+Rzesz%C3%B3w"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 bg-gradient-to-r from-costa-blue to-costa-turquoise text-white font-heading font-bold text-center rounded-lg hover:shadow-lg hover:shadow-costa-blue/50 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Nawiguj
                </a>
                <a
                  href="tel:+48880378675"
                  className="px-6 py-4 border-2 border-costa-blue text-costa-blue font-heading font-bold text-center rounded-lg hover:bg-costa-blue hover:text-white transition-all duration-300"
                >
                  Zadzwoń
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Premium Design */}
      <section className="section-padding bg-gradient-to-br from-light-gray via-white to-light-gray-medium relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-costa-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-costa-turquoise/5 rounded-full blur-3xl" />

        <div className="container-custom mx-auto max-w-4xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-costa-blue" />
              <span className="text-costa-blue font-mono text-sm tracking-wider uppercase">
                Napisz Do Nas
              </span>
              <div className="w-12 h-px bg-costa-blue" />
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-navy">
              Skontaktuj Się <span className="text-costa-blue">z Nami</span>
            </h2>
            <p className="text-xl text-navy/70">
              Masz pytanie? Wyślij nam wiadomość, a odpowiemy szybko
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-costa-blue/10">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-heading font-semibold mb-2 text-navy"
                >
                  Imię i nazwisko <span className="text-costa-red">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-4 border-2 border-light-gray-dark rounded-lg focus:outline-none focus:border-costa-blue focus:ring-4 focus:ring-costa-blue/20 transition-all duration-300 text-navy"
                  placeholder="Jan Kowalski"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block font-heading font-semibold mb-2 text-navy"
                  >
                    Telefon <span className="text-costa-red">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-4 border-2 border-light-gray-dark rounded-lg focus:outline-none focus:border-costa-blue focus:ring-4 focus:ring-costa-blue/20 transition-all duration-300 text-navy"
                    placeholder="123 456 789"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-heading font-semibold mb-2 text-navy"
                  >
                    Email <span className="text-costa-red">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-4 border-2 border-light-gray-dark rounded-lg focus:outline-none focus:border-costa-blue focus:ring-4 focus:ring-costa-blue/20 transition-all duration-300 text-navy"
                    placeholder="jan@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block font-heading font-semibold mb-2 text-navy"
                >
                  Wybierz usługę
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-4 border-2 border-light-gray-dark rounded-lg focus:outline-none focus:border-costa-blue focus:ring-4 focus:ring-costa-blue/20 transition-all duration-300 text-navy bg-white"
                >
                  <option value="">-- Wybierz --</option>
                  <option value="ac">Serwis Klimatyzacji</option>
                  <option value="mechanical">Naprawa Mechaniczna</option>
                  <option value="diagnostics">Diagnostyka</option>
                  <option value="tires">Serwis Opon</option>
                  <option value="other">Inne</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-heading font-semibold mb-2 text-navy"
                >
                  Wiadomość <span className="text-costa-red">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-4 border-2 border-light-gray-dark rounded-lg focus:outline-none focus:border-costa-blue focus:ring-4 focus:ring-costa-blue/20 transition-all duration-300 resize-none text-navy"
                  placeholder="Opisz problem z samochodem lub zadaj pytanie..."
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  required
                  className="mt-1 w-5 h-5 text-costa-blue border-2 border-light-gray-dark rounded focus:ring-costa-blue focus:ring-2"
                />
                <label
                  htmlFor="privacy"
                  className="text-sm text-navy/80 leading-relaxed"
                >
                  Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie
                  z polityką prywatności{" "}
                  <span className="text-costa-red">*</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-5 bg-gradient-to-r from-costa-blue to-costa-turquoise text-white font-heading font-bold text-lg rounded-lg shadow-xl hover:shadow-2xl hover:shadow-costa-blue/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                WYŚLIJ WIADOMOŚĆ
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

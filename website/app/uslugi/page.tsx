import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Usługi Auto Serwisu COSTA – Klimatyzacja, Mechanika, Diagnostyka | Rzeszów",
  description:
    "Pełna oferta: klimatyzacja, naprawy mechaniczne, diagnostyka komputerowa, wymiana opon. Profesjonalny serwis w Rzeszowie. ☎ 880 378 675",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero - Enhanced with Background Image */}
      <section className="relative bg-navy text-white min-h-[70vh] flex items-center overflow-hidden">
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

          {/* Diagonal Accent Lines */}
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
            <div
              className="absolute top-20 -right-32 w-96 h-1 bg-gradient-to-r from-transparent via-costa-blue to-transparent transform rotate-45 animate-pulse"
              style={{ animationDuration: "3s" }}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="container-custom mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center space-x-2 text-sm text-white/60 mb-6 animate-fade-in">
              <Link
                href="/"
                className="hover:text-costa-blue transition-colors"
              >
                Home
              </Link>
              <span>›</span>
              <span className="text-costa-blue">Usługi</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 text-costa-blue font-mono text-sm tracking-wider animate-slide-in-left">
                <div className="w-12 h-px bg-costa-blue" />
                <span>PROFESJONALNY SERWIS</span>
                <div className="w-12 h-px bg-costa-blue" />
              </div>

              <h1
                className="font-heading font-bold leading-tight animate-slide-in-left"
                style={{ animationDelay: "0.2s" }}
              >
                <span className="block text-5xl md:text-6xl lg:text-7xl text-white mb-2">
                  Nasze Usługi
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-costa-blue via-costa-turquoise to-costa-blue bg-clip-text text-transparent animate-gradient-x">
                  Kompleksowa Opieka
                </span>
              </h1>

              <p
                className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                nad Twoim samochodem z{" "}
                <span className="text-costa-turquoise font-bold">
                  fachową obsługą
                </span>{" "}
                i{" "}
                <span className="text-costa-turquoise font-bold">
                  najwyższą jakością
                </span>
              </p>
            </div>

            {/* CTA Button */}
            <div
              className="mt-8 animate-slide-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <a
                href="tel:+48880378675"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-costa-green to-green-600 text-white font-heading font-bold text-lg rounded-lg overflow-hidden shadow-2xl hover:shadow-costa-green/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <svg
                  className="w-6 h-6 relative animate-phone-ring"
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
                <span className="relative">ZADZWOŃ: 880 378 675</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-costa-blue to-transparent" />
      </section>

      {/* Service: A/C */}
      <section id="klimatyzacja" className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-4 ring-costa-blue/20 group h-96">
              <div
                className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
                style={{
                  backgroundImage:
                    "url(/images/car-dashboard-radio-closeup-woman-sets-up-radio-while-driving-car.jpg)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-5xl">❄️</span>
                  <h3 className="text-white font-heading font-bold text-2xl">
                    Klimatyzacja
                  </h3>
                </div>
                <p className="text-white/90 text-sm">
                  Profesjonalny serwis i diagnostyka
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Serwis Klimatyzacji
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Profesjonalny serwis klimatyzacji dla wszystkich typów pojazdów
                przy użyciu nowoczesnego sprzętu i wysokiej jakości czynników
                chłodniczych.
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-costa-blue flex items-center">
                    <span className="mr-2">❄️</span>
                    Uzupełnianie Freonu
                  </h3>
                  <ul className="space-y-2 text-gray-700 ml-8">
                    <li>• Stary gaz (R134a)</li>
                    <li>• Nowy gaz (R1234yf)</li>
                    <li>• Test szczelności przed uzupełnieniem</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-costa-blue flex items-center">
                    <span className="mr-2">🔍</span>
                    Wykrywanie Nieszczelności
                  </h3>
                  <ul className="space-y-2 text-gray-700 ml-8">
                    <li>• Testy z barwnikiem UV</li>
                    <li>• Elektroniczne wykrywanie przecieków</li>
                    <li>• Testy ciśnienia</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-costa-blue flex items-center">
                    <span className="mr-2">🧼</span>
                    Czyszczenie i Dezynfekcja
                  </h3>
                  <ul className="space-y-2 text-gray-700 ml-8">
                    <li>• Czyszczenie parownika</li>
                    <li>• Zabieg antybakteryjny</li>
                    <li>• Usuwanie nieprzyjemnych zapachów</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-costa-blue flex items-center">
                    <span className="mr-2">🔧</span>
                    Wymiana Podzespołów
                  </h3>
                  <ul className="space-y-2 text-gray-700 ml-8">
                    <li>• Naprawa/wymiana sprężarki</li>
                    <li>• Wymiana skraplacza</li>
                    <li>• Serwis zaworu rozprężnego</li>
                  </ul>
                </div>
              </div>

              <div className="bg-light-gray p-6 rounded-lg mb-6">
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-costa-blue flex-shrink-0 mt-1"
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
                  <div>
                    <p className="font-semibold mb-1">
                      Typowy czas wykonania: 1-2 godziny
                    </p>
                    <p className="text-gray-600">Cena: Zadzwoń po wycenę</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="tel:+48880378675" className="btn-call">
                  Zapytaj o Cenę
                </a>
                <Link href="/kontakt" className="btn-secondary">
                  Umów Wizytę
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service: Mechanical Repairs */}
      <section id="mechanika" className="section-padding bg-light-gray">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Naprawy Mechaniczne
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Fachowe naprawy mechaniczne wszystkich marek i modeli z
                zastosowaniem wysokiej jakości części i profesjonalnego
                wykonania.
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-costa-blue flex items-center">
                    <span className="mr-2">🔴</span>
                    Serwis Hamulców
                  </h3>
                  <ul className="space-y-2 text-gray-700 ml-8">
                    <li>• Wymiana klocków hamulcowych</li>
                    <li>• Wymiana/toczenie tarcz</li>
                    <li>• Wymiana płynu hamulcowego</li>
                    <li>• Serwis zacisków</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-costa-blue flex items-center">
                    <span className="mr-2">🛢️</span>
                    Olej i Filtry
                  </h3>
                  <ul className="space-y-2 text-gray-700 ml-8">
                    <li>• Wymiana oleju silnikowego</li>
                    <li>• Wymiana filtra oleju</li>
                    <li>• Serwis filtra powietrza</li>
                    <li>• Wymiana filtra kabinowego</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-costa-blue flex items-center">
                    <span className="mr-2">⚡</span>
                    Naprawy Elektryczne
                  </h3>
                  <ul className="space-y-2 text-gray-700 ml-8">
                    <li>• Naprawa rozrusznika</li>
                    <li>• Serwis alternatora</li>
                    <li>• Regeneracja bendiksa</li>
                    <li>• Testy akumulatora</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-costa-blue flex items-center">
                    <span className="mr-2">🔩</span>
                    Zawieszenie
                  </h3>
                  <ul className="space-y-2 text-gray-700 ml-8">
                    <li>• Wymiana amortyzatorów</li>
                    <li>• Wymiana sprężyn</li>
                    <li>• Wymiana tulei</li>
                    <li>• Serwis przegubów kulowych</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg mb-6">
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-costa-blue flex-shrink-0 mt-1"
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
                  <div>
                    <p className="font-semibold mb-1">
                      Czas wykonania: Zależy od zakresu prac
                    </p>
                    <p className="text-gray-600">Cena: Zadzwoń po wycenę</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="tel:+48880378675" className="btn-call">
                  Zapytaj o Cenę
                </a>
                <Link href="/kontakt" className="btn-secondary">
                  Umów Wizytę
                </Link>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-4 ring-costa-blue/20 group h-96 order-1 lg:order-2">
              <div
                className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
                style={{
                  backgroundImage:
                    "url(/images/sten-rademaker-UZUzvJEvKnI-unsplash.jpg",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-5xl">🔧</span>
                  <h3 className="text-white font-heading font-bold text-2xl">
                    Mechanika
                  </h3>
                </div>
                <p className="text-white/90 text-sm">
                  Nowoczesny sprzęt diagnostyczny
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service: Diagnostics */}
      <section id="diagnostyka" className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-4 ring-costa-blue/20 group h-96">
              <div
                className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
                style={{
                  backgroundImage:
                    "url(/images/erik-mclean-hEELt_9YdiU-unsplash.jpg",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-5xl">💻</span>
                  <h3 className="text-white font-heading font-bold text-2xl">
                    Diagnostyka
                  </h3>
                </div>
                <p className="text-white/90 text-sm">
                  Dbałość o każdy szczegół
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Diagnostyka Komputerowa
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Zaawansowana diagnostyka przy użyciu profesjonalnego sprzętu do
                dokładnej identyfikacji problemów z pojazdem.
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-costa-blue flex items-center">
                    <span className="mr-2">💻</span>
                    Skanowanie Diagnostyczne
                  </h3>
                  <ul className="space-y-2 text-gray-700 ml-8">
                    <li>• Odczyt kodów OBD-II</li>
                    <li>• Diagnostyka specyficzna dla producenta</li>
                    <li>• Monitoring danych na żywo</li>
                    <li>• Testy podzespołów</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-costa-blue flex items-center">
                    <span className="mr-2">🔍</span>
                    Analiza Systemów
                  </h3>
                  <ul className="space-y-2 text-gray-700 ml-8">
                    <li>• Zarządzanie silnikiem</li>
                    <li>• Systemy transmisji</li>
                    <li>• Systemy ABS/ESP</li>
                    <li>• Systemy poduszek powietrznych</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-costa-blue flex items-center">
                    <span className="mr-2">📊</span>
                    Testy Wydajności
                  </h3>
                  <ul className="space-y-2 text-gray-700 ml-8">
                    <li>• Testy czujników</li>
                    <li>• Testy siłowników</li>
                    <li>• Testy obwodów</li>
                    <li>• Testy kompresji</li>
                  </ul>
                </div>
              </div>

              <div className="bg-light-gray p-6 rounded-lg mb-6">
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-costa-blue flex-shrink-0 mt-1"
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
                  <div>
                    <p className="font-semibold mb-1">
                      Czas diagnostyki: 30-60 minut
                    </p>
                    <p className="text-gray-600">Cena: Zadzwoń po wycenę</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="tel:+48880378675" className="btn-call">
                  Zapytaj o Cenę
                </a>
                <Link href="/kontakt" className="btn-secondary">
                  Umów Wizytę
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service: Tires */}
      <section id="opony" className="section-padding bg-light-gray">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Serwis Opon i Kół
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Kompleksowe usługi związane z oponami i kołami, w tym zmiany
                sezonowe i wyważanie.
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-costa-blue flex items-center">
                    <span className="mr-2">🔄</span>
                    Sezonowa Wymiana Opon
                  </h3>
                  <ul className="space-y-2 text-gray-700 ml-8">
                    <li>• Zmiana opon letnie/zimowe</li>
                    <li>• Regulacja ciśnienia</li>
                    <li>• Kontrola wizualna</li>
                    <li>• Możliwość przechowania</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-costa-blue flex items-center">
                    <span className="mr-2">🆕</span>
                    Montaż Nowych Opon
                  </h3>
                  <ul className="space-y-2 text-gray-700 ml-8">
                    <li>• Montaż opon</li>
                    <li>• Wyważanie kół</li>
                    <li>• Wymiana wentyli</li>
                    <li>• Utylizacja starych opon</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-costa-blue flex items-center">
                    <span className="mr-2">⚖️</span>
                    Wyważanie Kół
                  </h3>
                  <ul className="space-y-2 text-gray-700 ml-8">
                    <li>• Wyważanie statyczne</li>
                    <li>• Wyważanie dynamiczne</li>
                    <li>• Optymalizacja ciężarków</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-costa-blue flex items-center">
                    <span className="mr-2">🔧</span>
                    Dodatkowe Usługi
                  </h3>
                  <ul className="space-y-2 text-gray-700 ml-8">
                    <li>• Monitoring ciśnienia w oponach</li>
                    <li>• Naprawa przebić</li>
                    <li>• Kontrola geometrii</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg mb-6">
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-costa-blue flex-shrink-0 mt-1"
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
                  <div>
                    <p className="font-semibold mb-1">
                      Czas wykonania: 30-60 minut
                    </p>
                    <p className="text-gray-600">Cena: Zadzwoń po wycenę</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="tel:+48880378675" className="btn-call">
                  Zapytaj o Cenę
                </a>
                <Link href="/kontakt" className="btn-secondary">
                  Umów Wizytę
                </Link>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-4 ring-costa-blue/20 group h-96 order-1 lg:order-2">
              <div
                className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
                style={{
                  backgroundImage: "url(/images/pexels-maltelu-2244746.jpg",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-5xl">🛞</span>
                  <h3 className="text-white font-heading font-bold text-2xl">
                    Serwis Opon
                  </h3>
                </div>
                <p className="text-white/90 text-sm">Kompleksowa obsługa kół</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="section-padding bg-gradient-to-r from-costa-blue to-costa-turquoise text-white">
        <div className="container-custom mx-auto text-center">
          <svg
            className="w-16 h-16 mx-auto mb-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h2 className="text-3xl font-heading font-bold mb-4">
            Informacja o Cenach
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Każdy samochód jest inny i zapewniamy uczciwe wyceny na podstawie
            Twoich konkretnych potrzeb. Zadzwoń do nas po dokładną wycenę.
          </p>
          <a
            href="tel:+48880378675"
            className="btn-call bg-white text-costa-blue hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6 inline-block mr-2"
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
            Zadzwoń: 880 378 675
          </a>
        </div>
      </section>
    </>
  );
}

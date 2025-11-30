import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt – Auto Serwis COSTA | Wandy Siemaszkowej 9, Rzeszów | ☎ 880 378 675',
  description: 'Skontaktuj się z nami: ☎ 880 378 675. Adres: Wandy Siemaszkowej 9, Rzeszów. Godziny: Pon-Pt 9:00-17:00. Sprawdź dojazd na mapie.',
}

export default function ContactPage() {
  return (
    <>
      {/* Page Hero - Enhanced with Background Image */}
      <section className="relative bg-navy text-white min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(/images/muscular-car-service-worker-repairing-vehicle.jpg)",
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
              <Link href="/" className="hover:text-costa-blue transition-colors">Home</Link>
              <span>›</span>
              <span className="text-costa-blue">Kontakt</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 text-costa-blue font-mono text-sm tracking-wider animate-slide-in-left">
                <div className="w-12 h-px bg-costa-blue" />
                <span>SKONTAKTUJ SIĘ</span>
                <div className="w-12 h-px bg-costa-blue" />
              </div>

              <h1
                className="font-heading font-bold leading-tight animate-slide-in-left"
                style={{ animationDelay: "0.2s" }}
              >
                <span className="block text-5xl md:text-6xl lg:text-7xl text-white mb-2">
                  Jesteśmy Tu
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-costa-blue via-costa-turquoise to-costa-blue bg-clip-text text-transparent animate-gradient-x">
                  Aby Ci Pomóc
                </span>
              </h1>

              <p
                className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                Zadzwoń, napisz lub odwiedź nas{" "}
                <span className="text-costa-turquoise font-bold">
                  osobiście
                </span>
                . Odpowiemy na wszystkie pytania
              </p>
            </div>

            {/* Quick Contact Info */}
            <div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8 animate-slide-in-up"
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
                <span className="relative">880 378 675</span>
              </a>

              <div className="text-white/80 font-mono text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Wandy Siemaszkowej 9, Rzeszów</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-costa-blue to-transparent" />
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Phone */}
            <div className="card text-center hover:border-costa-blue border-2 border-transparent">
              <div className="text-costa-blue mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-3">TELEFON</h3>
              <a
                href="tel:+48880378675"
                className="text-3xl font-bold text-costa-blue hover:text-costa-turquoise transition-colors block mb-2"
              >
                880 378 675
              </a>
              <p className="text-gray-600 mb-4">Kliknij, aby zadzwonić</p>
              <a href="tel:+48880378675" className="btn-primary text-sm">
                Zadzwoń Teraz
              </a>
            </div>

            {/* Address */}
            <div className="card text-center hover:border-costa-blue border-2 border-transparent">
              <div className="text-costa-blue mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-3">ADRES</h3>
              <p className="text-lg font-semibold mb-1">Wandy Siemaszkowej 9</p>
              <p className="text-lg font-semibold mb-2">35-602 Rzeszów</p>
              <p className="text-gray-600 mb-4">Plus Code: 223M+5C</p>
              <a
                href="https://www.google.com/maps/dir//Wandy+Siemaszkowej+9,+35-602+Rzesz%C3%B3w"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                Nawiguj
              </a>
            </div>

            {/* Hours */}
            <div className="card text-center hover:border-costa-blue border-2 border-transparent">
              <div className="text-costa-blue mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-3">GODZINY OTWARCIA</h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center max-w-xs mx-auto">
                  <span className="text-gray-700">Poniedziałek - Piątek:</span>
                  <span className="font-bold text-costa-green">09:00 - 17:00</span>
                </div>
                <div className="flex justify-between items-center max-w-xs mx-auto">
                  <span className="text-gray-700">Sobota - Niedziela:</span>
                  <span className="font-bold text-costa-red">Nieczynne</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Wyślij Nam Wiadomość
            </h2>
            <p className="text-lg text-gray-600">
              Masz pytanie? Wypełnij formularz, a odpowiemy szybko
            </p>
          </div>

          <div className="card">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-semibold mb-2 text-navy">
                    Imię i nazwisko *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="input-field"
                    placeholder="Jan Kowalski"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-semibold mb-2 text-navy">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="input-field"
                    placeholder="123 456 789"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block font-semibold mb-2 text-navy">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="input-field"
                  placeholder="jan@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block font-semibold mb-2 text-navy">
                  Wybierz usługę
                </label>
                <select id="service" name="service" className="input-field">
                  <option value="">-- Wybierz usługę --</option>
                  <option value="ac">Serwis Klimatyzacji</option>
                  <option value="mechanical">Naprawa Mechaniczna</option>
                  <option value="diagnostics">Diagnostyka Komputerowa</option>
                  <option value="tires">Serwis Opon</option>
                  <option value="general">Ogólne Pytanie</option>
                  <option value="other">Inne</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block font-semibold mb-2 text-navy">
                  Twoja wiadomość *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="input-field resize-none"
                  placeholder="Opisz swój problem z samochodem lub zadaj pytanie..."
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  required
                  className="mt-1 mr-3 w-4 h-4"
                />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z polityką prywatności. *
                </label>
              </div>

              <div className="pt-4">
                <button type="submit" className="btn-primary w-full text-lg">
                  Wyślij Wiadomość
                </button>
              </div>

              <p className="text-center text-sm text-gray-500">
                * Pola wymagane
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Znajdź Nas
            </h2>
            <p className="text-lg text-gray-600">
              Wandy Siemaszkowej 9, 35-602 Rzeszów
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className="h-96 lg:h-full min-h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.4!2d22.0335!3d50.052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfb2d0e6a8f91%3A0x0!2zNTDCsDAzJzA3LjIiTiAyMsKwMDInMDAuNiJF!5e0!3m2!1spl!2spl!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa lokalizacji AUTO SERVICE COSTA"
              />
            </div>

            {/* Directions & Parking */}
            <div className="space-y-6">
              <div className="card">
                <div className="flex items-start space-x-4">
                  <div className="text-costa-blue flex-shrink-0">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-3">Dojazd</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Z centrum Rzeszowa: Jedź ul. Dębicką</li>
                      <li>• Skręć w ul. Wandy Siemaszkowej</li>
                      <li>• Warsztat znajduje się po prawej stronie</li>
                      <li>• Plus Code: 223M+5C Rzeszów</li>
                    </ul>
                    <a
                      href="https://www.google.com/maps/dir//Wandy+Siemaszkowej+9,+35-602+Rzesz%C3%B3w"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary mt-4 inline-block text-sm"
                    >
                      Nawigacja GPS
                    </a>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start space-x-4">
                  <div className="text-costa-blue flex-shrink-0">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-3">Parking</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Bezpłatny parking przy warsztacie</li>
                      <li>• Dostępne miejsca parkingowe na ulicy</li>
                      <li>• Łatwy dostęp</li>
                      <li>• Parking bezpieczny i wygodny</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card bg-costa-blue text-white">
                <h3 className="font-heading font-bold text-xl mb-3">Informacje Dodatkowe</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Dogodna lokalizacja w Rzeszowie</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Łatwy dojazd z centrum miasta</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Bezpłatny parking dla klientów</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Nowoczesny wyposażony warsztat</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="section-padding bg-gradient-to-r from-costa-blue to-costa-turquoise text-white">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Potrzebujesz Szybkiej Pomocy?
          </h2>
          <p className="text-xl mb-8">
            Skontaktuj się z nami telefonicznie już teraz
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+48880378675" className="btn-call bg-white text-costa-blue hover:bg-gray-100">
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
            <a
              href="https://www.google.com/maps/dir//Wandy+Siemaszkowej+9,+35-602+Rzesz%C3%B3w"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary border-white text-white hover:bg-white hover:text-costa-blue"
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Nawiguj
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

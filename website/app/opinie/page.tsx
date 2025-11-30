import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Opinie Klientów Auto Serwisu COSTA ★4.8/5 | 55 Opinii Google | Rzeszów',
  description: 'Sprawdź 55 opinii zadowolonych klientów. Ocena 4.8/5 ★ na Google Maps. Uczciwy mechanik w Rzeszowie z najlepszymi opiniami.',
}

const reviews = [
  {
    id: 1,
    name: 'Patryk Betlej',
    rating: 5,
    date: 'Marzec 2024',
    text: 'Gorąco polecam! Wymiana hamulców, wymiana oleju, naprawa rozrusznika - wszystko wykonane perfekcyjnie z profesjonalną obsługą.',
    verified: true,
  },
  {
    id: 2,
    name: 'Łucja Hadam',
    rating: 5,
    date: 'Luty 2024',
    text: 'Wreszcie mechanik, któremu mogę zaufać. Trafna diagnoza za pierwszym razem, żadnych niepotrzebnych kosztów i jasne wytłumaczenie wszystkich prac.',
    verified: true,
  },
  {
    id: 3,
    name: 'Mariusz Jucha',
    rating: 5,
    date: 'Styczeń 2024',
    text: 'Perfekcyjna praca wykonana w umówionym terminie. Najlepsze podejście do klienta, jakie kiedykolwiek doświadczyłem. Zdecydowanie wrócę.',
    verified: true,
  },
  {
    id: 4,
    name: 'Sylwester Nowak',
    rating: 5,
    date: 'Marzec 2024',
    text: 'Bardzo dobra, szybka i profesjonalna obsługa. Polecam COSTA każdemu, kto szuka rzetelnego mechanika w Rzeszowie.',
    verified: true,
  },
  {
    id: 5,
    name: 'Robert Kamiński',
    rating: 5,
    date: 'Grudzień 2023',
    text: 'Profesjonalne podejście, uczciwy mechanik. Po wielu rozczarowaniach w końcu znalazłem kogoś, komu mogę zaufać ze swoim samochodem.',
    verified: true,
  },
  {
    id: 6,
    name: 'Anna Kowalska',
    rating: 5,
    date: 'Maj 2023',
    text: 'Moja klimatyzacja nie działała przez miesiące. Inne warsztaty nie mogły tego naprawić. COSTA zdiagnozował i rozwiązał problem w jeden dzień. Świetna obsługa!',
    verified: true,
  },
  {
    id: 7,
    name: 'Tomasz Wiśniewski',
    rating: 5,
    date: 'Kwiecień 2023',
    text: 'Uczciwe ceny, jakościowa praca i szczera komunikacja. Wszystko czego potrzeba od mechanika samochodowego. Gorąco polecam.',
    verified: true,
  },
  {
    id: 8,
    name: 'Piotr Zając',
    rating: 5,
    date: 'Czerwiec 2023',
    text: 'Doskonała usługa diagnostyczna. Znalazł problem, który inni mechanicy przegapili. Naprawił go poprawnie za pierwszym razem.',
    verified: true,
  },
  {
    id: 9,
    name: 'Magdalena Lewandowska',
    rating: 5,
    date: 'Listopad 2023',
    text: 'Szybko, profesjonalnie i w dobrej cenie. Wszystko dokładnie wytłumaczone. Bardzo polecam ten warsztat.',
    verified: true,
  },
  {
    id: 10,
    name: 'Krzysztof Nowicki',
    rating: 5,
    date: 'Październik 2023',
    text: 'Solidna praca, terminowość i uczciwe podejście. Nie zawyża kosztów, co jest rzadkością. Mój nowy stały mechanik.',
    verified: true,
  },
  {
    id: 11,
    name: 'Joanna Szymańska',
    rating: 5,
    date: 'Wrzesień 2023',
    text: 'Wspaniała obsługa klienta. Wytłumaczył dokładnie co i dlaczego trzeba zrobić. Bez niepotrzebnych napraw. Polecam!',
    verified: true,
  },
  {
    id: 12,
    name: 'Adam Pawlak',
    rating: 5,
    date: 'Sierpień 2023',
    text: 'Najlepszy mechanik w Rzeszowie. Fachowa diagnoza, rzetelna praca, uczciwe ceny. Nie ma czego więcej chcieć.',
    verified: true,
  },
]

export default function ReviewsPage() {
  const averageRating = 4.8
  const totalReviews = 55

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
              <span className="text-costa-blue">Opinie</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 text-costa-blue font-mono text-sm tracking-wider animate-slide-in-left">
                <div className="w-12 h-px bg-costa-blue" />
                <span>ZADOWOLENI KLIENCI</span>
                <div className="w-12 h-px bg-costa-blue" />
              </div>

              <h1
                className="font-heading font-bold leading-tight animate-slide-in-left"
                style={{ animationDelay: "0.2s" }}
              >
                <span className="block text-5xl md:text-6xl lg:text-7xl text-white mb-2">
                  Opinie Klientów
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-costa-blue via-costa-turquoise to-costa-blue bg-clip-text text-transparent animate-gradient-x">
                  Prawdziwe Opinie
                </span>
              </h1>

              {/* Rating Display */}
              <div
                className="animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="flex items-center justify-center space-x-1 text-yellow-400 text-5xl mb-3">
                  ★★★★★
                </div>
                <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
                  {averageRating} / 5.0
                </div>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                  Na podstawie{" "}
                  <span className="text-costa-turquoise font-bold">
                    {totalReviews} opinii
                  </span>{" "}
                  w Google Maps
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div
              className="mt-8 animate-slide-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <a
                href="https://www.google.com/maps/place/Wandy+Siemaszkowej+9,+35-602+Rzesz%C3%B3w"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-costa-blue to-costa-turquoise text-white font-heading font-bold text-lg rounded-lg overflow-hidden shadow-2xl hover:shadow-costa-blue/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <svg className="w-6 h-6 relative" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2 C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                </svg>
                <span className="relative">Zobacz na Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-costa-blue to-transparent" />
      </section>

      {/* Rating Summary */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto card">
            <div className="text-center mb-8">
              <div className="text-6xl font-bold text-navy mb-2">{averageRating}</div>
              <div className="flex items-center justify-center space-x-1 text-yellow-500 text-3xl mb-2">
                ★★★★★
              </div>
              <p className="text-gray-600">Na podstawie {totalReviews} opinii w Google Maps</p>
            </div>

            <div className="space-y-3 mb-8">
              {[5, 4, 3, 2, 1].map((stars) => {
                const percentage = stars === 5 ? 89 : stars === 4 ? 9 : stars === 3 ? 2 : 0
                return (
                  <div key={stars} className="flex items-center space-x-4">
                    <span className="text-sm font-medium w-12">{stars} ★</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-yellow-500 h-3 rounded-full"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600 w-12">{percentage}%</span>
                  </div>
                )
              })}
            </div>

            <div className="text-center">
              <a
                href="https://www.google.com/maps/place/Wandy+Siemaszkowej+9,+35-602+Rzesz%C3%B3w"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2 C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                </svg>
                <span>Zobacz na Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">
            Co Mówią Nasi Klienci
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="card">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-1 text-yellow-500 text-xl">
                    {'★'.repeat(review.rating)}
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2 C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                    </svg>
                    {review.verified && <span>Zweryfikowana</span>}
                  </div>
                </div>

                <p className="text-gray-700 italic mb-4 text-lg">"{review.text}"</p>

                <div className="flex items-center justify-between text-sm">
                  <div>
                    <p className="font-semibold text-navy">{review.name}</p>
                    <p className="text-gray-500">Opublikowano w Google Maps</p>
                  </div>
                  <p className="text-gray-500">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave Review CTA */}
      <section className="section-padding bg-gradient-to-r from-costa-blue to-costa-turquoise text-white">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Miałeś Świetne Doświadczenie?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Podziel się swoją opinią i pomóż innym znaleźć
            <br />
            jakościowy serwis samochodowy w Rzeszowie
          </p>
          <a
            href="https://g.page/r/YOUR_PLACE_ID/review"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-call bg-white text-costa-blue hover:bg-gray-100 inline-flex items-center space-x-2"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2 C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
            </svg>
            <span>Napisz Opinię Google</span>
          </a>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-costa-blue mb-2">{totalReviews}+</div>
              <p className="text-xl text-gray-700">Zadowolonych Klientów</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-costa-blue mb-2">{averageRating}</div>
              <p className="text-xl text-gray-700">Średnia Ocena</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-costa-blue mb-2">89%</div>
              <p className="text-xl text-gray-700">Opinii 5-gwiazdkowych</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Usługi Auto Serwisu COSTA – Klimatyzacja, Mechanika, Diagnostyka | Rzeszów',
  description: 'Pełna oferta: klimatyzacja, naprawy mechaniczne, diagnostyka komputerowa, wymiana opon. Profesjonalny serwis w Rzeszowie. ☎ 880 378 675',
}

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-navy text-white py-20">
        <div className="container-custom mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Nasze Usługi
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            Kompleksowa opieka nad Twoim samochodem
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-costa-blue">Home</Link>
            <span>›</span>
            <span>Usługi</span>
          </div>
        </div>
      </section>

      {/* Service: A/C */}
      <section id="klimatyzacja" className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-costa-blue">
                <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Serwis Klimatyzacji
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Profesjonalny serwis klimatyzacji dla wszystkich typów pojazdów przy użyciu nowoczesnego sprzętu i wysokiej jakości czynników chłodniczych.
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
                  <svg className="w-6 h-6 text-costa-blue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold mb-1">Typowy czas wykonania: 1-2 godziny</p>
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
                Fachowe naprawy mechaniczne wszystkich marek i modeli z zastosowaniem wysokiej jakości części i profesjonalnego wykonania.
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
                  <svg className="w-6 h-6 text-costa-blue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold mb-1">Czas wykonania: Zależy od zakresu prac</p>
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

            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center order-1 lg:order-2">
              <div className="text-costa-blue">
                <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service: Diagnostics */}
      <section id="diagnostyka" className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-costa-blue">
                <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Diagnostyka Komputerowa
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Zaawansowana diagnostyka przy użyciu profesjonalnego sprzętu do dokładnej identyfikacji problemów z pojazdem.
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
                  <svg className="w-6 h-6 text-costa-blue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold mb-1">Czas diagnostyki: 30-60 minut</p>
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
                Kompleksowe usługi związane z oponami i kołami, w tym zmiany sezonowe i wyważanie.
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
                  <svg className="w-6 h-6 text-costa-blue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold mb-1">Czas wykonania: 30-60 minut</p>
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

            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center order-1 lg:order-2">
              <div className="text-costa-blue">
                <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="section-padding bg-costa-blue text-white">
        <div className="container-custom mx-auto text-center">
          <svg className="w-16 h-16 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-3xl font-heading font-bold mb-4">
            Informacja o Cenach
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Każdy samochód jest inny i zapewniamy uczciwe wyceny na podstawie Twoich konkretnych potrzeb. Zadzwoń do nas po dokładną wycenę.
          </p>
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
        </div>
      </section>
    </>
  )
}

import Link from "next/link";

export default function Management() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Management Section */}
      <section className="w-full py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 font-[family-name:var(--font-inter)] text-gray-900">
              Foundation Leadership
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              VK.com&apos;un liderlik ekibi, dünyanın en büyük zorluklarına çözüm arayan vizyoner düşünürlerden oluşur.
            </p>
          </div>

          {/* Executives Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Taha Vacid */}
            <div className="text-center">
              <div className="w-64 h-64 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-lg flex items-center justify-center">
                <div className="text-6xl text-gray-400">
                  👤
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-2 font-[family-name:var(--font-inter)] text-blue-600">
                Taha Vacid
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Vakıf&apos;ın kurucusu olarak, global sağlık erişiminden sürdürülebilir teknolojilere kadar her alanda devrim yaratmaya odaklanır.
              </p>
              <div className="text-base text-gray-300">
                <p>&quot;Teknoloji, insanlığın ortak mirasıdır.&quot;</p>
              </div>
            </div>

            {/* Haktan Köksal */}
            <div className="text-center">
              <div className="w-64 h-64 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-lg flex items-center justify-center">
                <div className="text-6xl text-gray-400">
                  👤
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-2 font-[family-name:var(--font-inter)] text-blue-600">
                Haktan Köksal
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Ekibimiz, dünyanın en büyük zorluklarını çözmek için gereken uzmanlığa ve tutkuya sahip liderlerden oluşur.
              </p>
              <div className="text-base text-gray-300">
                <p>&quot;Bilim, toplumsal dönüşümün en güçlü aracıdır.&quot;</p>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mt-20 text-center">
            <div className="bg-gray-50 rounded-3xl p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 font-[family-name:var(--font-inter)] text-gray-900">
                Our Leadership Vision
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                As founders of Vacid & Köksal Foundation, we aim to channel the power of technology toward humanity's most fundamental needs. 
                While developing revolutionary solutions in healthcare, food, energy, and access to knowledge, 
                we build global collaborations to construct a sustainable future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-gray-200 py-12 mt-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Sol boş alan */}
            <div></div>
            
            {/* Orta - Latin motto */}
            <div className="text-center">
              <p className="text-xl tracking-wide text-gray-600 italic font-[family-name:var(--font-cinzel)]">
                Aut inveniam viam aut faciam
              </p>
            </div>
            
            {/* Sağ taraf - Foundation bilgileri */}
            <div className="text-right">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Vacid & Köksal Foundation
              </h3>
              <nav className="space-y-1">
                <Link 
                  href="/yonetim" 
                  className="block text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Foundation Management
                </Link>
                <Link 
                  href="/contact" 
                  className="block text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Contact
                </Link>
                <Link 
                  href="/careers" 
                  className="block text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Careers
                </Link>
                <Link 
                  href="/faq" 
                  className="block text-gray-600 hover:text-gray-900 transition-colors"
                >
                  FAQ
                </Link>
              </nav>
            </div>
          </div>
          
          {/* Alt kısım - Copyright */}
          <div className="mt-8 pt-6 border-t border-gray-300 text-center">
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Vacid & Köksal Foundation. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 
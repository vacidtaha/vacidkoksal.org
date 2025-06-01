import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Faq5 } from '@/components/ui/faq-5';

// Foundation FAQ questions in English
const foundationFaqs = [
  {
    question: "What is the mission of Vacid & Köksal Foundation?",
    answer: "Our foundation develops revolutionary solutions in healthcare, food, energy, and education, based on the principle that technology should be an accessible tool for everyone. Our goal is to solve systemic problems and bring humanity to its best version."
  },
  {
    question: "In which areas does the foundation work?",
    answer: "We operate in four main areas: Health technologies (AI-powered diagnostic systems), food systems (precision agriculture and distribution networks), clean energy solutions, and open knowledge access platforms. Each area focuses on meeting humanity's fundamental needs."
  },
  {
    question: "How can I contribute to the foundation?",
    answer: "You can contribute to our foundation with ideas, labor, data, or courage. There is no queue for applause, only an endless queue for participation. The moment you put something on the table, you become part of the Foundation. You can contact us through our contact page."
  },
  {
    question: "What makes the foundation different?",
    answer: "We are not competitors to any sector; we are an idea designed to complete the missing link of a civilization that has lost its speed and sense of direction. We believe that technology should not be just a toy for the elite, but accessible to everyone."
  },
  {
    question: "What is your success metric?",
    answer: "Our success metric is not applause: it is empty hospital beds, full dinner tables, city skylines that have relegated carbon to the pages of history, and tiny dreamer fingers reaching for an open screen for the first time. We aim to add value to society with these concrete results."
  },
  {
    question: "How is the foundation financed?",
    answer: "Our foundation is a structure that does not aim to collect donations. Our main goal is to develop sustainable solutions and ensure that these solutions create social value. We act within the framework of transparent and ethical principles regarding financing."
  },
  {
    question: "How can I get information about technology projects?",
    answer: "We regularly publish updates about our active projects and developments. You can access detailed information from the project cards on our website, and you can also subscribe to our newsletter to stay informed about the latest developments."
  },
  {
    question: "Does the foundation do international work?",
    answer: "Yes, since problems know no borders, our solutions are also designed on a global scale. We develop international collaborations, especially in the fields of open knowledge access and clean technology, and focus on creating global impact."
  },
  {
    question: "How can I participate as a volunteer?",
    answer: "You can use your expert knowledge, creative ideas, or technical skills in our projects. You can review open positions from our careers page or contact us directly to specify the areas you would like to contribute to."
  },
  {
    question: "How is the foundation's vision shaped?",
    answer: "'Aut inveniam viam aut faciam' - I will either find a way or make one. Acting with this motto, we focus on opening new paths where existing systems fall short. Our vision is to transform technology into humanity's common heritage."
  }
];

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Ana içerik */}
      <main className="flex-1">
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
            {/* Header Section - Large */}
            <div className="text-center mb-20">
              <Badge className="text-sm font-medium mb-6 px-6 py-2">FAQ</Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 font-[family-name:var(--font-inter)] text-gray-900 leading-tight">
                Frequently Asked Questions
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-[family-name:var(--font-inter)]">
                Detailed information about our foundation and work on the most curious topics
              </p>
            </div>

            {/* FAQ Grid - İkişer Hizalı */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {foundationFaqs.map((faq, index) => (
                <div key={index} className="flex gap-6">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-blue-100 font-mono text-sm font-bold text-blue-600">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                        {faq.question}
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Ana sayfadakiyle aynı */}
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
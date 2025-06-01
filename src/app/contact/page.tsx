"use client";

import Link from "next/link";
import { useState } from "react";

interface Country {
  code: string;
  name: string;
  flag: string;
}

interface CountrySelectorProps {
  selectedCountry: Country;
  onCountryChange: (country: Country) => void;
}

const countries = [
  { code: "+93", name: "Afghanistan", flag: "🇦🇫" },
  { code: "+355", name: "Albania", flag: "🇦🇱" },
  { code: "+213", name: "Algeria", flag: "🇩🇿" },
  { code: "+376", name: "Andorra", flag: "🇦🇩" },
  { code: "+244", name: "Angola", flag: "🇦🇴" },
  { code: "+54", name: "Argentina", flag: "🇦🇷" },
  { code: "+374", name: "Armenia", flag: "🇦🇲" },
  { code: "+61", name: "Australia", flag: "🇦🇺" },
  { code: "+43", name: "Austria", flag: "🇦🇹" },
  { code: "+994", name: "Azerbaijan", flag: "🇦🇿" },
  { code: "+973", name: "Bahrain", flag: "🇧🇭" },
  { code: "+880", name: "Bangladesh", flag: "🇧🇩" },
  { code: "+375", name: "Belarus", flag: "🇧🇾" },
  { code: "+32", name: "Belgium", flag: "🇧🇪" },
  { code: "+501", name: "Belize", flag: "🇧🇿" },
  { code: "+591", name: "Bolivia", flag: "🇧🇴" },
  { code: "+387", name: "Bosnia", flag: "🇧🇦" },
  { code: "+55", name: "Brazil", flag: "🇧🇷" },
  { code: "+359", name: "Bulgaria", flag: "🇧🇬" },
  { code: "+855", name: "Cambodia", flag: "🇰🇭" },
  { code: "+1", name: "Canada", flag: "🇨🇦" },
  { code: "+56", name: "Chile", flag: "🇨🇱" },
  { code: "+86", name: "China", flag: "🇨🇳" },
  { code: "+57", name: "Colombia", flag: "🇨🇴" },
  { code: "+385", name: "Croatia", flag: "🇭🇷" },
  { code: "+53", name: "Cuba", flag: "🇨🇺" },
  { code: "+357", name: "Cyprus", flag: "🇨🇾" },
  { code: "+420", name: "Czech Republic", flag: "🇨🇿" },
  { code: "+45", name: "Denmark", flag: "🇩🇰" },
  { code: "+593", name: "Ecuador", flag: "🇪🇨" },
  { code: "+20", name: "Egypt", flag: "🇪🇬" },
  { code: "+372", name: "Estonia", flag: "🇪🇪" },
  { code: "+251", name: "Ethiopia", flag: "🇪🇹" },
  { code: "+358", name: "Finland", flag: "🇫🇮" },
  { code: "+33", name: "France", flag: "🇫🇷" },
  { code: "+995", name: "Georgia", flag: "🇬🇪" },
  { code: "+49", name: "Germany", flag: "🇩🇪" },
  { code: "+233", name: "Ghana", flag: "🇬🇭" },
  { code: "+30", name: "Greece", flag: "🇬🇷" },
  { code: "+502", name: "Guatemala", flag: "🇬🇹" },
  { code: "+852", name: "Hong Kong", flag: "🇭🇰" },
  { code: "+36", name: "Hungary", flag: "🇭🇺" },
  { code: "+354", name: "Iceland", flag: "🇮🇸" },
  { code: "+91", name: "India", flag: "🇮🇳" },
  { code: "+62", name: "Indonesia", flag: "🇮🇩" },
  { code: "+98", name: "Iran", flag: "🇮🇷" },
  { code: "+964", name: "Iraq", flag: "🇮🇶" },
  { code: "+353", name: "Ireland", flag: "🇮🇪" },
  { code: "+972", name: "Israel", flag: "🇮🇱" },
  { code: "+39", name: "Italy", flag: "🇮🇹" },
  { code: "+81", name: "Japan", flag: "🇯🇵" },
  { code: "+962", name: "Jordan", flag: "🇯🇴" },
  { code: "+7", name: "Kazakhstan", flag: "🇰🇿" },
  { code: "+254", name: "Kenya", flag: "🇰🇪" },
  { code: "+965", name: "Kuwait", flag: "🇰🇼" },
  { code: "+371", name: "Latvia", flag: "🇱🇻" },
  { code: "+961", name: "Lebanon", flag: "🇱🇧" },
  { code: "+370", name: "Lithuania", flag: "🇱🇹" },
  { code: "+352", name: "Luxembourg", flag: "🇱🇺" },
  { code: "+853", name: "Macau", flag: "🇲🇴" },
  { code: "+60", name: "Malaysia", flag: "🇲🇾" },
  { code: "+356", name: "Malta", flag: "🇲🇹" },
  { code: "+52", name: "Mexico", flag: "🇲🇽" },
  { code: "+373", name: "Moldova", flag: "🇲🇩" },
  { code: "+377", name: "Monaco", flag: "🇲🇨" },
  { code: "+212", name: "Morocco", flag: "🇲🇦" },
  { code: "+31", name: "Netherlands", flag: "🇳🇱" },
  { code: "+64", name: "New Zealand", flag: "🇳🇿" },
  { code: "+234", name: "Nigeria", flag: "🇳🇬" },
  { code: "+47", name: "Norway", flag: "🇳🇴" },
  { code: "+968", name: "Oman", flag: "🇴🇲" },
  { code: "+92", name: "Pakistan", flag: "🇵🇰" },
  { code: "+507", name: "Panama", flag: "🇵🇦" },
  { code: "+51", name: "Peru", flag: "🇵🇪" },
  { code: "+63", name: "Philippines", flag: "🇵🇭" },
  { code: "+48", name: "Poland", flag: "🇵🇱" },
  { code: "+351", name: "Portugal", flag: "🇵🇹" },
  { code: "+974", name: "Qatar", flag: "🇶🇦" },
  { code: "+40", name: "Romania", flag: "🇷🇴" },
  { code: "+7", name: "Russia", flag: "🇷🇺" },
  { code: "+966", name: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+381", name: "Serbia", flag: "🇷🇸" },
  { code: "+65", name: "Singapore", flag: "🇸🇬" },
  { code: "+421", name: "Slovakia", flag: "🇸🇰" },
  { code: "+386", name: "Slovenia", flag: "🇸🇮" },
  { code: "+27", name: "South Africa", flag: "🇿🇦" },
  { code: "+82", name: "South Korea", flag: "🇰🇷" },
  { code: "+34", name: "Spain", flag: "🇪🇸" },
  { code: "+94", name: "Sri Lanka", flag: "🇱🇰" },
  { code: "+46", name: "Sweden", flag: "🇸🇪" },
  { code: "+41", name: "Switzerland", flag: "🇨🇭" },
  { code: "+886", name: "Taiwan", flag: "🇹🇼" },
  { code: "+66", name: "Thailand", flag: "🇹🇭" },
  { code: "+90", name: "Turkey", flag: "🇹🇷" },
  { code: "+380", name: "Ukraine", flag: "🇺🇦" },
  { code: "+971", name: "UAE", flag: "🇦🇪" },
  { code: "+44", name: "United Kingdom", flag: "🇬🇧" },
  { code: "+1", name: "United States", flag: "🇺🇸" },
  { code: "+598", name: "Uruguay", flag: "🇺🇾" },
  { code: "+58", name: "Venezuela", flag: "🇻🇪" },
  { code: "+84", name: "Vietnam", flag: "🇻🇳" }
];

function CountrySelector({ selectedCountry, onCountryChange }: CountrySelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (country: Country) => {
    onCountryChange(country);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-6 py-4 bg-white border-0 rounded-2xl text-lg focus:ring-2 focus:ring-gray-400 transition-all shadow-sm min-w-[200px] hover:bg-gray-50"
      >
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{selectedCountry.flag}</span>
          <span className="font-medium">{selectedCountry.code}</span>
        </div>
        <svg 
          className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 max-h-80 overflow-hidden">
          <div className="max-h-80 overflow-y-auto">
            {countries.map((country) => (
              <button
                key={`${country.code}-${country.name}`}
                type="button"
                onClick={() => handleSelect(country)}
                className="w-full flex items-center space-x-4 px-6 py-3 hover:bg-gray-50 transition-colors text-left"
              >
                <span className="text-2xl">{country.flag}</span>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{country.name}</div>
                  <div className="text-sm text-gray-500">{country.code}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Contact() {
  const [selectedCountry, setSelectedCountry] = useState(
    countries.find(c => c.code === "+90") || countries[0]
  );

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Contact Hero Section */}
      <section className="w-full py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-[family-name:var(--font-inter)]">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you&apos;re interested in our mission, have a partnership proposal, or need support—we&apos;re here to listen and collaborate.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl space-y-12">
          
          {/* Contact Form Card */}
          <div className="rounded-3xl overflow-hidden bg-gray-100 shadow-sm">
            <div className="p-12 md:p-16">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 font-[family-name:var(--font-inter)] text-center">
                  Send us a Message
                </h2>
                
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-lg font-medium text-gray-900 mb-3">
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-6 py-4 bg-white border-0 rounded-2xl text-lg focus:ring-2 focus:ring-gray-400 transition-all shadow-sm"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-lg font-medium text-gray-900 mb-3">
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-6 py-4 bg-white border-0 rounded-2xl text-lg focus:ring-2 focus:ring-gray-400 transition-all shadow-sm"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-medium text-gray-900 mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-6 py-4 bg-white border-0 rounded-2xl text-lg focus:ring-2 focus:ring-gray-400 transition-all shadow-sm"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label className="block text-lg font-medium text-gray-900 mb-3">
                      Phone Number
                    </label>
                    <div className="flex space-x-4">
                      <CountrySelector 
                        selectedCountry={selectedCountry}
                        onCountryChange={setSelectedCountry}
                      />
                      <input
                        type="tel"
                        className="flex-1 px-6 py-4 bg-white border-0 rounded-2xl text-lg focus:ring-2 focus:ring-gray-400 transition-all shadow-sm"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-medium text-gray-900 mb-3">
                      Subject
                    </label>
                    <div className="relative">
                      <select
                        required
                        className="w-full px-6 py-4 bg-white border-0 rounded-2xl text-lg focus:ring-2 focus:ring-gray-400 transition-all shadow-sm appearance-none cursor-pointer"
                      >
                        <option value="" className="text-gray-400">Choose your inquiry type</option>
                        <option value="general">General Inquiry</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="collaboration">Collaboration Request</option>
                        <option value="research">Research & Development</option>
                        <option value="media">Media & Press</option>
                        <option value="support">Technical Support</option>
                        <option value="investment">Investment Inquiry</option>
                        <option value="volunteer">Volunteer Application</option>
                        <option value="donation">Donation Information</option>
                        <option value="career">Career Opportunities</option>
                      </select>
                      <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-medium text-gray-900 mb-3">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      required
                      className="w-full px-6 py-4 bg-white border-0 rounded-2xl text-lg focus:ring-2 focus:ring-gray-400 transition-all shadow-sm resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      className="bg-gray-900 text-white py-4 px-12 rounded-2xl text-lg font-medium hover:bg-gray-800 transition-colors shadow-lg"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information Card */}
          <div className="rounded-3xl overflow-hidden bg-gray-100 shadow-sm">
            <div className="p-12 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 font-[family-name:var(--font-inter)] text-center">
                Contact Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Email */}
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-3xl flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-blue-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Email</h3>
                    <p className="text-lg text-gray-700 mb-1">info@vacidkoksal.org</p>
                    <p className="text-lg text-gray-700">contact@vacidkoksal.org</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-green-100 rounded-3xl flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-green-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Phone</h3>
                    <p className="text-lg text-gray-700 mb-1">+90 532 241 1739</p>
                    <p className="text-lg text-gray-700">+90 534 731 91 99</p>
                  </div>
                </div>

                {/* Office */}
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-3xl flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-purple-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Office</h3>
                    <p className="text-lg text-gray-700">
                      Esenyurt Neighborhood<br />
                      Villakent Street No:59<br />
                      Sivas Center 58000<br />
                      Turkey
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-3xl flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-orange-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Business Hours</h3>
                    <p className="text-lg text-gray-700">
                      Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                      Saturday: 10:00 AM - 4:00 PM PST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Card */}
          <div className="rounded-3xl overflow-hidden bg-gray-100 shadow-sm">
            <div className="p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 font-[family-name:var(--font-inter)]">
                Need Immediate Assistance?
              </h2>
              <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
                For urgent matters or press inquiries, reach out to our dedicated support team.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="tel:+905322411739"
                  className="bg-gray-900 text-white px-8 py-4 rounded-2xl text-lg font-medium hover:bg-gray-800 transition-colors shadow-lg inline-flex items-center justify-center space-x-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  <span>Call Now</span>
                </a>
                <a 
                  href="mailto:urgent@vacidkoksal.org"
                  className="bg-white text-gray-900 px-8 py-4 rounded-2xl text-lg font-medium hover:bg-gray-50 transition-colors shadow-lg border-2 border-gray-200 inline-flex items-center justify-center space-x-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <span>Send Email</span>
                </a>
              </div>
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
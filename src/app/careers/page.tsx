"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const jobCategories = [
  {
    title: "Research & Development",
    description: "Pioneer breakthrough technologies that transform human experience"
  },
  {
    title: "Healthcare Innovation", 
    description: "Revolutionize medical care through AI and accessible technology"
  },
  {
    title: "Engineering",
    description: "Build the infrastructure for a sustainable future"
  },
  {
    title: "Data Science",
    description: "Unlock insights that drive global impact and change"
  },
  {
    title: "Sustainability",
    description: "Design solutions for climate and environmental challenges"
  },
  {
    title: "Education Technology",
    description: "Create platforms that democratize knowledge access worldwide"
  },
  {
    title: "Global Operations",
    description: "Scale our mission to reach every corner of the world"
  },
  {
    title: "Social Impact",
    description: "Measure and amplify our foundation's positive influence"
  }
];

export default function Careers() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* CSS for gradient animation */}
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes borderShine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="w-full bg-black min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 font-[family-name:var(--font-inter)] leading-tight">
              Join Our <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Mission</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Help us build a world where healthcare transcends barriers, knowledge flows freely, and sustainable technology serves all humanity.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        {showScrollIndicator && (
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <svg 
              className="w-8 h-8 text-gray-400 animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        )}
      </section>

      {/* Mission Statement with Creative Layout */}
      <section className="w-full py-32 relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(45deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #667eea 75%, #764ba2 100%)',
            backgroundSize: '400% 400%',
            animation: 'gradientShift 15s ease infinite'
          }}
        />
        
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Sol taraf - Main content */}
            <div>
              <div className="inline-block mb-6">
                <span className="px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-white font-semibold text-sm tracking-wide">
                  OUR VISION
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
                Why Join <br />
                <span className="text-white/80">Our Mission?</span>
              </h2>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                We're not just building technology—we're engineering solutions that heal, nourish, and educate. Every project impacts millions globally.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-1 bg-white/60"></div>
                <span className="text-white/80 font-medium">Transform the world with us</span>
              </div>
            </div>
            
            {/* Sağ taraf - Quote card */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
                <blockquote className="text-2xl md:text-3xl font-medium text-white mb-6 leading-relaxed">
                  "We reject the gates that stamp knowledge with a 'premium access' seal."
                </blockquote>
                <cite className="text-white/80 font-medium">From Our Manifesto</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="w-full py-24 bg-black">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 font-[family-name:var(--font-inter)] text-white">
              Career <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">Opportunities</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Find your place in our mission to democratize healthcare, education, and sustainable technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {jobCategories.map((category, index) => (
              <div
                key={index}
                className="rounded-2xl p-8 md:p-10 border border-gray-800 bg-[#212529] hover:bg-[#343a40] transition-colors duration-300"
              >
                {/* Content */}
                <div className="h-full flex flex-col">
                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white leading-tight">
                    {category.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-lg text-gray-300 leading-relaxed flex-grow mb-6">
                    {category.description}
                  </p>
                  
                  {/* Action Area */}
                  <div className="flex justify-end mt-auto pt-4">
                    <div className="flex items-center space-x-2 text-gray-300">
                      <span className="font-medium">View roles</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section with Modern Card Layout */}
      <section className="w-full py-32 relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 20% 80%, #ff6b35 0%, transparent 50%), radial-gradient(circle at 80% 20%, #8e4ec6 0%, transparent 50%), radial-gradient(circle at 40% 40%, #00d4ff 0%, transparent 50%), linear-gradient(135deg, #1a1a1a 0%, #2d1b69 50%, #1a1a1a 100%)'
          }}
        />
        
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          {/* Header with creative typography */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="px-8 py-4 bg-white/10 backdrop-blur-md rounded-full text-white font-bold text-lg tracking-wider">
                PERKS & BENEFITS
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              More Than Just <br />
              <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                A Job
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Join a movement that values innovation, growth, and global impact
            </p>
          </div>
          
          {/* Benefits Grid with modern cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.1.384-7.5 1.332V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Global Impact</h3>
                <p className="text-white/80 text-lg leading-relaxed">Work on projects that affect millions worldwide</p>
              </div>
            </div>

            <div className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Learning & Growth</h3>
                <p className="text-white/80 text-lg leading-relaxed">Access to cutting-edge research and development</p>
              </div>
            </div>

            <div className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Collaborative Culture</h3>
                <p className="text-white/80 text-lg leading-relaxed">Work with passionate minds from around the world</p>
              </div>
            </div>

            <div className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Competitive Benefits</h3>
                <p className="text-white/80 text-lg leading-relaxed">Comprehensive health, retirement, and wellness programs</p>
              </div>
            </div>

            <div className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Flexible Work</h3>
                <p className="text-white/80 text-lg leading-relaxed">Remote-first culture with flexible schedules</p>
              </div>
            </div>

            <div className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Innovation Focus</h3>
                <p className="text-white/80 text-lg leading-relaxed">20% time for personal research projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="w-full py-24 bg-black">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 font-[family-name:var(--font-inter)] text-white">
              Ready to Make an <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Impact?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Join us in building technology that serves humanity. Whether you have years of experience or are just starting your career, we value passion and potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <a 
                href="/contact"
                className="bg-white text-black px-12 py-5 rounded-3xl text-lg font-medium hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 inline-flex items-center justify-center space-x-3"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <span>Apply Now</span>
              </a>
              <a 
                href="mailto:careers@vacidkoksal.org"
                className="bg-transparent border-2 border-white/30 text-white px-12 py-5 rounded-3xl text-lg font-medium hover:bg-white/10 transition-all backdrop-blur-sm inline-flex items-center justify-center space-x-3 hover:border-white/50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
                <span>Ask Questions</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-gray-800 py-12 bg-black">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Sol boş alan */}
            <div></div>
            
            {/* Orta - Latin motto */}
            <div className="text-center">
              <p className="text-xl tracking-wide text-gray-400 italic font-[family-name:var(--font-cinzel)]">
                Aut inveniam viam aut faciam
              </p>
            </div>
            
            {/* Sağ taraf - Foundation bilgileri */}
            <div className="text-right">
              <h3 className="text-lg font-bold text-white mb-2">
                Vacid & Köksal Foundation
              </h3>
              <nav className="space-y-1">
                <Link 
                  href="/yonetim" 
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Foundation Management
                </Link>
                <Link 
                  href="/contact" 
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
                <Link 
                  href="/careers" 
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </Link>
                <Link 
                  href="/faq" 
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </nav>
            </div>
          </div>
          
          {/* Alt kısım - Copyright */}
          <div className="mt-8 pt-6 border-t border-gray-800 text-center">
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Vacid & Köksal Foundation. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 
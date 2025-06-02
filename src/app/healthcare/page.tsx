"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Heart, Microscope, Dna, Users, Globe, Lightbulb, Target, Building, HandHeart } from 'lucide-react';

export default function HealthcarePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-15"
            src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/20 to-white/40"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="mb-12">
            <Heart className="w-12 h-12 mx-auto text-blue-400 mb-8" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight mb-12 leading-tight text-gray-900">
            Healing Beyond
            <span className="block font-light text-blue-600 mt-4">
              Diagnosis
            </span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-light text-gray-600 leading-relaxed mb-8">
              Diagnosing disease is no longer enough.
            </p>
            <p className="text-xl md:text-2xl font-light text-gray-500 leading-relaxed">
              We unlock the regenerative potential of cells and 
              activate the healing power of genes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-12 leading-tight">
              Vacid & Köksal Foundation
              <span className="block text-3xl md:text-4xl font-light text-blue-600 mt-6">
                Healthcare Mission
              </span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-6">From Diagnosis to Treatment</h3>
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  Traditional medicine settles for identifying diseases. We focus on discovering 
                  cells' self-renewal capabilities and improving life's fundamental codes through 
                  gene editing technologies. We support groundbreaking research in regenerative 
                  medicine, backing our vision to treat not just symptoms, but the root causes 
                  of disease.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-6">Cellular Regeneration Potential</h3>
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  Every human body contains billions of cells programmed for self-repair. 
                  We stand behind scientists working in stem cell engineering, tissue regeneration, 
                  and cellular reprogramming. From CRISPR-Cas9 to organoid modeling, 
                  from 3D bioprinting to senescence reversal, we support breakthrough research 
                  across the full spectrum.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 border border-blue-100">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Microscope className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-normal text-gray-900 mb-2">Precision Medicine</h4>
                    <p className="text-gray-600 font-light">Multi-omics data integration for personalized treatment protocols</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Dna className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-normal text-gray-900 mb-2">Gene Editing</h4>
                    <p className="text-gray-600 font-light">CRISPR and prime editing technologies for monogenic disorder interventions</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Heart className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-normal text-gray-900 mb-2">Regenerative Therapies</h4>
                    <p className="text-gray-600 font-light">Induced pluripotent stem cells and directed differentiation pathways</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Framework */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-8">
              Supporting the Ecosystem
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Behind every breakthrough in translational medicine is a visionary, 
              a researcher, an entrepreneur. Standing with them is at the heart of our mission.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-6">Research Institutions</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                We support universities and research institutes in building cutting-edge laboratories 
                and expanding their core facilities to advance scientific discovery.
              </p>
              <div className="space-y-3 text-sm text-gray-500 font-light">
                <p>• Multi-year research grants ($50M+ total support)</p>
                <p>• Advanced equipment procurement</p>
                <p>• International collaboration networks</p>
                <p>• PhD fellowship programs</p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-6">Biotech Startups</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Throughout healthtech startups' journey from pre-seed to Series A, 
                we take on the role of strategic enabler rather than just financial partner.
              </p>
              <div className="space-y-3 text-sm text-gray-500 font-light">
                <p>• Seed funding ($1M - $10M range)</p>
                <p>• Regulatory pathway guidance</p>
                <p>• Clinical trial facilitation</p>
                <p>• IP portfolio development</p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <HandHeart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-6">Individual Researchers</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                We provide comprehensive support to individual researchers with breakthrough 
                potential, from fellowship programs to patent processes.
              </p>
              <div className="space-y-3 text-sm text-gray-500 font-light">
                <p>• Individual research grants ($100K - $1M)</p>
                <p>• Conference and training support</p>
                <p>• Mentorship networks</p>
                <p>• Publication and IP support</p>
              </div>
            </div>
          </div>

          {/* Additional Support Types */}
          <div className="bg-white rounded-3xl p-12 border border-gray-100">
            <h3 className="text-3xl font-light text-gray-900 mb-12 text-center">Additional Support Mechanisms</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-5 h-5 text-orange-600" />
                </div>
                <h4 className="text-lg font-normal text-gray-900 mb-4">Emergency Research Funding</h4>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  Anticipating emergencies like pandemics and natural disasters, 
                  we provide rapid response research grants.
                </p>
              </div>
              
              <div>
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-5 h-5 text-green-600" />
                </div>
                <h4 className="text-lg font-normal text-gray-900 mb-4">Humanitarian Health Projects</h4>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  We support development of point-of-care diagnostic tools and 
                  mobile health units for underserved populations.
                </p>
              </div>
              
              <div>
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Building className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="text-lg font-normal text-gray-900 mb-4">Technology Transfer</h4>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  We provide guidance on regulatory approval, clinical trials, 
                  and commercialization in the lab-to-clinic transition.
                </p>
              </div>
              
              <div>
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-5 h-5 text-purple-600" />
                </div>
                <h4 className="text-lg font-normal text-gray-900 mb-4">Global Collaboration</h4>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  We organize cross-border research partnerships, international 
                  conferences, and knowledge exchange programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Implementation Strategy */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-8">
              Disrupting Healthcare Status Quo
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              We refuse to accept the glacial pace of traditional healthcare systems. 
              While regulatory bodies deliberate for decades, patients suffer. While bureaucracies 
              protect outdated protocols, breakthrough treatments remain locked in laboratories.
            </p>
            <p className="text-lg font-light text-red-600 max-w-3xl mx-auto leading-relaxed">
              The current healthcare establishment's sluggishness is not just inefficient—it's morally unacceptable. 
              We're building parallel systems that prioritize human lives over institutional inertia.
            </p>
          </div>

          <div className="space-y-20">
            {/* Phase 1 */}
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mr-6 shadow-lg">
                    <span className="text-lg font-light text-white">01</span>
                  </div>
                  <h3 className="text-3xl font-light text-gray-900">Regulatory-Independent Zones</h3>
                </div>
                <p className="text-lg font-light text-gray-600 leading-relaxed mb-6">
                  Starting 2028, we establish autonomous research territories in carefully selected jurisdictions 
                  where innovation isn't strangled by 20th-century regulatory frameworks. These zones operate 
                  under accelerated approval pathways, cutting development timelines from decades to years.
                </p>
                <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
                  <p className="text-red-800 font-light italic">
                    "While FDA takes 10+ years to approve life-saving treatments, we'll prove them safe 
                    and effective in 24 months through revolutionary trial designs and real-world evidence."
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 text-sm font-light text-gray-500">
                  <div>
                    <p className="mb-2">• Regulatory sandbox environments</p>
                    <p className="mb-2">• Accelerated gene therapy protocols</p>
                    <p>• Real-world evidence generation</p>
                  </div>
                  <div>
                    <p className="mb-2">• Direct-to-patient access programs</p>
                    <p className="mb-2">• Blockchain-verified safety data</p>
                    <p>• AI-driven trial optimization</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-orange-100 rounded-3xl p-8 text-center border border-red-200">
                <Target className="w-16 h-16 text-red-500 mx-auto mb-6" />
                <h4 className="text-lg font-normal text-gray-900 mb-2">2028-2030</h4>
                <p className="text-gray-600 font-light">Breaking regulatory bottlenecks</p>
                <div className="mt-4 text-xs text-red-600 font-medium">
                  DISRUPTION PHASE
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-3xl p-8 text-center lg:order-1 border border-purple-200">
                <Globe className="w-16 h-16 text-purple-500 mx-auto mb-6" />
                <h4 className="text-lg font-normal text-gray-900 mb-2">2030-2032</h4>
                <p className="text-gray-600 font-light">Proving superiority at scale</p>
                <div className="mt-4 text-xs text-purple-600 font-medium">
                  VALIDATION PHASE
                </div>
              </div>
              <div className="lg:col-span-2 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mr-6 shadow-lg">
                    <span className="text-lg font-light text-white">02</span>
                  </div>
                  <h3 className="text-3xl font-light text-gray-900">Demonstrating Superiority</h3>
                </div>
                <p className="text-lg font-light text-gray-600 leading-relaxed mb-6">
                  By 2030, our parallel systems will generate irrefutable evidence of superiority. 
                  When our patients experience 10x better outcomes in half the time, traditional 
                  healthcare establishments will face an existential crisis. We force system-wide change 
                  through competitive pressure, not political negotiation.
                </p>
                <div className="bg-purple-50 border-l-4 border-purple-400 p-6 mb-6">
                  <p className="text-purple-800 font-light italic">
                    "Results speak louder than regulations. When our cancer patients achieve 90% remission 
                    rates versus traditional 30%, the old system becomes indefensible."
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 text-sm font-light text-gray-500">
                  <div>
                    <p className="mb-2">• Outcome transparency protocols</p>
                    <p className="mb-2">• Public efficacy dashboards</p>
                    <p>• Head-to-head comparative studies</p>
                  </div>
                  <div>
                    <p className="mb-2">• Media amplification strategies</p>
                    <p className="mb-2">• Patient testimonial networks</p>
                    <p>• Regulatory pressure campaigns</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-6 shadow-lg">
                    <span className="text-lg font-light text-white">03</span>
                  </div>
                  <h3 className="text-3xl font-light text-gray-900">Global System Replacement</h3>
                </div>
                <p className="text-lg font-light text-gray-600 leading-relaxed mb-6">
                  From 2032 onwards, we don't adapt to existing healthcare systems—we replace them. 
                  Our proven protocols become the new global standard. Governments either adopt our 
                  frameworks or watch their citizens seek treatment elsewhere. Market forces complete 
                  what regulatory reform couldn't achieve.
                </p>
                <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-6">
                  <p className="text-green-800 font-light italic">
                    "When cure becomes commodity and regeneration becomes routine, 
                    the old healthcare paradigm collapses under its own obsolescence."
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 text-sm font-light text-gray-500">
                  <div>
                    <p className="mb-2">• Global treatment standardization</p>
                    <p className="mb-2">• Cross-border patient mobility</p>
                    <p>• Universal regenerative protocols</p>
                  </div>
                  <div>
                    <p className="mb-2">• Legacy system phase-out</p>
                    <p className="mb-2">• Healthcare sovereignty redefinition</p>
                    <p>• Post-scarcity medicine economics</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-8 text-center border border-green-200">
                <Users className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h4 className="text-lg font-normal text-gray-900 mb-2">2032-2035</h4>
                <p className="text-gray-600 font-light">New healthcare paradigm</p>
                <div className="mt-4 text-xs text-green-600 font-medium">
                  TRANSFORMATION COMPLETE
                </div>
              </div>
            </div>

            {/* Bold Statement */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-center text-white">
              <h3 className="text-3xl font-light mb-6">Our Promise</h3>
              <p className="text-xl font-light leading-relaxed mb-6 text-gray-200">
                By 2035, the phrase "incurable disease" will be as obsolete as "flat earth." 
                We're not just improving healthcare—we're making current medical practice look barbaric.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div>
                  <div className="text-3xl font-light text-blue-400 mb-2">100%</div>
                  <div className="text-sm text-gray-300">Previously "incurable" diseases treatable</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-purple-400 mb-2">90%</div>
                  <div className="text-sm text-gray-300">Reduction in treatment timelines</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-green-400 mb-2">10x</div>
                  <div className="text-sm text-gray-300">Improvement in patient outcomes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Vision */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extralight mb-12 leading-tight">
            Building the Future Together
          </h2>
          <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed text-gray-300">
            <p>
              The day when every disease has a cure is not far away. Every cell's potential 
              for rebirth will be realized, every gene's healing power will be activated.
            </p>
            <p>
              As the Vacid & Köksal Foundation, we stand behind this vision, 
              strengthening scientists' hands and clearing entrepreneurs' paths.
            </p>
            <p className="text-2xl md:text-3xl font-light text-white pt-8">
              Because healing beyond diagnosis 
              <span className="block mt-4 text-blue-300">
                is not just a dream, but an imminent reality.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-gray-200 py-12 bg-gray-50">
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
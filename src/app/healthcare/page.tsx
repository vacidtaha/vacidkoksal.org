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

      {/* Revolutionary Medical Technologies - Deep Dive */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-8">
              The Sacred Science of Cellular Regeneration
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Every human cell contains the divine blueprint for perfect health. Through genetic engineering, 
              stem cell therapy, and molecular medicine, we're not just treating disease—we're rewriting 
              the fundamental code of life itself.
            </p>
          </div>

          {/* Genetic Therapies: The Sacred Domain */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <Dna className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-light text-gray-900">Genetic Therapies: The Most Sacred Work</h3>
                </div>
                <p className="text-lg font-light text-gray-600 leading-relaxed mb-8">
                  To edit human genes is to touch the essence of life itself. With CRISPR-Cas9, prime editing, 
                  and base editing technologies, we're correcting genetic errors that have caused suffering 
                  for millennia. This is more than medicine—it's molecular salvation.
                </p>
                
                <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-400 mb-8">
                  <h4 className="font-medium text-purple-800 mb-3">Sacred Breakthrough: Single-Cell Gene Correction</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Our supported research has achieved 99.7% precision in single-cell gene editing, 
                    correcting disease-causing mutations in neuronal cells without off-target effects. 
                    We're rewriting genetic destiny one nucleotide at a time.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mt-1">
                      <Heart className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">Monogenic Disease Eradication</h5>
                      <p className="text-sm text-gray-600">CRISPR-mediated correction of single-gene disorders 
                      like sickle cell disease, achieving permanent cures in 95% of treated patients.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mt-1">
                      <Lightbulb className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">In Vivo Gene Delivery</h5>
                      <p className="text-sm text-gray-600">Lipid nanoparticles and viral vectors that deliver 
                      gene-editing tools directly to target organs, bypassing invasive procedures.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 border border-purple-200">
                <h4 className="text-xl font-medium text-gray-900 mb-6">Genetic Disease Revolution Timeline</h4>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-purple-200">
                    <span className="font-medium text-gray-900">Sickle Cell Disease</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm font-medium">Cured 2024</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-purple-200">
                    <span className="font-medium text-gray-900">Duchenne Muscular Dystrophy</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded text-sm font-medium">2026</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-purple-200">
                    <span className="font-medium text-gray-900">Huntington's Disease</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded text-sm font-medium">2028</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-purple-200">
                    <span className="font-medium text-gray-900">All Monogenic Disorders</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm font-medium">2030</span>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-purple-100 rounded-lg">
                  <h5 className="font-medium text-purple-800 mb-2">The Sacred Promise</h5>
                  <p className="text-sm text-purple-700">
                    Supporting 18 gene therapy companies with $250M+ committed, we're ensuring no child 
                    born after 2030 will suffer from a correctable genetic condition.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Multiple Sclerosis: Regenerating the Sacred Network */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="lg:order-2">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <Microscope className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-light text-gray-900">Multiple Sclerosis: Healing the Sacred Network</h3>
                </div>
                <p className="text-lg font-light text-gray-600 leading-relaxed mb-8">
                  The human nervous system is the most sacred network in creation—transmitting thoughts, 
                  emotions, and consciousness itself. When MS damages myelin sheaths, we don't just treat 
                  symptoms. We regenerate the very pathways of human experience.
                </p>
                
                <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-400 mb-8">
                  <h4 className="font-medium text-blue-800 mb-3">Breakthrough: Oligodendrocyte Regeneration</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Our research partners have successfully induced remyelination using engineered 
                    oligodendrocyte precursor cells, restoring nerve conduction velocity to 97% of 
                    normal levels in previously damaged neural pathways.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mt-1">
                      <Target className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">Cellular Reprogramming</h5>
                      <p className="text-sm text-gray-600">Converting patient fibroblasts into functional 
                      oligodendrocytes through transcription factor cocktails, creating personalized repair cells.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mt-1">
                      <Globe className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">Neuroprotective Matrices</h5>
                      <p className="text-sm text-gray-600">Injectable hydrogel scaffolds that guide neural 
                      regeneration and prevent further demyelination through controlled growth factor release.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-200 lg:order-1">
                <h4 className="text-xl font-medium text-gray-900 mb-6">MS Treatment Evolution</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">Current Therapies</span>
                      <span className="text-blue-700 font-bold">Slow Progression</span>
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{width: '30%'}}></div>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">30% efficacy - Disease management only</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">Remyelination Therapy</span>
                      <span className="text-blue-700 font-bold">Repair Damage</span>
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">75% restoration - Clinical trials 2026</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">Complete Regeneration</span>
                      <span className="text-blue-700 font-bold">Full Recovery</span>
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">95% neural function - Target by 2030</div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-blue-100 rounded-lg">
                  <h5 className="font-medium text-blue-800 mb-2">Sacred Impact</h5>
                  <p className="text-sm text-blue-700">
                    Imagine wheelchair-bound patients walking again, lost memories returning, 
                    paralyzed limbs responding to thought. This is the sacred work of neural regeneration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cancer: The Cellular Rebellion */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-light text-gray-900">Cancer: Ending the Cellular Rebellion</h3>
                </div>
                <p className="text-lg font-light text-gray-600 leading-relaxed mb-8">
                  Cancer is cellular insurrection—normal cells abandoning their sacred purpose and 
                  multiplying without limit. Through CAR-T cell therapy, immunotherapy, and precision 
                  medicine, we're training the immune system to recognize and eliminate these rebels.
                </p>
                
                <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-400 mb-8">
                  <h4 className="font-medium text-red-800 mb-3">Revolutionary Approach: Universal CAR-T Cells</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Our funded teams have engineered allogeneic CAR-T cells that work across all patients, 
                    eliminating the need for personalized manufacturing. These "off-the-shelf" cancer 
                    fighters achieve 89% complete remission rates in previously untreatable cases.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                      <Users className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">Liquid Biopsy Precision</h5>
                      <p className="text-sm text-gray-600">Circulating tumor DNA analysis detects cancer 
                      recurrence 6-12 months before imaging, enabling preemptive intervention.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                      <Lightbulb className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">Tumor Microenvironment Engineering</h5>
                      <p className="text-sm text-gray-600">Reprogramming immunosuppressive tumor environments 
                      into immune-activating territories through engineered cytokines.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-8 border border-red-200">
                <h4 className="text-xl font-medium text-gray-900 mb-6">Cancer Elimination Progress</h4>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">Blood Cancers</span>
                      <div className="text-right">
                        <div className="text-red-700 font-bold">89% Remission</div>
                        <div className="text-xs text-gray-600">CAR-T therapy</div>
                      </div>
                    </div>
                    <div className="w-full bg-red-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '89%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">Solid Tumors</span>
                      <div className="text-right">
                        <div className="text-red-700 font-bold">67% Response</div>
                        <div className="text-xs text-gray-600">Combination therapy</div>
                      </div>
                    </div>
                    <div className="w-full bg-red-200 rounded-full h-2">
                      <div className="bg-yellow-600 h-2 rounded-full" style={{width: '67%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">Metastatic Disease</span>
                      <div className="text-right">
                        <div className="text-red-700 font-bold">45% Control</div>
                        <div className="text-xs text-gray-600">Novel immunotherapy</div>
                      </div>
                    </div>
                    <div className="w-full bg-red-200 rounded-full h-2">
                      <div className="bg-orange-600 h-2 rounded-full" style={{width: '45%'}}></div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-red-100 rounded-lg">
                  <h5 className="font-medium text-red-800 mb-2">The Ultimate Goal</h5>
                  <p className="text-sm text-red-700">
                    By 2030, we target 95% cure rates across all cancer types. Cancer will become 
                    a brief, treatable inconvenience rather than a death sentence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Aging: The Final Frontier */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="lg:order-2">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <Dna className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-light text-gray-900">Cellular Aging: Reversing Time Itself</h3>
                </div>
                <p className="text-lg font-light text-gray-600 leading-relaxed mb-8">
                  Aging is not inevitable—it's a disease we can cure. Through cellular reprogramming, 
                  telomere extension, and senescent cell clearance, we're literally turning back the 
                  molecular clock. The first person to live 200+ years has already been born.
                </p>
                
                <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-400 mb-8">
                  <h4 className="font-medium text-green-800 mb-3">Breakthrough: Partial Cellular Reprogramming</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Yamanaka factor therapy has successfully reversed aging markers in human cells by 
                    10-20 years without losing cellular identity. Early trials show tissue regeneration 
                    and restored function in aged organs.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mt-1">
                      <Heart className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">Senescent Cell Elimination</h5>
                      <p className="text-sm text-gray-600">Senolytics that selectively destroy aged, 
                      dysfunctional cells while preserving healthy tissue architecture.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mt-1">
                      <Globe className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">Telomere Restoration</h5>
                      <p className="text-sm text-gray-600">Gene therapy to reactivate telomerase in 
                      somatic cells, extending cellular lifespan indefinitely without cancer risk.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200 lg:order-1">
                <h4 className="text-xl font-medium text-gray-900 mb-6">Longevity Intervention Timeline</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">Current Lifespan</span>
                      <span className="text-green-700 font-bold">~80 years</span>
                    </div>
                    <div className="w-full bg-green-200 rounded-full h-2">
                      <div className="bg-gray-500 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">Natural aging process</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">With Anti-Aging Therapy</span>
                      <span className="text-green-700 font-bold">~120 years</span>
                    </div>
                    <div className="w-full bg-green-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '150%'}}></div>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">Available by 2030</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">Full Regenerative Medicine</span>
                      <span className="text-green-700 font-bold">200+ years</span>
                    </div>
                    <div className="w-full bg-green-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '250%'}}></div>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">Theoretical maximum by 2040</div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-green-100 rounded-lg">
                  <h5 className="font-medium text-green-800 mb-2">$200M Anti-Aging Investment</h5>
                  <p className="text-sm text-green-700">
                    Supporting 25+ longevity companies developing senolytics, cellular reprogramming, 
                    and regenerative therapies to make death optional.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Revolutionary Technologies Integration */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-light text-white mb-6">The Convergence of Sacred Technologies</h3>
              <p className="text-lg font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
                When genetic engineering meets stem cell therapy, when AI-designed drugs combine with 
                cellular reprogramming, when nanotechnology enables precise molecular surgery—we achieve 
                medical miracles that our ancestors could only dream of.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Dna className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-medium text-white mb-4">Personalized Gene Medicine</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Every patient receives therapies designed specifically for their genetic profile, 
                  maximizing efficacy while minimizing side effects.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Microscope className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-medium text-white mb-4">Regenerative Organs</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Lab-grown organs from patient stem cells eliminate transplant rejection 
                  and organ shortage crises permanently.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-medium text-white mb-4">Molecular Surgery</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Nanorobots perform precise cellular repairs, removing plaques, 
                  fixing mutations, and optimizing cellular function at the molecular level.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-white/10 rounded-2xl p-6 inline-block">
                <p className="text-white font-light italic text-lg">
                  "When we edit genes like software, grow organs like gardens, 
                  and repair cells like clockwork—death becomes optional."
                </p>
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
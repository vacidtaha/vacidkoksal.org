"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Zap, Battery, Sun, Wind, Leaf, Users, Globe, Lightbulb, Target, Building, HandHeart, Thermometer, Microscope } from 'lucide-react';

export default function EnergyPage() {
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
            src="https://videos.pexels.com/video-files/8360890/8360890-hd_1920_1080_30fps.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/20 to-white/40"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="mb-12">
            <Zap className="w-12 h-12 mx-auto text-green-400 mb-8" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight mb-12 leading-tight text-gray-900">
            Energy Beyond
            <span className="block font-light text-green-600 mt-4">
              Extraction
            </span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-light text-gray-600 leading-relaxed mb-8">
              Burning fossil fuels is no longer sustainable.
            </p>
            <p className="text-xl md:text-2xl font-light text-gray-500 leading-relaxed">
              We harness the infinite power of fusion reactions and 
              unlock the limitless potential of renewable energy.
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
              <span className="block text-3xl md:text-4xl font-light text-green-600 mt-6">
                Clean Energy Mission
              </span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-6">From Scarcity to Abundance</h3>
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  Traditional energy systems rely on finite resources and destructive extraction. 
                  We focus on developing technologies that capture infinite energy from fusion reactions, 
                  solar radiation, and wind patterns. We support breakthrough research in next-generation 
                  solar cells, fusion energy, and advanced battery storage systems that will power 
                  a carbon-neutral civilization.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-6">Distributed Energy Democracy</h3>
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  Every community deserves energy independence and security. We stand behind 
                  innovators developing smart grid technologies, distributed energy systems, 
                  and energy storage solutions. From perovskite solar cells to solid-state batteries, 
                  from hydrogen fuel cells to carbon capture technologies, we support the entire 
                  spectrum of clean energy innovation.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-12 border border-green-100">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Sun className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-normal text-gray-900 mb-2">Next-Gen Solar</h4>
                    <p className="text-gray-600 font-light">Perovskite tandem cells and concentrated photovoltaic systems</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Battery className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-normal text-gray-900 mb-2">Energy Storage</h4>
                    <p className="text-gray-600 font-light">Solid-state batteries and grid-scale storage solutions</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Zap className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-normal text-gray-900 mb-2">Fusion Energy</h4>
                    <p className="text-gray-600 font-light">Plasma confinement and magnetic field optimization</p>
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
              Accelerating the Energy Transition
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Behind every breakthrough in clean energy technology is a visionary scientist, 
              an innovative engineer, an ambitious entrepreneur, an AI researcher solving energy optimization. 
              Empowering them across all domains of energy innovation is the core of our mission.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-6">Research Institutions</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                We support universities, national labs, and research consortiums in developing next-generation 
                clean energy technologies, AI-optimized energy systems, and building world-class research 
                facilities for sustainable energy innovation.
              </p>
              <div className="space-y-3 text-sm text-gray-500 font-light">
                <p>• Fusion research grants ($150M+ total support)</p>
                <p>• AI-energy optimization research programs</p>
                <p>• Advanced materials & quantum computing development</p>
                <p>• International energy & AI collaborations</p>
                <p>• Clean energy fellowship & PhD programs</p>
                <p>• Breakthrough technology incubation centers</p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-6">CleanTech & AI-Energy Startups</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Throughout clean energy and AI-energy startups' journey from concept to global deployment, 
                we serve as catalyst, strategic partner, and technology accelerator—not just financial investor.
              </p>
              <div className="space-y-3 text-sm text-gray-500 font-light">
                <p>• Growth capital ($5M - $100M range)</p>
                <p>• AI datacenter clean energy solutions</p>
                <p>• Regulatory, policy & grid integration guidance</p>
                <p>• Manufacturing scale-up & automation</p>
                <p>• Global market access & partnerships</p>
                <p>• Technology validation & pilot programs</p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <HandHeart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-6">Individual Innovators</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                We provide comprehensive, multi-year support to individual researchers, engineers, 
                and AI scientists with breakthrough potential in clean energy and energy-efficient AI technologies.
              </p>
              <div className="space-y-3 text-sm text-gray-500 font-light">
                <p>• Innovation grants ($50K - $5M range)</p>
                <p>• AI-energy research fellowships</p>
                <p>• Technical mentorship & advisory networks</p>
                <p>• Patent, IP protection & licensing support</p>
                <p>• Commercialization pathways & startup incubation</p>
                <p>• Cross-disciplinary collaboration platforms</p>
              </div>
            </div>
          </div>

          {/* Additional Support Types */}
          <div className="bg-white rounded-3xl p-12 border border-gray-100">
            <h3 className="text-3xl font-light text-gray-900 mb-12 text-center">Strategic Support Mechanisms</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-5 h-5 text-orange-600" />
                </div>
                <h4 className="text-lg font-normal text-gray-900 mb-4">Emergency Energy Response</h4>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  Rapid deployment funding for critical energy infrastructure during 
                  climate emergencies, grid failures, and AI datacenter power crises. 
                  24/7 emergency response capability.
                </p>
              </div>
              
              <div>
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="w-5 h-5 text-green-600" />
                </div>
                <h4 className="text-lg font-normal text-gray-900 mb-4">Climate Justice & AI Access</h4>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  Supporting clean energy and AI access for underserved communities 
                  and developing nations through affordable renewable solutions and 
                  democratized AI infrastructure.
                </p>
              </div>
              
              <div>
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Wind className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="text-lg font-normal text-gray-900 mb-4">Smart Grid & AI Integration</h4>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  Investments in AI-powered smart grid technologies, predictive energy 
                  storage systems, and distributed energy management platforms with 
                  machine learning optimization.
                </p>
              </div>
              
              <div>
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-5 h-5 text-purple-600" />
                </div>
                <h4 className="text-lg font-normal text-gray-900 mb-4">Global Energy-AI Partnerships</h4>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  Cross-border collaborations for technology transfer, joint development 
                  of breakthrough energy solutions, and international AI-energy research 
                  consortium building.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Roadmap */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-8">
              Our Energy Transformation Roadmap
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We don't just follow the energy transition—we accelerate it through strategic technology 
              deployment and systemic change initiatives.
            </p>
          </div>
          
          <div className="space-y-24">
            {/* Phase 1 */}
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-3xl p-8 text-center border border-orange-200">
                <Sun className="w-16 h-16 text-orange-500 mx-auto mb-6" />
                <h4 className="text-lg font-normal text-gray-900 mb-2">2025-2027</h4>
                <p className="text-gray-600 font-light">Technology acceleration</p>
                <div className="mt-4 text-xs text-orange-600 font-medium">
                  FOUNDATION PHASE
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mr-6 shadow-lg">
                    <span className="text-lg font-light text-white">01</span>
                  </div>
                  <h3 className="text-3xl font-light text-gray-900">Breakthrough Technology Development</h3>
                </div>
                <p className="text-lg font-light text-gray-600 leading-relaxed mb-6">
                  We identify and accelerate the most promising clean energy technologies through 
                  strategic investments and partnerships. Our focus is on game-changing innovations 
                  that can achieve grid parity and outcompete fossil fuels on pure economics.
                </p>
                <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-6">
                  <p className="text-orange-800 font-light italic">
                    "The best solar cell is not the one that's 45% efficient in the lab, 
                    but the one that's 25% efficient and costs $0.10 per watt in mass production."
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 text-sm font-light text-gray-500">
                  <div>
                    <p className="mb-2">• Next-generation solar cell development</p>
                    <p className="mb-2">• Advanced battery chemistry research</p>
                    <p>• Fusion reactor prototyping</p>
                  </div>
                  <div>
                    <p className="mb-2">• Smart grid infrastructure pilots</p>
                    <p className="mb-2">• Carbon capture scale-up</p>
                    <p>• Hydrogen production optimization</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-8 text-center lg:order-1 border border-green-200">
                <Battery className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h4 className="text-lg font-normal text-gray-900 mb-2">2027-2030</h4>
                <p className="text-gray-600 font-light">Market transformation</p>
                <div className="mt-4 text-xs text-green-600 font-medium">
                  DEPLOYMENT PHASE
                </div>
              </div>
              <div className="lg:col-span-2 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-6 shadow-lg">
                    <span className="text-lg font-light text-white">02</span>
                  </div>
                  <h3 className="text-3xl font-light text-gray-900">Massive Market Deployment</h3>
                </div>
                <p className="text-lg font-light text-gray-600 leading-relaxed mb-6">
                  By 2027, our supported technologies achieve commercial viability and begin 
                  large-scale deployment. We facilitate the rapid scaling of manufacturing, 
                  distribution, and installation to capture the exponential growth phase of clean energy adoption.
                </p>
                <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-6">
                  <p className="text-green-800 font-light italic">
                    "When clean energy becomes cheaper than fossil fuels, the transition 
                    accelerates from policy choice to economic inevitability."
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 text-sm font-light text-gray-500">
                  <div>
                    <p className="mb-2">• Gigawatt-scale manufacturing</p>
                    <p className="mb-2">• Global supply chain optimization</p>
                    <p>• Rapid deployment financing</p>
                  </div>
                  <div>
                    <p className="mb-2">• Grid integration protocols</p>
                    <p className="mb-2">• Energy storage deployment</p>
                    <p>• Market mechanism design</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-6 shadow-lg">
                    <span className="text-lg font-light text-white">03</span>
                  </div>
                  <h3 className="text-3xl font-light text-gray-900">Energy System Transformation</h3>
                </div>
                <p className="text-lg font-light text-gray-600 leading-relaxed mb-6">
                  From 2030 onwards, we don't just participate in the energy transition—we complete it. 
                  Our technologies become the backbone of a fully renewable global energy system. 
                  Fossil fuel infrastructure becomes economically obsolete and systematically retired.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
                  <p className="text-blue-800 font-light italic">
                    "When fusion reactors power cities and solar panels cover every rooftop, 
                    the carbon age ends not with regulation, but with obsolescence."
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 text-sm font-light text-gray-500">
                  <div>
                    <p className="mb-2">• Global clean energy dominance</p>
                    <p className="mb-2">• Fossil fuel infrastructure retirement</p>
                    <p>• Carbon-negative energy systems</p>
                  </div>
                  <div>
                    <p className="mb-2">• Universal energy access</p>
                    <p className="mb-2">• Climate restoration technologies</p>
                    <p>• Post-carbon civilization foundation</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-100 rounded-3xl p-8 text-center border border-blue-200">
                <Zap className="w-16 h-16 text-blue-500 mx-auto mb-6" />
                <h4 className="text-lg font-normal text-gray-900 mb-2">2030-2035</h4>
                <p className="text-gray-600 font-light">Clean energy dominance</p>
                <div className="mt-4 text-xs text-blue-600 font-medium">
                  TRANSFORMATION COMPLETE
                </div>
              </div>
            </div>

            {/* Bold Statement */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-center text-white">
              <h3 className="text-3xl font-light mb-6">Our Promise</h3>
              <p className="text-xl font-light leading-relaxed mb-6 text-gray-200">
                By 2035, fossil fuel energy will be as obsolete as steam engines. 
                We're not just building clean energy—we're architecting humanity's sustainable future.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div>
                  <div className="text-3xl font-light text-green-400 mb-2">100%</div>
                  <div className="text-sm text-gray-300">Renewable energy systems</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-blue-400 mb-2">50%</div>
                  <div className="text-sm text-gray-300">Reduction in energy costs</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-purple-400 mb-2">Zero</div>
                  <div className="text-sm text-gray-300">Carbon emissions from energy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Deep Dive - Comprehensive Energy Knowledge */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-8">
              Revolutionary Energy Technologies
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Behind every kilowatt lies a breakthrough. Understanding the science, engineering, 
              and economics of tomorrow's energy systems drives our investment strategy.
            </p>
          </div>

          {/* Fusion Energy Deep Dive */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-light text-gray-900">Fusion Energy Revolution</h3>
                </div>
                <p className="text-lg font-light text-gray-600 leading-relaxed mb-8">
                  Fusion represents the ultimate energy source—the same process that powers stars. 
                  By confining plasma at 100 million degrees Celsius using magnetic fields stronger 
                  than Earth's, we can fuse hydrogen isotopes to release enormous amounts of clean energy.
                </p>
                
                <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-400 mb-8">
                  <h4 className="font-medium text-purple-800 mb-3">Technical Breakthrough: Tokamak Optimization</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Our supported research focuses on stellarator designs and high-temperature superconducting 
                    magnets that can achieve Q{'>'}10 (energy gain factor). Current ITER project targets Q=10, 
                    but commercial viability requires Q{'>'}30 with 80%+ availability.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mt-1">
                      <Target className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">Plasma Physics Innovation</h5>
                      <p className="text-sm text-gray-600">Advanced plasma control algorithms using machine learning 
                      to predict and prevent disruptions, maintaining stable fusion reactions.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mt-1">
                      <Battery className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">Materials Engineering</h5>
                      <p className="text-sm text-gray-600">Tritium-breeding blankets and neutron-resistant materials 
                      that can withstand 20+ years of fusion neutron bombardment.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 border border-purple-200">
                <h4 className="text-xl font-medium text-gray-900 mb-6">Fusion Technology Roadmap</h4>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-purple-200">
                    <span className="font-medium text-gray-900">ITER First Plasma</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded text-sm font-medium">2025</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-purple-200">
                    <span className="font-medium text-gray-900">SPARC Q{'>'}2 Achievement</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded text-sm font-medium">2026</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-purple-200">
                    <span className="font-medium text-gray-900">Commercial Demonstration</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm font-medium">2030</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-purple-200">
                    <span className="font-medium text-gray-900">Grid-Scale Deployment</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm font-medium">2035</span>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-purple-100 rounded-lg">
                  <h5 className="font-medium text-purple-800 mb-2">Investment Focus</h5>
                  <p className="text-sm text-purple-700">
                    Supporting 12 fusion startups with $150M+ committed capital, focusing on 
                    high-temperature superconducting magnet technology and alternative confinement approaches.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Solar Technologies */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="lg:order-2">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <Sun className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-light text-gray-900">Next-Generation Solar Systems</h3>
                </div>
                <p className="text-lg font-light text-gray-600 leading-relaxed mb-8">
                  While silicon solar cells approach their theoretical 29% efficiency limit, 
                  breakthrough technologies like perovskite tandems and concentrated photovoltaics 
                  are pushing efficiency beyond 40% while dramatically reducing costs.
                </p>
                
                <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-400 mb-8">
                  <h4 className="font-medium text-orange-800 mb-3">Scientific Breakthrough: Perovskite Stability</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Our research partners have achieved 47.1% efficiency in laboratory perovskite-silicon 
                    tandem cells. The challenge is extending operational lifetime from 1,000 to 25,000+ hours 
                    while maintaining efficiency under real-world conditions.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mt-1">
                      <Thermometer className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">Thermal Management Innovation</h5>
                      <p className="text-sm text-gray-600">Advanced heat dissipation systems using liquid cooling 
                      and selective emitter coatings to maintain optimal operating temperatures.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mt-1">
                      <Microscope className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">Quantum Efficiency Optimization</h5>
                      <p className="text-sm text-gray-600">Quantum dot sensitizers and plasmonic nanostructures 
                      that capture previously unusable portions of the solar spectrum.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 border border-orange-200 lg:order-1">
                <h4 className="text-xl font-medium text-gray-900 mb-6">Solar Technology Matrix</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-orange-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">Silicon (Current)</span>
                      <span className="text-orange-700 font-bold">22%</span>
                    </div>
                    <div className="w-full bg-orange-200 rounded-full h-2">
                      <div className="bg-orange-600 h-2 rounded-full" style={{width: '22%'}}></div>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">$0.20/W - Mature technology</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-orange-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">Perovskite Tandem</span>
                      <span className="text-orange-700 font-bold">47%</span>
                    </div>
                    <div className="w-full bg-orange-200 rounded-full h-2">
                      <div className="bg-orange-600 h-2 rounded-full" style={{width: '47%'}}></div>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">$0.08/W - Target by 2028</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-orange-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">Concentrated PV</span>
                      <span className="text-orange-700 font-bold">52%</span>
                    </div>
                    <div className="w-full bg-orange-200 rounded-full h-2">
                      <div className="bg-orange-600 h-2 rounded-full" style={{width: '52%'}}></div>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">$0.15/W - Utility scale only</div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-orange-100 rounded-lg">
                  <h5 className="font-medium text-orange-800 mb-2">Manufacturing Revolution</h5>
                  <p className="text-sm text-orange-700">
                    Supporting roll-to-roll printing processes that can produce flexible perovskite 
                    cells at 10x the speed of silicon wafer manufacturing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Energy Storage Innovation */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <Battery className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-light text-gray-900">Revolutionary Energy Storage</h3>
                </div>
                <p className="text-lg font-light text-gray-600 leading-relaxed mb-8">
                  Energy storage is the missing link in renewable energy deployment. Advanced battery 
                  chemistries, mechanical storage systems, and novel approaches like liquid air energy 
                  storage are enabling 24/7 renewable power.
                </p>
                
                <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-400 mb-8">
                  <h4 className="font-medium text-green-800 mb-3">Breakthrough: Solid-State Batteries</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Our portfolio companies have achieved 1,000 Wh/kg energy density in solid-state 
                    lithium-metal batteries—3x higher than current Li-ion. Manufacturing scale-up 
                    targets $50/kWh by 2030, making renewable energy with storage cheaper than coal.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mt-1">
                      <Zap className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">Grid-Scale Storage Systems</h5>
                      <p className="text-sm text-gray-600">Compressed air energy storage in underground 
                      caverns achieving 70% round-trip efficiency for seasonal energy storage.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mt-1">
                      <Globe className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">Global Energy Networks</h5>
                      <p className="text-sm text-gray-600">Ultra-high voltage DC transmission lines 
                      enabling intercontinental energy sharing and load balancing.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200">
                <h4 className="text-xl font-medium text-gray-900 mb-6">Storage Technology Comparison</h4>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">Li-ion (Current)</span>
                      <div className="text-right">
                        <div className="text-green-700 font-bold">$100/kWh</div>
                        <div className="text-xs text-gray-600">300 Wh/kg</div>
                      </div>
                    </div>
                    <div className="w-full bg-green-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">Solid-State</span>
                      <div className="text-right">
                        <div className="text-green-700 font-bold">$50/kWh</div>
                        <div className="text-xs text-gray-600">1,000 Wh/kg</div>
                      </div>
                    </div>
                    <div className="w-full bg-green-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">Compressed Air</span>
                      <div className="text-right">
                        <div className="text-green-700 font-bold">$20/kWh</div>
                        <div className="text-xs text-gray-600">Grid-scale only</div>
                      </div>
                    </div>
                    <div className="w-full bg-green-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '70%'}}></div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-green-100 rounded-lg">
                  <h5 className="font-medium text-green-800 mb-2">Investment Impact</h5>
                  <p className="text-sm text-green-700">
                    $300M committed to energy storage innovations, targeting 90% cost reduction 
                    and enabling 100% renewable grids by 2030.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Smart Grid & AI Integration */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-light text-white mb-6">Intelligent Energy Systems</h3>
              <p className="text-lg font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
                The future energy grid is not just clean—it's intelligent. AI-powered systems 
                optimize energy flow in real-time, predict demand, and automatically balance 
                supply across renewable sources.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-medium text-white mb-4">Predictive Analytics</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Machine learning algorithms predict energy demand 24-48 hours in advance 
                  with 98% accuracy, enabling optimal renewable energy dispatch.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-medium text-white mb-4">Distributed Control</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Blockchain-based peer-to-peer energy trading allows every solar panel 
                  and battery to participate in automated energy markets.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-medium text-white mb-4">Autonomous Optimization</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Self-healing grid systems automatically reroute power during outages 
                  and optimize efficiency without human intervention.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-white/10 rounded-2xl p-6 inline-block">
                <p className="text-white font-light italic text-lg">
                  "The smart grid doesn't just distribute electricity—it orchestrates 
                  the symphony of renewable energy across continents."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI and Energy: The Critical Challenge */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-8">
              Artificial Intelligence: Tomorrow's Promise, Today's Energy Crisis
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-4xl mx-auto leading-relaxed">
              AI will revolutionize medicine, accelerate scientific discovery, and solve humanity's greatest challenges. 
              But training a single large language model consumes as much energy as powering 120 homes for a year.
            </p>
          </div>

          {/* The AI Revolution */}
          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            <div>
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-light text-gray-900">The Future AI Will Build</h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-blue-200">
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Healthcare Revolution</h4>
                  <p className="text-gray-600 font-light leading-relaxed">
                    AI will diagnose diseases years before symptoms appear, design personalized medicines, 
                    and accelerate drug discovery from decades to months. Every cancer could become curable, 
                    every genetic disorder preventable.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-blue-200">
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Scientific Breakthrough Acceleration</h4>
                  <p className="text-gray-600 font-light leading-relaxed">
                    From protein folding to climate modeling, AI systems will compress centuries of research 
                    into years. Materials science, quantum computing, and fusion energy will advance at 
                    unprecedented speeds.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-blue-200">
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Human Potential Amplification</h4>
                  <p className="text-gray-600 font-light leading-relaxed">
                    AI tutors will provide personalized education to every child, creative AI will democratize 
                    art and innovation, and AI assistants will eliminate mundane work, freeing humanity 
                    for exploration and creativity.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 text-white">
              <h4 className="text-2xl font-light mb-8">AI's Transformative Promise</h4>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-medium">Universal Access to Expertise</div>
                    <div className="text-blue-200 text-sm">World-class education and medical advice for every person on Earth</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Microscope className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-medium">Accelerated Discovery</div>
                    <div className="text-blue-200 text-sm">Scientific breakthroughs at 100x current pace</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-medium">Global Challenge Solutions</div>
                    <div className="text-blue-200 text-sm">Climate change, poverty, disease eradication</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white/10 rounded-lg">
                <p className="text-blue-100 text-sm italic">
                  "AI represents the most transformative technology in human history. 
                  Its potential to amplify human intelligence and creativity is limitless."
                </p>
              </div>
            </div>
          </div>

          {/* The Energy Crisis */}
          <div className="mb-24">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-12 border border-red-200">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-light text-gray-900 mb-6">The Inconvenient Truth: AI's Energy Appetite</h3>
                <p className="text-lg font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Every breakthrough in AI comes with an exponentially growing energy cost. 
                  The computation required for training advanced AI models is doubling every 3-4 months.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white rounded-xl p-6 text-center border border-red-200">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Thermometer className="w-8 h-8 text-red-600" />
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Training Energy Cost</h4>
                  <div className="text-3xl font-light text-red-600 mb-2">1,287 MWh</div>
                  <div className="text-sm text-gray-600">GPT-4 training consumed equivalent to powering 120 homes for a year</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 text-center border border-red-200">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-orange-600" />
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Data Center Growth</h4>
                  <div className="text-3xl font-light text-orange-600 mb-2">+400%</div>
                  <div className="text-sm text-gray-600">AI data center energy consumption projected increase by 2030</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 text-center border border-red-200">
                  <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Global AI Energy Use</h4>
                  <div className="text-3xl font-light text-yellow-600 mb-2">2-3%</div>
                  <div className="text-sm text-gray-600">Current percentage of global electricity consumption</div>
                </div>
              </div>

              <div className="bg-red-100 rounded-xl p-6 border-l-4 border-red-400">
                <h4 className="font-medium text-red-800 mb-3">The Exponential Challenge</h4>
                <p className="text-red-700 leading-relaxed">
                  Training GPT-3 required 1,287 MWh. GPT-4 needed an estimated 50,000+ MWh. 
                  The next generation of AI models could require 100x more energy. 
                  Without revolutionary advances in clean energy, AI progress could stall due to energy constraints.
                </p>
              </div>
            </div>
          </div>

          {/* The Solution: Clean AI Infrastructure */}
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-light text-gray-900">Sustainable AI Revolution</h3>
              </div>
              
              <p className="text-lg font-light text-gray-600 leading-relaxed mb-8">
                The foundation's mission extends beyond general clean energy—we specifically target 
                the AI industry's energy crisis. By 2030, we aim to power all major AI research 
                and deployment with 100% renewable energy.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mt-1">
                    <Sun className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 mb-1">Dedicated AI Solar Farms</h5>
                    <p className="text-sm text-gray-600">
                      Massive solar installations dedicated exclusively to powering AI data centers, 
                      with co-located battery storage for 24/7 clean power.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mt-1">
                    <Zap className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 mb-1">AI-Optimized Fusion Reactors</h5>
                    <p className="text-sm text-gray-600">
                      Small modular fusion reactors designed specifically for the baseload power 
                      requirements of large-scale AI training facilities.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mt-1">
                    <Battery className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 mb-1">Efficient AI Hardware</h5>
                    <p className="text-sm text-gray-600">
                      Supporting development of neuromorphic chips and quantum processors 
                      that reduce AI computation energy by 1000x.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200">
              <h4 className="text-xl font-medium text-gray-900 mb-6">Our AI-Energy Investment Strategy</h4>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900">Clean AI Data Centers</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm font-medium">$200M</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    100% renewable-powered facilities for AI training and inference
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900">Energy-Efficient AI Chips</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm font-medium">$150M</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Neuromorphic and quantum computing for ultra-low power AI
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900">AI-Optimized Renewable Energy</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm font-medium">$300M</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Dedicated clean energy infrastructure for AI workloads
                  </p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-green-100 rounded-lg">
                <h5 className="font-medium text-green-800 mb-2">Mission Critical</h5>
                <p className="text-sm text-green-700">
                  AI's potential to solve climate change, cure diseases, and unlock human creativity 
                  depends entirely on solving its energy problem. This is not just an investment—it's 
                  a responsibility to the future.
                </p>
              </div>
            </div>
          </div>

          {/* Bold Vision Statement */}
          <div className="mt-24 bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl font-light mb-6">The AI-Energy Convergence</h3>
            <p className="text-xl font-light leading-relaxed mb-8 text-blue-100">
              We stand at a critical juncture. AI can either become humanity's greatest tool 
              or its greatest energy burden. The choice is ours to make—and we choose abundance.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-light text-green-300 mb-2">100%</div>
                <div className="text-sm text-blue-200">Clean energy for all AI by 2030</div>
              </div>
              <div>
                <div className="text-4xl font-light text-yellow-300 mb-2">1000x</div>
                <div className="text-sm text-blue-200">Energy efficiency improvement target</div>
              </div>
              <div>
                <div className="text-4xl font-light text-purple-300 mb-2">∞</div>
                <div className="text-sm text-blue-200">Unlimited potential when energy is abundant</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Vision */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extralight mb-12 leading-tight">
            Powering Tomorrow Together
          </h2>
          <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed text-gray-300">
            <p>
              The age of infinite clean energy is not a distant dream. Every photon captured, 
              every electron stored, every fusion reaction controlled brings us closer to abundance.
            </p>
            <p>
              As the Vacid & Köksal Foundation, we stand behind this vision, 
              empowering innovators and accelerating the technologies that will power our future.
            </p>
            <p className="text-2xl md:text-3xl font-light text-white pt-8">
              Because energy beyond extraction 
              <span className="block mt-4 text-green-300">
                is not just possible, but inevitable.
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
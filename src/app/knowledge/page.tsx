"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Brain, Monitor, Users, Globe, Lightbulb, Target, Building, HandHeart, Cpu, Microscope, Zap } from 'lucide-react';

export default function KnowledgePage() {
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
            src="https://videos.pexels.com/video-files/8134781/8134781-hd_1920_1080_30fps.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/20 to-white/40"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="mb-12">
            <BookOpen className="w-12 h-12 mx-auto text-indigo-400 mb-8" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight mb-12 leading-tight text-gray-900">
            Knowledge Beyond
            <span className="block font-light text-indigo-600 mt-4">
              Barriers
            </span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-light text-gray-600 leading-relaxed mb-8">
              Knowledge locked behind paywalls is knowledge stolen from humanity.
            </p>
            <p className="text-xl md:text-2xl font-light text-gray-500 leading-relaxed">
              We democratize access to education and 
              unleash the infinite potential of every curious mind.
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
              <span className="block text-3xl md:text-4xl font-light text-indigo-600 mt-6">
                Knowledge Liberation Mission
              </span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-6">From Gatekeepers to Open Access</h3>
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  Traditional education systems create artificial scarcity around knowledge. 
                  We believe every breakthrough in human understanding belongs to all humanity. 
                  Through AI-powered learning platforms, open-source educational resources, 
                  and universal access technologies, we're dismantling the walls that separate 
                  curious minds from the information they need.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-6">Personalized Learning for Every Mind</h3>
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  No two minds learn the same way. We support technologies that adapt to 
                  individual learning styles, cultural contexts, and personal goals. 
                  From AI tutors that understand your specific challenges to immersive 
                  simulations that make complex concepts tangible, we're personalizing 
                  education at global scale.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-12 border border-indigo-100">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Brain className="w-6 h-6 text-indigo-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-normal text-gray-900 mb-2">AI-Powered Learning</h4>
                    <p className="text-gray-600 font-light">Adaptive algorithms that personalize education to individual learning patterns</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Globe className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-normal text-gray-900 mb-2">Open Knowledge Networks</h4>
                    <p className="text-gray-600 font-light">Decentralized platforms for sharing scientific research and educational content</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Monitor className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-normal text-gray-900 mb-2">Digital Equity</h4>
                    <p className="text-gray-600 font-light">Universal internet access and device distribution for underserved communities</p>
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
              Democratizing Human Knowledge
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Behind every educational breakthrough is a educator, a technologist, an activist. 
              Empowering them to tear down the barriers to knowledge is our sacred mission.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-6">Educational Institutions</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                We support universities, schools, and research institutions in adopting 
                open-access policies and developing innovative learning technologies that 
                break down traditional barriers to knowledge.
              </p>
              <div className="space-y-3 text-sm text-gray-500 font-light">
                <p>• Open access research grants ($75M+ total support)</p>
                <p>• AI tutoring system development</p>
                <p>• Digital infrastructure modernization</p>
                <p>• Global knowledge sharing platforms</p>
                <p>• Teacher training & technology integration</p>
                <p>• Multilingual content creation programs</p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-6">EdTech Innovators</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Throughout educational technology companies' journey from idea to global impact, 
                we serve as catalyst, technical advisor, and strategic partner—not just investor.
              </p>
              <div className="space-y-3 text-sm text-gray-500 font-light">
                <p>• Growth capital ($2M - $25M range)</p>
                <p>• Open-source technology development</p>
                <p>• Global market expansion support</p>
                <p>• Accessibility & inclusion guidance</p>
                <p>• Regulatory navigation assistance</p>
                <p>• Impact measurement frameworks</p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <HandHeart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-6">Knowledge Activists</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                We provide comprehensive support to individuals and communities fighting 
                for educational equity and information freedom worldwide.
              </p>
              <div className="space-y-3 text-sm text-gray-500 font-light">
                <p>• Educational equity grants ($25K - $1M)</p>
                <p>• Digital divide bridging projects</p>
                <p>• Community learning center establishment</p>
                <p>• Open educational resource creation</p>
                <p>• Technology access programs</p>
                <p>• Policy advocacy & legal support</p>
              </div>
            </div>
          </div>

          {/* Additional Support Types */}
          <div className="bg-white rounded-3xl p-12 border border-gray-100">
            <h3 className="text-3xl font-light text-gray-900 mb-12 text-center">Strategic Knowledge Initiatives</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-5 h-5 text-orange-600" />
                </div>
                <h4 className="text-lg font-normal text-gray-900 mb-4">Emergency Education Response</h4>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  Rapid deployment of educational technology and internet access during 
                  crises, ensuring learning never stops even in emergencies.
                </p>
              </div>
              
              <div>
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-5 h-5 text-green-600" />
                </div>
                <h4 className="text-lg font-normal text-gray-900 mb-4">Digital Equity Programs</h4>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  Eliminating the digital divide through device distribution, 
                  internet infrastructure, and digital literacy training for all.
                </p>
              </div>
              
              <div>
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="text-lg font-normal text-gray-900 mb-4">AI Learning Integration</h4>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  Supporting the development and deployment of AI-powered educational 
                  tools that adapt to individual learning needs and preferences.
                </p>
              </div>
              
              <div>
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                </div>
                <h4 className="text-lg font-normal text-gray-900 mb-4">Open Knowledge Commons</h4>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  Building and maintaining open-access platforms for scientific research, 
                  educational materials, and human knowledge preservation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Educational Technologies - Deep Dive */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-8">
              The Sacred Democracy of Knowledge
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Knowledge is humanity's greatest inheritance. Through AI tutoring, quantum simulations, 
              and immersive learning environments, we're creating educational experiences that 
              adapt to every mind and transcend every boundary.
            </p>
          </div>

          {/* AI-Powered Education Revolution */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-light text-gray-900">AI Tutoring: Every Child's Personal Genius</h3>
                </div>
                <p className="text-lg font-light text-gray-600 leading-relaxed mb-8">
                  Imagine having Einstein as your physics tutor, Shakespeare for literature, 
                  and Feynman for mathematics—all available 24/7, infinitely patient, and 
                  perfectly adapted to your learning style. AI tutoring systems are making this reality.
                </p>
                
                <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-400 mb-8">
                  <h4 className="font-medium text-blue-800 mb-3">Breakthrough: Socratic AI Teachers</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Our funded AI systems don't just provide answers—they ask the right questions. 
                    Using advanced natural language processing, they guide students through Socratic 
                    dialogues, achieving 85% improvement in critical thinking skills compared to 
                    traditional instruction methods.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mt-1">
                      <Cpu className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">Adaptive Learning Algorithms</h5>
                      <p className="text-sm text-gray-600">Real-time adjustment of difficulty, pace, and content 
                      based on neural network analysis of student engagement and comprehension patterns.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mt-1">
                      <Globe className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">Multilingual Knowledge Transfer</h5>
                      <p className="text-sm text-gray-600">Instant translation and cultural adaptation of 
                      educational content, making world-class education accessible in any language.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-200">
                <h4 className="text-xl font-medium text-gray-900 mb-6">AI Education Impact Metrics</h4>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-blue-200">
                    <span className="font-medium text-gray-900">Learning Speed Improvement</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm font-medium">3.2x faster</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-blue-200">
                    <span className="font-medium text-gray-900">Knowledge Retention Rate</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm font-medium">92%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-blue-200">
                    <span className="font-medium text-gray-900">Global Accessibility</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded text-sm font-medium">180+ languages</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-blue-200">
                    <span className="font-medium text-gray-900">Cost Reduction</span>
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded text-sm font-medium">95% cheaper</span>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-blue-100 rounded-lg">
                  <h5 className="font-medium text-blue-800 mb-2">Global Deployment</h5>
                  <p className="text-sm text-blue-700">
                    Supporting 45+ AI education companies with $125M+ investment, targeting 
                    universal access to personalized tutoring by 2028.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Digital Divide: The Modern Inequality */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="lg:order-2">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <Monitor className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-light text-gray-900">Digital Divide: The Knowledge Apartheid</h3>
                </div>
                <p className="text-lg font-light text-gray-600 leading-relaxed mb-8">
                  3.7 billion people lack internet access. In 2024, this isn't just inconvenience—it's 
                  intellectual exile. Every day without connection is another day cut off from humanity's 
                  collective knowledge, online learning, and digital opportunity.
                </p>
                
                <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-400 mb-8">
                  <h4 className="font-medium text-red-800 mb-3">Crisis: Educational Inequality Acceleration</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    COVID-19 revealed the brutal reality: students with internet access advanced, 
                    while disconnected students fell 6-12 months behind. We're funding satellite 
                    networks, mesh networks, and offline-capable educational systems to ensure 
                    this never happens again.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                      <Zap className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">Satellite Education Networks</h5>
                      <p className="text-sm text-gray-600">Low-Earth orbit constellations delivering 
                      high-speed internet and educational content to the world's most remote regions.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                      <Target className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">Offline Learning Systems</h5>
                      <p className="text-sm text-gray-600">Solar-powered educational devices with months 
                      of content, sync when connection available, work perfectly in isolation.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-8 border border-red-200 lg:order-1">
                <h4 className="text-xl font-medium text-gray-900 mb-6">Digital Access Progress</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-red-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">Global Internet Access</span>
                      <span className="text-red-700 font-bold">63%</span>
                    </div>
                    <div className="w-full bg-red-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{width: '63%'}}></div>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">3.7B people still disconnected</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-red-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">Educational Device Access</span>
                      <span className="text-red-700 font-bold">45%</span>
                    </div>
                    <div className="w-full bg-red-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{width: '45%'}}></div>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">2.8B children lack learning devices</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-red-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">Digital Literacy</span>
                      <span className="text-red-700 font-bold">38%</span>
                    </div>
                    <div className="w-full bg-red-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{width: '38%'}}></div>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">3.1B people lack basic digital skills</div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-red-100 rounded-lg">
                  <h5 className="font-medium text-red-800 mb-2">Our Mission: Universal Access by 2030</h5>
                  <p className="text-sm text-red-700">
                    $300M committed to eliminating the digital divide through satellite networks, 
                    device distribution, and digital literacy programs worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quantum Computing Education */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-light text-gray-900">Quantum Education: Preparing Tomorrow's Minds</h3>
                </div>
                <p className="text-lg font-light text-gray-600 leading-relaxed mb-8">
                  Quantum computing will revolutionize everything from drug discovery to cryptography. 
                  Yet most universities still don't teach quantum programming. We're building the 
                  educational infrastructure for the quantum age—before it arrives.
                </p>
                
                <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-400 mb-8">
                  <h4 className="font-medium text-purple-800 mb-3">Innovation: Quantum Learning Simulators</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Our quantum education platforms let students program actual quantum computers 
                    through cloud interfaces, visualize quantum states in real-time, and run 
                    algorithms on 50+ qubit systems. Previously impossible concepts become intuitive.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mt-1">
                      <Microscope className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">Visual Quantum States</h5>
                      <p className="text-sm text-gray-600">Interactive 3D visualizations that make 
                      superposition, entanglement, and quantum interference tangible and understandable.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mt-1">
                      <Brain className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">Gamified Quantum Learning</h5>
                      <p className="text-sm text-gray-600">Game-based environments where students solve 
                      puzzles using quantum algorithms, making abstract concepts engaging and memorable.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-8 border border-purple-200">
                <h4 className="text-xl font-medium text-gray-900 mb-6">Quantum Education Pipeline</h4>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-purple-200">
                    <span className="font-medium text-gray-900">K-12 Quantum Concepts</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded text-sm font-medium">2025</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-purple-200">
                    <span className="font-medium text-gray-900">University Quantum Programming</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded text-sm font-medium">2026</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-purple-200">
                    <span className="font-medium text-gray-900">Professional Quantum Training</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm font-medium">2027</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-purple-200">
                    <span className="font-medium text-gray-900">Global Quantum Literacy</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm font-medium">2030</span>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-purple-100 rounded-lg">
                  <h5 className="font-medium text-purple-800 mb-2">Quantum Workforce Ready</h5>
                  <p className="text-sm text-purple-700">
                    Preparing 1M+ students worldwide for quantum careers through hands-on learning 
                    with real quantum computers and industry partnerships.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Immersive Learning Revolution */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="lg:order-2">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <Monitor className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-light text-gray-900">Immersive Learning: Step Inside Knowledge</h3>
                </div>
                <p className="text-lg font-light text-gray-600 leading-relaxed mb-8">
                  Why read about ancient Rome when you can walk through it? Why study molecular 
                  structures in textbooks when you can manipulate atoms with your hands? 
                  VR and AR are transforming abstract concepts into tangible experiences.
                </p>
                
                <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-400 mb-8">
                  <h4 className="font-medium text-green-800 mb-3">Breakthrough: Neural Interface Learning</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Early-stage brain-computer interfaces allow direct knowledge transfer for 
                    procedural skills. Students can download muscle memory for piano playing, 
                    language pronunciation, and complex motor skills in hours instead of years.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mt-1">
                      <Globe className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">Historical Immersion</h5>
                      <p className="text-sm text-gray-600">Students witness historical events firsthand, 
                      walk through ancient civilizations, and interact with historical figures.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mt-1">
                      <Microscope className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">Molecular Manipulation</h5>
                      <p className="text-sm text-gray-600">Virtual labs where students design molecules, 
                      simulate chemical reactions, and understand atomic-level interactions through touch.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200 lg:order-1">
                <h4 className="text-xl font-medium text-gray-900 mb-6">Immersive Learning Impact</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">Information Retention</span>
                      <span className="text-green-700 font-bold">90%</span>
                    </div>
                    <div className="w-full bg-green-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">vs 10% traditional lecture</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">Learning Speed</span>
                      <span className="text-green-700 font-bold">4x faster</span>
                    </div>
                    <div className="w-full bg-green-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '80%'}}></div>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">Measured across multiple subjects</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">Student Engagement</span>
                      <span className="text-green-700 font-bold">95%</span>
                    </div>
                    <div className="w-full bg-green-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">Active participation rates</div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-green-100 rounded-lg">
                  <h5 className="font-medium text-green-800 mb-2">$180M VR/AR Education Investment</h5>
                  <p className="text-sm text-green-700">
                    Supporting 30+ immersive learning companies to make experiential education 
                    available in every classroom worldwide by 2027.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* The Sacred Promise of Universal Knowledge */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-light text-white mb-6">The Universal Right to Know</h3>
              <p className="text-lg font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
                When every child has an AI tutor, when every question has an instant answer, 
                when the sum of human knowledge fits in every pocket—we achieve true educational equality. 
                This is not just technology—this is justice.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-medium text-white mb-4">Adaptive Intelligence</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Every learning system adapts to individual minds, removing barriers 
                  and maximizing each person's intellectual potential.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-medium text-white mb-4">Universal Access</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Geographic location, economic status, and physical limitations 
                  no longer determine educational opportunities.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-medium text-white mb-4">Open Knowledge</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  All human knowledge becomes freely accessible, with no paywalls 
                  or artificial restrictions limiting curious minds.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-white/10 rounded-2xl p-6 inline-block">
                <p className="text-white font-light italic text-lg">
                  "When knowledge flows like water, when learning adapts like DNA, 
                  when curiosity knows no bounds—humanity achieves its true potential."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Vision */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extralight mb-12 leading-tight">
            Building the Learning Future Together
          </h2>
          <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed text-gray-300">
            <p>
              The age of educational inequality is ending. Every mind will have access to 
              humanity's greatest teachers, every question will find its answer, 
              every curiosity will be nurtured without limit.
            </p>
            <p>
              As the Vacid & Köksal Foundation, we stand behind this vision, 
              empowering educators, technologists, and dreamers who refuse to accept 
              that knowledge should have gatekeepers.
            </p>
            <p className="text-2xl md:text-3xl font-light text-white pt-8">
              Because knowledge beyond barriers 
              <span className="block mt-4 text-indigo-300">
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
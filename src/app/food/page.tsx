"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Wheat, 
  Droplets, 
  Heart, 
  TrendingUp, 
  Globe, 
  Users, 
  MapPin, 
  AlertTriangle,
  Beaker,
  LineChart,
  BarChart,
  Activity,
  Target,
  Leaf,
  Factory,
  Microscope,
  Thermometer
} from 'lucide-react';

export default function FoodPage() {
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
            src="https://videos.pexels.com/video-files/6893661/6893661-hd_1920_1080_30fps.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/20 to-white/40"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="mb-12">
            <Wheat className="w-12 h-12 mx-auto text-orange-400 mb-8" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight mb-12 leading-tight text-gray-900">
            Food Beyond
            <span className="block font-light text-orange-600 mt-4">
              Scarcity
            </span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-light text-gray-600 leading-relaxed mb-8">
              Hunger in an age of abundance is unacceptable.
            </p>
            <p className="text-xl md:text-2xl font-light text-gray-500 leading-relaxed">
              We support technologies that transform agriculture, optimize distribution, 
              and ensure every person has access to nutritious food.
            </p>
          </div>
        </div>
      </section>

      {/* The Cruel Reality - Emotional Section */}
      <section className="py-24 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Heart className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              The Cruel Reality
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              These numbers are not just statistics. Behind each one is a life story, 
              a family, a future. And all of them have solutions within our reach.
            </p>
          </div>

          {/* Professional Data Visualization */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Global Hunger Impact Chart */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 mr-3 text-red-500" />
                Global Hunger Trends (2024)
              </h3>
              <div className="space-y-6">
                <div className="relative">
                  <div className="flex items-end justify-between h-32 mb-4 bg-gray-50 rounded-lg p-4">
                    <div className="bg-gradient-to-t from-red-500 to-red-300 rounded-lg w-12 flex items-end justify-center text-white text-xs font-bold pb-2 shadow-lg" style={{height: '85%'}}>
                      <span className="transform -rotate-90 whitespace-nowrap">Sub-Saharan</span>
                    </div>
                    <div className="bg-gradient-to-t from-orange-500 to-orange-300 rounded-lg w-12 flex items-end justify-center text-white text-xs font-bold pb-2 shadow-lg" style={{height: '45%'}}>
                      <span className="transform -rotate-90 whitespace-nowrap">S. Asia</span>
                    </div>
                    <div className="bg-gradient-to-t from-amber-500 to-amber-300 rounded-lg w-12 flex items-end justify-center text-white text-xs font-bold pb-2 shadow-lg" style={{height: '25%'}}>
                      <span className="transform -rotate-90 whitespace-nowrap">L. America</span>
                    </div>
                    <div className="bg-gradient-to-t from-emerald-500 to-emerald-300 rounded-lg w-12 flex items-end justify-center text-white text-xs font-bold pb-2 shadow-lg" style={{height: '15%'}}>
                      <span className="transform -rotate-90 whitespace-nowrap">Developed</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-xs text-gray-700 text-center font-medium">
                    <span className="bg-red-100 rounded px-2 py-1">23.5%</span>
                    <span className="bg-orange-100 rounded px-2 py-1">12.8%</span>
                    <span className="bg-amber-100 rounded px-2 py-1">7.2%</span>
                    <span className="bg-emerald-100 rounded px-2 py-1">2.1%</span>
                  </div>
                </div>
                <div className="bg-red-50 rounded-xl p-4 border-l-4 border-red-400">
                  <div className="text-sm text-gray-700">
                    <strong className="text-red-600">Our Foundation's Mission:</strong> To address this inequality through technology by 
                    investing in precision agriculture systems and AI-powered distribution solutions.
                  </div>
                </div>
              </div>
            </div>

            {/* Food Waste vs Production Chart */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <BarChart className="w-6 h-6 mr-3 text-green-500" />
                Global Food Flow Analysis
              </h3>
              <div className="space-y-6">
                <div className="relative bg-gray-50 rounded-lg p-4">
                  {/* Sankey-style flow visualization with better contrast */}
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-24 bg-gradient-to-r from-green-600 to-green-500 rounded-full h-6 flex items-center justify-center text-white text-xs font-bold shadow-md">
                        4.0B tons
                      </div>
                      <div className="text-sm text-gray-800 ml-3 font-medium">Global Production</div>
                    </div>
                    <div className="flex items-center ml-6">
                      <div className="w-20 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full h-5 flex items-center justify-center text-white text-xs font-bold shadow-md">
                        2.7B tons
                      </div>
                      <div className="text-sm text-gray-800 ml-3 font-medium">Consumer Ready</div>
                    </div>
                    <div className="flex items-center ml-6">
                      <div className="w-16 bg-gradient-to-r from-red-600 to-red-500 rounded-full h-4 flex items-center justify-center text-white text-xs font-bold shadow-md">
                        1.3B tons
                      </div>
                      <div className="text-sm text-gray-800 ml-3 font-medium">Wasted</div>
                    </div>
                    <div className="flex items-center ml-12">
                      <div className="w-8 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full h-3 flex items-center justify-center text-white text-xs font-bold shadow-md">
                        200M
                      </div>
                      <div className="text-sm text-gray-800 ml-3 font-medium">Could Feed Hungry</div>
                    </div>
                  </div>
                </div>
                <div className="bg-orange-50 rounded-xl p-4 border-l-4 border-orange-400">
                  <div className="text-sm text-gray-700">
                    <strong className="text-orange-600">Our Support Strategy:</strong> By investing in blockchain-based supply chain tracking 
                    and AI-powered demand forecasting solutions, we aim to reduce this waste by 40%.
                  </div>
                </div>
              </div>
            </div>

            {/* Economic Impact Breakdown - Fixed Pie Chart */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <LineChart className="w-6 h-6 mr-3 text-blue-500" />
                Economic Loss Breakdown
              </h3>
              <div className="space-y-6">
                <div className="relative">
                  {/* Enhanced pie chart with better visibility */}
                  <div className="w-32 h-32 mx-auto mb-4 relative">
                    <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                      {/* Healthcare costs - 35% */}
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#ef4444" strokeWidth="20" 
                              strokeDasharray="87.96 251.33" strokeDashoffset="0" />
                      {/* Lost productivity - 20% */}
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#f97316" strokeWidth="20" 
                              strokeDasharray="50.26 251.33" strokeDashoffset="-87.96" />
                      {/* Education impact - 15% */}
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#eab308" strokeWidth="20" 
                              strokeDasharray="37.7 251.33" strokeDashoffset="-138.22" />
                      {/* Social programs - 15% */}
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#22c55e" strokeWidth="20" 
                              strokeDasharray="37.7 251.33" strokeDashoffset="-175.92" />
                      {/* Infrastructure - 15% */}
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" strokeWidth="20" 
                              strokeDasharray="37.7 251.33" strokeDashoffset="-213.62" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                        <div>
                          <div className="text-lg font-bold text-gray-900">$3.5T</div>
                          <div className="text-xs text-gray-600">Loss</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center bg-red-50 rounded p-2">
                      <div className="w-4 h-4 bg-red-500 rounded mr-2"></div>
                      <span className="text-gray-800 font-medium">Healthcare costs (35%)</span>
                    </div>
                    <div className="flex items-center bg-orange-50 rounded p-2">
                      <div className="w-4 h-4 bg-orange-500 rounded mr-2"></div>
                      <span className="text-gray-800 font-medium">Lost productivity (20%)</span>
                    </div>
                    <div className="flex items-center bg-yellow-50 rounded p-2">
                      <div className="w-4 h-4 bg-yellow-500 rounded mr-2"></div>
                      <span className="text-gray-800 font-medium">Education impact (15%)</span>
                    </div>
                    <div className="flex items-center bg-green-50 rounded p-2">
                      <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                      <span className="text-gray-800 font-medium">Social programs (15%)</span>
                    </div>
                    <div className="flex items-center bg-blue-50 rounded p-2">
                      <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
                      <span className="text-gray-800 font-medium">Infrastructure (15%)</span>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-400">
                  <div className="text-sm text-gray-700">
                    <strong className="text-blue-600">Technology for Humanity:</strong> Every $1 in food security investment 
                    provides $16 in economic returns by supporting projects that systematically reduce these losses.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Water Statistics Dashboard - Enhanced with Mission Context */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-3xl p-8 shadow-2xl text-center border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">200M</div>
              <div className="text-gray-800 font-semibold mb-2">Without access to clean water</div>
              <div className="text-sm text-gray-600 bg-blue-50 rounded-lg px-3 py-2">25% of world population</div>
              <div className="mt-3 p-2 bg-blue-100 rounded-lg">
                <p className="text-xs text-blue-800 font-medium">
                  Foundation Target: Clean water access for 500M people by 2030
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl text-center border border-red-100">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-red-600 mb-2">1000</div>
              <div className="text-gray-800 font-semibold mb-2">Daily water-related deaths</div>
              <div className="text-sm text-gray-600 bg-red-50 rounded-lg px-3 py-2">Every 30 seconds 1 child</div>
              <div className="mt-3 p-2 bg-red-100 rounded-lg">
                <p className="text-xs text-red-800 font-medium">
                  Goal: Zero preventable water-related deaths through technology
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl text-center border border-orange-100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-orange-600 mb-2">4000</div>
              <div className="text-gray-800 font-semibold mb-2">Affected by water scarcity</div>
              <div className="text-sm text-gray-600 bg-orange-50 rounded-lg px-3 py-2">Experiencing severe water stress</div>
              <div className="mt-3 p-2 bg-orange-100 rounded-lg">
                <p className="text-xs text-orange-800 font-medium">
                  Target: Advanced prediction systems for 100 water-stressed regions
                </p>
              </div>
            </div>
          </div>

          {/* Health Impact & Foundation's Response */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-red-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Heart className="w-6 h-6 mr-3 text-red-500" />
                  Impact on Children
                </h3>
                <div className="space-y-4">
                  <div className="bg-red-50 rounded-xl p-4 border-l-4 border-red-400">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gray-800 font-semibold">Every 10 seconds 1 child</span>
                      <span className="text-red-600 font-bold bg-red-100 px-3 py-1 rounded-full text-sm">Hunger-related death</span>
                    </div>
                    <div className="w-full bg-red-200 rounded-full h-3">
                      <div className="bg-red-500 h-3 rounded-full animate-pulse w-full shadow-sm"></div>
                    </div>
                    <p className="text-sm text-gray-700 mt-3">
                      Malnutrition permanently affects children's physical and mental development.
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-400">
                    <h4 className="font-bold text-blue-700 mb-2">Our Foundation's AI-Powered Solutions</h4>
                    <p className="text-sm text-gray-700">
                      We support early intervention systems by investing in malnutrition prediction algorithms. 
                      We enable real-time monitoring of children's growth parameters by supporting IoT sensor projects.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <MapPin className="w-6 h-6 mr-3 text-orange-500" />
                  Critical Regions Analysis
                </h3>
                <div className="space-y-4">
                  <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800">Chad</span>
                      <span className="text-red-700 font-bold bg-red-100 px-2 py-1 rounded">40.2%</span>
                    </div>
                    <div className="w-full bg-red-200 rounded-full h-2">
                      <div className="bg-red-600 h-2 rounded-full shadow-sm" style={{width: '40.2%'}}></div>
                    </div>
                    <div className="text-xs text-red-600 mt-1 font-medium">Pilot program launched</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800">Madagascar</span>
                      <span className="text-orange-700 font-bold bg-orange-100 px-2 py-1 rounded">38.4%</span>
                    </div>
                    <div className="w-full bg-orange-200 rounded-full h-2">
                      <div className="bg-orange-600 h-2 rounded-full shadow-sm" style={{width: '38.4%'}}></div>
                    </div>
                    <div className="text-xs text-orange-600 mt-1 font-medium">Smart farming deployment</div>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800">Yemen</span>
                      <span className="text-yellow-700 font-bold bg-yellow-100 px-2 py-1 rounded">35.8%</span>
                    </div>
                    <div className="w-full bg-yellow-200 rounded-full h-2">
                      <div className="bg-yellow-600 h-2 rounded-full shadow-sm" style={{width: '35.8%'}}></div>
                    </div>
                    <div className="text-xs text-yellow-600 mt-1 font-medium">Emergency nutrition tech</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Target className="w-6 h-6 mr-3 text-green-500" />
                  Our Technology for Humanity Approach
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  With our Technology for Humanity vision, we invest in AI-powered agriculture systems, 
                  support companies developing smart distribution networks, and finance sustainable food production technologies. 
                  Because hunger is not a technical problem, but a problem of <strong className="text-green-700">investment and support</strong>.
                </p>
                
                {/* Enhanced Success Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 text-center shadow-md border border-green-100">
                    <div className="text-2xl font-bold text-green-600 mb-1">90%</div>
                    <div className="text-xs text-gray-600 font-medium">Target precision farming yield</div>
                    <div className="text-xs text-green-600 mt-1">Goal for 25 countries</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center shadow-md border border-blue-100">
                    <div className="text-2xl font-bold text-blue-600 mb-1">70%</div>
                    <div className="text-xs text-gray-600 font-medium">Water usage reduction target</div>
                    <div className="text-xs text-blue-600 mt-1">Smart irrigation goals</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center shadow-md border border-purple-100">
                    <div className="text-2xl font-bold text-purple-600 mb-1">50%</div>
                    <div className="text-xs text-gray-600 font-medium">Post-harvest loss reduction</div>
                    <div className="text-xs text-purple-600 mt-1">AI tracking systems</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center shadow-md border border-orange-100">
                    <div className="text-2xl font-bold text-orange-600 mb-1">85%</div>
                    <div className="text-xs text-gray-600 font-medium">Supply chain efficiency goal</div>
                    <div className="text-xs text-orange-600 mt-1">Blockchain solutions</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Activity className="w-6 h-6 mr-3 text-indigo-500" />
                  Our Foundation's Target Goals (2030)
                </h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800">Children to Reach</span>
                      <span className="text-green-700 font-bold text-lg">15M</span>
                    </div>
                    <div className="w-full bg-green-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full shadow-sm" style={{width: '0%'}}></div>
                    </div>
                    <div className="text-xs text-green-700 mt-1 font-medium">Target: Comprehensive nutrition support</div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800">Communities to Support</span>
                      <span className="text-blue-700 font-bold text-lg">2,000</span>
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full shadow-sm" style={{width: '0%'}}></div>
                    </div>
                    <div className="text-xs text-blue-700 mt-1 font-medium">Goal: Sustainable food systems</div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800">Technologies to Deploy</span>
                      <span className="text-purple-700 font-bold text-lg">500</span>
                    </div>
                    <div className="w-full bg-purple-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full shadow-sm" style={{width: '0%'}}></div>
                    </div>
                    <div className="text-xs text-purple-700 mt-1 font-medium">AI + IoT integrated solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Focus Areas - Professional Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-8">
              Strategic Investment Focus Areas
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-4xl mx-auto leading-relaxed">
              By investing in disruptive technologies, we support systematic food security solutions. 
              We provide support to global supply chain optimization, precision agriculture, and alternative protein platforms.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* AgTech & Precision Farming */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-light text-gray-900">AgTech & Precision Farming</h3>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">Market Opportunity</h4>
                  <p className="text-sm leading-relaxed">
                    Global precision agriculture market projected to reach $43.4B by 2030. 
                    AI-driven crop monitoring reduces resource waste by 35% while increasing 
                    yield efficiency by 87% through real-time optimization.
                  </p>
                </div>
                
                <div className="bg-green-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">Investment Priorities</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• IoT sensor networks with edge computing ($2-15M tickets)</li>
                    <li>• Autonomous farming equipment and drone systems</li>
                    <li>• Predictive analytics platforms for crop diseases</li>
                    <li>• Vertical farming infrastructure with controlled environments</li>
                    <li>• Soil microbiome optimization technologies</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">Success Metrics</h4>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">15-40%</div>
                      <div>Yield Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">25-60%</div>
                      <div>Resource Efficiency</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">12-18 months</div>
                      <div>ROI Timeline</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-600">250-400%</div>
                      <div>Expected Returns</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Alternative Protein Systems */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mr-4">
                  <Microscope className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-light text-gray-900">Alternative Protein Systems</h3>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">Market Opportunity</h4>
                  <p className="text-sm leading-relaxed">
                    Alternative protein market valued at $290B by 2035. Cellular agriculture 
                    offers 95% land use reduction, 78% lower emissions, while maintaining 
                    identical nutritional profiles to conventional proteins.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">Investment Priorities</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Cultivated meat bioreactor scaling ($10-50M tickets)</li>
                    <li>• Precision fermentation platforms for proteins</li>
                    <li>• Plant-based ingredient optimization technologies</li>
                    <li>• Hybrid protein production systems</li>
                    <li>• Novel food processing and texture engineering</li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">Impact Projections</h4>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">95%</div>
                      <div>Land Use Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">78%</div>
                      <div>GHG Emissions Cut</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-red-600">96%</div>
                      <div>Water Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">50%</div>
                      <div>Cost Reduction by 2030</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Supply Chain Intelligence */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mr-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-light text-gray-900">Supply Chain Intelligence</h3>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">Market Opportunity</h4>
                  <p className="text-sm leading-relaxed">
                    Global food loss reaches $1.3T annually. AI-powered supply chain 
                    optimization reduces post-harvest losses by 40%, while blockchain 
                    traceability eliminates 90% of food fraud incidents.
                  </p>
                </div>
                
                <div className="bg-orange-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">Investment Priorities</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Blockchain-based traceability platforms ($1-10M tickets)</li>
                    <li>• AI-powered demand forecasting systems</li>
                    <li>• Cold chain optimization and monitoring IoT</li>
                    <li>• Last-mile delivery automation for rural areas</li>
                    <li>• Food quality prediction and shelf-life extension</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">Technology ROI</h4>
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Technology ROI Matrix</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                        <span className="font-medium text-gray-900">Vertical Farming</span>
                        <div className="flex items-center">
                          <span className="text-green-700 font-bold mr-3 bg-green-100 px-2 py-1 rounded">400%</span>
                          <div className="w-16 bg-green-200 rounded-full h-3">
                            <div className="bg-green-600 h-3 rounded-full w-full shadow-sm"></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <span className="font-medium text-gray-900">Smart Irrigation</span>
                        <div className="flex items-center">
                          <span className="text-blue-700 font-bold mr-3 bg-blue-100 px-2 py-1 rounded">285%</span>
                          <div className="w-16 bg-blue-200 rounded-full h-3">
                            <div className="bg-blue-600 h-3 rounded-full shadow-sm" style={{width: '71%'}}></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200">
                        <span className="font-medium text-gray-900">Blockchain Supply</span>
                        <div className="flex items-center">
                          <span className="text-purple-700 font-bold mr-3 bg-purple-100 px-2 py-1 rounded">195%</span>
                          <div className="w-16 bg-purple-200 rounded-full h-3">
                            <div className="bg-purple-600 h-3 rounded-full shadow-sm" style={{width: '49%'}}></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg border border-orange-200">
                        <span className="font-medium text-gray-900">Alternative Proteins</span>
                        <div className="flex items-center">
                          <span className="text-orange-700 font-bold mr-3 bg-orange-100 px-2 py-1 rounded">340%</span>
                          <div className="w-16 bg-orange-200 rounded-full h-3">
                            <div className="bg-orange-600 h-3 rounded-full shadow-sm" style={{width: '85%'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg border-l-4 border-gray-400">
                      <p className="text-sm text-gray-700">
                        <strong className="text-gray-800">Vakfımızın Teknoloji Portföyü:</strong> Bu ROI verilerine dayalı 
                        olarak stratejik yatırımlarımızı bu teknolojilere yönlendiriyoruz ve destekliyoruz.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Water-Food Nexus Solutions */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-light text-gray-900">Water-Food Nexus Solutions</h3>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">Market Opportunity</h4>
                  <p className="text-sm leading-relaxed">
                    Agriculture consumes 70% of global freshwater. Smart irrigation 
                    systems reduce consumption by 65% while increasing crop yields by 45%. 
                    $4.8B market growing at 14.5% CAGR.
                  </p>
                </div>
                
                <div className="bg-cyan-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">Investment Priorities</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Smart irrigation and fertigation systems ($500K-5M)</li>
                    <li>• Atmospheric water generation for agriculture</li>
                    <li>• Desalination technologies for crop irrigation</li>
                    <li>• Aquaponics and hydroponic scaling platforms</li>
                    <li>• Water quality monitoring and purification</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">Efficiency Gains</h4>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="text-center bg-white rounded-lg p-3 shadow-sm border border-cyan-200">
                      <div className="text-lg font-bold text-cyan-600">65%</div>
                      <div className="text-gray-700 font-medium">Water Savings</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-3 shadow-sm border border-blue-200">
                      <div className="text-lg font-bold text-blue-600">45%</div>
                      <div className="text-gray-700 font-medium">Yield Increase</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-3 shadow-sm border border-green-200">
                      <div className="text-lg font-bold text-green-600">30%</div>
                      <div className="text-gray-700 font-medium">Energy Reduction</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-3 shadow-sm border border-purple-200">
                      <div className="text-lg font-bold text-purple-600">18-24 months</div>
                      <div className="text-gray-700 font-medium">Payback Period</div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-cyan-100 rounded-lg border-l-4 border-cyan-400">
                    <p className="text-sm text-cyan-800">
                      <strong>Foundation Innovation:</strong> Bu verimlilik artışları water-food nexus 
                      yaklaşımımızın somut sonuçları.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Investment Philosophy & Portfolio Allocation */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl font-light mb-6">Investment Philosophy</h3>
            <p className="text-xl font-light leading-relaxed mb-8 text-gray-200 max-w-4xl mx-auto">
              Technology-driven solutions to address the $3.5T annual economic loss from malnutrition. 
              Our portfolio focuses on scalable innovations with measurable impact on global food security.
            </p>
            
            {/* Portfolio Allocation Matrix */}
            <div className="grid md:grid-cols-4 gap-8 mt-12 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-light text-green-400 mb-2">$75M</div>
                <div className="text-sm text-gray-300 mb-4">AgTech & Precision Farming</div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{width: '50%'}}></div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-light text-blue-400 mb-2">$45M</div>
                <div className="text-sm text-gray-300 mb-4">Alternative Proteins</div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full" style={{width: '30%'}}></div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-light text-orange-400 mb-2">$20M</div>
                <div className="text-sm text-gray-300 mb-4">Supply Chain Tech</div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-orange-400 h-2 rounded-full" style={{width: '13.3%'}}></div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-light text-cyan-400 mb-2">$10M</div>
                <div className="text-sm text-gray-300 mb-4">Water-Food Nexus</div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-cyan-400 h-2 rounded-full" style={{width: '6.7%'}}></div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-3xl font-light text-green-400 mb-2">25-45%</div>
                <div className="text-sm text-gray-300">Expected IRR (5-year)</div>
              </div>
              <div>
                <div className="text-3xl font-light text-blue-400 mb-2">735M</div>
                <div className="text-sm text-gray-300">People impacted by 2030</div>
              </div>
              <div>
                <div className="text-3xl font-light text-purple-400 mb-2">$12B</div>
                <div className="text-sm text-gray-300">Total addressable market</div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-700">
              <p className="text-lg font-light text-gray-300 italic mb-8">
                "Every dollar invested in nutrition returns $16 to the economy. 
                We're not just funding companies; we're engineering a sustainable future."
              </p>
              
              {/* CTA Button for Funding Application */}
              <Link 
                href="/funding"
                className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Leaf className="w-5 h-5 mr-3" />
                Apply for Food Security Funding
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Water Scarcity Scientific Deep Dive - Foundation Focus */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-12 mb-16">
        <div className="text-center mb-12">
          <Droplets className="w-16 h-16 text-blue-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Foundation's Water Technology Investments
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We invest in cutting-edge technology solutions to increase the accessibility of H₂O molecules. 
            With our Technology for Humanity vision, we support projects that will systematically solve water scarcity.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Breakthrough Technologies */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Microscope className="w-6 h-6 mr-3 text-green-500" />
              Technologies We Support
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-3 bg-green-50 rounded-r-lg p-3">
                <h4 className="font-bold text-green-700 text-sm">Atmospheric Water Generation</h4>
                <p className="text-xs text-gray-600 mt-1">
                  Investing in MOF systems achieving 15% humidity → 150L/kW efficiency
                </p>
                <div className="text-xs text-green-600 mt-1 font-medium">Pilot support in 12 villages</div>
              </div>
              <div className="border-l-4 border-blue-500 pl-3 bg-blue-50 rounded-r-lg p-3">
                <h4 className="font-bold text-blue-700 text-sm">Graphene Membranes</h4>
                <p className="text-xs text-gray-600 mt-1">
                  Financing R&D providing 99.9% salt removal, 50% energy savings
                </p>
                <div className="text-xs text-blue-600 mt-1 font-medium">2025 deployment support</div>
              </div>
              <div className="border-l-4 border-purple-500 pl-3 bg-purple-50 rounded-r-lg p-3">
                <h4 className="font-bold text-purple-700 text-sm">AI Aquifer Mapping</h4>
                <p className="text-xs text-gray-600 mt-1">
                  Supporting algorithms providing 87% accuracy with deep learning
                </p>
                <div className="text-xs text-purple-600 mt-1 font-medium">200+ water source discovery support</div>
              </div>
            </div>
          </div>

          {/* Thermodynamic Analysis */}
          <div className="bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl p-6 shadow-lg border border-indigo-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Beaker className="w-6 h-6 mr-3 text-indigo-500" />
              Scientific Research Foundation
            </h3>
            <div className="space-y-3">
              <div className="bg-white/80 rounded-lg p-3">
                <h4 className="font-bold text-indigo-700 text-sm">Gibbs Free Energy (ΔG)</h4>
                <p className="text-xs text-gray-700">
                  Supporting energy optimization research using -RT ln(Kw) formula in desalination processes
                </p>
              </div>
              <div className="bg-white/80 rounded-lg p-3">
                <h4 className="font-bold text-blue-700 text-sm">Osmotic Pressure (π)</h4>
                <p className="text-xs text-gray-700">
                  Investing in projects developing efficient 2.7 atm systems using Van't Hoff equation
                </p>
              </div>
              <div className="bg-white/80 rounded-lg p-3">
                <h4 className="font-bold text-cyan-700 text-sm">Quantum Solutions</h4>
                <p className="text-xs text-gray-700">
                  Financing TiO₂ photocatalysis and aquaporin biomimetic design research
                </p>
              </div>
            </div>
          </div>

          {/* Implementation Matrix */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Factory className="w-6 h-6 mr-3 text-orange-500" />
              Investment Status
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 bg-green-50 rounded-lg border border-green-200">
                <span className="text-xs font-medium text-gray-800">Solar Desalination</span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Active Support</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-blue-50 rounded-lg border border-blue-200">
                <span className="text-xs font-medium text-gray-800">Smart Wells</span>
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold">Scaling</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-purple-50 rounded-lg border border-purple-200">
                <span className="text-xs font-medium text-gray-800">Water ATMs</span>
                <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-bold">Deployed</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
              <p className="text-xs text-orange-800">
                <strong>2030 Goal:</strong> Supporting projects to increase water access by 300% in 50 countries
              </p>
            </div>
          </div>
        </div>
      </div>

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
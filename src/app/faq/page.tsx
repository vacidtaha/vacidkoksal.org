"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

// Comprehensive FAQ categories
const faqCategories = [
  {
    id: "general",
    title: "General Questions",
    questions: [
  {
    question: "What is the mission of Vacid & Köksal Foundation?",
        answer: "Our foundation develops revolutionary solutions in healthcare, food, energy, and education, based on the principle that technology should be an accessible tool for everyone. Our goal is to solve systemic problems and bring humanity to its best version. We operate with the motto 'Aut inveniam viam aut faciam' - I will either find a way or make one."
  },
  {
    question: "In which areas does the foundation work?",
        answer: "We operate in four main areas: 1) Health technologies (AI-powered diagnostic systems, gene editing, regenerative medicine), 2) Food systems (precision agriculture, distribution networks, food waste reduction), 3) Clean energy solutions (fusion energy, renewable energy, energy storage), 4) Open knowledge access platforms (AI-powered learning, digital equity, educational technologies). Each area focuses on meeting humanity's fundamental needs."
      },
      {
        question: "What makes the foundation different from others?",
        answer: "We are not competitors to any sector; we are an idea designed to complete the missing link of a civilization that has lost its speed and sense of direction. We believe that technology should not be just a toy for the elite, but accessible to everyone. We don't aim for profit but focus on creating social value."
  },
  {
    question: "What is your success metric?",
    answer: "Our success metric is not applause: it is empty hospital beds, full dinner tables, city skylines that have relegated carbon to the pages of history, and tiny dreamer fingers reaching for an open screen for the first time. We aim to add value to society with these concrete results."
  },
  {
    question: "How is the foundation financed?",
        answer: "Our foundation is not structured to collect donations. Our main goal is to develop sustainable solutions and ensure that these solutions create social value. We act within the framework of transparent and ethical principles regarding financing. We support our projects through strategic partnerships, research grants, and impact investments."
      }
    ]
  },
  {
    id: "investment",
    title: "Investment & Funding",
    questions: [
      {
        question: "What types of projects do you invest in?",
        answer: "We support breakthrough projects in health technologies (gene editing, stem cell research, AI diagnostic systems), clean energy (fusion, solar, wind technologies), food technologies (vertical farming, precision agriculture, distribution optimization), and educational technologies (AI teachers, open access platforms). All projects with high potential for social impact are within our evaluation scope."
      },
      {
        question: "What are the investment amounts?",
        answer: "We provide grants ranging from $25K - $1M for individual researchers, seed capital of $1M - $10M for early-stage startups, growth capital of $5M - $100M for growth-stage companies, and multi-year research grants of $1M - $50M for research institutions. Our total annual support capacity exceeds $500M."
      },
      {
        question: "How does profit sharing work?",
        answer: "We don't aim for profit in the traditional sense. However, revenues from projects that achieve commercial success are used to support the foundation's mission and provide support to more projects. This creates a sustainable impact cycle. We typically apply a joint ownership model for intellectual property rights."
      },
      {
        question: "How does the application process work?",
        answer: "1) Online application form (from our funding page), 2) Initial evaluation (14 days), 3) Technical review and due diligence (30 days), 4) Prototype/pilot test phase (90 days), 5) Final decision and funding agreement (30 days). The total process varies between 4-6 months. An accelerated process is available for urgent situations."
      },
      {
        question: "What stage companies do you invest in?",
        answer: "We support projects at all stages from idea phase to scaling phase. We evaluate pre-seed, seed, Series A-B startups, R&D projects of established companies, academic spin-offs, social enterprises, and individual researchers' projects."
      },
      {
        question: "Are there geographical restrictions?",
        answer: "No, we work on a global scale. However, our priority regions are: North America, Europe, Asia-Pacific, and technology centers in developing countries. Regardless of where projects are physically located, we focus on their potential to create global impact."
      },
      {
        question: "Do you provide mentoring and technical support?",
        answer: "Yes, we provide comprehensive support beyond just funding: Technical mentoring, regulatory guidance, IP development, market access, partnership facilitation, international network connections, regulatory relationship management, and scaling strategies expert support."
      }
    ]
  },
  {
    id: "healthcare",
    title: "Healthcare Technologies",
    questions: [
      {
        question: "What technologies do you focus on in healthcare?",
        answer: "We work in CRISPR-Cas9 gene editing, stem cell engineering, tissue regeneration, cellular reprogramming, 3D bioprinting, senescence reversal, organoid modeling, precision medicine, multi-omics data integration, AI-powered diagnostic systems, and personalized treatment protocols."
      },
      {
        question: "Which diseases do you prioritize?",
        answer: "We focus on monogenic disorders, aging-related diseases, cancer, neurodegenerative diseases, cardiovascular diseases, metabolic disorders, and rare diseases. We especially seek breakthrough solutions in areas where current treatment options are limited."
      },
      {
        question: "How do you support clinical trial processes?",
        answer: "We provide comprehensive support in FDA, EMA and other regulatory agency relationship management, clinical trial design, patient recruitment, data analysis, regulatory submission processes, and post-market surveillance. We can cover a significant portion of clinical trial costs."
      },
      {
        question: "How do you address bioethical issues?",
        answer: "We apply strict bioethical standards in all our projects. We collaborate with international ethics committees, protect patient rights, meticulously conduct informed consent processes, and prioritize transparency. We do not support any unethical research."
      }
    ]
  },
  {
    id: "energy",
    title: "Clean Energy & Sustainability",
    questions: [
      {
        question: "What technologies do you invest in for energy?",
        answer: "We invest in fusion energy (plasma confinement, magnetic field optimization), next-gen solar (perovskite tandem cells, concentrated PV), solid-state battery technologies, grid-scale energy storage, hydrogen fuel cells, carbon capture technologies, and AI-optimized energy systems."
      },
      {
        question: "What are your fusion energy projects?",
        answer: "We provide $150M+ support to fusion research. We support projects working on tokamak reactor technologies, stellarator designs, inertial confinement fusion, alternative fusion approaches, and fusion-fission hybrid systems. Our goal is to enable commercial fusion energy in the 2030s."
      },
      {
        question: "Do you have grid modernization projects?",
        answer: "Yes, we support smart grid technologies, distributed energy systems, AI-powered load balancing, blockchain-based energy trading, microgrids, and vehicle-to-grid integration projects. We focus on energy democracy and community-based energy solutions."
      },
      {
        question: "What are your carbon neutrality goals?",
        answer: "We plan for all projects we support to reach net zero carbon emissions target by 2035. We prioritize carbon capture & storage, direct air capture, renewable energy scaling, and energy efficiency optimization projects."
      }
    ]
  },
  {
    id: "food",
    title: "Food Systems & Agriculture",
    questions: [
      {
        question: "What problems do you focus on solving in food?",
        answer: "We work on global hunger (735M+ people), food waste (1.3B tons/year), sustainable agriculture, supply chain optimization, nutrition security, and climate-resilient agriculture. We aim to democratize food access through technology."
      },
      {
        question: "What are your vertical farming projects?",
        answer: "We support LED optimization, hydroponic/aeroponic systems, AI-controlled growing environments, automated harvesting, vertical farm automation, and urban agriculture solutions. We target 95% less water and 99% less soil usage."
      },
      {
        question: "How are your precision agriculture technologies?",
        answer: "We focus on increasing agricultural efficiency with IoT sensors, drone technologies, satellite imagery analytics, AI-powered crop monitoring, automated irrigation systems, precision fertilization, and predictive analytics."
      },
      {
        question: "Do you have alternative protein projects?",
        answer: "We support projects in lab-grown meat, plant-based proteins, insect-based nutrition, fermentation technologies, and cellular agriculture. We prioritize the development of sustainable protein sources."
      }
    ]
  },
  {
    id: "education",
    title: "Education & Knowledge Access",
    questions: [
      {
        question: "What is your mission in education?",
        answer: "Knowledge locked behind paywalls is knowledge stolen from humanity. We tear down the walls that separate curious minds from information through AI-powered learning platforms, open-source educational resources, and universal access technologies."
      },
      {
        question: "How do AI teacher projects work?",
        answer: "We develop personalized learning algorithms, adaptive education systems, intelligent tutoring systems, automated assessment, and real-time feedback mechanisms. We aim to provide education suitable for each individual's learning style."
      },
      {
        question: "How do you address digital inequality?",
        answer: "We bridge the digital divide by establishing universal internet access, low-cost device distribution, offline-capable learning platforms, multilingual content creation, and community learning centers. We have a goal of providing educational access to 1B+ people."
      },
      {
        question: "What are your open access policies?",
        answer: "We publish all our research results as open access, share educational content with creative commons license, and prioritize projects that strengthen knowledge commons. Knowledge is everyone's right."
      }
    ]
  },
  {
    id: "technical",
    title: "Technical & Operational Questions",
    questions: [
      {
        question: "What are your IP (Intellectual Property) policies?",
        answer: "We apply a joint ownership model for IP rights. In case of commercial success, patent revenues are used to support the foundation's mission. We prioritize open source projects, apply defensive patent strategies, and create IP pools."
      },
      {
        question: "How does your due diligence process work?",
        answer: "It consists of technical feasibility assessment, team evaluation, market analysis, financial projections review, regulatory pathway analysis, competitive landscape mapping, and impact measurement framework development. It takes an average of 30-45 days."
      },
      {
        question: "How do you ensure reporting and accountability?",
        answer: "We publish quarterly progress reports, annual impact assessments, financial transparency reports, and public disclosure statements. We use third-party auditing, peer review processes, and stakeholder feedback loops."
      },
      {
        question: "What are your exit strategies?",
        answer: "We consider IPO, strategic acquisition, management buyout, or social impact acquisition options. However, our priority is to create sustainable impact and advance our mission. Exit returns are used for the foundation's growth."
      },
      {
        question: "How do you do risk management?",
        answer: "We use diversified portfolio approach, staged funding mechanisms, regulatory risk assessment, technical risk mitigation strategies, and comprehensive insurance coverage. We continuously optimize risk-return balance."
      }
    ]
  },
  {
    id: "participation",
    title: "Participation & Collaboration",
    questions: [
      {
        question: "How can I contribute to the foundation?",
        answer: "You can contribute with your ideas, labor, data, or courage. There is no queue for applause, only an endless queue for participation. The moment you put something on the table, you become part of the Foundation. You can contact us through our contact page."
  },
  {
    question: "How can I participate as a volunteer?",
    answer: "You can use your expert knowledge, creative ideas, or technical skills in our projects. You can review open positions from our careers page or contact us directly to specify the areas you would like to contribute to."
  },
  {
        question: "Are there international collaboration opportunities?",
        answer: "Yes, we offer global collaborations, research exchanges, joint ventures, technology transfer programs, and international fellowship opportunities. We especially support cross-border innovation projects."
      },
      {
        question: "How can research institutions apply?",
        answer: "We provide multi-year research grants ($1M-$50M range), equipment procurement support, international collaboration facilitation, PhD fellowship programs, and infrastructure development grants. Research excellence and social impact potential are our most important criteria."
      },
      {
        question: "Do you have a startup accelerator program?",
        answer: "Yes, we offer a 6-month intensive accelerator program: It includes technical mentoring, business development support, investor connections, pilot customer introductions, regulatory guidance, and demo day presentation opportunities."
      }
    ]
  }
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Main content */}
      <main className="flex-1">
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
            {/* Header Section */}
            <div className="text-center mb-20">
              <Badge className="text-sm font-medium mb-6 px-6 py-2">Comprehensive FAQ</Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 font-[family-name:var(--font-inter)] text-gray-900 leading-tight">
                Frequently Asked Questions
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-[family-name:var(--font-inter)]">
                Detailed information about our foundation and work on the most curious topics
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>

            {/* FAQ Content */}
            <div className="max-w-4xl mx-auto">
              {faqCategories
                .filter(category => category.id === selectedCategory)
                .map((category) => (
                  <div key={category.id} className="space-y-6">
                    {category.questions.map((faq, index) => (
                      <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden">
                        <button
                          onClick={() => toggleQuestion(index)}
                          className="w-full px-8 py-6 text-left hover:bg-gray-50 transition-colors duration-200 flex justify-between items-start"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 leading-tight pr-4">
                        {faq.question}
                      </h3>
                          <span className={`flex-shrink-0 text-2xl text-blue-600 transition-transform duration-200 ${
                            expandedQuestion === index ? 'rotate-45' : ''
                          }`}>
                            +
                          </span>
                        </button>
                        {expandedQuestion === index && (
                          <div className="px-8 pb-6 border-t border-gray-100">
                            <p className="text-gray-700 leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </div>
                        )}
                </div>
              ))}
                  </div>
                ))
              }
            </div>

            {/* Contact CTA */}
            <div className="text-center mt-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 border border-blue-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Couldn't find the answer to your question?
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Our expert team is ready to help you. Contact us for your projects, ideas, and collaboration proposals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold"
                >
                  Get in Touch
                </Link>
                <Link 
                  href="/funding"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-xl hover:bg-blue-50 transition-colors font-semibold"
                >
                  Submit Project
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-gray-200 py-12 mt-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div></div>
            <div className="text-center">
              <p className="text-xl tracking-wide text-gray-600 italic font-[family-name:var(--font-cinzel)]">
                Aut inveniam viam aut faciam
              </p>
            </div>
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
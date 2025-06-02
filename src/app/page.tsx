"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ScrollExpandMedia from '@/components/blocks/scroll-expansion-hero';

interface MediaAbout {
  overview: string;
  conclusion: string;
}

interface MediaContent {
  src: string;
  poster?: string;
  background: string;
  title: string;
  date: string;
  scrollToExpand: string;
  about: MediaAbout;
}

interface MediaContentCollection {
  [key: string]: MediaContent;
}

const foundationMediaContent: MediaContentCollection = {
  video: {
    src: 'https://me7aitdbxq.ufs.sh/f/2wsMIGDMQRdYuZ5R8ahEEZ4aQK56LizRdfBSqeDMsmUIrJN1',
    poster: 'https://images.pexels.com/videos/5752729/space-earth-universe-cosmos-5752729.jpeg',
    background: 'https://me7aitdbxq.ufs.sh/f/2wsMIGDMQRdYMNjMlBUYHaeYpxduXPVNwf8mnFA61L7rkcoS',
    title: 'Technology for Humanity',
    date: 'Engineering solutions that heal, nourish, and educate every corner of our world',
    scrollToExpand: 'Scroll to Discover Our Mission',
    about: {
      overview: 'We engineer solutions that heal, nourish, and educate. Our mission is to make cutting-edge technology accessible to all humanity, bridging the gap between innovation and human need.',
      conclusion: 'Join us in creating a future where technology serves humanity, not the other way around. Together, we can build a world where innovation heals, feeds, and educates every person on Earth.',
    },
  },
};

const ManifestoContent = ({ mediaType }: { mediaType: 'video' | 'image' }) => {
  return (
    <div className='max-w-4xl mx-auto'>
      <h2 className='text-4xl font-bold mb-12 text-center font-[family-name:var(--font-inter)]'>
        Manifesto
      </h2>
      
      <div className="text-[#494949] font-[family-name:var(--font-inter)] leading-relaxed space-y-8 text-center mx-auto">
        <p className="text-lg">
          We live in a curious age—one that can name every disease with near-perfect precision, yet still keeps the cure out of reach. Fields spill over with boundless yield while hungry, unhealthy tables sit in their shadows. Information flashes across the globe at light-speed, yet "premium" paywalls spring up in its path. Cities that turn night into day float beneath a haze of carbon smoke… This landscape cannot be "normalized." It is the product of a system built wrong—one that rewards hesitation and inertia.
        </p>
        
        <p className="text-lg">
          The Vacid & Köksal Foundation is an intervention in that design flaw.
          We are not a rival to any sector; we are an idea engineered to supply the missing link of a civilization that has lost both its speed and its sense of direction.
        </p>
        
        <p className="text-lg">
          Technology is the common thread running through every issue we name—but it becomes revolutionary only when it is as accessible as it is refined, not when it remains a toy of concentrated capital.
          We reject the health industry's creed that treats profit sheets as holier than medicine itself.
          We reject the gates that stamp knowledge with a "premium access" seal.
        </p>
        
        <div className="py-8">
          <p className="text-2xl font-medium italic">
            "Our foundation stays quiet not to hide its name, but to keep its outcomes from being overshadowed."
          </p>
        </div>
        
        <p className="text-lg">
          Our metric of success is not applause: it is empty hospital beds, full plates, skylines that banish carbon to the pages of history, and tiny dreamers' fingers reaching an open screen for the very first time.
        </p>
        
        <p className="text-lg">
          This letter is neither a call for donations nor for applause. It is an open invitation to anyone with ideas, labor, data, or courage. There will be no queue for acclaim—only an endless queue for participation. Elevating humanity to its best edition is not the task of a few founders; it is the shared imperative of everyone reading these lines.
        </p>
        
        <p className="text-lg">
          The moment you place your data, your idea, your labor, or your capital on the table, you become the Foundation. Our names may fade, but the flaws we mend will not return; accessible healing and borderless knowledge will become everyday rights.
        </p>
        
        <p className="text-lg font-medium mt-12">
          With love,<br />
          T.Vacid H.Köksal.
        </p>
      </div>
    </div>
  );
};

export default function Home() {
  const mediaType = 'video';
  const currentMedia = foundationMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <>
      {/* Hero Section with ScrollExpandMedia */}
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={currentMedia.poster}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <ManifestoContent mediaType={mediaType} />
      </ScrollExpandMedia>
      
      {/* Our Vision Section */}
      <section className="w-full bg-white py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <h2 className='text-4xl font-bold mb-8 text-center font-[family-name:var(--font-inter)]'>
            Our Vision
          </h2>
          <p className='text-xl mb-8 text-gray-600 leading-relaxed text-center max-w-4xl mx-auto'>
            {foundationMediaContent.video.about.overview}
          </p>

          <p className='text-xl mb-12 text-gray-600 leading-relaxed text-center max-w-4xl mx-auto'>
            {foundationMediaContent.video.about.conclusion}
          </p>

          {/* Mission Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
            <Link href="/healthcare" className="block">
              <div className="group text-center p-8 bg-gradient-to-br from-red-50 to-pink-50 hover:from-red-100 hover:to-pink-100 rounded-3xl border border-red-100 hover:border-red-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-700 to-pink-700 bg-clip-text text-transparent">Healthcare Revolution</h3>
                <p className="text-gray-700 leading-relaxed">Pioneering AI-driven diagnostics, personalized medicine, and global healthcare accessibility. We envision a world where cutting-edge medical technology reaches every person, regardless of geography or economic status.</p>
              </div>
            </Link>

            <div className="group text-center p-8 bg-gradient-to-br from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 rounded-3xl border border-indigo-100 hover:border-indigo-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
                  <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.204 54.204 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.22 56.22 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                  <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.71 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">Universal Education</h3>
              <p className="text-gray-700 leading-relaxed">Demolishing educational barriers through open-source knowledge platforms, AI tutoring systems, and democratized learning resources. Every curious mind deserves unlimited access to human knowledge.</p>
            </div>

            <div className="group text-center p-8 bg-gradient-to-br from-orange-50 to-amber-50 hover:from-orange-100 hover:to-amber-100 rounded-3xl border border-orange-100 hover:border-orange-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
                  <path d="M15 1.784l-.796.795a1.125 1.125 0 101.591 0L15 1.784zM12 1.784l-.796.795a1.125 1.125 0 101.591 0L12 1.784zM9 1.784L8.204 2.58a1.125 1.125 0 101.591 0L9 1.784zM9.75 7.547c.498-.021.998-.035 1.5-.042V6.75a.75.75 0 011.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 011.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 00-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 011.5 0v.797zM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 012.585.364 2.605 2.605 0 002.33 0 4.104 4.104 0 013.42 0 2.605 2.605 0 002.33 0 4.104 4.104 0 013.42 0 2.605 2.605 0 002.33 0 4.104 4.104 0 012.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49.138 49.138 0 0012 12.75zM21.75 18.131a2.604 2.604 0 00-1.915.165 4.104 4.104 0 01-3.42 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.42 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.42 0 2.604 2.604 0 00-1.915-.165v2.494a.75.75 0 001.183.61 4.104 4.104 0 013.42 0 2.604 2.604 0 002.33 0 4.104 4.104 0 013.42 0 .75.75 0 001.183-.61v-2.494z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-700 to-amber-700 bg-clip-text text-transparent">Global Food Security</h3>
              <p className="text-gray-700 leading-relaxed">Transforming global food systems through innovative nutrition technologies, sustainable food production, and equitable distribution networks. Ensuring every person has access to healthy, nutritious food.</p>
            </div>

            <div className="group text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 rounded-3xl border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
                  <path d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">Clean Energy Future</h3>
              <p className="text-gray-700 leading-relaxed">Accelerating the transition to renewable energy through advanced solar technologies, fusion research, and smart grid solutions. Creating a carbon-neutral world powered by infinite clean energy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Focus Areas */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-8">
              Strategic Investment Focus
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We identify market inefficiencies and systemic gaps across critical sectors, 
              then deploy capital toward breakthrough solutions that create sustainable value and impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Healthcare Innovation */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-light text-gray-900">Healthcare Transformation</h3>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">Market Opportunity</h4>
                  <p className="text-sm leading-relaxed">
                    Traditional drug development cycles average 15+ years with 90% failure rates. 
                    We identify opportunities to compress timelines through AI-driven discovery, 
                    precision medicine platforms, and innovative regulatory pathways.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">Investment Priorities</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• AI-powered drug discovery platforms ($5-50M tickets)</li>
                    <li>• Regulatory-compliant manufacturing innovations</li>
                    <li>• Point-of-care diagnostic technologies</li>
                    <li>• Precision medicine and genomics applications</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* EdTech Revolution */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                    <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.204 54.204 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.22 56.22 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                    <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.71 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-light text-gray-900">Educational Innovation</h3>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">Market Opportunity</h4>
                  <p className="text-sm leading-relaxed">
                    The global education sector faces significant accessibility challenges with 
                    high-cost barriers and geographical limitations. We invest in scalable solutions 
                    that democratize access to quality educational content and personalized learning.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">Investment Priorities</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Adaptive learning platforms with AI personalization</li>
                    <li>• Open-source educational infrastructure projects</li>
                    <li>• Skills-based assessment and certification systems</li>
                    <li>• Immersive learning technologies (AR/VR)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* AgTech & Food Security */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                    <path d="M15 1.784l-.796.795a1.125 1.125 0 101.591 0L15 1.784zM12 1.784l-.796.795a1.125 1.125 0 101.591 0L12 1.784zM9 1.784L8.204 2.58a1.125 1.125 0 101.591 0L9 1.784zM9.75 7.547c.498-.021.998-.035 1.5-.042V6.75a.75.75 0 011.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 011.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 00-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 011.5 0v.797zM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 012.585.364 2.605 2.605 0 002.33 0 4.104 4.104 0 013.42 0 2.605 2.605 0 002.33 0 4.104 4.104 0 013.42 0 2.605 2.605 0 002.33 0 4.104 4.104 0 012.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49.138 49.138 0 0012 12.75zM21.75 18.131a2.604 2.604 0 00-1.915.165 4.104 4.104 0 01-3.42 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.42 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.42 0 2.604 2.604 0 00-1.915-.165v2.494a.75.75 0 001.183.61 4.104 4.104 0 013.42 0 2.604 2.604 0 002.33 0 4.104 4.104 0 013.42 0 .75.75 0 001.183-.61v-2.494z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-light text-gray-900">AgTech & Nutrition</h3>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">Market Opportunity</h4>
                  <p className="text-sm leading-relaxed">
                    Global food systems require optimization for sustainability and efficiency. 
                    We target innovations in agricultural technology, alternative proteins, 
                    and supply chain optimization to address food security challenges.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">Investment Priorities</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Precision agriculture and IoT monitoring systems</li>
                    <li>• Alternative protein development and scaling</li>
                    <li>• Vertical farming and controlled environment agriculture</li>
                    <li>• Supply chain transparency and optimization platforms</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CleanTech & Energy */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                    <path d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-light text-gray-900">Energy & Climate</h3>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">Market Opportunity</h4>
                  <p className="text-sm leading-relaxed">
                    The energy transition presents significant opportunities for breakthrough 
                    technologies in renewable generation, storage, and grid optimization. 
                    We invest in scalable solutions that accelerate decarbonization.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">Investment Priorities</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Next-generation solar and energy storage systems</li>
                    <li>• Grid-scale battery and hydrogen technologies</li>
                    <li>• Carbon capture and utilization platforms</li>
                    <li>• Distributed energy management solutions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Foundation Philosophy */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl font-light mb-6">Foundation Philosophy</h3>
            <p className="text-xl font-light leading-relaxed mb-8 text-gray-200 max-w-4xl mx-auto">
              We deploy resources toward transformative technologies that serve humanity's fundamental needs. 
              Our success is measured not by financial returns, but by the tangible impact on human lives and global well-being.
            </p>
            <div className="grid md:grid-cols-4 gap-8 mt-8">
              <div>
                <div className="text-3xl font-light text-blue-400 mb-2">$500M+</div>
                <div className="text-sm text-gray-300">Committed resources</div>
              </div>
              <div>
                <div className="text-3xl font-light text-green-400 mb-2">Open Access</div>
                <div className="text-sm text-gray-300">Technology accessibility</div>
              </div>
              <div>
                <div className="text-3xl font-light text-purple-400 mb-2">Long-term</div>
                <div className="text-sm text-gray-300">Sustainable impact focus</div>
              </div>
              <div>
                <div className="text-3xl font-light text-red-400 mb-2">Global</div>
                <div className="text-sm text-gray-300">Human-centered approach</div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-700">
              <p className="text-lg font-light text-gray-300 italic">
                "Our metric of success is not applause: it is empty hospital beds, full plates, 
                skylines that banish carbon to the pages of history, and tiny dreamers' fingers 
                reaching an open screen for the very first time."
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
    </>
  );
} 
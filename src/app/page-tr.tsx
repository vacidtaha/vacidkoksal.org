"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import ScrollExpandMedia from '@/components/blocks/scroll-expansion-hero';

interface MediaAbout {
  overview: string;
  conclusion: string;
}

interface MediaContent {
  src?: string;
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
  image: {
    background: 'https://me7aitdbxq.ufs.sh/f/2wsMIGDMQRdYMNjMlBUYHaeYpxduXPVNwf8mnFA61L7rkcoS',
    title: 'İnsanlık İçin Teknoloji',
    date: 'Dünyanın her köşesinde iyileştiren, besleyen ve eğiten mühendislik çözümleri',
    scrollToExpand: 'Misyonumuzu Keşfetmek İçin Kaydırın',
    about: {
      overview: 'İyileştiren, besleyen ve eğiten çözümler üretiyoruz. Misyonumuz, ileri teknolojileri tüm insanlığa erişilebilir kılmak, inovasyon ile insan ihtiyacı arasındaki köprüyü kurmaktır.',
      conclusion: 'Teknolojinin insanlığa hizmet ettiği, tersi değil, bir geleceği birlikte yaratmamıza katılın. Birlikte, inovasyonun dünya üzerindeki her insanı iyileştirdiği, beslediği ve eğittiği bir dünya inşa edebiliriz.',
    },
  },
};

const ManifestoContent = ({ mediaType }: { mediaType: 'video' | 'image' }) => {
  return (
    <div className='max-w-4xl mx-auto px-2 sm:px-0'>
      <h2 className='text-xl sm:text-4xl font-bold mb-6 sm:mb-12 text-center font-[family-name:var(--font-inter)]'>
        Manifesto
      </h2>
      
      <div className="text-[#494949] font-[family-name:var(--font-inter)] leading-relaxed space-y-3 sm:space-y-8 text-center mx-auto">
        <p className="text-xs sm:text-lg">
          Tuhaf bir çağda yaşıyoruz—neredeyse mükemmel bir kesinlikle her hastalığı adlandırabilen, 
          ancak çareyi hâlâ erişilemez kılan bir çağ. Tarlalar sınırsız verimle taşarken, 
          gölgelerinde aç ve sağlıksız sofralar oturuyor. Bilgi dünya genelinde ışık hızında 
          yanıp sönerken, yoluna "premium" ücret duvarları dikilmekte. Geceyi gündüze çeviren 
          şehirler karbon dumanlı bir sisin altında süzülüyor... Bu manzara "normalleştirilemez." 
          Bu, yanlış inşa edilmiş bir sistemin ürünü—tereddüt ve atalete ödül veren bir sistem.
        </p>
        
        <p className="text-xs sm:text-lg">
          Vacid & Köksal Vakfı, bu tasarım hatasına bir müdahaledir.
          Hiçbir sektörün rakibi değiliz; hem hızını hem de yön duygusunu kaybetmiş bir 
          uygarlığın eksik halkasını sağlamak üzere tasarlanmış bir fikriz.
        </p>
        
        <p className="text-xs sm:text-lg">
          Teknoloji, adını verdiğimiz her soruna işleyen ortak iplik—ancak yalnızca yoğunlaşmış 
          sermayenin oyuncağı olarak kalmadığında, rafine olduğu kadar erişilebilir olduğunda 
          devrimci hale gelir. Kâr tablolarını tıbbın kendisinden daha kutsal sayan sağlık 
          endüstrisinin inancını reddediyoruz. Bilgiyi "premium erişim" mührüyle damgalayan 
          kapıları reddediyoruz.
        </p>
        
        <div className="py-4 sm:py-8">
          <p className="text-sm sm:text-2xl font-medium italic">
            "Vakfımız adını gizlemek için değil, sonuçlarının gölgede kalmaması için sessiz kalır."
          </p>
        </div>
        
        <p className="text-xs sm:text-lg">
          Başarı ölçümüz alkış değildir: boş hastane yatakları, dolu tabaklar, karbonu tarihin 
          sayfalarına sürgün eden ufuk çizgileri ve küçük hayalperestlerin parmaklarının 
          ilk kez açık bir ekrana uzanmasıdır.
        </p>
        
        <p className="text-xs sm:text-lg">
          Bu mektup ne bağış çağrısı ne de alkış çağrısıdır. Fikirleri, emeği, verileri 
          veya cesareti olan herkese açık bir davettir. Takdir için kuyruk olmayacak—
          yalnızca katılım için sonsuz bir kuyruk olacak. İnsanlığı en iyi haline 
          yükseltmek birkaç kurucunun görevi değil; bu satırları okuyan herkesin 
          ortak sorumluluğudur.
        </p>
        
        <p className="text-xs sm:text-lg">
          Verilerinizi, fikrinizi, emeğinizi veya sermayenizi masaya koyduğunuz an, 
          siz Vakıf olursunuz. İsimlerimiz unutulabilir ama düzelttiğimiz kusurlar 
          geri dönmeyecek; erişilebilir iyileşme ve sınırsız bilgi günlük haklar 
          haline gelecektir.
        </p>
        
        <p className="text-xs sm:text-lg font-medium mt-6 sm:mt-12">
          Sevgiyle,<br />
          T.Vacid H.Köksal.
        </p>
      </div>
    </div>
  );
};

export default function HomeTurkish() {
  const mediaType = 'image';
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
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
        manifestoButtonText="Manifestomuzu Okuyun"
      >
        <ManifestoContent mediaType="image" />
      </ScrollExpandMedia>
      
      {/* Our Vision Section */}
      <section className="w-full bg-white py-24">
        <div className="container mx-auto px-6 md:px-6 lg:px-8 max-w-6xl">
          <h2 className='text-2xl sm:text-4xl font-bold mb-8 text-center font-[family-name:var(--font-inter)]'>
            Vizyonumuz
          </h2>
          <p className='text-base sm:text-xl mb-8 text-gray-600 leading-relaxed text-center max-w-4xl mx-auto'>
            {foundationMediaContent.image.about.overview}
          </p>

          <p className='text-base sm:text-xl mb-12 text-gray-600 leading-relaxed text-center max-w-4xl mx-auto'>
            {foundationMediaContent.image.about.conclusion}
          </p>

          {/* Mission Areas */}
          <div className="md:grid md:grid-cols-2 md:gap-8 mt-16 max-w-5xl mx-auto">
            {/* Mobil için horizontal scroll container */}
            <div className="md:hidden flex gap-4 overflow-x-auto pb-4 px-6 -mx-6 snap-x snap-mandatory">
              <Link href="/healthcare" className="block flex-none w-[85vw] snap-start">
                <div className="group text-center p-4 bg-gradient-to-br from-red-50 to-pink-50 hover:from-red-100 hover:to-pink-100 rounded-3xl border border-red-100 hover:border-red-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 bg-gradient-to-r from-red-700 to-pink-700 bg-clip-text text-transparent">Sağlık Teknolojileri ve Medikal İnovasyon</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">İleri biyomedikal araştırma, farmasötik teknoloji geliştirme ve klinik inovasyon alanlarında stratejik yatırımlar. Küresel sağlık sistemi modernizasyonu ve erişilebilir tıbbi çözümler geliştirilmesi konularında liderlik sağlanmaktadır.</p>
                </div>
              </Link>

              <Link href="/knowledge" className="block flex-none w-[85vw] snap-start">
                <div className="group text-center p-4 bg-gradient-to-br from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 rounded-3xl border border-indigo-100 hover:border-indigo-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
                      <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.204 54.204 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.22 56.22 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                      <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.71 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">Bilgi Teknolojileri ve Eğitim Sistemleri</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">Dijital öğrenme platformları, eğitim teknoloji çözümleri ve bilgi altyapısı geliştirme projelerinde kapsamlı yatırımlar. Modern eğitim metodolojileri ve teknoloji entegrasyonu yoluyla akademik erişimin demokratikleştirilmesi hedeflenmektedir.</p>
                </div>
              </Link>

              <Link href="/food" className="block flex-none w-[85vw] snap-start">
                <div className="group text-center p-4 bg-gradient-to-br from-orange-50 to-amber-50 hover:from-orange-100 hover:to-amber-100 rounded-3xl border border-orange-100 hover:border-orange-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
                      <path d="M15 1.784l-.796.795a1.125 1.125 0 101.591 0L15 1.784zM12 1.784l-.796.795a1.125 1.125 0 101.591 0L12 1.784zM9 1.784L8.204 2.58a1.125 1.125 0 101.591 0L9 1.784zM9.75 7.547c.498-.021.998-.035 1.5-.042V6.75a.75.75 0 011.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 011.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 00-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 011.5 0v.797zM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 012.585.364 2.605 2.605 0 002.33 0 4.104 4.104 0 013.42 0 2.605 2.605 0 002.33 0 4.104 4.104 0 013.42 0 2.605 2.605 0 002.33 0 4.104 4.104 0 012.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49.138 49.138 0 0012 12.75zM21.75 18.131a2.604 2.604 0 00-1.915.165 4.104 4.104 0 01-3.42 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.42 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.42 0 2.604 2.604 0 00-1.915-.165v2.494a.75.75 0 001.183.61 4.104 4.104 0 013.42 0 2.604 2.604 0 002.33 0 4.104 4.104 0 013.42 0 .75.75 0 001.183-.61v-2.494z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 bg-gradient-to-r from-orange-700 to-amber-700 bg-clip-text text-transparent">Tarım Teknolojileri ve Gıda Sistemleri</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">Sürdürülebilir tarım teknolojileri, gıda üretim optimizasyonu ve tedarik zinciri modernizasyonu alanlarında uzmanlık. Küresel beslenme güvenliği ve tarımsal verimlilik artışı konularında sistematik çözümler geliştirilmektedir.</p>
                </div>
              </Link>

              <Link href="/energy" className="block flex-none w-[85vw] snap-start">
                <div className="group text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 rounded-3xl border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
                      <path d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">Enerji Teknolojileri ve İklim Çözümleri</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">Yenilenebilir enerji sistemleri, temiz teknoloji geliştirme ve karbon yönetimi alanlarında stratejik girişimler. İklim değişikliği ile mücadele ve sürdürülebilir enerji dönüşümü konularında öncü projeler desteklenmektedir.</p>
                </div>
              </Link>
            </div>

            {/* Desktop için grid layout */}
            <Link href="/healthcare" className="hidden md:block">
              <div className="group text-center p-8 bg-gradient-to-br from-red-50 to-pink-50 hover:from-red-100 hover:to-pink-100 rounded-3xl border border-red-100 hover:border-red-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-700 to-pink-700 bg-clip-text text-transparent">Sağlık Teknolojileri ve Medikal İnovasyon</h3>
                <p className="text-base text-gray-700 leading-relaxed">İleri biyomedikal araştırma, farmasötik teknoloji geliştirme ve klinik inovasyon alanlarında stratejik yatırımlar. Küresel sağlık sistemi modernizasyonu ve erişilebilir tıbbi çözümler geliştirilmesi konularında liderlik sağlanmaktadır.</p>
              </div>
            </Link>

            <Link href="/knowledge" className="hidden md:block">
              <div className="group text-center p-8 bg-gradient-to-br from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 rounded-3xl border border-indigo-100 hover:border-indigo-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
                    <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.204 54.204 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.22 56.22 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                    <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.71 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">Bilgi Teknolojileri ve Eğitim Sistemleri</h3>
                <p className="text-base text-gray-700 leading-relaxed">Dijital öğrenme platformları, eğitim teknoloji çözümleri ve bilgi altyapısı geliştirme projelerinde kapsamlı yatırımlar. Modern eğitim metodolojileri ve teknoloji entegrasyonu yoluyla akademik erişimin demokratikleştirilmesi hedeflenmektedir.</p>
              </div>
            </Link>

            <Link href="/food" className="hidden md:block">
              <div className="group text-center p-8 bg-gradient-to-br from-orange-50 to-amber-50 hover:from-orange-100 hover:to-amber-100 rounded-3xl border border-orange-100 hover:border-orange-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
                    <path d="M15 1.784l-.796.795a1.125 1.125 0 101.591 0L15 1.784zM12 1.784l-.796.795a1.125 1.125 0 101.591 0L12 1.784zM9 1.784L8.204 2.58a1.125 1.125 0 101.591 0L9 1.784zM9.75 7.547c.498-.021.998-.035 1.5-.042V6.75a.75.75 0 011.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 011.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 00-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 011.5 0v.797zM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 012.585.364 2.605 2.605 0 002.33 0 4.104 4.104 0 013.42 0 2.605 2.605 0 002.33 0 4.104 4.104 0 013.42 0 2.605 2.605 0 002.33 0 4.104 4.104 0 012.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49.138 49.138 0 0012 12.75zM21.75 18.131a2.604 2.604 0 00-1.915.165 4.104 4.104 0 01-3.42 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.42 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.42 0 2.604 2.604 0 00-1.915-.165v2.494a.75.75 0 001.183.61 4.104 4.104 0 013.42 0 2.604 2.604 0 002.33 0 4.104 4.104 0 013.42 0 .75.75 0 001.183-.61v-2.494z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-700 to-amber-700 bg-clip-text text-transparent">Tarım Teknolojileri ve Gıda Sistemleri</h3>
                <p className="text-base text-gray-700 leading-relaxed">Sürdürülebilir tarım teknolojileri, gıda üretim optimizasyonu ve tedarik zinciri modernizasyonu alanlarında uzmanlık. Küresel beslenme güvenliği ve tarımsal verimlilik artışı konularında sistematik çözümler geliştirilmektedir.</p>
              </div>
            </Link>

            <Link href="/energy" className="hidden md:block">
              <div className="group text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 rounded-3xl border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
                    <path d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">Enerji Teknolojileri ve İklim Çözümleri</h3>
                <p className="text-base text-gray-700 leading-relaxed">Yenilenebilir enerji sistemleri, temiz teknoloji geliştirme ve karbon yönetimi alanlarında stratejik girişimler. İklim değişikliği ile mücadele ve sürdürülebilir enerji dönüşümü konularında öncü projeler desteklenmektedir.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Investment Focus Areas */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-8">
              Stratejik Yatırım Odağı
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Kritik sektörlerdeki pazar verimsizliklerini ve sistemik boşlukları tespit ediyor, 
              ardından sürdürülebilir değer ve etki yaratan çığır açan çözümlere sermaye yönlendiriyoruz.
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
                <h3 className="text-2xl font-light text-gray-900">Sağlık Dönüşümü</h3>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">Pazar Analizi</h4>
                  <p className="text-sm leading-relaxed">
                    Geleneksel ilaç geliştirme süreçleri ortalama 15+ yıl sürmekte ve %90 başarısızlık oranına sahiptir. 
                    Yapay zeka destekli keşif platformları, hassas tıp uygulamaları ve yenilikçi düzenleyici yaklaşımlar 
                    aracılığıyla geliştirme zaman çizelgelerinin optimize edilmesi konusunda önemli fırsatlar mevcuttur.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">Yatırım Stratejisi</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Yapay zeka tabanlı ilaç keşif platformları ($5-50M yatırım büyüklüğü)</li>
                    <li>• Düzenleyici uyumlu üretim teknoloji yenilikleri</li>
                    <li>• Bakım noktası tanı teknolojileri ve cihazları</li>
                    <li>• Hassas tıp ve genomik analiz uygulamaları</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <Link 
                  href="/healthcare"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  Keşfet
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-2">
                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </Link>
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
                <h3 className="text-2xl font-light text-gray-900">Eğitim İnovasyonu</h3>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">Pazar Analizi</h4>
                  <p className="text-sm leading-relaxed">
                    Küresel eğitim sektörü, yüksek maliyet engelleri ve coğrafi erişim sınırlılıkları nedeniyle 
                    önemli ölçeklenebilirlik zorluklarıyla karşı karşıyadır. Kaliteli eğitim içeriğinin 
                    demokratikleştirilmesi ve kişiselleştirilmiş öğrenme deneyimleri sunan teknolojik çözümlere 
                    yatırım yapılmaktadır.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">Yatırım Stratejisi</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Yapay zeka kişiselleştirmesi ile uyarlanabilir öğrenme sistemleri</li>
                    <li>• Açık kaynak eğitim altyapısı ve platform projeleri</li>
                    <li>• Yetkinlik tabanlı değerlendirme ve sertifikasyon sistemleri</li>
                    <li>• Sanal ve artırılmış gerçeklik eğitim teknolojileri</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <Link 
                  href="/knowledge"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  Keşfet
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-2">
                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </Link>
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
                <h3 className="text-2xl font-light text-gray-900">AgTech & Beslenme</h3>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">Pazar Analizi</h4>
                  <p className="text-sm leading-relaxed">
                    Küresel gıda sistemleri sürdürülebilirlik ve verimlilik açısından kapsamlı optimizasyon 
                    gerektirmektedir. Tarım teknolojisi innovasyonları, alternatif protein geliştirme süreçleri 
                    ve tedarik zinciri optimizasyon çözümlerini hedefleyerek gıda güvenliği konularını 
                    ele almaktayız.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">Yatırım Stratejisi</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Hassas tarım ve IoT destekli izleme sistemleri</li>
                    <li>• Alternatif protein teknolojilerinin geliştirilmesi ve ölçeklendirilmesi</li>
                    <li>• Dikey tarım ve kontrollü çevre tarımı uygulamaları</li>
                    <li>• Tedarik zinciri şeffaflığı ve optimizasyon platformları</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <Link 
                  href="/food"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  Keşfet
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-2">
                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* CleanTech & Energy */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                    <path d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-light text-gray-900">Enerji & İklim</h3>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">Pazar Analizi</h4>
                  <p className="text-sm leading-relaxed">
                    Enerji dönüşümü süreci, yenilenebilir enerji üretimi, depolama teknolojileri ve şebeke 
                    optimizasyonu alanlarında çığır açan teknolojiler için önemli fırsatlar sunmaktadır. 
                    Karbonsuzlaştırma hedeflerini hızlandıran ölçeklenebilir çözümlere stratejik yatırımlar 
                    gerçekleştirilmektedir.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">Yatırım Stratejisi</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Yeni nesil güneş enerjisi ve enerji depolama sistemleri</li>
                    <li>• Şebeke ölçeğinde batarya ve hidrojen teknolojileri</li>
                    <li>• Karbon yakalama ve geri kullanım platformları</li>
                    <li>• Dağıtık enerji yönetimi ve akıllı şebeke çözümleri</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <Link 
                  href="/energy"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  Keşfet
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-2">
                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Foundation Philosophy */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl font-light mb-6">Vakıf Felsefesi</h3>
            <p className="text-xl font-light leading-relaxed mb-8 text-gray-200 max-w-4xl mx-auto">
              İnsanlığın temel ihtiyaçlarına hizmet eden dönüştürücü teknolojilere kaynak yönlendiriyoruz. 
              Başarımızı finansal getirilerle değil, insan yaşamları ve küresel refah üzerindeki somut etkiyle ölçüyoruz.
            </p>
            <div className="grid md:grid-cols-4 gap-8 mt-8 mb-12">
              <div>
                <div className="text-3xl font-light text-blue-400 mb-2">$500M+</div>
                <div className="text-sm text-gray-300">Taahhüt edilen kaynaklar</div>
              </div>
              <div>
                <div className="text-3xl font-light text-green-400 mb-2">Açık Erişim</div>
                <div className="text-sm text-gray-300">Teknoloji erişilebilirliği</div>
              </div>
              <div>
                <div className="text-3xl font-light text-purple-400 mb-2">Uzun Vadeli</div>
                <div className="text-sm text-gray-300">Sürdürülebilir etki odağı</div>
              </div>
              <div>
                <div className="text-3xl font-light text-red-400 mb-2">Küresel</div>
                <div className="text-sm text-gray-300">İnsan merkezli yaklaşım</div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-700">
              <p className="text-lg font-light text-gray-300 italic mb-8">
                "Başarı ölçümüz alkış değildir: boş hastane yatakları, dolu tabaklar, 
                karbonu tarihin sayfalarına sürgün eden ufuk çizgileri ve küçük hayalperestlerin 
                parmaklarının ilk kez açık bir ekrana uzanmasıdır."
              </p>
              
              {/* CTA Button for Funding Application */}
              <Link 
                href="/funding"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-3">
                  <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" />
                </svg>
                Fon Başvurusu Yap
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 
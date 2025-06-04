"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

// Comprehensive FAQ categories - English content
const faqCategoriesEN = [
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

// Turkish content
const faqCategoriesTR = [
  {
    id: "general",
    title: "Genel Sorular",
    questions: [
      {
        question: "Vacid & Köksal Vakfı'nın misyonu nedir?",
        answer: "Vakfımız, teknolojinin herkes için erişilebilir bir araç olması gerektiği ilkesinden yola çıkarak sağlık, gıda, enerji ve eğitim alanlarında devrimsel çözümler geliştirmektedir. Amacımız sistematik sorunları çözmek ve insanlığı en iyi versiyonuna taşımaktır. 'Aut inveniam viam aut faciam' - Ya bir yol bulacağım ya da yapacağım mottosuyla çalışıyoruz."
      },
      {
        question: "Vakıf hangi alanlarda çalışıyor?",
        answer: "Dört ana alanda faaliyet gösteriyoruz: 1) Sağlık teknolojileri (AI destekli tanı sistemleri, gen düzenleme, rejeneratif tıp), 2) Gıda sistemleri (hassas tarım, dağıtım ağları, gıda israfını azaltma), 3) Temiz enerji çözümleri (füzyon enerjisi, yenilenebilir enerji, enerji depolama), 4) Açık bilgi erişim platformları (AI destekli öğrenme, dijital eşitlik, eğitim teknolojileri). Her alan insanlığın temel ihtiyaçlarını karşılamaya odaklanır."
      },
      {
        question: "Vakfı diğerlerinden ayıran nedir?",
        answer: "Biz hiçbir sektörün rakibi değiliz; hızını ve yön duygusunu kaybetmiş bir medeniyetin eksik halkasını tamamlamak üzere tasarlanmış bir fikiriyiz. Teknolojinin sadece elit kesimin oyuncağı olmaması, herkes için erişilebilir olması gerektiğine inanıyoruz. Kar amacı gütmeyip toplumsal değer yaratmaya odaklanıyoruz."
      },
      {
        question: "Başarı metriğiniz nedir?",
        answer: "Başarı metriğimiz alkış değildir: boş hastane yatakları, dolu akşam yemek masaları, karbonu tarihin sayfalarına havale etmiş şehir silüetleri ve ilk kez açık bir ekrana uzanan minik hayal kurucuların parmakları. Bu somut sonuçlarla topluma değer katmayı hedefliyoruz."
      },
      {
        question: "Vakıf nasıl finanse ediliyor?",
        answer: "Vakfımız bağış toplama amacıyla yapılandırılmamıştır. Ana hedefimiz sürdürülebilir çözümler geliştirmek ve bu çözümlerin toplumsal değer yaratmasını sağlamaktır. Finansman konusunda şeffaf ve etik ilkeler çerçevesinde hareket ediyoruz. Projelerimizi stratejik ortaklıklar, araştırma hibeleri ve etki yatırımları yoluyla destekliyoruz."
      }
    ]
  },
  {
    id: "investment",
    title: "Yatırım ve Fonlama",
    questions: [
      {
        question: "Hangi tür projelere yatırım yapıyorsunuz?",
        answer: "Sağlık teknolojilerinde (gen düzenleme, kök hücre araştırması, AI tanı sistemleri), temiz enerjide (füzyon, güneş, rüzgar teknolojileri), gıda teknolojilerinde (dikey tarım, hassas tarım, dağıtım optimizasyonu) ve eğitim teknolojilerinde (AI öğretmenler, açık erişim platformları) çığır açıcı projeleri destekliyoruz. Yüksek toplumsal etki potansiyeli olan tüm projeler değerlendirme kapsamımızdadır."
      },
      {
        question: "Yatırım miktarları nelerdir?",
        answer: "Bireysel araştırmacılar için 25K - 1M$ aralığında hibeler, erken aşama girişimler için 1M - 10M$ seed capital, büyüme aşamasındaki şirketler için 5M - 100M$ growth capital ve araştırma kurumları için 1M - 50M$ çok yıllı araştırma hibeleri sağlıyoruz. Toplam yıllık destek kapasitemiz 500M$'ı aşmaktadır."
      },
      {
        question: "Kar paylaşımı nasıl işliyor?",
        answer: "Geleneksel anlamda kar amacı gütmüyoruz. Ancak ticari başarı elde eden projelerden elde edilen gelirler vakfın misyonunu desteklemek ve daha fazla projeye destek sağlamak için kullanılıyor. Bu sürdürülebilir bir etki döngüsü oluşturuyor. Fikri mülkiyet hakları için genellikle ortak sahiplik modeli uyguluyoruz."
      },
      {
        question: "Başvuru süreci nasıl işliyor?",
        answer: "1) Online başvuru formu (fonlama sayfamızdan), 2) İlk değerlendirme (14 gün), 3) Teknik inceleme ve due diligence (30 gün), 4) Prototip/pilot test aşaması (90 gün), 5) Nihai karar ve fonlama anlaşması (30 gün). Toplam süreç 4-6 ay arasında değişiyor. Acil durumlar için hızlandırılmış süreç mevcut."
      },
      {
        question: "Hangi aşamadaki şirketlere yatırım yapıyorsunuz?",
        answer: "Fikir aşamasından ölçeklendirme aşamasına kadar tüm evrelerdeki projeleri destekliyoruz. Pre-seed, seed, Series A-B girişimleri, köklü şirketlerin Ar-Ge projelerini, akademik spin-off'ları, sosyal girişimleri ve bireysel araştırmacıların projelerini değerlendiriyoruz."
      },
      {
        question: "Coğrafi kısıtlamalar var mı?",
        answer: "Hayır, küresel ölçekte çalışıyoruz. Ancak öncelikli bölgelerimiz: Kuzey Amerika, Avrupa, Asya-Pasifik ve gelişmekte olan ülkelerdeki teknoloji merkezleri. Projelerin fiziksel olarak nerede olduğundan ziyade küresel etki yaratma potansiyellerine odaklanıyoruz."
      },
      {
        question: "Mentorluk ve teknik destek sağlıyor musunuz?",
        answer: "Evet, sadece fonlama değil kapsamlı destek sağlıyoruz: Teknik mentorluk, düzenleyici rehberlik, IP geliştirme, pazar erişimi, ortaklık kolaylaştırma, uluslararası ağ bağlantıları, düzenleyici ilişki yönetimi ve ölçeklendirme stratejileri uzman desteği."
      }
    ]
  },
  {
    id: "healthcare",
    title: "Sağlık Teknolojileri",
    questions: [
      {
        question: "Sağlık alanında hangi teknolojilere odaklanıyorsunuz?",
        answer: "CRISPR-Cas9 gen düzenleme, kök hücre mühendisliği, doku rejenerasyonu, hücresel reprogramlama, 3D biyoyazdırma, yaşlanma tersine çevirme, organoid modelleme, hassas tıp, multi-omiks veri entegrasyonu, AI destekli tanı sistemleri ve kişiselleştirilmiş tedavi protokolleri alanlarında çalışıyoruz."
      },
      {
        question: "Hangi hastalıklara öncelik veriyorsunuz?",
        answer: "Monogenik bozukluklar, yaşlanmayla ilgili hastalıklar, kanser, nörodejeneratif hastalıklar, kardiyovasküler hastalıklar, metabolik bozukluklar ve nadir hastalıklara odaklanıyoruz. Özellikle mevcut tedavi seçeneklerinin sınırlı olduğu alanlarda çığır açıcı çözümler arıyoruz."
      },
      {
        question: "Klinik deneme süreçlerini nasıl destekliyorsunuz?",
        answer: "FDA, EMA ve diğer düzenleyici kurum ilişki yönetimi, klinik deneme tasarımı, hasta alımı, veri analizi, düzenleyici başvuru süreçleri ve pazar sonrası gözetimde kapsamlı destek sağlıyoruz. Klinik deneme maliyetlerinin önemli bir kısmını karşılayabiliyoruz."
      },
      {
        question: "Biyoetik konularına nasıl yaklaşıyorsunuz?",
        answer: "Tüm projelerimizde sıkı biyoetik standartlar uyguluyoruz. Uluslararası etik komitelerle işbirliği yapıyor, hasta haklarını koruyuyor, bilgilendirilmiş onam süreçlerini titizlikle yürütüyor ve şeffaflığı önceliyoruz. Hiçbir etik dışı araştırmayı desteklemiyoruz."
      }
    ]
  },
  {
    id: "energy",
    title: "Temiz Enerji ve Sürdürülebilirlik",
    questions: [
      {
        question: "Enerji alanında hangi teknolojilere yatırım yapıyorsunuz?",
        answer: "Füzyon enerjisi (plazma hapsi, manyetik alan optimizasyonu), yeni nesil güneş (perovskit tandem hücreler, konsantre PV), katı hal pil teknolojileri, şebeke ölçeğinde enerji depolama, hidrojen yakıt hücreleri, karbon yakalama teknolojileri ve AI optimizeli enerji sistemlerine yatırım yapıyoruz."
      },
      {
        question: "Füzyon enerji projeleriniz neler?",
        answer: "Füzyon araştırmalarına 150M$+ destek sağlıyoruz. Tokamak reaktör teknolojileri, stellarator tasarımları, inersiyal hapsetme füzyonu, alternatif füzyon yaklaşımları ve füzyon-fisyon hibrit sistemleri üzerinde çalışan projeleri destekliyoruz. Hedefimiz 2030'larda ticari füzyon enerjisini mümkün kılmak."
      },
      {
        question: "Şebeke modernizasyonu projeleriniz var mı?",
        answer: "Evet, akıllı şebeke teknolojileri, dağıtık enerji sistemleri, AI destekli yük dengeleme, blockchain tabanlı enerji ticareti, mikro şebekeler ve araçtan şebekeye entegrasyon projelerini destekliyoruz. Enerji demokrasisi ve toplum tabanlı enerji çözümlerine odaklanıyoruz."
      },
      {
        question: "Karbon nötralite hedefleriniz neler?",
        answer: "Desteklediğimiz tüm projelerin 2035 yılına kadar net sıfır karbon emisyonu hedefine ulaşmasını planlıyoruz. Karbon yakalama ve depolama, doğrudan hava yakalama, yenilenebilir enerji ölçeklendirme ve enerji verimliliği optimizasyonu projelerine öncelik veriyoruz."
      }
    ]
  },
  {
    id: "food",
    title: "Gıda Sistemleri ve Tarım",
    questions: [
      {
        question: "Gıda alanında hangi sorunları çözmeye odaklanıyorsunuz?",
        answer: "Küresel açlık (735M+ insan), gıda israfı (1.3B ton/yıl), sürdürülebilir tarım, tedarik zinciri optimizasyonu, beslenme güvenliği ve iklim dirençli tarım üzerinde çalışıyoruz. Teknoloji aracılığıyla gıda erişimini demokratikleştirmeyi hedefliyoruz."
      },
      {
        question: "Dikey tarım projeleriniz neler?",
        answer: "LED optimizasyonu, hidroponik/aeroponik sistemler, AI kontrollü yetiştirme ortamları, otomatik hasat, dikey çiftlik otomasyonu ve kentsel tarım çözümlerini destekliyoruz. %95 daha az su ve %99 daha az toprak kullanımı hedefliyoruz."
      },
      {
        question: "Hassas tarım teknolojileriniz nasıl?",
        answer: "IoT sensörler, drone teknolojileri, uydu görüntü analitiği, AI destekli mahsul izleme, otomatik sulama sistemleri, hassas gübreleme ve tahmine dayalı analitiği ile tarım verimliliğini artırmaya odaklanıyoruz."
      },
      {
        question: "Alternatif protein projeleriniz var mı?",
        answer: "Laboratuvar yetiştiriciliği et, bitki bazlı proteinler, böcek bazlı beslenme, fermentasyon teknolojileri ve hücresel tarım alanlarındaki projeleri destekliyoruz. Sürdürülebilir protein kaynakları geliştirmeyi önceliyoruz."
      }
    ]
  },
  {
    id: "education",
    title: "Eğitim ve Bilgi Erişimi",
    questions: [
      {
        question: "Eğitimdeki misyonunuz nedir?",
        answer: "Ücretli duvarların arkasında kilitli bilgi, insanlıktan çalınmış bilgidir. AI destekli öğrenme platformları, açık kaynaklı eğitim kaynakları ve evrensel erişim teknolojileri aracılığıyla meraklı zihinleri bilgiden ayıran duvarları yıkıyoruz."
      },
      {
        question: "AI öğretmen projeleri nasıl çalışıyor?",
        answer: "Kişiselleştirilmiş öğrenme algoritmaları, uyarlanabilir eğitim sistemleri, akıllı öğretim sistemleri, otomatik değerlendirme ve gerçek zamanlı geri bildirim mekanizmaları geliştiriyoruz. Her bireyin öğrenme tarzına uygun eğitim sağlamayı hedefliyoruz."
      },
      {
        question: "Dijital eşitsizliği nasıl ele alıyorsunuz?",
        answer: "Evrensel internet erişimi kurma, düşük maliyetli cihaz dağıtımı, çevrimdışı çalışabilen öğrenme platformları, çok dilli içerik oluşturma ve toplum öğrenme merkezleri ile dijital uçurumu kapatıyoruz. 1 milyar+ insana eğitim erişimi sağlama hedefimiz var."
      },
      {
        question: "Açık erişim politikalarınız neler?",
        answer: "Tüm araştırma sonuçlarımızı açık erişim olarak yayınlıyor, eğitim içeriklerini creative commons lisansıyla paylaşıyor ve bilgi komününü güçlendiren projelere öncelik veriyoruz. Bilgi herkesin hakkıdır."
      }
    ]
  },
  {
    id: "technical",
    title: "Teknik ve Operasyonel Sorular",
    questions: [
      {
        question: "IP (Fikri Mülkiyet) politikalarınız neler?",
        answer: "IP hakları için ortak sahiplik modeli uyguluyoruz. Ticari başarı durumunda patent gelirleri vakfın misyonunu desteklemek için kullanılıyor. Açık kaynak projelere öncelik veriyor, savunma amaçlı patent stratejileri uyguluyoruz ve IP havuzları oluşturuyoruz."
      },
      {
        question: "Due diligence süreciniz nasıl işliyor?",
        answer: "Teknik fizibilite değerlendirmesi, ekip analizi, pazar analizi, finansal projeksiyon incelemesi, düzenleyici yol haritası analizi, rekabet ortamı haritalama ve etki ölçüm çerçevesi geliştirmeden oluşuyor. Ortalama 30-45 gün sürüyor."
      },
      {
        question: "Raporlama ve hesap verebilirliği nasıl sağlıyorsunuz?",
        answer: "Üç aylık ilerleme raporları, yıllık etki değerlendirmeleri, finansal şeffaflık raporları ve kamuya açıklama beyanları yayınlıyoruz. Üçüncü taraf denetim, hakem değerlendirme süreçleri ve paydaş geri bildirim döngüleri kullanıyoruz."
      },
      {
        question: "Çıkış stratejileriniz neler?",
        answer: "IPO, stratejik satın alma, yönetim satın alması veya sosyal etki satın alması seçeneklerini değerlendiriyoruz. Ancak önceliğimiz sürdürülebilir etki yaratmak ve misyonumuzu ilerletmektir. Çıkış getirileri vakfın büyümesi için kullanılıyor."
      },
      {
        question: "Risk yönetimini nasıl yapıyorsunuz?",
        answer: "Çeşitlendirilmiş portföy yaklaşımı, aşamalı fonlama mekanizmaları, düzenleyici risk değerlendirmesi, teknik risk azaltma stratejileri ve kapsamlı sigorta kapsamı kullanıyoruz. Risk-getiri dengesini sürekli optimize ediyoruz."
      }
    ]
  },
  {
    id: "participation",
    title: "Katılım ve İşbirliği",
    questions: [
      {
        question: "Vakfa nasıl katkıda bulunabilirim?",
        answer: "Fikirlerinizle, emeğinizle, verilerinizle veya cesaretinizle katkıda bulunabilirsiniz. Alkış için sıra yok, sadece katılım için sonsuz bir sıra var. Masaya bir şey koyduğunuz andan itibaren Vakfın bir parçası oluyorsunuz. İletişim sayfamız üzerinden bizimle iletişime geçebilirsiniz."
      },
      {
        question: "Gönüllü olarak nasıl katılabilirim?",
        answer: "Uzman bilginizi, yaratıcı fikirlerinizi veya teknik becerilerinizi projelerimizde kullanabilirsiniz. Açık pozisyonları kariyer sayfamızdan inceleyebilir veya katkıda bulunmak istediğiniz alanları belirtmek için doğrudan bizimle iletişime geçebilirsiniz."
      },
      {
        question: "Uluslararası işbirliği fırsatları var mı?",
        answer: "Evet, küresel işbirlikleri, araştırma değişimleri, ortak girişimler, teknoloji transfer programları ve uluslararası burs fırsatları sunuyoruz. Özellikle sınır ötesi inovasyon projelerini destekliyoruz."
      },
      {
        question: "Araştırma kurumları nasıl başvurabilir?",
        answer: "Çok yıllı araştırma hibeleri (1M-50M$ aralığında), ekipman tedarik desteği, uluslararası işbirliği kolaylaştırması, doktora burs programları ve altyapı geliştirme hibeleri sağlıyoruz. Araştırma mükemmelliği ve toplumsal etki potansiyeli en önemli kriterlerimiz."
      },
      {
        question: "Girişim hızlandırıcı programınız var mı?",
        answer: "Evet, 6 aylık yoğun hızlandırıcı program sunuyoruz: Teknik mentorluk, iş geliştirme desteği, yatırımcı bağlantıları, pilot müşteri tanıtımları, düzenleyici rehberlik ve demo day sunum fırsatları içeriyor."
      }
    ]
  }
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'tr'>('en');
  const [mounted, setMounted] = useState(false);

  // Check language preference from localStorage
  useEffect(() => {
    setMounted(true);
    
    // Delay to ensure proper mounting
    const timer = setTimeout(() => {
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          const savedLanguage = localStorage.getItem('language-preference') as 'en' | 'tr' | null;
          if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'tr')) {
            setSelectedLanguage(savedLanguage);
          }
        }
      } catch (error) {
        console.warn('Failed to read language preference:', error);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Listen for language changes in localStorage
  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return;

    const handleStorageChange = () => {
      try {
        if (window.localStorage) {
          const savedLanguage = localStorage.getItem('language-preference') as 'en' | 'tr' | null;
          if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'tr')) {
            setSelectedLanguage(savedLanguage);
          }
        }
      } catch (error) {
        console.warn('Failed to read language preference in storage handler:', error);
      }
    };

    // Custom event listener for same-tab language changes
    const handleLanguageChange = (event: Event) => {
      try {
        const customEvent = event as CustomEvent;
        if (customEvent.detail && 
            typeof customEvent.detail === 'string' && 
            (customEvent.detail === 'en' || customEvent.detail === 'tr')) {
          setSelectedLanguage(customEvent.detail);
          // Reset expanded question when language changes
          setExpandedQuestion(null);
        }
      } catch (error) {
        console.warn('Failed to handle language change event:', error);
      }
    };

    // Add event listeners with error protection
    try {
      window.addEventListener('storage', handleStorageChange);
      window.addEventListener('languageChanged', handleLanguageChange);
    } catch (error) {
      console.warn('Failed to add event listeners:', error);
    }

    return () => {
      try {
        if (typeof window !== 'undefined') {
          window.removeEventListener('storage', handleStorageChange);
          window.removeEventListener('languageChanged', handleLanguageChange);
        }
      } catch (error) {
        console.warn('Failed to remove event listeners:', error);
      }
    };
  }, [mounted]);

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return <div className="min-h-screen bg-white" />;
  }

  const toggleQuestion = (index: number) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  const isTurkish = selectedLanguage === 'tr';
  const faqCategories = isTurkish ? faqCategoriesTR : faqCategoriesEN;

  const content = {
    en: {
      badge: "Comprehensive FAQ",
      title: "Frequently Asked Questions",
      subtitle: "Detailed information about our foundation and work on the most curious topics",
      notFound: "Couldn't find the answer to your question?",
      notFoundDesc: "Our expert team is ready to help you. Contact us for your projects, ideas, and collaboration proposals.",
      getInTouch: "Get in Touch",
      submitProject: "Submit Project"
    },
    tr: {
      badge: "Kapsamlı SSS",
      title: "Sık Sorulan Sorular",
      subtitle: "Vakfımız ve çalışmalarımız hakkında en merak edilen konularda detaylı bilgiler",
      notFound: "Sorunuzun cevabını bulamadınız mı?",
      notFoundDesc: "Uzman ekibimiz size yardımcı olmaya hazır. Projeleriniz, fikirleriniz ve işbirliği teklifleriniz için bizimle iletişime geçin.",
      getInTouch: "İletişime Geçin",
      submitProject: "Proje Başvurusu"
    }
  };

  const currentContent = isTurkish ? content.tr : content.en;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Main content */}
      <main className="flex-1">
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6 md:px-6 lg:px-8 max-w-7xl">
            {/* Header Section */}
            <div className="text-center mb-20">
              <Badge className="text-sm font-medium mb-6 px-6 py-2">{currentContent.badge}</Badge>
              <h1 className="text-4xl md:text-7xl font-bold mb-8 font-[family-name:var(--font-inter)] text-gray-900 leading-tight px-4">
                {currentContent.title}
              </h1>
              <p className="text-lg md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-[family-name:var(--font-inter)] px-4">
                {currentContent.subtitle}
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-16 px-4">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setExpandedQuestion(null); // Reset expanded question when changing category
                  }}
                  className={`px-4 md:px-6 py-3 rounded-full transition-all duration-300 font-medium text-sm md:text-base ${
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
            <div className="max-w-4xl mx-auto px-4">
              {faqCategories
                .filter(category => category.id === selectedCategory)
                .map((category) => (
                  <div key={category.id} className="space-y-6">
                    {category.questions.map((faq, index) => (
                      <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden">
                        <button
                          onClick={() => toggleQuestion(index)}
                          className="w-full px-6 md:px-8 py-6 text-left hover:bg-gray-50 transition-colors duration-200 flex justify-between items-start"
                        >
                          <h3 className="text-base md:text-lg font-semibold text-gray-900 leading-tight pr-4">
                            {faq.question}
                          </h3>
                          <span className={`flex-shrink-0 text-xl md:text-2xl text-blue-600 transition-transform duration-200 ${
                            expandedQuestion === index ? 'rotate-45' : ''
                          }`}>
                            +
                          </span>
                        </button>
                        {expandedQuestion === index && (
                          <div className="px-6 md:px-8 pb-6 border-t border-gray-100">
                            <p className="text-sm md:text-base text-gray-700 leading-relaxed pt-4">
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
            <div className="text-center mt-16 md:mt-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-6 md:p-12 border border-blue-100 mx-4">
              <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
                {currentContent.notFound}
              </h3>
              <p className="text-sm md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
                {currentContent.notFoundDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold text-sm md:text-base"
                >
                  {currentContent.getInTouch}
                </Link>
                <Link 
                  href="/funding"
                  className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-xl hover:bg-blue-50 transition-colors font-semibold text-sm md:text-base"
                >
                  {currentContent.submitProject}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 
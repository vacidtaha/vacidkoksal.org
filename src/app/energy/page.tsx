"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Zap, Battery, Sun, Wind, Leaf, Users, Globe, Lightbulb, Target, Building, HandHeart, Thermometer, Microscope } from 'lucide-react';

const content = {
  en: {
    hero: {
      title1: "Energy Beyond",
      title2: "Extraction", 
      subtitle1: "Burning fossil fuels is no longer sustainable.",
      subtitle2: "We harness the infinite power of fusion reactions and unlock the limitless potential of renewable energy."
    },
    mission: {
      title: "Vacid & Köksal Foundation",
      subtitle: "Clean Energy Mission",
      section1: {
        title: "From Scarcity to Abundance",
        content: "Traditional energy systems rely on finite resources and destructive extraction. We focus on developing technologies that capture infinite energy from fusion reactions, solar radiation, and wind patterns. We support breakthrough research in next-generation solar cells, fusion energy, and advanced battery storage systems that will power a carbon-neutral civilization."
      },
      section2: {
        title: "Distributed Energy Democracy",
        content: "Every community deserves energy independence and security. We stand behind innovators developing smart grid technologies, distributed energy systems, and energy storage solutions. From perovskite solar cells to solid-state batteries, from hydrogen fuel cells to carbon capture technologies, we support the entire spectrum of clean energy innovation."
      },
      features: {
        solar: {
          title: "Next-Gen Solar",
          description: "Perovskite tandem cells and concentrated photovoltaic systems"
        },
        storage: {
          title: "Energy Storage",
          description: "Solid-state batteries and grid-scale storage solutions"
        },
        fusion: {
          title: "Fusion Energy",
          description: "Plasma confinement and magnetic field optimization"
        }
      }
    },
    support: {
      title: "Accelerating the Energy Transition",
      subtitle: "Behind every breakthrough in clean energy technology is a visionary scientist, an innovative engineer, an ambitious entrepreneur, an AI researcher solving energy optimization. Empowering them across all domains of energy innovation is the core of our mission.",
      institutions: {
        title: "Research Institutions",
        description: "We support universities, national labs, and research consortiums in developing next-generation clean energy technologies, AI-optimized energy systems, and building world-class research facilities for sustainable energy innovation.",
        features: [
          "Fusion research grants ($150M+ total support)",
          "AI-energy optimization research programs",
          "Advanced materials & quantum computing development",
          "International energy & AI collaborations",
          "Clean energy fellowship & PhD programs",
          "Breakthrough technology incubation centers"
        ]
      },
      startups: {
        title: "CleanTech & AI-Energy Startups",
        description: "Throughout clean energy and AI-energy startups' journey from concept to global deployment, we serve as catalyst, strategic partner, and technology accelerator—not just financial investor.",
        features: [
          "Growth capital ($5M - $100M range)",
          "AI datacenter clean energy solutions",
          "Regulatory, policy & grid integration guidance",
          "Manufacturing scale-up & automation",
          "Global market access & partnerships",
          "Technology validation & pilot programs"
        ]
      },
      innovators: {
        title: "Individual Innovators",
        description: "We provide comprehensive, multi-year support to individual researchers, engineers, and AI scientists with breakthrough potential in clean energy and energy-efficient AI technologies.",
        features: [
          "Innovation grants ($50K - $5M range)",
          "AI-energy research fellowships",
          "Technical mentorship & advisory networks",
          "Patent, IP protection & licensing support",
          "Commercialization pathways & startup incubation",
          "Cross-disciplinary collaboration platforms"
        ]
      },
      strategic: {
        title: "Strategic Support Mechanisms",
        emergency: {
          title: "Emergency Energy Response",
          description: "Rapid deployment funding for critical energy infrastructure during climate emergencies, grid failures, and AI datacenter power crises. 24/7 emergency response capability."
        },
        climate: {
          title: "Climate Justice & AI Access",
          description: "Supporting clean energy and AI access for underserved communities and developing nations through affordable renewable solutions and democratized AI infrastructure."
        },
        smartGrid: {
          title: "Smart Grid & AI Integration", 
          description: "Investments in AI-powered smart grid technologies, predictive energy storage systems, and distributed energy management platforms with machine learning optimization."
        },
        partnerships: {
          title: "Global Energy-AI Partnerships",
          description: "Cross-border collaborations for technology transfer, joint development of breakthrough energy solutions, and international AI-energy research consortium building."
        }
      }
    },
    roadmap: {
      title: "Our Energy Transformation Roadmap",
      subtitle: "We don't just follow the energy transition—we accelerate it through strategic technology deployment and systemic change initiatives.",
      phases: {
        phase1: {
          period: "2025-2027",
          label: "Technology acceleration",
          badge: "FOUNDATION PHASE",
          title: "Breakthrough Technology Development",
          description: "We identify and accelerate the most promising clean energy technologies through strategic investments and partnerships. Our focus is on game-changing innovations that can achieve grid parity and outcompete fossil fuels on pure economics.",
          quote: "The best solar cell is not the one that's 45% efficient in the lab, but the one that's 25% efficient and costs $0.10 per watt in mass production.",
          features: [
            "Next-generation solar cell development",
            "Advanced battery chemistry research", 
            "Fusion reactor prototyping",
            "Smart grid infrastructure pilots",
            "Carbon capture scale-up",
            "Hydrogen production optimization"
          ]
        },
        phase2: {
          period: "2027-2030",
          label: "Market transformation",
          badge: "DEPLOYMENT PHASE",
          title: "Massive Market Deployment",
          description: "By 2027, our supported technologies achieve commercial viability and begin large-scale deployment. We facilitate the rapid scaling of manufacturing, distribution, and installation to capture the exponential growth phase of clean energy adoption.",
          quote: "When clean energy becomes cheaper than fossil fuels, the transition accelerates from policy choice to economic inevitability.",
          features: [
            "Gigawatt-scale manufacturing",
            "Global supply chain optimization",
            "Rapid deployment financing",
            "Grid integration protocols",
            "Energy storage deployment",
            "Market mechanism design"
          ]
        },
        phase3: {
          period: "2030-2035",
          label: "Clean energy dominance",
          badge: "TRANSFORMATION COMPLETE",
          title: "Energy System Transformation",
          description: "From 2030 onwards, we don't just participate in the energy transition—we complete it. Our technologies become the backbone of a fully renewable global energy system. Fossil fuel infrastructure becomes economically obsolete and systematically retired.",
          quote: "When fusion reactors power cities and solar panels cover every rooftop, the carbon age ends not with regulation, but with obsolescence.",
          features: [
            "Global clean energy dominance",
            "Fossil fuel infrastructure retirement",
            "Carbon-negative energy systems",
            "Universal energy access",
            "Climate restoration technologies",
            "Post-carbon civilization foundation"
          ]
        }
      },
      promise: {
        title: "Our Promise",
        description: "By 2035, fossil fuel energy will be as obsolete as steam engines. We're not just building clean energy—we're architecting humanity's sustainable future.",
        metrics: [
          { value: "100%", label: "Renewable energy systems" },
          { value: "50%", label: "Reduction in energy costs" },
          { value: "Zero", label: "Carbon emissions from energy" }
        ]
      }
    },
    technologies: {
      title: "Revolutionary Energy Technologies",
      subtitle: "Behind every kilowatt lies a breakthrough. Understanding the science, engineering, and economics of tomorrow's energy systems drives our investment strategy.",
      fusion: {
        title: "Fusion Energy Revolution",
        description: "Fusion represents the ultimate energy source—the same process that powers stars. By confining plasma at 100 million degrees Celsius using magnetic fields stronger than Earth's, we can fuse hydrogen isotopes to release enormous amounts of clean energy.",
        breakthrough: {
          title: "Technical Breakthrough: Tokamak Optimization",
          content: "Our supported research focuses on stellarator designs and high-temperature superconducting magnets that can achieve Q>10 (energy gain factor). Current ITER project targets Q=10, but commercial viability requires Q>30 with 80%+ availability."
        },
        innovations: {
          plasma: {
            title: "Plasma Physics Innovation",
            description: "Advanced plasma control algorithms using machine learning to predict and prevent disruptions, maintaining stable fusion reactions."
          },
          materials: {
            title: "Materials Engineering", 
            description: "Tritium-breeding blankets and neutron-resistant materials that can withstand 20+ years of fusion neutron bombardment."
          }
        },
        roadmap: {
          title: "Fusion Technology Roadmap",
          milestones: [
            { name: "ITER First Plasma", year: "2025" },
            { name: "SPARC Q>2 Achievement", year: "2026" },
            { name: "Commercial Demonstration", year: "2030" },
            { name: "Grid-Scale Deployment", year: "2035" }
          ],
          investment: {
            title: "Investment Focus",
            description: "Supporting 12 fusion startups with $150M+ committed capital, focusing on high-temperature superconducting magnet technology and alternative confinement approaches."
          }
        }
      },
      solar: {
        title: "Next-Generation Solar Systems",
        description: "While silicon solar cells approach their theoretical 29% efficiency limit, breakthrough technologies like perovskite tandems and concentrated photovoltaics are pushing efficiency beyond 40% while dramatically reducing costs.",
        breakthrough: {
          title: "Scientific Breakthrough: Perovskite Stability",
          content: "Our research partners have achieved 47.1% efficiency in laboratory perovskite-silicon tandem cells. The challenge is extending operational lifetime from 1,000 to 25,000+ hours while maintaining efficiency under real-world conditions."
        },
        innovations: {
          thermal: {
            title: "Thermal Management Innovation",
            description: "Advanced heat dissipation systems using liquid cooling and selective emitter coatings to maintain optimal operating temperatures."
          },
          quantum: {
            title: "Quantum Efficiency Optimization",
            description: "Quantum dot sensitizers and plasmonic nanostructures that capture previously unusable portions of the solar spectrum."
          }
        },
        matrix: {
          title: "Solar Technology Matrix",
          technologies: [
            { name: "Silicon (Current)", efficiency: "22%", cost: "$0.20/W - Mature technology" },
            { name: "Perovskite Tandem", efficiency: "47%", cost: "$0.08/W - Target by 2028" },
            { name: "Concentrated PV", efficiency: "52%", cost: "$0.15/W - Utility scale only" }
          ],
          manufacturing: {
            title: "Manufacturing Revolution",
            description: "Supporting roll-to-roll printing processes that can produce flexible perovskite cells at 10x the speed of silicon wafer manufacturing."
          }
        }
      },
      storage: {
        title: "Revolutionary Energy Storage",
        description: "Energy storage is the missing link in renewable energy deployment. Advanced battery chemistries, mechanical storage systems, and novel approaches like liquid air energy storage are enabling 24/7 renewable power.",
        breakthrough: {
          title: "Breakthrough: Solid-State Batteries",
          content: "Our portfolio companies have achieved 1,000 Wh/kg energy density in solid-state lithium-metal batteries—3x higher than current Li-ion. Manufacturing scale-up targets $50/kWh by 2030, making renewable energy with storage cheaper than coal."
        },
        innovations: {
          gridScale: {
            title: "Grid-Scale Storage Systems",
            description: "Compressed air energy storage in underground caverns achieving 70% round-trip efficiency for seasonal energy storage."
          },
          networks: {
            title: "Global Energy Networks",
            description: "Ultra-high voltage DC transmission lines enabling intercontinental energy sharing and load balancing."
          }
        },
        comparison: {
          title: "Storage Technology Comparison",
          technologies: [
            { name: "Li-ion (Current)", cost: "$100/kWh", density: "300 Wh/kg" },
            { name: "Solid-State", cost: "$50/kWh", density: "1,000 Wh/kg" },
            { name: "Compressed Air", cost: "$20/kWh", density: "Grid-scale only" }
          ],
          investment: {
            title: "Investment Impact",
            description: "$300M committed to energy storage innovations, targeting 90% cost reduction and enabling 100% renewable grids by 2030."
          }
        }
      },
      intelligentSystems: {
        title: "Intelligent Energy Systems",
        description: "The future energy grid is not just clean—it's intelligent. AI-powered systems optimize energy flow in real-time, predict demand, and automatically balance supply across renewable sources.",
        features: [
          {
            title: "Predictive Analytics",
            description: "Machine learning algorithms predict energy demand 24-48 hours in advance with 98% accuracy, enabling optimal renewable energy dispatch."
          },
          {
            title: "Distributed Control",
            description: "Blockchain-based peer-to-peer energy trading allows every solar panel and battery to participate in automated energy markets."
          },
          {
            title: "Autonomous Optimization",
            description: "Self-healing grid systems automatically reroute power during outages and optimize efficiency without human intervention."
          }
        ],
        quote: "The smart grid doesn't just distribute electricity—it orchestrates the symphony of renewable energy across continents."
      },
      aiEnergy: {
        title: "Artificial Intelligence: Tomorrow's Promise, Today's Energy Crisis",
        subtitle: "AI will revolutionize medicine, accelerate scientific discovery, and solve humanity's greatest challenges. But training a single large language model consumes as much energy as powering 120 homes for a year.",
        future: {
          title: "The Future AI Will Build",
          areas: [
            {
              title: "Healthcare Revolution",
              description: "AI will diagnose diseases years before symptoms appear, design personalized medicines, and accelerate drug discovery from decades to months. Every cancer could become curable, every genetic disorder preventable."
            },
            {
              title: "Scientific Breakthrough Acceleration",
              description: "From protein folding to climate modeling, AI systems will compress centuries of research into years. Materials science, quantum computing, and fusion energy will advance at unprecedented speeds."
            },
            {
              title: "Human Potential Amplification",
              description: "AI tutors will provide personalized education to every child, creative AI will democratize art and innovation, and AI assistants will eliminate mundane work, freeing humanity for exploration and creativity."
            }
          ],
          promise: {
            universal: {
              title: "Universal Access to Expertise",
              description: "World-class education and medical advice for every person on Earth"
            },
            discovery: {
              title: "Accelerated Discovery",
              description: "Scientific breakthroughs at 100x current pace"
            },
            solutions: {
              title: "Global Challenge Solutions",
              description: "Climate change, poverty, disease eradication"
            }
          },
          quote: "AI represents the most transformative technology in human history. Its potential to amplify human intelligence and creativity is limitless."
        },
        crisis: {
          title: "The Inconvenient Truth: AI's Energy Appetite",
          description: "Every breakthrough in AI comes with an exponentially growing energy cost. The computation required for training advanced AI models is doubling every 3-4 months.",
          metrics: [
            {
              title: "Training Energy Cost",
              value: "1,287 MWh",
              description: "GPT-4 training consumed equivalent to powering 120 homes for a year"
            },
            {
              title: "Data Center Growth",
              value: "+400%",
              description: "AI data center energy consumption projected increase by 2030"
            },
            {
              title: "Global AI Energy Use",
              value: "2-3%",
              description: "Current percentage of global electricity consumption"
            }
          ],
          challenge: {
            title: "The Exponential Challenge",
            description: "Training GPT-3 required 1,287 MWh. GPT-4 needed an estimated 50,000+ MWh. The next generation of AI models could require 100x more energy. Without revolutionary advances in clean energy, AI progress could stall due to energy constraints."
          }
        },
        solution: {
          title: "Sustainable AI Revolution",
          description: "The foundation's mission extends beyond general clean energy—we specifically target the AI industry's energy crisis. By 2030, we aim to power all major AI research and deployment with 100% renewable energy.",
          strategies: [
            {
              title: "Dedicated AI Solar Farms",
              description: "Massive solar installations dedicated exclusively to powering AI data centers, with co-located battery storage for 24/7 clean power."
            },
            {
              title: "AI-Optimized Fusion Reactors",
              description: "Small modular fusion reactors designed specifically for the baseload power requirements of large-scale AI training facilities."
            },
            {
              title: "Efficient AI Hardware",
              description: "Supporting development of neuromorphic chips and quantum processors that reduce AI computation energy by 1000x."
            }
          ],
          investment: {
            title: "Our AI-Energy Investment Strategy",
            areas: [
              {
                title: "Clean AI Data Centers",
                amount: "$200M",
                description: "100% renewable-powered facilities for AI training and inference"
              },
              {
                title: "Energy-Efficient AI Chips",
                amount: "$150M",
                description: "Neuromorphic and quantum computing for ultra-low power AI"
              },
              {
                title: "AI-Optimize Yenilenebilir Enerji",
                amount: "$300M",
                description: "Dedicated clean energy infrastructure for AI workloads"
              }
            ],
            mission: {
              title: "Mission Critical",
              description: "AI's potential to solve climate change, cure diseases, and unlock human creativity depends entirely on solving its energy problem. This is not just an investment—it's a responsibility to the future."
            }
          }
        },
        convergence: {
          title: "The AI-Energy Convergence",
          description: "We stand at a critical juncture. AI can either become humanity's greatest tool or its greatest energy burden. The choice is ours to make—and we choose abundance.",
          metrics: [
            { value: "100%", label: "Clean energy for all AI by 2030" },
            { value: "1000x", label: "Energy efficiency improvement target" },
            { value: "∞", label: "Unlimited potential when energy is abundant" }
          ]
        }
      }
    },
    closing: {
      title: "Powering Tomorrow Together",
      sections: [
        "The age of infinite clean energy is not a distant dream. Every photon captured, every electron stored, every fusion reaction controlled brings us closer to abundance.",
        "As the Vacid & Köksal Foundation, we stand behind this vision, empowering innovators and accelerating the technologies that will power our future.",
        "Because energy beyond extraction is not just possible, but inevitable."
      ],
      highlight: "Because energy beyond extraction"
    }
  },
  tr: {
    hero: {
      title1: "Sınırsız",
      title2: "Enerji",
      subtitle1: "Fosil yakıt yakmak artık sürdürülebilir değil.",
      subtitle2: "Füzyon reaksiyonlarının sonsuz gücünü kullanıyor ve yenilenebilir enerjinin sınırsız potansiyelini açığa çıkarıyoruz."
    },
    mission: {
      title: "Vacid & Köksal Vakfı",
      subtitle: "Temiz Enerji Misyonu",
      section1: {
        title: "Kıtlıktan Bolluğa",
        content: "Geleneksel enerji sistemleri sınırlı kaynaklara ve yıkıcı çıkarıma dayanır. Füzyon reaksiyonlarından, güneş ışınımından ve rüzgar kalıplarından sonsuz enerji yakalayan teknolojiler geliştirmeye odaklanıyoruz. Karbon-nötr bir medeniyeti güçlendirecek yeni nesil güneş hücreleri, füzyon enerjisi ve gelişmiş batarya depolama sistemlerinde çığır açan araştırmaları destekliyoruz."
      },
      section2: {
        title: "Dağıtık Enerji Demokrasisi",
        content: "Her topluluk enerji bağımsızlığı ve güvenliği hak ediyor. Akıllı şebeke teknolojileri, dağıtık enerji sistemleri ve enerji depolama çözümleri geliştiren yenilikçilerin arkasında duruyoruz. Perovskit güneş hücrelerinden katı hal bataryalara, hidrojen yakıt hücrelerinden karbon yakalama teknolojilerine kadar temiz enerji inovasyonunun tüm spektrumunu destekliyoruz."
      },
      features: {
        solar: {
          title: "Yeni Nesil Güneş",
          description: "Perovskit tandem hücreler ve konsantre fotovoltaik sistemler"
        },
        storage: {
          title: "Enerji Depolama",
          description: "Katı hal bataryalar ve şebeke ölçekli depolama çözümleri"
        },
        fusion: {
          title: "Füzyon Enerjisi",
          description: "Plazma hapsetme ve manyetik alan optimizasyonu"
        }
      }
    },
    support: {
      title: "Enerji Dönüşümünü Hızlandırmak",
      subtitle: "Temiz enerji teknolojisindeki her atılımın arkasında vizyoner bir bilim insanı, yenilikçi bir mühendis, hırslı bir girişimci, enerji optimizasyonu çözen bir AI araştırmacısı vardır. Enerji inovasyonunun tüm alanlarında onları güçlendirmek misyonumuzun özüdür.",
      institutions: {
        title: "Araştırma Kurumları",
        description: "Üniversiteleri, ulusal laboratuvarları ve araştırma konsorsiyumlarını yeni nesil temiz enerji teknolojileri, AI-optimizeli enerji sistemleri geliştirmek ve sürdürülebilir enerji inovasyonu için dünya standartlarında araştırma tesisleri inşa etmek konusunda destekliyoruz.",
        features: [
          "Füzyon araştırma hibeleri ($150M+ toplam destek)",
          "AI-enerji optimizasyonu araştırma programları",
          "Gelişmiş malzemeler ve kuantum bilişim geliştirme",
          "Uluslararası enerji ve AI işbirlikleri",
          "Temiz enerji burs ve doktora programları",
          "Çığır açan teknoloji kuluçka merkezleri"
        ]
      },
      startups: {
        title: "CleanTech ve AI-Enerji Startupları",
        description: "Temiz enerji ve AI-enerji startuplarının konseptten küresel dağıtıma yolculuğu boyunca, sadece finansal yatırımcı değil, katalizör, stratejik ortak ve teknoloji hızlandırıcısı olarak hizmet veriyoruz.",
        features: [
          "Büyüme sermayesi ($5M - $100M aralığı)",
          "AI veri merkezi temiz enerji çözümleri",
          "Düzenleyici, politika ve şebeke entegrasyonu rehberliği",
          "Üretim ölçeklendirme ve otomasyon",
          "Küresel pazar erişimi ve ortaklıklar",
          "Teknoloji doğrulama ve pilot programlar"
        ]
      },
      innovators: {
        title: "Bireysel Yenilikçiler",
        description: "Temiz enerji ve enerji-verimli AI teknolojilerinde çığır açma potansiyeli olan bireysel araştırmacılara, mühendislere ve AI bilim insanlarına kapsamlı, çok yıllı destek sağlıyoruz.",
        features: [
          "İnovasyon hibeleri ($50K - $5M aralığı)",
          "AI-enerji araştırma bursları",
          "Teknik mentorluk ve danışman ağları",
          "Patent, fikri mülkiyet korunması ve lisanslama desteği",
          "Ticarileştirme yolları ve startup kuluçkası",
          "Disiplinler arası işbirliği platformları"
        ]
      },
      strategic: {
        title: "Stratejik Destek Mekanizmaları",
        emergency: {
          title: "Acil Enerji Müdahalesi",
          description: "İklim acil durumları, şebeke arızaları ve AI veri merkezi güç krizleri sırasında kritik enerji altyapısı için hızlı dağıtım finansmanı. 7/24 acil müdahale kapasitesi."
        },
        climate: {
          title: "İklim Adaleti ve AI Erişimi",
          description: "Hizmet alamayan topluluklar ve gelişmekte olan ülkeler için uygun fiyatlı yenilenebilir çözümler ve demokratikleştirilmiş AI altyapısı aracılığıyla temiz enerji ve AI erişimini destekleme."
        },
        smartGrid: {
          title: "Akıllı Şebeke ve AI Entegrasyonu",
          description: "AI destekli akıllı şebeke teknolojileri, öngörülü enerji depolama sistemleri ve makine öğrenmesi optimizasyonu ile dağıtık enerji yönetim platformlarına yatırımlar."
        },
        partnerships: {
          title: "Küresel Enerji-AI Ortaklıkları",
          description: "Teknoloji transferi, çığır açan enerji çözümlerinin ortak geliştirilmesi ve uluslararası AI-enerji araştırma konsorsiyumu oluşturma için sınır ötesi işbirlikleri."
        }
      }
    },
    roadmap: {
      title: "Enerji Dönüşüm Yol Haritamız",
      subtitle: "Enerji geçişini sadece takip etmiyoruz—stratejik teknoloji dağıtımı ve sistemik değişim girişimleri aracılığıyla hızlandırıyoruz.",
      phases: {
        phase1: {
          period: "2025-2027",
          label: "Teknoloji hızlandırma",
          badge: "TEMEL AŞAMA",
          title: "Çığır Açan Teknoloji Geliştirme",
          description: "Stratejik yatırımlar ve ortaklıklar aracılığıyla en umut verici temiz enerji teknolojilerini belirliyoruz ve hızlandırıyoruz. Odağımız şebeke paritesi elde edebilen ve saf ekonomi temelinde fosil yakıtlarla rekabet edebilen oyun değiştirici inovasyonlarda.",
          quote: "En iyi güneş hücresi laboratuvarda %45 verimli olan değil, seri üretimde %25 verimli olan ve watt başına 0,10$ maliyetli olandır.",
          features: [
            "Yeni nesil güneş hücresi geliştirme",
            "Gelişmiş batarya kimyası araştırması",
            "Füzyon reaktörü prototipleme",
            "Akıllı şebeke altyapı pilot projeleri",
            "Karbon yakalama ölçeklendirme",
            "Hidrojen üretimi optimizasyonu"
          ]
        },
        phase2: {
          period: "2027-2030",
          label: "Pazar dönüşümü",
          badge: "DAĞITIM AŞAMASI",
          title: "Büyük Ölçekli Pazar Dağıtımı",
          description: "2027'ye kadar desteklediğimiz teknolojiler ticari uygulanabilirlik elde eder ve büyük ölçekli dağıtıma başlar. Temiz enerji benimseniminin üstel büyüme aşamasını yakalamak için üretim, dağıtım ve kurulumun hızlı ölçeklenmesini kolaylaştırıyoruz.",
          quote: "Temiz enerji fosil yakıtlardan daha ucuz hale geldiğinde, geçiş politika seçiminden ekonomik kaçınılmazlığa doğru hızlanır.",
          features: [
            "Gigawatt ölçekli üretim",
            "Küresel tedarik zinciri optimizasyonu",
            "Hızlı dağıtım finansmanı",
            "Şebeke entegrasyon protokolleri",
            "Enerji depolama dağıtımı",
            "Pazar mekanizması tasarımı"
          ]
        },
        phase3: {
          period: "2030-2035",
          label: "Temiz enerji hakimiyeti",
          badge: "DÖNÜŞÜM TAMAMLANDI",
          title: "Enerji Sistemi Dönüşümü",
          description: "2030'dan itibaren enerji geçişine sadece katılmıyoruz—onu tamamlıyoruz. Teknolojilerimiz tamamen yenilenebilir küresel enerji sisteminin omurgası haline gelir. Fosil yakıt altyapısı ekonomik olarak eskir ve sistematik olarak emekliye ayrılır.",
          quote: "Füzyon reaktörleri şehirleri güçlendirdiğinde ve güneş panelleri her çatıyı kapladığında, karbon çağı düzenlemeyle değil, eskimeyle sona erer.",
          features: [
            "Küresel temiz enerji hakimiyeti",
            "Fosil yakıt altyapısının emekliye ayrılması",
            "Karbon-negatif enerji sistemleri",
            "Evrensel enerji erişimi",
            "İklim restorasyon teknolojileri",
            "Karbon sonrası medeniyet temeli"
          ]
        }
      },
      promise: {
        title: "Sözümüz",
        description: "2035'e kadar fosil yakıt enerjisi buhar makineleri kadar eskimiş olacak. Sadece temiz enerji inşa etmiyoruz—insanlığın sürdürülebilir geleceğini tasarlıyoruz.",
        metrics: [
          { value: "100%", label: "Yenilenebilir enerji sistemleri" },
          { value: "50%", label: "Enerji maliyetlerinde azalma" },
          { value: "Sıfır", label: "Enerjiden karbon emisyonu" }
        ]
      }
    },
    technologies: {
      title: "Devrimci Enerji Teknolojileri",
      subtitle: "Her kilowattın arkasında bir atılım yatar. Geleceğin enerji sistemlerinin bilimini, mühendisliğini ve ekonomisini anlamak yatırım stratejimizi yönlendirir.",
      fusion: {
        title: "Füzyon Enerji Devrimi",
        description: "Füzyon nihai enerji kaynağını temsil eder—yıldızları güçlendiren aynı süreç. Dünya'nınkinden daha güçlü manyetik alanlar kullanarak plazmayı 100 milyon santigrat derecede hapsederek, hidrojen izotoplarını kaynaştırıp muazzam miktarda temiz enerji açığa çıkarabiliriz.",
        breakthrough: {
          title: "Teknik Atılım: Tokamak Optimizasyonu",
          content: "Desteklediğimiz araştırmalar, Q>10 (enerji kazanım faktörü) elde edebilen stellarator tasarımları ve yüksek sıcaklık süperiletken mıknatıslara odaklanıyor. Mevcut ITER projesi Q=10'u hedefliyor, ancak ticari uygulanabilirlik %80+ kullanılabilirlik ile Q>30 gerektiriyor."
        },
        innovations: {
          plasma: {
            title: "Plazma Fiziği İnovasyonu",
            description: "Karışıklıkları öngörmek ve önlemek, kararlı füzyon reaksiyonlarını sürdürmek için makine öğrenmesi kullanan gelişmiş plazma kontrol algoritmaları."
          },
          materials: {
            title: "Malzeme Mühendisliği",
            description: "20+ yıl füzyon nötron bombardımanına dayanabilen trityum üreyen örtüler ve nötron dirençli malzemeler."
          }
        },
        roadmap: {
          title: "Füzyon Teknolojisi Yol Haritası",
          milestones: [
            { name: "ITER İlk Plazma", year: "2025" },
            { name: "SPARC Q>2 Başarısı", year: "2026" },
            { name: "Ticari Gösterim", year: "2030" },
            { name: "Şebeke Ölçekli Dağıtım", year: "2035" }
          ],
          investment: {
            title: "Yatırım Odağı",
            description: "Yüksek sıcaklık süperiletken mıknatıs teknolojisi ve alternatif hapsetme yaklaşımlarına odaklanarak 12 füzyon startupını $150M+ taahhütlü sermaye ile destekliyoruz."
          }
        }
      },
      solar: {
        title: "Yeni Nesil Güneş Sistemleri",
        description: "Silikon güneş hücreleri teorik %29 verimlilik sınırına yaklaşırken, perovskit tandemler ve konsantre fotovoltaikler gibi çığır açan teknolojiler verimliliği %40'ın ötesine taşırken maliyetleri dramatik şekilde azaltıyor.",
        breakthrough: {
          title: "Bilimsel Atılım: Perovskit Kararlılığı",
          content: "Araştırma ortaklarımız laboratuvar perovskit-silikon tandem hücrelerinde %47.1 verimlilik elde etti. Zorluk, gerçek dünya koşullarında verimliliği koruyarak operasyonel ömrü 1.000'den 25.000+ saate çıkarmak."
        },
        innovations: {
          thermal: {
            title: "Termal Yönetim İnovasyonu",
            description: "Advanced heat dissipation systems using liquid cooling and selective emitter coatings to maintain optimal operating temperatures."
          },
          quantum: {
            title: "Kuantum Verimlilik Optimizasyonu",
            description: "Güneş spektrumunun daha önce kullanılamayan kısımlarını yakalayan kuantum nokta duyarlaştırıcıları ve plazmonik nanoyapılar."
          }
        },
        matrix: {
          title: "Güneş Teknolojisi Matrisi",
          technologies: [
            { name: "Silikon (Mevcut)", efficiency: "22%", cost: "$0.20/W - Olgun teknoloji" },
            { name: "Perovskit Tandem", efficiency: "47%", cost: "$0.08/W - 2028 hedefi" },
            { name: "Konsantre PV", efficiency: "52%", cost: "$0.15/W - Sadece utility ölçek" }
          ],
          manufacturing: {
            title: "Üretim Devrimi",
            description: "Silikon wafer üretiminin 10 katı hızında esnek perovskit hücreler üretebilen rulo-rulo baskı süreçlerini destekliyoruz."
          }
        }
      },
      storage: {
        title: "Devrimci Enerji Depolama",
        description: "Enerji depolama, yenilenebilir enerji dağıtımında eksik halka. Gelişmiş batarya kimyaları, mekanik depolama sistemleri ve sıvı hava enerji depolama gibi yeni yaklaşımlar 7/24 yenilenebilir güç sağlıyor.",
        breakthrough: {
          title: "Atılım: Katı Hal Bataryalar",
          content: "Portföy şirketlerimiz katı hal lityum-metal bataryalarda 1.000 Wh/kg enerji yoğunluğu elde etti—mevcut Li-ion'dan 3 kat yüksek. Üretim ölçeklendirme 2030'da $50/kWh hedefliyor, depolamalı yenilenebilir enerjiyi kömürden daha ucuz yapacak."
        },
        innovations: {
          gridScale: {
            title: "Şebeke Ölçekli Depolama Sistemleri",
            description: "Mevsimsel enerji depolama için %70 gidiş-dönüş verimlilik elde eden yeraltı mağaralarında basınçlı hava enerji depolama."
          },
          networks: {
            title: "Küresel Enerji Ağları",
            description: "Kıtalar arası enerji paylaşımı ve yük dengelemesi sağlayan ultra-yüksek voltaj DC iletim hatları."
          }
        },
        comparison: {
          title: "Depolama Teknolojisi Karşılaştırması",
          technologies: [
            { name: "Li-ion (Mevcut)", cost: "$100/kWh", density: "300 Wh/kg" },
            { name: "Katı Hal", cost: "$50/kWh", density: "1.000 Wh/kg" },
            { name: "Basınçlı Hava", cost: "$20/kWh", density: "Sadece şebeke ölçek" }
          ],
          investment: {
            title: "Yatırım Etkisi",
            description: "%90 maliyet azalması hedefleyerek ve 2030'da %100 yenilenebilir şebekeleri mümkün kılmak için enerji depolama inovasyonlarına $300M taahhüt edildi."
          }
        }
      },
      intelligentSystems: {
        title: "Akıllı Enerji Sistemleri",
        description: "Geleceğin enerji şebekesi sadece temiz değil—aynı zamanda akıllı. AI destekli sistemler gerçek zamanlı enerji akışını optimize ediyor, talebi tahmin ediyor ve yenilenebilir kaynaklar arasında arzı otomatik olarak dengeliyor.",
        features: [
          {
            title: "Öngörülü Analitik",
            description: "Makine öğrenmesi algoritmaları enerji talebini 24-48 saat önceden %98 doğrulukla tahmin ediyor, optimal yenilenebilir enerji sevkiyatını mümkün kılıyor."
          },
          {
            title: "Dağıtık Kontrol",
            description: "Blockchain tabanlı eşler arası enerji ticareti, her güneş panelinin ve bataryanın otomatik enerji pazarlarına katılmasını sağlıyor."
          },
          {
            title: "Otonom Optimizasyon",
            description: "Kendi kendini iyileştiren şebeke sistemleri kesintiler sırasında gücü otomatik olarak yeniden yönlendiriyor ve insan müdahalesi olmadan verimliliği optimize ediyor."
          }
        ],
        quote: "Akıllı şebeke sadece elektrik dağıtmıyor—kıtalar arası yenilenebilir enerji senfonisini yönetiyor."
      },
      aiEnergy: {
        title: "Yapay Zeka: Yarının Vaadi, Bugünün Enerji Krizi",
        subtitle: "AI tıpta devrim yaratacak, bilimsel keşifleri hızlandıracak ve insanlığın en büyük zorluklarını çözecek. Ancak tek bir büyük dil modelini eğitmek bir yıl boyunca 120 evi güçlendirmek kadar enerji tüketiyor.",
        future: {
          title: "AI'nin İnşa Edeceği Gelecek",
          areas: [
            {
              title: "Sağlık Devrimi",
              description: "AI hastalıkları semptomlar ortaya çıkmadan yıllar önce teşhis edecek, kişiselleştirilmiş ilaçlar tasarlayacak ve ilaç keşfini on yıllardan aylara hızlandıracak. Her kanser tedavi edilebilir, her genetik bozukluk önlenebilir hale gelecek."
            },
            {
              title: "Bilimsel Atılım Hızlandırması",
              description: "Protein katlanmasından iklim modellemesine kadar, AI sistemleri yüzyıllık araştırmayı yıllara sıkıştıracak. Malzeme bilimi, kuantum bilişim ve füzyon enerjisi eşi görülmemiş hızlarla ilerleyecek."
            },
            {
              title: "İnsan Potansiyeli Büyütme",
              description: "AI öğretmenler her çocuğa kişiselleştirilmiş eğitim sağlayacak, yaratıcı AI sanat ve inovasyonu demokratikleştirecek, AI asistanlar sıradan işi ortadan kaldıracak ve insanlığı keşif ve yaratıcılık için özgürleştirecek."
            }
          ],
          promise: {
            universal: {
              title: "Uzmanlığa Evrensel Erişim",
              description: "Dünyadaki her insan için dünya standartlarında eğitim ve tıbbi tavsiye"
            },
            discovery: {
              title: "Hızlandırılmış Keşif",
              description: "Mevcut hızın 100 katında bilimsel atılımlar"
            },
            solutions: {
              title: "Küresel Zorluk Çözümleri",
              description: "İklim değişikliği, yoksulluk, hastalık eradikasyonu"
            }
          },
          quote: "AI, insan tarihindeki en dönüştürücü teknolojiyi temsil ediyor. İnsan zekasını ve yaratıcılığını büyütme potansiyeli sınırsız."
        },
        crisis: {
          title: "Rahatsız Edici Gerçek: AI'nin Enerji İştahı",
          description: "AI'deki her atılım üssel olarak artan enerji maliyeti ile geliyor. Gelişmiş AI modellerini eğitmek için gereken hesaplama her 3-4 ayda bir ikiye katlanıyor.",
          metrics: [
            {
              title: "Eğitim Enerji Maliyeti",
              value: "1,287 MWh",
              description: "GPT-4 eğitimi bir yıl boyunca 120 evi güçlendirmeye eşdeğer enerji tüketti"
            },
            {
              title: "Veri Merkezi Büyümesi",
              value: "+400%",
              description: "2030'a kadar AI veri merkezi enerji tüketimi öngörülen artış"
            },
            {
              title: "Küresel AI Enerji Kullanımı",
              value: "2-3%",
              description: "Küresel elektrik tüketiminin mevcut yüzdesi"
            }
          ],
          challenge: {
            title: "Üstel Zorluk",
            description: "GPT-3'ü eğitmek 1,287 MWh gerektirdi. GPT-4'ün tahminen 50,000+ MWh'ye ihtiyacı vardı. AI modellerinin bir sonraki nesli 100 kat daha fazla enerji gerektirebilir. Temiz enerjide devrimci ilerlemeler olmadan, AI ilerlemesi enerji kısıtlamaları nedeniyle durabilir."
          }
        },
        solution: {
          title: "Sürdürülebilir AI Devrimi",
          description: "Vakfın misyonu genel temiz enerjinin ötesine uzanıyor—AI endüstrisinin enerji krizini özellikle hedefliyoruz. 2030'a kadar tüm büyük AI araştırma ve dağıtımını %100 yenilenebilir enerjiyle güçlendirmeyi hedefliyoruz.",
          strategies: [
            {
              title: "Özel AI Güneş Çiftlikleri",
              description: "Özellikle AI veri merkezlerini güçlendirmek için ayrılmış büyük güneş tesisleri, 7/24 temiz güç için eş zamanlı batarya depolama ile."
            },
            {
              title: "AI-Optimize Füzyon Reaktörleri",
              description: "Büyük ölçekli AI eğitim tesislerinin temel yük güç gereksinimlerine özel olarak tasarlanmış küçük modüler füzyon reaktörleri."
            },
            {
              title: "Verimli AI Donanımı",
              description: "AI hesaplama enerjisini 1000 kat azaltan nöromorfik çipler ve kuantum işlemcilerin geliştirilmesini destekleme."
            }
          ],
          investment: {
            title: "AI-Enerji Yatırım Stratejimiz",
            areas: [
              {
                title: "Temiz AI Veri Merkezleri",
                amount: "$200M",
                description: "AI eğitimi ve çıkarımı için %100 yenilenebilir güçlü tesisler"
              },
              {
                title: "Enerji-Verimli AI Çipleri",
                amount: "$150M",
                description: "Ultra düşük güçlü AI için nöromorfik ve kuantum bilişim"
              },
              {
                title: "AI-Optimize Yenilenebilir Enerji",
                amount: "$300M",
                description: "AI iş yükleri için özel temiz enerji altyapısı"
              }
            ],
            mission: {
              title: "Misyon Kritik",
              description: "AI'nin iklim değişikliğini çözme, hastalıkları tedavi etme ve insan yaratıcılığını açığa çıkarma potansiyeli tamamen enerji problemini çözmeye bağlı. Bu sadece bir yatırım değil—geleceğe karşı bir sorumluluk."
            }
          }
        },
        convergence: {
          title: "AI-Enerji Yakınsaması",
          description: "Kritik bir kavşakta duruyoruz. AI ya insanlığın en büyük aracı ya da en büyük enerji yükü olabilir. Seçim bizim—ve biz bolluğu seçiyoruz.",
          metrics: [
            { value: "100%", label: "2030'a kadar tüm AI için temiz enerji" },
            { value: "1000x", label: "Enerji verimliliği iyileştirme hedefi" },
            { value: "∞", label: "Enerji bol olduğunda sınırsız potansiyel" }
          ]
        }
      }
    },
    closing: {
      title: "Yarını Birlikte Güçlendirmek",
      sections: [
        "Sonsuz temiz enerji çağı uzak bir hayal değil. Yakalanan her foton, depolanan her elektron, kontrol edilen her füzyon reaksiyonu bizi bolluğa yaklaştırıyor.",
        "Vacid & Köksal Vakfı olarak bu vizyonun arkasında duruyoruz, yenilikçileri güçlendiriyoruz ve geleceğimizi güçlendirecek teknolojileri hızlandırıyoruz.",
        "Çünkü sınırsız enerji sadece mümkün değil, kaçınılmaz."
      ],
      highlight: "Çünkü sınırsız enerji"
    }
  }
};

export default function EnergyPage() {
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'tr'>('en');
  const [mounted, setMounted] = useState(false);

  // Check language preference from localStorage
  useEffect(() => {
    setMounted(true);
    
    try {
      const savedLanguage = localStorage.getItem('language-preference') as 'en' | 'tr' | null;
      if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'tr')) {
        setSelectedLanguage(savedLanguage);
      }
    } catch (error) {
      console.warn('Failed to read language preference:', error);
    }
  }, []);

  // Listen for language changes
  useEffect(() => {
    if (!mounted) return;

    const handleStorageChange = () => {
      try {
        const savedLanguage = localStorage.getItem('language-preference') as 'en' | 'tr' | null;
        if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'tr')) {
          setSelectedLanguage(savedLanguage);
        }
      } catch (error) {
        console.warn('Failed to read language preference:', error);
      }
    };

    // Listen for language changes from other components
    window.addEventListener('storage', handleStorageChange);
    
    // Custom event listener for same-tab language changes
    const handleLanguageChange = (event: CustomEvent) => {
      if (event.detail && (event.detail === 'en' || event.detail === 'tr')) {
        setSelectedLanguage(event.detail);
      }
    };

    window.addEventListener('languageChanged', handleLanguageChange as EventListener);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('languageChanged', handleLanguageChange as EventListener);
    };
  }, [mounted]);

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return <div className="min-h-screen bg-white" />;
  }

  const t = content[selectedLanguage];

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
            {t.hero.title1}
            <span className="block font-light text-green-600 mt-4">
              {t.hero.title2}
            </span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-light text-gray-600 leading-relaxed mb-8">
              {t.hero.subtitle1}
            </p>
            <p className="text-xl md:text-2xl font-light text-gray-500 leading-relaxed">
              {t.hero.subtitle2}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-12 leading-tight">
              {t.mission.title}
              <span className="block text-3xl md:text-4xl font-light text-green-600 mt-6">
                {t.mission.subtitle}
              </span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-6">{t.mission.section1.title}</h3>
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  {t.mission.section1.content}
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-6">{t.mission.section2.title}</h3>
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  {t.mission.section2.content}
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-12 border border-green-100">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Sun className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-normal text-gray-900 mb-2">{t.mission.features.solar.title}</h4>
                    <p className="text-gray-600 font-light">{t.mission.features.solar.description}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Battery className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-normal text-gray-900 mb-2">{t.mission.features.storage.title}</h4>
                    <p className="text-gray-600 font-light">{t.mission.features.storage.description}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Zap className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-normal text-gray-900 mb-2">{t.mission.features.fusion.title}</h4>
                    <p className="text-gray-600 font-light">{t.mission.features.fusion.description}</p>
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
              {t.support.title}
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t.support.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-6">{t.support.institutions.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                {t.support.institutions.description}
              </p>
              <div className="space-y-3 text-sm text-gray-500 font-light">
                {t.support.institutions.features.map((feature, index) => (
                  <p key={index}>• {feature}</p>
                ))}
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-6">{t.support.startups.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                {t.support.startups.description}
              </p>
              <div className="space-y-3 text-sm text-gray-500 font-light">
                {t.support.startups.features.map((feature, index) => (
                  <p key={index}>• {feature}</p>
                ))}
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <HandHeart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-6">{t.support.innovators.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                {t.support.innovators.description}
              </p>
              <div className="space-y-3 text-sm text-gray-500 font-light">
                {t.support.innovators.features.map((feature, index) => (
                  <p key={index}>• {feature}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Support Types */}
          <div className="bg-white rounded-3xl p-12 border border-gray-100">
            <h3 className="text-3xl font-light text-gray-900 mb-12 text-center">{t.support.strategic.title}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-5 h-5 text-orange-600" />
                </div>
                <h4 className="text-lg font-normal text-gray-900 mb-4">{t.support.strategic.emergency.title}</h4>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  {t.support.strategic.emergency.description}
                </p>
              </div>
              
              <div>
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="w-5 h-5 text-green-600" />
                </div>
                <h4 className="text-lg font-normal text-gray-900 mb-4">{t.support.strategic.climate.title}</h4>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  {t.support.strategic.climate.description}
                </p>
              </div>
              
              <div>
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Wind className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="text-lg font-normal text-gray-900 mb-4">{t.support.strategic.smartGrid.title}</h4>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  {t.support.strategic.smartGrid.description}
                </p>
              </div>
              
              <div>
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-5 h-5 text-purple-600" />
                </div>
                <h4 className="text-lg font-normal text-gray-900 mb-4">{t.support.strategic.partnerships.title}</h4>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  {t.support.strategic.partnerships.description}
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
              {t.roadmap.title}
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t.roadmap.subtitle}
            </p>
          </div>
          
          <div className="space-y-24">
            {/* Phase 1 */}
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-3xl p-8 text-center border border-orange-200">
                <Sun className="w-16 h-16 text-orange-500 mx-auto mb-6" />
                <h4 className="text-lg font-normal text-gray-900 mb-2">{t.roadmap.phases.phase1.period}</h4>
                <p className="text-gray-600 font-light">{t.roadmap.phases.phase1.label}</p>
                <div className="mt-4 text-xs text-orange-600 font-medium">
                  {t.roadmap.phases.phase1.badge}
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mr-6 shadow-lg">
                    <span className="text-lg font-light text-white">01</span>
                  </div>
                  <h3 className="text-3xl font-light text-gray-900">{t.roadmap.phases.phase1.title}</h3>
                </div>
                <p className="text-lg font-light text-gray-600 leading-relaxed mb-6">
                  {t.roadmap.phases.phase1.description}
                </p>
                <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-6">
                  <p className="text-orange-800 font-light italic">
                    "{t.roadmap.phases.phase1.quote}"
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 text-sm font-light text-gray-500">
                  <div>
                    {t.roadmap.phases.phase1.features.slice(0, 3).map((feature, index) => (
                      <p key={index} className="mb-2">• {feature}</p>
                    ))}
                  </div>
                  <div>
                    {t.roadmap.phases.phase1.features.slice(3).map((feature, index) => (
                      <p key={index} className="mb-2">• {feature}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-8 text-center lg:order-1 border border-green-200">
                <Battery className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h4 className="text-lg font-normal text-gray-900 mb-2">{t.roadmap.phases.phase2.period}</h4>
                <p className="text-gray-600 font-light">{t.roadmap.phases.phase2.label}</p>
                <div className="mt-4 text-xs text-green-600 font-medium">
                  {t.roadmap.phases.phase2.badge}
                </div>
              </div>
              <div className="lg:col-span-2 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-6 shadow-lg">
                    <span className="text-lg font-light text-white">02</span>
                  </div>
                  <h3 className="text-3xl font-light text-gray-900">{t.roadmap.phases.phase2.title}</h3>
                </div>
                <p className="text-lg font-light text-gray-600 leading-relaxed mb-6">
                  {t.roadmap.phases.phase2.description}
                </p>
                <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-6">
                  <p className="text-green-800 font-light italic">
                    "{t.roadmap.phases.phase2.quote}"
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 text-sm font-light text-gray-500">
                  <div>
                    {t.roadmap.phases.phase2.features.slice(0, 3).map((feature, index) => (
                      <p key={index} className="mb-2">• {feature}</p>
                    ))}
                  </div>
                  <div>
                    {t.roadmap.phases.phase2.features.slice(3).map((feature, index) => (
                      <p key={index} className="mb-2">• {feature}</p>
                    ))}
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
                  <h3 className="text-3xl font-light text-gray-900">{t.roadmap.phases.phase3.title}</h3>
                </div>
                <p className="text-lg font-light text-gray-600 leading-relaxed mb-6">
                  {t.roadmap.phases.phase3.description}
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
                  <p className="text-blue-800 font-light italic">
                    "{t.roadmap.phases.phase3.quote}"
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 text-sm font-light text-gray-500">
                  <div>
                    {t.roadmap.phases.phase3.features.slice(0, 3).map((feature, index) => (
                      <p key={index} className="mb-2">• {feature}</p>
                    ))}
                  </div>
                  <div>
                    {t.roadmap.phases.phase3.features.slice(3).map((feature, index) => (
                      <p key={index} className="mb-2">• {feature}</p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-100 rounded-3xl p-8 text-center border border-blue-200">
                <Zap className="w-16 h-16 text-blue-500 mx-auto mb-6" />
                <h4 className="text-lg font-normal text-gray-900 mb-2">{t.roadmap.phases.phase3.period}</h4>
                <p className="text-gray-600 font-light">{t.roadmap.phases.phase3.label}</p>
                <div className="mt-4 text-xs text-blue-600 font-medium">
                  {t.roadmap.phases.phase3.badge}
                </div>
              </div>
            </div>

            {/* Bold Statement */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-center text-white">
              <h3 className="text-3xl font-light mb-6">{t.roadmap.promise.title}</h3>
              <p className="text-xl font-light leading-relaxed mb-6 text-gray-200">
                {t.roadmap.promise.description}
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                {t.roadmap.promise.metrics.map((metric, index) => (
                  <div key={index}>
                    <div className="text-3xl font-light text-green-400 mb-2">{metric.value}</div>
                    <div className="text-sm text-gray-300">{metric.label}</div>
                  </div>
                ))}
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
              {t.technologies.title}
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t.technologies.subtitle}
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
                  <h3 className="text-3xl font-light text-gray-900">{t.technologies.fusion.title}</h3>
                </div>
                <p className="text-lg font-light text-gray-600 leading-relaxed mb-8">
                  {t.technologies.fusion.description}
                </p>
                
                <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-400 mb-8">
                  <h4 className="font-medium text-purple-800 mb-3">{t.technologies.fusion.breakthrough.title}</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {t.technologies.fusion.breakthrough.content}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mt-1">
                      <Target className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">{t.technologies.fusion.innovations.plasma.title}</h5>
                      <p className="text-sm text-gray-600">{t.technologies.fusion.innovations.plasma.description}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mt-1">
                      <Battery className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">{t.technologies.fusion.innovations.materials.title}</h5>
                      <p className="text-sm text-gray-600">{t.technologies.fusion.innovations.materials.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 border border-purple-200">
                <h4 className="text-xl font-medium text-gray-900 mb-6">{t.technologies.fusion.roadmap.title}</h4>
                <div className="space-y-6">
                  {t.technologies.fusion.roadmap.milestones.map((milestone, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border border-purple-200">
                      <span className="font-medium text-gray-900">{milestone.name}</span>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded text-sm font-medium">{milestone.year}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-purple-100 rounded-lg">
                  <h5 className="font-medium text-purple-800 mb-2">{t.technologies.fusion.roadmap.investment.title}</h5>
                  <p className="text-sm text-purple-700">
                    {t.technologies.fusion.roadmap.investment.description}
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
                  <h3 className="text-3xl font-light text-gray-900">{t.technologies.solar.title}</h3>
                </div>
                <p className="text-lg font-light text-gray-600 leading-relaxed mb-8">
                  {t.technologies.solar.description}
                </p>
                
                <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-400 mb-8">
                  <h4 className="font-medium text-orange-800 mb-3">{t.technologies.solar.breakthrough.title}</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {t.technologies.solar.breakthrough.content}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mt-1">
                      <Thermometer className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">{t.technologies.solar.innovations.thermal.title}</h5>
                      <p className="text-sm text-gray-600">{t.technologies.solar.innovations.thermal.description}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mt-1">
                      <Microscope className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">{t.technologies.solar.innovations.quantum.title}</h5>
                      <p className="text-sm text-gray-600">{t.technologies.solar.innovations.quantum.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 border border-orange-200 lg:order-1">
                <h4 className="text-xl font-medium text-gray-900 mb-6">{t.technologies.solar.matrix.title}</h4>
                <div className="space-y-4">
                  {t.technologies.solar.matrix.technologies.map((tech, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 border border-orange-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900">{tech.name}</span>
                        <span className="text-orange-700 font-bold">{tech.efficiency}</span>
                      </div>
                      <div className="w-full bg-orange-200 rounded-full h-2">
                        <div className="bg-orange-600 h-2 rounded-full" style={{width: tech.efficiency}}></div>
                      </div>
                      <div className="text-xs text-gray-600 mt-1">{tech.cost}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-orange-100 rounded-lg">
                  <h5 className="font-medium text-orange-800 mb-2">{t.technologies.solar.matrix.manufacturing.title}</h5>
                  <p className="text-sm text-orange-700">
                    {t.technologies.solar.matrix.manufacturing.description}
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
                  <h3 className="text-3xl font-light text-gray-900">{t.technologies.storage.title}</h3>
                </div>
                <p className="text-lg font-light text-gray-600 leading-relaxed mb-8">
                  {t.technologies.storage.description}
                </p>
                
                <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-400 mb-8">
                  <h4 className="font-medium text-green-800 mb-3">{t.technologies.storage.breakthrough.title}</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {t.technologies.storage.breakthrough.content}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mt-1">
                      <Zap className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">{t.technologies.storage.innovations.gridScale.title}</h5>
                      <p className="text-sm text-gray-600">{t.technologies.storage.innovations.gridScale.description}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mt-1">
                      <Globe className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">{t.technologies.storage.innovations.networks.title}</h5>
                      <p className="text-sm text-gray-600">{t.technologies.storage.innovations.networks.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200">
                <h4 className="text-xl font-medium text-gray-900 mb-6">{t.technologies.storage.comparison.title}</h4>
                <div className="space-y-6">
                  {t.technologies.storage.comparison.technologies.map((tech, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900">{tech.name}</span>
                        <div className="text-right">
                          <div className="text-green-700 font-bold">{tech.cost}</div>
                          <div className="text-xs text-gray-600">{tech.density}</div>
                        </div>
                      </div>
                      <div className="w-full bg-green-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{width: index === 0 ? '60%' : index === 1 ? '90%' : '70%'}}></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-green-100 rounded-lg">
                  <h5 className="font-medium text-green-800 mb-2">{t.technologies.storage.comparison.investment.title}</h5>
                  <p className="text-sm text-green-700">
                    {t.technologies.storage.comparison.investment.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Smart Grid & AI Integration */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-light text-white mb-6">{t.technologies.intelligentSystems.title}</h3>
              <p className="text-lg font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {t.technologies.intelligentSystems.description}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {t.technologies.intelligentSystems.features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    {index === 0 && <Lightbulb className="w-8 h-8 text-white" />}
                    {index === 1 && <Globe className="w-8 h-8 text-white" />}
                    {index === 2 && <Target className="w-8 h-8 text-white" />}
                  </div>
                  <h4 className="text-lg font-medium text-white mb-4">{feature.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="bg-white/10 rounded-2xl p-6 inline-block">
                <p className="text-white font-light italic text-lg">
                  "{t.technologies.intelligentSystems.quote}"
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
              {t.technologies.aiEnergy.title}
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t.technologies.aiEnergy.subtitle}
            </p>
          </div>

          {/* The AI Revolution */}
          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            <div>
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-light text-gray-900">{t.technologies.aiEnergy.future.title}</h3>
              </div>
              
              <div className="space-y-6">
                {t.technologies.aiEnergy.future.areas.map((area, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-blue-200">
                    <h4 className="text-lg font-medium text-gray-900 mb-3">{area.title}</h4>
                    <p className="text-gray-600 font-light leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 text-white">
              <h4 className="text-2xl font-light mb-8">{selectedLanguage === 'tr' ? 'AI\'nin Dönüştürücü Vaadi' : 'AI\'s Transformative Promise'}</h4>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-medium">{t.technologies.aiEnergy.future.promise.universal.title}</div>
                    <div className="text-blue-200 text-sm">{t.technologies.aiEnergy.future.promise.universal.description}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Microscope className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-medium">{t.technologies.aiEnergy.future.promise.discovery.title}</div>
                    <div className="text-blue-200 text-sm">{t.technologies.aiEnergy.future.promise.discovery.description}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-medium">{t.technologies.aiEnergy.future.promise.solutions.title}</div>
                    <div className="text-blue-200 text-sm">{t.technologies.aiEnergy.future.promise.solutions.description}</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white/10 rounded-lg">
                <p className="text-blue-100 text-sm italic">
                  "{t.technologies.aiEnergy.future.quote}"
                </p>
              </div>
            </div>
          </div>

          {/* The Energy Crisis */}
          <div className="mb-24">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-12 border border-red-200">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-light text-gray-900 mb-6">{t.technologies.aiEnergy.crisis.title}</h3>
                <p className="text-lg font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  {t.technologies.aiEnergy.crisis.description}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {t.technologies.aiEnergy.crisis.metrics.map((metric, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 text-center border border-red-200">
                    <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Thermometer className="w-8 h-8 text-red-600" />
                    </div>
                    <h4 className="text-lg font-medium text-gray-900 mb-3">{metric.title}</h4>
                    <div className="text-3xl font-light text-red-600 mb-2">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.description}</div>
                  </div>
                ))}
              </div>

              <div className="bg-red-100 rounded-xl p-6 border-l-4 border-red-400">
                <h4 className="font-medium text-red-800 mb-3">{t.technologies.aiEnergy.crisis.challenge.title}</h4>
                <p className="text-red-700 leading-relaxed">
                  {t.technologies.aiEnergy.crisis.challenge.description}
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
                <h3 className="text-3xl font-light text-gray-900">{t.technologies.aiEnergy.solution.title}</h3>
              </div>
              
              <p className="text-lg font-light text-gray-600 leading-relaxed mb-8">
                {t.technologies.aiEnergy.solution.description}
              </p>
              
              <div className="space-y-6">
                {t.technologies.aiEnergy.solution.strategies.map((strategy, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mt-1">
                      {index === 0 && <Sun className="w-4 h-4 text-green-600" />}
                      {index === 1 && <Zap className="w-4 h-4 text-green-600" />}
                      {index === 2 && <Battery className="w-4 h-4 text-green-600" />}
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">{strategy.title}</h5>
                      <p className="text-sm text-gray-600">
                        {strategy.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200">
              <h4 className="text-xl font-medium text-gray-900 mb-6">{t.technologies.aiEnergy.solution.investment.title}</h4>
              
              <div className="space-y-6">
                {t.technologies.aiEnergy.solution.investment.areas.map((area, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 border border-green-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{area.title}</span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm font-medium">{area.amount}</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-green-100 rounded-lg">
                <h5 className="font-medium text-green-800 mb-2">{t.technologies.aiEnergy.solution.investment.mission.title}</h5>
                <p className="text-sm text-green-700">
                  {t.technologies.aiEnergy.solution.investment.mission.description}
                </p>
              </div>
            </div>
          </div>

          {/* Bold Vision Statement */}
          <div className="mt-24 bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl font-light mb-6">{t.technologies.aiEnergy.convergence.title}</h3>
            <p className="text-xl font-light leading-relaxed mb-8 text-blue-100">
              {t.technologies.aiEnergy.convergence.description}
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {t.technologies.aiEnergy.convergence.metrics.map((metric, index) => (
                <div key={index}>
                  <div className="text-4xl font-light text-green-300 mb-2">{metric.value}</div>
                  <div className="text-sm text-blue-200">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing Vision */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extralight mb-12 leading-tight">
            {t.closing.title}
          </h2>
          <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed text-gray-300">
            {t.closing.sections.map((section: string, index: number) => (
              <p key={index}>
                {section}
              </p>
            ))}
            <p className="text-2xl md:text-3xl font-light text-white pt-8">
              {t.closing.highlight}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 
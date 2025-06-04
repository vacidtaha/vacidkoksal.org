"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Brain, Monitor, Users, Globe, Lightbulb, Target, Building, HandHeart, Cpu, Microscope, Zap } from 'lucide-react';

const content = {
  en: {
    hero: {
      title1: "Knowledge Beyond",
      title2: "Barriers",
      subtitle1: "Knowledge locked behind paywalls is knowledge stolen from humanity.",
      subtitle2: "We democratize access to education and unleash the infinite potential of every curious mind."
    },
    mission: {
      title: "Vacid & Köksal Foundation",
      subtitle: "Knowledge Liberation Mission",
      section1: {
        title: "From Gatekeepers to Open Access",
        content: "Traditional education systems create artificial scarcity around knowledge. We believe every breakthrough in human understanding belongs to all humanity. Through AI-powered learning platforms, open-source educational resources, and universal access technologies, we're dismantling the walls that separate curious minds from the information they need."
      },
      section2: {
        title: "Personalized Learning for Every Mind",
        content: "No two minds learn the same way. We support technologies that adapt to individual learning styles, cultural contexts, and personal goals. From AI tutors that understand your specific challenges to immersive simulations that make complex concepts tangible, we're personalizing education at global scale."
      },
      features: {
        ai: {
          title: "AI-Powered Learning",
          description: "Adaptive algorithms that personalize education to individual learning patterns"
        },
        network: {
          title: "Open Knowledge Networks",
          description: "Decentralized platforms for sharing scientific research and educational content"
        },
        equity: {
          title: "Digital Equity",
          description: "Universal internet access and device distribution for underserved communities"
        }
      }
    },
    support: {
      title: "Democratizing Human Knowledge",
      subtitle: "Behind every educational breakthrough is a educator, a technologist, an activist. Empowering them to tear down the barriers to knowledge is our sacred mission.",
      institutions: {
        title: "Educational Institutions",
        description: "We support universities, schools, and research institutions in adopting open-access policies and developing innovative learning technologies that break down traditional barriers to knowledge.",
        features: [
          "Open access research grants ($75M+ total support)",
          "AI tutoring system development",
          "Digital infrastructure modernization",
          "Global knowledge sharing platforms",
          "Teacher training & technology integration",
          "Multilingual content creation programs"
        ]
      },
      innovators: {
        title: "EdTech Innovators",
        description: "Throughout educational technology companies' journey from idea to global impact, we serve as catalyst, technical advisor, and strategic partner—not just investor.",
        features: [
          "Growth capital ($2M - $25M range)",
          "Open-source technology development",
          "Global market expansion support",
          "Accessibility & inclusion guidance",
          "Regulatory navigation assistance",
          "Impact measurement frameworks"
        ]
      },
      activists: {
        title: "Knowledge Activists",
        description: "We provide comprehensive support to individuals and communities fighting for educational equity and information freedom worldwide.",
        features: [
          "Educational equity grants ($25K - $1M)",
          "Digital divide bridging projects",
          "Community learning center establishment",
          "Open educational resource creation",
          "Technology access programs",
          "Policy advocacy & legal support"
        ]
      },
      initiatives: {
        title: "Strategic Knowledge Initiatives",
        emergency: {
          title: "Emergency Education Response",
          description: "Rapid deployment of educational technology and internet access during crises, ensuring learning never stops even in emergencies."
        },
        aiEducation: {
          title: "AI-Powered Education Revolution",
          subtitle: "AI Tutoring: Every Child's Personal Genius",
          description: "Imagine having Einstein as your physics tutor, Shakespeare for literature, and Feynman for mathematics—all available 24/7, infinitely patient, and perfectly adapted to your learning style. AI tutoring systems are making this reality.",
          breakthrough: {
            title: "Breakthrough: Socratic AI Teachers",
            description: "Our funded AI systems don't just provide answers—they ask the right questions. Using advanced natural language processing, they guide students through Socratic dialogues, achieving 85% improvement in critical thinking skills compared to traditional instruction methods."
          },
          features: {
            adaptive: {
              title: "Adaptive Learning Algorithms",
              description: "Real-time adjustment of difficulty, pace, and content based on neural network analysis of student engagement and comprehension patterns."
            },
            multilingual: {
              title: "Multilingual Knowledge Transfer", 
              description: "Instant translation and cultural adaptation of educational content, making world-class education accessible in any language."
            }
          },
          metrics: {
            title: "AI Education Impact Metrics",
            learning: "Learning Speed Improvement",
            learningValue: "3.2x faster",
            retention: "Knowledge Retention Rate",
            retentionValue: "92%",
            accessibility: "Global Accessibility",
            accessibilityValue: "180+ languages",
            cost: "Cost Reduction",
            costValue: "95% cheaper",
            deployment: {
              title: "Global Deployment",
              description: "Supporting 45+ AI education companies with $125M+ investment, targeting universal access to personalized tutoring by 2028."
            }
          }
        },
        digitalDivide: {
          title: "Digital Divide: The Knowledge Apartheid",
          description: "3.7 billion people lack internet access. In 2024, this isn't just inconvenience—it's intellectual exile. Every day without connection is another day cut off from humanity's collective knowledge, online learning, and digital opportunity.",
          crisis: {
            title: "Crisis: Educational Inequality Acceleration",
            description: "COVID-19 revealed the brutal reality: students with internet access advanced, while disconnected students fell 6-12 months behind. We're funding satellite networks, mesh networks, and offline-capable educational systems to ensure this never happens again."
          },
          features: {
            satellite: {
              title: "Satellite Education Networks",
              description: "Low-Earth orbit constellations delivering high-speed internet and educational content to the world's most remote regions."
            },
            offline: {
              title: "Offline Learning Systems",
              description: "Solar-powered educational devices with months of content, sync when connection available, work perfectly in isolation."
            }
          },
          progress: {
            title: "Digital Access Progress",
            internet: "Global Internet Access",
            internetValue: "63%",
            internetNote: "3.7B people still disconnected",
            devices: "Educational Device Access",
            devicesValue: "45%",
            devicesNote: "2.8B children lack learning devices",
            literacy: "Digital Literacy",
            literacyValue: "38%",
            literacyNote: "3.1B people lack basic digital skills",
            mission: {
              title: "Our Mission: Universal Access by 2030",
              description: "$300M committed to eliminating the digital divide through satellite networks, device distribution, and digital literacy programs worldwide."
            }
          }
        },
        quantum: {
          title: "Quantum Education: Preparing Tomorrow's Minds",
          description: "Quantum computing will revolutionize everything from drug discovery to cryptography. Yet most universities still don't teach quantum programming. We're building the educational infrastructure for the quantum age—before it arrives.",
          innovation: {
            title: "Innovation: Quantum Learning Simulators",
            description: "Our quantum education platforms let students program actual quantum computers through cloud interfaces, visualize quantum states in real-time, and run algorithms on 50+ qubit systems. Previously impossible concepts become intuitive."
          },
          features: {
            visual: {
              title: "Visual Quantum States",
              description: "Interactive 3D visualizations that make superposition, entanglement, and quantum interference tangible and understandable."
            },
            gamified: {
              title: "Gamified Quantum Learning",
              description: "Game-based environments where students solve puzzles using quantum algorithms, making abstract concepts engaging and memorable."
            }
          },
          pipeline: {
            title: "Quantum Education Pipeline",
            k12: "K-12 Quantum Concepts",
            k12Value: "2025",
            university: "University Quantum Programming", 
            universityValue: "2026",
            professional: "Professional Quantum Training",
            professionalValue: "2027"
          }
        },
        immersive: {
          title: "Immersive Learning: Step Inside Knowledge",
          description: "Why read about ancient Rome when you can walk through it? Why study molecular structures in textbooks when you can manipulate atoms with your hands? VR and AR are transforming abstract concepts into tangible experiences.",
          breakthrough: {
            title: "Breakthrough: Neural Interface Learning",
            description: "Early-stage brain-computer interfaces allow direct knowledge transfer for procedural skills. Students can download muscle memory for piano playing, language pronunciation, and complex motor skills in hours instead of years."
          },
          features: {
            historical: {
              title: "Historical Immersion",
              description: "Walk through ancient civilizations, witness historical events firsthand, and interact with recreated historical figures."
            },
            scientific: {
              title: "Scientific Visualization",
              description: "Manipulate molecular structures, explore quantum mechanics, and conduct virtual experiments in impossible environments."
            },
            language: {
              title: "Cultural Immersion",
              description: "Learn languages by living in virtual environments where only that language is spoken, accelerating fluency."
            }
          }
        },
        additionalPrograms: {
          digitalEquity: {
            title: "Digital Equity Programs",
            description: "Eliminating the digital divide through device distribution, internet infrastructure, and digital literacy training for all."
          },
          aiIntegration: {
            title: "AI Learning Integration",
            description: "Supporting the development and deployment of AI-powered educational tools that adapt to individual learning needs and preferences."
          },
          openCommons: {
            title: "Open Knowledge Commons",
            description: "Building and maintaining open-access platforms for scientific research, educational materials, and human knowledge preservation."
          }
        },
        democracy: {
          title: "The Sacred Democracy of Knowledge",
          subtitle: "Knowledge is humanity's greatest inheritance. Through AI tutoring, quantum simulations, and immersive learning environments, we're creating educational experiences that adapt to every mind and transcend every boundary."
        },
        immersiveMetrics: {
          title: "Immersive Learning Impact",
          retention: "Information Retention",
          retentionValue: "90%",
          retentionNote: "vs 10% traditional lecture",
          speed: "Learning Speed",
          speedValue: "4x faster",
          speedNote: "Measured across multiple subjects",
          engagement: "Student Engagement",
          engagementValue: "95%",
          engagementNote: "Active participation rates",
          investment: {
            title: "$180M VR/AR Eğitim Yatırımı",
            description: "2027'ye kadar deneyimsel eğitimi dünya çapında her sınıfta kullanılabilir hale getirmek için 30+ sürükleyici öğrenme şirketini destekliyoruz."
          }
        },
        promise: {
          title: "The Universal Right to Know",
          description: "When every child has an AI tutor, when every question has an instant answer, when the sum of human knowledge fits in every pocket—we achieve true educational equality. This is not just technology—this is justice.",
          adaptiveIntelligence: {
            title: "Adaptive Intelligence",
            description: "Every learning system adapts to individual minds, removing barriers and maximizing each person's intellectual potential."
          },
          universalAccess: {
            title: "Universal Access",
            description: "Geographic location, economic status, and physical limitations no longer determine educational opportunities."
          },
          openKnowledge: {
            title: "Open Knowledge",
            description: "All human knowledge becomes freely accessible, with no paywalls or artificial restrictions limiting curious minds."
          },
          quote: "When knowledge flows like water, when learning adapts like DNA, when curiosity knows no bounds—humanity achieves its true potential."
        }
      }
    },
    closing: {
      title: "Building the Learning Future Together",
      text1: "The age of educational inequality is ending. Every mind will have access to humanity's greatest teachers, every question will find its answer, every curiosity will be nurtured without limit.",
      text2: "As the Vacid & Köksal Foundation, we stand behind this vision, empowering educators, technologists, and dreamers who refuse to accept that knowledge should have gatekeepers.",
      text3: "Because knowledge beyond barriers",
      text4: "is not just possible, but inevitable."
    }
  },
  tr: {
    hero: {
      title1: "Engellerin Ötesinde",
      title2: "Bilgi",
      subtitle1: "Ücretli duvarların arkasında kilitli bilgi, insanlıktan çalınmış bilgidir.",
      subtitle2: "Eğitime erişimi demokratikleştiriyor ve meraklı her zihnin sonsuz potansiyelini ortaya çıkarıyoruz."
    },
    mission: {
      title: "Vacid & Köksal Vakfı",
      subtitle: "Bilgi Özgürleştirme Misyonu",
      section1: {
        title: "Kapıcılardan Açık Erişime",
        content: "Geleneksel eğitim sistemleri bilgi etrafında yapay kıtlık yaratır. İnsan anlayışındaki her atılımın tüm insanlığa ait olduğuna inanıyoruz. AI destekli öğrenme platformları, açık kaynak eğitim kaynakları ve evrensel erişim teknolojileri aracılığıyla, meraklı zihinleri ihtiyaç duydukları bilgiden ayıran duvarları yıkıyoruz."
      },
      section2: {
        title: "Her Zihin İçin Kişiselleştirilmiş Öğrenme",
        content: "İki zihin aynı şekilde öğrenmez. Bireysel öğrenme stillerine, kültürel bağlamlara ve kişisel hedeflere uyum sağlayan teknolojileri destekliyoruz. Özel zorluklarınızı anlayan AI öğretmenlerden karmaşık kavramları elle tutulur hale getiren sürükleyici simülasyonlara kadar, eğitimi küresel ölçekte kişiselleştiriyoruz."
      },
      features: {
        ai: {
          title: "AI Destekli Öğrenme",
          description: "Eğitimi bireysel öğrenme kalıplarına göre kişiselleştiren uyarlanabilir algoritmalar"
        },
        network: {
          title: "Açık Bilgi Ağları",
          description: "Bilimsel araştırma ve eğitim içeriği paylaşımı için merkezi olmayan platformlar"
        },
        equity: {
          title: "Dijital Eşitlik",
          description: "Hizmet alamayan topluluklar için evrensel internet erişimi ve cihaz dağıtımı"
        }
      }
    },
    support: {
      title: "İnsan Bilgisini Demokratikleştirmek",
      subtitle: "Her eğitim atılımının arkasında bir eğitimci, bir teknolog, bir aktivist vardır. Bilgiye erişim engellerini yıkmalarını güçlendirmek kutsal misyonumuzdur.",
      institutions: {
        title: "Eğitim Kurumları",
        description: "Üniversiteleri, okulları ve araştırma kurumlarını açık erişim politikalarını benimsemeleri ve geleneksel bilgi engellerini yıkan yenilikçi öğrenme teknolojileri geliştirmeleri konusunda destekliyoruz.",
        features: [
          "Açık erişim araştırma hibeleri ($75M+ toplam destek)",
          "AI öğretim sistemi geliştirme",
          "Dijital altyapı modernizasyonu",
          "Küresel bilgi paylaşım platformları",
          "Öğretmen eğitimi ve teknoloji entegrasyonu",
          "Çok dilli içerik oluşturma programları"
        ]
      },
      innovators: {
        title: "EğitimTek Yenilikçileri",
        description: "Eğitim teknolojisi şirketlerinin fikirden küresel etkiye yolculuğu boyunca, sadece yatırımcı değil, katalizör, teknik danışman ve stratejik ortak olarak hizmet veriyoruz.",
        features: [
          "Büyüme sermayesi ($2M - $25M aralığı)",
          "Açık kaynak teknoloji geliştirme",
          "Küresel pazar genişleme desteği",
          "Erişilebilirlik ve kapsayıcılık rehberliği",
          "Düzenleyici navigasyon yardımı",
          "Etki ölçüm çerçeveleri"
        ]
      },
      activists: {
        title: "Bilgi Aktivistleri",
        description: "Dünya çapında eğitim eşitliği ve bilgi özgürlüğü için mücadele eden bireylere ve topluluklara kapsamlı destek sağlıyoruz.",
        features: [
          "Eğitim eşitliği hibeleri ($25K - $1M)",
          "Dijital uçurum köprüleme projeleri",
          "Toplum öğrenme merkezi kurulumu",
          "Açık eğitim kaynağı oluşturma",
          "Teknoloji erişim programları",
          "Politika savunuculuğu ve yasal destek"
        ]
      },
      initiatives: {
        title: "Stratejik Bilgi Girişimleri",
        emergency: {
          title: "Acil Durum Eğitim Müdahalesi",
          description: "Krizler sırasında eğitim teknolojisi ve internet erişiminin hızlı dağıtımı, acil durumlarda bile öğrenmenin asla durmamasını sağlıyor."
        },
        aiEducation: {
          title: "AI Destekli Eğitim Devrimi",
          subtitle: "AI Öğretmeni: Her Çocuğun Kişisel Dahisi",
          description: "Einstein'ı fizik öğretmeniniz, Shakespeare'i edebiyat, Feynman'ı matematik öğretmeniniz olarak hayal edin—hepsi 7/24 mevcut, sonsuz sabırlı ve öğrenme stilinize mükemmel uyarlanmış. AI öğretim sistemleri bunu gerçek kılıyor.",
          breakthrough: {
            title: "Atılım: Sokratik AI Öğretmenler",
            description: "Desteklediğimiz AI sistemler sadece cevap vermez—doğru soruları sorar. Gelişmiş doğal dil işleme kullanarak öğrencileri Sokratik diyaloglar boyunca yönlendirip, geleneksel öğretim yöntemlerine kıyasla eleştirel düşünme becerilerinde %85 gelişim sağlar."
          },
          features: {
            adaptive: {
              title: "Uyarlanabilir Öğrenme Algoritmaları",
              description: "Öğrenci katılımı ve kavrama kalıplarının sinir ağı analizine dayalı olarak zorluk, hız ve içeriğin gerçek zamanlı ayarlanması."
            },
            multilingual: {
              title: "Çok Dilli Bilgi Aktarımı",
              description: "Eğitim içeriğinin anında çevirisi ve kültürel uyarlaması, dünya çapında kaliteli eğitimi herhangi bir dilde erişilebilir kılıyor."
            }
          },
          metrics: {
            title: "AI Eğitim Etki Metrikleri",
            learning: "Öğrenme Hızı Gelişimi",
            learningValue: "3.2x daha hızlı",
            retention: "Bilgi Saklama Oranı",
            retentionValue: "%92",
            accessibility: "Küresel Erişilebilirlik",
            accessibilityValue: "180+ dil",
            cost: "Maliyet Azalması",
            costValue: "%95 daha ucuz",
            deployment: {
              title: "Küresel Dağıtım",
              description: "2028'e kadar kişiselleştirilmiş öğretmenliğe evrensel erişimi hedefleyerek 45+ AI eğitim şirketine $125M+ yatırım desteği."
            }
          }
        },
        digitalDivide: {
          title: "Dijital Uçurum: Bilgi Apartheid'ı",
          description: "3.7 milyar insan internet erişiminden yoksun. 2024'te bu sadece rahatsızlık değil—entelektüel sürgün. Bağlantısız geçen her gün, insanlığın kolektif bilgisinden, çevrimiçi öğrenmeden ve dijital fırsatlardan kopuk geçen bir gün daha.",
          crisis: {
            title: "Kriz: Eğitim Eşitsizliği Hızlanması",
            description: "COVID-19 acı gerçeği ortaya çıkardı: internet erişimi olan öğrenciler ilerledi, bağlantısız öğrenciler 6-12 ay geride kaldı. Bunun bir daha asla yaşanmaması için uydu ağları, mesh ağları ve çevrimdışı eğitim sistemlerini finanse ediyoruz."
          },
          features: {
            satellite: {
              title: "Uydu Eğitim Ağları",
              description: "Dünyanın en uzak bölgelerine yüksek hızlı internet ve eğitim içeriği sunan düşük Dünya yörüngesi takımyıldızları."
            },
            offline: {
              title: "Çevrimdışı Öğrenme Sistemleri",
              description: "Aylarca içerik barındıran, bağlantı olduğunda senkronize olan ve izolasyonda mükemmel çalışan güneş enerjili eğitim cihazları."
            }
          },
          progress: {
            title: "Dijital Erişim İlerlemesi",
            internet: "Küresel İnternet Erişimi",
            internetValue: "%63",
            internetNote: "3.7M insan hala bağlantısız",
            devices: "Eğitim Cihazı Erişimi",
            devicesValue: "%45",
            devicesNote: "2.8M çocuk öğrenme cihazından yoksun",
            literacy: "Dijital Okuryazarlık",
            literacyValue: "%38",
            literacyNote: "3.1M insanda temel dijital beceri yok",
            mission: {
              title: "Misyonumuz: 2030'a Kadar Evrensel Erişim",
              description: "Uydu ağları, cihaz dağıtımı ve dünya çapında dijital okuryazarlık programları ile dijital uçurumu ortadan kaldırmak için taahhüt edilen $300M."
            }
          }
        },
        quantum: {
          title: "Kuantum Eğitimi: Geleceğin Zihinlerini Hazırlamak",
          description: "Kuantum bilişim, ilaç keşfinden kriptografiye kadar her şeyi devrimleştirecek. Yine de çoğu üniversite hala kuantum programlama öğretmiyor. Kuantum çağı gelmeden önce eğitim altyapısını inşa ediyoruz.",
          innovation: {
            title: "İnovasyon: Kuantum Öğrenme Simülatörleri",
            description: "Kuantum eğitim platformlarımız öğrencilerin bulut arayüzleri ile gerçek kuantum bilgisayarları programlamasına, kuantum durumlarını gerçek zamanlı görselleştirmesine ve 50+ qubit sistemlerde algoritmalar çalıştırmasına izin veriyor. Daha önce imkansız kavramlar sezgisel hale geliyor."
          },
          features: {
            visual: {
              title: "Görsel Kuantum Durumları",
              description: "Süperpozisyon, dolaşıklık ve kuantum girişimi elle tutulur ve anlaşılır kılan interaktif 3D görselleştirmeler."
            },
            gamified: {
              title: "Oyunlaştırılmış Kuantum Öğrenme",
              description: "Öğrencilerin kuantum algoritmaları kullanarak bulmacalar çözdüğü, soyut kavramları ilgi çekici ve akılda kalıcı kılan oyun tabanlı ortamlar."
            }
          },
          pipeline: {
            title: "Kuantum Eğitim Hattı",
            k12: "K-12 Kuantum Kavramları",
            k12Value: "2025",
            university: "Üniversite Kuantum Programlama",
            universityValue: "2026", 
            professional: "Profesyonel Kuantum Eğitimi",
            professionalValue: "2027"
          }
        },
        immersive: {
          title: "Sürükleyici Öğrenme: Bilginin İçine Girin",
          description: "Antik Roma'yı okumak yerine neden onun içinde yürümeyesiniz? Moleküler yapıları ders kitaplarında okumak yerine neden atomları elinizle manipüle etmeyesiniz? VR ve AR soyut kavramları elle tutulur deneyimlere dönüştürüyor.",
          breakthrough: {
            title: "Atılım: Sinirsel Arayüz Öğrenme",
            description: "Erken aşama beyin-bilgisayar arayüzleri prosedürel beceriler için doğrudan bilgi aktarımına izin veriyor. Öğrenciler piyano çalma, dil telaffuzu ve karmaşık motor becerileri için kas hafızasını yıllar yerine saatlerde indirebiliyorlar."
          },
          features: {
            historical: {
              title: "Tarihi Dalma",
              description: "Antik medeniyetlerde yürüyün, tarihi olayları ilk elden izleyin ve yeniden yaratılmış tarihi figürlerle etkileşim kurun."
            },
            scientific: {
              title: "Bilimsel Görselleştirme",
              description: "Moleküler yapıları manipüle edin, kuantum mekaniğini keşfedin ve imkansız ortamlarda sanal deneyler yapın."
            },
            language: {
              title: "Kültürel Dalma",
              description: "Sadece o dilin konuşulduğu sanal ortamlarda yaşayarak dilleri öğrenin, akıcılığı hızlandırın."
            }
          }
        },
        additionalPrograms: {
          digitalEquity: {
            title: "Dijital Eşitlik Programları",
            description: "Cihaz dağıtımı, internet altyapısı ve herkes için dijital okuryazarlık eğitimi yoluyla dijital uçurumu ortadan kaldırmak."
          },
          aiIntegration: {
            title: "AI Öğrenme Entegrasyonu",
            description: "Bireysel öğrenme ihtiyaçlarına ve tercihlerine uyum sağlayan AI destekli eğitim araçlarının geliştirilmesi ve dağıtımını desteklemek."
          },
          openCommons: {
            title: "Açık Bilgi Ortaklığı",
            description: "Bilimsel araştırma, eğitim materyalleri ve insan bilgisi korunması için açık erişim platformlarının inşası ve bakımı."
          }
        },
        democracy: {
          title: "Bilginin Kutsal Demokrasisi",
          subtitle: "Bilgi, insanlığın en büyük mirasıdır. AI öğretmenlik, kuantum simülasyonları ve sürükleyici öğrenme ortamları aracılığıyla her zihne uyum sağlayan ve her sınırı aşan eğitim deneyimleri yaratıyoruz."
        },
        immersiveMetrics: {
          title: "Sürükleyici Öğrenme Etkisi",
          retention: "Bilgi Saklama",
          retentionValue: "%90",
          retentionNote: "geleneksel derslere karşı %10",
          speed: "Öğrenme Hızı",
          speedValue: "4x daha hızlı",
          speedNote: "Birden fazla konuda ölçülmüş",
          engagement: "Öğrenci Katılımı",
          engagementValue: "%95",
          engagementNote: "Aktif katılım oranları",
          investment: {
            title: "$180M VR/AR Eğitim Yatırımı",
            description: "2027'ye kadar deneyimsel eğitimi dünya çapında her sınıfta kullanılabilir hale getirmek için 30+ sürükleyici öğrenme şirketini destekliyoruz."
          }
        },
        promise: {
          title: "Evrensel Bilme Hakkı",
          description: "Her çocuğun bir AI öğretmeni olduğunda, her sorunun anında cevabı olduğunda, insan bilgisinin toplamı her cebe sığdığında—gerçek eğitim eşitliğini başarırız. Bu sadece teknoloji değil—bu adalettir.",
          adaptiveIntelligence: {
            title: "Uyarlanabilir Zeka",
            description: "Her öğrenme sistemi bireysel zihinlere uyum sağlar, engelleri kaldırır ve her kişinin entelektüel potansiyelini maksimize eder."
          },
          universalAccess: {
            title: "Evrensel Erişim",
            description: "Coğrafi konum, ekonomik durum ve fiziksel sınırlamalar artık eğitim fırsatlarını belirlemiyor."
          },
          openKnowledge: {
            title: "Açık Bilgi",
            description: "Tüm insan bilgisi serbestçe erişilebilir hale gelir, meraklı zihinleri sınırlayan ücretli duvarlar veya yapay kısıtlamalar olmadan."
          },
          quote: "Bilgi su gibi aktığında, öğrenme DNA gibi uyum sağladığında, merak sınır tanımadığında—insanlık gerçek potansiyeline ulaşır."
        }
      }
    },
    closing: {
      title: "Birlikte Öğrenme Geleceğini İnşa Etmek",
      text1: "Eğitim eşitsizliği çağı sona eriyor. Her zihin insanlığın en büyük öğretmenlerine erişim sağlayacak, her soru cevabını bulacak, her merak sınırsızca beslenecek.",
      text2: "Vacid & Köksal Vakfı olarak, bilginin kapıcıları olması gerektiğini kabul etmeyi reddeden eğitimcileri, teknologları ve hayalcileri güçlendiren bu vizyonun arkasında duruyoruz.",
      text3: "Çünkü engellerin ötesindeki bilgi",
      text4: "sadece mümkün değil, kaçınılmazdır."
    }
  }
};

export default function KnowledgePage() {
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
            src="https://videos.pexels.com/video-files/8134781/8134781-hd_1920_1080_30fps.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/20 to-white/40"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="mb-6 sm:mb-12">
            <BookOpen className="w-8 h-8 sm:w-12 sm:h-12 mx-auto text-indigo-400 mb-4 sm:mb-8" />
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight mb-6 sm:mb-12 leading-tight text-gray-900">
            {t.hero.title1}
            <span className="block font-light text-indigo-600 mt-2 sm:mt-4">
              {t.hero.title2}
            </span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-2xl md:text-3xl font-light text-gray-600 leading-relaxed mb-4 sm:mb-8">
              {t.hero.subtitle1}
            </p>
            <p className="text-base sm:text-xl md:text-2xl font-light text-gray-500 leading-relaxed">
              {t.hero.subtitle2}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extralight text-gray-900 mb-6 sm:mb-12 leading-tight">
              {t.mission.title}
              <span className="block text-xl sm:text-3xl md:text-4xl font-light text-indigo-600 mt-3 sm:mt-6">
                {t.mission.subtitle}
              </span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-20 items-start">
            <div className="space-y-6 sm:space-y-10">
              <div>
                <h3 className="text-lg sm:text-2xl font-light text-gray-900 mb-3 sm:mb-6">{t.mission.section1.title}</h3>
                <p className="text-sm sm:text-lg font-light text-gray-600 leading-relaxed">
                  {t.mission.section1.content}
                </p>
              </div>
              
              <div>
                <h3 className="text-lg sm:text-2xl font-light text-gray-900 mb-3 sm:mb-6">{t.mission.section2.title}</h3>
                <p className="text-sm sm:text-lg font-light text-gray-600 leading-relaxed">
                  {t.mission.section2.content}
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl sm:rounded-3xl p-6 sm:p-12 border border-indigo-100">
              <div className="space-y-4 sm:space-y-8">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-base sm:text-lg font-normal text-gray-900 mb-1 sm:mb-2">{t.mission.features.ai.title}</h4>
                    <p className="text-sm sm:text-base text-gray-600 font-light">{t.mission.features.ai.description}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-base sm:text-lg font-normal text-gray-900 mb-1 sm:mb-2">{t.mission.features.network.title}</h4>
                    <p className="text-sm sm:text-base text-gray-600 font-light">{t.mission.features.network.description}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Monitor className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-base sm:text-lg font-normal text-gray-900 mb-1 sm:mb-2">{t.mission.features.equity.title}</h4>
                    <p className="text-sm sm:text-base text-gray-600 font-light">{t.mission.features.equity.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Framework */}
      <section className="py-16 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-24">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extralight text-gray-900 mb-4 sm:mb-8">
              {t.support.title}
            </h2>
            <p className="text-base sm:text-xl font-light text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t.support.subtitle}
            </p>
          </div>

          {/* Mobil için horizontal scroll, desktop için grid */}
          <div className="md:grid md:grid-cols-3 md:gap-12 mb-12 sm:mb-20">
            {/* Mobile horizontal scroll container */}
            <div className="md:hidden flex gap-6 overflow-x-auto pb-4 px-1 -mx-1 snap-x snap-mandatory">
              <div className="flex-none w-[280px] snap-start text-center bg-white rounded-2xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-light text-gray-900 mb-3">{t.support.institutions.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-4 text-sm">
                  {t.support.institutions.description}
                </p>
                <div className="space-y-2 text-xs text-gray-500 font-light">
                  {t.support.institutions.features.map((feature, index) => (
                    <p key={index}>• {feature}</p>
                  ))}
                </div>
              </div>

              <div className="flex-none w-[280px] snap-start text-center bg-white rounded-2xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-light text-gray-900 mb-3">{t.support.innovators.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-4 text-sm">
                  {t.support.innovators.description}
                </p>
                <div className="space-y-2 text-xs text-gray-500 font-light">
                  {t.support.innovators.features.map((feature, index) => (
                    <p key={index}>• {feature}</p>
                  ))}
                </div>
              </div>

              <div className="flex-none w-[280px] snap-start text-center bg-white rounded-2xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <HandHeart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-light text-gray-900 mb-3">{t.support.activists.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-4 text-sm">
                  {t.support.activists.description}
                </p>
                <div className="space-y-2 text-xs text-gray-500 font-light">
                  {t.support.activists.features.map((feature, index) => (
                    <p key={index}>• {feature}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop grid layout */}
            <div className="hidden md:block text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
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

            <div className="hidden md:block text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Lightbulb className="w-8 h-8 text-white" />
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

            <div className="hidden md:block text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <HandHeart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-6">{t.support.activists.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                {t.support.activists.description}
              </p>
              <div className="space-y-3 text-sm text-gray-500 font-light">
                {t.support.activists.features.map((feature, index) => (
                  <p key={index}>• {feature}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Support Types */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-12 border border-gray-100">
            <h3 className="text-xl sm:text-3xl font-light text-gray-900 mb-6 sm:mb-12 text-center">
              {t.support.initiatives.title}
            </h3>
            
            {/* Mobile horizontal scroll for initiatives */}
            <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8">
              <div className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
                <div className="flex-none w-64 snap-start">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                    <Target className="w-4 h-4 text-orange-600" />
                  </div>
                  <h4 className="text-base font-normal text-gray-900 mb-3">
                    {t.support.initiatives.emergency.title}
                  </h4>
                  <p className="text-gray-600 font-light text-xs leading-relaxed">
                    {t.support.initiatives.emergency.description}
                  </p>
                </div>
                
                <div className="flex-none w-64 snap-start">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                    <Globe className="w-4 h-4 text-green-600" />
                  </div>
                  <h4 className="text-base font-normal text-gray-900 mb-3">
                    {t.support.initiatives.additionalPrograms.digitalEquity.title}
                  </h4>
                  <p className="text-gray-600 font-light text-xs leading-relaxed">
                    {t.support.initiatives.additionalPrograms.digitalEquity.description}
                  </p>
                </div>
                
                <div className="flex-none w-64 snap-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                    <Brain className="w-4 h-4 text-blue-600" />
                  </div>
                  <h4 className="text-base font-normal text-gray-900 mb-3">
                    {t.support.initiatives.additionalPrograms.aiIntegration.title}
                  </h4>
                  <p className="text-gray-600 font-light text-xs leading-relaxed">
                    {t.support.initiatives.additionalPrograms.aiIntegration.description}
                  </p>
                </div>
                
                <div className="flex-none w-64 snap-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                    <BookOpen className="w-4 h-4 text-purple-600" />
                  </div>
                  <h4 className="text-base font-normal text-gray-900 mb-3">
                    {t.support.initiatives.additionalPrograms.openCommons.title}
                  </h4>
                  <p className="text-gray-600 font-light text-xs leading-relaxed">
                    {t.support.initiatives.additionalPrograms.openCommons.description}
                  </p>
                </div>
              </div>

              {/* Desktop grid */}
              <div className="hidden md:block">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-5 h-5 text-orange-600" />
                </div>
                <h4 className="text-lg font-normal text-gray-900 mb-4">{t.support.initiatives.emergency.title}</h4>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  {t.support.initiatives.emergency.description}
                </p>
              </div>
              
              <div className="hidden md:block">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-5 h-5 text-green-600" />
                </div>
                <h4 className="text-lg font-normal text-gray-900 mb-4">{t.support.initiatives.additionalPrograms.digitalEquity.title}</h4>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  {t.support.initiatives.additionalPrograms.digitalEquity.description}
                </p>
              </div>
              
              <div className="hidden md:block">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="text-lg font-normal text-gray-900 mb-4">{t.support.initiatives.additionalPrograms.aiIntegration.title}</h4>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  {t.support.initiatives.additionalPrograms.aiIntegration.description}
                </p>
              </div>
              
              <div className="hidden md:block">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                </div>
                <h4 className="text-lg font-normal text-gray-900 mb-4">{t.support.initiatives.additionalPrograms.openCommons.title}</h4>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  {t.support.initiatives.additionalPrograms.openCommons.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Educational Technologies - Deep Dive */}
      <section className="py-16 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extralight text-gray-900 mb-4 sm:mb-8">
              {t.support.initiatives.democracy.title}
            </h2>
            <p className="text-base sm:text-xl font-light text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t.support.initiatives.democracy.subtitle}
            </p>
          </div>

          {/* Technology Cards - Mobile Horizontal Scroll */}
          <div className="lg:space-y-24">
            {/* Mobile horizontal scroll container */}
            <div className="lg:hidden flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory">
              {/* AI Education Card */}
              <div className="flex-none w-[320px] snap-start bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-light text-gray-900">{t.support.initiatives.aiEducation.subtitle}</h3>
                </div>
                <p className="text-sm font-light text-gray-600 leading-relaxed mb-4">
                  {t.support.initiatives.aiEducation.description.slice(0, 150)}...
                </p>
                
                <div className="bg-blue-100 rounded-lg p-4 border-l-4 border-blue-400 mb-4">
                  <h4 className="font-medium text-blue-800 mb-2 text-sm">{t.support.initiatives.aiEducation.breakthrough.title}</h4>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {t.support.initiatives.aiEducation.breakthrough.description.slice(0, 120)}...
                  </p>
                </div>

                <div className="bg-white rounded-lg p-3 border border-blue-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900 text-sm">{t.support.initiatives.aiEducation.metrics.learning}</span>
                    <span className="text-blue-700 font-bold text-sm">{t.support.initiatives.aiEducation.metrics.learningValue}</span>
                  </div>
                  <div className="w-full bg-blue-200 rounded-full h-1.5">
                    <div className="bg-blue-600 h-1.5 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>

              {/* Digital Divide Card */}
              <div className="flex-none w-[320px] snap-start bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 border border-red-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-light text-gray-900">{t.support.initiatives.digitalDivide.title}</h3>
                </div>
                <p className="text-sm font-light text-gray-600 leading-relaxed mb-4">
                  {t.support.initiatives.digitalDivide.description.slice(0, 150)}...
                </p>
                
                <div className="bg-red-100 rounded-lg p-4 border-l-4 border-red-400 mb-4">
                  <h4 className="font-medium text-red-800 mb-2 text-sm">{t.support.initiatives.digitalDivide.crisis.title}</h4>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {t.support.initiatives.digitalDivide.crisis.description.slice(0, 120)}...
                  </p>
                </div>

                <div className="bg-white rounded-lg p-3 border border-red-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900 text-sm">{t.support.initiatives.digitalDivide.progress.internet}</span>
                    <span className="text-red-700 font-bold text-sm">{t.support.initiatives.digitalDivide.progress.internetValue}</span>
                  </div>
                  <div className="w-full bg-red-200 rounded-full h-1.5">
                    <div className="bg-red-500 h-1.5 rounded-full" style={{width: '63%'}}></div>
                  </div>
                </div>
              </div>

              {/* Quantum Education Card */}
              <div className="flex-none w-[320px] snap-start bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 border border-purple-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-light text-gray-900">{t.support.initiatives.quantum.title}</h3>
                </div>
                <p className="text-sm font-light text-gray-600 leading-relaxed mb-4">
                  {t.support.initiatives.quantum.description.slice(0, 150)}...
                </p>
                
                <div className="bg-purple-100 rounded-lg p-4 border-l-4 border-purple-400 mb-4">
                  <h4 className="font-medium text-purple-800 mb-2 text-sm">{t.support.initiatives.quantum.innovation.title}</h4>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {t.support.initiatives.quantum.innovation.description.slice(0, 120)}...
                  </p>
                </div>

                <div className="bg-white rounded-lg p-3 border border-purple-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900 text-sm">{t.support.initiatives.quantum.pipeline.university}</span>
                    <span className="text-purple-700 font-bold text-sm">{t.support.initiatives.quantum.pipeline.universityValue}</span>
                  </div>
                  <div className="w-full bg-purple-200 rounded-full h-1.5">
                    <div className="bg-purple-600 h-1.5 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>

              {/* Immersive Learning Card */}
              <div className="flex-none w-[320px] snap-start bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-light text-gray-900">{t.support.initiatives.immersive.title}</h3>
                </div>
                <p className="text-sm font-light text-gray-600 leading-relaxed mb-4">
                  {t.support.initiatives.immersive.description.slice(0, 150)}...
                </p>
                
                <div className="bg-green-100 rounded-lg p-4 border-l-4 border-green-400 mb-4">
                  <h4 className="font-medium text-green-800 mb-2 text-sm">{t.support.initiatives.immersive.breakthrough.title}</h4>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {t.support.initiatives.immersive.breakthrough.description.slice(0, 120)}...
                  </p>
                </div>

                <div className="bg-white rounded-lg p-3 border border-green-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900 text-sm">{t.support.initiatives.immersiveMetrics.retention}</span>
                    <span className="text-green-700 font-bold text-sm">{t.support.initiatives.immersiveMetrics.retentionValue}</span>
                  </div>
                  <div className="w-full bg-green-200 rounded-full h-1.5">
                    <div className="bg-green-600 h-1.5 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop version - keep original large layouts but optimize */}
            <div className="hidden lg:block">
              {/* AI-Powered Education Revolution */}
              <div className="mb-16 sm:mb-24">
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-start">
                  <div>
                    <div className="flex items-center mb-6 sm:mb-8">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center mr-4 sm:mr-6 shadow-lg">
                        <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-light text-gray-900">{t.support.initiatives.aiEducation.subtitle}</h3>
                    </div>
                    <p className="text-base sm:text-lg font-light text-gray-600 leading-relaxed mb-6 sm:mb-8">
                      {t.support.initiatives.aiEducation.description}
                    </p>
                    
                    <div className="bg-blue-50 rounded-xl p-4 sm:p-6 border-l-4 border-blue-400 mb-6 sm:mb-8">
                      <h4 className="font-medium text-blue-800 mb-2 sm:mb-3">{t.support.initiatives.aiEducation.breakthrough.title}</h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {t.support.initiatives.aiEducation.breakthrough.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mt-1">
                          <Cpu className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900 mb-1">{t.support.initiatives.aiEducation.features.adaptive.title}</h5>
                          <p className="text-sm text-gray-600">{t.support.initiatives.aiEducation.features.adaptive.description}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mt-1">
                          <Globe className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900 mb-1">{t.support.initiatives.aiEducation.features.multilingual.title}</h5>
                          <p className="text-sm text-gray-600">{t.support.initiatives.aiEducation.features.multilingual.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-blue-200">
                    <h4 className="text-lg sm:text-xl font-medium text-gray-900 mb-4 sm:mb-6">{t.support.initiatives.aiEducation.metrics.title}</h4>
                    <div className="space-y-4 sm:space-y-6">
                      <div className="flex items-center justify-between p-3 sm:p-4 bg-white rounded-lg border border-blue-200">
                        <span className="font-medium text-gray-900 text-sm sm:text-base">{t.support.initiatives.aiEducation.metrics.learning}</span>
                        <span className="bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-medium">{t.support.initiatives.aiEducation.metrics.learningValue}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 sm:p-4 bg-white rounded-lg border border-blue-200">
                        <span className="font-medium text-gray-900 text-sm sm:text-base">{t.support.initiatives.aiEducation.metrics.retention}</span>
                        <span className="bg-green-100 text-green-700 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-medium">{t.support.initiatives.aiEducation.metrics.retentionValue}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 sm:p-4 bg-white rounded-lg border border-blue-200">
                        <span className="font-medium text-gray-900 text-sm sm:text-base">{t.support.initiatives.aiEducation.metrics.accessibility}</span>
                        <span className="bg-purple-100 text-purple-700 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-medium">{t.support.initiatives.aiEducation.metrics.accessibilityValue}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 sm:p-4 bg-white rounded-lg border border-blue-200">
                        <span className="font-medium text-gray-900 text-sm sm:text-base">{t.support.initiatives.aiEducation.metrics.cost}</span>
                        <span className="bg-orange-100 text-orange-700 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-medium">{t.support.initiatives.aiEducation.metrics.costValue}</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-blue-100 rounded-lg">
                      <h5 className="font-medium text-blue-800 mb-2">{t.support.initiatives.aiEducation.metrics.deployment.title}</h5>
                      <p className="text-xs sm:text-sm text-blue-700">
                        {t.support.initiatives.aiEducation.metrics.deployment.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Promise Section */}
          <div className="mt-16 sm:mt-24 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center text-white">
            <h3 className="text-xl sm:text-3xl font-light mb-4 sm:mb-6">{t.support.initiatives.promise.title}</h3>
            <p className="text-sm sm:text-lg font-light text-gray-200 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed">
              {t.support.initiatives.promise.description}
            </p>
            
            {/* Mobile horizontal scroll for promise items */}
            <div className="md:grid md:grid-cols-3 md:gap-8">
              <div className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
                <div className="flex-none w-64 snap-start text-center p-4 bg-white/10 rounded-xl">
                  <h4 className="text-base font-medium text-white mb-2">{t.support.initiatives.promise.adaptiveIntelligence.title}</h4>
                  <p className="text-xs text-gray-300">{t.support.initiatives.promise.adaptiveIntelligence.description}</p>
                </div>
                <div className="flex-none w-64 snap-start text-center p-4 bg-white/10 rounded-xl">
                  <h4 className="text-base font-medium text-white mb-2">{t.support.initiatives.promise.universalAccess.title}</h4>
                  <p className="text-xs text-gray-300">{t.support.initiatives.promise.universalAccess.description}</p>
                </div>
                <div className="flex-none w-64 snap-start text-center p-4 bg-white/10 rounded-xl">
                  <h4 className="text-base font-medium text-white mb-2">{t.support.initiatives.promise.openKnowledge.title}</h4>
                  <p className="text-xs text-gray-300">{t.support.initiatives.promise.openKnowledge.description}</p>
                </div>
              </div>

              {/* Desktop grid */}
              <div className="hidden md:block text-center">
                <h4 className="text-xl font-medium text-white mb-4">{t.support.initiatives.promise.adaptiveIntelligence.title}</h4>
                <p className="text-gray-300">{t.support.initiatives.promise.adaptiveIntelligence.description}</p>
              </div>
              <div className="hidden md:block text-center">
                <h4 className="text-xl font-medium text-white mb-4">{t.support.initiatives.promise.universalAccess.title}</h4>
                <p className="text-gray-300">{t.support.initiatives.promise.universalAccess.description}</p>
              </div>
              <div className="hidden md:block text-center">
                <h4 className="text-xl font-medium text-white mb-4">{t.support.initiatives.promise.openKnowledge.title}</h4>
                <p className="text-gray-300">{t.support.initiatives.promise.openKnowledge.description}</p>
              </div>
            </div>

            <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-white/10 rounded-xl border border-white/20">
              <p className="text-sm sm:text-lg font-light italic text-indigo-300">
                {t.support.initiatives.promise.quote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Vision */}
      <section className="py-16 sm:py-32 bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extralight mb-6 sm:mb-12 leading-tight">
            {t.closing.title}
          </h2>
          <div className="space-y-4 sm:space-y-8 text-base sm:text-lg md:text-xl font-light leading-relaxed text-gray-300">
            <p>
              {t.closing.text1}
            </p>
            <p>
              {t.closing.text2}
            </p>
            <p className="text-lg sm:text-2xl md:text-3xl font-light text-white pt-4 sm:pt-8">
              {t.closing.text3}
              <span className="block mt-2 sm:mt-4 text-indigo-300">
                {t.closing.text4}
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 
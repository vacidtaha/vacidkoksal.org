"use client";

import React, { useState, useEffect } from 'react';
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

const content = {
  en: {
    hero: {
      title1: "Food Beyond",
      title2: "Scarcity",
      subtitle1: "Hunger in an age of abundance is unacceptable.",
      subtitle2: "We support technologies that transform agriculture, optimize distribution, and ensure every person has access to nutritious food."
    },
    cruelReality: {
      title: "The Cruel Reality",
      subtitle: "These numbers are not just statistics. Behind each one is a life story, a family, a future. And all of them have solutions within our reach."
    },
    charts: {
      globalHunger: {
        title: "Global Hunger Trends (2024)",
        subSaharan: "Sub-Saharan",
        southAsia: "S. Asia",
        latinAmerica: "L. America",
        developed: "Developed",
        missionDescription: "Our Foundation's Mission: To address this inequality through technology by investing in precision agriculture systems and AI-powered distribution solutions."
      },
      foodFlow: {
        title: "Global Food Flow Analysis",
        globalProduction: "Global Production",
        consumerReady: "Consumer Ready",
        wasted: "Wasted",
        couldFeedHungry: "Could Feed Hungry",
        strategyDescription: "Our Support Strategy: By investing in blockchain-based supply chain tracking and AI-powered demand forecasting solutions, we aim to reduce this waste by 40%."
      },
      economicLoss: {
        title: "Economic Loss Breakdown",
        healthcareCosts: "Healthcare costs (35%)",
        lostProductivity: "Lost productivity (20%)",
        educationImpact: "Education impact (15%)",
        socialPrograms: "Social programs (15%)",
        infrastructure: "Infrastructure (15%)",
        technologyDescription: "Technology for Humanity: Every $1 in food security investment provides $16 in economic returns by supporting projects that systematically reduce these losses."
      }
    },
    waterStats: {
      cleanWater: {
        title: "Without access to clean water",
        subtitle: "25% of world population",
        target: "Foundation Target: Clean water access for 500M people by 2030"
      },
      waterDeaths: {
        title: "Daily water-related deaths",
        subtitle: "Every 30 seconds 1 child",
        goal: "Goal: Zero preventable water-related deaths through technology"
      },
      waterScarcity: {
        title: "Affected by water scarcity",
        subtitle: "Experiencing severe water stress",
        target: "Target: Advanced prediction systems for 100 water-stressed regions"
      },
      impact: {
        childrenImpact: {
          title: "Impact on Children",
          hungerDeathFrequency: "Every 10 seconds 1 child",
          hungerDeathType: "Hunger-related death",
          malnutritionDescription: "Malnutrition permanently affects children's physical and mental development.",
          foundationSolutions: "Our Foundation's AI-Powered Solutions",
          foundationDescription: "We support early intervention systems by investing in malnutrition prediction algorithms. We enable real-time monitoring of children's growth parameters by supporting IoT sensor projects."
        },
        criticalRegions: {
          title: "Critical Regions Analysis",
          chad: "Chad",
          madagascar: "Madagascar", 
          yemen: "Yemen",
          pilotProgram: "Pilot program launched",
          smartFarming: "Smart farming deployment",
          emergencyNutrition: "Emergency nutrition tech"
        },
        foundationApproach: {
          title: "Our Technology for Humanity Approach",
          description: "With our Technology for Humanity vision, we invest in AI-powered agriculture systems, support companies developing smart distribution networks, and finance sustainable food production technologies. Because hunger is not a technical problem, but a problem of investment and support.",
          metrics: {
            precisionFarming: {
              value: "90%",
              title: "Target precision farming yield",
              subtitle: "Goal for 25 countries"
            },
            waterReduction: {
              value: "70%", 
              title: "Water usage reduction target",
              subtitle: "Smart irrigation goals"
            },
            postHarvestLoss: {
              value: "50%",
              title: "Post-harvest loss reduction", 
              subtitle: "AI tracking systems"
            },
            supplyChain: {
              value: "85%",
              title: "Supply chain efficiency goal",
              subtitle: "Blockchain solutions"
            }
          }
        },
        foundationGoals: {
          title: "Our Foundation's Target Goals (2030)",
          childrenToReach: {
            title: "Children to Reach",
            value: "15M",
            description: "Target: Comprehensive nutrition support"
          },
          communitiesToSupport: {
            title: "Communities to Support",
            value: "2,000", 
            description: "Goal: Sustainable food systems"
          },
          technologiesToDeploy: {
            title: "Technologies to Deploy",
            value: "500",
            description: "AI + IoT integrated solutions"
          }
        }
      },
      waterScarcityDeepDive: {
        title: "Our Foundation's Water Technology Investments",
        subtitle: "We invest in cutting-edge technology solutions to increase the accessibility of H₂O molecules. With our Technology for Humanity vision, we support projects that will systematically solve water scarcity.",
        technologiesWeSupport: {
          title: "Technologies We Support",
          atmosphericWater: {
            title: "Atmospheric Water Generation",
            description: "Investing in MOF systems achieving 15% humidity → 150L/kW efficiency",
            status: "Pilot support in 12 villages"
          },
          grapheneMembranes: {
            title: "Graphene Membranes",
            description: "Financing R&D providing 99.9% salt removal, 50% energy savings",
            status: "2025 deployment support"
          },
          aiAquifer: {
            title: "AI Aquifer Mapping",
            description: "Supporting algorithms providing 87% accuracy with deep learning",
            status: "200+ water source discovery support"
          }
        },
        scientificResearch: {
          title: "Scientific Research Foundation",
          gibbsFreeEnergy: {
            title: "Gibbs Free Energy (ΔG)",
            description: "Supporting energy optimization research using -RT ln(Kw) formula in desalination processes"
          },
          osmoticPressure: {
            title: "Osmotic Pressure (π)",
            description: "Investing in projects developing efficient 2.7 atm systems using Van't Hoff equation"
          },
          quantumSolutions: {
            title: "Quantum Solutions",
            description: "Financing TiO₂ photocatalysis and aquaporin biomimetic design research"
          }
        },
        investmentStatus: {
          title: "Investment Status",
          solarDesalination: {
            name: "Solar Desalination",
            status: "Active Support"
          },
          smartWells: {
            name: "Smart Wells",
            status: "Scaling"
          },
          waterAtms: {
            name: "Water ATMs",
            status: "Deployed"
          },
          goal2030: "2030 Goal: Supporting projects to increase water access by 300% in 50 countries"
        }
      }
    },
    investmentFocus: {
      title: "Strategic Investment Focus Areas",
      subtitle: "By investing in disruptive technologies, we support systematic food security solutions. We provide support to global supply chain optimization, precision agriculture, and alternative protein platforms.",
      agTech: {
        title: "AgTech & Precision Farming",
        marketOpportunity: {
          title: "Market Opportunity",
          description: "Global precision agriculture market projected to reach $43.4B by 2030. AI-driven crop monitoring reduces resource waste by 35% while increasing yield efficiency by 87% through real-time optimization."
        },
        investmentPriorities: {
          title: "Investment Priorities",
          items: [
            "IoT sensor networks with edge computing ($2-15M tickets)",
            "Autonomous farming equipment and drone systems",
            "Predictive analytics platforms for crop diseases",
            "Vertical farming infrastructure with controlled environments",
            "Soil microbiome optimization technologies"
          ]
        },
        successMetrics: {
          title: "Success Metrics",
          yieldIncrease: "15-40%",
          yieldIncreaseLabel: "Yield Increase",
          resourceEfficiency: "25-60%",
          resourceEfficiencyLabel: "Resource Efficiency",
          roiTimeline: "12-18 months",
          roiTimelineLabel: "ROI Timeline",
          expectedReturns: "250-400%",
          expectedReturnsLabel: "Expected Returns"
        }
      },
      alternativeProtein: {
        title: "Alternative Protein Systems",
        marketOpportunity: {
          title: "Market Opportunity",
          description: "Alternative protein market valued at $290B by 2035. Cellular agriculture offers 95% land use reduction, 78% lower emissions, while maintaining identical nutritional profiles to conventional proteins."
        },
        investmentPriorities: {
          title: "Investment Priorities",
          items: [
            "Cultivated meat bioreactor scaling ($10-50M tickets)",
            "Precision fermentation platforms for proteins",
            "Plant-based ingredient optimization technologies",
            "Hybrid protein production systems",
            "Novel food processing and texture engineering"
          ]
        },
        impactProjections: {
          title: "Impact Projections",
          landUse: "95%",
          landUseLabel: "Land Use Reduction",
          emissions: "78%",
          emissionsLabel: "GHG Emissions Cut",
          water: "96%",
          waterLabel: "Water Savings",
          cost: "50%",
          costLabel: "Cost Reduction by 2030"
        }
      },
      supplyChain: {
        title: "Supply Chain Intelligence",
        marketOpportunity: {
          title: "Market Opportunity",
          description: "Global food loss reaches $1.3T annually. AI-powered supply chain optimization reduces post-harvest losses by 40%, while blockchain traceability eliminates 90% of food fraud incidents."
        },
        investmentPriorities: {
          title: "Investment Priorities",
          items: [
            "Blockchain-based traceability platforms ($1-10M tickets)",
            "AI-powered demand forecasting systems",
            "Cold chain optimization and monitoring IoT",
            "Last-mile delivery automation for rural areas",
            "Food quality prediction and shelf-life extension"
          ]
        },
        technologyRoi: {
          title: "Technology ROI",
          roiMatrix: "Technology ROI Matrix",
          verticalFarming: "Vertical Farming",
          smartIrrigation: "Smart Irrigation",
          blockchainSupply: "Blockchain Supply",
          alternativeProteins: "Alternative Proteins",
          foundationDescription: "Our Foundation's Technology Portfolio: Based on this ROI data, we direct and support our strategic investments in these technologies."
        }
      },
      waterFood: {
        title: "Water-Food Nexus Solutions",
        marketOpportunity: {
          title: "Market Opportunity",
          description: "Agriculture consumes 70% of global freshwater. Smart irrigation systems reduce consumption by 65% while increasing crop yields by 45%. $4.8B market growing at 14.5% CAGR."
        },
        investmentPriorities: {
          title: "Investment Priorities",
          items: [
            "Smart irrigation and fertigation systems ($500K-5M)",
            "Atmospheric water generation for agriculture",
            "Desalination technologies for crop irrigation",
            "Aquaponics and hydroponic scaling platforms",
            "Water quality monitoring and purification"
          ]
        },
        efficiencyGains: {
          title: "Efficiency Gains",
          waterSavings: "65%",
          waterSavingsLabel: "Water Savings",
          yieldIncrease: "45%",
          yieldIncreaseLabel: "Yield Increase",
          energyReduction: "30%",
          energyReductionLabel: "Energy Reduction",
          paybackPeriod: "18-24 months",
          paybackPeriodLabel: "Payback Period",
          foundationNote: "Foundation Innovation: These efficiency improvements are concrete results of our water-food nexus approach."
        }
      },
      investmentPhilosophy: {
        title: "Investment Philosophy",
        subtitle: "Technology-driven solutions to address the $3.5T annual economic loss from malnutrition. Our portfolio focuses on scalable innovations with measurable impact on global food security.",
        portfolioAllocation: {
          agTech: "AgTech ve Hassas Tarım",
          alternativeProteins: "Alternatif Proteinler",
          supplyChainTech: "Tedarik Zinciri Teknolojisi",
          waterFoodNexus: "Su-Gıda Nexus"
        },
        metrics: {
          expectedIrr: "25-45%",
          expectedIrrLabel: "Expected IRR (5-year)",
          peopleImpacted: "735M",
          peopleImpactedLabel: "People impacted by 2030",
          totalMarket: "$12B",
          totalMarketLabel: "Total addressable market"
        },
        quote: "Every dollar invested in nutrition returns $16 to the economy. We're not just funding companies; we're engineering a sustainable future.",
        ctaButton: "Apply for Food Security Funding"
      }
    }
  },
  tr: {
    hero: {
      title1: "Kıtlığın Ötesinde",
      title2: "Gıda",
      subtitle1: "Bolluk çağında açlık kabul edilemez.",
      subtitle2: "Tarımı dönüştüren, dağıtımı optimize eden ve her insanın besleyici gıdaya erişimini sağlayan teknolojileri destekliyoruz."
    },
    cruelReality: {
      title: "Acımasız Gerçek",
      subtitle: "Bu sayılar sadece istatistik değil. Her birinin arkasında bir yaşam hikayesi, bir aile, bir gelecek var. Ve hepsinin çözümleri elimizin altında."
    },
    charts: {
      globalHunger: {
        title: "Küresel Açlık Eğilimleri (2024)",
        subSaharan: "Sahra Altı Afrika",
        southAsia: "G. Asya",
        latinAmerica: "L. Amerika",
        developed: "Gelişmiş",
        missionDescription: "Vakfımızın Misyonu: Bu eşitsizliği teknoloji yoluyla ele almak için hassas tarım sistemlerine ve yapay zeka destekli dağıtım çözümlerine yatırım yapıyoruz."
      },
      foodFlow: {
        title: "Küresel Gıda Akış Analizi",
        globalProduction: "Küresel Üretim",
        consumerReady: "Tüketiciye Hazır",
        wasted: "İsraf Edilen",
        couldFeedHungry: "Açları Besleyebilir",
        strategyDescription: "Destek Stratejimiz: Blockchain tabanlı tedarik zinciri takibi ve yapay zeka destekli talep tahmin çözümlerine yatırım yaparak bu israfı %40 azaltmayı hedefliyoruz."
      },
      economicLoss: {
        title: "Ekonomik Kayıp Dağılımı",
        healthcareCosts: "Sağlık maliyetleri (%35)",
        lostProductivity: "Kayıp verimlilik (%20)",
        educationImpact: "Eğitim etkisi (%15)",
        socialPrograms: "Sosyal programlar (%15)",
        infrastructure: "Altyapı (%15)",
        technologyDescription: "İnsanlık İçin Teknoloji: Gıda güvenliği yatırımında her 1$ bu kayıpları sistematik olarak azaltan projeleri destekleyerek 16$ ekonomik getiri sağlar."
      },
    },
    waterStats: {
      cleanWater: {
        title: "Temiz suya erişimi olmayan",
        subtitle: "Dünya nüfusunun %25'i",
        target: "Vakıf Hedefi: 2030'a kadar 500M insana temiz su erişimi"
      },
      waterDeaths: {
        title: "Günlük su kaynaklı ölümler",
        subtitle: "Her 30 saniyede 1 çocuk",
        goal: "Hedef: Teknoloji ile önlenebilir su kaynaklı ölümleri sıfıra indirmek"
      },
      waterScarcity: {
        title: "Su kıtlığından etkilenen",
        subtitle: "Şiddetli su stresi yaşayan",
        target: "Hedef: 100 su stresi olan bölge için gelişmiş tahmin sistemleri"
      },
      impact: {
        childrenImpact: {
          title: "Çocuklara Etki",
          hungerDeathFrequency: "Her 10 saniyede 1 çocuk",
          hungerDeathType: "Açlık kaynaklı ölüm",
          malnutritionDescription: "Yetersiz beslenme çocukların fiziksel ve zihinsel gelişimini kalıcı olarak etkiler.",
          foundationSolutions: "Vakfımızın AI-Destekli Çözümleri",
          foundationDescription: "Yetersiz beslenme tahmin algoritmalarına yatırım yaparak erken müdahale sistemlerini destekliyoruz. IoT sensör projelerini destekleyerek çocukların büyüme parametrelerinin gerçek zamanlı izlenmesini sağlıyoruz."
        },
        criticalRegions: {
          title: "Kritik Bölgeler Analizi",
          chad: "Çad",
          madagascar: "Madagaskar", 
          yemen: "Yemen",
          pilotProgram: "Pilot program başlatıldı",
          smartFarming: "Akıllı tarım dağıtımı",
          emergencyNutrition: "Acil beslenme teknolojisi"
        },
        foundationApproach: {
          title: "İnsanlık İçin Teknoloji Yaklaşımımız",
          description: "İnsanlık İçin Teknoloji vizyonumuzla, AI destekli tarım sistemlerine yatırım yapar, akıllı dağıtım ağları geliştiren şirketleri destekler ve sürdürülebilir gıda üretim teknolojilerini finanse ederiz. Çünkü açlık teknik bir problem değil, yatırım ve destek problemidir.",
          metrics: {
            precisionFarming: {
              value: "90%",
              title: "Hedef hassas tarım verimi",
              subtitle: "25 ülke için hedef"
            },
            waterReduction: {
              value: "70%", 
              title: "Su kullanımı azaltma hedefi",
              subtitle: "Akıllı sulama hedefleri"
            },
            postHarvestLoss: {
              value: "50%",
              title: "Hasat sonrası kayıp azaltımı", 
              subtitle: "AI takip sistemleri"
            },
            supplyChain: {
              value: "85%",
              title: "Tedarik zinciri verimlilik hedefi",
              subtitle: "Blockchain çözümleri"
            }
          }
        },
        foundationGoals: {
          title: "Vakfımızın Hedef Amaçları (2030)",
          childrenToReach: {
            title: "Ulaşılacak Çocuklar",
            value: "15M",
            description: "Hedef: Kapsamlı beslenme desteği"
          },
          communitiesToSupport: {
            title: "Desteklenecek Topluluklar",
            value: "2,000", 
            description: "Hedef: Sürdürülebilir gıda sistemleri"
          },
          technologiesToDeploy: {
            title: "Dağıtılacak Teknolojiler",
            value: "500",
            description: "AI + IoT entegre çözümleri"
          }
        }
      },
      waterScarcityDeepDive: {
        title: "Vakıfımızın Su Teknolojisi Yatırımları",
        subtitle: "Su kıtlığının çözümü için gelişmiş teknolojiler yatırımı yapıyoruz. Teknoloji İnsanlık Vizyonumuzla, su kıtlığını sistematik olarak çözmek için projeler destekliyoruz.",
        technologiesWeSupport: {
          title: "Desteklediğimiz Teknolojiler",
          atmosphericWater: {
            title: "Atmosferik Su Üretimi",
            description: "MOF sistemlerine yatırım yaparak %15 neminin 150L/kW verimliliğine ulaşmasını hedefliyoruz",
            status: "12 köyde pilot destek"
          },
          grapheneMembranes: {
            title: "Grafen Membranlar",
            description: "R&D finansmanı sağlayarak %99.9 tuzun kaldırılmasını ve %50 enerji tasarrufu sağlamayı hedefliyoruz",
            status: "2025'te dağıtım desteği"
          },
          aiAquifer: {
            title: "Yapay Zeka Su Akış Haritası",
            description: "Derin öğrenme algoritmalarını destekleyerek %87 doğrulukla su kaynakları keşfedilmesini hedefliyoruz",
            status: "200+ su kaynağı keşif desteği"
          }
        },
        scientificResearch: {
          title: "Bilimsel Araştırma Vakfı",
          gibbsFreeEnergy: {
            title: "Gibbs Serbest Enerji (ΔG)",
            description: "Desalinizasyon süreçlerinde -RT ln(Kw) formülünü kullanarak enerji optimizasyonu araştırmalarını destekliyoruz"
          },
          osmoticPressure: {
            title: "Osmotik Basınç (π)",
            description: "Van't Hoff denklemi kullanarak 2.7 atm sistemler geliştiren projelerin finansmanını sağlayarak yatırım yapıyoruz"
          },
          quantumSolutions: {
            title: "Kuantum Çözümleri",
            description: "TiO₂ fotokataliz ve aquaporin biomimetik tasarım araştırmalarını finanse ederek yatırım yapıyoruz"
          }
        },
        investmentStatus: {
          title: "Yatırım Durumu",
          solarDesalination: {
            name: "Güneşli Desalinizasyon",
            status: "Aktif Destek"
          },
          smartWells: {
            name: "Akıllı Kuyular",
            status: "Ölçekleme"
          },
          waterAtms: {
            name: "Su ATMs",
            status: "Dağıtıldı"
          },
          goal2030: "2030 Hedef: 50 ülke için su erişiminin %300 artırılması"
        }
      }
    },
    investmentFocus: {
      title: "Stratejik Yatırım Odak Alanları",
      subtitle: "Yıkıcı teknolojilere yatırım yaparak, sistematik gıda güvenliği çözümlerini destekliyoruz. Küresel tedarik zinciri optimizasyonu, hassas tarım ve alternatif protein platformlarına destek sağlıyoruz.",
      agTech: {
        title: "AgTech ve Hassas Tarım",
        marketOpportunity: {
          title: "Pazar Fırsatı",
          description: "Küresel hassas tarım pazarının 2030'a kadar 43.4 milyar dolara ulaşması öngörülüyor. AI destekli ürün izleme, kaynak israfını %35 azaltırken gerçek zamanlı optimizasyon yoluyla verim verimliliğini %87 artırıyor."
        },
        investmentPriorities: {
          title: "Yatırım Öncelikleri",
          items: [
            "Edge computing ile IoT sensör ağları (2-15M$ biletleri)",
            "Otonom tarım ekipmanları ve drone sistemleri",
            "Ürün hastalıkları için tahmin analitik platformları",
            "Kontrollü ortamlarla dikey tarım altyapısı",
            "Toprak mikrobiom optimizasyon teknolojileri"
          ]
        },
        successMetrics: {
          title: "Başarı Metrikleri",
          yieldIncrease: "%15-40",
          yieldIncreaseLabel: "Verim Artışı",
          resourceEfficiency: "%25-60",
          resourceEfficiencyLabel: "Kaynak Verimliliği",
          roiTimeline: "12-18 ay",
          roiTimelineLabel: "ROI Zaman Çizelgesi",
          expectedReturns: "%250-400",
          expectedReturnsLabel: "Beklenen Getiriler"
        }
      },
      alternativeProtein: {
        title: "Alternatif Protein Sistemleri",
        marketOpportunity: {
          title: "Pazar Fırsatı",
          description: "Alternatif protein pazarı 2035'e kadar 290 milyar dolar değerinde. Hücresel tarım %95 arazi kullanımı azalması, %78 daha düşük emisyon sunar, geleneksel proteinlerle aynı beslenme profillerini korurken."
        },
        investmentPriorities: {
          title: "Yatırım Öncelikleri",
          items: [
            "Kültürlenmiş et biyoreaktör ölçeklendirmesi (10-50M$ biletleri)",
            "Proteinler için hassas fermentasyon platformları",
            "Bitki bazlı bileşen optimizasyon teknolojileri",
            "Hibrit protein üretim sistemleri",
            "Yeni gıda işleme ve doku mühendisliği"
          ]
        },
        impactProjections: {
          title: "Etki Projeksiyonları",
          landUse: "%95",
          landUseLabel: "Arazi Kullanımı Azalması",
          emissions: "%78",
          emissionsLabel: "Sera Gazı Emisyon Kesintisi",
          water: "%96",
          waterLabel: "Su Tasarrufu",
          cost: "%50",
          costLabel: "2030'a Kadar Maliyet Azalması"
        }
      },
      supplyChain: {
        title: "Tedarik Zinciri Zekası",
        marketOpportunity: {
          title: "Pazar Fırsatı",
          description: "Küresel gıda kaybı yıllık 1.3 trilyon dolara ulaşıyor. AI destekli tedarik zinciri optimizasyonu hasat sonrası kayıpları %40 azaltırken, blockchain izlenebilirlik gıda dolandırıcılığı vakalarının %90'ını ortadan kaldırıyor."
        },
        investmentPriorities: {
          title: "Yatırım Öncelikleri",
          items: [
            "Blockchain tabanlı izlenebilirlik platformları (1-10M$ biletleri)",
            "AI destekli talep tahmin sistemleri",
            "Soğuk zincir optimizasyonu ve izleme IoT",
            "Kırsal alanlar için son mil teslimat otomasyonu",
            "Gıda kalitesi tahmini ve raf ömrü uzatma"
          ]
        },
        technologyRoi: {
          title: "Teknoloji ROI",
          roiMatrix: "Teknoloji ROI Matrisi",
          verticalFarming: "Dikey Tarım",
          smartIrrigation: "Akıllı Sulama",
          blockchainSupply: "Blockchain Tedarik",
          alternativeProteins: "Alternatif Proteinler",
          foundationDescription: "Vakfımızın Teknoloji Portföyü: Bu ROI verilerine dayalı olarak stratejik yatırımlarımızı bu teknolojilere yönlendiriyoruz ve destekliyoruz."
        }
      },
      waterFood: {
        title: "Su-Gıda Nexus Çözümleri",
        marketOpportunity: {
          title: "Pazar Fırsatı",
          description: "Tarım küresel tatlı su tüketiminin %70'ini kullanıyor. Akıllı sulama sistemleri tüketimi %65 azaltırken ürün verimini %45 artırıyor. %14.5 CAGR ile büyüyen 4.8 milyar dolarlık pazar."
        },
        investmentPriorities: {
          title: "Yatırım Öncelikleri",
          items: [
            "Akıllı sulama ve gübreleme sistemleri (500K-5M$)",
            "Tarım için atmosferik su üretimi",
            "Mahsul sulaması için tuzdan arındırma teknolojileri",
            "Aquaponik ve hidroponik ölçeklendirme platformları",
            "Su kalitesi izleme ve arıtma"
          ]
        },
        efficiencyGains: {
          title: "Verimlilik Kazançları",
          waterSavings: "%65",
          waterSavingsLabel: "Su Tasarrufu",
          yieldIncrease: "%45",
          yieldIncreaseLabel: "Verim Artışı",
          energyReduction: "%30",
          energyReductionLabel: "Enerji Azalması",
          paybackPeriod: "18-24 ay",
          paybackPeriodLabel: "Geri Ödeme Süresi",
          foundationNote: "Vakıf İnovasyonu: Bu verimlilik artışları su-gıda nexus yaklaşımımızın somut sonuçlarıdır."
        }
      },
      investmentPhilosophy: {
        title: "Yatırım Felsefesi",
        subtitle: "Yetersiz beslenmeden kaynaklanan yıllık 3.5 trilyon dolarlık ekonomik kayba yönelik teknoloji odaklı çözümler. Portföyümüz küresel gıda güvenliğinde ölçülebilir etkiye sahip ölçeklenebilir inovasyonlara odaklanıyor.",
        portfolioAllocation: {
          agTech: "AgTech ve Hassas Tarım",
          alternativeProteins: "Alternatif Proteinler",
          supplyChainTech: "Tedarik Zinciri Teknolojisi",
          waterFoodNexus: "Su-Gıda Nexus"
        },
        metrics: {
          expectedIrr: "%25-45",
          expectedIrrLabel: "Beklenen IRR (5-yıl)",
          peopleImpacted: "735M",
          peopleImpactedLabel: "2030'a kadar etkilenen insanlar",
          totalMarket: "12 milyar$",
          totalMarketLabel: "Toplam adreslenebilir pazar"
        },
        quote: "Beslenmeye yatırılan her dolar ekonomiye 16 dolar getiri sağlar. Sadece şirketleri finanse etmiyoruz; sürdürülebilir bir gelecek mühendislik ediyoruz.",
        ctaButton: "Gıda Güvenliği Finansmanı İçin Başvuru Yapın"
      }
    }
  }
};

export default function FoodPage() {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language-preference') || 'en';
    setLanguage(savedLanguage);

    const handleStorageChange = () => {
      const newLanguage = localStorage.getItem('language-preference') || 'en';
      setLanguage(newLanguage);
    };

    window.addEventListener('storage', handleStorageChange);
    
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail);
    };

    window.addEventListener('languageChanged', handleLanguageChange as EventListener);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('languageChanged', handleLanguageChange as EventListener);
    };
  }, []);

  const t = content[language as keyof typeof content];

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
            {t.hero.title1}
            <span className="block font-light text-orange-600 mt-4">
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

      {/* The Cruel Reality - Emotional Section */}
      <section className="py-24 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Heart className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              {t.cruelReality.title}
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {t.cruelReality.subtitle}
            </p>
          </div>

          {/* Professional Data Visualization */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Global Hunger Impact Chart */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 mr-3 text-red-500" />
                {t.charts.globalHunger.title}
              </h3>
              <div className="space-y-6">
                <div className="relative">
                  <div className="flex items-end justify-between h-32 mb-4 bg-gray-50 rounded-lg p-4">
                    <div className="bg-gradient-to-t from-red-500 to-red-300 rounded-lg w-12 flex items-end justify-center text-white text-xs font-bold pb-2 shadow-lg" style={{height: '85%'}}>
                      <span className="transform -rotate-90 whitespace-nowrap">{t.charts.globalHunger.subSaharan}</span>
                    </div>
                    <div className="bg-gradient-to-t from-orange-500 to-orange-300 rounded-lg w-12 flex items-end justify-center text-white text-xs font-bold pb-2 shadow-lg" style={{height: '45%'}}>
                      <span className="transform -rotate-90 whitespace-nowrap">{t.charts.globalHunger.southAsia}</span>
                    </div>
                    <div className="bg-gradient-to-t from-amber-500 to-amber-300 rounded-lg w-12 flex items-end justify-center text-white text-xs font-bold pb-2 shadow-lg" style={{height: '25%'}}>
                      <span className="transform -rotate-90 whitespace-nowrap">{t.charts.globalHunger.latinAmerica}</span>
                    </div>
                    <div className="bg-gradient-to-t from-emerald-500 to-emerald-300 rounded-lg w-12 flex items-end justify-center text-white text-xs font-bold pb-2 shadow-lg" style={{height: '15%'}}>
                      <span className="transform -rotate-90 whitespace-nowrap">{t.charts.globalHunger.developed}</span>
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
                    <strong className="text-red-600">{t.charts.globalHunger.missionDescription}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Food Waste vs Production Chart */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <BarChart className="w-6 h-6 mr-3 text-green-500" />
                {t.charts.foodFlow.title}
              </h3>
              <div className="space-y-6">
                <div className="relative bg-gray-50 rounded-lg p-4">
                  {/* Sankey-style flow visualization with better contrast */}
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-24 bg-gradient-to-r from-green-600 to-green-500 rounded-full h-6 flex items-center justify-center text-white text-xs font-bold shadow-md">
                        {t.charts.foodFlow.globalProduction}
                      </div>
                      <div className="text-sm text-gray-800 ml-3 font-medium">{t.charts.foodFlow.globalProduction}</div>
                    </div>
                    <div className="flex items-center ml-6">
                      <div className="w-20 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full h-5 flex items-center justify-center text-white text-xs font-bold shadow-md">
                        {t.charts.foodFlow.consumerReady}
                      </div>
                      <div className="text-sm text-gray-800 ml-3 font-medium">{t.charts.foodFlow.consumerReady}</div>
                    </div>
                    <div className="flex items-center ml-6">
                      <div className="w-16 bg-gradient-to-r from-red-600 to-red-500 rounded-full h-4 flex items-center justify-center text-white text-xs font-bold shadow-md">
                        {t.charts.foodFlow.wasted}
                      </div>
                      <div className="text-sm text-gray-800 ml-3 font-medium">{t.charts.foodFlow.wasted}</div>
                    </div>
                    <div className="flex items-center ml-12">
                      <div className="w-8 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full h-3 flex items-center justify-center text-white text-xs font-bold shadow-md">
                        {t.charts.foodFlow.couldFeedHungry}
                      </div>
                      <div className="text-sm text-gray-800 ml-3 font-medium">{t.charts.foodFlow.couldFeedHungry}</div>
                    </div>
                  </div>
                </div>
                <div className="bg-orange-50 rounded-xl p-4 border-l-4 border-orange-400">
                  <div className="text-sm text-gray-700">
                    <strong className="text-orange-600">{t.charts.foodFlow.strategyDescription}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Economic Impact Breakdown - Fixed Pie Chart */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <LineChart className="w-6 h-6 mr-3 text-blue-500" />
                {t.charts.economicLoss.title}
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
                      <span className="text-gray-800 font-medium">{t.charts.economicLoss.healthcareCosts}</span>
                    </div>
                    <div className="flex items-center bg-orange-50 rounded p-2">
                      <div className="w-4 h-4 bg-orange-500 rounded mr-2"></div>
                      <span className="text-gray-800 font-medium">{t.charts.economicLoss.lostProductivity}</span>
                    </div>
                    <div className="flex items-center bg-yellow-50 rounded p-2">
                      <div className="w-4 h-4 bg-yellow-500 rounded mr-2"></div>
                      <span className="text-gray-800 font-medium">{t.charts.economicLoss.educationImpact}</span>
                    </div>
                    <div className="flex items-center bg-green-50 rounded p-2">
                      <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                      <span className="text-gray-800 font-medium">{t.charts.economicLoss.socialPrograms}</span>
                    </div>
                    <div className="flex items-center bg-blue-50 rounded p-2">
                      <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
                      <span className="text-gray-800 font-medium">{t.charts.economicLoss.infrastructure}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-400">
                  <div className="text-sm text-gray-700">
                    <strong className="text-blue-600">{t.charts.economicLoss.technologyDescription}</strong>
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
              <div className="text-gray-800 font-semibold mb-2">{t.waterStats.cleanWater.title}</div>
              <div className="text-sm text-gray-600 bg-blue-50 rounded-lg px-3 py-2">{t.waterStats.cleanWater.subtitle}</div>
              <div className="mt-3 p-2 bg-blue-100 rounded-lg">
                <p className="text-xs text-blue-800 font-medium">
                  {t.waterStats.cleanWater.target}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl text-center border border-red-100">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-red-600 mb-2">1000</div>
              <div className="text-gray-800 font-semibold mb-2">{t.waterStats.waterDeaths.title}</div>
              <div className="text-sm text-gray-600 bg-red-50 rounded-lg px-3 py-2">{t.waterStats.waterDeaths.subtitle}</div>
              <div className="mt-3 p-2 bg-red-100 rounded-lg">
                <p className="text-xs text-red-800 font-medium">
                  {t.waterStats.waterDeaths.goal}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl text-center border border-orange-100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-orange-600 mb-2">4000</div>
              <div className="text-gray-800 font-semibold mb-2">{t.waterStats.waterScarcity.title}</div>
              <div className="text-sm text-gray-600 bg-orange-50 rounded-lg px-3 py-2">{t.waterStats.waterScarcity.subtitle}</div>
              <div className="mt-3 p-2 bg-orange-100 rounded-lg">
                <p className="text-xs text-orange-800 font-medium">
                  {t.waterStats.waterScarcity.target}
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
                  {t.waterStats.impact.childrenImpact.title}
                </h3>
                <div className="space-y-4">
                  <div className="bg-red-50 rounded-xl p-4 border-l-4 border-red-400">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gray-800 font-semibold">{t.waterStats.impact.childrenImpact.hungerDeathFrequency}</span>
                      <span className="text-red-600 font-bold bg-red-100 px-3 py-1 rounded-full text-sm">{t.waterStats.impact.childrenImpact.hungerDeathType}</span>
                    </div>
                    <div className="w-full bg-red-200 rounded-full h-3">
                      <div className="bg-red-500 h-3 rounded-full animate-pulse w-full shadow-sm"></div>
                    </div>
                    <p className="text-sm text-gray-700 mt-3">
                      {t.waterStats.impact.childrenImpact.malnutritionDescription}
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-400">
                    <h4 className="font-bold text-blue-700 mb-2">{t.waterStats.impact.childrenImpact.foundationSolutions}</h4>
                    <p className="text-sm text-gray-700">
                      {t.waterStats.impact.childrenImpact.foundationDescription}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <MapPin className="w-6 h-6 mr-3 text-orange-500" />
                  {t.waterStats.impact.criticalRegions.title}
                </h3>
                <div className="space-y-4">
                  <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800">{t.waterStats.impact.criticalRegions.chad}</span>
                      <span className="text-red-700 font-bold bg-red-100 px-2 py-1 rounded">40.2%</span>
                    </div>
                    <div className="w-full bg-red-200 rounded-full h-2">
                      <div className="bg-red-600 h-2 rounded-full shadow-sm" style={{width: '40.2%'}}></div>
                    </div>
                    <div className="text-xs text-red-600 mt-1 font-medium">{t.waterStats.impact.criticalRegions.pilotProgram}</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800">{t.waterStats.impact.criticalRegions.madagascar}</span>
                      <span className="text-orange-700 font-bold bg-orange-100 px-2 py-1 rounded">38.4%</span>
                    </div>
                    <div className="w-full bg-orange-200 rounded-full h-2">
                      <div className="bg-orange-600 h-2 rounded-full shadow-sm" style={{width: '38.4%'}}></div>
                    </div>
                    <div className="text-xs text-orange-600 mt-1 font-medium">{t.waterStats.impact.criticalRegions.smartFarming}</div>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800">{t.waterStats.impact.criticalRegions.yemen}</span>
                      <span className="text-yellow-700 font-bold bg-yellow-100 px-2 py-1 rounded">35.8%</span>
                    </div>
                    <div className="w-full bg-yellow-200 rounded-full h-2">
                      <div className="bg-yellow-600 h-2 rounded-full shadow-sm" style={{width: '35.8%'}}></div>
                    </div>
                    <div className="text-xs text-yellow-600 mt-1 font-medium">{t.waterStats.impact.criticalRegions.emergencyNutrition}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Target className="w-6 h-6 mr-3 text-green-500" />
                  {t.waterStats.impact.foundationApproach.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t.waterStats.impact.foundationApproach.description}
                </p>
                
                {/* Enhanced Success Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 text-center shadow-md border border-green-100">
                    <div className="text-2xl font-bold text-green-600 mb-1">{t.waterStats.impact.foundationApproach.metrics.precisionFarming.value}</div>
                    <div className="text-xs text-gray-600 font-medium">{t.waterStats.impact.foundationApproach.metrics.precisionFarming.title}</div>
                    <div className="text-xs text-green-600 mt-1">{t.waterStats.impact.foundationApproach.metrics.precisionFarming.subtitle}</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center shadow-md border border-blue-100">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{t.waterStats.impact.foundationApproach.metrics.waterReduction.value}</div>
                    <div className="text-xs text-gray-600 font-medium">{t.waterStats.impact.foundationApproach.metrics.waterReduction.title}</div>
                    <div className="text-xs text-blue-600 mt-1">{t.waterStats.impact.foundationApproach.metrics.waterReduction.subtitle}</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center shadow-md border border-purple-100">
                    <div className="text-2xl font-bold text-purple-600 mb-1">{t.waterStats.impact.foundationApproach.metrics.postHarvestLoss.value}</div>
                    <div className="text-xs text-gray-600 font-medium">{t.waterStats.impact.foundationApproach.metrics.postHarvestLoss.title}</div>
                    <div className="text-xs text-purple-600 mt-1">{t.waterStats.impact.foundationApproach.metrics.postHarvestLoss.subtitle}</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center shadow-md border border-orange-100">
                    <div className="text-2xl font-bold text-orange-600 mb-1">{t.waterStats.impact.foundationApproach.metrics.supplyChain.value}</div>
                    <div className="text-xs text-gray-600 font-medium">{t.waterStats.impact.foundationApproach.metrics.supplyChain.title}</div>
                    <div className="text-xs text-orange-600 mt-1">{t.waterStats.impact.foundationApproach.metrics.supplyChain.subtitle}</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Activity className="w-6 h-6 mr-3 text-indigo-500" />
                  {t.waterStats.impact.foundationGoals.title}
                </h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800">{t.waterStats.impact.foundationGoals.childrenToReach.title}</span>
                      <span className="text-green-700 font-bold text-lg">{t.waterStats.impact.foundationGoals.childrenToReach.value}</span>
                    </div>
                    <div className="w-full bg-green-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full shadow-sm" style={{width: '0%'}}></div>
                    </div>
                    <div className="text-xs text-green-700 mt-1 font-medium">{t.waterStats.impact.foundationGoals.childrenToReach.description}</div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800">{t.waterStats.impact.foundationGoals.communitiesToSupport.title}</span>
                      <span className="text-blue-700 font-bold text-lg">{t.waterStats.impact.foundationGoals.communitiesToSupport.value}</span>
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full shadow-sm" style={{width: '0%'}}></div>
                    </div>
                    <div className="text-xs text-blue-700 mt-1 font-medium">{t.waterStats.impact.foundationGoals.communitiesToSupport.description}</div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800">{t.waterStats.impact.foundationGoals.technologiesToDeploy.title}</span>
                      <span className="text-purple-700 font-bold text-lg">{t.waterStats.impact.foundationGoals.technologiesToDeploy.value}</span>
                    </div>
                    <div className="w-full bg-purple-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full shadow-sm" style={{width: '0%'}}></div>
                    </div>
                    <div className="text-xs text-purple-700 mt-1 font-medium">{t.waterStats.impact.foundationGoals.technologiesToDeploy.description}</div>
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
              {t.investmentFocus.title}
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t.investmentFocus.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* AgTech & Precision Farming */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-light text-gray-900">{t.investmentFocus.agTech.title}</h3>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">{t.investmentFocus.agTech.marketOpportunity.title}</h4>
                  <p className="text-sm leading-relaxed">
                    {t.investmentFocus.agTech.marketOpportunity.description}
                  </p>
                </div>
                
                <div className="bg-green-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">{t.investmentFocus.agTech.investmentPriorities.title}</h4>
                  <ul className="space-y-2 text-sm">
                    {t.investmentFocus.agTech.investmentPriorities.items.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">{t.investmentFocus.agTech.successMetrics.title}</h4>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{t.investmentFocus.agTech.successMetrics.yieldIncrease}</div>
                      <div>{t.investmentFocus.agTech.successMetrics.yieldIncreaseLabel}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{t.investmentFocus.agTech.successMetrics.resourceEfficiency}</div>
                      <div>{t.investmentFocus.agTech.successMetrics.resourceEfficiencyLabel}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">{t.investmentFocus.agTech.successMetrics.roiTimeline}</div>
                      <div>{t.investmentFocus.agTech.successMetrics.roiTimelineLabel}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-600">{t.investmentFocus.agTech.successMetrics.expectedReturns}</div>
                      <div>{t.investmentFocus.agTech.successMetrics.expectedReturnsLabel}</div>
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
                <h3 className="text-2xl font-light text-gray-900">{t.investmentFocus.alternativeProtein.title}</h3>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">{t.investmentFocus.alternativeProtein.marketOpportunity.title}</h4>
                  <p className="text-sm leading-relaxed">
                    {t.investmentFocus.alternativeProtein.marketOpportunity.description}
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">{t.investmentFocus.alternativeProtein.investmentPriorities.title}</h4>
                  <ul className="space-y-2 text-sm">
                    {t.investmentFocus.alternativeProtein.investmentPriorities.items.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">{t.investmentFocus.alternativeProtein.impactProjections.title}</h4>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{t.investmentFocus.alternativeProtein.impactProjections.landUse}</div>
                      <div>{t.investmentFocus.alternativeProtein.impactProjections.landUseLabel}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{t.investmentFocus.alternativeProtein.impactProjections.emissions}</div>
                      <div>{t.investmentFocus.alternativeProtein.impactProjections.emissionsLabel}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-red-600">{t.investmentFocus.alternativeProtein.impactProjections.water}</div>
                      <div>{t.investmentFocus.alternativeProtein.impactProjections.waterLabel}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">{t.investmentFocus.alternativeProtein.impactProjections.cost}</div>
                      <div>{t.investmentFocus.alternativeProtein.impactProjections.costLabel}</div>
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
                <h3 className="text-2xl font-light text-gray-900">{t.investmentFocus.supplyChain.title}</h3>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">{t.investmentFocus.supplyChain.marketOpportunity.title}</h4>
                  <p className="text-sm leading-relaxed">
                    {t.investmentFocus.supplyChain.marketOpportunity.description}
                  </p>
                </div>
                
                <div className="bg-orange-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">{t.investmentFocus.supplyChain.investmentPriorities.title}</h4>
                  <ul className="space-y-2 text-sm">
                    {t.investmentFocus.supplyChain.investmentPriorities.items.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">Technology ROI</h4>
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.investmentFocus.supplyChain.technologyRoi.roiMatrix}</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                        <span className="font-medium text-gray-900">{t.investmentFocus.supplyChain.technologyRoi.roiMatrix}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <span className="font-medium text-gray-900">{t.investmentFocus.supplyChain.technologyRoi.verticalFarming}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200">
                        <span className="font-medium text-gray-900">{t.investmentFocus.supplyChain.technologyRoi.smartIrrigation}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg border border-orange-200">
                        <span className="font-medium text-gray-900">{t.investmentFocus.supplyChain.technologyRoi.blockchainSupply}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200">
                        <span className="font-medium text-gray-900">{t.investmentFocus.supplyChain.technologyRoi.alternativeProteins}</span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg border-l-4 border-gray-400">
                      <p className="text-sm text-gray-700">
                        {t.investmentFocus.supplyChain.technologyRoi.foundationDescription}
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
                <h3 className="text-2xl font-light text-gray-900">{t.investmentFocus.waterFood.title}</h3>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">{t.investmentFocus.waterFood.marketOpportunity.title}</h4>
                  <p className="text-sm leading-relaxed">
                    {t.investmentFocus.waterFood.marketOpportunity.description}
                  </p>
                </div>
                
                <div className="bg-cyan-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">{t.investmentFocus.waterFood.investmentPriorities.title}</h4>
                  <ul className="space-y-2 text-sm">
                    {t.investmentFocus.waterFood.investmentPriorities.items.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">{t.investmentFocus.waterFood.efficiencyGains.title}</h4>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="text-center bg-white rounded-lg p-3 shadow-sm border border-cyan-200">
                      <div className="text-lg font-bold text-cyan-600">{t.investmentFocus.waterFood.efficiencyGains.waterSavings}</div>
                      <div>{t.investmentFocus.waterFood.efficiencyGains.waterSavingsLabel}</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-3 shadow-sm border border-blue-200">
                      <div className="text-lg font-bold text-blue-600">{t.investmentFocus.waterFood.efficiencyGains.yieldIncrease}</div>
                      <div>{t.investmentFocus.waterFood.efficiencyGains.yieldIncreaseLabel}</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-3 shadow-sm border border-green-200">
                      <div className="text-lg font-bold text-green-600">{t.investmentFocus.waterFood.efficiencyGains.energyReduction}</div>
                      <div>{t.investmentFocus.waterFood.efficiencyGains.energyReductionLabel}</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-3 shadow-sm border border-purple-200">
                      <div className="text-lg font-bold text-purple-600">{t.investmentFocus.waterFood.efficiencyGains.paybackPeriod}</div>
                      <div>{t.investmentFocus.waterFood.efficiencyGains.paybackPeriodLabel}</div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-cyan-100 rounded-lg border-l-4 border-cyan-400">
                    <p className="text-sm text-cyan-800">
                      {t.investmentFocus.waterFood.efficiencyGains.foundationNote}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Investment Philosophy & Portfolio Allocation */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl font-light mb-6">{t.investmentFocus.investmentPhilosophy.title}</h3>
            <p className="text-xl font-light leading-relaxed mb-8 text-gray-200 max-w-4xl mx-auto">
              {t.investmentFocus.investmentPhilosophy.subtitle}
            </p>
            
            {/* Portfolio Allocation Matrix */}
            <div className="grid md:grid-cols-4 gap-8 mt-12 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-light text-green-400 mb-2">$75M</div>
                <div className="text-sm text-gray-300 mb-4">{t.investmentFocus.investmentPhilosophy.portfolioAllocation.agTech}</div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{width: '50%'}}></div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-light text-blue-400 mb-2">$45M</div>
                <div className="text-sm text-gray-300 mb-4">{t.investmentFocus.investmentPhilosophy.portfolioAllocation.alternativeProteins}</div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full" style={{width: '30%'}}></div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-light text-orange-400 mb-2">$20M</div>
                <div className="text-sm text-gray-300 mb-4">{t.investmentFocus.investmentPhilosophy.portfolioAllocation.supplyChainTech}</div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-orange-400 h-2 rounded-full" style={{width: '13.3%'}}></div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-light text-cyan-400 mb-2">$10M</div>
                <div className="text-sm text-gray-300 mb-4">{t.investmentFocus.investmentPhilosophy.portfolioAllocation.waterFoodNexus}</div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-cyan-400 h-2 rounded-full" style={{width: '6.7%'}}></div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-3xl font-light text-green-400 mb-2">{t.investmentFocus.investmentPhilosophy.metrics.expectedIrr}</div>
                <div className="text-sm text-gray-300">{t.investmentFocus.investmentPhilosophy.metrics.expectedIrrLabel}</div>
              </div>
              <div>
                <div className="text-3xl font-light text-blue-400 mb-2">{t.investmentFocus.investmentPhilosophy.metrics.peopleImpacted}</div>
                <div className="text-sm text-gray-300">{t.investmentFocus.investmentPhilosophy.metrics.peopleImpactedLabel}</div>
              </div>
              <div>
                <div className="text-3xl font-light text-purple-400 mb-2">{t.investmentFocus.investmentPhilosophy.metrics.totalMarket}</div>
                <div className="text-sm text-gray-300">{t.investmentFocus.investmentPhilosophy.metrics.totalMarketLabel}</div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-700">
              <p className="text-lg font-light text-gray-300 italic mb-8">
                {t.investmentFocus.investmentPhilosophy.quote}
              </p>
              
              {/* CTA Button for Funding Application */}
              <Link 
                href="/funding"
                className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Leaf className="w-5 h-5 mr-3" />
                {t.investmentFocus.investmentPhilosophy.ctaButton}
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
            {t.waterStats.waterScarcityDeepDive.title}
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {t.waterStats.waterScarcityDeepDive.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Breakthrough Technologies */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Microscope className="w-6 h-6 mr-3 text-green-500" />
              {t.waterStats.waterScarcityDeepDive.technologiesWeSupport.title}
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-3 bg-green-50 rounded-r-lg p-3">
                <h4 className="font-bold text-green-700 text-sm">{t.waterStats.waterScarcityDeepDive.technologiesWeSupport.atmosphericWater.title}</h4>
                <p className="text-xs text-gray-600 mt-1">
                  {t.waterStats.waterScarcityDeepDive.technologiesWeSupport.atmosphericWater.description}
                </p>
                <div className="text-xs text-green-600 mt-1 font-medium">{t.waterStats.waterScarcityDeepDive.technologiesWeSupport.atmosphericWater.status}</div>
              </div>
              <div className="border-l-4 border-blue-500 pl-3 bg-blue-50 rounded-r-lg p-3">
                <h4 className="font-bold text-blue-700 text-sm">{t.waterStats.waterScarcityDeepDive.technologiesWeSupport.grapheneMembranes.title}</h4>
                <p className="text-xs text-gray-600 mt-1">
                  {t.waterStats.waterScarcityDeepDive.technologiesWeSupport.grapheneMembranes.description}
                </p>
                <div className="text-xs text-blue-600 mt-1 font-medium">{t.waterStats.waterScarcityDeepDive.technologiesWeSupport.grapheneMembranes.status}</div>
              </div>
              <div className="border-l-4 border-purple-500 pl-3 bg-purple-50 rounded-r-lg p-3">
                <h4 className="font-bold text-purple-700 text-sm">{t.waterStats.waterScarcityDeepDive.technologiesWeSupport.aiAquifer.title}</h4>
                <p className="text-xs text-gray-600 mt-1">
                  {t.waterStats.waterScarcityDeepDive.technologiesWeSupport.aiAquifer.description}
                </p>
                <div className="text-xs text-purple-600 mt-1 font-medium">{t.waterStats.waterScarcityDeepDive.technologiesWeSupport.aiAquifer.status}</div>
              </div>
            </div>
          </div>

          {/* Thermodynamic Analysis */}
          <div className="bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl p-6 shadow-lg border border-indigo-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Beaker className="w-6 h-6 mr-3 text-indigo-500" />
              {t.waterStats.waterScarcityDeepDive.scientificResearch.title}
            </h3>
            <div className="space-y-3">
              <div className="bg-white/80 rounded-lg p-3">
                <h4 className="font-bold text-indigo-700 text-sm">{t.waterStats.waterScarcityDeepDive.scientificResearch.gibbsFreeEnergy.title}</h4>
                <p className="text-xs text-gray-700">
                  {t.waterStats.waterScarcityDeepDive.scientificResearch.gibbsFreeEnergy.description}
                </p>
              </div>
              <div className="bg-white/80 rounded-lg p-3">
                <h4 className="font-bold text-blue-700 text-sm">{t.waterStats.waterScarcityDeepDive.scientificResearch.osmoticPressure.title}</h4>
                <p className="text-xs text-gray-700">
                  {t.waterStats.waterScarcityDeepDive.scientificResearch.osmoticPressure.description}
                </p>
              </div>
              <div className="bg-white/80 rounded-lg p-3">
                <h4 className="font-bold text-cyan-700 text-sm">{t.waterStats.waterScarcityDeepDive.scientificResearch.quantumSolutions.title}</h4>
                <p className="text-xs text-gray-700">
                  {t.waterStats.waterScarcityDeepDive.scientificResearch.quantumSolutions.description}
                </p>
              </div>
            </div>
          </div>

          {/* Implementation Matrix */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Factory className="w-6 h-6 mr-3 text-orange-500" />
              {t.waterStats.waterScarcityDeepDive.investmentStatus.title}
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 bg-green-50 rounded-lg border border-green-200">
                <span className="text-xs font-medium text-gray-800">{t.waterStats.waterScarcityDeepDive.investmentStatus.solarDesalination.name}</span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">{t.waterStats.waterScarcityDeepDive.investmentStatus.solarDesalination.status}</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-blue-50 rounded-lg border border-blue-200">
                <span className="text-xs font-medium text-gray-800">{t.waterStats.waterScarcityDeepDive.investmentStatus.smartWells.name}</span>
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold">{t.waterStats.waterScarcityDeepDive.investmentStatus.smartWells.status}</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-purple-50 rounded-lg border border-purple-200">
                <span className="text-xs font-medium text-gray-800">{t.waterStats.waterScarcityDeepDive.investmentStatus.waterAtms.name}</span>
                <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-bold">{t.waterStats.waterScarcityDeepDive.investmentStatus.waterAtms.status}</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
              <p className="text-xs text-orange-800">
                <strong>{t.waterStats.waterScarcityDeepDive.investmentStatus.goal2030}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
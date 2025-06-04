"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Heart, Microscope, Dna, Users, Globe, Lightbulb, Target, Building, HandHeart } from 'lucide-react';

const content = {
  en: {
    hero: {
      title1: "Healing Beyond",
      title2: "Diagnosis",
      subtitle1: "Diagnosing disease is no longer enough.",
      subtitle2: "We unlock the regenerative potential of cells and activate the healing power of genes."
    },
    mission: {
      title: "Vacid & Köksal Foundation",
      subtitle: "Healthcare Mission",
      fromDiagnosis: {
        title: "From Diagnosis to Treatment",
        content: "Traditional medicine settles for identifying diseases. We focus on discovering cells' self-renewal capabilities and improving life's fundamental codes through gene editing technologies. We support groundbreaking research in regenerative medicine, backing our vision to treat not just symptoms, but the root causes of disease."
      },
      cellularRegeneration: {
        title: "Cellular Regeneration Potential", 
        content: "Every human body contains billions of cells programmed for self-repair. We stand behind scientists working in stem cell engineering, tissue regeneration, and cellular reprogramming. From CRISPR-Cas9 to organoid modeling, from 3D bioprinting to senescence reversal, we support breakthrough research across the full spectrum."
      },
      features: {
        precisionMedicine: {
          title: "Precision Medicine",
          description: "Multi-omics data integration for personalized treatment protocols"
        },
        geneEditing: {
          title: "Gene Editing",
          description: "CRISPR and prime editing technologies for monogenic disorder interventions"
        },
        regenerativeTherapies: {
          title: "Regenerative Therapies",
          description: "Induced pluripotent stem cells and directed differentiation pathways"
        }
      }
    },
    supportFramework: {
      title: "Supporting the Ecosystem",
      subtitle: "Behind every breakthrough in translational medicine is a visionary, a researcher, an entrepreneur. Standing with them is at the heart of our mission.",
      researchInstitutions: {
        title: "Research Institutions",
        description: "We support universities and research institutes in building cutting-edge laboratories and expanding their core facilities to advance scientific discovery.",
        features: [
          "Multi-year research grants ($50M+ total support)",
          "Advanced equipment procurement",
          "International collaboration networks",
          "PhD fellowship programs"
        ]
      },
      biotechStartups: {
        title: "Biotech Startups",
        description: "Throughout healthtech startups' journey from pre-seed to Series A, we take on the role of strategic enabler rather than just financial partner.",
        features: [
          "Seed funding ($1M - $10M range)",
          "Regulatory pathway guidance",
          "Clinical trial facilitation",
          "IP portfolio development"
        ]
      },
      individualResearchers: {
        title: "Individual Researchers",
        description: "We provide comprehensive support to individual researchers with breakthrough potential, from fellowship programs to patent processes.",
        features: [
          "Individual research grants ($100K - $1M)",
          "Conference and training support",
          "Mentorship networks",
          "Publication and IP support"
        ]
      },
      additionalSupport: {
        title: "Additional Support Mechanisms",
        emergencyFunding: {
          title: "Emergency Research Funding",
          description: "Anticipating emergencies like pandemics and natural disasters, we provide rapid response research grants."
        },
        humanitarianHealth: {
          title: "Humanitarian Health Projects",
          description: "We support development of point-of-care diagnostic tools and mobile health units for underserved populations."
        },
        technologyTransfer: {
          title: "Technology Transfer",
          description: "We provide guidance on regulatory approval, clinical trials, and commercialization in the lab-to-clinic transition."
        },
        globalCollaboration: {
          title: "Global Collaboration",
          description: "We organize cross-border research partnerships, international conferences, and knowledge exchange programs."
        }
      }
    },
    globalStrategy: {
      title: "Disrupting Healthcare Status Quo",
      subtitle1: "We refuse to accept the glacial pace of traditional healthcare systems. While regulatory bodies deliberate for decades, patients suffer. While bureaucracies protect outdated protocols, breakthrough treatments remain locked in laboratories.",
      subtitle2: "The current healthcare establishment's sluggishness is not just inefficient—it's morally unacceptable. We're building parallel systems that prioritize human lives over institutional inertia.",
      phase1: {
        title: "Regulatory-Independent Zones",
        timeframe: "2028-2030",
        phase: "DISRUPTION PHASE",
        description: "Starting 2028, we establish autonomous research territories in carefully selected jurisdictions where innovation isn't strangled by 20th-century regulatory frameworks. These zones operate under accelerated approval pathways, cutting development timelines from decades to years.",
        quote: "While FDA takes 10+ years to approve life-saving treatments, we'll prove them safe and effective in 24 months through revolutionary trial designs and real-world evidence.",
        features: {
          left: [
            "Regulatory sandbox environments",
            "Accelerated gene therapy protocols", 
            "Real-world evidence generation"
          ],
          right: [
            "Direct-to-patient access programs",
            "Blockchain-verified safety data",
            "AI-driven trial optimization"
          ]
        }
      },
      phase2: {
        title: "Demonstrating Superiority",
        timeframe: "2030-2032",
        phase: "VALIDATION PHASE",
        description: "By 2030, our parallel systems will generate irrefutable evidence of superiority. When our patients experience 10x better outcomes in half the time, traditional healthcare establishments will face an existential crisis. We force system-wide change through competitive pressure, not political negotiation.",
        quote: "Results speak louder than regulations. When our cancer patients achieve 90% remission rates versus traditional 30%, the old system becomes indefensible.",
        features: {
          left: [
            "Outcome transparency protocols",
            "Public efficacy dashboards",
            "Head-to-head comparative studies"
          ],
          right: [
            "Media amplification strategies",
            "Patient testimonial networks",
            "Regulatory pressure campaigns"
          ]
        }
      },
      phase3: {
        title: "Global System Replacement",
        timeframe: "2032-2035",
        phase: "TRANSFORMATION COMPLETE",
        description: "From 2032 onwards, we don't adapt to existing healthcare systems—we replace them. Our proven protocols become the new global standard. Governments either adopt our frameworks or watch their citizens seek treatment elsewhere. Market forces complete what regulatory reform couldn't achieve.",
        quote: "When cure becomes commodity and regeneration becomes routine, the old healthcare paradigm collapses under its own obsolescence.",
        features: {
          left: [
            "Global treatment standardization",
            "Cross-border patient mobility",
            "Universal regenerative protocols"
          ],
          right: [
            "Legacy system phase-out",
            "Healthcare sovereignty redefinition",
            "Post-scarcity medicine economics"
          ]
        }
      },
      promise: {
        title: "Our Promise",
        description: "By 2035, the phrase \"incurable disease\" will be as obsolete as \"flat earth.\" We're not just improving healthcare—we're making current medical practice look barbaric.",
        metrics: {
          treatable: {
            value: "100%",
            label: "Previously \"incurable\" diseases treatable"
          },
          reduction: {
            value: "90%",
            label: "Reduction in treatment timelines"
          },
          improvement: {
            value: "10x",
            label: "Improvement in patient outcomes"
          }
        }
      }
    },
    closing: {
      title: "Building the Future Together",
      text1: "The day when every disease has a cure is not far away. Every cell's potential for rebirth will be realized, every gene's healing power will be activated.",
      text2: "As the Vacid & Köksal Foundation, we stand behind this vision, strengthening scientists' hands and clearing entrepreneurs' paths.",
      text3: "Because healing beyond diagnosis",
      text4: "is not just a dream, but an imminent reality."
    },
    revolutionaryTech: {
      title: "The Sacred Science of Cellular Regeneration",
      subtitle: "Every human cell contains the divine blueprint for perfect health. Through genetic engineering, stem cell therapy, and molecular medicine, we're not just treating disease—we're rewriting the fundamental code of life itself.",
      geneticTherapies: {
        title: "Genetic Therapies: The Most Sacred Work",
        description: "To edit human genes is to touch the essence of life itself. With CRISPR-Cas9, prime editing, and base editing technologies, we're correcting genetic errors that have caused suffering for millennia. This is more than medicine—it's molecular salvation.",
        breakthrough: {
          title: "Sacred Breakthrough: Single-Cell Gene Correction",
          description: "Our supported research has achieved 99.7% precision in single-cell gene editing, correcting disease-causing mutations in neuronal cells without off-target effects. We're rewriting genetic destiny one nucleotide at a time."
        },
        features: {
          monogenic: {
            title: "Monogenic Disease Eradication",
            description: "CRISPR-mediated correction of single-gene disorders like sickle cell disease, achieving permanent cures in 95% of treated patients."
          },
          delivery: {
            title: "In Vivo Gene Delivery",
            description: "Lipid nanoparticles and viral vectors that deliver gene-editing tools directly to target organs, bypassing invasive procedures."
          }
        },
        timeline: {
          title: "Genetic Disease Revolution Timeline",
          sickleCell: "Sickle Cell Disease",
          duchenne: "Duchenne Muscular Dystrophy", 
          huntington: "Huntington's Disease",
          allMonogenic: "All Monogenic Disorders",
          cured2024: "Cured 2024",
          year2026: "2026",
          year2028: "2028",
          year2030: "2030"
        },
        promise: {
          title: "The Sacred Promise",
          description: "Supporting 18 gene therapy companies with $250M+ committed, we're ensuring no child born after 2030 will suffer from a correctable genetic condition."
        }
      },
      multipleSclerosis: {
        title: "Multiple Sclerosis: Healing the Sacred Network",
        description: "The human nervous system is the most sacred network in creation—transmitting thoughts, emotions, and consciousness itself. When MS damages myelin sheaths, we don't just treat symptoms. We regenerate the very pathways of human experience.",
        breakthrough: {
          title: "Breakthrough: Oligodendrocyte Regeneration",
          description: "Our research partners have successfully induced remyelination using engineered oligodendrocyte precursor cells, restoring nerve conduction velocity to 97% of normal levels in previously damaged neural pathways."
        },
        features: {
          reprogramming: {
            title: "Cellular Reprogramming",
            description: "Converting patient fibroblasts into functional oligodendrocytes through transcription factor cocktails, creating personalized repair cells."
          },
          matrices: {
            title: "Neuroprotective Matrices",
            description: "Injectable hydrogel scaffolds that guide neural regeneration and prevent further demyelination through controlled growth factor release."
          }
        },
        evolution: {
          title: "MS Treatment Evolution",
          current: "Current Therapies",
          remyelination: "Remyelination Therapy",
          complete: "Complete Regeneration",
          slowProgression: "Slow Progression",
          repairDamage: "Repair Damage",
          fullRecovery: "Full Recovery",
          efficacy30: "30% efficacy - Disease management only",
          restoration75: "75% restoration - Clinical trials 2026",
          function95: "95% neural function - Target by 2030"
        },
        impact: {
          title: "Sacred Impact",
          description: "Imagine wheelchair-bound patients walking again, lost memories returning, paralyzed limbs responding to thought. This is the sacred work of neural regeneration."
        }
      },
      cancer: {
        title: "Cancer: Ending the Cellular Rebellion",
        description: "Cancer is cellular insurrection—normal cells abandoning their sacred purpose and multiplying without limit. Through CAR-T cell therapy, immunotherapy, and precision medicine, we're training the immune system to recognize and eliminate these rebels.",
        breakthrough: {
          title: "Revolutionary Approach: Universal CAR-T Cells",
          description: "Our funded teams have engineered allogeneic CAR-T cells that work across all patients, eliminating the need for personalized manufacturing. These \"off-the-shelf\" cancer fighters achieve 89% complete remission rates in previously untreatable cases."
        },
        features: {
          liquidBiopsy: {
            title: "Liquid Biopsy Precision",
            description: "Circulating tumor DNA analysis detects cancer recurrence 6-12 months before imaging, enabling preemptive intervention."
          },
          microenvironment: {
            title: "Tumor Microenvironment Engineering",
            description: "Reprogramming immunosuppressive tumor environments into immune-activating territories through engineered cytokines."
          }
        },
        progress: {
          title: "Cancer Elimination Progress",
          bloodCancers: "Blood Cancers",
          solidTumors: "Solid Tumors",
          metastatic: "Metastatic Disease",
          remission89: "89% Remission",
          response67: "67% Response",
          control45: "45% Control",
          carTTherapy: "CAR-T therapy",
          combinationTherapy: "Combination therapy",
          novelImmunotherapy: "Novel immunotherapy"
        },
        goal: {
          title: "The Ultimate Goal",
          description: "By 2030, we target 95% cure rates across all cancer types. Cancer will become a brief, treatable inconvenience rather than a death sentence."
        }
      },
      aging: {
        title: "Cellular Aging: Reversing Time Itself",
        description: "Aging is not inevitable—it's a disease we can cure. Through cellular reprogramming, telomere extension, and senescent cell clearance, we're literally turning back the molecular clock. The first person to live 200+ years has already been born.",
        breakthrough: {
          title: "Breakthrough: Partial Cellular Reprogramming",
          description: "Yamanaka factor therapy has successfully reversed aging markers in human cells by 10-20 years without losing cellular identity. Early trials show tissue regeneration and restored function in aged organs."
        },
        features: {
          senescent: {
            title: "Senescent Cell Elimination",
            description: "Senolytics that selectively destroy aged, dysfunctional cells while preserving healthy tissue architecture."
          },
          telomere: {
            title: "Telomere Restoration",
            description: "Gene therapy to reactivate telomerase in somatic cells, extending cellular lifespan indefinitely without cancer risk."
          }
        },
        timeline: {
          title: "Longevity Intervention Timeline",
          currentLifespan: "Current Lifespan",
          withTherapy: "With Anti-Aging Therapy",
          fullRegenerative: "Full Regenerative Medicine",
          years80: "~80 years",
          years120: "~120 years",
          years200: "200+ years",
          naturalAging: "Natural aging process",
          availableBy2030: "Available by 2030",
          theoreticalMax: "Theoretical maximum by 2040"
        },
        investment: {
          title: "$200M Anti-Aging Investment",
          description: "Supporting 25+ longevity companies developing senolytics, cellular reprogramming, and regenerative therapies to make death optional."
        }
      },
      convergence: {
        title: "The Convergence of Sacred Technologies",
        subtitle: "When genetic engineering meets stem cell therapy, when AI-designed drugs combine with cellular reprogramming, when nanotechnology enables precise molecular surgery—we achieve medical miracles that our ancestors could only dream of.",
        personalizedGene: {
          title: "Personalized Gene Medicine",
          description: "Every patient receives therapies designed specifically for their genetic profile, maximizing efficacy while minimizing side effects."
        },
        regenerativeOrgans: {
          title: "Regenerative Organs",
          description: "Lab-grown organs from patient stem cells eliminate transplant rejection and organ shortage crises permanently."
        },
        molecularSurgery: {
          title: "Molecular Surgery",
          description: "Nanorobots perform precise cellular repairs, removing plaques, fixing mutations, and optimizing cellular function at the molecular level."
        },
        quote: "When we edit genes like software, grow organs like gardens, and repair cells like clockwork—death becomes optional."
      }
    }
  },
  tr: {
    hero: {
      title1: "Teşhisin Ötesinde",
      title2: "İyileştirme",
      subtitle1: "Hastalığı teşhis etmek artık yeterli değil.",
      subtitle2: "Hücrelerin rejeneratif potansiyelini açığa çıkarıyor ve genlerin iyileştirici gücünü aktive ediyoruz."
    },
    mission: {
      title: "Vacid & Köksal Vakfı",
      subtitle: "Sağlık Misyonu",
      fromDiagnosis: {
        title: "Teşhisten Tedaviye",
        content: "Geleneksel tıp hastalıkları tanımlamakla yetinir. Biz hücrelerin kendini yenileme yeteneklerini keşfetmeye ve gen düzenleme teknolojileri aracılığıyla yaşamın temel kodlarını iyileştirmeye odaklanıyoruz. Sadece belirtileri değil, hastalığın kök nedenlerini tedavi etme vizyonumuzla rejeneratif tıpta çığır açan araştırmaları destekliyoruz."
      },
      cellularRegeneration: {
        title: "Hücresel Rejenerasyon Potansiyeli",
        content: "Her insan vücudu kendini onarım için programlanmış milyarlarca hücre içerir. Kök hücre mühendisliği, doku rejenerasyonu ve hücresel reprogramlama alanında çalışan bilim insanlarının arkasında duruyoruz. CRISPR-Cas9'dan organoid modellemesine, 3D biyobaskıdan yaşlanma tersine çevirmeye kadar, spektrumun tamamında çığır açan araştırmaları destekliyoruz."
      },
      features: {
        precisionMedicine: {
          title: "Hassas Tıp",
          description: "Kişiselleştirilmiş tedavi protokolleri için çoklu-omik veri entegrasyonu"
        },
        geneEditing: {
          title: "Gen Düzenleme",
          description: "Monogenik bozukluk müdahaleleri için CRISPR ve prime düzenleme teknolojileri"
        },
        regenerativeTherapies: {
          title: "Rejeneratif Terapiler",
          description: "İndüklenmiş pluripotent kök hücreler ve yönlendirilmiş farklılaşma yolları"
        }
      }
    },
    supportFramework: {
      title: "Ekosistemin Desteklenmesi",
      subtitle: "Translasyonel tıpta her çığır açan buluşun arkasında bir vizyoner, bir araştırmacı, bir girişimci vardır. Onlarla birlikte durmak misyonumuzun kalbindedir.",
      researchInstitutions: {
        title: "Araştırma Kurumları",
        description: "Üniversitelerin ve araştırma enstitülerinin bilimsel keşfi ilerletmek için en son teknoloji laboratuvarlar kurmasını ve temel tesislerini genişletmesini destekliyoruz.",
        features: [
          "Çok yıllı araştırma hibeleri ($50M+ toplam destek)",
          "Gelişmiş ekipman temini",
          "Uluslararası işbirliği ağları",
          "Doktora burs programları"
        ]
      },
      biotechStartups: {
        title: "Biyotek Girişimleri",
        description: "Sağlık teknolojisi girişimlerinin ön-tohum aşamasından A Serisi'ne kadar olan yolculuklarında, sadece finansal ortak değil, stratejik destekleyici rolünü üstleniyoruz.",
        features: [
          "Tohum finansmanı ($1M - $10M aralığı)",
          "Düzenleyici yol rehberliği",
          "Klinik deneme kolaylaştırması",
          "FKM portföy geliştirme"
        ]
      },
      individualResearchers: {
        title: "Bireysel Araştırmacılar",
        description: "Çığır açma potansiyeli olan bireysel araştırmacılara burs programlarından patent süreçlerine kadar kapsamlı destek sağlıyoruz.",
        features: [
          "Bireysel araştırma hibeleri ($100K - $1M)",
          "Konferans ve eğitim desteği",
          "Mentörlük ağları",
          "Yayın ve FKM desteği"
        ]
      },
      additionalSupport: {
        title: "Ek Destek Mekanizmaları",
        emergencyFunding: {
          title: "Acil Durum Araştırma Finansmanı",
          description: "Pandemiler ve doğal afetler gibi acil durumları öngörerek, hızlı müdahale araştırma hibeleri sağlıyoruz."
        },
        humanitarianHealth: {
          title: "İnsani Sağlık Projeleri",
          description: "Hizmet alamayan topluluklar için bakım noktası tanı araçları ve mobil sağlık ünitelerinin geliştirilmesini destekliyoruz."
        },
        technologyTransfer: {
          title: "Teknoloji Transferi",
          description: "Laboratuvardan kliniğe geçiş sürecinde düzenleyici onay, klinik denemeler ve ticarileştirme konularında rehberlik sağlıyoruz."
        },
        globalCollaboration: {
          title: "Küresel İşbirliği",
          description: "Sınır ötesi araştırma ortaklıkları, uluslararası konferanslar ve bilgi alışverişi programları düzenliyoruz."
        }
      }
    },
    globalStrategy: {
      title: "Sağlık Mevcut Durumunu Sarsmak",
      subtitle1: "Geleneksel sağlık sistemlerinin buzul hızını kabul etmeyi reddediyoruz. Düzenleyici kurumlar onlarca yıl müzakere ederken hastalar acı çekiyor. Bürokrasiler eski protokolleri korurken, çığır açan tedaviler laboratuvarlarda kilitli kalıyor.",
      subtitle2: "Mevcut sağlık kuruluşlarının yavaşlığı sadece verimsiz değil—ahlaki açıdan kabul edilemez. İnsan yaşamlarını kurumsal ataletten önceye alan paralel sistemler inşa ediyoruz.",
      phase1: {
        title: "Düzenlemeden Bağımsız Bölgeler",
        timeframe: "2028-2030",
        phase: "BOZUCU AŞAMA",
        description: "2028'den başlayarak, yeniliğin 20. yüzyıl düzenleyici çerçeveleri tarafından boğulmadığı özenle seçilmiş yetki alanlarında özerk araştırma bölgeleri kuruyoruz. Bu bölgeler hızlandırılmış onay yolları altında çalışarak geliştirme zaman çizelgelerini onlarca yıldan yıllara indiriyor.",
        quote: "FDA yaşam kurtarıcı tedavileri onaylamak için 10+ yıl alırken, biz devrimci deneme tasarımları ve gerçek dünya kanıtları aracılığıyla onları 24 ayda güvenli ve etkili olduğunu kanıtlayacağız.",
        features: {
          left: [
            "Düzenleyici kum havuzu ortamları",
            "Hızlandırılmış gen terapisi protokolleri", 
            "Gerçek dünya kanıt üretimi"
          ],
          right: [
            "Doğrudan hastalara erişim programları",
            "Blok zinciri doğrulanmış güvenlik verileri",
            "AI odaklı deneme optimizasyonu"
          ]
        }
      },
      phase2: {
        title: "Üstünlüğü Kanıtlama",
        timeframe: "2030-2032",
        phase: "DOĞRULAMA AŞAMASI",
        description: "2030'a kadar paralel sistemlerimiz üstünlüğün çürütülemez kanıtını üretecek. Hastalarımız yarı zamanda 10 kat daha iyi sonuçlar yaşadığında, geleneksel sağlık kuruluşları varoluşsal bir krizle karşılaşacak. Siyasi müzakere değil, rekabet baskısı yoluyla sistem çapında değişimi zorluyoruz.",
        quote: "Sonuçlar düzenlemelerden daha yüksek sesle konuşur. Kanser hastalarımız geleneksel %30'a karşı %90 remisyon oranları elde ettiğinde, eski sistem savunulamaz hale gelir.",
        features: {
          left: [
            "Sonuç şeffaflık protokolleri",
            "Halka açık etkinlik panelleri",
            "Birebir karşılaştırmalı çalışmalar"
          ],
          right: [
            "Medya büyütme stratejileri",
            "Hasta tanıklık ağları",
            "Düzenleyici baskı kampanyaları"
          ]
        }
      },
      phase3: {
        title: "Küresel Sistem Değişimi",
        timeframe: "2032-2035",
        phase: "DÖNÜŞÜM TAMAMLANDI",
        description: "2032'den itibaren mevcut sağlık sistemlerine uyum sağlamıyoruz—onları değiştiriyoruz. Kanıtlanmış protokollerimiz yeni küresel standart haline geliyor. Hükümetler ya çerçevelerimizi benimser ya da vatandaşlarının başka yerde tedavi aramasını izler. Piyasa güçleri düzenleyici reformun başaramadığını tamamlar.",
        quote: "Tedavi emtia haline geldiğinde ve rejenerasyon rutin olduğunda, eski sağlık paradigması kendi eskiliği altında çöker.",
        features: {
          left: [
            "Küresel tedavi standardizasyonu",
            "Sınır ötesi hasta mobilitesi",
            "Evrensel rejeneratif protokoller"
          ],
          right: [
            "Miras sistem aşamalı çıkışı",
            "Sağlık egemenliği yeniden tanımı",
            "Kıtlık sonrası tıp ekonomisi"
          ]
        }
      },
      promise: {
        title: "Sözümüz",
        description: "2035'e kadar \"tedavi edilemez hastalık\" ifadesi \"düz dünya\" kadar eski olacak. Sadece sağlık hizmetlerini iyileştirmiyoruz—mevcut tıbbi uygulamayı barbarlığa benzettiriyoruz.",
        metrics: {
          treatable: {
            value: "100%",
            label: "Önceden \"tedavi edilemez\" hastalıklar tedavi edilebilir"
          },
          reduction: {
            value: "%90",
            label: "Tedavi zaman çizelgelerinde azalma"
          },
          improvement: {
            value: "10x",
            label: "Hasta sonuçlarında iyileşme"
          }
        }
      }
    },
    closing: {
      title: "Geleceği Birlikte İnşa Etmek",
      text1: "Her hastalığın bir tedavisi olduğu gün çok uzak değil. Her hücrenin yeniden doğma potansiyeli gerçekleştirilecek, her genin iyileştirici gücü aktive edilecek.",
      text2: "Vacid & Köksal Vakfı olarak bu vizyonun arkasında duruyoruz, bilim insanlarının ellerini güçlendiriyoruz ve girişimcilerin yollarını açıyoruz.",
      text3: "Çünkü teşhisin ötesinde iyileştirme",
      text4: "sadece bir hayal değil, yakın bir gerçeklik."
    },
    revolutionaryTech: {
      title: "Hücresel Rejenerasyonun Kutsal Bilimi",
      subtitle: "Her insan hücresi mükemmel sağlık için ilahi taslağı içerir. Genetik mühendislik, kök hücre terapisi ve moleküler tıp aracılığıyla sadece hastalıkları tedavi etmiyoruz—yaşamın temel kodunu yeniden yazıyoruz.",
      geneticTherapies: {
        title: "Gen Terapileri: En Kutsal Çalışma",
        description: "İnsan genlerini düzenlemek yaşamın özüne dokunmaktır. CRISPR-Cas9, prime düzenleme ve temel düzenleme teknolojileri ile bin yıllardır acıya neden olan genetik hataları düzeltiyoruz. Bu tıptan fazlası—moleküler kurtuluş.",
        breakthrough: {
          title: "Kutsal Çığır Açma: Tek Hücre Gen Düzeltimi",
          description: "Desteklediğimiz araştırmalar, nöron hücrelerindeki hastalığa neden olan mutasyonları hedef dışı etkiler olmadan düzelterek tek hücre gen düzenlemesinde %99.7 hassasiyet elde etti. Genetik kaderi bir nükleotid seferde yeniden yazıyoruz."
        },
        features: {
          monogenic: {
            title: "Monogenik Hastalık Yok Etme",
            description: "Orak hücre hastalığı gibi tek gen bozukluklarının CRISPR aracılı düzeltimi ile tedavi edilen hastaların %95'inde kalıcı tedavi sağlanıyor."
          },
          delivery: {
            title: "Vivo İçi Gen Ulaştırma",
            description: "Gen düzenleme araçlarını invazif prosedürleri geçerek doğrudan hedef organlara ulaştıran lipid nanopartiküller ve viral vektörler."
          }
        },
        timeline: {
          title: "Genetik Hastalık Devrimi Zaman Çizelgesi",
          sickleCell: "Orak Hücre Hastalığı",
          duchenne: "Duchenne Kas Distrofisi", 
          huntington: "Huntington Hastalığı",
          allMonogenic: "Tüm Monogenik Bozukluklar",
          cured2024: "Tedavi Edildi 2024",
          year2026: "2026",
          year2028: "2028",
          year2030: "2030"
        },
        promise: {
          title: "Kutsal Söz",
          description: "18 gen terapisi şirketini 250M$+ taahhütle destekleyerek, 2030'dan sonra doğan hiçbir çocuğun düzeltilebilir genetik durumdan muzdarip olmamasını garanti ediyoruz."
        }
      },
      multipleSclerosis: {
        title: "Multiple Skleroz: Kutsal Ağın İyileştirilmesi",
        description: "İnsan sinir sistemi yaratılıştaki en kutsal ağdır—düşünceleri, duyguları ve bilinci aktarır. MS miyelin kılıflarına zarar verdiğinde sadece belirtileri tedavi etmiyoruz. İnsan deneyiminin yollarını rejeneratif olarak yeniliyoruz.",
        breakthrough: {
          title: "Çığır Açma: Oligodendrosit Rejenerasyonu",
          description: "Araştırma ortaklarımız mühendislik oligodendrosit öncül hücrelerini kullanarak remiyelinasyonu başarıyla indükleyerek sinir iletim hızını daha önce hasarlı sinir yollarında normal seviyelerin %97'sine geri getirdi."
        },
        features: {
          reprogramming: {
            title: "Hücresel Yeniden Programlama",
            description: "Transkripsyon faktörü karışımları yoluyla hasta fibroblastlarını fonksiyonel oligodendrositlere dönüştürerek kişiselleştirilmiş tamir hücreleri yaratma."
          },
          matrices: {
            title: "Nöroprotektif Matrisler",
            description: "Kontrollü büyüme faktörü salınımı yoluyla sinir rejenerasyonunu yönlendiren ve daha fazla demiyelinasyonu önleyen enjekte edilebilir hidrojel iskeleleri."
          }
        },
        evolution: {
          title: "MS Tedavi Evrimi",
          current: "Mevcut Terapiler",
          remyelination: "Remiyelinasyon Terapisi",
          complete: "Tam Rejenerasyon",
          slowProgression: "Yavaş İlerleme",
          repairDamage: "Hasarı Onar",
          fullRecovery: "Tam İyileşme",
          efficacy30: "%30 etkinlik - Sadece hastalık yönetimi",
          restoration75: "%75 restorasyon - Klinik denemeler 2026",
          function95: "%95 sinir fonksiyonu - 2030 hedefi"
        },
        impact: {
          title: "Kutsal Etki",
          description: "Tekerlekli sandalyeye bağlı hastaların tekrar yürümesini, kayıp anıların geri dönmesini, felçli uzuvların düşünceye yanıt vermesini hayal edin. Bu sinir rejenerasyonunun kutsal çalışmasıdır."
        }
      },
      cancer: {
        title: "Kanser: Hücresel İsyanı Sonlandırma",
        description: "Kanser hücresel isyandır—normal hücreler kutsal amaçlarını terk ederek sınırsız çoğalır. CAR-T hücre terapisi, immünoterapi ve hassas tıp aracılığıyla bağışıklık sistemini bu asilerini tanıyıp yok etmek için eğitiyoruz.",
        breakthrough: {
          title: "Devrimci Yaklaşım: Evrensel CAR-T Hücreleri",
          description: "Fonladığımız ekipler tüm hastalarda çalışan allojenik CAR-T hücrelerini mühendisledi, kişiselleştirilmiş üretim ihtiyacını ortadan kaldırdı. Bu 'rafa hazır' kanser savaşçıları daha önce tedavi edilemeyen vakalarda %89 tam remisyon oranları elde ediyor."
        },
        features: {
          liquidBiopsy: {
            title: "Sıvı Biyopsi Hassasiyeti",
            description: "Dolaşan tümör DNA analizi görüntülemeden 6-12 ay önce kanser nüksünü tespit ederek önleyici müdahaleyi mümkün kılıyor."
          },
          microenvironment: {
            title: "Tümör Mikroçevre Mühendisliği",
            description: "Mühendislik sitokinler aracılığıyla immünosüpresif tümör ortamlarını immün-aktive edici bölgelere yeniden programlama."
          }
        },
        progress: {
          title: "Kanser Eliminasyon İlerlemesi",
          bloodCancers: "Kan Kanserleri",
          solidTumors: "Solid Tümörler",
          metastatic: "Metastatik Hastalık",
          remission89: "%89 Remisyon",
          response67: "%67 Yanıt",
          control45: "%45 Kontrol",
          carTTherapy: "CAR-T terapisi",
          combinationTherapy: "Kombinasyon terapisi",
          novelImmunotherapy: "Yeni immünoterapi"
        },
        goal: {
          title: "Nihai Hedef",
          description: "2030'a kadar tüm kanser türlerinde %95 tedavi oranlarını hedefliyoruz. Kanser ölüm cezası yerine kısa, tedavi edilebilir bir rahatsızlık haline gelecek."
        }
      },
      aging: {
        title: "Hücresel Yaşlanma: Zamanın Kendisini Tersine Çevirme",
        description: "Yaşlanma kaçınılmaz değil—tedavi edebileceğimiz bir hastalık. Hücresel yeniden programlama, telomer uzatma ve yaşlı hücre temizliği yoluyla moleküler saati kelimenin tam anlamıyla geriye çeviriyoruz. 200+ yıl yaşayacak ilk kişi zaten doğdu.",
        breakthrough: {
          title: "Çığır Açma: Kısmi Hücresel Yeniden Programlama",
          description: "Yamanaka faktör terapisi hücresel kimliği kaybetmeden insan hücrelerinde yaşlanma belirteçlerini 10-20 yıl başarıyla tersine çevirdi. Erken denemeler doku rejenerasyonu ve yaşlı organlarda restore fonksiyon gösteriyor."
        },
        features: {
          senescent: {
            title: "Yaşlı Hücre Eliminasyonu",
            description: "Sağlıklı doku mimarisini korurken yaşlı, işlevsiz hücreleri seçici olarak yok eden senolitikler."
          },
          telomere: {
            title: "Telomer Restorasyonu",
            description: "Somatik hücrelerde telomerazı yeniden aktive etmek için gen terapisi, hücresel yaşam süresini kanser riski olmadan sınırsız uzatıyor."
          }
        },
        timeline: {
          title: "Uzun Yaşam Müdahale Zaman Çizelgesi",
          currentLifespan: "Mevcut Yaşam Süresi",
          withTherapy: "Anti-Yaşlanma Terapisi İle",
          fullRegenerative: "Tam Rejeneratif Tıp",
          years80: "~80 yıl",
          years120: "~120 yıl",
          years200: "200+ yıl",
          naturalAging: "Doğal yaşlanma süreci",
          availableBy2030: "2030'da mevcut",
          theoreticalMax: "2040'ta teorik maksimum"
        },
        investment: {
          title: "200M$ Anti-Yaşlanma Yatırımı",
          description: "Ölümü isteğe bağlı yapmak için senolitikler, hücresel yeniden programlama ve rejeneratif terapiler geliştiren 25+ uzun yaşam şirketini destekliyor."
        }
      },
      convergence: {
        title: "Kutsal Teknolojilerin Yakınsaması",
        subtitle: "Genetik mühendislik kök hücre terapisiyle buluştuğunda, AI tasarımlı ilaçlar hücresel yeniden programlamayla birleştiğinde, nanoteknoloji hassas moleküler cerrahiyi mümkün kıldığında—atalarımızın sadece hayal edebileceği tıbbi mucizeler gerçekleştiriyoruz.",
        personalizedGene: {
          title: "Kişiselleştirilmiş Gen Tıbbı",
          description: "Her hasta özellikle kendi genetik profili için tasarlanmış terapiler alıyor, etkinliği maksimize ederken yan etkileri minimize ediyor."
        },
        regenerativeOrgans: {
          title: "Rejeneratif Organlar",
          description: "Hasta kök hücrelerinden laboratuvarda yetiştirilen organlar nakil reddini ve organ kıtlığı krizlerini kalıcı olarak ortadan kaldırıyor."
        },
        molecularSurgery: {
          title: "Moleküler Cerrahi",
          description: "Nanorobotlar hassas hücresel onarımlar yapıyor, plaklarını kaldırıyor, mutasyonları düzeltiyor ve hücresel fonksiyonu moleküler seviyede optimize ediyor."
        },
        quote: "Genleri yazılım gibi düzenlediğimizde, organları bahçe gibi yetiştirdiğimizde ve hücreleri saat gibi tamir ettiğimizde—ölüm isteğe bağlı hale gelir."
      }
    }
  }
};

export default function HealthcarePage() {
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

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  const currentContent = content[selectedLanguage];

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
            src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/20 to-white/40"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="mb-6 sm:mb-12">
            <Heart className="w-8 h-8 sm:w-12 sm:h-12 mx-auto text-blue-400 mb-4 sm:mb-8" />
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight mb-6 sm:mb-12 leading-tight text-gray-900">
            {currentContent.hero.title1}
            <span className="block font-light text-blue-600 mt-2 sm:mt-4">
              {currentContent.hero.title2}
            </span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-2xl md:text-3xl font-light text-gray-600 leading-relaxed mb-4 sm:mb-8">
              {currentContent.hero.subtitle1}
            </p>
            <p className="text-base sm:text-xl md:text-2xl font-light text-gray-500 leading-relaxed">
              {currentContent.hero.subtitle2}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extralight text-gray-900 mb-6 sm:mb-12 leading-tight">
              {currentContent.mission.title}
              <span className="block text-xl sm:text-3xl md:text-4xl font-light text-blue-600 mt-3 sm:mt-6">
                {currentContent.mission.subtitle}
              </span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-20 items-start">
            <div className="space-y-6 sm:space-y-10">
              <div>
                <h3 className="text-lg sm:text-2xl font-light text-gray-900 mb-3 sm:mb-6">{currentContent.mission.fromDiagnosis.title}</h3>
                <p className="text-sm sm:text-lg font-light text-gray-600 leading-relaxed">
                  {currentContent.mission.fromDiagnosis.content}
                </p>
              </div>
              
              <div>
                <h3 className="text-lg sm:text-2xl font-light text-gray-900 mb-3 sm:mb-6">{currentContent.mission.cellularRegeneration.title}</h3>
                <p className="text-sm sm:text-lg font-light text-gray-600 leading-relaxed">
                  {currentContent.mission.cellularRegeneration.content}
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl sm:rounded-3xl p-6 sm:p-12 border border-blue-100">
              <div className="space-y-4 sm:space-y-8">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Microscope className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-base sm:text-lg font-normal text-gray-900 mb-1 sm:mb-2">{currentContent.mission.features.precisionMedicine.title}</h4>
                    <p className="text-sm sm:text-base text-gray-600 font-light">{currentContent.mission.features.precisionMedicine.description}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Dna className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-base sm:text-lg font-normal text-gray-900 mb-1 sm:mb-2">{currentContent.mission.features.geneEditing.title}</h4>
                    <p className="text-sm sm:text-base text-gray-600 font-light">{currentContent.mission.features.geneEditing.description}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-base sm:text-lg font-normal text-gray-900 mb-1 sm:mb-2">{currentContent.mission.features.regenerativeTherapies.title}</h4>
                    <p className="text-sm sm:text-base text-gray-600 font-light">{currentContent.mission.features.regenerativeTherapies.description}</p>
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
              {currentContent.supportFramework.title}
            </h2>
            <p className="text-base sm:text-xl font-light text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {currentContent.supportFramework.subtitle}
            </p>
          </div>

          {/* Mobil için horizontal scroll, desktop için grid */}
          <div className="md:grid md:grid-cols-3 md:gap-12 mb-12 sm:mb-20">
            {/* Mobile horizontal scroll container */}
            <div className="md:hidden flex gap-6 overflow-x-auto pb-4 px-1 -mx-1 snap-x snap-mandatory">
              <div className="flex-none w-[280px] snap-start text-center bg-white rounded-2xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-light text-gray-900 mb-3">{currentContent.supportFramework.researchInstitutions.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-4 text-sm">
                  {currentContent.supportFramework.researchInstitutions.description}
                </p>
                <div className="space-y-2 text-xs text-gray-500 font-light">
                  {currentContent.supportFramework.researchInstitutions.features.map((feature, index) => (
                    <p key={index}>• {feature}</p>
                  ))}
                </div>
              </div>

              <div className="flex-none w-[280px] snap-start text-center bg-white rounded-2xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-light text-gray-900 mb-3">{currentContent.supportFramework.biotechStartups.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-4 text-sm">
                  {currentContent.supportFramework.biotechStartups.description}
                </p>
                <div className="space-y-2 text-xs text-gray-500 font-light">
                  {currentContent.supportFramework.biotechStartups.features.map((feature, index) => (
                    <p key={index}>• {feature}</p>
                  ))}
                </div>
              </div>

              <div className="flex-none w-[280px] snap-start text-center bg-white rounded-2xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <HandHeart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-light text-gray-900 mb-3">{currentContent.supportFramework.individualResearchers.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-4 text-sm">
                  {currentContent.supportFramework.individualResearchers.description}
                </p>
                <div className="space-y-2 text-xs text-gray-500 font-light">
                  {currentContent.supportFramework.individualResearchers.features.map((feature, index) => (
                    <p key={index}>• {feature}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop grid layout */}
            <div className="hidden md:block text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-6">{currentContent.supportFramework.researchInstitutions.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                {currentContent.supportFramework.researchInstitutions.description}
              </p>
              <div className="space-y-3 text-sm text-gray-500 font-light">
                {currentContent.supportFramework.researchInstitutions.features.map((feature, index) => (
                  <p key={index}>• {feature}</p>
                ))}
              </div>
            </div>

            <div className="hidden md:block text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-6">{currentContent.supportFramework.biotechStartups.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                {currentContent.supportFramework.biotechStartups.description}
              </p>
              <div className="space-y-3 text-sm text-gray-500 font-light">
                {currentContent.supportFramework.biotechStartups.features.map((feature, index) => (
                  <p key={index}>• {feature}</p>
                ))}
              </div>
            </div>

            <div className="hidden md:block text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <HandHeart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-6">{currentContent.supportFramework.individualResearchers.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                {currentContent.supportFramework.individualResearchers.description}
              </p>
              <div className="space-y-3 text-sm text-gray-500 font-light">
                {currentContent.supportFramework.individualResearchers.features.map((feature, index) => (
                  <p key={index}>• {feature}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Support Types */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-12 border border-gray-100">
            <h3 className="text-xl sm:text-3xl font-light text-gray-900 mb-6 sm:mb-12 text-center">
              {currentContent.supportFramework.additionalSupport.title}
            </h3>
            
            {/* Mobile horizontal scroll for additional support */}
            <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8">
              <div className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
                <div className="flex-none w-64 snap-start">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                    <Target className="w-4 h-4 text-orange-600" />
                  </div>
                  <h4 className="text-base font-normal text-gray-900 mb-3">
                    {currentContent.supportFramework.additionalSupport.emergencyFunding.title}
                  </h4>
                  <p className="text-gray-600 font-light text-xs leading-relaxed">
                    {currentContent.supportFramework.additionalSupport.emergencyFunding.description}
                  </p>
                </div>
                
                <div className="flex-none w-64 snap-start">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                    <Heart className="w-4 h-4 text-green-600" />
                  </div>
                  <h4 className="text-base font-normal text-gray-900 mb-3">
                    {currentContent.supportFramework.additionalSupport.humanitarianHealth.title}
                  </h4>
                  <p className="text-gray-600 font-light text-xs leading-relaxed">
                    {currentContent.supportFramework.additionalSupport.humanitarianHealth.description}
                  </p>
                </div>
                
                <div className="flex-none w-64 snap-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                    <Building className="w-4 h-4 text-blue-600" />
                  </div>
                  <h4 className="text-base font-normal text-gray-900 mb-3">
                    {currentContent.supportFramework.additionalSupport.technologyTransfer.title}
                  </h4>
                  <p className="text-gray-600 font-light text-xs leading-relaxed">
                    {currentContent.supportFramework.additionalSupport.technologyTransfer.description}
                  </p>
                </div>
                
                <div className="flex-none w-64 snap-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                    <Globe className="w-4 h-4 text-purple-600" />
                  </div>
                  <h4 className="text-base font-normal text-gray-900 mb-3">
                    {currentContent.supportFramework.additionalSupport.globalCollaboration.title}
                  </h4>
                  <p className="text-gray-600 font-light text-xs leading-relaxed">
                    {currentContent.supportFramework.additionalSupport.globalCollaboration.description}
                  </p>
                </div>
              </div>

              {/* Desktop grid */}
              <div className="hidden md:block">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-5 h-5 text-orange-600" />
                </div>
                <h4 className="text-lg font-normal text-gray-900 mb-4">
                  {currentContent.supportFramework.additionalSupport.emergencyFunding.title}
                </h4>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  {currentContent.supportFramework.additionalSupport.emergencyFunding.description}
                </p>
              </div>
              
              <div className="hidden md:block">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-5 h-5 text-green-600" />
                </div>
                <h4 className="text-lg font-normal text-gray-900 mb-4">
                  {currentContent.supportFramework.additionalSupport.humanitarianHealth.title}
                </h4>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  {currentContent.supportFramework.additionalSupport.humanitarianHealth.description}
                </p>
              </div>
              
              <div className="hidden md:block">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Building className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="text-lg font-normal text-gray-900 mb-4">
                  {currentContent.supportFramework.additionalSupport.technologyTransfer.title}
                </h4>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  {currentContent.supportFramework.additionalSupport.technologyTransfer.description}
                </p>
              </div>
              
              <div className="hidden md:block">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-5 h-5 text-purple-600" />
                </div>
                <h4 className="text-lg font-normal text-gray-900 mb-4">
                  {currentContent.supportFramework.additionalSupport.globalCollaboration.title}
                </h4>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  {currentContent.supportFramework.additionalSupport.globalCollaboration.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Implementation Strategy */}
      <section className="py-16 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extralight text-gray-900 mb-4 sm:mb-8">
              {currentContent.globalStrategy.title}
            </h2>
            <p className="text-base sm:text-xl font-light text-gray-600 max-w-4xl mx-auto leading-relaxed mb-4 sm:mb-8">
              {currentContent.globalStrategy.subtitle1}
            </p>
            <p className="text-sm sm:text-lg font-light text-red-600 max-w-3xl mx-auto leading-relaxed">
              {currentContent.globalStrategy.subtitle2}
            </p>
          </div>

          <div className="space-y-12 sm:space-y-20">
            {/* Phase 1 */}
            <div className="grid lg:grid-cols-3 gap-6 sm:gap-12 items-center">
              <div className="lg:col-span-2">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mr-4 sm:mr-6 shadow-lg">
                    <span className="text-base sm:text-lg font-light text-white">01</span>
                  </div>
                  <h3 className="text-xl sm:text-3xl font-light text-gray-900">Regulatory-Independent Zones</h3>
                </div>
                <p className="text-sm sm:text-lg font-light text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  {currentContent.globalStrategy.phase1.description}
                </p>
                <div className="bg-red-50 border-l-4 border-red-400 p-4 sm:p-6 mb-4 sm:mb-6">
                  <p className="text-red-800 font-light italic text-sm sm:text-base">
                    {currentContent.globalStrategy.phase1.quote}
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-3 sm:gap-6 text-xs sm:text-sm font-light text-gray-500">
                  <div>
                    {currentContent.globalStrategy.phase1.features.left.map((feature, index) => (
                      <p key={index}>• {feature}</p>
                    ))}
                  </div>
                  <div>
                    {currentContent.globalStrategy.phase1.features.right.map((feature, index) => (
                      <p key={index}>• {feature}</p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-orange-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center border border-red-200">
                <Target className="w-12 h-12 sm:w-16 sm:h-16 text-red-500 mx-auto mb-4 sm:mb-6" />
                <h4 className="text-base sm:text-lg font-normal text-gray-900 mb-1 sm:mb-2">2028-2030</h4>
                <p className="text-gray-600 font-light text-sm">Breaking regulatory bottlenecks</p>
                <div className="mt-3 sm:mt-4 text-xs text-red-600 font-medium">
                  {currentContent.globalStrategy.phase1.phase}
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="grid lg:grid-cols-3 gap-6 sm:gap-12 items-center">
              <div className="lg:col-span-2">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4 sm:mr-6 shadow-lg">
                    <span className="text-base sm:text-lg font-light text-white">02</span>
                  </div>
                  <h3 className="text-xl sm:text-3xl font-light text-gray-900">Demonstrating Superiority</h3>
                </div>
                <p className="text-sm sm:text-lg font-light text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  {currentContent.globalStrategy.phase2.description}
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 sm:p-6 mb-4 sm:mb-6">
                  <p className="text-blue-800 font-light italic text-sm sm:text-base">
                    {currentContent.globalStrategy.phase2.quote}
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-3 sm:gap-6 text-xs sm:text-sm font-light text-gray-500">
                  <div>
                    {currentContent.globalStrategy.phase2.features.left.map((feature, index) => (
                      <p key={index}>• {feature}</p>
                    ))}
                  </div>
                  <div>
                    {currentContent.globalStrategy.phase2.features.right.map((feature, index) => (
                      <p key={index}>• {feature}</p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center border border-blue-200">
                <Microscope className="w-12 h-12 sm:w-16 sm:h-16 text-blue-500 mx-auto mb-4 sm:mb-6" />
                <h4 className="text-base sm:text-lg font-normal text-gray-900 mb-1 sm:mb-2">2030-2032</h4>
                <p className="text-gray-600 font-light text-sm">Proving superiority through results</p>
                <div className="mt-3 sm:mt-4 text-xs text-blue-600 font-medium">
                  {currentContent.globalStrategy.phase2.phase}
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="grid lg:grid-cols-3 gap-6 sm:gap-12 items-center">
              <div className="lg:col-span-2">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4 sm:mr-6 shadow-lg">
                    <span className="text-base sm:text-lg font-light text-white">03</span>
                  </div>
                  <h3 className="text-xl sm:text-3xl font-light text-gray-900">Global System Replacement</h3>
                </div>
                <p className="text-sm sm:text-lg font-light text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  {currentContent.globalStrategy.phase3.description}
                </p>
                <div className="bg-green-50 border-l-4 border-green-400 p-4 sm:p-6 mb-4 sm:mb-6">
                  <p className="text-green-800 font-light italic text-sm sm:text-base">
                    {currentContent.globalStrategy.phase3.quote}
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-3 sm:gap-6 text-xs sm:text-sm font-light text-gray-500">
                  <div>
                    {currentContent.globalStrategy.phase3.features.left.map((feature, index) => (
                      <p key={index}>• {feature}</p>
                    ))}
                  </div>
                  <div>
                    {currentContent.globalStrategy.phase3.features.right.map((feature, index) => (
                      <p key={index}>• {feature}</p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center border border-green-200">
                <Globe className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto mb-4 sm:mb-6" />
                <h4 className="text-base sm:text-lg font-normal text-gray-900 mb-1 sm:mb-2">2032-2035</h4>
                <p className="text-gray-600 font-light text-sm">Complete system transformation</p>
                <div className="mt-3 sm:mt-4 text-xs text-green-600 font-medium">
                  {currentContent.globalStrategy.phase3.phase}
                </div>
              </div>
            </div>
          </div>

          {/* Promise Section */}
          <div className="mt-16 sm:mt-20 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center text-white">
            <h3 className="text-xl sm:text-3xl font-light mb-4 sm:mb-6">{currentContent.globalStrategy.promise.title}</h3>
            <p className="text-sm sm:text-lg font-light text-gray-200 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed">
              {currentContent.globalStrategy.promise.description}
            </p>
            <div className="grid grid-cols-3 gap-4 sm:gap-8">
              <div>
                <div className="text-xl sm:text-3xl font-light text-blue-400 mb-2">{currentContent.globalStrategy.promise.metrics.treatable.value}</div>
                <div className="text-xs sm:text-sm text-gray-300">{currentContent.globalStrategy.promise.metrics.treatable.label}</div>
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-light text-green-400 mb-2">{currentContent.globalStrategy.promise.metrics.reduction.value}</div>
                <div className="text-xs sm:text-sm text-gray-300">{currentContent.globalStrategy.promise.metrics.reduction.label}</div>
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-light text-purple-400 mb-2">{currentContent.globalStrategy.promise.metrics.improvement.value}</div>
                <div className="text-xs sm:text-sm text-gray-300">{currentContent.globalStrategy.promise.metrics.improvement.label}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Medical Technologies - Deep Dive */}
      <section className="py-16 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extralight text-gray-900 mb-4 sm:mb-8">
              {currentContent.revolutionaryTech.title}
            </h2>
            <p className="text-base sm:text-xl font-light text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {currentContent.revolutionaryTech.subtitle}
            </p>
          </div>

          {/* Technology Cards - Mobile Horizontal Scroll */}
          <div className="lg:space-y-24">
            {/* Mobile horizontal scroll container */}
            <div className="lg:hidden flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory">
              {/* Genetic Therapies Card */}
              <div className="flex-none w-[320px] snap-start bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <Dna className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-light text-gray-900">{currentContent.revolutionaryTech.geneticTherapies.title}</h3>
                </div>
                <p className="text-sm font-light text-gray-600 leading-relaxed mb-4">
                  {currentContent.revolutionaryTech.geneticTherapies.description.slice(0, 150)}...
                </p>
                
                <div className="bg-purple-100 rounded-lg p-4 border-l-4 border-purple-400 mb-4">
                  <h4 className="font-medium text-purple-800 mb-2 text-sm">{currentContent.revolutionaryTech.geneticTherapies.breakthrough.title}</h4>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {currentContent.revolutionaryTech.geneticTherapies.breakthrough.description.slice(0, 120)}...
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-100 rounded-md flex items-center justify-center mt-0.5">
                      <Heart className="w-3 h-3 text-purple-600" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1 text-sm">{currentContent.revolutionaryTech.geneticTherapies.features.monogenic.title}</h5>
                      <p className="text-xs text-gray-600">{currentContent.revolutionaryTech.geneticTherapies.features.monogenic.description.slice(0, 80)}...</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Multiple Sclerosis Card */}
              <div className="flex-none w-[320px] snap-start bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <Microscope className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-light text-gray-900">{currentContent.revolutionaryTech.multipleSclerosis.title}</h3>
                </div>
                <p className="text-sm font-light text-gray-600 leading-relaxed mb-4">
                  {currentContent.revolutionaryTech.multipleSclerosis.description.slice(0, 150)}...
                </p>
                
                <div className="bg-blue-100 rounded-lg p-4 border-l-4 border-blue-400 mb-4">
                  <h4 className="font-medium text-blue-800 mb-2 text-sm">{currentContent.revolutionaryTech.multipleSclerosis.breakthrough.title}</h4>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {currentContent.revolutionaryTech.multipleSclerosis.breakthrough.description.slice(0, 120)}...
                  </p>
                </div>

                <div className="bg-white rounded-lg p-3 border border-blue-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900 text-sm">{currentContent.revolutionaryTech.multipleSclerosis.evolution.complete}</span>
                    <span className="text-blue-700 font-bold text-sm">{currentContent.revolutionaryTech.multipleSclerosis.evolution.fullRecovery}</span>
                  </div>
                  <div className="w-full bg-blue-200 rounded-full h-1.5">
                    <div className="bg-green-500 h-1.5 rounded-full" style={{width: '95%'}}></div>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">{currentContent.revolutionaryTech.multipleSclerosis.evolution.function95}</div>
                </div>
              </div>

              {/* Cancer Card */}
              <div className="flex-none w-[320px] snap-start bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 border border-red-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-light text-gray-900">{currentContent.revolutionaryTech.cancer.title}</h3>
                </div>
                <p className="text-sm font-light text-gray-600 leading-relaxed mb-4">
                  {currentContent.revolutionaryTech.cancer.description.slice(0, 150)}...
                </p>
                
                <div className="bg-red-100 rounded-lg p-4 border-l-4 border-red-400 mb-4">
                  <h4 className="font-medium text-red-800 mb-2 text-sm">{currentContent.revolutionaryTech.cancer.breakthrough.title}</h4>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {currentContent.revolutionaryTech.cancer.breakthrough.description.slice(0, 120)}...
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-gray-900 text-sm">{currentContent.revolutionaryTech.cancer.progress.bloodCancers}</span>
                      <div className="text-red-700 font-bold text-sm">{currentContent.revolutionaryTech.cancer.progress.remission89}</div>
                    </div>
                    <div className="w-full bg-red-200 rounded-full h-1.5">
                      <div className="bg-green-600 h-1.5 rounded-full" style={{width: '89%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Aging Card */}
              <div className="flex-none w-[320px] snap-start bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <Dna className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-light text-gray-900">{currentContent.revolutionaryTech.aging.title}</h3>
                </div>
                <p className="text-sm font-light text-gray-600 leading-relaxed mb-4">
                  {currentContent.revolutionaryTech.aging.description.slice(0, 150)}...
                </p>
                
                <div className="bg-green-100 rounded-lg p-4 border-l-4 border-green-400 mb-4">
                  <h4 className="font-medium text-green-800 mb-2 text-sm">{currentContent.revolutionaryTech.aging.breakthrough.title}</h4>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {currentContent.revolutionaryTech.aging.breakthrough.description.slice(0, 120)}...
                  </p>
                </div>

                <div className="bg-white rounded-lg p-3 border border-green-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900 text-sm">{currentContent.revolutionaryTech.aging.timeline.fullRegenerative}</span>
                    <span className="text-green-700 font-bold text-sm">{currentContent.revolutionaryTech.aging.timeline.years200}</span>
                  </div>
                  <div className="w-full bg-green-200 rounded-full h-1.5">
                    <div className="bg-blue-600 h-1.5 rounded-full" style={{width: '75%'}}></div>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">{currentContent.revolutionaryTech.aging.timeline.theoreticalMax}</div>
                </div>
              </div>
            </div>

            {/* Desktop version - keep original large layouts but optimize */}
            <div className="hidden lg:block">
              {/* Genetic Therapies: The Sacred Domain */}
              <div className="mb-16 sm:mb-24">
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-start">
                  <div>
                    <div className="flex items-center mb-6 sm:mb-8">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center mr-4 sm:mr-6 shadow-lg">
                        <Dna className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-light text-gray-900">{currentContent.revolutionaryTech.geneticTherapies.title}</h3>
                    </div>
                    <p className="text-base sm:text-lg font-light text-gray-600 leading-relaxed mb-6 sm:mb-8">
                      {currentContent.revolutionaryTech.geneticTherapies.description}
                    </p>
                    
                    <div className="bg-purple-50 rounded-xl p-4 sm:p-6 border-l-4 border-purple-400 mb-6 sm:mb-8">
                      <h4 className="font-medium text-purple-800 mb-2 sm:mb-3">{currentContent.revolutionaryTech.geneticTherapies.breakthrough.title}</h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {currentContent.revolutionaryTech.geneticTherapies.breakthrough.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mt-1">
                          <Heart className="w-4 h-4 text-purple-600" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900 mb-1">{currentContent.revolutionaryTech.geneticTherapies.features.monogenic.title}</h5>
                          <p className="text-sm text-gray-600">{currentContent.revolutionaryTech.geneticTherapies.features.monogenic.description}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mt-1">
                          <Lightbulb className="w-4 h-4 text-purple-600" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900 mb-1">{currentContent.revolutionaryTech.geneticTherapies.features.delivery.title}</h5>
                          <p className="text-sm text-gray-600">{currentContent.revolutionaryTech.geneticTherapies.features.delivery.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-purple-200">
                    <h4 className="text-lg sm:text-xl font-medium text-gray-900 mb-4 sm:mb-6">{currentContent.revolutionaryTech.geneticTherapies.timeline.title}</h4>
                    <div className="space-y-4 sm:space-y-6">
                      <div className="flex items-center justify-between p-3 sm:p-4 bg-white rounded-lg border border-purple-200">
                        <span className="font-medium text-gray-900 text-sm sm:text-base">{currentContent.revolutionaryTech.geneticTherapies.timeline.sickleCell}</span>
                        <span className="bg-green-100 text-green-700 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-medium">{currentContent.revolutionaryTech.geneticTherapies.timeline.cured2024}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 sm:p-4 bg-white rounded-lg border border-purple-200">
                        <span className="font-medium text-gray-900 text-sm sm:text-base">{currentContent.revolutionaryTech.geneticTherapies.timeline.duchenne}</span>
                        <span className="bg-purple-100 text-purple-700 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-medium">{currentContent.revolutionaryTech.geneticTherapies.timeline.year2026}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 sm:p-4 bg-white rounded-lg border border-purple-200">
                        <span className="font-medium text-gray-900 text-sm sm:text-base">{currentContent.revolutionaryTech.geneticTherapies.timeline.huntington}</span>
                        <span className="bg-purple-100 text-purple-700 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-medium">{currentContent.revolutionaryTech.geneticTherapies.timeline.year2028}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 sm:p-4 bg-white rounded-lg border border-purple-200">
                        <span className="font-medium text-gray-900 text-sm sm:text-base">{currentContent.revolutionaryTech.geneticTherapies.timeline.allMonogenic}</span>
                        <span className="bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-medium">{currentContent.revolutionaryTech.geneticTherapies.timeline.year2030}</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-purple-100 rounded-lg">
                      <h5 className="font-medium text-purple-800 mb-2">{currentContent.revolutionaryTech.geneticTherapies.promise.title}</h5>
                      <p className="text-xs sm:text-sm text-purple-700">
                        {currentContent.revolutionaryTech.geneticTherapies.promise.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Convergence Section */}
          <div className="mt-16 sm:mt-24 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center text-white">
            <h3 className="text-xl sm:text-3xl font-light mb-4 sm:mb-6">{currentContent.revolutionaryTech.convergence.title}</h3>
            <p className="text-sm sm:text-lg font-light text-gray-200 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed">
              {currentContent.revolutionaryTech.convergence.subtitle}
            </p>
            
            {/* Mobile horizontal scroll for convergence items */}
            <div className="md:grid md:grid-cols-3 md:gap-8">
              <div className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
                <div className="flex-none w-64 snap-start text-center p-4 bg-white/10 rounded-xl">
                  <h4 className="text-base font-medium text-white mb-2">{currentContent.revolutionaryTech.convergence.personalizedGene.title}</h4>
                  <p className="text-xs text-gray-300">{currentContent.revolutionaryTech.convergence.personalizedGene.description}</p>
                </div>
                <div className="flex-none w-64 snap-start text-center p-4 bg-white/10 rounded-xl">
                  <h4 className="text-base font-medium text-white mb-2">{currentContent.revolutionaryTech.convergence.regenerativeOrgans.title}</h4>
                  <p className="text-xs text-gray-300">{currentContent.revolutionaryTech.convergence.regenerativeOrgans.description}</p>
                </div>
                <div className="flex-none w-64 snap-start text-center p-4 bg-white/10 rounded-xl">
                  <h4 className="text-base font-medium text-white mb-2">{currentContent.revolutionaryTech.convergence.molecularSurgery.title}</h4>
                  <p className="text-xs text-gray-300">{currentContent.revolutionaryTech.convergence.molecularSurgery.description}</p>
                </div>
              </div>

              {/* Desktop grid */}
              <div className="hidden md:block text-center">
                <h4 className="text-xl font-medium text-white mb-4">{currentContent.revolutionaryTech.convergence.personalizedGene.title}</h4>
                <p className="text-gray-300">{currentContent.revolutionaryTech.convergence.personalizedGene.description}</p>
              </div>
              <div className="hidden md:block text-center">
                <h4 className="text-xl font-medium text-white mb-4">{currentContent.revolutionaryTech.convergence.regenerativeOrgans.title}</h4>
                <p className="text-gray-300">{currentContent.revolutionaryTech.convergence.regenerativeOrgans.description}</p>
              </div>
              <div className="hidden md:block text-center">
                <h4 className="text-xl font-medium text-white mb-4">{currentContent.revolutionaryTech.convergence.molecularSurgery.title}</h4>
                <p className="text-gray-300">{currentContent.revolutionaryTech.convergence.molecularSurgery.description}</p>
              </div>
            </div>

            <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-white/10 rounded-xl border border-white/20">
              <p className="text-sm sm:text-lg font-light italic text-blue-300">
                {currentContent.revolutionaryTech.convergence.quote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Vision */}
      <section className="py-16 sm:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extralight mb-6 sm:mb-12 leading-tight">
            {currentContent.closing.title}
          </h2>
          <div className="space-y-4 sm:space-y-8 text-base sm:text-lg md:text-xl font-light leading-relaxed text-gray-300">
            <p>
              {currentContent.closing.text1}
            </p>
            <p>
              {currentContent.closing.text2}
            </p>
            <p className="text-lg sm:text-2xl md:text-3xl font-light text-white pt-4 sm:pt-8">
              {currentContent.closing.text3}
              <span className="block mt-2 sm:mt-4 text-blue-300">
                {currentContent.closing.text4}
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 
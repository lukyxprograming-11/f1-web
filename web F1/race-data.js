// 1. DATA
// ===== AUSTRÁLIE =====
const races = [
  {
    id: "australie",
    name: "Australian Grand Prix 2026",
    shortName: "Austrálie",
    schedule: [
      { date: "6 března", name: "Trénink 1",       time: "2:30 - 3:30",  result:"výsledek" },
      { date: "6 března", name: "Trénink 2",       time: "6:00 - 7:00",  result:"výsledek" },
      { date: "7 března", name: "Trénink 3",       time: "2:30 - 3:30",  result:"výsledek" },
      { date: "7 března", name: "Kvalifikace",     time: "6:00 - 7:00",  result:"výsledek" },
      { date: "8 března", name: "Závod",           time: "5:00",          result:"výsledek"}
    ], 

    circuit: [ 
            { label: "Délka okruhu", value:  "5.278 km"},
            { label: "Počet kol",    value:  "58 "},
            { label: "První velká cena", value:  "1996"},
            { label: "Délka závodu", value:  "306.124 km"},
            { label: "Nejrychlejší kolo", value:  "1:19.813", extra: "Charles Leclerc (2024)", full: true} 
    ],  

     info: [
      {
        question: "Kdy byl okruh Albert Park postaven?",
        answer: [`Dohoda o pořádání Formule 1 v Melbourne byla uzavřena v roce 1993, přičemž bylo rozhodnuto vytvořit
        okruh kombinací existujících silnic v okolí městského parku Albert Park  především Aughtie Drive a Lakeside Drive 
        (pokud si to chceš projet sám)  s menší zajížďkou přes parkoviště u stadionu Lakeside.`]

      },

      {
        question: "Kdy se zde jela první Velká cena?",
        answer: [
                    `Pouhé čtyři měsíce poté, co Adelaide na konci roku 1995 hostilo svou
                    poslední Velkou cenu Austrálie, se týmy Formule 1 vrátily do Austrálie na
                    první Velkou cenu v Melbourne na začátku roku 1996.`,

                    `Tento závod je nejčastěji připomínán kvůli nechvalně proslulé havárii
                    Martin Brundle ve 3. zatáčce, když se odrazil od zadní části Sauberu
                    Johnny Herbert.`,
                    
]
            
            },

      {
        question: "Jaký je ten okruh?",
        answer:[ `Jako dočasné závodiště může být Albert Park poměrně hrbolatý, 
                  přičemž na začátku víkendu bývá trať často kluzká a postupně se „pogumovává“, 
                  jak probíhají jednotlivé jízdy.`,
                
                `Je to také okruh, který vyžaduje dobře vyladěný podvozek, 
                protože na několika místech tratě potřebují jezdci citlivou a rychle reagující přední část vozu, 
                aby mohli agresivně najíždět do zatáček.`,

                `Melbourne je zároveň jedním z rychlejších okruhů v kalendáři pole position 
                 kolo Lando Norris z roku 2025 bylo zajeto s průměrnou rychlostí výrazně přes 250 km/h.`,
                ]
      },

      {
        question: "Proč tam jet?",
        answer: [ `Často se objevuje na seznamech nejlepších měst světa Melbourne je skvělé po celý rok a ještě lepší je, když do něj dorazí Formule 1.`,
                  `Najdeš tu spoustu barů a restaurací, jsi kousek od pláže a díky tomu, že se závod koná na začátku australského podzimu, bývají teploty velmi příjemné.`,
                  ]
      },

      {
        question: "Kde je nejlepší místo na sledování?",
        answer: [`Pokud chceš sedět na tribuně, zvol buď tribunu Waite s výhledem na 10. zatáčku, 
                  nebo tribunu Brabham na vnější straně 2. zatáčky, odkud můžeš sledovat souboje vozů o pozice v první šikaně.`,

                  `Případně jsou tu i pěkná místa se vstupem bez rezervace na vzdálenější straně jezera 
                    ideálně mezi zatáčkami 8–9 nebo 9–10, pokud chceš takovou pohodovou „F1 piknikovou“ atmosféru.`
   
]
      }
    ]
  },

// ===== ČÍNA =====
  {
    id: "cina",
    name: "FORMULA 1 HEINEKEN CHINESE GRAND PRIX 2026",
    shortName: "Číny",
    schedule: [
      { date: "13 března", name: "Trénink 1",                   time: "2:30 - 3:30",   result:"výsledek" },
      { date: "13 března", name: "Sprintová kvalifikace",       time: "8:30 - 9:14",  result:"výsledek" },
      { date: "14 března", name: "Sprint",                      time: "4:00 - 5:00",  result:"výsledek" },
      { date: "14 března", name: "Kvalifikace",                 time: "8:00 - 9:00",  result:"výsledek" },
      { date: "15 března", name: "Závod",                       time: "8:00",         result:"výsledek" }
    ], 

    circuit: [ 
            { label: "Délka okruhu", value:  "5.451 km"},
            { label: "Počet kol",    value:  "56"},
            { label: "První velká cena", value:  "2004"},
            { label: "Délka závodu", value:  "305.066 km"},
            { label: "Nejrychlejší kolo", value:  "1:32.238", extra: "Michael Schumacher (2004)", full: true} 
    ],  

     info: [
      {
        question: "Kdy byl okruh Shanghai International Circuit postaven?",
        answer: [`V dubnu 2003 byla bažinatá oblast v okrese Jiading v Shanghai vybrána pro budoucnost Formule 1.`,

          `O osmnáct měsíců a přibližně 450 milionů dolarů později byl moderní okruh Shanghai International Circuit dokončen.`,
              ]

      },

      {
        question: "Kdy se zde jela první Velká cena?",
        answer: [
                    `Sezóna 2004 přinesla dva nové závody, jedním z nich byla Velká cena Číny (tím druhým byl Bahrajn). 
                    Pokud měly tyto nové podniky zastavit dominanci Ferrari, 
                    nepodařilo se to Michael Schumacher vyhrál v Bahrajnu, zatímco Rubens Barrichello zvítězil v Číně.`,
                  ]
            
            },

      {
        question: "Jaký je ten okruh?",
        answer:[ `Působivý tvar okruhu při pohledu ze vzduchu je navržen tak, 
                  aby připomínal čínský symbol pro „shang“, tedy „nahoru“ 
                  je stejně působivý i pro jezdce na samotné trati.`,
                
                `Kolo začíná unikátně, když jezdci vletí do stále se utahujících zatáček 1 a 2, než rychle projedou doleva zatáčkami 3 a 4.`,

                `Zatáčky 7 a 8 s velmi vysokým přetížením patří mezi oblíbené u jezdců, 
                přičemž okruh má také jednu z nejdelších rovinek v kalendáři úsek dlouhý 1,2 km mezi zatáčkami 13 a 14.`,
                ]
      },

      {
        question: "Proč tam jet?",
        answer: [ `Shanghai se od začátku tisíciletí proměnila v jedno z nejdynamičtějších a nejživějších měst světa, 
                      což z ní dělá skvělou zastávku pro fanoušky Formule 1.`,
                  `Rozsáhlá čtvrť Pudong je plná moderních barů a skvělých restaurací. A když přijde čas na závody, 
                    stačí nasednout na linku 11 Shanghai Metro a přibližně za 60 minut vystoupit na zastávce Shanghai Circuit.`,
                  ]
      },

      {
        question: "Kde je nejlepší místo na sledování?",
        answer: [`Doporučujeme tribunu K s výhledem na vracečku v zatáčkách 14–15, která nabízí ideální podmínky pro sledování předjížděcích manévrů.`,

                  `Alternativně lze zvolit prostor u 6. zatáčky, dalšího významného místa pro předjíždění právě zde si Daniel Ricciardo zajistil své vítězství v roce 2018 odvážným manévrem na Valtteri Bottas.`
   
]
      }
    ]
  },

// ===== JAPONSKO =====
{
    id: "japonsko",
    name: "FORMULA 1 ARAMCO JAPANESE GRAND PRIX 2026",
    shortName: "Japonska",
    schedule: [
      { date: "27 března", name: "Trénink 1",       time: "3:30 - 4:30",  result:"výsledek" },
      { date: "27 března", name: "Trénink 2",       time: "7:00 - 8:00",  result:"výsledek" },
      { date: "28 března", name: "Trénink 3",       time: "3:30 - 4:30",  result:"výsledek" },
      { date: "28 března", name: "Kvalifikace",     time: "7:00 - 8:00",  result:"výsledek" },
      { date: "29 března", name: "Závod",           time: "7:00",         result:"výsledek"}
    ], 

    circuit: [ 
            { label: "Délka okruhu", value:  "5.807 km"},
            { label: "Počet kol",    value:  "53 "},
            { label: "První velká cena", value:  "1987"},
            { label: "Délka závodu", value:  "307.471 km"},
            { label: "Nejrychlejší kolo", value:  "1:30.965", extra: "Kimi Antonelli (2025)", full: true} 
    ],  

     info: [
      {
        question: "Kdy byl okruh Suzuka Circuit postaven?",
        answer: [`V roce 1962. Soichiro Honda, jehož automobilovou společnost možná znáš, byl muž s velkými ambicemi. 
                  Ve snaze proměnit Honda v automobilovou velmoc se rozhodl, že jeho firma by měla mít vlastní testovací okruh.`,

                  `Nizozemec John Hugenholtz dostal příležitost a navrhl dnes už ikonickou „křížící se“ trať v Suzuce – i když původní návrhy počítaly s tím, 
                  že by se trať křížila nad i pod sebou hned třikrát, což by bylo opravdu zajímavé!`,
                
                ]

      },

      {
        question: "Kdy se zde jela první Velká cena?",
        answer: [
                    `Přestože se většina lidí shoduje, že Suzuka Circuit patří mezi to nejlepší, 
                    co může motorsport nabídnout, japonský okruh se v kalendáři Formule 1 objevil poměrně pozdě – poprvé až v roce 1987.`,

                    `Nigel Mansell si na tento víkend pamatuje velmi dobře, když havaroval v kvalifikaci a nemohl nastoupit do závodu, 
                      čímž daroval titul svého tehdejšího šampionátu svému velkému rivalovi Nelson Piquet.`,
                    ]
            
            },

      {
        question: "Jaký je ten okruh?",
        answer:[ `Ukažte nám závodního jezdce, který nemá rád Suzuka Circuit, a my vám ukážeme lháře.`,
                
                `Tato rychlá trať zůstává jednou z největších jezdeckých výzev, s ikonickými esovitými zatáčkami „S“, dvojicí zatáček Degner, které odměňují odvážné, 
                i adrenalinovou zatáčkou 130R – to vše tvoří sérii vrcholů na jednom z nejzásadnějších okruhů Formule 1.`,

                `A navíc má křížení tratě, což je prostě vždycky super.`,
                ]
      },

      {
        question: "Proč tam jet?",
        answer: [ `Okruh, který byl svědkem nepoměrně velkého množství legendárních momentů Formule 1 (včetně těch mezi Alain Prost a Ayrton Senna), 
                    nabízí také jedinečné fanoušky s nadšením pro „převlékání“ do stylu Formule 1, ruské kolo i skvělé jídlo.`,

                  `Pro většinu z nás je to sice dlouhá cesta, ale možná je lepší si položit jinou otázku: „Proč tam vlastně nejet?“`,
                  ]
      },

      {
        question: "Kde je nejlepší místo na sledování?",
        answer: [`Vyber je na tobě. Tribuny D a E mají výhled na esovité zatáčky „S“, kde můžeš skvěle sledovat, 
                    jak přítlak a odhodlání jezdců fungují v dokonalé souhře při průjezdu těmito plynulými zatáčkami.`,

                  `Další možností je levá část tribuny G, která tě umístí na vnitřní stranu zatáčky 130R, což je opravdu atraktivní místo. 
                    Pokud tě ale zajímá hlavně předjíždění, tribuna I nabízí výhled na vlásenku, kde často dochází k incidentům.`
   
]
      },
    ]
  },

// ===== MIAMI =====
  {
    id: "miami",
    name: "FORMULA 1 CRYPTO.COM MIAMI GRAND PRIX 2026",
    shortName: "Miami",
    schedule: [
      { date: "1 května", name: "Trénink 1",                   time: "18:30 - 19:30",  result:"výsledek" },
      { date: "1 května", name: "Sprintová kvalifikace",       time: "22:30 - 23:14",  result:"výsledek" },
      { date: "2 května", name: "Sprint",                      time: "18:00 - 19:00",  result:"výsledek" },
      { date: "2 května", name: "Kvalifikace",                 time: "22:00 - 23:00",  result:"výsledek" },
      { date: "3 května", name: "Závod",                       time: "22:00",          result:"výsledek" }
    ], 

    circuit: [ 
            { label: "Délka okruhu", value:  "5.412 km"},
            { label: "Počet kol",    value:  "57"},
            { label: "První velká cena", value:  "2022"},
            { label: "Délka závodu", value:  "308.326 km"},
            { label: "Nejrychlejší kolo", value:  "1:29.708", extra: "Max Verstappen (2023)", full: true} 
    ],  

     info: [
      {
        question: "Kdy byl okruh Miami International Autodrome postaven?",
        answer: [`Po svém debutu ve Formuli 1 v květnu 2022 je Miami International Autodrome dočasným okruhem, který je však navržen tak, aby působil jako trvalé závodiště.`,

          `Nachází se v areálu Hard Rock Stadium v Miami Gardens, domově slavného týmu Miami Dolphins z NFL.`,

           `Trať je výsledkem vývojového procesu, během kterého bylo nasimulováno ne méně než 36 různých variant, než se dospělo k finální podobě 
          vzrušujícímu kolu s 19 zatáčkami, které nabízí atmosféru městského okruhu podobnou Albert Park Circuit. `
              ]

      },

      {
        question: "Kdy se zde jela první Velká cena?",
        answer: [
                    `Úvodní Velká cena Miami se konala v roce 2022, 
                      přičemž závod na Floridě se připojil ke svému texaskému protějšku v Austinu 
                      a stal se tak druhým závodem Formule 1 ve Spojených státech v kalendáři a celkově 11. 
                      různým americkým místem, které hostilo podnik mistrovství světa Formule 1.`,
                  ]
            
            },

      {
        question: "Jaký je ten okruh?",
        answer:[ `Velkolepý městský okruh. S Hard Rock Stadium jako svým centrem nabízí trať dlouhá 5,41 km celkem 19 zatáček, tři rovinky, 
                    tři DRS zóny a maximální rychlosti přesahující 350 km/h.`,
                
                `Nechybí ani výškové změny – hlavní z nich se nachází mezi zatáčkami 13 a 16, kde trať vede přes výjezdovou rampu a pod několika nadjezdy po nerovném povrchu.`,

                `Šikana v zatáčkách 14–15 má navíc stoupající nájezd s vrcholem uprostřed a následným klesáním při výjezdu.`,
                ]
      },

      {
        question: "Proč tam jet?",
        answer: [ `Hard Rock Stadium umí vytvořit skvělou atmosféru – hostil šest Super Bowlů, dvě finále Baseball World Series a řadu velkých koncertů.`,

                  `Když ho zasadíš do středu tratě navržené tak, aby podporovala těsné souboje a zároveň splňovala nejvyšší bezpečnostní standardy, získáš ideální podívanou pro diváky.`,

                  `A pak je tu samotné Miami – proslulé svými písečnými plážemi, art deco stylem, pestrou multikulturní atmosférou a bohatou sportovní historií. 
                    Pro každého, kdo navštíví „Sunshine State“, je to prakticky povinná zastávka.`
                  ]
      },

      {
        question: "Kde je nejlepší místo na sledování?",
        answer: [`Při sledování sportovní události na účelově vybudovaném stadionu je obtížné zvolit špatné místo. 
                  Z horního prstence Hard Rock Stadium je navíc možné obsáhnout výhledem prakticky celý okruh, což představuje poměrně unikátní zážitek.`,

                  `Pokud jde o nejlepší místa pro předjíždění, doporučují se sedadla v blízkosti zatáček 1, 11 a 17, která nabízejí nejintenzivnější závodní akci.`
   
]
      }
    ]
  },


  // ===== KANADA =====
  {
    id: "kanada",
    name: "FORMULA 1 LENOVO GRAND PRIX DU CANADA 2026",
    shortName: "Kanady",
    schedule: [
      { date: "22 května", name: "Trénink 1",                   time: "18:30 - 19:30",  result:"výsledek" },
      { date: "22 května", name: "Sprintová kvalifikace",       time: "22:30 - 23:14",  result:"výsledek" },
      { date: "23 května", name: "Sprint",                      time: "18:00 - 19:00",  result:"výsledek" },
      { date: "23 května", name: "Kvalifikace",                 time: "22:00 - 23:00",  result:"výsledek" },
      { date: "24 května", name: "Závod",                       time: "22:00",          result:"výsledek" }
    ], 

    circuit: [ 
            { label: "Délka okruhu", value:  "4.361 km"},
            { label: "Počet kol",    value:  "70"},
            { label: "První velká cena", value:  "1978"},
            { label: "Délka závodu", value:  "305.27 km"},
            { label: "Nejrychlejší kolo", value:  "1:13.078", extra: "Valtteri Bottas (2019)", full: true} 
    ],  

     info: [
      {
        question: "Kdy byl okruh Circuit Gilles-Villeneuve postaven?",
        answer: [`Uměle vytvořený ostrov Île Notre-Dame uprostřed řeky Saint Lawrence River vznikl pro světovou výstavu Expo 67.`,

          `Poté, co výstava a následně i Letní olympijské hry 1976 skončily, se několik chytrých lidí rozhodlo využít silnice na ostrově k vytvoření závodního okruhu. 
              A tak vznikl Circuit Île Notre-Dame, jak se tehdy jmenoval.`,

          
              ]

      },

      {
        question: "Kdy se zde jela první Velká cena?",
        answer: [
                    `Poté, co Velká cena Kanady v 60. a 70. letech hledala své stálé působiště, hostil okruh Circuit Île Notre-Dame závod poprvé v roce 1978.`,

                    `Příznačně zde své první vítězství získal Gilles Villeneuve – na trati, která později ponese jeho jméno.`,
                  ]
            
            },

      {
        question: "Jaký je ten okruh?",
        answer:[ `Tento rychlý okruh s nízkým přítlakem patří mezi oblíbené u jezdců. Trať má spíše charakter „stop-start“, 
                  s mnoha šikanami vyžadujícími intenzivní brzdění a slavnou vlásenkou, která důkladně prověří brzdový systém.`,
                
                `Na výjezdech ze zatáček je však trať rychlá a plynulá, přičemž nejikoničtější část okruhu se nachází na konci kola: Zeď šampionů („Wall of Champions“), 
                    pojmenovaná podle havárií Damon Hill, Jacques Villeneuve a Michael Schumacher během víkendu Velké ceny Kanady 1999.`,

                
                ]
      },

      {
        question: "Proč tam jet?",
        answer: [ `Obyvatelé Montreal si svůj závodní víkend skutečně užívají – toto půvabné město se v týdnu před Velkou cenou proměňuje v centrum oslav Formule 1.`,

                  `Samotný závod pak díky své zelené, přírodní scenérii činí z Circuit Gilles-Villeneuve jedno z nejpohodovějších míst v kalendáři Formule 1.`,

                  
                  ]
      },

      {
        question: "Kde je nejlepší místo na sledování?",
        answer: [`Za nejlepší volbu lze považovat jednu z tribun 15, 21 nebo 24, které obklopují vlásenku.`,

                  `Tato část okruhu vytváří téměř amfiteátrovou atmosféru a zároveň poskytuje ideální výhled na všechny předjížděcí manévry v této zatáčce.`
   
]
      }
    ]
  },

  // ===== Monako =====
  {
    id: "monako",
    name: "FORMULA 1 LOUIS VUITTON GRAND PRIX DE MONACO 2026",
    shortName: "Monaka",
    schedule: [
      { date: "5 června", name: "Trénink 1",                   time: "13:30 - 14:30",  result:"výsledek" },
      { date: "5 června", name: "Trénink 2",                   time: "17:00 - 18:00",  result:"výsledek" },
      { date: "6 června", name: "Trénink 3",                   time: "12:30 - 13:30",  result:"výsledek" },
      { date: "6 června", name: "Kvalifikace",                 time: "16:00 - 17:00",  result:"výsledek" },
      { date: "7 června", name: "Závod",                       time: "15:00",          result:"výsledek" }
    ], 

    circuit: [ 
            { label: "Délka okruhu", value:  "3.337 km"},
            { label: "Počet kol",    value:  "78"},
            { label: "První velká cena", value:  "1950"},
            { label: "Délka závodu", value:  "260.286 km"},
            { label: "Nejrychlejší kolo", value:  "1:12.909", extra: "Lewis Hamilton (2021)", full: true} 
    ],  

     info: [
      {
        question: "Kdy byl okruh Circuit de Monaco postaven?",
        answer: [`V roce 1215 – tak trochu, protože právě tehdy bylo Monaco poprvé založeno jako kolonie Genoa.`,

              ]

      },

      {
        question: "Kdy se zde jela první Velká cena?",
        answer: [
                    `Bylo to v roce 1929, kdy se ulicemi knížectví poprvé rozezněly závodní motory, 
                      poté co výrobce cigaret Antony Noghès rozhodl uspořádat závod spolu se svými kolegy z Automobile Club de Monaco.`,

                    `Závod byl součástí kalendáře již v prvním ročníku mistrovství světa Formule 1 v roce 1950 a od roku 1955 z něj nevypadl.`,
                  ]
            
            },

      {
        question: "Jaký je ten okruh?",
        answer:[ `Neuvěřitelně úzký a naprosto ikonický okruh. Nelson Piquet kdysi výstižně popsal jízdu v Monaku jako „jízdu na kole po obývacím pokoji“… což docela sedí.`,
                
                `Přesto jde o výzvu, kterou téměř všichni jezdci milují – nutí je jet na hraně svých schopností a odměňuje naprostou přesnost na milimetry.`,

                `Předjíždění je však v úzkých ulicích velmi obtížné, což dokládá i Velká cena z roku 2003, během níž nedošlo k jedinému předjížděcímu manévru.`,
                ]
      },

      {
        question: "Proč tam jet?",
        answer: [ `Dovolená na Francouzská riviéra spolu s možností sledovat vozy Formule 1 projíždějící místy, 
                    kde si místní obyvatelé běžně chodí koupit například mléko? Ve skutečnosti je to přesně tak atraktivní, jak to zní.`,

                  `Navíc je zde jedinečná příležitost projít si trať po skončení závodního dne, 
                   případně si na ní dokonce vychutnat večeři v některém z barů s terasou – zážitek, 
                   který by si návštěvníci rozhodně neměli nechat ujít.`,

                  
                  ]
      },

      {
        question: "Kde je nejlepší místo na sledování?",
        answer: [`Pokud se nedostanete do některého z bytových domů převislých nad okruhem (nebo na loď), doporučuje se zvolit tribuny v rozmezí L až P, 
                  které se nacházejí v oblasti u sekce u bazénu. Právě zde jezdci vrhají své vozy do těsné šikany rychlostí kolem 200 km/h.`,

                  `Alternativně lze pro ještě působivější výhled zvolit tribunu B, která nabízí pohled na luxusní Casino Square.`
   
]
      }
    ]
  },

    // ===== Barcelona =====
  {
    id: "barcelona",
    name: "FORMULA 1 MSC CRUISES GRAN PREMIO DE BARCELONA-CATALUNYA 2026",
    shortName: "Barcelony",
    schedule: [
      { date: "12 června", name: "Trénink 1",                   time: "13:30 - 14:30",  result:"výsledek" },
      { date: "12 června", name: "Trénink 2",                   time: "17:00 - 18:00",  result:"výsledek" },
      { date: "13 června", name: "Trénink 3",                   time: "12:30 - 13:30",  result:"výsledek" },
      { date: "13 června", name: "Kvalifikace",                 time: "16:00 - 17:00",  result:"výsledek" },
      { date: "14 června", name: "Závod",                       time: "15:00",          result:"výsledek" }
    ], 

    circuit: [ 
            { label: "Délka okruhu", value:  "4.657 km"},
            { label: "Počet kol",    value:  "66"},
            { label: "První velká cena", value:  "1991"},
            { label: "Délka závodu", value:  "307.236 km"},
            { label: "Nejrychlejší kolo", value:  "1:15.743", extra: "Oscar Piastri (2025)", full: true} 
    ],  

     info: [
      {
        question: "Kdy byl okruh Circuit de Barcelona-Catalunya postaven?",
        answer: [`Okruh Circuit de Barcelona-Catalunya byl vybudován v rámci rozvojového programu spojeného s olympijskými hrami v Barcelona v roce 1992.`,

                  `Základní kámen byl položen v roce 1989, přičemž první automobilový závod se zde uskutečnil v roce 1991 jako součást šampionátu španělských cestovních vozů.`,

              ]

      },

      {
        question: "Kdy se zde jela první Velká cena?",
        answer: [
                    `Dva týdny po závodě cestovních vozů přišla na řadu Formule 1. 
                    Okruh zažil senzační debut, když se Nigel Mansell a Ayrton Senna utkali ve slavném souboji bok po boku na cílové rovince, 
                    než se Mansell dostal do vedení a dojel si pro vítězství.`,

                    
                  ]
            
            },

      {
        question: "Jaký je ten okruh?",
        answer:[ `Jezdci mají Circuit de Barcelona-Catalunya velmi rádi, mimo jiné i proto, že po mnoho let sloužil jako hlavní místo pro předsezónní testování Formule 1..`,
                
                `Trať nabízí vyváženou kombinaci rychlých i pomalých zatáček, 
                  přičemž náročná pravotočivá zatáčka číslo 3 představuje ideální příležitost k posouzení vyvážení vozu, 
                  které týmoví konstruktéři připravili pro nadcházející sezónu.`,

                ]
      },

      {
        question: "Proč tam jet?",
        answer: [ `Není třeba připomínat, že Barcelona patří mezi nejvýznamnější města světa, i když jsme to právě udělali.`,

                  `Kuchyně, kultura i pláže – to vše zde naleznete, což činí návštěvu Velké ceny v Barceloně mimořádně atraktivní záležitostí.`,

                  
                  ]
      },

      {
        question: "Kde je nejlepší místo na sledování?",
        answer: [`Nabídka míst k sledování je velmi široká, přičemž téměř celý okruh je pokryt tribunami nebo zónami se vstupem bez rezervace.`,

                  `Na vnější straně 1. zatáčky nabízí tribuna A výhled na nejlepší místo pro předjíždění na trati. 
                    Oblast bez rezervace v okolí 3. zatáčky pak poskytuje působivý pohled na vozy Formule 1, 
                    které jsou zde hnány až na samotnou hranici svých aerodynamických možností.`
   
]
      }
    ]
  }, 

  // ===== Rakousko =====
  {
    id: "rakousko",
    name: "FORMULA 1 LENOVO AUSTRIAN GRAND PRIX 2026",
    shortName: "Rakouska",
    schedule: [
      { date: "26 června", name: "Trénink 1",                   time: "13:30 - 14:30",  result:"výsledek" },
      { date: "26 června", name: "Trénink 2",                   time: "17:00 - 18:00",  result:"výsledek" },
      { date: "27 června", name: "Trénink 3",                   time: "12:30 - 13:30",  result:"výsledek" },
      { date: "27 června", name: "Kvalifikace",                 time: "16:00 - 17:00",  result:"výsledek" },
      { date: "28 června", name: "Závod",                       time: "15:00",          result:"výsledek" }
    ], 

    circuit: [ 
            { label: "Délka okruhu", value:  "4.326 km"},
            { label: "Počet kol",    value:  "71"},
            { label: "První velká cena", value:  "1970"},
            { label: "Délka závodu", value:  "307.018 km"},
            { label: "Nejrychlejší kolo", value:  "1:07.924", extra: "Oscar Piastri (2025)", full: true} 
    ],  

     info: [
      {
        question: "Kdy byl okruh Red Bull Ring postaven?",
        answer: [`Původní, obávaný Österreichring vznikl v roce 1969 jako náhrada za letištní okruh v Zeltwegu.`,

                  `Trať, kterou dnes známe jako Red Bull Ring, byla v podstatě vytvořena během zimy 1995–1996, 
                    kdy byl Hermann Tilke pověřen přeměnou Österreichringu na kratší a modernější závodní okruh.`,

              ]

      },

      {
        question: "Kdy se zde jela první Velká cena?",
        answer: [
                    `Okruh tehdy známý jako A1-Ring byl otevřen v roce 1996, přičemž Formule 1 na něj zavítala o rok později.`,

                    `Závod vyhrál Jacques Villeneuve, zatímco Jean Alesi havaroval při spektakulární nehodě, když jeho vůz Benetton vyjel na Ferrari Eddie Irvine.`,

                    `Mezitím jeho týmový kolega Gerhard Berger využil domácí Velkou cenu k oznámení ukončení své kariéry ve Formuli 1.`,

                    
                  ]
            
            },

      {
        question: "Jaký je ten okruh?",
        answer:[ `Je sice poměrně krátký, ale Red Bull Ring nabízí na jedno kolo opravdu mnoho.`,
                
                `První polovina okruhu zvýhodňuje výkon motoru, když vozy projíždějí třemi rovinkami oddělenými dvojicí stoupajících pravotočivých zatáček.`,

                `Ve druhé části, při jízdě z kopce, se však trať mění v jakousi „tobogánovou“ jízdu, kdy vozy projíždějí sérií rychlých zatáček, 
                  včetně působivé pravotočivé zatáčky Rindt, pojmenované po prvním rakouském mistru světa Formule 1 Jochen Rindt.`,

                ]
      },

      {
        question: "Proč tam jet?",
        answer: [ `Jen málokterý závodní okruh je tak malebný jako Red Bull Ring, který se nachází v idylickém přírodním údolí ve štýrských horách.`,

                  `To vytváří velmi příjemné prostředí pro konání Velké ceny. 
                   Pokud pak hledáte turistické cíle po závodě, 
                   nabízí se například muzeum ve Graz věnované nejslavnějšímu rodákovi města, Arnold Schwarzenegger.`,

                  
                  ]
      },

      {
        question: "Kde je nejlepší místo na sledování?",
        answer: [`Jedním z nejlepších výhledů v kalendáři Formule 1 je tribuna „Nord“ na okruhu Red Bull Ring, 
                    která se nachází na vnější straně někdejší zatáčky Bosch Kurve z dob Österreichringu.`,

                  `Z tohoto místa se nabízí vynikající přehled o velké části tratě, která se odtud svažuje dolů po přirozeném terénu okruhu.`
   
]
      }
    ]
  }, 

  // ===== Velká Británie =====
  {
    id: "velka_britanie",
    name: "FORMULA 1 PIRELLI BRITISH GRAND PRIX 2026",
    shortName: "Velké Británie",
    schedule: [
      { date: "3 července", name: "Trénink 1",                   time: "13:30 - 14:30",  result:"výsledek" },
      { date: "3 července", name: "Sprintová kvalifikace",       time: "17:30 - 18:14",  result:"výsledek" },
      { date: "4 července", name: "Sprint",                      time: "13:00 - 14:00",  result:"výsledek" },
      { date: "4 července", name: "Kvalifikace",                 time: "17:00 - 18:00",  result:"výsledek" },
      { date: "5 července", name: "Závod",                       time: "16:00",          result:"výsledek" }
    ], 

    circuit: [ 
            { label: "Délka okruhu", value:  "5.891 km"},
            { label: "Počet kol",    value:  "52"},
            { label: "První velká cena", value:  "1950"},
            { label: "Délka závodu", value:  "306.198 km"},
            { label: "Nejrychlejší kolo", value:  "1:27.097", extra: "Max Verstappen (2020)", full: true} 
    ],  

     info: [
      {
        question: "Kdy byl okruh Silverstone Circuit postaven?",
        answer: [`Ti, kteří v roce 1942 budovali obvodovou silnici kolem letiště RAF Silverstone, netušili, 
                    že tím pokládají základy jednoho z nejslavnějších závodních okruhů světa.`,

                  `Okruh Silverstone Circuit byl poprvé využit pro skutečný automobilový závod v roce 1947 – i když během něj bohužel přišla o život jedna místní ovce.`,

              ]

      },

      {
        question: "Kdy se zde jela první Velká cena?",
        answer: [
                    `Okruh Silverstone Circuit hostil vůbec první Velkou cenu Formule 1, když se zde 13. května 1950 konal úvodní závod mistrovství světa.`,

                    `Zkušený Giuseppe Farina, který v daném roce získal titul mistra světa, zvítězil v závodě s vozem Alfa Romeo 158.`,

                  ]
            
            },

      {
        question: "Jaký je ten okruh?",
        answer:[ `Při Velké ceně Velké Británie 2018 přirovnal Lewis Hamilton kolo na plný plyn na okruhu Silverstone Circuit k letu stíhacím letounem, 
                      což výstižně charakterizuje tento okruh v hrabství Northamptonshire.`,
                
                `Navzdory mnoha změnám tratě si Silverstone vždy zachoval svůj základní charakter jednoho z nejrychlejších okruhů v kalendáři Formule 1, 
                  zatímco historické zatáčky jako Maggotts, Becketts a Abbey představují jedny z největších výzev pro závodní jezdce na světě.`,

                ]
      },

      {
        question: "Proč tam jet?",
        answer: [ `Při procházce jednou z velkých „katedrál“ motorsportu je téměř nemožné ubránit se husí kůži. Co se týče atmosféry, 
                    britští fanoušci jsou tradičně velmi bouřliví – koneckonců právě Spojené království je kolébkou fotbalu (tedy „socceru“).`,
                  
                  ]
      },

      {
        question: "Kde je nejlepší místo na sledování?",
        answer: [`Tribuna Becketts patří bezpochyby mezi nejlepší místa pro sledování vozů Formule 1 v akci – při pohledu na to, 
                    jak rychle jezdci projíždějí zatáčkami Maggotts a Becketts, zůstává doslova rozum stát.`,

                  `Dále po trati nabízejí tribuny u zatáčky Stowe výhled na jedno z nejlepších míst pro předjíždění, 
                      přičemž samotné sledování jezdců, jak s maximálním nasazením vrhají své vozy do této zatáčky, je téměř stejně působivé.`
   
]
      }
    ]
  },

// ===== Belgie=====
  {
    id: "belgie",
    name: "FORMULA 1 MOËT & CHANDON BELGIAN GRAND PRIX 2026",
    shortName: "Belgie",
    schedule: [
      { date: "17 července", name: "Trénink 1",                   time: "13:30 - 14:30",  result:"výsledek" },
      { date: "17 července", name: "Trénink 2",                   time: "17:00 - 18:00",  result:"výsledek" },
      { date: "18 července", name: "Trénink 3",                   time: "12:30 - 13:30",  result:"výsledek" },
      { date: "18 července", name: "Kvalifikace",                 time: "16:00 - 17:00",  result:"výsledek" },
      { date: "19 července", name: "Závod",                       time: "15:00",          result:"výsledek" }
    ], 

    circuit: [ 
            { label: "Délka okruhu", value:  "7.004 km"},
            { label: "Počet kol",    value:  "44"},
            { label: "První velká cena", value:  "1950"},
            { label: "Délka závodu", value:  "308.052 km"},
            { label: "Nejrychlejší kolo", value:  "1:44.701", extra: "Sergio Perez (2024)", full: true} 
    ],  

     info: [
      {
        question: "Kdy byl okruh Circuit de Spa-Francorchamps postaven?",
        answer: [`Původní trojúhelníkový okruh byl vybudován v roce 1921, přičemž jeho tvůrci Jules de Thier a Henri Langlois van Ophem využili veřejné silnice mezi městy Francorchamps, 
                    Malmedy a Stavelot k vytvoření mimořádného okruhu o délce 14,9 km, který vedl lesy a zvlněnou krajinou krásného regionu Ardeny.`,

                  `Okruh byl v roce 1979 přestavěn, a přestože má nová trať přibližně poloviční délku oproti původní, s 7,004 km zůstává nejdelší v současném kalendáři Formule 1.`,

              ]

      },

      {
        question: "Kdy se zde jela první Velká cena?",
        answer: [
                    `Poté, co již v roce 1924 hostil nešampionátovou Velkou cenu, byl ikonický belgický okruh Circuit de Spa-Francorchamps jedním ze sedmi, 
                    které byly součástí premiérového ročníku mistrovství světa Formule 1 v roce 1950.`,

                    `Tento závod vyhrál legendární Juan Manuel Fangio, který dovedl vozy Alfa Romeo k dvojitému vítězství před svým týmovým kolegou Giuseppe Farina.`,
                    
                  ]
            
            },

      {
        question: "Jaký je ten okruh?",
        answer:[ `Okruh Circuit de Spa-Francorchamps patří mezi nejoblíbenější tratě jezdců Formule 1. 
                    Kombinace dlouhých rovinek a náročných rychlých zatáček jim umožňuje posouvat vozy na hranici jejich možností – pokud je ovšem sucho.`,
                
                `Velikost okruhu a proměnlivé belgické počasí totiž znamenají, že na jedné části tratě může pršet, 
                      zatímco jinde je sucho, což vede k výrazně odlišné přilnavosti v jednotlivých zatáčkách.`,

                `Zvláštní pozornost si zaslouží ikonická pasáž Eau Rouge, pravděpodobně nejslavnější sekvence zatáček na světě, 
                    kde jezdci projíždějí rychlou kombinací vlevo, vpravo a následně prudce do kopce přes Raidillon.`,

                ]
      },

      {
        question: "Proč tam jet?",
        answer: [ `Co nemilovat na jednom z klasických evropských okruhů? Pouze skutečně výjimeční jezdci dokáží Circuit de Spa-Francorchamps plně ovládnout – mezi těmi, 
                    kteří tuto trať dokonale zvládli, patří například Ayrton Senna a Michael Schumacher.`,

                  `K tomu se přidává nádherné prostředí Ardeny, a není proto překvapením, že jde o jeden z nejoblíbenějších okruhů mezi fanoušky.`,

                  
                  ]
      },

      {
        question: "Kde je nejlepší místo na sledování?",
        answer: [`Vyvýšená tribuna v blízkosti zatáčky Eau Rouge nabízí nejlepší výhled na tuto ikonickou pasáž a zároveň poskytuje panoramatický pohled od La Source až po Raidillon.`,

                  `Pokud však preferujete co nejlepší atmosféru přímo u trati, ideální volbou je tribuna u zatáčky Pouhon.`
   
]
      }
    ]
  }, 

  // ===== Maďarsko =====
  {
    id: "madarsko",
    name: "FORMULA 1 AWS HUNGARIAN GRAND PRIX 2026",
    shortName: "Maďarska",
    schedule: [
      { date: "24 července", name: "Trénink 1",                   time: "13:30 - 14:30",  result:"výsledek" },
      { date: "24 července", name: "Trénink 2",                   time: "17:00 - 18:00",  result:"výsledek" },
      { date: "25 července", name: "Trénink 3",                   time: "12:30 - 13:30",  result:"výsledek" },
      { date: "25 července", name: "Kvalifikace",                 time: "16:00 - 17:00",  result:"výsledek" },
      { date: "26 července", name: "Závod",                       time: "15:00",          result:"výsledek" }
    ], 

    circuit: [ 
            { label: "Délka okruhu", value:  "4.381 km"},
            { label: "Počet kol",    value:  "70"},
            { label: "První velká cena", value:  "1986"},
            { label: "Délka závodu", value:  "306.63 km"},
            { label: "Nejrychlejší kolo", value:  "1:16.627", extra: "Lewis Hamilton (2020)", full: true} 
    ],  

     info: [
      {
        question: "Kdy byl okruh Hungaroring postaven?",
        answer: [`Výstavba okruhu Hungaroring začala v roce 1985 a trať byla připravena k závodění již o devět měsíců později.`,

                  `Maďarská vláda původně zvažovala obnovení starého okruhu v parku Népliget v Budapest, aby mohla hostit Formuli 1, 
                    nakonec se však rozhodla vybudovat zcela nové, účelově navržené závodiště.`,

              ]

      },

      {
        question: "Kdy se zde jela první Velká cena?",
        answer: [
                    `Byl rok 1986. Nelson Piquet vyhrál první závod Formule 1 na okruhu Hungaroring, když se proslavil manévrem, 
                      při němž svým vozem Williams projel po vnější straně Ayrton Senna (Lotus) a převzal vedení.`,
                    
                  ]
            
            },

      {
        question: "Jaký je ten okruh?",
        answer:[ `Nedostatek dlouhých rovinek na okruhu Hungaroring často vede k jeho přirovnání ke kartingové trati – a toto srovnání je skutečně velmi výstižné.`,
                
                `Vzhledem k řadám na sebe navazujících zatáček volí týmy úroveň přítlaku podobnou Monaku, 
                  přičemž dobře vyladěný podvozek zde hraje důležitější roli než samotný výkon motoru, a to kvůli krátkým rovinkám.`,

                `Přesto jde o výzvu, kterou si mnoho jezdců užívá, přičemž nalezení správného rytmu je klíčové pro dosažení rychlých časů na kolo.`,

                ]
      },

      {
        question: "Proč tam jet?",
        answer: [ `Maďarsko bývá v srpnu obvykle velmi horké. Dobrou zprávou pro návštěvníky okruhu však je, 
                    že se nedaleko nachází vodní park Aquarena Mogyoród, který nabízí ideální možnost, jak se ochladit.`,

                  `Mimo vodní atrakce je navíc okruh vzdálen pouhých 20 km od Budapest, což znamená snadný přístup do jednoho z nejzajímavějších, 
                      historicky bohatých a živých městských center v Evropě.`,

                  
                  ]
      },

      {
        question: "Kde je nejlepší místo na sledování?",
        answer: [`Okruh Hungaroring je vybudován v přirozeném „kotli“, podobně jako Brands Hatch.`,

                  `To znamená, že tribuny umístěné na hlavní rovince nebo v jejím okolí nabízejí výhled i na další části tratě, 
                      a poskytují tak návštěvníkům ještě větší zážitek z Formule 1.`
   
]
      }
    ]
  }, 

  // ===== Nizozemsko =====
  {
    id: "nizozemsko",
    name: "FORMULA 1 HEINEKEN DUTCH GRAND PRIX 2026",
    shortName: "Nizozemska",
    schedule: [
      { date: "21 srpna", name: "Trénink 1",                   time: "13:30 - 14:30",  result:"výsledek" },
      { date: "21 srpna", name: "Sprintová kvalifikca",        time: "16:30 - 17:14",  result:"výsledek" },
      { date: "22 srpna", name: "Sprint",                      time: "12:00 - 13:00",  result:"výsledek" },
      { date: "22 srpna", name: "Kvalifikace",                 time: "16:00 - 17:00",  result:"výsledek" },
      { date: "23 srpna", name: "Závod",                       time: "15:00",          result:"výsledek" }
    ], 

    circuit: [ 
            { label: "Délka okruhu", value:  "4.259 km"},
            { label: "Počet kol",    value:  "72"},
            { label: "První velká cena", value:  "1952"},
            { label: "Délka závodu", value:  "306.587 km"},
            { label: "Nejrychlejší kolo", value:  "1:11.097", extra: "Lewis Hamilton (2021)", full: true} 
    ],  

     info: [
      {
        question: "Kdy byl okruh Circuit Zandvoort postaven?",
        answer: [`Stejně jako Silverstone Circuit byl i Circuit Zandvoort otevřen v roce 1948, v době poválečného rozmachu motorsportu napříč Evropou.`,

                  `Původní trať kombinovala pevné úseky s běžnými silnicemi, které se vinuly písečnými dunami přímořského letoviska Zandvoort.`,

                   `Nizozemský automobilový klub, který stál za vznikem okruhu, si navíc přizval vítěze Le Mans z roku 1927 Sammy Davis, 
                    aby se podílel na návrhu původní trati o délce 4,2 km.`,

              ]

      },

      {
        question: "Kdy se zde jela první Velká cena?",
        answer: [
                    `Formule 1 se na okruhu Circuit Zandvoort poprvé představila v roce 1952. 
                      Závod tehdy jednoznačně ovládl Alberto Ascari, který dovedl Ferrari k dominantnímu výsledku 1–2–3.`,

                      `V následujících desetiletích se zde závody konaly nepravidelně až do roku 1985, kdy Zandvoort z kalendáře zmizel. 
                        Návrat byl oznámen až v roce 2019, kdy se počítalo s obnovením závodu v sezoně 2020 po dlouhé, pětatřicetileté pauze.`,

                        `Kvůli pandemii COVID-19 se však návrat nakonec uskutečnil až v roce 2021, čímž se čekání protáhlo na 36 let.`,
                    
                  ]
            
            },

      {
        question: "Jaký je ten okruh?",
        answer:[ `Současní jezdci Formule 1 označují Circuit Zandvoort za velmi rychlou a technicky náročnou trať s výrazným „old-school“ charakterem. 
                    Mnozí z nich ji dobře znají už z juniorských kategorií.`,
                
                `Okruh je typický svým zvlněným profilem. Vede skrz písečné duny a jednotlivé zatáčky na sebe plynule navazují. 
                    Celé kolo tak působí dynamicky a připomíná jízdu na horské dráze.`,

                `Přestože prošel modernizací před návratem Formule 1, zachoval si svůj původní charakter. Výrazně byl upraven například náklon zatáčky Tarzan, 
                    který nyní dosahuje 18 stupňů a překonává i Indianapolis Motor Speedway. Okruh tak zůstává skutečnou výzvou pro jezdce.`,

                ]
      },

      {
        question: "Proč tam jet?",
        answer: [ `Okruh Circuit Zandvoort nabízí kombinaci několika prvků, které z něj dělají velmi atraktivní destinaci pro fanoušky Formule 1.`,

                  `Nechybí mu bohatá historie – objevil se například ve filmu Grand Prix a v průběhu let byl dějištěm řady nezapomenutelných momentů, 
                    včetně slavného kola na třech kolech v podání Gilles Villeneuve.`,

                    `Významnou roli hraje také atmosféra. S Max Verstappen na startu bývá vždy mimořádně bouřlivá a typicky laděná do oranžové barvy.`,

                    `Velkou výhodou je i poloha okruhu – nachází se u pobřeží a z Amsterdam je dostupný přibližně za 30 minut vlakem.`,


                  
                  ]
      },

      {
        question: "Kde je nejlepší místo na sledování?",
        answer: [`Za ideální místa ke sledování závodu lze považovat úvodní zatáčku Tarzan, případně některou z klopených zatáček. 
                    Zajímavou volbou je zejména Arie Luyendijkbocht, tedy poslední zatáčka okruhu, nebo Hugenholtzbocht.`,

                  `Právě druhá z nich prošla před návratem Formule 1 v roce 2021 výraznou úpravou – byla rozšířena a přetvořena do parabolického tvaru s klopením, 
                    což umožňuje jezdcům projíždět zatáčku vedle sebe a při podobné rychlosti.`,

                    `Výsledkem je mimořádně atraktivní podívaná.`,
   
]
      }
    ]
  }, 

   // ===== Itálie =====
  {
    id: "italie",
    name: "FORMULA 1 PIRELLI GRAN PREMIO D’ITALIA 2026",
    shortName: "Itálie",
    schedule: [
      { date: "4 záři", name: "Trénink 1",                   time: "12:30 - 13:30",  result:"výsledek" },
      { date: "4 září", name: "Trénink 2",                   time: "16:00 - 17:00",  result:"výsledek" },
      { date: "5 září", name: "Trénink 3",                   time: "12:30 - 13:30",  result:"výsledek" },
      { date: "5 září", name: "Kvalifikace",                 time: "16:00 - 17:00",  result:"výsledek" },
      { date: "6 září", name: "Závod",                       time: "15:00",          result:"výsledek" }
    ], 

    circuit: [ 
            { label: "Délka okruhu", value:  "5.793 km"},
            { label: "Počet kol",    value:  "53"},
            { label: "První velká cena", value:  "1950"},
            { label: "Délka závodu", value:  "306.72 km"},
            { label: "Nejrychlejší kolo", value:  "1:20.901", extra: "Lando Norris (2025)", full: true} 
    ],  

     info: [
      {
        question: "Kdy byl okruh Autodromo Nazionale Monza vybudován?",
        answer: [`Okruh Autodromo Nazionale Monza vznikl v roce 1922 a jeho výstavba trvala pouhých 110 dní. 
                    Stal se tak třetím moderním závodním okruhem na světě, po Brooklands ve Velké Británii a Indianapolis Motor Speedway ve Spojených státech.`,

                  `Původní podoba tratě zahrnovala výrazně klopené zatáčky, které působily velmi náročně, 
                      a zároveň obsahovala i část okruhu, která se v upravené podobě používá dodnes.`,

              ]

      },

      {
        question: "Kdy se zde jela první Velká cena?",
        answer: [
                    `Okruh Autodromo Nazionale Monza byl slavnostně otevřen 3. září 1922, přičemž už o týden později hostil Velkou cenu Itálie.`,

                    `V roce 1950 se stal součástí vůbec první sezóny mistrovství světa Formule 1 a od té doby se zde tento závod konal každoročně, s jedinou výjimkou.`,
                    
                  ]
            
            },

      {
        question: "Jaký je ten okruh?",
        answer:[ `Rychlost je hlavním znakem okruhu Autodromo Nazionale Monza, který místní nazývají „La Pista Magica“. 
                    Například kvalifikační kolo Lando Norris z roku 2024 s průměrnou rychlostí 263 km/h dobře ilustruje jeho charakter.`,
                
                `Po většinu kola – zhruba 80 % – jedou vozy na plný plyn a maximálních rychlostí dosahují na 1,1 km dlouhé cílové rovince.`,

                `Následně trať pokračuje do historické parkové části, kde přichází série prudkých brzdění do úzkých šikan, které kladou vysoké nároky na brzdový systém.`,

                ]
      },

      {
        question: "Proč tam jet?",
        answer: [ `Okruh Autodromo Nazionale Monza se nachází v rozlehlém parku nedaleko Milán, 
                    což mu dodává klidnou a příjemně zelenou atmosféru vhodnou pro pořádání Velké ceny.`,

                  `Historii tohoto místa navíc připomínají dochované klopené úseky původního okruhu. 
                    Ty lze zahlédnout například při výjezdu ze zatáčky Curva Alboreto (Parabolica) nebo při průjezdu pod mostem směrem k Variante Ascari.`,

                    `Tyto prvky jasně podtrhují jedinečný charakter a tradici tohoto legendárního závodiště.`,

                  
                  ]
      },

      {
        question: "Kde je nejlepší místo na sledování?",
        answer: [`Ideální volbou je tribuna u Variante del Rettifilo, 
                  kde je možné sledovat dramatické brzdění z přibližně 350 km/h až na zhruba 70 km/h před průjezdem úzkou šikanou.`,

                  `Tento úsek patří k nejlepším místům pro předjíždění a zároveň často bývá dějištěm soubojů hned po startu závodu.`
   
]
      }
    ]
  },

  // ===== Španělsko =====
  {
    id: "spanelsko",
    name: "FORMULA 1 TAG HEUER GRAN PREMIO DE ESPAÑA 2026",
    shortName: "Španělska",
    schedule: [
      { date: "11 záři", name: "Trénink 1",                   time: "13:30 - 14:30",  result:"výsledek" },
      { date: "11 září", name: "Trénink 2",                   time: "17:00 - 18:00",  result:"výsledek" },
      { date: "12 září", name: "Trénink 3",                   time: "12:30 - 13:30",  result:"výsledek" },
      { date: "12 září", name: "Kvalifikace",                 time: "16:00 - 17:00",  result:"výsledek" },
      { date: "13 září", name: "Závod",                       time: "15:00",          result:"výsledek" }
    ], 

    circuit: [ 
            { label: "Délka okruhu", value:  "5.416 km"},
            { label: "Počet kol",    value:  "57"},
            { label: "První velká cena", value:  "2026"},
            { label: "Délka závodu", value:  "308.524 km"},
            { label: "Nejrychlejší kolo", value:  "--", extra: "", full: true} 
    ],  

     info: [
      

      {
        question: "Kdy se zde jela první Velká cena?",
        answer: [
                    `Madrid hostil závody Formule 1 přibližně před čtyřmi desetiletími na okruhu Circuito del Jarama, který se nachází asi 30 km severně od města.`,

                    `Nový okruh Madring, situovaný mnohem blíže centru a snadno dostupný městskou dopravou, by měl mít premiéru v kalendáři Formule 1 v roce 2026.`,
                    
                  ]
            
            },

      {
        question: "Jaký je ten okruh?",
        answer:[ `Podle dostupných plánů má jít o velmi atraktivní okruh. Madring bude kombinovat běžné silnice s účelově vybudovanými úseky, 
                    čímž vytvoří charakter na pomezí městského a permanentního okruhu, podobně jako Miami International Autodrome.`,
                
                `Trať nabídne 22 různorodých zatáček a na rovinkách by vozy měly dosahovat rychlostí až kolem 340 km/h.`,

                `Součástí konceptu jsou také výrazné výškové změny a nejdelší klopená zatáčka v kalendáři Formule 1.`,

                ]
      },

      {
        question: "Proč tam jet?",
        answer: [ `Kromě samotné Velké ceny nabízí Madrid mimořádně pestré městské prostředí. Návštěvníky lákají živé pouliční trhy, špičková umělecká scéna i řada významných muzeí.`,

                  `Město patří k nejzelenějším v Evropě, s množstvím parků a otevřených prostor, jako jsou Madrid Río či Parque del Retiro.`,

                    `Atmosféru doplňuje široká nabídka moderních kaváren, tradičních tapas barů a příjemných náměstí s venkovním posezením. 
                        Výhodou je také klima – Madrid se může pochlubit přibližně 350 slunečnými dny v roce, což z něj činí jedno z nejslunečnějších měst na světě.`,

                  
                  ]
      },

      {
        question: "Kde je nejlepší místo na sledování?",
        answer: [`Diváci zde budou mít na výběr z celé řady atraktivních míst, nicméně jedním z nejvýraznějších bude bezpochyby půlkruhová zatáčka 12 nazvaná „La Monumental“.`,

                  `Tato pasáž představuje pro jezdce výraznou výzvu – její délka dosahuje přibližně půl kilometru a klopení až 24 %. 
                    Přibližně 45 000 diváků zde bude moci sledovat vozy, které touto zatáčkou projíždějí zhruba šest sekund.`
   
]
      }
    ]
  },

   // ===== Ázerbájdžán =====
  {
    id: "azerbajdzan",
    name: "FORMULA 1 QATAR AIRWAYS AZERBAIJAN GRAND PRIX 2026",
    shortName: "Ázerbájdžánu",
    schedule: [
      { date: "24 záři", name: "Trénink 1",                   time: "10:30 - 11:30",  result:"výsledek" },
      { date: "24 září", name: "Trénink 2",                   time: "14:00 - 15:00",  result:"výsledek" },
      { date: "25 září", name: "Trénink 3",                   time: "10:30 - 11:30",  result:"výsledek" },
      { date: "25 září", name: "Kvalifikace",                 time: "14:00 - 15:00",  result:"výsledek" },
      { date: "26 září", name: "Závod",                       time: "13:00",          result:"výsledek" }
    ], 

    circuit: [ 
            { label: "Délka okruhu", value:  "6.003 km"},
            { label: "Počet kol",    value:  "51"},
            { label: "První velká cena", value:  "2016"},
            { label: "Délka závodu", value:  "306.049 km"},
            { label: "Nejrychlejší kolo", value:  "1:43.009", extra: "Charles Leclerc (2019)", full: true} 
    ],  

     info: [
      {
        question: "Kdy byl okruh Baku City Circuit postaven?",
        answer: [`Nevznikl jako klasický závodní okruh – Baku City Circuit patří mezi moderní městské tratě v kalendáři Formule 1, 
                      po bok okruhů jako Circuit de Monaco, Albert Park Circuit či Marina Bay Street Circuit.`,
              ]

      },

      {
        question: "Kdy se zde jela první Velká cena?",
        answer: [
                    `První závod Formule 1 v Baku se uskutečnil v roce 2016 pod názvem Velká cena Evropy. 
                      O rok později následovala premiérová Velká cena Ázerbájdžánu, která přinesla jedno z největších překvapení sezóny.`,

                    `Vítězství si tehdy připsal Daniel Ricciardo, před Valtterim Bottasem a Lancem Strollem. 
                        Závod zároveň poznamenal konflikt mezi Lewisem Hamiltonem a Sebastianem Vettelem za zpomalovacím vozem.`,
                    
                  ]
            
            },

      {
        question: "Jaký je ten okruh?",
        answer:[ `Okruh Baku City Circuit nabízí výrazný kontrast mezi širokými, rychlými úseky a úzkými technickými pasážemi.`,
                
                `Velmi dlouhá cílová rovinka podél pobřeží Baku vytváří ideální podmínky pro jízdu ve vzduchovém pytli, 
                    přičemž vozy zde často najíždějí do první zatáčky vedle sebe až ve třech.`,

                `Následně se trať stáčí do historického centra Icherisheher, kde vede úzkými a klikatými ulicemi podél středověkých hradeb. 
                    Podobně jako v Circuit de Monaco jsou zde chyby okamžitě a tvrdě potrestány.`,

                    `Z hlediska nastavení vozu musí týmy volit kompromis mezi vyšším přítlakem pro technické pasáže a nižším odporem vzduchu pro maximální rychlost na rovinkách.`,

                ]
      },

      {
        question: "Proč tam jet?",
        answer: [ `Stejně jako u všech městských okruhů znamená sledování Velké ceny Ázerbájdžánu bezprostřední kontakt 
                      s děním – po skončení jízd se vozy vracejí přímo do boxů v těsné blízkosti diváků.`,

                  `Samotné Baku je dynamické a živé město. Významnou součástí místní kultury je gastronomie, 
                    která kombinuje prvky turecké a blízkovýchodní kuchyně, a nabízí tak návštěvníkům pestrý kulinářský zážitek.`, 
                  ]
      },

      {
        question: "Kde je nejlepší místo na sledování?",
        answer: [`Mezi nejatraktivnější místa ke sledování závodu patří hlavní tribuna Absheron Grandstand na konci cílové rovinky. 
                  Nabízí výhled na prudké brzdění z přibližně 350 km/h do první, pravotočivé zatáčky, a zároveň i na velkou část předjížděcích manévrů.`,

                  `Zajímavou alternativou je tribuna Icheri Sheher Grandstand, která poskytuje jedinečný pohled na technickou pasáž u městských hradeb. 
                    Z tohoto místa lze sledovat, jak vozy projíždějí úzkým úsekem u brány historického centra a následně zrychlují směrem k rychlé sekci zatáček 13–15.`
   
]
      }
    ]
  },

  

// ===== Singapur =====
  {
    id: "singapur",
    name: "FORMULA 1 SINGAPORE AIRLINES SINGAPORE GRAND PRIX 2026",
    shortName: "Singapuru",
    schedule: [
      { date: "9  října", name: "Trénink 1",                   time: "10:30 - 11:30",  result:"výsledek" },
      { date: "9  října", name: "Sprintová kvalifikace",       time: "14:30 - 15:14",  result:"výsledek" },
      { date: "10 října", name: "Sprint",                      time: "11:00 - 12:00",  result:"výsledek" },
      { date: "10 října", name: "Kvalifikace",                 time: "15:00 - 16:00",  result:"výsledek" },
      { date: "11 října", name: "Závod",                       time: "14:00",          result:"výsledek" }
    ], 

    circuit: [ 
            { label: "Délka okruhu", value:  "4.927 km"},
            { label: "Počet kol",    value:  "62"},
            { label: "První velká cena", value:  "1950"},
            { label: "Délka závodu", value:  "305.337 km"},
            { label: "Nejrychlejší kolo", value:  "1:33.808", extra: "Lewis Hamilton (2025)", full: true} 
    ],  

     info: [
      {
        question: "Kdy byl okruh Marina Bay Street Circuit vybudován?",
        answer: [`Okruh Marina Bay Street Circuit se poprvé objevil v kalendáři v roce 2008.`,

                  `Tato městská trať s ikonickým panoramatem města Singapur vznikla na základě návrhu Hermann Tilke, který byl následně upraven společností KBR Inc..`,

                  `Závod si velmi rychle získal výrazné postavení a zařadil se mezi nejvýraznější podniky v kalendáři Formule 1.`,

              ]

      },

      {
        question: "Kdy se zde jela první Velká cena?",
        answer: [
                    `V roce 2008 se Singapur stal dějištěm historicky prvního nočního závodu Formule 1.`,

                    `Velká cena, která byla patnáctým podnikem sezóny, si rychle získala oblibu mezi týmy i jezdci. 
                      Vítězství zde vybojoval Fernando Alonso, i když jeho triumf byl provázen kontroverzemi.`,
                    
                  ]
            
            },

      {
        question: "Jaký je ten okruh?",
        answer:[ `Okruh Marina Bay Street Circuit patří k fyzicky nejnáročnějším v celém kalendáři. 
                    Nerovný městský povrch v kombinaci s vysokou vlhkostí představuje pro jezdce značnou zátěž.`,
                
                `Ani po úpravě tratě v roce 2023, kdy se počet zatáček snížil z 23 na 19, 
                  nedošlo k výraznému zjednodušení – jezdci musí během rychlého kola neustále pracovat s volantem.`,

                `Celková fyzická náročnost závodu je značná, což se odráží i na úbytku hmotnosti, který může během jednoho závodu dosáhnout až přibližně 3 kg.`,

                ]
      },

      {
        question: "Proč tam jet?",
        answer: [ `Pokud chcete zažít Singapur v jeho nejlepší podobě, období Velké ceny je ideální příležitostí.`,

                  `Pro základní orientaci nabízí zajímavý výhled jízda na Singapore Flyer, odkud je možné přehlédnout i boxovou část okruhu. 
                      Následně lze naplno využít bohatou nabídku místních barů a restaurací.`,

                      `Milovníci koktejlů by pak neměli vynechat návštěvu Raffles Hotel Singapore, 
                        který je považován za místo vzniku známého nápoje Singapore Sling (k dispozici jsou i nealkoholické varianty).`,

                  
                  ]
      },

      {
        question: "Kde je nejlepší místo na sledování?",
        answer: [`Vhodnou volbou je tribuna u 1. zatáčky, která nabízí atraktivní pohled na vozy při akceleraci do úvodní pasáže okruhu, 
                    následovanou intenzivním brzděním a rychlým průjezdem zatáčkami 2 a 3.`,

                  `Z tohoto místa je zároveň dobře viditelný start závodu, při němž lze sledovat vozy vyrážející z roštu, často doprovázené efektními jiskrami při prudké akceleraci.`
   
]
      }
    ]
  },

  // ===== USA =====
  {
    id: "usa",
    name: "FORMULA 1 MSC CRUISES UNITED STATES GRAND PRIX 2026",
    shortName: "USA",
    schedule: [
      { date: "24 října", name: "Trénink 1",                   time: "19:30 - 20:30",  result:"výsledek" },
      { date: "24 října", name: "Trénink 2",                   time: "23:00 - 00:00",  result:"výsledek" },
      { date: "25 října", name: "Trénink 3",                   time: "19:30 - 20:30",  result:"výsledek" },
      { date: "25 října", name: "Kvalifikace",                 time: "23:00 - 00:00",  result:"výsledek" },
      { date: "26 října", name: "Závod",                       time: "21:00",          result:"výsledek" }
    ], 

    circuit: [ 
            { label: "Délka okruhu", value:  "5.513 km"},
            { label: "Počet kol",    value:  "56"},
            { label: "První velká cena", value:  "2012"},
            { label: "Délka závodu", value:  "308.405 km"},
            { label: "Nejrychlejší kolo", value:  "1:36.169", extra: "Charles Leclerc (2019)", full: true} 
    ],  

     info: [
      {
        question: "Kdy byl okruh Circuit of the Americas postaven?",
        answer: [`Okruh Circuit of the Americas (COTA), navržený Hermannem Tilkem ve spolupráci s americkou architektonickou společností HKS, 
                    měl poměrně komplikovaný začátek, protože jeho výstavbu provázela řada problémů a zpoždění.`,

                    `Čekání se však vyplatilo – trať byla slavnostně otevřena 21. října 2012 mistrem světa z roku 1978 Mariem Andrettim.`,
              ]

      },

      {
        question: "Kdy se zde jela první Velká cena?",
        answer: [
                    `Formule 1 se na okruhu Circuit of the Americas představila poprvé v roce 2012, 
                      kdy se zde konala Velká cena USA – první od závodu v roce 2007 na Indianapolis Motor Speedway.`,

                    `Do areálu v Austinu tehdy dorazilo více než 100 000 diváků, kteří sledovali vítězství Lewise Hamiltona. 
                      Šlo zároveň o jeho poslední triumf s týmem McLaren před přestupem k Mercedesu v roce 2013.`,
                    
                  ]
            
            },

      {
        question: "Jaký je ten okruh?",
        answer:[ `Pokud vám některé zatáčky na okruhu Circuit of the Americas připadají povědomé, 
                  není to náhoda. Úseky zatáček 3 až 6 připomínají rychlou pasáž Maggotts/Becketts na Silverstone Circuit nebo esovité zatáčky na Suzuka Circuit.`,
                
                `Zatáčky 12 až 15 pak svým charakterem odkazují na stadionovou sekci okruhu Hockenheimring..`,

                `Výrazným prvkem je také stoupání do velmi široké první zatáčky, které pravidelně vytváří ideální podmínky pro předjíždění.`,
                ]
      },

      {
        question: "Proč tam jet?",
        answer: [ `Není náhodou, že je Austin často označován za jedno z nejzajímavějších měst ve Spojených státech. 
                    Nabízí vynikající gastronomii, bohatý noční život a jedinečnou atmosféru vystihovanou neoficiálním heslem „Keep Austin Weird“.`,

                  `Jakmile začnou závody, ocitnete se na jednom z nejvýznamnějších moderních okruhů Formule 1. 
                    V kombinaci s typicky uvolněným americkým přístupem k zábavě jde o zážitek, který by si žádný fanoušek neměl nechat ujít.`, 
                  ]
      },

      {
        question: "Kde je nejlepší místo na sledování?",
        answer: [`Možností ke sledování závodu je zde celá řada. Hlavní tribuna na cílové rovince nabízí – v typicky americkém stylu – i servis občerstvení přímo na sedadle.`,

                  `Tribuna u 1. zatáčky pak poskytuje výhled až na panorama města Austin.`,

                  `Pokud však preferujete bezprostřední kontakt se závodní akcí, 
                    ideální volbou jsou tribuny ve stadionové sekci u zatáček 15 a 16, 
                      kde se dění odehrává v těsné blízkosti diváků.`
   
]
      }
    ]
  },

// ===== Mexiko =====
  {
    id: "mexiko",
    name: "FORMULA 1 GRAN PREMIO DE LA CIUDAD DE MÉXICO 2026",
    shortName: "Mexika",
    schedule: [
      { date: "30 října",     name: "Trénink 1",                   time: "19:30 - 20:30",  result:"výsledek" },
      { date: "30 října",     name: "Trénink 2",                   time: "23:00 - 00:00",  result:"výsledek" },
      { date: "31 října",     name: "Trénink 3",                   time: "18:30 - 19:30",  result:"výsledek" },
      { date: "31 října",     name: "Kvalifikace",                 time: "22:00 - 23:00",  result:"výsledek" },
      { date: "1  listopadu", name: "Závod",                       time: "21:00",          result:"výsledek" }
    ], 

    circuit: [ 
            { label: "Délka okruhu", value:  "4.304 km"},
            { label: "Počet kol",    value:  "71"},
            { label: "První velká cena", value:  "1963"},
            { label: "Délka závodu", value:  "305.354 km"},
            { label: "Nejrychlejší kolo", value:  "1:17.774", extra: "Valtteri Bottas (2021)", full: true} 
    ],  

     info: [
      {
        question: "Kdy byl okruh Autódromo Hermanos Rodríguez postaven?",
        answer: [`V roce 1959. Otec slavných mexických závodníků Ricarda Rodrígueze a Pedra Rodrígueze působil jako poradce 
                  prezidenta Adolfa Lópeze Mateose a navrhl mu vybudování závodního okruhu v areálu sportovního parku Magdalena Mixiuhca v Mexico City, 
                    a to s využitím stávajících komunikací..`,

                    `Prezident návrh podpořil a výstavba tratě byla dokončena za méně než jeden rok.`,
              ]

      },

      {
        question: "Kdy se zde jela první Velká cena?",
        answer: [
                    `Vozy Formule 1 se na okruhu Autódromo Hermanos Rodríguez objevily poprvé v roce 1962 při nešampionátovém závodě. 
                      O rok později se zde již konala oficiální Velká cena, kterou vyhrál Jim Clark.`,

                    `V následujících letech se závod v Mexico City díky své jedinečné atmosféře stal tradičním závěrem sezóny Formule 1.`,

                    `Do kalendáře mistrovství světa se pak Mexiko vrátilo až v roce 2015.`,
                    
                  ]
            
            },

      {
        question: "Jaký je ten okruh?",
        answer:[ `Okruh Autódromo Hermanos Rodríguez leží ve vysoké nadmořské výšce – více než 2 000 metrů nad mořem, což činí každé kolo fyzicky náročnějším.`,
                
                `Trať o délce 4,3 km si dodnes z velké části zachovala původní podobu z roku 1959. Nejvýraznější změnou je úprava legendární zatáčky Peraltada, 
                  která byla rozdělena. Okruh nyní prochází areálem bývalého baseballového stadionu, čímž vzniká jedna z nejunikátnějších pasáží v kalendáři Formule 1.`,
                ]
      },

      {
        question: "Proč tam jet?",
        answer: [ `Mexico City patří mezi nejživější a nejdynamičtější metropole světa.`,

                  `Okruh Autódromo Hermanos Rodríguez se nachází jen kousek na východ od centra města 
                    a díky blízké stanici metra je možné se po každém závodním dni snadno přesunout zpět do centra.`, 

                     `Velká cena Mexika tak nabízí ideální kombinaci motorsportu a kulturního zážitku.`,
                  ]
      },

      {
        question: "Kde je nejlepší místo na sledování?",
        answer: [`Vyplatí se zajistit si místo v tribunách umístěných v bývalém baseballovém stadionu na okruhu Autódromo Hermanos Rodríguez.`,

                  `Tato část tratě nabízí jedinečný pohled přímo do kokpitů projíždějících vozů. 
                  Zároveň právě zde probíhá stupňe vítězů, jehož atmosféra patří k nejpůsobivějším v celém kalendáři Formule 1.`,   
]
      }
    ]
  }, 

// ===== Brazilie =====
  {
    id: "brazilie",
    name: "FORMULA 1 MSC CRUISES GRANDE PRÊMIO DE SÃO PAULO 2026",
    shortName: "Brazílie",
    schedule: [
      { date: "6 listopadu",     name: "Trénink 1",                   time: "16:30 - 17:30",  result:"výsledek" },
      { date: "6 listopadu",     name: "Trénink 2",                   time: "20:00 - 21:00",  result:"výsledek" },
      { date: "7 listopadu",     name: "Trénink 3",                   time: "15:30 - 16:30",  result:"výsledek" },
      { date: "7 listopadu",     name: "Kvalifikace",                 time: "19:00 - 20:00",  result:"výsledek" },
      { date: "8 listopadu",     name: "Závod",                       time: "18:00",          result:"výsledek" }
    ], 

    circuit: [ 
            { label: "Délka okruhu", value:  "4.309 km"},
            { label: "Počet kol",    value:  "71"},
            { label: "První velká cena", value:  "1973"},
            { label: "Délka závodu", value:  "305.879 km"},
            { label: "Nejrychlejší kolo", value:  "1:10.540", extra: "Valtteri Bottas (2018)", full: true} 
    ],  

     info: [
      {
        question: "Kdy byl okruh Autódromo José Carlos Pace postaven?",
        answer: [`Výstavba okruhu Autódromo José Carlos Pace, známého spíše jako Interlagos, začala již v roce 1938.`,

                    `Tvůrci tratě se při návrhu inspirovali několika tehdejšími okruhy, 
                      konkrétně Brooklands ve Velké Británii, Roosevelt Raceway ve Spojených státech a Montlhéry Autodrome ve Francii.`,
              ]

      },

      {
        question: "Kdy se zde jela první Velká cena?",
        answer: [
                    `Formule 1 zavítala na okruh Autódromo José Carlos Pace poprvé v rámci mistrovství světa v roce 1973, 
                      mimo jiné i díky rostoucí popularitě Emerson Fittipaldi v Brazílii.`,

                    `Domácí fanoušci se hned v úvodu dočkali velkého úspěchu – Emerson Fittipaldi zvítězil v letech 1973 a 1974, zatímco v roce 1975 triumfoval Carlos Pace.`,    
                  ]
            
            },

      {
        question: "Jaký je ten okruh?",
        answer:[ `Stejně jako řada okruhů vzniklých před druhou světovou válkou má i Autódromo José Carlos Pace klopené zatáčky. 
                    Kolo zde začíná na úseku připomínajícím polovinu oválu – ostatně v období mezi lety 1957 a návratem Formule 1 v roce 1990 bylo možné trať využívat i jako velký ovál.`,
                
                `Po průjezdu esíčkem Senna S a následném sjezdu k 4. zatáčce pokračují jezdci technickou pasáží vnitřní části okruhu, kde se musí vypořádat i s proměnlivým sklonem tratě.`,

                `Závěr kola pak vede zpět do kopce a přes klopenou poslední zatáčku.`,
                ]
      },

      {
        question: "Proč tam jet?",
        answer: [ `V Brazílii panuje během závodního víkendu jedinečná, téměř karnevalová atmosféra, 
                    která patří k nejvýraznějším v celém kalendáři Formule 1. 
                    Sledovat závod po boku místních fanoušků na okruhu Autódromo José Carlos Pace je zážitek, 
                    který by si žádný příznivec tohoto sportu neměl nechat ujít.`,

                  `Navíc se na startovní rošt vrací domácí jezdec Gabriel Bortoleto, což ještě více umocňuje celkovou atmosféru a energii celého podniku.`,
                  ]
      },

      {
        question: "Kde je nejlepší místo na sledování?",
        answer: [`Díky charakteru okruhu ve tvaru „přirozeného kotle“ nabízí Autódromo José Carlos Pace velmi dobrý přehled o dění na trati.`,

                  `Tribuna A, umístěná u klopeného nájezdu na cílovou rovinku, 
                    poskytuje kombinovaný výhled – jezdce lze sledovat jak v technické vnitřní části okruhu, 
                    tak při průjezdu přímo pod tribunou.`,   

                    `Na opačném konci rovinky se nachází tribuna M, odkud je ideální pohled na první zatáčku a sekci Senna S, která patří k nejlepším místům pro předjíždění.`,   

                    
]
      }
    ]
  },

  // ===== Las Vegas =====
  {
    id: "las_vegas",
    name: "FORMULA 1 HEINEKEN LAS VEGAS GRAND PRIX 2026",
    shortName: "Las Vegas",
    schedule: [
      { date: "20 listopadu",     name: "Trénink 1",                   time: "1:30 - 2:30",  result:"výsledek" },
      { date: "20 listopadu",     name: "Trénink 2",                   time: "5:00 - 6:00",  result:"výsledek" },
      { date: "21 listopadu",     name: "Trénink 3",                   time: "1:30 - 2:30",  result:"výsledek" },
      { date: "21 listopadu",     name: "Kvalifikace",                 time: "5:00 - 6:00",  result:"výsledek" },
      { date: "22 listopadu",     name: "Závod",                       time: "5:00",          result:"výsledek" }
    ], 

    circuit: [ 
            { label: "Délka okruhu", value:  "6.201 km"},
            { label: "Počet kol",    value:  "50"},
            { label: "První velká cena", value:  "2023"},
            { label: "Délka závodu", value:  "309.958 km"},
            { label: "Nejrychlejší kolo", value:  "1:33.365", extra: "Max Verstappen (2025)", full: true} 
    ],  

     info: [
      {
        question: "Kdy byl okruh Las Vegas Strip Circuit vybudován?",
        answer: [`Sezóna Formule 1 2023 přinesla zcela nový okruh Las Vegas Strip Circuit, který vede přímo srdcem Las Vegas.`,

                    `Trať zahrnuje nejznámější části města, včetně slavného bulváru Strip, a nabízí tak jedinečné spojení motorsportu a ikonického městského prostředí.`,
              ]

      },

      {
        question: "Kdy se zde jela první Velká cena?",
        answer: [
                    `Las Vegas hostilo závody Formule 1 již v minulosti, konkrétně v letech 1981 a 1982 pod názvem Caesars Palace Grand Prix. 
                        V obou případech šlo o závěrečný podnik sezóny.`,

                    `V roce 1981 zvítězil Alan Jones, zatímco o rok později si své první vítězství ve Formuli 1 připsal Michele Alboreto.`,    

                    `Současně zde Nelson Piquet a Keke Rosberg získali své mistrovské tituly, a to shodně po pátém místě v závodě.`,    
                  ]
            
            },

      {
        question: "Jaký je ten okruh?",
        answer:[ `Nový městský okruh Las Vegas Strip Circuit o délce 6,2 km a se 17 zatáčkami vede přímo centrem Las Vegas a míjí ikonická místa, 
                    jako jsou Caesars Palace, Bellagio či The Venetian.`,
                
                `Díky průměrným rychlostem srovnatelným s Autodromo Nazionale Monza, přezdívaným „chrám rychlosti“, nabízí trať dynamické závody s množstvím předjížděcích soubojů.`,
                ]
      },

      {
        question: "Proč tam jet?",
        answer: [ `Velká cena v Las Vegas si i nadále drží mimořádnou popularitu, kterou ještě posílil působivý debutní ročník v roce 2023. 
                    Ten nabídl jezdcům i fanouškům jedinečný zážitek a vzbudil velká očekávání do dalších let.`,

                  `Díky typické atmosféře tohoto města, večernímu závodu pod umělým osvětlením 
                    a bohatému doprovodnému programu mimo trať se jedná o jeden z nejatraktivnějších podniků v kalendáři Formule 1.`,
                  ]
      },

      {
        question: "Kde je nejlepší místo na sledování?",
        answer: [`Pro závodní víkend v Las Vegas je k dispozici široká škála vstupenek – od exkluzivních VIP balíčků přes tribuny až po vstupy bez rezervace..`,

                  `Ať už zvolíte jakoukoli variantu, čeká vás mimořádný zážitek. 
                    Vozy Formule 1 se zde prohánějí po rychlé městské trati zasazené do jednoho z nejživějších a vizuálně nejpůsobivějších prostředí v celém kalendáři.`,   
]
      }
    ]
  }, 

  // ===== Katar =====
  {
    id: "katar",
    name: "FORMULA 1 QATAR AIRWAYS QATAR GRAND PRIX 2026",
    shortName: "Kataru",
    schedule: [
      { date: "27 listopadu",     name: "Trénink 1",                   time: "14:30 - 15:30",  result:"výsledek" },
      { date: "27 listopadu",     name: "Trénink 2",                   time: "18:00 - 19:00",  result:"výsledek" },
      { date: "28 listopadu",     name: "Trénink 3",                   time: "15:30 - 16:30",  result:"výsledek" },
      { date: "28 listopadu",     name: "Kvalifikace",                 time: "19:00 - 20:00",  result:"výsledek" },
      { date: "29 listopadu",     name: "Závod",                       time: "17:00",          result:"výsledek" }
    ], 

    circuit: [ 
            { label: "Délka okruhu", value:  "5.419 km"},
            { label: "Počet kol",    value:  "57"},
            { label: "První velká cena", value:  "2023"},
            { label: "Délka závodu", value:  "308.611 km"},
            { label: "Nejrychlejší kolo", value:  "1:22.384", extra: "Lando Norris (2024)", full: true} 
    ],  

     info: [
      {
        question: "Kdy byl okruh Lusail International Circuit postaven?",
        answer: [`Okruh Lusail International Circuit, který se nachází na okraji hlavního města Doha, 
                    byl vybudován v souvislosti s pořádáním první Velké ceny Kataru v MotoGP v roce 2004.`,

                    `Výstavba tratě byla dokončena během necelého jednoho roku.`,
              ]

      },

      {
        question: "Kdy se zde jela první Velká cena?",
        answer: [
                    `Rok 2021 znamenal premiéru Katar v mistrovství světa Formule 1.`,

                    `Země následně uzavřela smlouvu na dalších deset let, na jejímž základě se závody pravidelně konají od roku 2023.`,      
                  ]
            
            },

      {
        question: "Jaký je ten okruh?",
        answer:[ `Okruh Lusail International Circuit o délce 5,4 km byl původně navržen především pro motocyklové závody, čemuž odpovídá jeho charakter.`,
                
                `Trať je rychlá a plynulá, s převahou středně rychlých a rychlých zatáček. 
                  Více než jeden kilometr z celkové délky tvoří hlavní rovinka, která nabízí ideální podmínky pro předjíždění při nájezdu do první zatáčky.`,
                ]
      },

      {
        question: "Proč tam jet?",
        answer: [ `Pokud žijete na severní polokouli a láká vás v listopadu uniknout chladnějšímu počasí, Katar představuje ideální volbu. 
                    V tomto období se zde teploty pohybují kolem příjemných 28 °C.`,

                  `Díky stabilnímu a teplému klimatu nabízí země široké možnosti pro venkovní aktivity – od jízdy na motokárách přímo na okruhu Lusail International Circuit až po výlety do pouště, 
                      kde si lze vyzkoušet například sandboarding, jízdu na velbloudech či terénní jízdu vozy 4x4.`,
                  ]
      },

      {
        question: "Kde je nejlepší místo na sledování?",
        answer: [`Hlavní tribuna na okruhu Lusail International Circuit nabízí centrální výhled na klíčové části tratě, včetně cílové rovinky, boxové uličky i zázemí týmů.`,

                  `Tribuna T2 pak představuje ideální místo pro sledování dění v úvodních zatáčkách, kde se často odehrávají první souboje po startu.`,   
]
      }
    ]
  },

  // ===== Abu dhabi =====
  {
    id: "abu_dhabi",
    name: "FORMULA 1 ETIHAD AIRWAYS ABU DHABI GRAND PRIX 2026",
    shortName: "Abú Zabí",
    schedule: [
      { date: "4 prosince",     name: "Trénink 1",                   time: "10:30 - 11:30",  result:"výsledek" },
      { date: "4 prosince",     name: "Trénink 2",                   time: "14:00 - 15:00",  result:"výsledek" },
      { date: "5 prosince",     name: "Trénink 3",                   time: "11:30 - 12:30",  result:"výsledek" },
      { date: "5 prosince",     name: "Kvalifikace",                 time: "15:00 - 16:00",  result:"výsledek" },
      { date: "6 prosince",     name: "Závod",                       time: "14:00",          result:"výsledek" }
    ], 

    circuit: [ 
            { label: "Délka okruhu", value:  "5.281 km"},
            { label: "Počet kol",    value:  "58"},
            { label: "První velká cena", value:  "2009"},
            { label: "Délka závodu", value:  "306.183 km"},
            { label: "Nejrychlejší kolo", value:  "1:25.637", extra: "Kevin Magnussen (2024)", full: true} 
    ],  

     info: [
      {
        question: "Kdy byl okruh Yas Marina Circuit postaven?",
        answer: [`V roce 2006 byly představeny plány na rozvoj Yas Island, ležící východně od Abú Zabí, 
                    jako nové turistické destinace. Klíčovou součástí projektu byl i závodní okruh o délce 5,5 km.`,

                    `Samotná výstavba Yas Marina Circuit začala v květnu 2007 a byla dokončena v říjnu 2009.`,
              ]

      },

      {
        question: "Kdy se zde jela první Velká cena?",
        answer: [
                    `V roce 2009. Okruh Yas Marina Circuit debutoval jako závěrečný podnik sezóny Formule 1, 
                      přičemž vítězství si připsal Sebastian Vettel před svým týmovým kolegou Markem Webberem a již korunovaným mistrem světa Jensonem Buttonem.`,

                    `O rok později zde Sebastian Vettel získal svůj první titul mistra světa, což bylo doprovázeno velmi emotivními momenty.`,      
                  ]
            
            },

      {
        question: "Jaký je ten okruh?",
        answer:[ `Okruh Yas Marina Circuit navržený Hermannem Tilkem je charakteristický dlouhou rovinkou o délce přibližně 1,2 km mezi zatáčkami 5 a 6. 
                    Díky pomalým zatáčkám na jejím začátku i konci jde o jedno z hlavních míst pro předjíždění.`,
                
                `Zajímavou pasáží je také technický úsek zatáček 10 až 12, kde musí jezdci intenzivně brzdit i při vysokém bočním zatížení vozu.`,

                `Úpravy provedené před sezonou 2021, včetně výrazně klopené zatáčky 9, trať mírně zkrátily na 5,28 km a zároveň přispěly k dynamičtějšímu průběhu závodů.`,
                ]
      },

      {
        question: "Proč tam jet?",
        answer: [ `Yas Island byla původně prázdným prostorem, který se postupně proměnil v rozsáhlou turistickou destinaci. 
                    Během přibližně jedenácti let a investic ve výši zhruba 40 miliard dolarů zde vznikl komplex nabízející široké spektrum aktivit.`,

                  `Návštěvníci zde najdou několik luxusních hotelů, zábavní park Ferrari World Abu Dhabi, nákupní centrum, aquapark, golfové hřiště, pláž, koncertní arénu i noční kluby.`,

                  `To vše doplňuje stabilní a slunečné klima Spojený arabských emirátů, které z této lokality činí atraktivní místo pro návštěvníky po celý rok.`,
                  ]
      },

      {
        question: "Kde je nejlepší místo na sledování?",
        answer: [`Pokud se vám nepodaří zajistit ubytování s výhledem na trať v ikonickém Yas Hotel Abu Dhabi ani místo na lodi v přístavu, vhodnou alternativou je tribuna West. 
                  Ta nabízí výborný výhled na brzdění a předjížděcí manévry v nájezdu do 6. zatáčky.`,

                  `Pro ty, kteří dávají přednost atmosféře, je ideální hlavní tribuna u cílové rovinky, odkud lze sledovat nejen start závodu, 
                  ale i typické večerní ohňostroje v Abú Zabí.`,   

                  
                  `Z praktického hlediska se vyplatí zvolit vyšší místa v tribunách, která poskytují lepší přehled o trati a zároveň větší ochranu před sluncem.`,   
]
      }
    ]
  },

];
// 1. DATA
// ===== AUSTRÁLIE =====
const races = [
  {
    id: "australie",
    name: "Australian Grand Prix 2026",
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
    schedule: [
      { date: "27 března", name: "Trénink 1",       time: "3:30 - 4:30",  result:"výsledek" },
      { date: "27 března", name: "Trénink 2",       time: "7:00 - 8:00",  result:"výsledek" },
      { date: "28 března", name: "Trénink 3",       time: "3:30 - 4:30",  result:"výsledek" },
      { date: "28 března", name: "Kvalifikace",     time: "7:00 - 8:00",  result:"výsledek" },
      { date: "29 března", name: "Závod",           time: "7:00",          result:"výsledek"}
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
  }

];

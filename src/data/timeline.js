// Historical data compiled from publicly documented sources.
// This is an educational summary, not an exhaustive academic account.
// Always verify against primary sources for research or academic use.

import { images } from "./images"

export const timelineEvents = [
  {
    year: "1954",
    phase: "before",
    title: "Late Colonial Period",
    location: "Ruanda-Urundi (Belgian Trust Territory)",
    summary:
      "Rwanda was administered by Belgium as part of the UN Trust Territory of Ruanda-Urundi. Belgian colonial policy had entrenched ethnic identity cards distinguishing Hutu, Tutsi and Twa, deepening divisions that would shape the following decades.",
    events: [
      "Rwanda remains under Belgian UN trusteeship, administered indirectly through the Tutsi monarchy.",
      "Colonial identity-card policies (introduced in the 1930s) continue to formalize ethnic classification.",
    ],
    source: "UN Trusteeship Council records; Belgian colonial administration archives",
  },
  {
    year: "1959",
    phase: "before",
    title: "The Rwandan Revolution",
    location: "Rwanda",
    summary:
      "A period of civil unrest, often called the 'Social Revolution,' began in November 1959. Violence between Hutu and Tutsi communities led to the displacement of tens of thousands of Tutsi into neighboring countries and marked the beginning of the end of the Tutsi monarchy.",
    events: [
      "Widespread violence following the death of King Mutara III Rudahigwa.",
      "Large-scale displacement of Tutsi refugees to Uganda, Burundi, Tanzania and Congo.",
    ],
    source: "Prunier, G. (1995). The Rwanda Crisis: History of a Genocide.",
  },
  {
    year: "1962",
    phase: "1954-1962",
    title: "Independence",
    location: "Kigali",
    summary:
      "On 1 July 1962, Rwanda became independent from Belgium. Grégoire Kayibanda, leader of the PARMEHUTU party, became the country's first president as the monarchy was abolished and the Republic of Rwanda was established.",
    events: [
      "Belgium grants Rwanda full independence on 1 July 1962.",
      "Grégoire Kayibanda becomes Rwanda's first president.",
      "Rwanda is admitted to the United Nations on 18 September 1962.",
    ],
    source: "U.S. Department of State Office of the Historian; UN membership records",
    image: images.flag,
  },
  {
    year: "1973",
    phase: "1962-1994",
    title: "Change of Government",
    location: "Rwanda",
    summary:
      "In July 1973, Juvénal Habyarimana, an army officer, seized power in a coup, ending Kayibanda's presidency. Habyarimana would rule as a one-party head of state for the following two decades.",
    events: [
      "Juvénal Habyarimana takes power in a military coup.",
      "The Mouvement Révolutionnaire National pour le Développement (MRND) becomes the sole legal party.",
    ],
    source: "Prunier, G. (1995). The Rwanda Crisis: History of a Genocide.",
  },
  {
    year: "1990",
    phase: "1962-1994",
    title: "Civil War Begins",
    location: "Northern Rwanda",
    summary:
      "The Rwandan Civil War began on 1 October 1990 when the Rwandan Patriotic Front (RPF), composed largely of Tutsi refugees, invaded from Uganda. The conflict, combined with escalating ethnic propaganda, intensified tensions that culminated in 1994.",
    events: [
      "RPF forces cross into Rwanda from Uganda, beginning the civil war.",
      "Peace negotiations eventually lead to the Arusha Accords, signed in August 1993.",
    ],
    source: "United Nations peacekeeping archives (UNAMIR); Des Forges, A. (1999). Leave None to Tell the Story.",
  },
  {
    year: "1994",
    phase: "1994",
    title: "Genocide Against the Tutsi",
    location: "Rwanda, nationwide",
    summary:
      "Following the death of President Habyarimana on 6 April 1994, extremist forces carried out a planned genocide against the Tutsi population, also killing moderate Hutu who opposed the violence. Over roughly 100 days, an estimated 800,000 to 1,000,000 people were killed. The RPF ended the genocide in July 1994 by taking military control of the country.",
    events: [
      "6 April 1994: President Habyarimana's plane is shot down; genocide begins within hours.",
      "April–July 1994: Genocide against the Tutsi is carried out across the country.",
      "4 July 1994: RPF forces take Kigali; the genocide is declared over by mid-July.",
      "Millions of refugees, mostly Hutu, flee to neighboring Zaire (now DR Congo), Tanzania and Burundi.",
    ],
    source: "United Nations (OSAPG); Des Forges, A. (1999). Leave None to Tell the Story, Human Rights Watch.",
    sensitive: true,
  },
  {
    year: "2000",
    phase: "rebuild",
    title: "Reconstruction and Gacaca",
    location: "Rwanda, nationwide",
    summary:
      "Paul Kagame became president in 2000. The government established community-based Gacaca courts (operating 2002–2012) to try genocide-related cases, alongside the UN-established International Criminal Tribunal for Rwanda (ICTR, 1994–2015), as part of a national reconciliation process.",
    events: [
      "Paul Kagame becomes President of Rwanda in 2000.",
      "Gacaca community courts are piloted from 2002, processing an estimated 1.9 million cases by 2012.",
      "Vision 2020, Rwanda's long-term development framework, is adopted.",
    ],
    source: "National Unity and Reconciliation Commission (NURC); ICTR records",
    image: images.parliament,
  },
  {
    year: "2010",
    phase: "rebuild",
    title: "Growth and Institution-Building",
    location: "Rwanda",
    summary:
      "Rwanda pursued sustained economic growth, expansion of universal health insurance (Mutuelle de Santé), and governance reforms that saw it recognized internationally for gains in ease of doing business and gender representation in parliament.",
    events: [
      "Rwanda records some of the highest rates of women's parliamentary representation in the world.",
      "Community-based health insurance coverage expands significantly through the 2000s and 2010s.",
    ],
    source: "World Bank; Inter-Parliamentary Union data",
    image: images.kigaliCbd,
  },
  {
    year: "2020",
    phase: "digital",
    title: "Digital Transformation Push",
    location: "Rwanda",
    summary:
      "Rwanda accelerated digital government services, ICT infrastructure and its positioning as an East African innovation and conference hub (Kigali Convention Centre, Vision 2050 launch), while also managing the COVID-19 pandemic response.",
    events: [
      "Vision 2050, Rwanda's long-term development strategy succeeding Vision 2020, is adopted.",
      "Irembo, the national e-government platform, expands access to public services online.",
    ],
    source: "Rwanda Ministry of ICT and Innovation; Government of Rwanda, Vision 2050 document",
    image: images.kigaliStreet2016,
  },
  {
    year: "2026",
    phase: "today",
    title: "Rwanda Today",
    location: "Rwanda",
    summary:
      "Rwanda continues one of Africa's fastest-growing economies, driven by services, construction and agriculture, alongside continued investment in technology, healthcare and tourism as pillars of the National Strategy for Transformation (NST2).",
    events: [
      "Rwanda's economy grew an estimated 8.9% in 2024, among the fastest in the region.",
      "The National Strategy for Transformation (NST2, 2024–2029) guides current development priorities.",
    ],
    source: "World Bank Rwanda Economic Update; Government of Rwanda NST2",
    image: images.kigaliStreet2016,
  },
  {
    year: "2030",
    phase: "future",
    title: "Vision 2030 Horizon",
    location: "Rwanda",
    summary:
      "Rwanda's medium-term targets under NST2 and the longer Vision 2050 framework outline aspirations toward upper-middle-income status, expanded digital services, green growth and continued urbanization. These are stated government goals and projections, not guaranteed outcomes.",
    events: [
      "Vision 2050 targets high-income country status by 2050, with upper-middle-income status as an intermediate milestone.",
      "Continued investment planned in green energy, smart cities and the knowledge economy.",
    ],
    source: "Government of Rwanda, Vision 2050 and NST2 documents",
    speculative: true,
  },
]

export const beforeHistory = {
  title: "Before 1954",
  summary:
    "Rwanda's history extends many centuries before this website's timeline begins. The pre-colonial Kingdom of Rwanda was a centralized state with its own political institutions, social structure and cultural traditions, governed by a Mwami (king). German colonization began in the 1890s as part of German East Africa; after World War I, Belgium administered the territory under a League of Nations, later UN, mandate. This site's 1954–2030 timeline is a window into a much longer history.",
  source: "Newbury, C. (1988). The Cohesion of Oppression; Vansina, J. (2004). Antecedents to Modern Rwanda.",
}

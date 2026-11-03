// Real, freely-licensed photographs sourced from Wikimedia Commons.
// Each entry links back to its Commons file page, which carries full
// author and license details, per Creative Commons attribution requirements.
// Files are served via Wikimedia's Special:FilePath redirect, which resolves
// to the current canonical copy of the file at the requested width.

const commons = (file, width = 1000) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`

const commonsPage = (file) =>
  `https://commons.wikimedia.org/wiki/File:${file.replace(/ /g, "_")}`

export const images = {
  kigaliCbd: {
    src: commons("CentralKigali.jpg"),
    alt: "The centre of Kigali, Rwanda, 2006",
    credit: "SteveRwanda / Wikimedia Commons, CC BY-SA 3.0",
    commonsUrl: commonsPage("CentralKigali.jpg"),
  },
  kigaliStreet2016: {
    src: commons("Kigali street scene 2016.jpg"),
    alt: "A street scene in Kigali's central business district, December 2016",
    credit: "ITU Regional Development Forum for Africa / Wikimedia Commons, CC BY 2.0",
    commonsUrl: commonsPage("Kigali street scene 2016.jpg"),
  },
  parliament: {
    src: commons("RwandaParliament.jpg"),
    alt: "The Parliament building in Kigali, Rwanda",
    credit: "Amakuru / Wikimedia Commons, CC BY-SA 3.0",
    commonsUrl: commonsPage("RwandaParliament.jpg"),
  },
  nyanzaPalace: {
    src: commons("Rwanda Nyanza Mwami Palace.jpg"),
    alt: "A reconstruction of the traditional King's Palace at Nyanza, Rwanda",
    credit: "Amakuru / Wikimedia Commons, CC BY-SA 3.0",
    commonsUrl: commonsPage("Rwanda Nyanza Mwami Palace.jpg"),
  },
  mountainGorilla: {
    src: commons("Mountain gorilla from Susa Group in Karisimbi thicket of Volcanoes National Park in Rwanda. Emmanuel Kwizera.jpg"),
    alt: "A mountain gorilla from the Susa Group, Volcanoes National Park, Rwanda",
    credit: "Emmanuel Kwizera / Wikimedia Commons, CC BY-SA",
    commonsUrl: commonsPage("Mountain gorilla from Susa Group in Karisimbi thicket of Volcanoes National Park in Rwanda. Emmanuel Kwizera.jpg"),
  },
  imigongo: {
    src: commons("Imigongo art.jpg"),
    alt: "Imigongo geometric art, Rwanda",
    credit: "Wikimedia Commons (Category: Art in Rwanda) — see file page for full attribution",
    commonsUrl: commonsPage("Imigongo art.jpg"),
  },
  agaseke: {
    src: commons("Agaseke art.jpg"),
    alt: "Agaseke woven baskets, Rwanda",
    credit: "Wikimedia Commons (Category: Art in Rwanda) — see file page for full attribution",
    commonsUrl: commonsPage("Agaseke art.jpg"),
  },
  intore: {
    src: commons("Intore ihamiriza.jpg"),
    alt: "Intore traditional dance performance, Rwanda",
    credit: "Wikimedia Commons (Category: Art in Rwanda) — see file page for full attribution",
    commonsUrl: commonsPage("Intore ihamiriza.jpg"),
  },
  basketWeaving: {
    src: commons("Rwandan basket weaving.jpg"),
    alt: "Traditional Rwandan basket weaving",
    credit: "Wikimedia Commons (Category: Art in Rwanda) — see file page for full attribution",
    commonsUrl: commonsPage("Rwandan basket weaving.jpg"),
  },
  flag: {
    src: commons("Flag_of_Rwanda.svg", 400),
    alt: "Flag of Rwanda",
    credit: "Wikimedia Commons, public domain (official design)",
    commonsUrl: commonsPage("Flag_of_Rwanda.svg"),
  },
}

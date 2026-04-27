export type Product = {
  id: string;
  category: string;
  group: 'ro' | 'solar' | 'inverter' | 'ctrl' | 'gen' | 'm' | 'ice' | 'spare' | 'el';
  name: string;
  brand: string;
  img: string;
  desc: string;
  specs: [string, string][];
  tags: string[];
};

export const catalogProducts: Product[] = [
  {
    id: "sp-01",
    group: "spare",
    category: "RO Spare Parts",
    name: "RO Membrane Elements — Brackish & Seawater",
    brand: "DuPont FilmTec / Toray / Hydranautics",
    img: "/images/catalog_ro_membrane.png",
    desc: "Replacement membrane elements for brackish water and seawater RO systems. Available in standard 4040 and 8040 formats — compatible with all common pressure vessel housings. Contact Alnaciim with your system details for correct specification.",
    specs: [
      ["4040 Brackish", "4\" diameter · 40\" length"],
      ["8040 Brackish", "8\" diameter · 40\" length"],
      ["8040 Seawater", "High-pressure — SWRO rated"]
    ],
    tags: ["Membranes", "4040", "8040", "BW", "SWRO", "Desalination"]
  },
  {
    id: "sp-02",
    group: "spare",
    category: "RO Spare Parts",
    name: "Sediment Pre-Filter Cartridges",
    brand: "Various OEM",
    img: "/images/catalog_sediment_filter.png",
    desc: "Sediment cartridges protect RO membrane elements from suspended solids and particulate matter in the feed water. Available in wound polypropylene and pleated polyester media, in standard 10-inch and 20-inch lengths. Replace on a timed schedule or when system pressure drop increases.",
    specs: [
      ["Micron ratings", "1µm · 5µm · 10µm · 25µm · 50µm"],
      ["Lengths", "10 inch (254mm) · 20 inch (508mm)"],
      ["Outer diameter", "63mm standard"],
      ["Max pressure", "8 bar"],
      ["Max temperature", "60°C"],
      ["Replacement interval", "Monthly to quarterly — turbidity dependent"]
    ],
    tags: ["Sediment", "5 Micron", "Polypropylene", "Pre-filter"]
  },
  {
    id: "sp-03",
    group: "spare",
    category: "RO Spare Parts",
    name: "High-Flow Filter Cartridges",
    brand: "Industrial OEM",
    img: "/images/catalog_high_flow_filter.png",
    desc: "High-flow filter cartridges are designed for large-volume RO systems where space and quick maintenance are priorities. These large-diameter pleated filters offer exceptionally low pressure drop and high dirt-holding capacity, reducing the total number of filters required per housing.",
    specs: [
      ["Micron Ratings", "1µm · 5µm · 10µm"],
      ["Outer Diameter", "6 inch (152mm)"],
      ["Lengths", "40 inch / 60 inch"],
      ["Flow Capacity", "Up to 80m³/hr per element"],
      ["End Cap Style", "Single Open End (SOE) with handle"]
    ],
    tags: ["High Flow", "Industrial", "40-inch", "80 m3/h"]
  },
  {
    id: "sp-04",
    group: "spare",
    category: "RO Spare Parts",
    name: "Activated Carbon Filter Cartridges",
    brand: "Various OEM",
    img: "/images/catalog_carbon_filter.png",
    desc: "Activated carbon cartridges are critical for removing free chlorine and organic compounds from feed water, which can otherwise cause permanent chemical damage to polyamide RO membranes. We offer high-capacity extruded carbon blocks (CTO) and Granular Activated Carbon (GAC) formats.",
    specs: [
      ["Formats", "Extruded Carbon Block (CTO) · GAC"],
      ["Chlorine Reduction", ">95% removal efficiency"],
      ["Lengths", "10\" and 20\" (Standard & Big Blue)"],
      ["Max flow", "15–20 LPM (standard 20\" block)"],
      ["Service life", "6 months or 1 bar pressure drop"]
    ],
    tags: ["Carbon", "CTO", "GAC", "Chlorine Removal"]
  },
  {
    id: "sp-05",
    group: "spare",
    category: "RO Spare Parts",
    name: "Antiscalant — RO Scale Inhibitor",
    brand: "Genesys / King Lee / Avista",
    img: "/images/catalog_antiscalant_drum.png",
    desc: "Antiscalants are high-performance liquid chemicals injected into feed water to prevent the scaling of RO membrane surfaces by calcium carbonate, sulfates, and silica. Using Alnaciim antiscalants allows systems to operate at higher recovery rates while extending the time between membrane cleanings.",
    specs: [
      ["Form", "Liquid concentrate"],
      ["Dosing rate", "1 – 6 mg/L of feed water"],
      ["Target scale types", "CaCO₃ · CaSO₄ · BaSO₄ · SiO₂"],
      ["Packaging", "20L drum · 200L drum"],
      ["Shelf life", "12 months sealed"],
      ["Selection basis", "Feed water analysis required"]
    ],
    tags: ["Antiscalant", "Scale Inhibitor", "Liquid", "Maintenance"]
  },
  {
    id: "sp-06",
    group: "spare",
    category: "RO Spare Parts",
    name: "Biocide — Membrane Disinfectant",
    brand: "Industrial OEM",
    img: "/images/catalog_biocide_drum.png",
    desc: "Non-oxidising biocide for controlling biological fouling in RO membrane systems. Used for periodic operational dosing and for membrane preservation during shutdown. Safe for use with thin-film composite polyamide membranes — flush system before returning to production.",
    specs: [
      ["Chemistry type", "Non-oxidising (DBNPA / CMIT-MIT)"],
      ["Operational dosing", "10 – 50 mg/L intermittent"],
      ["Preservation dosing", "100 – 200 mg/L soak solution"],
      ["Target", "Biofilm · Bacteria · Algae"],
      ["Packaging", "25L drum · 200L drum"],
      ["Shelf Life", "2 years"]
    ],
    tags: ["Biocide", "Disinfectant", "Biofouling", "Maintenance"]
  },
  {
    id: "sp-07",
    group: "spare",
    category: "RO Spare Parts",
    name: "CIP Cleaning Chemicals — Matched Pair",
    brand: "Industrial OEM",
    img: "/images/catalog_cip_chemicals.png",
    desc: "Matched clean-in-place chemical pair for restoring RO membrane performance. The acid stage removes mineral scale and iron deposits; the caustic stage removes biofilm and organic fouling. Both are safe for thin-film composite membranes and are diluted in permeate water on site.",
    specs: [
      ["Chemical A — acid", "Citric acid · cleaning pH 2.0 – 4.0"],
      ["Chemical B — caustic", "NaOH · cleaning pH 11.0 – 12.0"],
      ["Cleaning temperature", "25°C – 35°C"],
      ["Contact time", "30 – 60 min recirculation"],
      ["Packaging", "25L drum per chemical"],
      ["Recommended interval", "Every 3 – 12 months"]
    ],
    tags: ["CIP", "Cleaning", "Low pH", "High pH", "Restoration"]
  },
  {
    id: "sp-08",
    group: "spare",
    category: "RO Spare Parts",
    name: "Pressure Vessel End Caps & O-rings",
    brand: "OEM Compatible",
    img: "/images/catalog_end_caps_seals.png",
    desc: "Sealing components for RO pressure vessel housings — end caps, brine seals and O-rings. Inspect and replace at every membrane change. A worn brine seal allows feed water to bypass the membrane, causing unexplained rejection rate decline. Stocked in most common 4040 and 8040 sizes.",
    specs: [
      ["4040 brine seal OD", "101mm"],
      ["8040 brine seal OD", "201mm"],
      ["Seal materials", "EPDM (standard) · Viton (chemical service)"],
      ["O-ring materials", "EPDM · Buna-N · Viton"],
      ["End cap material", "ABS plastic · Polysulfone"]
    ],
    tags: ["End Caps", "O-rings", "Brine Seals", "Sealing", "EPDM"]
  },
  {
    id: "sp-09",
    group: "spare",
    category: "RO Spare Parts",
    name: "HP Pump Mechanical Seal Kits",
    brand: "Grundfos / Danfoss / Cat Pumps",
    img: "/images/catalog_pump_seal_kit.png",
    desc: "Replacement mechanical seal kits for high-pressure RO feed pumps. A failing seal will cause visible leakage and pressure loss — replacement is a routine scheduled maintenance item. Complete kits include all seal faces, O-rings and gaskets for one pump. Enquire with pump make and shaft diameter for exact match.",
    specs: [
      ["Seal faces", "Silicon carbide / carbon · Ceramic / carbon"],
      ["Elastomers", "EPDM · Buna-N · Viton"],
      ["Shaft sizes", "16mm · 19mm · 24mm · 32mm"],
      ["Max pressure", "40 bar"],
      ["Max temperature", "90°C EPDM · 120°C Viton"],
      ["Replacement interval", "8,000 – 15,000 operating hours"]
    ],
    tags: ["Pump Seals", "HP Pump", "Mechanical Seal", "40 Bar", "Grundfos"]
  }
];

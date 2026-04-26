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
    img: "/images/water_purification_industrial_1774886325880.png",
    desc: "Replacement membrane elements for brackish water and seawater RO systems. Compatible with all common pressure vessel housings.",
    specs: [
      ["Standard formats", "4040 and 8040"],
      ["4040 Brackish", "4\" diameter · 40\" length"],
      ["8040 Brackish", "8\" diameter · 40\" length"],
      ["8040 Seawater", "High-pressure — SWRO rated"],
      ["Salt Rejection", "≥ 99.5% BW · ≥ 99.7% SW"],
      ["Max Pressure", "41 bar BW · 83 bar SW"]
    ],
    tags: ["Membranes", "4040", "8040", "BW", "SWRO", "Desalination"]
  },
  {
    id: "sp-02",
    group: "spare",
    category: "RO Spare Parts",
    name: "Sediment Pre-Filter Cartridges",
    brand: "Various OEM",
    img: "/images/product_2_1769514225866.png",
    desc: "High-quality melt-blown or pleated polypropylene cartridges designed for high-efficiency sediment removal.",
    specs: [
      ["Sizes", "10-inch and 20-inch Standard/Big Blue"],
      ["Filtration", "5 Micron / 10 Micron"],
      ["Material", "100% Pure Polypropylene"],
      ["Removes", "Sand, silt, dirt, and rust particles"]
    ],
    tags: ["Sediment", "5 Micron", "10 Micron", "Big Blue", "Pre-filter"]
  },
  {
    id: "sp-03",
    group: "spare",
    category: "RO Spare Parts",
    name: "High-Flow Filter Cartridges",
    brand: "Industrial OEM",
    img: "/images/product_1_1769514214280.png",
    desc: "Designed for industrial applications requiring high flow rates in a compact footprint. Offers significantly higher surface area than standard filters.",
    specs: [
      ["Outside Diameter", "6-inch (152mm)"],
      ["Length", "40-inch and 60-inch options"],
      ["Flow Rate", "Up to 80 m³/h per element"],
      ["Configuration", "Inside-to-outside flow pattern"]
    ],
    tags: ["High Flow", "Industrial", "40-inch", "80 m3/h"]
  },
  {
    id: "sp-04",
    group: "spare",
    category: "RO Spare Parts",
    name: "Activated Carbon Filter Cartridges",
    brand: "Various OEM",
    img: "/images/product_3_1769514236086.png",
    desc: "Highly effective at removing chlorine, organic chemicals, and unpleasant tastes or odors. Protects RO membranes from oxidative damage.",
    specs: [
      ["Types", "Extruded Carbon Block (CTO) / GAC"],
      ["Sizes", "10\" and 20\" Standard/Big Blue"],
      ["Material", "Coconut shell / coal-based carbon"]
    ],
    tags: ["Carbon", "CTO", "GAC", "Chlorine Removal", "Coconut Shell"]
  },
  {
    id: "sp-05",
    group: "spare",
    category: "RO Spare Parts",
    name: "Antiscalant — RO Scale Inhibitor",
    brand: "Genesys / King Lee / Avista",
    img: "/images/water_maintenance_parts.png",
    desc: "High-performance liquid antiscalant designed to inhibit scale formation (calcium carbonate, sulfate, silica) on RO membrane surfaces.",
    specs: [
      ["Form", "Concentrated Liquid"],
      ["Packaging", "20kg / 25kg Jerrican or 200kg Drum"],
      ["pH Range", "2.0 - 12.0 (effective range)"]
    ],
    tags: ["Antiscalant", "Scale Inhibitor", "Liquid", "Maintenance"]
  },
  {
    id: "sp-06",
    group: "spare",
    category: "RO Spare Parts",
    name: "Biocide — Membrane Disinfectant",
    brand: "Industrial OEM",
    img: "/images/water_maintenance_parts.png",
    desc: "Broad-spectrum, non-oxidising biocide. Controls biofouling and microbial growth without damaging the delicate membrane layer.",
    specs: [
      ["Compatibility", "Polyamide and Cellulose Acetate"],
      ["Dosage", "Intermittent or continuous dosing"],
      ["Packaging", "25kg Jerrican"]
    ],
    tags: ["Biocide", "Disinfectant", "Biofouling", "Maintenance"]
  },
  {
    id: "sp-07",
    group: "spare",
    category: "RO Spare Parts",
    name: "CIP Cleaning Chemicals — Matched Pair",
    brand: "Industrial OEM",
    img: "/images/water_maintenance_parts.png",
    desc: "Specialized acidic and alkaline cleaners for restoring RO membrane performance. Supplied as a matched set.",
    specs: [
      ["Low pH Cleaner", "Removes mineral scale & metal hydroxides"],
      ["High pH Cleaner", "Removes silt, organics & biological matter"],
      ["Form", "Powder or Liquid Concentrate"]
    ],
    tags: ["CIP", "Cleaning", "Low pH", "High pH", "Restoration"]
  },
  {
    id: "sp-08",
    group: "spare",
    category: "RO Spare Parts",
    name: "Pressure Vessel End Caps, Brine Seals & O-rings",
    brand: "OEM Compatible",
    img: "/images/commercial_ro_systems_and_maintenance.png",
    desc: "Sealing components for RO pressure vessel housings. Essential for preventing feed water bypass and maintaining system rejection rates.",
    specs: [
      ["Compatibility", "4040 and 8040 sizes"],
      ["Components", "End caps, Brine Seals, O-rings"],
      ["Material", "EPDM / Viton / PTFE"]
    ],
    tags: ["End Caps", "O-rings", "Brine Seals", "Sealing", "EPDM"]
  },
  {
    id: "sp-09",
    group: "spare",
    category: "RO Spare Parts",
    name: "High-Pressure Pump Mechanical Seal Kits",
    brand: "Grundfos / Danfoss / Cat Pumps",
    img: "/images/commercial_ro_systems_and_maintenance.png",
    desc: "Replacement mechanical seal kits for high-pressure RO feed pumps. Designed to prevent leakage at the pump shaft.",
    specs: [
      ["Pressure Rating", "Up to 40 Bar"],
      ["Materials", "Silicon Carbide / Carbon / EPDM"],
      ["Compatibility", "Grundfos / Danfoss / Others"]
    ],
    tags: ["Pump Seals", "HP Pump", "Mechanical Seal", "40 Bar", "Grundfos"]
  }
];

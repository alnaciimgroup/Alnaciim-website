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
    id: "ro1",
    group: "ro",
    category: "RO System",
    name: "Brackish Water RO Plant — 300,000 USGPD",
    brand: "CELAR Water Equipment Co. LLC",
    img: "/images/catalog_ro_system_1774889781594.png",
    desc: "Large-scale industrial brackish water RO plant at 300,000 USGPD. Multi-stage pre-treatment, VFD-controlled HP pump trains, high-rejection membrane arrays, UV sterilisation, mineralisation and PLC-SCADA automation. One of the largest installations in the region.",
    specs: [["Capacity","300,000 USGPD"],["Feed water","Brackish"],["Pre-treatment","Multimedia · Softener · Antiscalant"],["HP Pumps","VFD-controlled"],["Post-treatment","UV · Mineralisation · pH correction"],["Control","PLC + SCADA"],["Supplier","CELAR Water Equipment Co. LLC"]],
    tags: ["300K USGPD","Brackish","Multi-Stage","UV","PLC-SCADA","CELAR"]
  },
  {
    id: "ro2",
    group: "ro",
    category: "RO System",
    name: "Brackish Water RO Plant — 150,000 USGPD",
    brand: "Multiple manufacturers available",
    img: "/images/catalog_ro_system_1774889781594.png",
    desc: "Mid-scale brackish water RO system at 150,000 USGPD for commercial and industrial supply. Full pre-treatment, RO membrane trains, UV and remineralisation post-treatment, PLC automation.",
    specs: [["Capacity","150,000 USGPD"],["Feed water","Brackish"],["Post-treatment","UV · Remineralisation"],["Control","PLC automated"]],
    tags: ["150K USGPD","Brackish","UV","PLC"]
  },
  {
    id: "ro3",
    group: "ro",
    category: "RO System",
    name: "Seawater Desalination RO — 50,000 USGPD",
    brand: "CELAR / International OEM",
    img: "/images/catalog_ro_system_1774889781594.png",
    desc: "Seawater RO desalination plant at 50,000 USGPD. High-pressure SWRO membranes at 55–70 bar. Energy recovery option. Full pre-treatment and post-treatment remineralisation.",
    specs: [["Capacity","50,000 USGPD"],["Feed water","Seawater"],["Pressure","55–70 bar"],["Pre-treatment","UF / cartridge"],["Energy recovery","ERD optional"]],
    tags: ["SWRO","50K USGPD","Desalination","High-Pressure"]
  },
  {
    id: "sp1",
    group: "solar",
    category: "Solar Panels",
    name: "JA Solar Monocrystalline — 540W to 580W",
    brand: "JA Solar Technology — Tier 1",
    img: "/images/solar_power_system.png",
    desc: "JA Solar Tier-1 monocrystalline PV panels in PERC and TOPCon technologies. Proven in high-irradiance climates. Used in Alnaciim 300 kWp solar installations.",
    specs: [["Output","540W – 580W"],["Technology","PERC / TOPCon"],["Efficiency","Up to 22.3%"],["Temp coeff","-0.34% / °C"],["Warranty","25-year output · 12-year product"]],
    tags: ["JA Solar","Tier 1","PERC","TOPCon","540–580W"]
  },
  {
    id: "sp2",
    group: "solar",
    category: "Solar Panels",
    name: "BYD Monocrystalline Panels — 540W to 570W",
    brand: "BYD Company Ltd — Tier 1",
    img: "/images/solar_power_system.png",
    desc: "BYD high-efficiency monocrystalline panels with bifacial option. Low degradation, suitable for high-irradiance environments. Used in Alnaciim 200 kWp solar installations.",
    specs: [["Output","540W – 570W"],["Technology","Mono bifacial / mono"],["Efficiency","Up to 21.9%"],["Bifacial gain","Up to 25%"],["Warranty","25-year output"]],
    tags: ["BYD","Tier 1","Bifacial","540–570W"]
  },
  {
    id: "sp3",
    group: "solar",
    category: "Solar Panels",
    name: "Canadian Solar HiKu — 400W to 545W",
    brand: "Canadian Solar Inc. — Tier 1",
    img: "/images/solar_power_system.png",
    desc: "Canadian Solar HiKu PERC monocrystalline panels. Reliable Tier-1 option for residential to utility-scale solar.",
    specs: [["Output","400W – 545W"],["Technology","Monocrystalline PERC"],["Efficiency","Up to 21.5%"],["Warranty","25-year performance"]],
    tags: ["Canadian Solar","Tier 1","PERC","400–545W"]
  },
  {
    id: "inv1",
    group: "inverter",
    category: "Inverters",
    name: "DEYE SUN-100k-G03 — 100 kW Three-Phase",
    brand: "Deye Inverter Technology",
    img: "/images/energy_inverters.png",
    desc: "100 kW three-phase string inverter. 10 MPPT inputs, 98.6% peak efficiency, IP65. Used in Alnaciim 300 kWp installations.",
    specs: [["Output","100 kW"],["Phase","Three-phase string"],["MPPT","10 × MPPT"],["Efficiency","98.6%"],["Comms","RS485 · WiFi"],["IP","IP65"]],
    tags: ["DEYE","100kW","3-Phase","10 MPPT","98.6%"]
  },
  {
    id: "inv2",
    group: "inverter",
    category: "Inverters",
    name: "SAJ Suntrio Plus 50K — 50 kW Three-Phase",
    brand: "SAJ Electric Co., Ltd",
    img: "/images/energy_inverters.png",
    desc: "SAJ 50K three-phase string inverter. 6 MPPT, 98.5% efficiency. Used in Alnaciim 200 kWp solar installations.",
    specs: [["Output","50 kW"],["Phase","Three-phase string"],["MPPT","6 × MPPT"],["Efficiency","98.5%"],["IP","IP66"]],
    tags: ["SAJ","50kW","3-Phase","6 MPPT","98.5%"]
  },
  {
    id: "inv3",
    group: "inverter",
    category: "Inverters",
    name: "DEYE Hybrid Inverter — 8 / 12 / 16 kW",
    brand: "Deye Inverter Technology",
    img: "/images/energy_inverters.png",
    desc: "DEYE hybrid inverter for residential and small commercial solar+battery. On-grid, off-grid and hybrid modes. Compatible with lithium and lead-acid batteries.",
    specs: [["Output","8 / 12 / 16 kW"],["MPPT","2 × MPPT"],["Battery","Li / Lead-acid"],["Modes","Grid · Off-grid · Hybrid"],["IP","IP65"]],
    tags: ["DEYE","Hybrid","8/12/16kW","Off-Grid","Battery"]
  },
  {
    id: "c1",
    group: "ctrl",
    category: "Solar Controllers",
    name: "DEIF ASC 150 — Advanced Solar Controller",
    brand: "DEIF A/S — Denmark",
    img: "/images/energy_intelligent_controller.png",
    desc: "Advanced solar controller managing PV-genset priority, load shedding and protection. Alnaciim Energy builds complete ASC 150 panels in-house.",
    specs: [["Function","Solar / genset coordinator"],["Features","PV priority · Load shedding"],["Comms","Modbus · CANbus · Ethernet"],["Panel build","Alnaciim in-house fabrication"]],
    tags: ["DEIF","ASC 150","Solar","Genset","PV Priority"]
  },
  {
    id: "c2",
    group: "ctrl",
    category: "Genset Controllers",
    name: "DEIF AGC 150 — Advanced Genset Controller",
    brand: "DEIF A/S — Denmark",
    img: "/images/energy_intelligent_controller.png",
    desc: "Full-featured genset controller for parallel and standalone operation. Auto-synchronisation, load sharing, AMF, comprehensive protection. Alnaciim builds panels in-house.",
    specs: [["Function","Advanced genset controller"],["Modes","Standalone · Parallel · AMF"],["Comms","Modbus · CANbus · IEC 61850"],["Panel build","Alnaciim in-house fabrication"]],
    tags: ["DEIF","AGC 150","Genset","Parallel","AMF"]
  },
  {
    id: "c3",
    group: "ctrl",
    category: "Genset Controllers",
    name: "DSE 6xxx Series — AMF Single Genset",
    brand: "Deep Sea Electronics — UK",
    img: "/images/energy_intelligent_controller.png",
    desc: "DSE 6xxx for single-genset AMF applications. Reliable and widely used across Alnaciim generator installations.",
    specs: [["Models","6120 · 6130 · 6139"],["Function","AMF — single genset"],["Comms","USB · RS232 · Modbus RTU"]],
    tags: ["DSE","6xxx","AMF","Single Genset"]
  },
  {
    id: "c4",
    group: "ctrl",
    category: "Genset Controllers",
    name: "DSE 7xxx Series — Parallel Load Sharing",
    brand: "Deep Sea Electronics — UK",
    img: "/images/energy_intelligent_controller.png",
    desc: "DSE 7xxx for multi-genset parallel with active and reactive load sharing.",
    specs: [["Models","7310 · 7320 · 7410 MKII"],["Function","Multi-genset parallel"],["Feature","Active + reactive load share"]],
    tags: ["DSE","7xxx","Parallel","Load Share"]
  },
  {
    id: "c5",
    group: "ctrl",
    category: "Genset Controllers",
    name: "DSE 8xxx Series — Advanced SCADA",
    brand: "Deep Sea Electronics — UK",
    img: "/images/energy_intelligent_controller.png",
    desc: "DSE 8xxx advanced controllers with Ethernet and Modbus TCP/IP for SCADA integration.",
    specs: [["Models","8610 MKII · 8660"],["Comms","Ethernet · Modbus TCP"],["Remote","Web page · SCADA"]],
    tags: ["DSE","8xxx","SCADA","Ethernet"]
  },
  {
    id: "g1",
    group: "gen",
    category: "Generator Sets",
    name: "Cummins Diesel Generator Sets — 20 to 2,000+ kVA",
    brand: "Cummins Inc. — via Jubaili Bros",
    img: "/images/multi-site_generator_deployment.png",
    desc: "Cummins generator sets across the full commercial and industrial range. Supplied and commissioned by Alnaciim Energy through Jubaili Bros with full ATS, controller integration and load testing.",
    specs: [["Range","20 – 2,000+ kVA"],["Fuel","Diesel"],["Ratings","Standby · Prime · Continuous"],["Controller","DSE or DEIF AGC 150"],["Enclosure","Open · Canopy · Sound-attenuated"]],
    tags: ["Cummins","Jubaili Bros","20–2000kVA","Standby","Prime","ATS"]
  },
  {
    id: "g2",
    group: "gen",
    category: "Generator Sets",
    name: "MAN Diesel Generator Sets — 500 to 3,000+ kVA",
    brand: "MAN Energy Solutions — via Jubaili Bros",
    img: "/images/multi-site_generator_deployment.png",
    desc: "MAN generator sets for heavy industrial and prime power. High durability, long service intervals.",
    specs: [["Range","500 – 3,000+ kVA"],["Application","Heavy industrial / prime"],["Fuel","Diesel"],["Controller","DSE or DEIF fitted"]],
    tags: ["MAN","Jubaili Bros","500–3000kVA","Heavy Industrial"]
  },
  {
    id: "g3",
    group: "gen",
    category: "Generator Sets",
    name: "Weichai Diesel Generator Sets — 30 to 1,500 kVA",
    brand: "Weichai Power — via Jubaili Bros",
    img: "/images/multi-site_generator_deployment.png",
    desc: "Weichai diesel generator sets — cost-effective mid-range option. Full DSE/DEIF integration by Alnaciim Energy.",
    specs: [["Range","30 – 1,500 kVA"],["Fuel","Diesel"],["Ratings","Standby · Prime"]],
    tags: ["Weichai","Jubaili Bros","30–1500kVA"]
  },
  {
    id: "g4",
    group: "gen",
    category: "Generator Sets",
    name: "Leader Power Diesel Generator Sets — 20 to 2,000 kVA",
    brand: "Leader Power — via Jubaili Bros",
    img: "/images/multi-site_generator_deployment.png",
    desc: "Leader Power generator sets for commercial and industrial standby. Wide kVA range, full commissioning by Alnaciim Energy.",
    specs: [["Range","20 – 2,000 kVA"],["Fuel","Diesel"],["Ratings","Standby · Prime"]],
    tags: ["Leader Power","Jubaili Bros","20–2000kVA"]
  },
  {
    id: "m1",
    group: "m",
    category: "Motors",
    name: "Submersible Pump Motors — Borehole & Well",
    brand: "Grundfos · Franklin Electric · Pedrollo",
    img: "/images/catalog_pump_motor_1774890069214.png",
    desc: "Submersible pump motors for water wells and boreholes. Stainless steel construction, suitable for abrasive and brackish water. Compatible with solar VFD controllers for off-grid pumping.",
    specs: [["Power range","0.5 kW – 22 kW"],["Voltage","220V single / 380V 3-phase"],["Size","4\" / 6\" / 8\" diameter"],["Material","Stainless steel / cast iron"],["Application","Wells · Boreholes · Tanks"],["Compatible","Solar MPPT VFD controllers"]],
    tags: ["Submersible","0.5–22kW","Borehole","Well","Grundfos","Franklin","4\"/6\"/8\""]
  },
  {
    id: "m2",
    group: "m",
    category: "Motors",
    name: "Surface Centrifugal Pump Motors",
    brand: "Grundfos · DAB · Ebara",
    img: "/images/catalog_pump_motor_1774890069214.png",
    desc: "Surface-mounted centrifugal pump motors for irrigation, water transfer and pressure boosting. Single-phase and three-phase options. Cast iron and stainless steel construction.",
    specs: [["Power range","0.75 kW – 15 kW"],["Voltage","220V / 380V"],["Application","Irrigation · Pressure · Transfer"],["Material","Cast iron · Stainless options"],["Brands","Grundfos · DAB · Ebara"]],
    tags: ["Surface Pump","0.75–15kW","Centrifugal","Irrigation","Grundfos","DAB"]
  },
  {
    id: "m3",
    group: "m",
    category: "Motors",
    name: "Solar MPPT Pump Controllers (VFD)",
    brand: "Grundfos · Lorentz · Shurflo",
    img: "/images/catalog_pump_motor_1774890069214.png",
    desc: "MPPT variable frequency drive controllers for solar-powered submersible and surface pumps. Direct PV input — no battery required. Dry-run and over-voltage protection built in.",
    specs: [["Power range","0.75 kW – 7.5 kW"],["Type","MPPT VFD for DC/AC pumps"],["Input","Solar PV direct (no battery needed)"],["Protection","Dry run · Over-voltage · Under-voltage"],["Output","Variable frequency for pump speed control"]],
    tags: ["MPPT","VFD","Solar Pump","0.75–7.5kW","No Battery","Grundfos","Lorentz"]
  },
  {
    id: "m4",
    group: "m",
    category: "Motors",
    name: "High-Pressure RO Feed Pump Motors",
    brand: "Grundfos · Danfoss · Cat Pumps",
    img: "/images/catalog_pump_motor_1774890069214.png",
    desc: "High-pressure centrifugal and multi-stage pump motors for RO system feed. VFD-compatible for energy-efficient variable speed operation. Rated for 8–70 bar depending on application (brackish or seawater).",
    specs: [["Power range","5.5 kW – 30 kW"],["Pressure","8–70 bar (BW to SWRO)"],["VFD","VFD-compatible"],["Application","RO high-pressure feed"],["Standards","ATEX available on request"]],
    tags: ["HP Pump","5.5–30kW","RO Feed","Grundfos","Danfoss","VFD","BW","SWRO"]
  },
  {
    id: "ice1",
    group: "ice",
    category: "Ice Machines",
    name: "CBFI ABI 100 — Automatic Block Ice Machine",
    brand: "CBFI Ice Machine Co., Ltd",
    img: "/images/eng_automation.png",
    desc: "Fully automatic casting block ice machine at 10,000 kg/day. R404A, ~61 kW, automated demould cycle.",
    specs: [["Output","10,000 kg/day"],["Refrigerant","R404A"],["Power","~61 kW"],["Demould","Fully automatic"]],
    tags: ["CBFI","ABI 100","Block Ice","10,000 kg/day","R404A"]
  },
  {
    id: "ice2",
    group: "ice",
    category: "Ice Machines",
    name: "CBFI TV100 — Tube Ice Machine",
    brand: "CBFI Ice Machine Co., Ltd",
    img: "/images/eng_automation.png",
    desc: "Commercial tube ice machine producing food-grade hollow cylindrical ice. 47.4 kW, auto hot-gas defrost.",
    specs: [["Power","47.4 kW"],["Ice form","Hollow tube · Food grade"],["Harvest","Auto hot-gas defrost"]],
    tags: ["CBFI","TV100","47.4kW","Tube Ice","Food Grade"]
  },
  {
    id: "ice3",
    group: "ice",
    category: "Ice Machines",
    name: "CBFI VCR210 — Industrial Cold Room",
    brand: "CBFI Ice Machine Co., Ltd",
    img: "/images/eng_automation.png",
    desc: "Industrial cold room for ice storage and food preservation. 9.95 kW, PU insulation, digital temp control.",
    specs: [["Power","9.95 kW"],["Insulation","High-density PU panels"],["Control","Digital temp + alarm"]],
    tags: ["CBFI","VCR210","9.95kW","Cold Room"]
  },
  {
    id: "rs1",
    group: "spare",
    category: "RO Spare Parts",
    name: "RO Membrane Elements",
    brand: "DuPont FilmTec · Toray · Hydranautics",
    img: "/images/water_purification_industrial_1774886325880.png",
    desc: "Replacement RO membrane elements. Available in 4\" (4040) and 8\" (8040) for brackish water. SWRO elements for seawater systems.",
    specs: [["4040 BW","4\" brackish elements"],["8040 BW","8\" brackish elements"],["SWRO","SW30-380 / SW30XLE"],["NaCl rejection","99.4–99.7%"]],
    tags: ["RO Membranes","BW30","4040","8040","SWRO"]
  },
  {
    id: "rs2",
    group: "spare",
    category: "RO Spare Parts",
    name: "Sediment Pre-Filter Cartridges",
    brand: "Various OEM",
    img: "/images/water_purification_industrial_1774886325880.png",
    desc: "Sediment cartridge filters for RO pre-treatment. Wound, melt-blown and string wound. Protect HP pump and membranes from suspended particles.",
    specs: [["5 μm","Melt-blown / wound"],["10 μm","String wound"],["25 μm","Polypropylene"],["Lengths","10\" and 20\""]],
    tags: ["Sediment Filter","5μm","10μm","25μm","Pre-treatment"]
  },
  {
    id: "rs3",
    group: "spare",
    category: "RO Spare Parts",
    name: "Activated Carbon Filters",
    brand: "Various OEM",
    img: "/images/water_purification_industrial_1774886325880.png",
    desc: "Activated carbon filters for chlorine and chloramine removal ahead of RO membranes. Carbon block and granular activated carbon (GAC) options.",
    specs: [["Carbon block","5μm · 10μm block cartridge"],["GAC","Granular activated carbon"],["Purpose","Chlorine / chloramine removal"],["Lengths","10\" / 20\""]],
    tags: ["Activated Carbon","GAC","Carbon Block","Chlorine Removal"]
  },
  {
    id: "rs4",
    group: "spare",
    category: "RO Spare Parts",
    name: "Antiscalant — Scale Inhibitor",
    brand: "Genesys · King Lee · Avista",
    img: "/images/water_purification_industrial_1774886325880.png",
    desc: "Liquid antiscalant dosed upstream of RO membranes to inhibit scale (CaCO₃, CaSO₄, silica). For BW and SW systems.",
    specs: [["Form","Liquid concentrate"],["Pack size","20L · 25L · 200L drum"],["Dose rate","2–6 ppm typical"],["Scale types","CaCO₃ · CaSO₄ · Silica"]],
    tags: ["Antiscalant","Scale Inhibitor","CaCO3","Silica","BW","SW"]
  },
  {
    id: "rs5",
    group: "spare",
    category: "RO Spare Parts",
    name: "Biocide / Disinfectant Chemical",
    brand: "Various OEM",
    img: "/images/water_purification_industrial_1774886325880.png",
    desc: "Biocide chemicals for membrane preservation and feedwater disinfection. SMBS, oxidising and non-oxidising biocide options.",
    specs: [["SMBS","Sodium metabisulphite 25kg bags"],["NaOCl","Sodium hypochlorite 12%"],["Non-oxidising","DBNPA · Isothiazolone"]],
    tags: ["Biocide","SMBS","NaOCl","DBNPA","Disinfectant"]
  },
  {
    id: "rs6",
    group: "spare",
    category: "RO Spare Parts",
    name: "CIP Cleaning Chemicals",
    brand: "Various OEM",
    img: "/images/water_purification_industrial_1774886325880.png",
    desc: "CIP chemicals for periodic RO membrane cleaning. Citric acid for scale, caustic for organics, enzymatic for biological fouling.",
    specs: [["Citric acid","25 kg bags"],["Caustic NaOH","30% solution · 25L pails"],["Enzymatic","Biological fouling cleaner"],["Frequency","Every 1–3 months typical"]],
    tags: ["CIP Chemicals","Citric Acid","Caustic NaOH","Enzymatic","Membrane Cleaning"]
  },
  {
    id: "rs7",
    group: "spare",
    category: "RO Spare Parts",
    name: "HP Pump Seals, O-rings & PV Kits",
    brand: "OEM compatible",
    img: "/images/water_purification_industrial_1774886325880.png",
    desc: "Mechanical seal kits for HP RO pumps, O-ring sets for pressure vessel end caps, brine seal and adaptor sets.",
    specs: [["HP pump seals","Grundfos / Danfoss / Cat Pump"],["PV end-cap O-rings","4\" and 8\" sets"],["Adaptor seals","Brine seal / thrust ring"],["Material","EPDM · Viton · PTFE"]],
    tags: ["HP Pump Seals","O-rings","Pressure Vessel","Brine Seal","EPDM","Viton"]
  },
  {
    id: "rf1",
    group: "spare",
    category: "Refrigeration Parts",
    name: "R404A Refrigerant Cylinder",
    brand: "Various licensed suppliers",
    img: "/images/water_purification_industrial_1774886325880.png",
    desc: "R404A refrigerant in 13.6 kg and 11.3 kg cylinders for block ice, tube ice and cold room applications.",
    specs: [["Size","13.6 kg · 11.3 kg"],["Type","HFC ternary blend"],["GWP","3,922"],["Use","Block ice · Tube ice · Cold rooms"]],
    tags: ["R404A","Refrigerant","HFC","Ice Plant"]
  },
  {
    id: "rf3",
    group: "spare",
    category: "Refrigeration Parts",
    name: "Expansion Valves — TXV and EEV",
    brand: "Danfoss · Sporlan · Emerson",
    img: "/images/water_purification_industrial_1774886325880.png",
    desc: "TXV and EEV expansion valves for R404A, R507 and R134a refrigeration systems. Various kW ratings, ODF connections.",
    specs: [["TXV","Thermostatic — Danfoss T2/T4"],["EEV","Electronic — stepper motor"],["Refrigerants","R404A · R507 · R134a"],["Sizes","2 kW to 100+ kW"]],
    tags: ["TXV","EEV","Expansion Valve","Danfoss","Emerson","R404A"]
  },
  {
    id: "rf4",
    group: "spare",
    category: "Refrigeration Parts",
    name: "Refrigeration Solenoid Valves",
    brand: "Danfoss · Parker · Castel",
    img: "/images/water_purification_industrial_1774886325880.png",
    desc: "Solenoid valves for hot-gas defrost, liquid line and suction pump-down. 24V and 220V coil options.",
    specs: [["Hot gas","Defrost solenoid — N/C"],["Liquid line","Shutoff solenoid"],["Coil","24V AC/DC · 220V AC"],["Connections","1/4\" to 1-1/8\" ODF"]],
    tags: ["Solenoid Valve","Hot Gas","Liquid Line","Danfoss","Parker"]
  },
  {
    id: "rf5",
    group: "spare",
    category: "Refrigeration Parts",
    name: "Filter Drier — Liquid Line",
    brand: "Danfoss · Emerson · Castel",
    img: "/images/water_purification_industrial_1774886325880.png",
    desc: "Liquid line filter driers for refrigeration. Remove moisture and acid. Multiple ODF sizes and desiccant types.",
    specs: [["Sizes","1/4\" · 3/8\" · 1/2\" · 5/8\" · 7/8\" ODF"],["Desiccant","Molecular sieve / activated alumina"],["Refrigerants","R404A · R507 · R134a"]],
    tags: ["Filter Drier","Liquid Line","Danfoss","Emerson","R404A","Moisture"]
  },
  {
    id: "el1",
    group: "el",
    category: "Electrical Parts",
    name: "MC4 Solar Connectors",
    brand: "Stäubli · Amphenol · Compatible",
    img: "/images/eng_power.png",
    desc: "MC4 solar panel connectors for string wiring. IP68, 1000V DC, 30A. Male and female pairs for 4mm² and 6mm² DC cable.",
    specs: [["Rating","1000V DC · 30A"],["IP rating","IP68"],["Cable","4mm² and 6mm²"],["Type","Male + female pair"]],
    tags: ["MC4","Solar Connector","1000V DC","IP68"]
  },
  {
    id: "el3",
    group: "el",
    category: "Electrical Parts",
    name: "DC Surge Protection Device — Type 2",
    brand: "Phoenix Contact · OBO Bettermann",
    img: "/images/eng_power.png",
    desc: "Type 2 DC SPD for solar PV systems. Protects inverters from overvoltage transients. 1000V DC, 40 kA.",
    specs: [["Type","Type 2 SPD"],["Voltage","1000V DC"],["Imax","40 kA"],["Mount","DIN-rail 35mm"]],
    tags: ["SPD","Type 2","DC Solar","1000V DC","40kA"]
  },
  {
    id: "el4",
    group: "el",
    category: "Electrical Parts",
    name: "MCCBs — Moulded Case Circuit Breakers",
    brand: "Schneider Electric · ABB · Siemens",
    img: "/images/eng_power.png",
    desc: "3-pole MCCBs for generator panels, solar inverter outputs and main distribution. Motorised versions available.",
    specs: [["Ratings","100A · 160A · 250A · 400A · 630A"],["Poles","3-pole · 415V AC"],["Breaking","25kA · 36kA · 50kA"],["Motorised","Available on most ratings"]],
    tags: ["MCCB","3-Pole","Schneider","ABB","Siemens","100–630A"]
  },
  {
    id: "el5",
    group: "el",
    category: "Electrical Parts",
    name: "LFP Lithium Iron Phosphate Battery",
    brand: "CATL · BYD · EVE Energy",
    img: "/images/eng_power.png",
    desc: "LFP battery modules for solar storage and hybrid systems. 3,000+ cycle life at 80% DoD. Built-in BMS.",
    specs: [["Chemistry","LiFePO₄ (LFP)"],["Voltage","12V / 24V / 48V"],["Capacity","100Ah · 200Ah · 300Ah"],["Cycles","3,000+ @ 80% DoD"],["BMS","Built-in"]],
    tags: ["LFP","LiFePO4","Lithium","100Ah","200Ah","48V","3000 Cycles"]
  },
  {
    id: "el6",
    group: "el",
    category: "Electrical Parts",
    name: "AGM / VRLA Sealed Lead-Acid Battery",
    brand: "Enersys · Yuasa · Trojan",
    img: "/images/eng_power.png",
    desc: "Sealed AGM VRLA batteries for solar storage, generator starting and UPS. Maintenance-free, suitable for hot climates.",
    specs: [["Chemistry","AGM sealed VRLA"],["Voltage","12V"],["Capacity","100Ah · 150Ah · 200Ah"],["Maintenance","Sealed — maintenance-free"]],
    tags: ["AGM","VRLA","Lead-Acid","Sealed","100Ah","200Ah"]
  }
];

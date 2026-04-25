export const CONTENT = {
  group: {
    hero: {
      eyebrow: "INFRASTRUCTURE • WATER • ENERGY • ENGINEERING",
      headline: "POWERING LIFE.\nPURIFYING TOMORROW.",
      description: "Somalia’s integrated infrastructure group. From water treatment and energy systems to precision engineering — Alnaciim Group delivers the full project lifecycle from design through commissioning and beyond."
    },
    stats: [
      { label: "YEARS DELIVERING INFRASTRUCTURE", value: "28+" },
      { label: "LITRES WATER PURIFIED DAILY", value: "600,000+" },
      { label: "SOLAR CAPACITY INSTALLED", value: "500+ kW" },
      { label: "PROJECTS COMMISSIONED TO DATE", value: "60+" }
    ]
  },
  water: {
    hero: {
      eyebrow: "ALNACIIM Water",
      headline: "Clean water infrastructure designed, built and maintained.",
      description: "From massive industrial RO plants to Aqua Safi bottle manufacturing – the region’s most trusted water brand. We deliver clean water infrastructure from design to final commissioning."
    },
    stats: [
      { label: "Daily capacity", value: "600,000L+" },
      { label: "Boreholes", value: "50+" },
      { label: "Automation", value: "10kBPH" },
      { label: "Years Exp.", value: "28+" }
    ],
    pillars: [
      {
        title: "Aqua Safi Bottling",
        description: "The region's highest-capacity production of premium bottled water (250ml to 19L).",
        icon: "GlassWater"
      },
      {
        title: "Water Wells & Community Supply",
        description: "Alnaciim Water has drilled and equipped over 30 boreholes across the region. Each well is professionally drilled, steel-cased, and equipped with solar-priority pumping systems.",
        icon: "Droplets"
      },
      {
        title: "Reverse Osmosis Water Treatment",
        description: "We design and supply RO systems from compact commercial units to large 2,400 m³/day municipal plants. Every plant is designed against actual feed water chemistry.",
        icon: "Filter"
      },
      {
        title: "Maintenance & Support",
        description: "Ongoing support for all Alnaciim installations and third-party systems including membrane cleaning and spare parts.",
        icon: "CheckCircle2"
      }
    ]
  },
  energy: {
    hero: {
      eyebrow: "ALNACIIM ENERGY · SOLAR · HYBRID",
      headline: "Solar. Storage. Generation. \nSized for your site.",
      description: "Alnaciim Energy integrates solar PV, high-capacity battery storage, and synchronized generation into unified microgrid systems. From commercial compounds to critical industrial installations – we engineer for reliability."
    },
    stats: [
      { label: "Solar Installed", value: 500, suffix: " kW+" },
      { label: "BESS Capacity", value: 2, suffix: " MWh+" },
      { label: "Yrs Expertise", value: 28, suffix: "+" },
      { label: "Diesel Reduction", value: 78, suffix: "%" }
    ],
    pillars: [
      {
        title: "Utility-Scale Solar",
        description: "High-yield commercial solar arrays. We coordinate full EPC services from site assessment to final commissioning and grid integration.",
        icon: "Sun"
      },
      {
        title: "Hybrid Microgrids",
        description: "Intelligent stabilization of unreliable grid infrastructure. Our systems seamlessly route energy between Solar PV, BESS, and Generators.",
        icon: "Zap"
      },
      {
        title: "BESS Storage",
        description: "Peak shaving and load shifting utilizing high-cycle life LiFePO4 chemistry. Essential for energy arbitrage and 24/7 continuous operation.",
        icon: "Battery"
      },
      {
        title: "Prime Generators",
        description: "Heavy-duty diesel generation optimized for base load power in remote locations. Engineered with DSE controllers to synchronize with solar.",
        icon: "Fuel"
      }
    ]
  },
  engineering: {
    hero: {
      eyebrow: "ALNACIIM ENGINEERING · DESIGN · BUILD",
      headline: "The engineering behind every Alnaciim project.",
      description: "The technical backbone of Alnaciim. Precision panel fabrication, industrial wiring, and full mechanical-electrical plant commissioning."
    },
    stats: [
      { label: "Years of Heritage", value: "28+" },
      { label: "Global Projects", value: "60+" },
      { label: "Strategic fields", value: "03" },
      { label: "Lifecycle Support", value: "100%" }
    ],
    pillars_intro: "We deploy a comprehensive engineering framework across three critical pillars to ensure architectural Excellence.",
    pillars: [
      {
        title: "System Design",
        description: "Technical design from first principles. We produce load analyses, equipment specifications, single-line diagrams and installation drawings.",
        icon: "Cpu"
      },
      {
        title: "Procurement",
        description: "We source the components. Every project is supplied with equipment that matches the design specification.",
        icon: "Settings"
      },
      {
        title: "Commissioning",
        description: "Rigorous field testing and final system validation to guarantee peak operational performance and site safety.",
        icon: "Hammer"
      }
    ]
  },
  engineering_solutions: {
    hero: {
      eyebrow: "Engineering Solutions Portfolio",
      headline: "Architectural Precision.",
      description: "Alnaciim Engineering delivers the technical work behind every project the group undertakes, and takes direct commissions from external clients. Water infrastructure, power systems, automation and custom industrial builds."
    },
    items: [
      {
        id: "01",
        title: "Water Infrastructure Engineering",
        subtext: "From borehole drilling to operational water treatment, Alnaciim Engineering handles the complete water project scope.",
        image: "/images/supplywater_infrastructure.png",
        bullets: [
          "Borehole drilling & steel casing",
          "RO system design & treatment train",
          "Projects: Nuwaco (2.4k m³/day), Martisoor, Garacad",
          "MCC panels & VFD motor starters",
          "SCADA remote monitoring integration"
        ]
      },
      {
        id: "02",
        title: "Power Systems",
        subtext: "Complete electrical and mechanical delivery of solar, hybrid and generator power systems, from the design calculation to the commissioned and tested installation.",
        image: "/images/energy_inverters.png",
        bullets: [
          "Electrical load analysis & demand calculation",
          "Solar PV mounting & DC string wiring",
          "Generator set installation",
          "ATS design & fabrication",
          "Hybrid system integration (Solar/BESS/Genset)",
          "Load bank testing to rated capacity"
        ]
      },
      {
        id: "03",
        title: "SCADA & Industrial Automation",
        subtext: "Alnaciim Engineering designs and commissions monitoring and control systems for the infrastructure it builds and maintains.",
        image: "/images/energy_intelligent_controller.png",
        bullets: [
          "Water treatment plants monitoring",
          "Solar and hybrid power system monitoring",
          "Industrial process control and automation",
          "HMI touchscreen operator interfaces",
          "Historian data & alarm management",
          "Integration: CAN, Modbus, Profibus"
        ]
      },
      {
        id: "04",
        title: "Custom Industrial Works",
        subtext: "Alnaciim Engineering takes on custom design and build projects from the ground up, facilities, power plants and industrial systems built to the client's specific requirements.",
        image: "/images/custom_panel_fabrication_and_industrial_electrical_works.png",
        bullets: [
          "Custom factory design and build",
          "Custom power plant builds",
          "Custom hybrid microgrid systems",
          "Industrial control panels",
          "Custom water treatment facilities",
          "Automatic Transfer Switch (ATS) builds"
        ]
      },
      {
        id: "05",
        title: "Maintenance & Repair",
        subtext: "Alnaciim Engineering maintains what it builds. and takes on maintenance contracts for systems installed by others.",
        image: "/images/commercial_ro_systems_and_maintenance.png",
        bullets: [
          "RO membrane cleaning & performance test",
          "Pump mechanical seals & impeller service",
          "Solar array cleaning & inverter service",
          "Control panels and monitoring systems",
          "Spare parts supply"
        ]
      }
    ]
  }
};

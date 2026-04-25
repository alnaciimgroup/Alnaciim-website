export interface Project {
  id: string;
  title: string;
  location: string;
  scale: string;
  service: string;
  description: string;
  tags: string[];
  image: string;
}

export const projects: Project[] = [
  {
    id: "01",
    title: "Nuwaco RO Plant",
    location: "Nuwaco, Puntland",
    scale: "2,400 m³ per day",
    service: "Design, installation and commissioning",
    description: "The largest water treatment facility delivered by Alnaciim Group. Designed, procured and commissioned entirely in-house — from site assessment to final operational verification.",
    tags: ["Water", "Engineering"],
    image: "/images/nuwaco_ro_plant.png"
  },
  {
    id: "02",
    title: "Martisoor RO Plant",
    location: "Martisoor, Puntland",
    scale: "300 m³ per day",
    service: "Full system setup — supply, installation and commissioning",
    description: "Multi-stage sediment and carbon pre-treatment with energy-recovery high-pressure RO stage and UV sterilisation. Includes solar-priority power supply with automatic generator backup.",
    tags: ["Water", "Engineering"],
    image: "/images/martisor_ro_plant.png"
  },
  {
    id: "03",
    title: "Garacad RO Plant",
    location: "Garacad, Maxjar Area",
    scale: "360 m³ per day",
    service: "Installation and commissioning",
    description: "Mechanical pipework, electrical connections, and control panel wiring for a coastal water treatment plant. Performance verification across full capacity range with operator training.",
    tags: ["Water", "Engineering"],
    image: "/images/garacad_ro_plant.png"
  },
  {
    id: "04",
    title: "Budunbuto Village Water Project",
    location: "Budunbuto, Puntland",
    scale: "360 m³ per day",
    service: "Community water infrastructure — full scope",
    description: "End-to-end water infrastructure including borehole development, solar-priority power, and RO treatment designed for low-maintenance rural community operation.",
    tags: ["Water", "Engineering"],
    image: "/images/budunbuto.png"
  },
  {
    id: "05",
    title: "300 kWp Solar Power System",
    location: "Garowe, Puntland",
    scale: "300 kW installed",
    service: "Full EPC — panels, inverters, in-house DEIF control panels",
    description: "Large-scale solar priority installation with DEIF ASC 150 solar-genset coordination. Full EPC delivery including structural mounting and automated energy management.",
    tags: ["Energy", "Engineering"],
    image: "/images/solar_power_system.png"
  },
  {
    id: "06",
    title: "100 kWp Solar Power System",
    location: "Multi-site deployment",
    scale: "100 kW installations",
    service: "System design, supply and installation",
    description: "Standardised 100 kWp solar arrays for commercial and industrial clients. Optimized for peak performance in high-irradiance regional conditions with Tier-1 components.",
    tags: ["Energy", "Engineering"],
    image: "/images/solar_power_.png"
  },
  {
    id: "07",
    title: "Aqua Safi Bottling Facility",
    location: "Garowe, Puntland",
    scale: "10,000 bottles per hour",
    service: "Facility design, procurement and installation",
    description: "Somalia's most advanced bottling facility. Full automation for formats from 250ml to 19L, including process cooling and compressed air systems.",
    tags: ["Water", "Engineering"],
    image: "/images/aqua_safi_bottling_facility.png"
  },
  {
    id: "08",
    title: "Block Ice Facility",
    location: "Garowe, Puntland",
    scale: "10,000 kg per day",
    service: "Design, installation and commissioning",
    description: "Complete refrigeration plant serving the regional food supply chain. In-house designed control centres and defost management for maximum efficiency.",
    tags: ["Water", "Engineering"],
    image: "/images/commercial_ice_cubes_1769372486661.png"
  },
  {
    id: "09",
    title: "Tube Ice Facility",
    location: "Garowe, Puntland",
    scale: "Commercial-scale tube ice",
    service: "Installation and commissioning",
    description: "Packaged tube ice production facility. Extension of the Aqua Safi cold chain to serve the regional retail and hospitality markets.",
    tags: ["Water", "Engineering"],
    image: "/images/block_ice_and_tube_ice_facility.png"
  },
  {
    id: "10",
    title: "Industrial Hybrid Power + SCADA",
    location: "Puntland",
    scale: "Solar + diesel + battery hybrid",
    service: "System design, EPC, SCADA commissioning",
    description: "Alnaciim's most complex system—solar priority, battery buffering, and generator backup with a central energy management controller and remote SCADA monitoring.",
    tags: ["Energy", "Engineering"],
    image: "/images/energy_intelligent_controller.png"
  },
  {
    id: "11",
    title: "Multi-Site Generator Deployment",
    location: "Multiple sites, Puntland",
    scale: "Emergency backup power networks",
    service: "Supply, ATS fabrication, AMF installation",
    description: "Reliable power backup for critical infrastructure. In-house fabricated ATS panels and DSE controllers programmed for zero-fail site requirements.",
    tags: ["Energy", "Engineering"],
    image: "/images/catalog_generator_1774889998709.png"
  },
  {
    id: "12",
    title: "Garowe Hotels RO Portfolio",
    location: "Garowe, Puntland",
    scale: "Ongoing maintenance portfolio",
    service: "Maintenance, membrane cleaning, pump repair",
    description: "Scheduled service visits and rapid-response spares support for the hospitality sector, ensuring consistent water quality and system uptime.",
    tags: ["Water"],
    image: "/images/commercial_ro_systems_and_maintenance.png"
  },
  {
    id: "13",
    title: "Water Wells (50+ Boreholes)",
    location: "Multiple sites, Puntland",
    scale: "28 years of regional delivery",
    service: "Drilling, casing, and solar pump integration",
    description: "The foundation of Alnaciim Group. Full-package borehole delivery from geophysical survey to solar-priority pump installation and commissioning.",
    tags: ["Water", "Energy"],
    image: "/images/water_wells_30plus_boreholes.png"
  },
  {
    id: "14",
    title: "RO Systems Garowe City",
    location: "Garowe, Puntland",
    scale: "Municipal & commercial installations",
    service: "RO installation, maintenance and parts supply",
    description: "Centrally managed RO systems serving commercial compounds and institutions in Garowe with locally stocked critical spares.",
    tags: ["Water"],
    image: "/images/commercial_ro_systems_and_maintenance.png"
  },
  {
    id: "15",
    title: "Custom Industrial Electrical",
    location: "Puntland",
    scale: "Industrial panel fabrication",
    service: "Switchboard design, panel build, wiring",
    description: "In-house panel fabrication for MCCs, ATS, and custom SCADA integration. Built to IEC 60364 standards with type-tested switchgear.",
    tags: ["Engineering"],
    image: "/images/custom_panel_fabrication_and_industrial_electrical_works.png"
  }
];

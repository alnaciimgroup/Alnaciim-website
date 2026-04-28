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
    scale: "2400 m³ per day",
    service: "Full system setup — supply, installation and commissioning",
    description: "The largest water treatment facility delivered by Alnaciim Group. A full reverse osmosis plant providing 2,400 m³ of treated water per day designed, procured and commissioned entirely by the Alnaciim engineering team, from the initial site assessment to final handover.",
    tags: ["Water", "Engineering"],
    image: "/images/nuwaco_ro_plant.png"
  },
  {
    id: "02",
    title: "Martisoor RO Plant",
    location: "Martisoor, Puntland",
    scale: "300 m³ per day",
    service: "Full system setup",
    description: "A 300 m³/day reverse osmosis water treatment system, multi-stage pre-filtration, high-pressure RO membranes, UV sterilisation and a chemical dosing system..",
    tags: ["Water", "Engineering"],
    image: "/images/martisor_ro_plant.png"
  },
  {
    id: "03",
    title: "Garacad RO Plant",
    location: "Garacad, Maxjar Area",
    scale: "360 m³ per day",
    service: "Installation and commissioning",
    description: "A 360 m³/day water treatment installation for the Garacad community in the Maxjar area. Alnaciim Engineering completed all mechanical pipework, electrical connections and control panel installation, followed by full capacity verification and operator training.",
    tags: ["Water", "Engineering"],
    image: "/images/garacad_ro_plant.png"
  },
  {
    id: "04",
    title: "Budunbuto Village Water Project",
    location: "Budunbuto, Puntland",
    scale: "360 m³ per day",
    service: "Installation and commissioning",
    description: "End-to-end rural water infrastructure for the Budunbuto community borehole development, RO water treatment, storage, distribution and a solar-priority power supply with generator backup. The system was designed for straightforward daily operation.",
    tags: ["Water", "Engineering"],
    image: "/images/work_budunbuto_new.png"
  },
  {
    id: "05",
    title: "300 kWp Solar Power System",
    location: "Garowe, Puntland",
    scale: "300 kW installed",
    service: "Full EPC",
    description: "A 300 kWp hybrid power system for an industrial factory in Garowe. Solar panels, inverters and control panels were designed, procured and installed by Alnaciim integrated with new and site's existing diesel generators under an automated coordination controller that prioritises solar and switches to the generator when needed. Remote monitoring commissioned alongside, giving the operator live visibility of the full system.",
    tags: ["Energy", "Engineering"],
    image: "/images/energy_microgrid_new.png"
  },
  {
    id: "06",
    title: "200 kWp Solar Power System",
    location: "Multi-site deployment",
    scale: "200 kW installations",
    service: "System design, supply and installation",
    description: "A 200 kW hybrid automation upgrade for an industrial factory. Alnaciim integrated solar-genset coordination controllers and remote monitoring into the site's existing solar and generator installation, converting manual power management into a fully automated, remotely monitored hybrid system.",
    tags: ["Energy", "Engineering"],
    image: "/images/work_solar_200kw_new.png"
  },
  {
    id: "07",
    title: "Aqua Safi Bottling Facility",
    location: "Garowe, Puntland",
    scale: "10,000 bottles per hour",
    service: "Facility design, procurement and installation",
    description: "Alnaciim Water operates multiple bottled water production facilities in Garowe under the Aqua Safi brand. Alnaciim Engineering designed, procured and installed the production lines covering water pre-treatment, automated filling and capping, compressed air supply, process cooling and electrical distribution. fully automated filling and packaging. Production range from 250 ml to 19 L.",
    tags: ["Water", "Engineering"],
    image: "/images/work_aqua_safi_new.png"
  },
  {
    id: "08",
    title: "Block Ice & Tube Ice Facility",
    location: "Garowe, Puntland",
    scale: "10,000 kg per day",
    service: "Design, installation and commissioning",
    description: "Alnaciim Engineering designed and deployed the complete refrigeration plant including block ice and tube ice machines alongside compressor equipment, evaporator tanks, cold room storage and all electrical control panels. The block ice machine alone produces over 10,000 kg per day. The facility serves the food supply chain, fishing industry and commercial distributors across the regiion.",
    tags: ["Water", "Engineering"],
    image: "/images/work_ice_facility_new.png"
  },
  {
    id: "09",
    title: "Commercial RO Systems & Maintenance",
    location: "Garowe, Puntland",
    scale: "Ongoing maintenance portfolio",
    service: "RO installation, maintenance, and spare parts supply",
    description: "Alnaciim Water has installed and maintains RO water treatment systems across a range of commercial clients in Garowe including hotels, businesses and other institutions. Alnaciim engineering maintenance, repairs and supplies spare parts, covering membrane cleaning and performance testing, pump servicing, chemical supply, filter replacement and electrical inspection.",
    tags: ["Water"],
    image: "/images/commercial_ro_systems_and_maintenance.png"
  },
  {
    id: "10",
    title: "Water Wells (50+ Boreholes)",
    location: "Multiple sites, Puntland",
    scale: "28 years of regional delivery",
    service: "Drilling, casing, and solar pump integration",
    description: "The foundation of Alnaciim Group. Full-package borehole delivery from geophysical survey to solar-priority pump installation and commissioning.",
    tags: ["Water", "Energy"],
    image: "/images/water_wells_30plus_boreholes.png"
  },
  {
    id: "11",
    title: "Custom Panel Fabrication & Industrial Electrical Works",
    location: "Puntland",
    scale: "Multiple custom builds for industrial clients",
    service: "Panel design, fabrication, and site installation",
    description: ".Alnaciim engineering does Custom electrical panel design, fabrication and installation. Projects have included motor control panels for production equipment, switching panels and compressor controller panels for industrial machinery, and complete electrical distribution systems, main distribution boards and sub-panels for a factory installation.",
    tags: ["Engineering"],
    image: "/images/work_custom_panel_new.png"
  },
  {
    id: "12",
    title: "Multi-Site Generator Deployment",
    location: "Multiple sites, Puntland",
    scale: "Multiple industrial facilities across Puntland",
    service: "Supply, ATS fabrication, AMF installation",
    description: "Diesel generator sets deployed across multiple industrial facilities including Alnaciim Group's own operational sites. Each installation was treated individually: generator sizing against the site load, automatic transfer switch panel fabricated, AMF controller programmed to the site's specific start, transfer and alarm requirements.",
    tags: ["Engineering"],
    image: "/images/work_generator_new.png"
  }
];

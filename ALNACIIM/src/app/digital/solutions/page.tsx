import { Globe, Radio, LayoutDashboard, ArrowRight, CheckCircle2, Server, Database, Code, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function DigitalSolutions() {
  const sections = [
    {
      title: "Web & Software Development",
      description: "Custom internal systems and corporate websites built to specification. We develop from the ground up for industrial and commercial clients—not templates.",
      items: [
        {
          label: "Digital Presence",
          features: [
            "Corporate websites & landing pages",
            "Multi-language (Somali/English) support",
            "Customer-facing portals & E-commerce",
            "Mobile applications (iOS & Android)"
          ]
        },
        {
          label: "Business Logic",
          features: [
            "Custom ERP & operational workflows",
            "Cloud: AWS, Azure, Google Cloud",
            "API & 3rd-party system integration",
            "Relational & Document database design"
          ]
        }
      ],
      image: "/images/industrial_automation_control_room_1774871867828.png",
      icon: <Code size={24} className="text-[#00a8ff]" />
    },
    {
      title: "IoT & Remote Monitoring",
      description: "Connectivity solutions for remote infrastructure in challenging locations, including areas without reliable cellular coverage.",
      items: [
        {
          label: "Sensor Networks",
          features: [
            "Flow, level, pressure & power sensors",
            "Satellite and LoRaWAN gateways",
            "Smart metering for water/fuel/power",
            "GPS remote asset location tracking"
          ]
        },
        {
          label: "Data Intelligence",
          features: [
            "Cloud data ingestion & processing",
            "Automated SMS & email alerting",
            "Live readings & historian trend charts",
            "Secure, encrypted data transmission"
          ]
        }
      ],
      image: "/images/power_systems_generators_1774871854169.png",
      icon: <Radio size={24} className="text-[#00a8ff]" />
    },
    {
      title: "SCADA & Industrial Data",
      description: "The digital interface for physical plant operations. Integrated directly with ALNM Engineering's mechanical and electrical installations.",
      items: [
        {
          label: "OT Platform",
          features: [
            "Ignition SCADA by Inductive Automation",
            "PLC (Siemens, AB, Schneider) integration",
            "HMI development for operator touchscreens",
            "OT network segmentation & cybersecurity"
          ]
        },
        {
          label: "Data Delivery",
          features: [
            "Secure web-native plant access",
            "RTU integration (Modbus/DNP3/61850)",
            "Prioritized alarm & notification logic",
            "Training & documented support contracts"
          ]
        }
      ],
      image: "/images/industrial_automation_control_room_1774871867828.png",
      icon: <LayoutDashboard size={24} className="text-[#00a8ff]" />
    }
  ];

  return (
    <div className="bg-white pt-32">
      {/* Header */}
      <section className="py-20 lg:py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 opacity-50 blur-[120px]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-[56px] md:text-[72px] font-[800] leading-[1] tracking-tight mb-8">
              Digital infrastructure built for industry.
            </h1>
            <p className="text-[20px] text-slate-400 leading-relaxed">
              We build the digital interface that operators use to manage the physical systems ALNM Engineering commissions.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Detail */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col gap-40">
            {sections.map((section, i) => (
              <div key={i} className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-start ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2">
                   <div className="w-14 h-14 rounded-2xl bg-blue-50/50 flex items-center justify-center mb-8">
                    {section.icon}
                  </div>
                  <h2 className="text-[36px] md:text-[48px] font-[800] text-slate-900 leading-[1.1] tracking-tight mb-6">
                    {section.title}
                  </h2>
                  <p className="text-[18px] text-slate-600 leading-relaxed mb-12">
                    {section.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-12">
                    {section.items.map((item, j) => (
                      <div key={j}>
                        <h3 className="text-[14px] font-[800] text-slate-400 mb-6 uppercase tracking-[0.2em]">{item.label}</h3>
                        <ul className="space-y-4">
                          {item.features.map((feat, k) => (
                            <li key={k} className="flex items-start gap-3 text-slate-700 font-[500] text-[15px]">
                              <CheckCircle2 size={18} className="text-[#00a8ff] shrink-0 mt-0.5" />
                              {feat}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 pt-12 border-t border-slate-100">
                      <Link href="/contact" className="inline-flex items-center gap-2 text-[#00a8ff] font-[700] hover:text-[#0086cc] group transition-colors">
                        Discuss this solution
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2">
                  <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative border border-slate-100">
                    <img src={section.image} alt={section.title} className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Highlight */}
      <section className="py-24 bg-[#0b1b3d] text-white overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <ShieldCheck size={64} className="mb-8 opacity-50 text-[#00a8ff]" />
            <h2 className="text-[42px] md:text-[56px] font-[800] leading-tight mb-8">
              Industrial Secure Access.
            </h2>
            <p className="text-[20px] text-slate-400 mb-12 leading-relaxed">
              ALNM Digital uses the Ignition SCADA platform by Inductive Automation—an industry-standard, web-native platform that runs in any browser without client software installation. Secure, scalable, and built for 24/7 OT environments.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-2 font-[700] uppercase tracking-widest text-[13px] text-slate-400">
                <Server size={18} className="text-[#00a8ff]" /> Edge Gateways
              </div>
              <div className="flex items-center gap-2 font-[700] uppercase tracking-widest text-[13px] text-slate-400">
                <Server size={18} className="text-[#00a8ff]" /> Historian Data
              </div>
              <div className="flex items-center gap-2 font-[700] uppercase tracking-widest text-[13px] text-slate-400">
                <LayoutDashboard size={18} className="text-[#00a8ff]" /> Live Dashboards
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

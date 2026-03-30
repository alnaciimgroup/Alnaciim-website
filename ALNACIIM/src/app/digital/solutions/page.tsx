import { Globe, Radio, LayoutDashboard, ArrowRight, CheckCircle2, Server, Database, Code, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function DigitalSolutions() {
  const sections = [
    {
      title: "Web & Software Development",
      description: "Custom internal systems and corporate websites built to specification, from the ground up.",
      items: [
        {
          label: "Web Systems",
          features: [
            "Corporate websites and company landing pages",
            "Web applications and customer-facing portals",
            "E-commerce & online ordering systems",
            "Multi-language support for regional operations"
          ]
        },
        {
          label: "Core Software",
          features: [
            "Custom business management (ERP) software",
            "Relational and document database design",
            "API development and 3rd-party integration",
            "Cloud infrastructure (AWS/Azure/Google Cloud)"
          ]
        }
      ],
      image: "/images/industrial_automation_control_room_1774871867828.png",
      icon: <Code size={24} className="text-blue-600" />
    },
    {
      title: "IoT & Remote Monitoring",
      description: "Industrial IoT solutions designed for conditions without reliable mobile or internet connectivity.",
      items: [
        {
          label: "Field Data",
          features: [
            "Sensor installation (flow, level, pressure, power)",
            "Communication gateway selection (LoRa/Satellite)",
            "Smart metering for electricity and water",
            "Automated fuel consumption reporting"
          ]
        },
        {
          label: "Centralized Intelligence",
          features: [
            "Cloud data ingestion and processing",
            "Live readings and historical trend charts",
            "Automated SMS and email alerting",
            "Remote asset location (GPS) tracking"
          ]
        }
      ],
      image: "/images/power_systems_generators_1774871854169.png",
      icon: <Radio size={24} className="text-blue-600" />
    },
    {
      title: "SCADA & Industrial Data Systems",
      description: "Commissioned dashboards for water treatment plants, power generation, and industrial process plants.",
      items: [
        {
          label: "OT Systems",
          features: [
            "Inductive Automation - Ignition SCADA platform",
            "HMI development for operator touchscreens",
            "Data historian for operational analysis",
            "Alarm management and suppression rules"
          ]
        },
        {
          label: "Integration",
          features: [
            "PLC data integration (Siemens, Allen-Bradley)",
            "RTU integration (Modbus, DNP3, IEC 61850)",
            "OT network segmentation & cybersecurity",
            "Remote secure web-native plant access"
          ]
        }
      ],
      image: "/images/industrial_automation_control_room_1774871867828.png",
      icon: <LayoutDashboard size={24} className="text-blue-600" />
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
                   <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-8">
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
                              <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-0.5" />
                              {feat}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 pt-12 border-t border-slate-100">
                    <Link href="/contact" className="inline-flex items-center gap-2 text-blue-600 font-[700] hover:text-blue-700 group transition-colors">
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
      <section className="py-24 bg-blue-600 text-white overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <ShieldCheck size={64} className="mb-8 opacity-50" />
            <h2 className="text-[42px] md:text-[56px] font-[800] leading-tight mb-8">
              Industrial Secure Access.
            </h2>
            <p className="text-[20px] text-blue-100 mb-12 leading-relaxed">
              ALNM Digital uses the Ignition SCADA platform by Inductive Automation—an industry-standard, web-native platform that runs in any browser without client software installation. Secure, scalable, and built for 24/7 OT environments.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-2 font-[700] uppercase tracking-widest text-[13px] text-blue-200">
                <Server size={18} /> Edge Gateways
              </div>
              <div className="flex items-center gap-2 font-[700] uppercase tracking-widest text-[13px] text-blue-200">
                <Database size={18} /> Historian Data
              </div>
              <div className="flex items-center gap-2 font-[700] uppercase tracking-widest text-[13px] text-blue-200">
                <LayoutDashboard size={18} /> Live Dashboards
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

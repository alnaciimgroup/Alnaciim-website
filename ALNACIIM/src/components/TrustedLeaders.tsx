export default function TrustedLeaders() {
  const logos = [
    { name: "Puntland Gov.", label: "State Protocol" },
    { name: "UNICEF", label: "Global Dev" },
    { name: "WHO Standard", label: "Health Audit" },
    { name: "Garowe General", label: "Medical Hub" },
    { name: "Galkayo Hub", label: "Logistics Node" }
  ];

  return (
    <section className="w-full bg-[#f8fafc] py-20 border-t border-slate-200">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 text-center">
        
        <p className="text-slate-500 text-[13px] font-[700] uppercase tracking-[2px] mb-10">
          Trusted by over 850+ major regional operations
        </p>

        <div className="flex flex-wrap justify-center gap-x-12 lg:gap-x-20 gap-y-10 opacity-60">
          {logos.map((logo, idx) => (
             <div key={idx} className="flex flex-col items-center group cursor-default mix-blend-multiply hover:opacity-100 transition-opacity">
               <span className="text-[24px] font-[800] text-slate-800 tracking-[-1px] group-hover:text-[#0066FF] transition-colors">{logo.name}</span>
             </div>
          ))}
        </div>

      </div>
    </section>
  );
}

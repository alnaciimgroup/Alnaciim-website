"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

// Type definition for Project inline to avoid missing exports if not defined in data yet
type ProjectType = {
  id: string;
  category: string;
  title: string;
  scope: string;
  power: string;
  scale: string;
  description: string;
  tags: string[];
  image: string;
};

interface ProjectModalProps {
  project: ProjectType;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Prevent scrolling on the body when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-6 md:p-12 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      {/* Modal Card */}
      <div className="relative w-full max-w-[1024px] max-h-full overflow-y-auto bg-white rounded-2xl shadow-2xl flex flex-col transform transition-transform animate-in fade-in zoom-in-95 duration-200 mt-12 sm:mt-0">
        
        {/* Header Image Area */}
        <div className="relative w-full h-[220px] sm:h-[300px] shrink-0">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f14]/90 via-[#0e0f14]/40 to-transparent"></div>
          
          {/* Close Button */}
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-lg p-2 backdrop-blur-md transition-colors"
          >
            <X size={20} />
          </button>
          
          {/* Header Text */}
          <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-10 md:right-10">
            <div className="text-[10px] font-bold tracking-widest text-white/90 uppercase mb-3 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full w-fit">
              {project.category}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-[1.15] max-w-3xl">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Body Area */}
        <div className="flex flex-col md:flex-row bg-white">
          
          {/* Left Column (Info) */}
          <div className="w-full md:w-[55%] lg:w-[60%] p-6 sm:p-8 md:p-10 space-y-10">
            
            <div className="space-y-4">
              <h3 className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase flex items-center gap-4">
                Overview <span className="h-px flex-1 bg-slate-100"></span>
              </h3>
              <p className="text-[14px] text-slate-600 leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase flex items-center gap-4">
                Specifications <span className="h-px flex-1 bg-slate-100"></span>
              </h3>
              <div className="divide-y divide-slate-100">
                <div className="flex py-3.5">
                  <div className="w-[40%] text-[12px] text-slate-400 font-medium tracking-wide">Capacity / Scale</div>
                  <div className="w-[60%] text-[13px] text-slate-900 font-bold">{project.scale}</div>
                </div>
                <div className="flex py-3.5">
                  <div className="w-[40%] text-[12px] text-slate-400 font-medium tracking-wide">Scope of Work</div>
                  <div className="w-[60%] text-[13px] text-slate-900 font-bold">{project.scope}</div>
                </div>
                <div className="flex py-3.5">
                  <div className="w-[40%] text-[12px] text-slate-400 font-medium tracking-wide">Power System</div>
                  <div className="w-[60%] text-[13px] text-slate-900 font-bold">{project.power}</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase flex items-center gap-4">
                Tags <span className="h-px flex-1 bg-slate-100"></span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-widest rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (Form) */}
          <div className="w-full md:w-[45%] lg:w-[40%] bg-[#f8fafc] border-t md:border-t-0 md:border-l border-slate-200 p-6 sm:p-8 md:p-10 flex flex-col">
            <h3 className="text-[18px] font-black text-slate-900 mb-2">Request a Quote</h3>
            <p className="text-[13px] text-slate-500 mb-8 leading-relaxed">
              Tell us your requirement and we'll respond within 24 hours.
            </p>

            <form className="space-y-5 flex-1 flex flex-col">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Full Name *</label>
                <input type="text" className="w-full text-[13px] px-3.5 py-2.5 bg-white rounded-lg border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all shadow-sm placeholder:text-slate-300" placeholder="Your name" />
              </div>
              
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Company</label>
                <input type="text" className="w-full text-[13px] px-3.5 py-2.5 bg-white rounded-lg border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all shadow-sm placeholder:text-slate-300" placeholder="Company name" />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Email *</label>
                <input type="email" className="w-full text-[13px] px-3.5 py-2.5 bg-white rounded-lg border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all shadow-sm placeholder:text-slate-300" placeholder="email@company.com" />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Phone / WhatsApp</label>
                <input type="tel" className="w-full text-[13px] px-3.5 py-2.5 bg-white rounded-lg border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all shadow-sm placeholder:text-slate-300" placeholder="+252 ..." />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Quantity / Scale</label>
                <select className="w-full text-[13px] px-3.5 py-2.5 bg-white rounded-lg border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all shadow-sm text-slate-700">
                  <option>Select...</option>
                  <option>Similar to this project</option>
                  <option>Larger scale</option>
                  <option>Smaller scale</option>
                  <option>Custom requirement</option>
                </select>
              </div>

              <div className="flex-1 mt-6">
                <button type="button" className="w-full bg-primary hover:bg-primary-dark text-white font-bold text-[13px] py-3.5 rounded-lg transition-all shadow-md shadow-primary/20 hover:shadow-lg hover:-translate-y-0.5">
                  Submit Request
                </button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
}

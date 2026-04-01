import { Product } from "@/data/catalog";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  // Theme configuration based on product group matching the Alnaciim HTML Spec
  const getTheme = (group: string) => {
    switch (group) {
      case 'ro': return { bg: 'bg-[#1152d4]/90', text: 'text-[#0e70cc]', tag: 'bg-[#edf2ff] text-[#1152d4]', badge: 'bg-[#1152d4]/80' };
      case 'solar': return { bg: 'bg-[#d08800]/90', text: 'text-[#d08800]', tag: 'bg-[#fff8e6] text-[#7a5000]', badge: 'bg-[#d08800]/85' };
      case 'inverter': return { bg: 'bg-[#d08800]/90', text: 'text-[#d08800]', tag: 'bg-[#fff8e6] text-[#7a5000]', badge: 'bg-[#d08800]/85' };
      case 'ctrl': return { bg: 'bg-[#d08800]/90', text: 'text-[#d08800]', tag: 'bg-[#fff8e6] text-[#7a5000]', badge: 'bg-[#d08800]/85' };
      case 'gen': return { bg: 'bg-[#0b8850]/90', text: 'text-[#0b8850]', tag: 'bg-[#e8f7ef] text-[#054e2c]', badge: 'bg-[#0b8850]/80' };
      case 'm': return { bg: 'bg-[#0b8850]/90', text: 'text-[#0b8850]', tag: 'bg-[#e8f7ef] text-[#054e2c]', badge: 'bg-[#0b8850]/80' };
      case 'ice': return { bg: 'bg-[#009ab8]/90', text: 'text-[#009ab8]', tag: 'bg-[#e8f9ff] text-[#005870]', badge: 'bg-[#009ab8]/80' };
      case 'spare': return { bg: 'bg-[#4e5570]/90', text: 'text-[#4e5570]', tag: 'bg-[#f5f7fc] text-[#4e5570]', badge: 'bg-[#4e5570]/80' };
      case 'el': return { bg: 'bg-[#d08800]/90', text: 'text-[#d08800]', tag: 'bg-[#fff8e6] text-[#7a5000]', badge: 'bg-[#d08800]/85' };
      default: return { bg: 'bg-slate-800/90', text: 'text-slate-600', tag: 'bg-slate-100 text-slate-600', badge: 'bg-slate-800/80' };
    }
  };

  const theme = getTheme(product.group);

  return (
    <div 
      onClick={onClick}
      className="bg-[#fff] border border-[#dde2f0] rounded-[13px] overflow-hidden cursor-pointer transition-all duration-200 hover:border-[#1152d4] hover:shadow-[0_6px_24px_rgba(17,82,212,0.1)] hover:-translate-y-0.5 flex flex-col group h-full"
    >
      <div className="h-[160px] relative overflow-hidden shrink-0">
        <img 
          src={product.img} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d14]/40 to-transparent"></div>
        
        <div className={`absolute top-2.5 left-2.5 text-[9.5px] font-[700] tracking-[1.5px] uppercase px-2.5 py-1 rounded-[20px] text-white backdrop-blur-[8px] ${theme.badge}`}>
          {product.category}
        </div>
        
        <div className="absolute bottom-2.5 right-2.5 font-mono text-[9px] text-white/50 tracking-[0.4px]">
          {product.id.toUpperCase()}
        </div>
      </div>
      
      <div className="p-[15px] pb-[14px] flex-1 flex flex-col">
        <div className={`text-[9.5px] font-[700] tracking-[1.5px] uppercase mb-1.5 ${theme.text}`}>
          {product.category}
        </div>
        <div className="font-['Syne'] text-[13.5px] font-[700] text-[#0b0d14] tracking-[-0.1px] leading-[1.3] mb-[5px]">
          {product.name}
        </div>
        <div className="text-[11px] text-[#8890a8] font-mono mb-[9px]">
          {product.brand}
        </div>
        
        <div className="flex-1 flex flex-col gap-[3px] mt-[2px]">
          {product.specs.slice(0, 3).map(([key, value]) => (
            <div key={key} className="flex text-[11.5px] gap-[5px]">
              <span className="text-[#8890a8] min-w-[58px] shrink-0 text-[11px]">{key}</span>
              <span className="text-[#222538] font-[500] font-mono text-[11px] truncate" title={value}>{value}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-[11px] pt-[10px] border-t border-[#dde2f0] flex items-center justify-between">
          <div className="flex flex-wrap gap-[3px]">
            {product.tags.slice(0, 3).map((tag, i) => (
              <span key={i} className={`text-[9px] font-[600] px-[7px] py-[2px] rounded-[20px] tracking-[0.3px] ${theme.tag}`}>
                {tag}
              </span>
            ))}
            {product.tags.length > 3 && (
              <span className={`text-[9px] font-[600] px-[7px] py-[2px] rounded-[20px] tracking-[0.3px] bg-[#f5f7fc] text-[#4e5570]`}>
                +{product.tags.length - 3}
              </span>
            )}
          </div>
          <div className="w-[28px] h-[28px] rounded-[7px] bg-[#f5f7fc] flex items-center justify-center shrink-0 transition-all duration-150 text-[#8890a8] group-hover:bg-[#1152d4] group-hover:text-[#fff]">
            <ArrowRight size={12} strokeWidth={1.8} />
          </div>
        </div>
      </div>
    </div>
  );
}

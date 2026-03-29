import EnergyNavbar from "@/components/energy/EnergyNavbar";
import EnergyFooter from "@/components/energy/EnergyFooter";

export default function EnergyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-['Inter'] selection:bg-[#FF5A00] selection:text-white flex flex-col w-full h-full">
      <EnergyNavbar />
      <main className="flex-1 w-full flex flex-col min-h-screen">
        {children}
      </main>
      <EnergyFooter />
    </div>
  );
}

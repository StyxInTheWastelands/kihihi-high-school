import { Outlet, useLocation, useNavigate } from "react-router";
import { Menu, X, ArrowUpRight, GraduationCap, MapPin, Mail, Calendar } from "lucide-react";
import { useState } from "react";
import { ScrollRestoration } from "react-router";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Removed Admissions from here so it doesn't repeat in the middle of the navbar
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/academics", label: "Academics" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  // Dual-Action Scrolling Controller (Same-page smooth glides vs new page jumps)
  const handleNavigation = (targetPath: string) => {
    setMobileMenuOpen(false);
    
    if (location.pathname === targetPath) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else {
      navigate(targetPath);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBD7] text-[#4A351E] antialiased">
      
      {/* GLOBAL SCROLL POSITION MANAGER */}
      <ScrollRestoration />
      
      {/* PREMIUM HEADER */}
      <header className="bg-[#FDFBD7]/90 backdrop-blur-md border-b border-[#815E35]/20 sticky top-0 z-50 transition-all">
        <div className="container mx-auto px-4 max-w-6xl py-4 flex items-center justify-between">
          
          {/* Logo Frame */}
          <button 
            onClick={() => handleNavigation("/")} 
            className="flex items-center gap-3 text-left bg-transparent border-0 p-0 cursor-pointer group"
          >
            <div className="w-10 h-10 bg-[#815E35] text-[#FDFBD7] rounded-xl flex items-center justify-center shadow-md shadow-[#815E35]/10 group-hover:scale-[1.02] transition-transform duration-300">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base font-black uppercase tracking-wider text-[#815E35] leading-none mb-1">
                Kihihi High School
              </span>
              <span className="text-[10px] font-bold text-[#815E35]/60 uppercase tracking-widest leading-none">
                Kanungu District • Uganda
              </span>
            </div>
          </button>

          {/* Desktop Navigation Link Matrix */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavigation(link.path)}
                  className={`text-xs uppercase font-bold tracking-widest relative py-1.5 transition-colors duration-300 bg-transparent border-0 cursor-pointer ${
                    active ? "text-[#815E35]" : "text-[#4A351E]/70 hover:text-[#815E35]"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#815E35] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTA Trigger (Kept here as the exclusive Admissions entry point) */}
          <div className="hidden md:flex items-center">
            <button 
              onClick={() => handleNavigation("/admissions")} 
              className="inline-flex items-center gap-1.5 bg-[#815E35] text-[#FDFBD7] text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-[#634727] transition-colors shadow-sm shadow-[#815E35]/15 border-0 cursor-pointer"
            >
              Admissions <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Action Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#815E35] hover:bg-[#815E35]/5 rounded-xl transition-colors border-0 bg-transparent cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown Overlay Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#815E35]/10 bg-[#FDFBD7] absolute top-full left-0 w-full shadow-xl animate-fade-in">
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavigation(link.path)}
                  className={`text-sm uppercase font-bold tracking-wider py-2.5 border-b border-[#815E35]/10 block text-left bg-transparent w-full ${
                    isActive(link.path) ? "text-[#815E35]" : "text-[#4A351E]/60"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button 
                onClick={() => handleNavigation("/admissions")}
                className="mt-2 w-full text-center block bg-[#815E35] text-[#FDFBD7] text-xs font-bold uppercase tracking-widest py-3 rounded-xl border-0 cursor-pointer"
              >
                Admissions Portal
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* CORE CONTENT ROUTER PORTAL */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* EDITORIAL ASYMMETRIC FOOTER */}
      <footer className="bg-[#F6F3C9] border-t border-[#815E35]/20 text-[#4A351E] mt-auto">
        <div className="container mx-auto px-4 max-w-6xl py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Column 1: School Mandate Statement */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#815E35] text-[#FDFBD7] rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span className="font-serif text-sm font-black uppercase tracking-wider text-[#815E35]">
                  Kihihi High School
                </span>
              </div>
              <p className="text-sm text-[#4A351E]/80 font-light leading-relaxed max-w-sm">
                A distinguished institution committed to building moral uprightness, academic excellence, and valuable leadership competencies within Western Uganda.
              </p>
            </div>

            {/* Column 2: Navigation Links Grid (Admissions is automatically added here via the navLinks loop for the footer) */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#815E35]">School Directory</h4>
              <ul className="space-y-2.5">
                {/* Manual insertion here to add Admissions gracefully to the footer stream without navbar duplication */}
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <button 
                      onClick={() => handleNavigation(link.path)} 
                      className="text-xs font-semibold text-[#4A351E]/80 hover:text-[#815E35] uppercase tracking-wider transition-colors bg-transparent border-0 p-0 cursor-pointer"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
                <li>
                  <button 
                    onClick={() => handleNavigation("/admissions")} 
                    className="text-xs font-semibold text-[#4A351E]/80 hover:text-[#815E35] uppercase tracking-wider transition-colors bg-transparent border-0 p-0 cursor-pointer"
                  >
                    Admissions
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Institutional Registry Nodes */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#815E35]">Regional Registry Nodes</h4>
              <div className="text-xs space-y-3.5 text-[#4A351E]/80 font-medium">
                <p className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#815E35] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#815E35] block mb-0.5 font-bold">Physical Campus Setup:</strong>
                    Kihihi Town Council, Kanungu District,<br />
                    Western Region, Uganda
                  </span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#815E35] shrink-0" />
                  <span>info@kihihihighschool.sc.ug</span>
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Metabar Row */}
          <div className="border-t border-[#815E35]/10 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-[#4A351E]/60">
            <p>&copy; {new Date().getFullYear()} Kihihi High School. All rights reserved.</p>
            <p className="font-normal text-[#815E35]/60 normal-case flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> National Educational Matrix Node
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
import { ArrowRight, ShieldCheck, Award, BookOpen, Users } from "lucide-react";
import { useNavigate } from "react-router";

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#FDFBD7] text-[#4A351E] font-sans selection:bg-[#815E35]/20">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden border-b border-[#815E35]/10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#815E35]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12 relative z-10">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#815E35]/10 border border-[#815E35]/20 text-[#815E35] text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#815E35] animate-pulse" />
              Admissions Open • Term Two
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl font-black text-[#4A351E] tracking-tight leading-[1.1]">
              Cultivating Intellect, <br />
              <span className="text-[#815E35] italic font-normal">Character & Leadership</span>
            </h1>

            <p className="text-base sm:text-lg text-[#4A351E]/80 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              Welcome to Kihihi High School, a foundational learning community in Kanungu District dedicated to fostering academic excellence, moral integrity, and practical skills for a changing world.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 justify-center lg:justify-start">
              <button
                onClick={() => navigate("/admissions")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#815E35] text-[#FDFBD7] text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full hover:bg-[#634727] transition-all shadow-md shadow-[#815E35]/10 border-0 cursor-pointer group"
              >
                Enroll Now
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button
                onClick={() => navigate("/about")}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent text-[#815E35] text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full border-2 border-[#815E35]/30 hover:border-[#815E35] hover:bg-[#815E35]/5 transition-colors cursor-pointer"
              >
                Our History
              </button>
            </div>
          </div>

          {/* Right Image Frame Block (Asymmetric Frame Layout) */}
          <div className="lg:col-span-5 relative w-full max-w-md mx-auto lg:max-w-none h-[400px] sm:h-[450px]">
            {/* Elegant outer brown accent frame border line */}
            <div className="absolute inset-4 border border-[#815E35]/30 rounded-3xl translate-x-3 translate-y-3 pointer-events-none" />
            
            {/* Core Image Mount */}
            <div className="absolute inset-4 bg-[#815E35]/5 rounded-3xl overflow-hidden shadow-xl border border-[#815E35]/10">
              <img 
                src="/image1.jpg" 
                alt="Kihihi High School Campus Environment" 
                className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 hover:scale-[1.03] transition-all duration-700 ease-in-out"
                onError={(e) => {
                  // Fallback visual background card block design if image file is missing or still downloading
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* Fallback Label Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-[#4A351E]/40 pointer-events-none z-0">
                <span className="text-xs font-bold uppercase tracking-widest">Main Campus Gallery Asset</span>
                <span className="text-[11px] font-mono mt-1">/public/image1.jpg</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. SPLIT ROW: MISSION INSIGHT & PHOTO GRID CARD */}
      <section className="py-20 px-4 border-b border-[#815E35]/10">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Asymmetric Image Wrapper Slot 2 */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative h-[350px]">
            <div className="absolute inset-0 bg-[#815E35]/5 rounded-2xl overflow-hidden shadow-lg border border-[#815E35]/10">
              <img 
                src="/image2.jpg" 
                alt="Academic Learning Experience" 
                className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-[#4A351E]/40 text-center p-4">
                <span className="text-xs font-bold uppercase tracking-widest">Academic & Learning View</span>
                <span className="text-[11px] font-mono mt-1">/public/image2.jpg</span>
              </div>
            </div>
          </div>

          {/* Core Text Pillar Briefing */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#815E35]">True Education</h4>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#4A351E] tracking-tight">
              A Culture Grounded in Transformative Knowledge
            </h2>
            <p className="text-base text-[#4A351E]/80 font-light leading-relaxed">
              We believe secondary education should do more than prepare students for final national testing matrices. Our comprehensive academic model challenges young minds to interrogate problems critically, adapt technical competencies dynamically, and practice leadership roles responsibly in our shared community framework.
            </p>
          </div>

        </div>
      </section>

      {/* 3. INSTITUTIONAL PILLARS SECTION */}
      <section className="py-20 sm:py-24 px-4 bg-[#F6F3C9]/40">
        <div className="container mx-auto max-w-6xl space-y-16">
          
          {/* Section Introduction Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#4A351E] tracking-tight">
              The Pillars of Our Academy
            </h2>
            <div className="w-16 h-[2px] bg-[#815E35] mx-auto rounded-full" />
            <p className="text-base sm:text-lg text-[#4A351E]/80 font-light leading-relaxed">
              We balance rigid educational instruction with community values to mold wholesome citizens prepared to lead local and national initiatives.
            </p>
          </div>

          {/* Grid Layout Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            
            {/* Pillar Card 1 */}
            <div className="bg-[#FDFBD7] border border-[#815E35]/10 rounded-2xl p-7 space-y-4 hover:shadow-xl hover:shadow-[#815E35]/5 transition-all group">
              <div className="w-12 h-12 bg-[#815E35]/10 text-[#815E35] rounded-xl flex items-center justify-center group-hover:bg-[#815E35] group-hover:text-[#FDFBD7] transition-colors duration-300">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#4A351E]">Academic Rigor</h3>
              <p className="text-sm sm:text-base text-[#4A351E]/80 font-light leading-relaxed">
                A robust implementation of national curriculum frameworks designed to spark analytical thinking and scientific discovery.
              </p>
            </div>

            {/* Pillar Card 2 */}
            <div className="bg-[#FDFBD7] border border-[#815E35]/10 rounded-2xl p-7 space-y-4 hover:shadow-xl hover:shadow-[#815E35]/5 transition-all group">
              <div className="w-12 h-12 bg-[#815E35]/10 text-[#815E35] rounded-xl flex items-center justify-center group-hover:bg-[#815E35] group-hover:text-[#FDFBD7] transition-colors duration-300">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#4A351E]">Moral Character</h3>
              <p className="text-sm sm:text-base text-[#4A351E]/80 font-light leading-relaxed">
                Nurturing daily self-discipline, spiritual grounding, and deep corporate responsibility to protect foundational civic virtues.
              </p>
            </div>

            {/* Pillar Card 3 */}
            <div className="bg-[#FDFBD7] border border-[#815E35]/10 rounded-2xl p-7 space-y-4 hover:shadow-xl hover:shadow-[#815E35]/5 transition-all group">
              <div className="w-12 h-12 bg-[#815E35]/10 text-[#815E35] rounded-xl flex items-center justify-center group-hover:bg-[#815E35] group-hover:text-[#FDFBD7] transition-colors duration-300">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#4A351E]">Talent & Skills</h3>
              <p className="text-sm sm:text-base text-[#4A351E]/80 font-light leading-relaxed">
                Actively tracking secondary vocational competencies, creative performing arts, and elite competitive athletic disciplines.
              </p>
            </div>

            {/* Pillar Card 4 */}
            <div className="bg-[#FDFBD7] border border-[#815E35]/10 rounded-2xl p-7 space-y-4 hover:shadow-xl hover:shadow-[#815E35]/5 transition-all group">
              <div className="w-12 h-12 bg-[#815E35]/10 text-[#815E35] rounded-xl flex items-center justify-center group-hover:bg-[#815E35] group-hover:text-[#FDFBD7] transition-colors duration-300">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#4A351E]">Community Impact</h3>
              <p className="text-sm sm:text-base text-[#4A351E]/80 font-light leading-relaxed">
                Fostering a lifetime engagement loop connecting Kanungu District parents, local leaders, and international peer networks.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. PHOTO ROW ACCENT SPLIT BAR */}
      <section className="py-20 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#815E35]">Campus Co-Curriculars</h4>
          <h2 className="font-serif text-3xl font-black text-[#4A351E]">Empowering Students Outside the Lecture Block</h2>
          <p className="text-base text-[#4A351E]/80 font-light leading-relaxed">
            From regional sports competitions to dynamic debating societies and community leadership clubs, life at Kihihi is rich with options that expand collaborative capacity and individual resilience.
          </p>
        </div>
        
        {/* Asymmetric Image Wrapper Slot 3 */}
        <div className="md:col-span-5 h-[300px] relative">
          <div className="absolute inset-0 bg-[#815E35]/5 rounded-2xl overflow-hidden shadow-lg border border-[#815E35]/10">
            <img 
              src="/image3.jpg" 
              alt="Co-curricular Sports and Culture Activities" 
              className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-[#4A351E]/40 text-center p-4">
              <span className="text-xs font-bold uppercase tracking-widest">Co-Curricular / Student Life</span>
              <span className="text-[11px] font-mono mt-1">/public/image3.jpg</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
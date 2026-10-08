import { HeartHandshake, ShieldCheck, Target, Award, Users, Landmark } from "lucide-react";

export function About() {
  return (
    <div className="bg-[#FDFBD7] text-[#4A351E] font-sans selection:bg-[#815E35]/20">
      
      {/* 1. EDITORIAL HEADER HERO */}
      <section className="py-20 sm:py-24 px-4 border-b border-[#815E35]/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#815E35]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto max-w-4xl text-center space-y-6 relative z-10">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#815E35]">Our Identity & Creed</h4>
          <h1 className="font-serif text-4xl sm:text-6xl font-black text-[#4A351E] tracking-tight leading-none">
            Destined to Succeed
          </h1>
          <div className="w-12 h-[2px] bg-[#815E35] mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-[#4A351E]/80 font-light max-w-2xl mx-auto leading-relaxed">
            Established along Rukungiri Road in Bugongo Cell within Kihihi Town Council, we operate a co-educational day and boarding academy dedicated to rewriting regional educational access models.
          </p>
        </div>
      </section>

      {/* 2. CHRONICLE SECTION (WITH IMAGE 4) */}
      <section className="py-20 px-4 border-b border-[#815E35]/10">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Chronicle Block */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#815E35]">The Chronicle</h3>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#4A351E] tracking-tight">
              A Transformative Institutional Force Since 2013
            </h2>
            <p className="text-base text-[#4A351E]/80 font-light leading-relaxed">
              Since opening our doors in 2013, Kihihi Community Secondary School has stood as a progressive bastion of hope, guiding young minds from Senior One through Senior Four toward a clear path of resilience and purpose.
            </p>
            <p className="text-base text-[#4A351E]/80 font-light leading-relaxed">
              Under the guidance of highly specialized, dedicated instructors, our framework balances aggressive academic preparation with co-curricular execution and profound spiritual growth—ensuring students emerge as well-rounded, compassionate, and hyper-responsible citizens.
            </p>
          </div>

          {/* Asymmetric Graphic Mount for Image 4 */}
          <div className="lg:col-span-5 relative h-[380px] w-full max-w-md mx-auto lg:max-w-none">
            <div className="absolute inset-4 border border-[#815E35]/30 rounded-2xl translate-x-3 translate-y-3 pointer-events-none" />
            <div className="absolute inset-4 bg-[#815E35]/5 rounded-2xl overflow-hidden shadow-lg border border-[#815E35]/10">
              <img 
                src="/image4.jpg" 
                alt="Kihihi Campus History and Staff" 
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700 ease-in-out"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-[#4A351E]/40 text-center p-4">
                <span className="text-xs font-bold uppercase tracking-widest">Campus & Staff Chronicle</span>
                <span className="text-[11px] font-mono mt-1">/public/image4.jpg</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. FOUNDATION MATTERS (THE BURSARIES MANDATE) */}
      <section className="py-20 sm:py-24 px-4 bg-[#F6F3C9]/30 border-b border-[#815E35]/10">
        <div className="container mx-auto max-w-5xl space-y-12">
          
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <h2 className="font-serif text-3xl font-black text-[#4A351E]">Why Our Institution Was Founded</h2>
            <p className="text-sm uppercase tracking-wider text-[#815E35] font-bold">Breaking Structural Access Barriers</p>
          </div>

          <div className="bg-[#FDFBD7] border border-[#815E35]/10 rounded-2xl p-8 sm:p-10 space-y-6 shadow-sm">
            <p className="text-base text-[#4A351E]/90 font-light leading-relaxed">
              With many families in Kanungu District navigating financial limitations, accessing premium secondary learning environments traditionally became a functional impossibility. This structural deficit was further aggravated by prolonged trekking distances across uneven local terrains, inadequate regional school distribution, and systemic gender margins against young women.
            </p>
            
            <div className="border-l-4 border-[#815E35] pl-6 my-6 italic text-[#815E35] text-base font-serif">
              "We choose to systematically support the vulnerable. It is inside quality education that any youth can be properly empowered to become genuinely innovative, self-reliant, and economically productive."
            </div>
            
            <p className="text-base text-[#4A351E]/90 font-light leading-relaxed">
              To answer this directly, our Board of Directors manages a rigorous, highly specialized <strong>Bursary Endowment System</strong>. Currently, over 100 students are fully supported via targeted fee waivers, alongside thousands of alumni who have passed safely through this structural safety net.
            </p>

            {/* Three Pillar Bursary Breakdown Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#815E35]/10">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#815E35] font-bold text-sm uppercase tracking-wider">
                  <HeartHandshake className="w-4 h-4" /> Vulnerable Support
                </div>
                <p className="text-sm text-[#4A351E]/80 font-light leading-relaxed">
                  Direct aid allocated to needy families to guarantee consistent term presence.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#815E35] font-bold text-sm uppercase tracking-wider">
                  <Target className="w-4 h-4" /> Merit Scholars
                </div>
                <p className="text-sm text-[#4A351E]/80 font-light leading-relaxed">
                  Performance-based waivers designed to stimulate fierce academic competition and technical excellence.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#815E35] font-bold text-sm uppercase tracking-wider">
                  <Award className="w-4 h-4" /> Athletic Bursaries
                </div>
                <p className="text-sm text-[#4A351E]/80 font-light leading-relaxed">
                  Promoting specialized physical disciplines and scouting natural field talent.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. ENRICHING ENVIROMENT ROW (WITH IMAGE 5) */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Asymmetric Graphic Mount for Image 5 */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative h-[380px] w-full max-w-md mx-auto lg:max-w-none">
            <div className="absolute inset-4 border border-[#815E35]/30 rounded-2xl -translate-x-3 translate-y-3 pointer-events-none" />
            <div className="absolute inset-4 bg-[#815E35]/5 rounded-2xl overflow-hidden shadow-lg border border-[#815E35]/10">
              <img 
                src="/image5.jpg" 
                alt="Student Life and Facilities" 
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700 ease-in-out"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-[#4A351E]/40 text-center p-4">
                <span className="text-xs font-bold uppercase tracking-widest">Enriched Student Life Panel</span>
                <span className="text-[11px] font-mono mt-1">/public/image5.jpg</span>
              </div>
            </div>
          </div>

          {/* Core Text Holistic Features Matrix */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#815E35]">Holistic Infrastructure</h3>
              <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#4A351E] tracking-tight">
                Enriching Student Life Beyond the Classroom Grid
              </h2>
            </div>

            <div className="space-y-6">
              {/* Feature Box 1 */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#815E35]/10 text-[#815E35] rounded-xl flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-lg font-bold text-[#4A351E]">Mentorship & Character Etiquette</h4>
                  <p className="text-sm sm:text-base text-[#4A351E]/80 font-light leading-relaxed">
                    True lifetime success relies on deeply conditioned values of humanity. We place massive instructional emphasis on everyday character etiquette, personal accountability, and thorough guidance counseling.
                  </p>
                </div>
              </div>

              {/* Feature Box 2 */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#815E35]/10 text-[#815E35] rounded-xl flex items-center justify-center shrink-0">
                  <Landmark className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-lg font-bold text-[#4A351E]">Science, Tech & Empirical Laboratories</h4>
                  <p className="text-sm sm:text-base text-[#4A351E]/80 font-light leading-relaxed">
                    Through our custom physics, chemistry, and biology laboratories alongside an expanding computing index and resource library, learners gain immediate hands-on experimental research skills.
                  </p>
                </div>
              </div>

              {/* Feature Box 3 */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#815E35]/10 text-[#815E35] rounded-xl flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-lg font-bold text-[#4A351E]">Physical Wellness & Comprehensive Lifestyle</h4>
                  <p className="text-sm sm:text-base text-[#4A351E]/80 font-light leading-relaxed">
                    Equipped with an open, active community playground and a deep roster of distinct athletics, competitive sports, and performance entertainment, we protect a balanced lifestyle within campus borders.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
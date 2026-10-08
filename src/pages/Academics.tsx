import { BookOpen, Binary, FlaskConical, Languages, Trophy, ClipboardCheck, Award } from "lucide-react";

export function Academics() {
  return (
    <div className="bg-[#FDFBD7] text-[#4A351E] font-sans selection:bg-[#815E35]/20">
      
      {/* 1. EDITORIAL HEADER HERO */}
      <section className="py-20 sm:py-24 px-4 border-b border-[#815E35]/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#815E35]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto max-w-4xl text-center space-y-6 relative z-10">
          <h4 className="text-sm font-bold uppercase tracking-widest text-[#815E35]">Curriculum & Instruction</h4>
          <h1 className="font-serif text-4xl sm:text-6xl font-black text-[#4A351E] tracking-tight leading-none">
            Academic Pathways
          </h1>
          <div className="w-12 h-[2px] bg-[#815E35] mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-[#4A351E]/80 font-light max-w-2xl mx-auto leading-relaxed">
            Our structural framework delivers the complete Uganda National Examinations Board (UNEB) curriculum, empowering ordinary-level learners with analytical proficiency and competitive vocational competencies.
          </p>
        </div>
      </section>

      {/* 2. THE CHRONICLE OF DEPARTMENTS (THE PILLAR GRID) */}
      <section className="py-20 px-4 bg-[#F6F3C9]/20 border-b border-[#815E35]/10">
        <div className="container mx-auto max-w-6xl space-y-12">
          
          <div className="space-y-2 text-center md:text-left max-w-xl">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#815E35]">O-Level Framework</h4>
            <h2 className="font-serif text-3xl font-black text-[#4A351E] tracking-tight">Core Disciplines & Clusters</h2>
            <p className="text-base text-[#4A351E]/70 font-light">
              Students from Senior One through Senior Four engage across deeply organized scholastic faculties designed to cultivate rigorous critical thinking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Faculty 1 */}
            <div className="bg-[#FDFBD7] border border-[#815E35]/10 rounded-2xl p-6 space-y-4 hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-[#815E35]/10 text-[#815E35] rounded-xl flex items-center justify-center">
                <FlaskConical className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#4A351E]">Sciences</h3>
              <p className="text-base text-[#4A351E]/80 font-light leading-relaxed">
                Foundational training across Physics, Chemistry, Biology, and Mathematics, emphasizing empirical research and strict laboratory methodologies.
              </p>
            </div>

            {/* Faculty 2 */}
            <div className="bg-[#FDFBD7] border border-[#815E35]/10 rounded-2xl p-6 space-y-4 hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-[#815E35]/10 text-[#815E35] rounded-xl flex items-center justify-center">
                <Languages className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#4A351E]">Humanities & Arts</h3>
              <p className="text-base text-[#4A351E]/80 font-light leading-relaxed">
                Deep exploration into English Language, Literature, History, and Geography to condition strong civic understanding and corporate eloquence.
              </p>
            </div>

            {/* Faculty 3 */}
            <div className="bg-[#FDFBD7] border border-[#815E35]/10 rounded-2xl p-6 space-y-4 hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-[#815E35]/10 text-[#815E35] rounded-xl flex items-center justify-center">
                <Binary className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#4A351E]">Vocational & Tech</h3>
              <p className="text-base text-[#4A351E]/80 font-light leading-relaxed">
                Hands-on integration into Computer Studies and entrepreneurial skills, matching the technological realities of our current modern economic landscape.
              </p>
            </div>

            {/* Faculty 4 */}
            <div className="bg-[#FDFBD7] border border-[#815E35]/10 rounded-2xl p-6 space-y-4 hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-[#815E35]/10 text-[#815E35] rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#4A351E]">Business & Culture</h3>
              <p className="text-base text-[#4A351E]/80 font-light leading-relaxed">
                Nurturing financial literacy through Commerce and Entrepreneurship classes alongside deep spiritual tracking and moral development models.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. COMPUTER SCIENCE SPOTLIGHT (FIXED UNIFORM TEXT SIZES) */}
      <section className="py-20 px-4 border-b border-[#815E35]/10">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#815E35]">Digital Literacy Integration</h4>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#4A351E] tracking-tight">
              Technical Literacy & Practical Computer Studies
            </h2>
            <p className="text-base sm:text-lg text-[#4A351E]/80 font-light leading-relaxed">
              We live in a world fundamentally integrated with digital architecture. In our dedicated computer laboratory environment, our learners translate theoretical concepts into direct computer software skills, research methodologies, and typing processing mastery.
            </p>
            <p className="text-base text-[#4A351E]/80 font-light leading-relaxed">
              This digital course structure ensures that graduating ordinary-level students aren't just prepared for final national testing frameworks, but possess actual, marketable operational skills that make them highly self-reliant.
            </p>
          </div>

          {/* Right Image Frame (Image 6 Slot) */}
          <div className="lg:col-span-5 relative h-[380px] w-full max-w-md mx-auto lg:max-w-none">
            <div className="absolute inset-4 border border-[#815E35]/30 rounded-2xl translate-x-3 translate-y-3 pointer-events-none" />
            <div className="absolute inset-4 bg-[#815E35]/5 rounded-2xl overflow-hidden shadow-lg border border-[#815E35]/10">
              <img 
                src="/image6.jpg" 
                alt="Kihihi Computer Science and ICT Innovation Class" 
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-[#4A351E]/40 text-center p-4">
                <span className="text-sm font-bold uppercase tracking-widest">Computer Studies Asset</span>
                <span className="text-xs font-mono mt-1">/public/image6.jpg</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. CO-CURRICULAR SPORTS EXCELLENCE */}
      <section className="py-20 px-4 bg-[#F6F3C9]/40 border-b border-[#815E35]/10">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Image Frame (Image 7 Slot) */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative h-[380px] w-full max-w-md mx-auto lg:max-w-none">
            <div className="absolute inset-4 border border-[#815E35]/30 rounded-2xl -translate-x-3 translate-y-3 pointer-events-none" />
            <div className="absolute inset-4 bg-[#815E35]/5 rounded-2xl overflow-hidden shadow-lg border border-[#815E35]/10">
              <img 
                src="/image7.jpg" 
                alt="Kihihi High School Football Team and Athletics" 
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-[#4A351E]/40 text-center p-4">
                <span className="text-sm font-bold uppercase tracking-widest">Football Team & Athletics Asset</span>
                <span className="text-xs font-mono mt-1">/public/image7.jpg</span>
              </div>
            </div>
          </div>

          {/* Right Text Block */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#815E35]">Physical Health & Discipline</h4>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#4A351E] tracking-tight">
              Elite Competitive Athletics & Football Programs
            </h2>
            <p className="text-base sm:text-lg text-[#4A351E]/80 font-light leading-relaxed">
              We fundamentally understand that emotional resilience and mental clarity are directly linked to physical development. Utilizing our spacious school playground complex, our student teams compete fiercely across regional and district-level athletic matrices.
            </p>
            <p className="text-base text-[#4A351E]/80 font-light leading-relaxed">
              Through strategic athletics and our flagship football sports bursary system, we scout raw community talent, reinforce healthy habits, and inject lifelong values of collaborative teamwork, sportsmanship, and tactical focus.
            </p>
          </div>

        </div>
      </section>

      {/* 5. METRICS BLOCK (FIXED CARD TEXT READABILITY) */}
      <section className="py-20 px-4 max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="font-serif text-3xl font-black text-[#4A351E]">Evaluation & Mastery Standards</h2>
          <p className="text-sm uppercase tracking-widest text-[#815E35] font-bold">The Journey to Final UNEB Examinations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#FDFBD7] border border-[#815E35]/20 rounded-2xl p-7 text-center space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <ClipboardCheck className="w-6 h-6 text-[#815E35] mx-auto" />
            <h4 className="font-serif text-lg font-bold text-[#4A351E]">Continuous Assessment</h4>
            <p className="text-base text-[#4A351E]/80 font-light leading-relaxed">
              Bi-weekly testing cycles and mandatory mid-term performance checks map progress across each specific term.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FDFBD7] border border-[#815E35]/20 rounded-2xl p-7 text-center space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <BookOpen className="w-6 h-6 text-[#815E35] mx-auto" />
            <h4 className="font-serif text-lg font-bold text-[#4A351E]">Empirical Practicals</h4>
            <p className="text-base text-[#4A351E]/80 font-light leading-relaxed">
              Mandatory, hands-on science lab sessions and computational logging criteria for all O-Level candidates.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FDFBD7] border border-[#815E35]/20 rounded-2xl p-7 text-center space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <Award className="w-6 h-6 text-[#815E35] mx-auto" />
            <h4 className="font-serif text-lg font-bold text-[#4A351E]">UNEB Qualification</h4>
            <p className="text-base text-[#4A351E]/80 font-light leading-relaxed">
              Rigorous mock testing systems to fully condition final performance capabilities for the UCE certification.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
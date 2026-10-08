import { ClipboardList, FileText, CheckCircle, HelpCircle, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

export function Admissions() {
  return (
    <div className="bg-[#FDFBD7] text-[#4A351E] font-sans selection:bg-[#815E35]/20">
      
      {/* 1. EDITORIAL HEADER HERO */}
      <section className="py-20 sm:py-24 px-4 border-b border-[#815E35]/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#815E35]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto max-w-4xl text-center space-y-6 relative z-10">
          <h4 className="text-sm font-bold uppercase tracking-widest text-[#815E35]">Enrollment & Registration</h4>
          <h1 className="font-serif text-4xl sm:text-6xl font-black text-[#4A351E] tracking-tight leading-none">
            Join Our Community
          </h1>
          <div className="w-12 h-[2px] bg-[#815E35] mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-[#4A351E]/80 font-light max-w-2xl mx-auto leading-relaxed">
            We welcome applications for both girls and boys from Senior One to Senior Four. Discover our straightforward enrollment criteria and structural bursary support pathways.
          </p>
        </div>
      </section>

      {/* 2. ELIGIBILITY & DOCUMENTATION STEPS */}
      <section className="py-20 px-4 border-b border-[#815E35]/10">
        <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Left Block: Entry Requirements */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#815E35]">01. Entry Criteria</h3>
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#4A351E] tracking-tight">
              General Requirements
            </h2>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-[#815E35] shrink-0 mt-0.5" />
                <p className="text-base text-[#4A351E]/80 font-light leading-relaxed">
                  <strong>Senior One Applicants:</strong> Must present an official Primary Leaving Examination (PLE) result slip or certified pass slip from UNEB.
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-[#815E35] shrink-0 mt-0.5" />
                <p className="text-base text-[#4A351E]/80 font-light leading-relaxed">
                  <strong>Senior Two – Senior Four Transfers:</strong> Must supply genuine academic report cards and a signed recommendation letter from their previous secondary institution.
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-[#815E35] shrink-0 mt-0.5" />
                <p className="text-base text-[#4A351E]/80 font-light leading-relaxed">
                  <strong>Status Flexibility:</strong> Parents can opt to register their children as regular Day Scholars or secure a slot in our supervised Boarding facilities.
                </p>
              </div>
            </div>
          </div>

          {/* Right Block: Required Portfolio */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#815E35]">02. Essential Portfolio</h3>
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#4A351E] tracking-tight">
              Documentation Checklist
            </h2>
            <p className="text-base text-[#4A351E]/80 font-light leading-relaxed">
              When visiting the admissions registry desk on campus along Rukungiri Road, please ensure you have brought along the following physical paperwork items:
            </p>
            <ul className="space-y-3 bg-[#F6F3C9]/30 border border-[#815E35]/10 rounded-2xl p-6 text-base text-[#4A351E]/90 font-light">
              <li className="flex items-center gap-3">
                <FileText className="w-4 h-4 text-[#815E35]" /> Two recent passport-sized color photographs
              </li>
              <li className="flex items-center gap-3">
                <FileText className="w-4 h-4 text-[#815E35]" /> Photocopy of student birth certificate or national ID registry
              </li>
              <li className="flex items-center gap-3">
                <FileText className="w-4 h-4 text-[#815E35]" /> Original PLE results document / equivalent evaluation papers
              </li>
              <li className="flex items-center gap-3">
                <FileText className="w-4 h-4 text-[#815E35]" /> Completed institutional health disclosure parameters sheet
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 3. BURSARIES SCHOLARSHIP PROTOCOL BLOCK */}
      <section className="py-20 px-4 bg-[#F6F3C9]/20 border-b border-[#815E35]/10">
        <div className="container mx-auto max-w-4xl space-y-10">
          <div className="text-center space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#815E35]">Financial Support Pathways</h4>
            <h2 className="font-serif text-3xl font-black text-[#4A351E]">Bursary Application Process</h2>
            <p className="text-base text-[#4A351E]/70 max-w-xl mx-auto font-light">
              In strict alignment with our core founding mandate to support vulnerable families in Kanungu District, we review dedicated scholarship requests across three pillars.
            </p>
          </div>

          <div className="space-y-4">
            {/* Pillar 1 */}
            <div className="bg-[#FDFBD7] border border-[#815E35]/10 rounded-2xl p-6 space-y-2 shadow-sm">
              <h4 className="font-serif text-lg font-bold text-[#4A351E] flex items-center gap-2">
                <span className="w-2 h-2 bg-[#815E35] rounded-full" /> Needy & Vulnerable Student Allocations
              </h4>
              <p className="text-base text-[#4A351E]/80 font-light leading-relaxed pl-4">
                Designed specifically for disadvantaged families living below regional financial margins. Applications must include direct verifications from local village LC1 chairpersons detailing socioeconomic structural hardships.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#FDFBD7] border border-[#815E35]/10 rounded-2xl p-6 space-y-2 shadow-sm">
              <h4 className="font-serif text-lg font-bold text-[#4A351E] flex items-center gap-2">
                <span className="w-2 h-2 bg-[#815E35] rounded-full" /> Academic Excellence Incentives
              </h4>
              <p className="text-base text-[#4A351E]/80 font-light leading-relaxed pl-4">
                Automatically triggered by stellar examination performances. These competitive awards aim to stimulate healthy performance-driven rivalries among O-Level cohorts.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#FDFBD7] border border-[#815E35]/10 rounded-2xl p-6 space-y-2 shadow-sm">
              <h4 className="font-serif text-lg font-bold text-[#4A351E] flex items-center gap-2">
                <span className="w-2 h-2 bg-[#815E35] rounded-full" /> Athletic Talent Scouting Bursaries
              </h4>
              <p className="text-base text-[#4A351E]/80 font-light leading-relaxed pl-4">
                Awarded to promising local sports players and runners to promote balanced tracking across district and national competitive tournament playing fields.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CALL TO ACTION */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center space-y-8">
        <div className="w-12 h-12 bg-[#815E35]/10 text-[#815E35] rounded-2xl flex items-center justify-center mx-auto">
          <GraduationCap className="w-6 h-6" />
        </div>
        <div className="space-y-3">
          <h2 className="font-serif text-3xl font-black text-[#4A351E]">Ready to Begin Your Registration?</h2>
          <p className="text-base text-[#4A351E]/80 font-light max-w-xl mx-auto leading-relaxed">
            Due to intense demand on our limited resource budgets, bursary and boarding slots fill up incredibly early ahead of new academic terms. Reach out to secure your intake process.
          </p>
        </div>
        <div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-[#815E35] text-[#FDFBD7] text-sm font-bold uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-[#634727] transition-colors shadow-md border-0"
          >
            Contact Admissions Office
          </Link>
        </div>
      </section>

    </div>
  );
}
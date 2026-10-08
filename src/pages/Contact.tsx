import { MapPin, Phone, Mail, Clock, Send, ShieldCheck } from "lucide-react";
import { useState, type FormEvent } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FDFBD7] text-[#4A351E] font-sans selection:bg-[#815E35]/20">
      
      {/* 1. EDITORIAL HEADER HERO */}
      <section className="py-20 sm:py-24 px-4 border-b border-[#815E35]/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#815E35]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto max-w-4xl text-center space-y-6 relative z-10">
          <h4 className="text-sm font-bold uppercase tracking-widest text-[#815E35]">Connect With Us</h4>
          <h1 className="font-serif text-4xl sm:text-6xl font-black text-[#4A351E] tracking-tight leading-none">
            Institutional Registry
          </h1>
          <div className="w-12 h-[2px] bg-[#815E35] mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-[#4A351E]/80 font-light max-w-2xl mx-auto leading-relaxed">
            Have questions regarding O-Level curriculum paths, boarding enrollment parameters, or custom student bursary qualification windows? Get in touch with our registry team.
          </p>
        </div>
      </section>

      {/* 2. SPLIT LAYOUT: DIRECTORY NODES & MESSAGING FORM */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Essential Directory Information Nodes */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#815E35]">Campus Directory</h3>
              <h2 className="font-serif text-3xl font-black text-[#4A351E] tracking-tight">
                Direct Contact Nodes
              </h2>
            </div>

            <div className="space-y-6">
              {/* Directory Node 1: Location */}
              <div className="bg-[#F6F3C9]/30 border border-[#815E35]/10 rounded-2xl p-6 flex gap-4 items-start">
                <div className="w-10 h-10 bg-[#815E35]/10 text-[#815E35] rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-lg font-bold text-[#4A351E]">Physical Address</h4>
                  <p className="text-base text-[#4A351E]/80 font-light leading-relaxed">
                    Kihihi Community Secondary School<br />
                    Rukungiri Road, Bugongo Cell,<br />
                    Kihihi Town Council, Kanungu District,<br />
                    South Western Uganda
                  </p>
                </div>
              </div>

              {/* Directory Node 2: Phone */}
              <div className="bg-[#F6F3C9]/30 border border-[#815E35]/10 rounded-2xl p-6 flex gap-4 items-start">
                <div className="w-10 h-10 bg-[#815E35]/10 text-[#815E35] rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-lg font-bold text-[#4A351E]">Admissions Office</h4>
                  <p className="text-base text-[#4A351E]/80 font-light leading-relaxed">
                    Primary Registry: +256 (0) 772 123456<br />
                    Bursary Administration: +256 (0) 701 654321
                  </p>
                </div>
              </div>

              {/* Directory Node 3: Mail */}
              <div className="bg-[#F6F3C9]/30 border border-[#815E35]/10 rounded-2xl p-6 flex gap-4 items-start">
                <div className="w-10 h-10 bg-[#815E35]/10 text-[#815E35] rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-lg font-bold text-[#4A351E]">Digital Correspondence</h4>
                  <p className="text-base text-[#4A351E]/80 font-light leading-relaxed">
                    admissions@kihihicommunityss.com<br />
                    info@kihihicommunityss.com
                  </p>
                </div>
              </div>

              {/* Directory Node 4: Hours */}
              <div className="bg-[#F6F3C9]/30 border border-[#815E35]/10 rounded-2xl p-6 flex gap-4 items-start">
                <div className="w-10 h-10 bg-[#815E35]/10 text-[#815E35] rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-lg font-bold text-[#4A351E]">Operational Hours</h4>
                  <p className="text-base text-[#4A351E]/80 font-light leading-relaxed">
                    Monday – Friday: 8:00 AM – 5:00 PM<br />
                    Saturday: 9:00 AM – 1:00 PM<br />
                    Sunday: Closed (Chapel Services Only)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Inquiry Interactive Form */}
          <div className="lg:col-span-7 w-full bg-[#FDFBD7] border-2 border-[#815E35]/20 rounded-3xl p-8 sm:p-10 shadow-xl shadow-[#815E35]/5 relative">
            <div className="space-y-2 mb-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#815E35]">Inquiry Gateway</h3>
              <h2 className="font-serif text-3xl font-black text-[#4A351E] tracking-tight">
                Submit an Official Request
              </h2>
              <p className="text-base text-[#4A351E]/70 font-light">
                Fill out the secure communication grid below, and a designated head of department will review your submission details.
              </p>
            </div>

            {submitted ? (
              <div className="bg-[#815E35]/10 border border-[#815E35]/30 rounded-2xl p-8 text-center space-y-4 animate-fadeIn">
                <div className="w-12 h-12 bg-[#815E35] text-[#FDFBD7] rounded-full flex items-center justify-center mx-auto shadow-md">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#4A351E]">Message Logged Safely</h3>
                <p className="text-base text-[#4A351E]/90 font-light leading-relaxed max-w-md mx-auto">
                  Thank you for reaching out to Kihihi Community Secondary School. Our administrative office has recorded your query and will reply within two business days.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-sm font-bold uppercase tracking-wider text-[#815E35] underline cursor-pointer hover:text-[#634727]"
                >
                  Submit another entry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="block text-base font-medium text-[#4A351E]">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Mukasa"
                      className="w-full bg-[#F6F3C9]/40 border border-[#815E35]/30 rounded-xl px-4 py-3 text-base text-[#4A351E] placeholder-[#4A351E]/40 focus:outline-none focus:border-[#815E35] focus:bg-[#F6F3C9]/70 transition-all font-light"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-2">
                    <label className="block text-base font-medium text-[#4A351E]">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      className="w-full bg-[#F6F3C9]/40 border border-[#815E35]/30 rounded-xl px-4 py-3 text-base text-[#4A351E] placeholder-[#4A351E]/40 focus:outline-none focus:border-[#815E35] focus:bg-[#F6F3C9]/70 transition-all font-light"
                    />
                  </div>
                </div>

                {/* Primary Phone */}
                <div className="space-y-2">
                  <label className="block text-base font-medium text-[#4A351E]">Phone Number (Active Contact)</label>
                  <input
                    type="tel"
                    placeholder="e.g. +256 772 000000"
                    className="w-full bg-[#F6F3C9]/40 border border-[#815E35]/30 rounded-xl px-4 py-3 text-base text-[#4A351E] placeholder-[#4A351E]/40 focus:outline-none focus:border-[#815E35] focus:bg-[#F6F3C9]/70 transition-all font-light"
                  />
                </div>

                {/* Core Message Textarea */}
                <div className="space-y-2">
                  <label className="block text-base font-medium text-[#4A351E]">Message / Enrollment Details</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your inquiry explicitly here..."
                    className="w-full bg-[#F6F3C9]/40 border border-[#815E35]/30 rounded-xl px-4 py-3 text-base text-[#4A351E] placeholder-[#4A351E]/40 focus:outline-none focus:border-[#815E35] focus:bg-[#F6F3C9]/70 transition-all font-light resize-none"
                  />
                </div>

                {/* Submission Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#815E35] text-[#FDFBD7] text-sm font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-[#634727] transition-colors cursor-pointer group shadow-md shadow-[#815E35]/10 border-0"
                >
                  Send Message
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
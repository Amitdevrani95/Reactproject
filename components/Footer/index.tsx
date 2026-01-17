"use client";
import React from "react";

const PremiumFooter = () => {
  const links = [
    { name: "Home", href: "/", icon: "🏠" },
    { name: "Electric Power", href: "/electric-power", icon: "⚡" },
    { name: "Projects", href: "/projects", icon: "📊" },
    { name: "Why SANPEC", href: "/why-sanpec", icon: "🎯" },
    { name: "Research", href: "/research", icon: "🔬" }
  ];

  return (
    <footer className="relative bg-[#0A0E1F] overflow-hidden">
      {/* Animated Power Lines Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid - Much Lighter, Spaced Out, No Breathing */}
        <div 
          className="absolute inset-0"
          style={{
            opacity: 0.015,
            backgroundImage: `
              linear-gradient(#CC2222 0.5px, transparent 0.5px),
              linear-gradient(90deg, #CC2222 0.5px, transparent 0.5px)
            `,
            backgroundSize: '200px 200px',
            backgroundPosition: '0 0'
          }}
        />

        {/* Glowing Orbs - Much More Subtle */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#CC2222] rounded-full" style={{ filter: 'blur(200px)', opacity: 0.03 }} />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#00424D] rounded-full" style={{ filter: 'blur(200px)', opacity: 0.03 }} />
        
        {/* Floating Power Towers - Barely Visible */}
        <div className="absolute top-10 left-10" style={{ 
          opacity: 0.02,
          animation: 'float 6s ease-in-out infinite'
        }}>
          <svg width="120" height="180" viewBox="0 0 120 180" fill="none">
            <path d="M60 20 L50 60 L40 100 L35 140 L30 180" stroke="#CC2222" strokeWidth="4" strokeLinecap="round"/>
            <path d="M60 20 L70 60 L80 100 L85 140 L90 180" stroke="#CC2222" strokeWidth="4" strokeLinecap="round"/>
            <line x1="30" y1="60" x2="90" y2="60" stroke="#00424D" strokeWidth="3"/>
            <line x1="35" y1="100" x2="85" y2="100" stroke="#00424D" strokeWidth="3"/>
          </svg>
        </div>

        <div className="absolute bottom-10 right-10" style={{ 
          opacity: 0.02,
          animation: 'float 6s ease-in-out infinite',
          animationDelay: '2s'
        }}>
          <svg width="100" height="150" viewBox="0 0 100 150" fill="none">
            <polygon points="50,10 40,40 30,70 25,100 20,130 30,130 30,150 70,150 70,130 80,130 75,100 70,70 60,40" fill="#00424D" opacity="0.3"/>
            <line x1="25" y1="40" x2="75" y2="40" stroke="#CC2222" strokeWidth="2"/>
          </svg>
        </div>
      </div>

      {/* Top Decorative Border */}
      <div className="relative h-2 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#CC2222] to-transparent" style={{ animation: 'shimmer 3s linear infinite' }} />
        <div className="absolute inset-0 flex items-center justify-center gap-8">
          <div className="w-3 h-3 rounded-full bg-[#CC2222] animate-pulse" />
          <div className="w-3 h-3 rounded-full bg-[#CC2222] animate-pulse" style={{ animationDelay: '0.3s' }} />
          <div className="w-3 h-3 rounded-full bg-[#CC2222] animate-pulse" style={{ animationDelay: '0.6s' }} />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          
          {/* SANPEC INC - Larger Section */}
          <div className="lg:col-span-5 space-y-8">
            {/* Premium Logo Card */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#CC2222] via-[#e63939] to-[#CC2222] rounded-3xl opacity-20 group-hover:opacity-40 blur-2xl transition-all duration-700 animate-pulse" />
              
              <div className="relative bg-gradient-to-br from-[#1a2540] to-[#0D132D] p-8 rounded-3xl border border-white/10 backdrop-blur-xl overflow-hidden">
                {/* Inner glow */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#CC2222]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  {/* Original SANPEC Logo */}
                  <div className="mb-6 flex justify-center">
                    <img 
                      src="https://sanpec-excellence.com/wp-content/uploads/2025/03/image-1-1536x1152-1.webp" 
                      alt="SANPEC Logo"
                      className="h-32 w-auto object-contain brightness-110 contrast-110 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-3xl font-black text-white uppercase tracking-wider flex items-center gap-3">
                      <span className="w-2 h-8 bg-gradient-to-b from-[#CC2222] to-[#e63939] rounded-full" />
                      SANPEC INC
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed text-sm">
                      SANPEC was founded to improve the resilience and reliability of power grid systems and has been privately owned and operated since 2009. We design, modernize, and manage electric power transmission and distribution grids with a relentless commitment to innovation, excellence, and sustainability. Our unique 365 approach, allows us to create, measure, transfer, and recreate knowledge effectively.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Get in Touch Section */}
          <div className="lg:col-span-4 space-y-6">
            <div className="relative">
              <h3 className="text-3xl font-black text-white uppercase tracking-wider mb-2 flex items-center gap-3">
                <span className="text-4xl">📍</span>
                Get In Touch
              </h3>
              <div className="h-1 w-24 bg-gradient-to-r from-[#CC2222] to-transparent rounded-full" />
            </div>

            <div className="space-y-4">
              {/* Address Card */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#CC2222] to-[#e63939] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
                <div className="relative bg-gradient-to-br from-[#1a2540]/80 to-[#0D132D]/80 backdrop-blur-xl p-6 rounded-2xl border border-white/10 group-hover:border-[#CC2222]/50 transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#CC2222]/10 rounded-full filter blur-3xl" />
                  <div className="relative flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#CC2222] to-[#e63939] flex items-center justify-center shadow-lg shadow-[#CC2222]/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-[#CC2222] text-xs font-black uppercase tracking-widest mb-2">Address</p>
                      <p className="text-white font-bold text-lg mb-1">SANPEC, Houston 11819</p>
                      <p className="text-gray-300 text-sm">Skydale Drive Tomball Texas</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00424D] to-[#0D132D] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
                <div className="relative bg-gradient-to-br from-[#1a2540]/80 to-[#0D132D]/80 backdrop-blur-xl p-6 rounded-2xl border border-white/10 group-hover:border-[#00424D]/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#00424D] to-[#0D132D] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-[#00424D] text-xs font-black uppercase tracking-widest mb-2">Email</p>
                      <a href="mailto:ajmallik@sanpec.com" className="text-white font-bold text-lg hover:text-[#CC2222] transition-colors">
                        ajmallik@sanpec.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#CC2222] to-[#e63939] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
                <div className="relative bg-gradient-to-br from-[#1a2540]/80 to-[#0D132D]/80 backdrop-blur-xl p-6 rounded-2xl border border-white/10 group-hover:border-[#CC2222]/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#CC2222] to-[#e63939] flex items-center justify-center shadow-lg shadow-[#CC2222]/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-[#CC2222] text-xs font-black uppercase tracking-widest mb-2">Phone</p>
                      <a href="tel:+18323924230" className="text-white font-bold text-lg hover:text-[#CC2222] transition-colors">
                        +1 (832) 392 4230
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-3 space-y-6">
            <div className="relative">
              <h3 className="text-3xl font-black text-white uppercase tracking-wider mb-2 flex items-center gap-3">
                <span className="text-4xl">🔗</span>
                Links
              </h3>
              <div className="h-1 w-24 bg-gradient-to-r from-[#CC2222] to-transparent rounded-full" />
            </div>

            <div className="space-y-2">
              {links.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="group relative block overflow-hidden rounded-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#CC2222] to-[#e63939] transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                  <div className="relative bg-gradient-to-br from-[#1a2540]/50 to-[#0D132D]/50 backdrop-blur-sm border border-white/10 p-4 group-hover:border-transparent transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                        {link.icon}
                      </span>
                      <span className="text-white font-bold group-hover:translate-x-2 transition-transform duration-300">
                        {link.name}
                      </span>
                      <svg 
                        className="w-5 h-5 text-white ml-auto opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative">
          {/* Decorative Divider */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-3">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#CC2222]" />
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-[#CC2222] animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-[#00424D] animate-pulse" style={{ animationDelay: '0.3s' }} />
                <div className="w-2 h-2 rounded-full bg-[#CC2222] animate-pulse" style={{ animationDelay: '0.6s' }} />
              </div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#CC2222]" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              <span className="text-[#CC2222]">©</span>
              2025 SANPEC. All Rights Reserved
            </p>
            
            <div className="flex items-center gap-6 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, idx) => (
                <a 
                  key={idx}
                  href="#" 
                  className="text-gray-400 hover:text-white relative group/link transition-colors"
                >
                  <span>{item}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-[#CC2222] group-hover/link:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-500 italic">
              <span className="w-2 h-2 rounded-full bg-[#CC2222] animate-pulse" />
              Powering the Future of Energy
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `
      }} />
    </footer>
  );
};

export default PremiumFooter;
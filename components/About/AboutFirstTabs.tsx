'use client';
import React, { useState, useEffect } from 'react';
import { Eye, Target, Users, Heart, Zap, Award, Shield, TrendingUp, Globe } from 'lucide-react';

export default function SanpecTabs() {
  const [activeTab, setActiveTab] = useState('who-we-are');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const tabsData = {
    'who-we-are': {
      title: 'WHO WE ARE',
      contentTitle: 'Who We Are',
      icon: <Users />,
      description: [
        'SANPEC is an innovation-driven, purpose-led company specializing in design, engineering, testing, inspection, quality, and complete lifecycle asset management services for the electric power and infrastructure industries.',
        'We discover, innovate, and disseminate best practices and new ideas that support evolution and create value for our stakeholders.',
        'Drawing strength from our distinctive roots in STEM research, we believe in learning by doing, learning from others, leading with integrity, and challenging our assumptions to seek new knowledge.'
      ],
      image: 'https://sanpec-excellence.com/wp-content/uploads/2025/01/New-model-5.png'
    },
    'vision': {
      title: 'VISION',
      contentTitle: 'Our Vision',
      icon: <Eye />,
      description: [
        'To be the trusted and innovative leader in designing and building electric transmission and distribution (T&D) lines. We aim to revolutionize the U.S. energy sector by achieving excellence, driving innovation, enhancing resilience, and improving the quality of life for the American people.',
        '1. Build a robust and reliable grid to power the American people.',
        '2. Enhance resilience to withstand disruptions and adapt to evolving demands.',
        '3. Drive innovation and champion responsible business practices for a cleaner future.'
      ],
      image: 'https://sanpec-excellence.com/wp-content/uploads/2025/01/Picture7.jpg'
    },
    'mission': {
      title: 'MISSION',
      contentTitle: 'Our Mission',
      icon: <Target />,
      description: [
        'We design, modernize, and manage electric power transmission and distribution grids with a strong commitment to innovation, excellence, and sustainability. At SANPEC, we aim to provide quality transmission and distribution (T&D) materials, innovative solutions, and exceptional services for a safe, robust, reliable, and resilient power grid.',
        'Our multidisciplinary, award-winning team utilizes expertise, wisdom, and entrepreneurial spirit to manage risks and create value that empowers individuals, enhances grid reliability, and strengthens the American economy.'
      ],
      image: 'https://sanpec-excellence.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-28-at-21.49.26-1024x512.jpg'
    },
    'values': {
      title: 'VALUES',
      contentTitle: 'Our Values',
      icon: <Heart />,
      description: [
        'Innovation and Resilience: We focus on enhancing innovation performance and building foresight capacity to manage uncertainty.',
        'Quality and Excellence: We are committed to upholding the highest quality standards in all our projects and services.',
        'Integrity: Committed to being whole, we model integrity by wholeheartedly living our mission.',
        'Visionary Leadership: We focus on creating long-term value for all stakeholders.',
        'Trust: We strengthen trust through teamwork, open communication, and transparency.',
        'Co-Creation: We collaborate with broader stakeholders to co-create solutions.'
      ]
    }
  };

  const activeContent = tabsData[activeTab];
  const tabKeys = Object.keys(tabsData);

  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-7_5xl">
        {/* Tab Navigation - Simple & Clean */}
        <div className="mb-12 relative">
          {/* Bottom Line - Sab tabs ke neeche ek line */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-300 z-0"></div>
          
          <div className={`relative grid ${isMobile ? 'grid-cols-2' : 'grid-cols-4'} gap-4`}>
            {tabKeys.map((tabKey, index) => {
              const isActive = activeTab === tabKey;
              const tab = tabsData[tabKey];
              
              return (
                <div key={tabKey} className="relative">
                  <button
                    onClick={() => setActiveTab(tabKey)}
                    className={`
                      relative w-full p-5 md:p-6 rounded-lg border-2 transition-all duration-300
                      transform hover:-translate-y-1 hover:scale-[1.02]
                      ${isActive 
                        ? 'bg-white border-[#CD091B] shadow-lg shadow-red-100/50' 
                        : 'bg-white border-gray-200 hover:border-[#CD091B]/70 hover:shadow-lg shadow-sm'
                      }
                      group overflow-hidden
                    `}
                  >
                    {/* Hover background effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#CD091B]/0 to-[#CD091B]/0 group-hover:from-[#CD091B]/5 group-hover:to-[#101631]/5 transition-all duration-300"></div>
                    
                    <div className="relative flex flex-col items-center text-center gap-3">
                      <div className={`
                        w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center 
                        transition-all duration-300 group-hover:scale-110
                        ${isActive 
                          ? 'bg-[#CD091B] text-white shadow-lg' 
                          : 'bg-gray-100 text-[#101631] group-hover:bg-[#CD091B]/10 group-hover:text-[#CD091B]'
                        }
                      `}>
                        {tab.icon}
                      </div>
                      <span className={`
                        text-xs md:text-sm font-bold transition-colors duration-300
                        ${isActive 
                          ? 'text-[#CD091B]' 
                          : 'text-[#101631] group-hover:text-[#CD091B]'
                        }
                      `}>
                        {tab.title}
                      </span>
                    </div>
                    
                    {/* Active Tab Bottom Indicator */}
                    {isActive && (
                      <div className="absolute bottom-[-2px] left-0 right-0 h-[4px] bg-[#CD091B] rounded-b-lg z-10"></div>
                    )}
                  </button>
                  
                  {/* Individual Tab Bottom Line Connector */}
                  {index < tabKeys.length - 1 && !isMobile && (
                    <div className="absolute top-1/2 right-[-8px] w-[16px] h-[2px] bg-gray-300 z-0"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl">
          {/* Header */}
          <div className="bg-[#101631] p-8 md:p-10">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#CD091B] rounded-lg flex items-center justify-center text-white text-2xl transition-transform duration-300 hover:scale-105">
                {activeContent.icon}
              </div>
              <div>
                <h2 className="text-2xl md:text-4xl font-bold text-white">
                  {activeContent.contentTitle}
                </h2>
                <div className="w-20 h-1 bg-[#CD091B] mt-2"></div>
              </div>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-8 md:p-10">
            <div className={`grid ${activeContent.image ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} gap-8 md:gap-10`}>
              {/* Text Content */}
              <div className="space-y-6">
                {activeContent.description.map((paragraph, index) => (
                  <div 
                    key={index} 
                    className="group flex items-start gap-4 p-5 rounded-lg border border-gray-200 hover:border-[#CD091B] transition-all duration-300 hover:shadow-md hover:bg-gray-50/50"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-[#101631] text-white rounded flex items-center justify-center font-bold text-sm transition-transform duration-300 group-hover:scale-110">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 text-base leading-relaxed group-hover:text-gray-900">
                      {paragraph}
                    </p>
                  </div>
                ))}
              </div>

              {/* Image */}
              {activeContent.image && (
                <div className="rounded-lg overflow-hidden border-2 border-gray-200 group">
                  <img
                    src={activeContent.image}
                    alt={activeContent.contentTitle}
                    className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              )}
            </div>

            {/* Values Grid */}
            {activeTab === 'values' && (
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: <Zap />, title: 'Innovation & Resilience', color: '#CD091B' },
                  { icon: <Award />, title: 'Quality & Excellence', color: '#101631' },
                  { icon: <Shield />, title: 'Integrity', color: '#CD091B' },
                  { icon: <TrendingUp />, title: 'Visionary Leadership', color: '#101631' },
                  { icon: <Globe />, title: 'Co-Creation', color: '#CD091B' },
                  { icon: <Users />, title: 'Trust & Transparency', color: '#101631' }
                ].map((value, index) => (
                  <div 
                    key={index}
                    className="group p-6 rounded-lg border-2 border-gray-200 hover:border-[#CD091B] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white"
                  >
                    <div 
                      className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                      style={{ backgroundColor: value.color }}
                    >
                      {value.icon}
                    </div>
                    <h3 className="text-lg font-bold text-[#101631] mb-2 group-hover:text-[#CD091B] transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      {activeContent.description[index]?.split(':')[1]?.trim() || 'Core value driving our mission'}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
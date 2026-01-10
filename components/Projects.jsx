"use client";
import React, { useEffect, useRef, useState } from "react";

const EngineeringTabsSlider = () => {
  const scrollRef = useRef(null);
  const [activeTab, setActiveTab] = useState("projects");
  const [projects, setProjects] = useState([]);
  const [research, setResearch] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [projectsRes, researchRes] = await Promise.all([
          fetch("https://news.sanpec-excellence.com/wp-json/wp/v2/posts?categories=42&per_page=100&_embed"),
          fetch("https://news.sanpec-excellence.com/wp-json/wp/v2/posts?categories=36&per_page=100&_embed")
        ]);
        
        const projectsData = await projectsRes.json();
        const researchData = await researchRes.json();
        
        const formattedProjects = projectsData.map((post) => {
          const categories = post._embedded?.["wp:term"]?.[0] || [];
          const categoryName = categories.length > 0 ? categories[0].name : "Project";
          
          return {
            id: post.id,
            title: post.title.rendered,
            category: categoryName,
            img: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || 
                 "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9",
            url: post.link
          };
        });
        
        const formattedResearch = researchData.map((post) => {
          const categories = post._embedded?.["wp:term"]?.[0] || [];
          const categoryName = categories.length > 0 ? categories[0].name : "Research";
          
          return {
            id: post.id,
            title: post.title.rendered,
            category: categoryName,
            img: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || 
                 "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
            url: post.link
          };
        });
        
        setProjects(formattedProjects);
        setResearch(formattedResearch);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const checkScrollButtons = () => {
    const container = scrollRef.current;
    if (!container) return;
    
    setCanScrollLeft(container.scrollLeft > 10);
    setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10);
  };

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    
    const scrollAmount = 800;
    container.scrollTo({
      left: container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount),
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    checkScrollButtons();
    container.addEventListener('scroll', checkScrollButtons);
    window.addEventListener('resize', checkScrollButtons);

    return () => {
      container.removeEventListener('scroll', checkScrollButtons);
      window.removeEventListener('resize', checkScrollButtons);
    };
  }, [projects, research, activeTab]);

  const currentData = activeTab === "projects" ? projects : research;

  return (
    <div className="relative w-full overflow-hidden py-12 md:py-20 min-h-screen bg-[#0a0e1a]">
      <PowerStructureSVG />

      {/* Title Section */}
      <div className="relative z-10 text-center mb-12 md:mb-16 px-4">
        <div className="inline-block mb-6">
          <div className="flex items-center gap-3 text-red-500 text-sm md:text-base font-bold tracking-[0.3em] mb-3">
            <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-red-500 to-red-500"></div>
            ENGINEERING EXCELLENCE
            <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent via-red-500 to-red-500"></div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="relative z-10 flex items-center justify-center gap-6 md:gap-8 mb-12 md:mb-16 px-4">
        <button
          onClick={() => setActiveTab("projects")}
          className={`relative px-12 md:px-20 py-6 md:py-10 rounded-2xl transition-all duration-500 ${
            activeTab === "projects" 
              ? "bg-gradient-to-br from-red-600/90 to-red-700/90 scale-100" 
              : "bg-slate-800/40 border-2 border-slate-700 scale-90 opacity-60"
          }`}
        >
          <div className="relative z-10 flex flex-col items-center gap-3 md:gap-4">
            <div className={`p-3 md:p-4 rounded-xl ${activeTab === "projects" ? "bg-white/10" : "bg-slate-700/30"}`}>
              <svg className="w-10 h-10 md:w-14 md:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <span className="text-white font-black text-xl md:text-3xl tracking-widest uppercase">Our Projects</span>
          </div>
        </button>

        <button
          onClick={() => setActiveTab("research")}
          className={`relative px-12 md:px-20 py-6 md:py-10 rounded-2xl transition-all duration-500 ${
            activeTab === "research" 
              ? "bg-gradient-to-br from-red-600/90 to-red-700/90 scale-100" 
              : "bg-slate-800/40 border-2 border-slate-700 scale-90 opacity-60"
          }`}
        >
          <div className="relative z-10 flex flex-col items-center gap-3 md:gap-4">
            <div className={`p-3 md:p-4 rounded-xl ${activeTab === "research" ? "bg-white/10" : "bg-slate-700/30"}`}>
              <svg className="w-10 h-10 md:w-14 md:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <span className="text-white font-black text-xl md:text-3xl tracking-widest uppercase">Research and Innovation</span>
          </div>
        </button>
      </div>

      {/* Slider */}
      <div className="relative z-10 px-4 md:px-16">
        {/* Arrows */}
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className={`absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-20 transition-all ${
            canScrollLeft ? 'opacity-100' : 'opacity-30 cursor-not-allowed'
          }`}
        >
          <div className="bg-gradient-to-br from-red-600 to-red-700 p-4 md:p-5 rounded-full border-2 border-red-500">
            <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </button>

        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className={`absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-20 transition-all ${
            canScrollRight ? 'opacity-100' : 'opacity-30 cursor-not-allowed'
          }`}
        >
          <div className="bg-gradient-to-br from-red-600 to-red-700 p-4 md:p-5 rounded-full border-2 border-red-500">
            <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>

        {/* Loading State */}
        {loading ? (
          <div className="flex gap-6 md:gap-8 overflow-hidden py-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex-shrink-0 w-[300px] md:w-[380px] h-[420px] md:h-[500px] bg-slate-800/40 rounded-2xl animate-pulse"></div>
            ))}
          </div>
        ) : (
          <div
            ref={scrollRef}
            className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide scroll-smooth py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {currentData.map((item, index) => (
              <div
                key={item.id}
                className="relative flex-shrink-0 w-[300px] md:w-[380px] h-[420px] md:h-[500px]"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="absolute inset-0 rounded-2xl border-2 border-slate-700 hover:border-red-500 transition-all overflow-hidden">
                  {/* Image with lazy loading */}
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    style={{ filter: 'brightness(0.75)' }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/70 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <span className="inline-block px-4 py-2 bg-red-500/20 border border-red-500/50 text-red-400 text-xs md:text-sm font-bold uppercase rounded-lg mb-4">
                      {item.category}
                    </span>
                    
                    <div 
                      className="text-white font-bold text-lg md:text-xl uppercase leading-tight mb-4 line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                    
                    <div className="h-1 bg-gradient-to-r from-red-500 to-red-600 w-12 rounded-full mb-4"></div>
                    
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white text-sm font-bold py-3 px-8 rounded-xl"
                    >
                      <span>View Details</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

const PowerStructureSVG = () => (
  <>
    <svg className="absolute top-10 right-10 w-32 h-32 md:w-52 md:h-52 opacity-[0.03]" viewBox="0 0 200 200" fill="none">
      <path d="M100 20 L100 180 M60 60 L140 60 M50 100 L150 100 M40 140 L160 140 M60 60 L40 140 M140 60 L160 140" 
        stroke="#ef4444" strokeWidth="5"/>
      <circle cx="100" cy="20" r="10" fill="#ef4444"/>
    </svg>
    <svg className="absolute bottom-28 right-24 w-32 h-32 md:w-52 md:h-52 opacity-[0.03]" viewBox="0 0 200 200" fill="none">
      <circle cx="100" cy="100" r="45" stroke="#ef4444" strokeWidth="5" fill="none"/>
      <circle cx="100" cy="100" r="25" fill="#ef4444"/>
    </svg>
  </>
);

export default EngineeringTabsSlider;
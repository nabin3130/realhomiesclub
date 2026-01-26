
import React from 'react';
import { COLORS } from './constants';
import { ProfileData } from './types';
import SocialCard from './components/SocialCard';

const MOCK_PROFILE: ProfileData = {
  name: "real homies club",
  handle: "@realhomiesclub",
  bio: "a community for the real ones. sharing vibes, podcasts, and late-night talks. join the club and find your home.",
  links: [
    {
      id: '1',
      platform: 'TikTok',
      label: 'watch our vibes',
      url: 'https://www.tiktok.com/@realhomiesclub',
      icon: '',
      color: '#C84F2B'
    },
    {
      id: '2',
      platform: 'Instagram',
      label: 'behind the scenes',
      url: 'https://www.instagram.com/realhomiesclub',
      icon: '',
      color: '#E4405F'
    },
    {
      id: '3',
      platform: 'YouTube',
      label: 'main channel',
      url: 'https://www.youtube.com/@realhomiesclub',
      icon: '',
      color: '#FF0000'
    },
    {
      id: '5',
      platform: 'X',
      label: 'promote your project',
      url: 'https://x.com/real_BD_2025',
      icon: '',
      color: '#000000'
    },
    {
      id: '4',
      platform: 'Telegram',
      label: 'join the inner circle',
      url: 'https://t.me/realhomiesclub',
      icon: '',
      color: '#229ED9'
    }
  ]
};

const FullWidthMarquee: React.FC<{ rotate?: string, speed?: string }> = ({ rotate = 'rotate-0', speed = '20s' }) => (
  <div className={`w-screen relative left-1/2 -translate-x-1/2 overflow-hidden bg-orange-600 text-[#F3E9B4] py-4 shadow-lg transform ${rotate} z-20 border-y-2 border-orange-700/20`}>
    <div 
      className="animate-marquee whitespace-nowrap flex" 
      style={{ animationDuration: speed }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <span key={i} className="mx-8 font-black uppercase tracking-[0.25em] text-xs md:text-sm flex items-center shrink-0">
          ✨ real homies club • stay real • latest vibe check • community first • 
        </span>
      ))}
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen pb-24 bg-[#FDF9F0] selection:bg-orange-200 selection:text-orange-900 font-sans overflow-x-hidden">
      {/* Top Tape */}
      <FullWidthMarquee rotate="rotate-[-1deg]" speed="25s" />

      <div className="relative z-10 max-w-lg mx-auto pt-16 px-4 md:px-0">
        {/* Profile Header */}
        <header className="flex flex-col items-center mb-12 text-center">
          <div className="relative mb-10">
            <div className="w-36 h-36 rounded-[2.5rem] shadow-2xl overflow-hidden bg-white border-[6px] border-white transform hover:rotate-3 transition-transform duration-500">
               <div 
                 className="w-full h-full flex items-center justify-center p-4" 
                 style={{ backgroundColor: COLORS.primary }}
               >
                 <div className="flex flex-col items-center">
                    <div className="text-[#F3E9B4] font-logo text-base leading-tight text-center select-none lowercase tracking-tight">
                      real<br/>homies<br/>club
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                       <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                       <div className="w-2.5 h-2.5 bg-[#F3E9B4] rotate-45"></div>
                       <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                 </div>
               </div>
            </div>
            {/* Retro Sparkles */}
            <div className="absolute -top-4 -right-4 text-[#FFB13B] animate-pulse">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l1 6 6 1-6 1-1 6-1-6-6-1 6-1z" />
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-4xl md:text-5xl font-logo text-gray-900 tracking-tighter lowercase">
              {MOCK_PROFILE.name}
            </h1>
            <div className="text-orange-600">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <p className="text-orange-600 font-black text-xl mb-12 lowercase tracking-wide">
            {MOCK_PROFILE.handle}
          </p>

          <div className="bg-[#F3E9B4] rounded-[2.5rem] p-8 shadow-md border border-orange-100/50 mb-12 w-full italic text-gray-800 text-lg leading-relaxed lowercase relative group text-left">
            <div className="absolute -top-3.5 left-8 px-4 bg-orange-600 text-white text-xs font-black rounded-full py-1 tracking-widest uppercase not-italic shadow-lg">
              latest vibe
            </div>
            <div className="flex flex-col gap-3">
               <span className="font-black text-orange-900 not-italic block text-xl tracking-tight">how did you get into crypto?</span>
               <p className="text-base font-semibold opacity-70">everyone has a story. let’s unpack yours with the homies.</p>
            </div>
          </div>
        </header>

        {/* Links Section */}
        <div className="space-y-5 mb-24">
          {MOCK_PROFILE.links.map(link => (
            <SocialCard key={link.id} link={link} />
          ))}
        </div>

        {/* Website Content Section */}
        <div className="pt-20 border-t-4 border-orange-600/5 space-y-24">
           {/* Our Story */}
           <section className="px-2">
             <div className="flex flex-col items-center text-center">
                <div className="mb-8 px-6 py-2 bg-orange-600 text-[#F3E9B4] rounded-full text-xs font-black tracking-[0.2em] uppercase">
                   our story
                </div>
                <h2 className="text-4xl font-logo text-gray-900 lowercase mb-8 tracking-tighter">keeping it real</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed lowercase text-xl">
                  <p className="font-bold text-gray-900">
                    we started by keeping it real. no filters. no fluff.
                  </p>
                  <p className="font-semibold opacity-60">
                    a space for honest conversations. the real homies club is a sanctuary for the late-night thinkers, the professional misfits, and the community-led creators.
                  </p>
                  <div className="flex justify-center pt-6">
                    <div className="w-16 h-1.5 bg-orange-600 rounded-full opacity-10"></div>
                  </div>
                </div>
             </div>
           </section>

           {/* Collaborate Section */}
           <section className="px-2 pb-12">
             <div className="bg-orange-600 rounded-[3rem] p-12 text-[#F3E9B4] shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 transition-transform group-hover:scale-110"></div>
               <h3 className="text-4xl font-logo lowercase mb-6 tracking-tighter">collaborate</h3>
               <div className="lowercase text-lg font-semibold opacity-90 leading-relaxed mb-10">
                 <p className="font-black mb-2 text-white text-2xl">real ideas only.</p>
                 <p>what do you want to work on together? we are here for it.</p>
               </div>
               <button className="bg-[#F3E9B4] text-orange-600 px-10 py-5 rounded-[1.5rem] font-black lowercase text-base hover:scale-105 transition-all shadow-xl active:scale-95">
                 get in touch
               </button>
             </div>
           </section>
        </div>
      </div>

      {/* Bottom Tape */}
      <div className="mt-20">
        <FullWidthMarquee rotate="rotate-[1deg]" speed="30s" />
      </div>

      {/* Footer */}
      <footer className="mt-24 pb-12 text-center text-gray-400 text-[10px] uppercase tracking-[0.4em] font-black">
        <p className="mb-6 opacity-40">© 2026 real homies club • established for the real ones</p>
        <div className="flex justify-center gap-12">
          <a href="#" className="hover:text-orange-600 transition-colors">privacy</a>
          <a href="#" className="hover:text-orange-600 transition-colors">terms</a>
        </div>
      </footer>
    </div>
  );
};

export default App;

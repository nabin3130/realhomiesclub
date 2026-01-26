
import React from 'react';
import { SocialLink } from '../types';
import { ICONS, COLORS } from '../constants';

interface SocialCardProps {
  link: SocialLink;
}

const SocialCard: React.FC<SocialCardProps> = ({ link }) => {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center p-5 bg-white rounded-[1.8rem] shadow-sm border border-orange-100/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full overflow-hidden"
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity" 
        style={{ backgroundColor: link.color }}
      />
      
      <div 
        className="flex items-center justify-center w-12 h-12 rounded-2xl text-white mr-5 shadow-inner group-hover:scale-110 transition-transform duration-500"
        style={{ backgroundColor: link.color }}
      >
        {ICONS[link.platform] || ICONS.Other}
      </div>
      
      <div className="flex-1">
        <h3 className="font-extrabold text-gray-800 text-lg group-hover:text-orange-700 transition-colors lowercase tracking-tight">
          {link.label}
        </h3>
        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-extrabold mt-0.5 opacity-80">
          {link.platform}
        </p>
      </div>
      
      <div className="text-gray-200 group-hover:text-orange-400 transition-all group-hover:translate-x-1">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </a>
  );
};

export default SocialCard;

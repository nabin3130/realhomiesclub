
import React, { useState, useRef, useEffect } from 'react';
import { chatWithHomie } from '../services/geminiService';
import { COLORS } from '../constants';

interface Message {
  text: string;
  isUser: boolean;
}

const ChatBot: React.FC<{ clubContext: string }> = ({ clubContext }) => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "yo! real homie here. how did you get into crypto? i'm curious about your story.", isUser: false }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { text: userMsg, isUser: true }]);
    setIsTyping(true);

    const response = await chatWithHomie(userMsg, clubContext);
    
    setMessages(prev => [...prev, { text: response.toLowerCase(), isUser: false }]);
    setIsTyping(false);
  };

  return (
    <div className="bg-white/70 backdrop-blur-md rounded-[2.5rem] p-6 shadow-xl border border-orange-100 flex flex-col h-[440px]">
      <div className="flex items-center justify-between mb-5 px-1">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
          <h3 className="font-bold text-gray-700 text-sm lowercase tracking-tight opacity-80">homie bot active</h3>
        </div>
        <div className="text-[9px] text-gray-400 uppercase font-black tracking-[0.2em]">club sync enabled</div>
      </div>
      
      <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-4 pr-1 mb-6 custom-scrollbar scroll-smooth">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.isUser ? 'justify-end' : 'justify-start'}`}>
            <div 
              className={`max-w-[85%] px-5 py-3.5 rounded-[1.6rem] text-[14px] font-medium leading-relaxed shadow-sm lowercase ${
                m.isUser 
                ? 'bg-orange-600 text-white rounded-tr-none' 
                : 'bg-cream text-gray-800 rounded-tl-none border border-orange-50/50'
              }`}
              style={!m.isUser ? { backgroundColor: COLORS.secondary } : {}}
            >
              {m.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-orange-50/50 px-5 py-3.5 rounded-2xl flex gap-2 items-center">
              <span className="w-2 h-2 bg-orange-300 rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-2 h-2 bg-orange-600 rounded-full animate-bounce [animation-delay:0.4s]"></span>
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-2 bg-gray-50/60 p-2 rounded-[1.8rem] border border-gray-100 focus-within:ring-4 focus-within:ring-orange-600/5 transition-all">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="tell us your story..."
          className="flex-1 px-5 py-3 bg-transparent focus:outline-none text-sm lowercase font-medium placeholder:text-gray-300"
        />
        <button
          onClick={handleSend}
          disabled={!input.trim()}
          className="bg-orange-600 text-white p-3.5 rounded-[1.4rem] hover:bg-orange-700 disabled:opacity-20 transition-all shadow-lg shadow-orange-600/20 active:scale-90"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatBot;

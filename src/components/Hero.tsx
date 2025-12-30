import { useState, useEffect, useRef } from 'react';
import { ArrowRight, FlaskConical } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const heroRef = useScrollReveal<HTMLDivElement>();
  const flowTextRef = useRef<HTMLDivElement>(null);
  const changingWordRef = useRef<HTMLSpanElement>(null);
  const wrapperRef = useRef<HTMLSpanElement>(null);

  const rotatingWords = ['Chemistry', 'Scale-up', 'Manufacturing'];
  const flowPhrase = "Means Going With the Flow.";

  useEffect(() => {
    // Rotating words animation
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Flow text animation - split into words and characters
    if (flowTextRef.current) {
      const words = flowPhrase.split(' ');
      let charCount = 0;
      
      const wrappedHtml = words.map(word => {
        const letters = word.split('').map(char => {
          return `<span class="char" style="--char-index: ${charCount++}">${char}</span>`;
        }).join('');
        return `<span class="word">${letters}</span>`;
      }).join('');

      flowTextRef.current.innerHTML = wrappedHtml;
      flowTextRef.current.classList.remove('opacity-0');
    }
  }, []);

  useEffect(() => {
    // Changing word animation - only the word after "Smart" changes
    if (wrapperRef.current && changingWordRef.current) {
      const words = ['Chemistry', 'Scale-up', 'Manufacturing'];
      let wordIndex = 0;

      // Set initial word
      changingWordRef.current.textContent = words[wordIndex];

      const interval = setInterval(() => {
        // Fade out & slide down
        wrapperRef.current!.style.opacity = '0';
        wrapperRef.current!.style.transform = 'translateY(10px)';

        setTimeout(() => {
          // Change word
          wordIndex = (wordIndex + 1) % words.length;
          changingWordRef.current!.textContent = words[wordIndex];

          // Fade in & slide up
          wrapperRef.current!.style.opacity = '1';
          wrapperRef.current!.style.transform = 'translateY(0)';
        }, 500);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <>
      <section className="relative min-h-[110vh] flex flex-col justify-center items-center px-6 pt-12 overflow-hidden bg-gradient-to-b from-white to-gray-50/30">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Animated Gradient Blobs - More subtle and white */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gray-200/20 rounded-full mix-blend-multiply filter blur-[120px] animate-blob opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gray-300/15 rounded-full mix-blend-multiply filter blur-[120px] animate-blob animation-delay-2000 opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-200/15 rounded-full mix-blend-multiply filter blur-[120px] animate-blob animation-delay-4000 opacity-15"></div>
        </div>

        <div ref={heroRef} className="relative z-10 max-w-5xl text-center reveal-on-scroll flex flex-col items-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-gray-200 mb-6 shadow-sm transition-all hover:scale-105 cursor-default hover:border-brand-purple/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-purple opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-purple"></span>
            </span>
            <span className="text-xs font-semibold tracking-wide uppercase text-gray-600">The Future of Continuous Flow</span>
          </div>

          {/* Enhanced Typography */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-[1.1] mb-8 text-brand-black relative">
            {/* Abstract Flow Line SVG behind text */}
            <svg className="absolute -top-20 -left-20 w-[120%] h-[150%] -z-10 opacity-40 pointer-events-none text-brand-purple" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-50 100 C 50 100, 100 0, 200 100 S 350 200, 450 100" stroke="url(#paint0_linear)" strokeWidth="2" strokeLinecap="round" className="animate-flow-dash" strokeDasharray="10 10"/>
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#e07742" stopOpacity="0.2"/>
                  <stop offset="0.5" stopColor="#702594" stopOpacity="0.5"/>
                  <stop offset="1" stopColor="#057210" stopOpacity="0.2"/>
                </linearGradient>
              </defs>
            </svg>

            Join the <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-purple to-brand-green">Flow Revolution.</span><br/>

            <div className="text-4xl md:text-6xl lg:text-7xl mt-2 font-light text-brand-black/90">
              Smart{' '}
              <span className="inline-block w-[300px] md:w-[450px] lg:w-[600px] text-left align-bottom relative h-[1.2em]">
                <span ref={wrapperRef} className="absolute left-0 top-0 transition-all duration-500" style={{ opacity: 1 }}>
                  <span ref={changingWordRef} className="font-medium text-brand-green relative z-10">Chemistry</span>
                </span>
            </span>
            </div>
          </h1>

          <div className="h-8">
            <span ref={flowTextRef} className="text-xl md:text-2xl text-brand-gray/80 font-medium tracking-tight opacity-0"></span>
          </div>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed mt-8 mb-12">
            Accelerate from gram-scale R&D to ton-scale production. <br className="hidden md:block"/>
            Zero scale-up risks. <span className="text-brand-black font-medium">40% lower CapEx.</span>
          </p>

          {/* Buttons & Social Proof */}
          <div className="flex flex-col items-center gap-8 w-full">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
            <button
              onClick={() => {
                const element = document.querySelector('#ai-architect');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
                className="bg-brand-black text-white px-8 py-4 rounded-2xl text-sm font-medium hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 min-w-[200px] flex items-center justify-center gap-2 group"
            >
              Start Feasibility Audit
                <FlaskConical className="w-4 h-4 text-brand-green group-hover:rotate-12 transition-transform" />
            </button>
            <button
              onClick={() => {
                const element = document.querySelector('#pillars');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
                className="glass-panel text-brand-black px-8 py-4 rounded-2xl text-sm font-normal hover:bg-white border border-gray-200 hover:border-brand-purple/50 transition-all flex items-center gap-2 min-w-[200px] justify-center backdrop-blur-sm"
            >
              Explore Platform <ArrowRight className="w-4 h-4 text-brand-purple" />
            </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .word {
          display: inline-block;
          white-space: nowrap;
          margin-right: 0.25em;
          vertical-align: top;
        }
        
        .char {
          display: inline-block;
          opacity: 0;
          animation: flowReveal 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          animation-delay: calc(var(--char-index) * 0.04s);
          will-change: transform, opacity, filter;
        }

        @keyframes flowReveal {
          0% { 
            opacity: 0; 
            transform: translateX(-15px) scaleX(0.9); 
            filter: blur(4px);
          }
          100% { 
            opacity: 1; 
            transform: translateX(0) scaleX(1); 
            filter: blur(0);
          }
        }

        @keyframes flowDash {
          0% { stroke-dashoffset: 1000; }
          100% { stroke-dashoffset: 0; }
        }

        .glass-card-hero {
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(40px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </>
  );
}

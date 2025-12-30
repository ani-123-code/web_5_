import { useState, useEffect, useRef } from 'react';
import { ArrowRight, FlaskConical, Sparkles } from 'lucide-react';
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
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
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
    if (wrapperRef.current && changingWordRef.current) {
      const words = ['Chemistry', 'Scale-up', 'Manufacturing'];
      let wordIndex = 0;

      changingWordRef.current.textContent = words[wordIndex];

      const interval = setInterval(() => {
        wrapperRef.current!.style.opacity = '0';
        wrapperRef.current!.style.transform = 'translateY(10px)';

        setTimeout(() => {
          wordIndex = (wordIndex + 1) % words.length;
          changingWordRef.current!.textContent = words[wordIndex];

          wrapperRef.current!.style.opacity = '1';
          wrapperRef.current!.style.transform = 'translateY(0)';
        }, 500);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-24 sm:py-28 overflow-hidden bg-gradient-to-br from-white via-orange-50/30 to-purple-50/30">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-10 w-[600px] h-[600px] bg-brand-orange/20 rounded-full mix-blend-multiply filter blur-[150px] animate-blob"></div>
          <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-brand-purple/20 rounded-full mix-blend-multiply filter blur-[150px] animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-green/15 rounded-full mix-blend-multiply filter blur-[150px] animate-blob animation-delay-4000"></div>
        </div>

        <div ref={heroRef} className="relative z-10 max-w-6xl text-center reveal-on-scroll flex flex-col items-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-xl border border-orange-200/50 mb-8 shadow-lg transition-all hover:scale-105 cursor-default hover:shadow-xl group">
            <Sparkles className="w-4 h-4 text-brand-orange group-hover:rotate-12 transition-transform" />
            <span className="text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-brand-orange to-brand-purple bg-clip-text text-transparent" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              The Future of Continuous Flow
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1] mb-6 text-gray-900 relative w-full px-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <svg className="absolute -top-20 -left-20 w-[120%] h-[150%] -z-10 opacity-30 pointer-events-none hidden sm:block" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-50 100 C 50 100, 100 0, 200 100 S 350 200, 450 100" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round" className="animate-flow-dash" strokeDasharray="10 10"/>
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#e07742" stopOpacity="0.3"/>
                  <stop offset="0.5" stopColor="#702594" stopOpacity="0.6"/>
                  <stop offset="1" stopColor="#057210" stopOpacity="0.3"/>
                </linearGradient>
              </defs>
            </svg>

            <div className="text-center mb-4">
              Join the <span className="bg-gradient-to-r from-brand-orange via-brand-purple to-brand-green bg-clip-text text-transparent">Flow Revolution</span>
            </div>

            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-6 flex flex-wrap justify-center items-center gap-3 md:gap-4">
              <span className="text-gray-800">Smart</span>
              <span className="inline-block min-w-[200px] sm:min-w-[250px] md:min-w-[380px] lg:min-w-[450px] text-left relative h-[1.2em]">
                <span ref={wrapperRef} className="absolute left-0 top-0 transition-all duration-500" style={{ opacity: 1 }}>
                  <span ref={changingWordRef} className="bg-gradient-to-r from-brand-orange to-brand-green bg-clip-text text-transparent relative z-10">Chemistry</span>
                </span>
              </span>
            </div>
          </h1>

          <div className="h-8 sm:h-10 mb-6">
            <span ref={flowTextRef} className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 font-medium tracking-tight opacity-0" style={{ fontFamily: "'Inter', sans-serif" }}></span>
          </div>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed mb-10 sm:mb-12 px-4" style={{ fontFamily: "'Inter', sans-serif" }}>
            Accelerate from gram-scale R&D to ton-scale production. <br className="hidden md:block"/>
            Zero scale-up risks. <span className="text-brand-orange font-bold">40% lower CapEx.</span>
          </p>

          <div className="flex flex-col items-center gap-8 w-full px-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md sm:max-w-none">
              <button
                onClick={() => {
                  const element = document.querySelector('#ai-architect');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-gradient-to-r from-brand-orange to-brand-purple text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-sm sm:text-base font-bold hover:shadow-2xl transition-all hover:scale-105 w-full sm:w-auto sm:min-w-[240px] flex items-center justify-center gap-3 group"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Start Feasibility Audit
                <FlaskConical className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector('#pillars');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white/80 backdrop-blur-xl text-gray-800 px-8 sm:px-10 py-4 sm:py-5 rounded-full text-sm sm:text-base font-bold border-2 border-gray-200 hover:border-brand-orange hover:shadow-xl transition-all flex items-center gap-3 w-full sm:w-auto sm:min-w-[240px] justify-center group"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Explore Platform <ArrowRight className="w-5 h-5 text-brand-purple group-hover:translate-x-1 transition-transform" />
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

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
}

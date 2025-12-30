import { useState, useRef, forwardRef } from 'react';
import { ArrowRight } from 'lucide-react';

export const pillars = [
  {
    id: 1,
    title: 'Cost Reduction',
    description: 'Average manufacturing cost decrease of 27%.',
    overview: 'Flownetics addresses the financial inefficiencies of conventional batch manufacturing, Where too much capital is often stuck; by utilizing flow chemistry it enable predictable output and lower costs. Our model achieves an average manufacturing cost decrease of 27%.',
    technicalCapabilities: [
      'Process Intensification: Maximizing yield while minimizing resource requirements.',
      'Optimized Resource Usage: Reduced raw material requirements and significantly lower solvent and agent volumes.',
      'Energy Efficiency: Lower energy consumption through advanced flow reactor heat management.',
      'Automation: Intelligent protocols that reduce man-power requirements.'
    ],
    businessImpact: [
      'Increased Margins: Efficiencies in material and energy consumption directly improve profitability.',
      'Accelerated Development: Faster development cycles reduce the time-to-market for new products.',
      'Inventory Efficiency: High-speed production (e.g., achieving 60 days of batch output in just 5 days) reduces carrying costs.'
    ],
    keyBenefits: [
      'Up to 35% proven savings in specific applications.',
      'Better selectivity and higher yields (up to 25% increase).',
      'Lower catalyst loading and optimized pressure/temperature parameters.'
    ],
    number: '01',
    accentColor: 'text-brand-orange',
    borderColor: 'border-brand-orange'
  },
  {
    id: 2,
    title: 'Risk Acknowledgment',
    description: 'Safety engineered into every step with 0% upfront risk.',
    overview: 'Safety is engineered into every step of the Flownetics process. Our "Risk Acknowledgment" pillar ensures early identification and validation, solving problems during development before they reach the scale-up phase.',
    technicalCapabilities: [
      'Checkpoint-Based Validation: Every stage of development acts as a validation checkpoint to catch risks while they are small.',
      'Superior Thermal Control: Flow reactors provide up to 60% higher heat transfer capacity in 1/10th of the space, managing hazardous or exothermic reactions safely.',
      'Process Mapping: Continuous flow parameters are meticulously mapped to replace less predictable batch methods.'
    ],
    businessImpact: [
      'Reduced Liability: Early risk mitigation prevents expensive failures during large-scale commercial runs.',
      'Confident Scaling: Full validation is required before any capital investment is made, eliminating financial uncertainty.'
    ],
    keyBenefits: [
      '0% upfront risk for clients.',
      'Enhanced safety for highly unstable or unstable diazo-intermediates.',
      'Validation and compliance-ready processes for regulated industries.'
    ],
    number: '02',
    accentColor: 'text-brand-purple',
    borderColor: 'border-brand-purple'
  },
  {
    id: 3,
    title: 'CAPEX-Free Engagement',
    description: 'Factory-as-a-Service model with ROI in as little as 15 months.',
    overview: 'We remove the burden of building and maintaining infrastructure through a "Factory-as-a-Service" (FaaS) model. This approach allows organizations to scale without large capital investments, paying for performance and outcomes rather than plant walls.',
    technicalCapabilities: [
      'Modular Platforms: Deployment of custom reactors and modular platforms directly to the customer site.',
      'Subscription Infrastructure: Full O&M (Operations and Maintenance) of equipment is handled by Flownetics.',
      'Continuous Upgrades: Ongoing access to both hardware and software advancements.'
    ],
    businessImpact: [
      'Shift from CAPEX to OPEX: Transparent monthly fees tied to the savings and value created.',
      'Eliminated Financial Barriers: No upfront investment in infrastructure is required to adopt flow chemistry.',
      'Rapid ROI: Proven examples show an ROI in savings achieved in as little as 15 months.'
    ],
    keyBenefits: [
      'Two Engagement Paths: Choose between Factory-as-a-Service (on-site) or Product-as-a-Service (at Flownetics\' facility).',
      'Minimal Entry Cost: Engagement begins with a one-time R&D service fee and a small refundable deposit (20–30%) upon equipment installation.'
    ],
    number: '03',
    accentColor: 'text-brand-blue',
    borderColor: 'border-brand-blue'
  },
  {
    id: 4,
    title: 'Sustainability Focus',
    description: '93% isolated yield with up to 80% reduction in effluents.',
    overview: 'Sustainability is a core pillar where greener processes meet better economics. By embedding eco-friendly operations into the process core, we help companies meet regulatory and ESG mandates ahead of schedule.',
    technicalCapabilities: [
      'Waste Minimization: Significant reduction in effluents (up to 80% reduction observed in case studies).',
      'Solvent Reduction: Inherently cleaner processes that use far fewer solvents and generate less waste.',
      'Compact Footprint: Reactors use a fraction of the real estate compared to traditional plants while maintaining high efficiency.'
    ],
    businessImpact: [
      'Compliance Future-Proofing: Strengthened compliance reduces environmental load and long-term regulatory risk.',
      'Profitability through Greenery: Environmental benefits, such as better yields and lower resource consumption, drive long-term financial gain.'
    ],
    keyBenefits: [
      '93% isolated yield in hazardous processes (like diazotization) with dramatically reduced impurities.',
      'Reduced emissions and lower overall carbon footprint.'
    ],
    number: '04',
    accentColor: 'text-brand-green',
    borderColor: 'border-brand-green'
  },
  {
    id: 5,
    title: 'Supply Chain Resilience',
    description: 'Self-reliant, scalable production ecosystems.',
    overview: 'Supply chain dependency increases cost and risk. Flownetics builds resilience by creating self-reliant, scalable production ecosystems that turn dependency into a competitive strength.',
    technicalCapabilities: [
      'Flexible Systems: Design of agile manufacturing systems that can adapt to changing needs.',
      'Diverse Vendor Networks: Utilization of geographically diverse networks to reduce reliance on imported materials.',
      'In-House Capability: Building flow chemistry capabilities from the initial stage to minimize external disruption risks.'
    ],
    businessImpact: [
      'Predictable Operations: Stability even during periods of market volatility.',
      'Reduced Logistics Cost: Streamlined logistics networks and reduced dependency on external suppliers.'
    ],
    keyBenefits: [
      'Faster time-to-market through de-risked operations.',
      'Geographic risk diversification.'
    ],
    number: '05',
    accentColor: 'text-brand-green',
    borderColor: 'border-brand-green'
  },
  {
    id: 6,
    title: 'Manufacturing Versatility',
    description: 'Full chemistry spectrum from standard to high-risk continuous processing.',
    overview: 'Our expertise spans the full chemistry spectrum, from standard pharmaceutical manufacturing to highly complex, high-risk continuous processing. This allows clients to scale any molecule confidently without technical limitations.',
    technicalCapabilities: [
      'Hazardous Chemistry Mastery: Safe handling of fast, exothermic, and pyrophoric reactions.',
      'Advanced Synthesis: Capabilities in solvent-free, high temperature/pressure (T/P) synthesis, and slurry phase reactions.',
      'Catalysis: Expertise in heterogeneous catalysis and simplified downstream processing.'
    ],
    businessImpact: [
      'Portfolio Flexibility: Ability to handle everything from basic molecules to high-value, low-volume specialty chemicals.',
      'Scale-Up Consistency: Elimination of the yield bottlenecks and inconsistencies often found in traditional scale-up.'
    ],
    keyBenefits: [
      'Multistep, high-risk continuous processing capabilities.',
      'Consistent product quality meeting USP & EP specifications.'
    ],
    number: '06',
    accentColor: 'text-brand-purple',
    borderColor: 'border-brand-purple'
  },
];

export default function Pillars() {
  const [activePillar, setActivePillar] = useState<number | null>(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showConnectionWire, setShowConnectionWire] = useState(false);
  const [connectionPath, setConnectionPath] = useState('');
  const detailPanelRef = useRef<HTMLDivElement>(null);
  const pillarRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePillarClick = (pillarId: number) => {
    if (pillarId !== activePillar && !isAnimating) {
      // Calculate connection path
      const pillarElement = pillarRefs.current[pillarId];
      const detailElement = detailPanelRef.current;
      const containerElement = containerRef.current;

      if (pillarElement && detailElement && containerElement) {
        const containerRect = containerElement.getBoundingClientRect();
        const pillarRect = pillarElement.getBoundingClientRect();
        const detailRect = detailElement.getBoundingClientRect();

        const startX = (pillarRect.right - containerRect.left) / containerRect.width * 100;
        const startY = (pillarRect.top + pillarRect.height / 2 - containerRect.top) / containerRect.height * 100;
        const endX = (detailRect.left - containerRect.left) / containerRect.width * 100;
        const endY = (detailRect.top + detailRect.height / 2 - containerRect.top) / containerRect.height * 100;

        const controlX = (startX + endX) / 2;
        const path = `M ${startX}% ${startY}% Q ${controlX}% ${startY}%, ${endX}% ${endY}%`;
        setConnectionPath(path);
      }

      setShowConnectionWire(true);
      setIsAnimating(true);

      setTimeout(() => {
        setShowConnectionWire(false);
      }, 1000);

      setTimeout(() => {
        setActivePillar(pillarId);
        setTimeout(() => setIsAnimating(false), 400);
      }, 300);
      
      // Scroll to the detail panel to ensure it's visible at the top
      setTimeout(() => {
        if (detailPanelRef.current) {
          const element = detailPanelRef.current;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - 120; // Offset for navigation bar and spacing
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        } else {
          // Fallback: scroll to the pillars section
          const pillarsSection = document.getElementById('pillars');
          if (pillarsSection) {
            const elementPosition = pillarsSection.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - 120;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      }, 150);
    }
  };

  const selectedPillar = pillars.find((p) => p.id === activePillar);

  return (
    <section id="pillars" className="relative py-16 sm:py-20 px-4 sm:px-6 bg-black overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-brand-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-brand-orange/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12 sm:mb-16 text-center">
          <div className="inline-block mb-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter text-white">
              The Flownetics Standard.
            </h2>
          </div>
          <p className="text-gray-400 text-base sm:text-lg">Click to explore each pillar.</p>
        </div>

        <div ref={containerRef} className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start relative">
          {/* Connection Wire Animation */}
          {showConnectionWire && activePillar && connectionPath && (
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-20"
              style={{ overflow: 'visible' }}
            >
              <defs>
                <linearGradient id="wireGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={
                    pillars.find(p => p.id === activePillar)?.accentColor.includes('orange') ? '#e07742' :
                    pillars.find(p => p.id === activePillar)?.accentColor.includes('purple') ? '#702594' :
                    pillars.find(p => p.id === activePillar)?.accentColor.includes('blue') ? '#1406b3' :
                    '#057210'
                  } stopOpacity="1"/>
                  <stop offset="50%" stopColor={
                    pillars.find(p => p.id === activePillar)?.accentColor.includes('orange') ? '#e07742' :
                    pillars.find(p => p.id === activePillar)?.accentColor.includes('purple') ? '#702594' :
                    pillars.find(p => p.id === activePillar)?.accentColor.includes('blue') ? '#1406b3' :
                    '#057210'
                  } stopOpacity="0.8"/>
                  <stop offset="100%" stopColor={
                    pillars.find(p => p.id === activePillar)?.accentColor.includes('orange') ? '#e07742' :
                    pillars.find(p => p.id === activePillar)?.accentColor.includes('purple') ? '#702594' :
                    pillars.find(p => p.id === activePillar)?.accentColor.includes('blue') ? '#1406b3' :
                    '#057210'
                  } stopOpacity="1"/>
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <path
                d={connectionPath}
                stroke="url(#wireGradient)"
                strokeWidth="6"
                fill="none"
                className="connection-wire"
                filter="url(#glow)"
              />
              {/* Animated dot traveling along the path */}
              <circle r="8" fill={
                pillars.find(p => p.id === activePillar)?.accentColor.includes('orange') ? '#e07742' :
                pillars.find(p => p.id === activePillar)?.accentColor.includes('purple') ? '#702594' :
                pillars.find(p => p.id === activePillar)?.accentColor.includes('blue') ? '#1406b3' :
                '#057210'
              } className="connection-dot" filter="url(#glow)">
                <animateMotion dur="1s" repeatCount="1">
                  <mpath href="#wirePath"/>
                </animateMotion>
              </circle>
              <path id="wirePath" d={connectionPath} fill="none" stroke="none"/>
            </svg>
          )}

          <div className="space-y-3 sm:space-y-4">
            {pillars.map((pillar) => (
              <PillarCard
                key={pillar.id}
                pillar={pillar}
                isActive={activePillar === pillar.id}
                onClick={() => handlePillarClick(pillar.id)}
                ref={(el) => (pillarRefs.current[pillar.id] = el)}
              />
            ))}
          </div>

          <div ref={detailPanelRef} className="lg:sticky lg:top-24 detail-panel-container">
            {selectedPillar && (
              <div
                className={`detail-panel border-2 rounded-3xl p-6 sm:p-8 shadow-2xl cursor-purple transition-all duration-300 flex flex-col relative overflow-hidden ${
                  isAnimating ? 'slide-out' : 'slide-in'
                }`}
                style={{
                  background: (() => {
                    const color = selectedPillar.accentColor.includes('orange') ? '#e07742' :
                                  selectedPillar.accentColor.includes('purple') ? '#702594' :
                                  selectedPillar.accentColor.includes('blue') ? '#1406b3' :
                                  '#057210';
                    const darkerColor = selectedPillar.accentColor.includes('orange') ? '#c25a2a' :
                                       selectedPillar.accentColor.includes('purple') ? '#551c73' :
                                       selectedPillar.accentColor.includes('blue') ? '#0d0480' :
                                       '#03540c';
                    const lighterColor = selectedPillar.accentColor.includes('orange') ? '#ff9966' :
                                        selectedPillar.accentColor.includes('purple') ? '#9b4ec7' :
                                        selectedPillar.accentColor.includes('blue') ? '#3d28e6' :
                                        '#0aa11d';
                    return `radial-gradient(ellipse at bottom left, ${color}40 0%, ${darkerColor}25 30%, rgba(20, 20, 20, 0.98) 70%), radial-gradient(circle at top right, ${lighterColor}30 0%, transparent 50%)`;
                  })(),
                  borderColor: selectedPillar.accentColor.includes('orange') ? '#e07742' :
                              selectedPillar.accentColor.includes('purple') ? '#702594' :
                              selectedPillar.accentColor.includes('blue') ? '#1406b3' :
                              selectedPillar.accentColor.includes('green') ? '#057210' : '#702594',
                  boxShadow: (() => {
                    const color = selectedPillar.accentColor.includes('orange') ? '#e07742' :
                                  selectedPillar.accentColor.includes('purple') ? '#702594' :
                                  selectedPillar.accentColor.includes('blue') ? '#1406b3' :
                                  '#057210';
                    return `0 0 50px ${color}50, 0 0 100px ${color}25, inset 0 0 100px ${color}10`;
                  })()
                }}
              >
                {/* Animated gradient orb */}
                <div
                  className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-30 animate-pulse"
                  style={{
                    background: (() => {
                      const lighterColor = selectedPillar.accentColor.includes('orange') ? '#ff9966' :
                                          selectedPillar.accentColor.includes('purple') ? '#9b4ec7' :
                                          selectedPillar.accentColor.includes('blue') ? '#3d28e6' :
                                          '#0aa11d';
                      return `radial-gradient(circle, ${lighterColor} 0%, transparent 70%)`;
                    })()
                  }}
                />

                {/* Overview */}
                {selectedPillar.overview && (
                  <div className="mb-4 relative z-10">
                  <h4 className="text-xs font-black text-gray-300 uppercase tracking-wider mb-2">
                      Overview
                  </h4>
                    <p className="text-gray-200 leading-relaxed text-xs sm:text-sm font-medium">
                      {selectedPillar.overview}
                  </p>
                </div>
                )}

                {/* Technical Capabilities */}
                {selectedPillar.technicalCapabilities && selectedPillar.technicalCapabilities.length > 0 && (
                  <div className="mb-4 relative z-10">
                    <h4 className="text-xs font-black text-gray-300 uppercase tracking-wider mb-2">
                      Technical Capabilities
                  </h4>
                  <ul className="space-y-2">
                      {selectedPillar.technicalCapabilities.map((capability, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div
                            className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                            style={{
                              backgroundColor: selectedPillar.accentColor.includes('orange') ? '#ff9966' :
                                              selectedPillar.accentColor.includes('purple') ? '#9b4ec7' :
                                              selectedPillar.accentColor.includes('blue') ? '#3d28e6' :
                                              selectedPillar.accentColor.includes('green') ? '#0aa11d' : '#9b4ec7',
                              boxShadow: `0 0 10px ${selectedPillar.accentColor.includes('orange') ? '#e07742' :
                                              selectedPillar.accentColor.includes('purple') ? '#702594' :
                                              selectedPillar.accentColor.includes('blue') ? '#1406b3' :
                                              '#057210'}`
                            }}
                          ></div>
                          <span className="text-gray-200 text-xs leading-relaxed font-medium">{capability}</span>
                    </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Business Impact */}
                {selectedPillar.businessImpact && selectedPillar.businessImpact.length > 0 && (
                  <div className="mb-4 relative z-10">
                    <h4 className="text-xs font-black text-gray-300 uppercase tracking-wider mb-2">
                      Business Impact
                    </h4>
                    <ul className="space-y-2">
                      {selectedPillar.businessImpact.map((impact, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div
                            className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                            style={{
                              backgroundColor: selectedPillar.accentColor.includes('orange') ? '#ff9966' :
                                              selectedPillar.accentColor.includes('purple') ? '#9b4ec7' :
                                              selectedPillar.accentColor.includes('blue') ? '#3d28e6' :
                                              selectedPillar.accentColor.includes('green') ? '#0aa11d' : '#9b4ec7',
                              boxShadow: `0 0 10px ${selectedPillar.accentColor.includes('orange') ? '#e07742' :
                                              selectedPillar.accentColor.includes('purple') ? '#702594' :
                                              selectedPillar.accentColor.includes('blue') ? '#1406b3' :
                                              '#057210'}`
                            }}
                          ></div>
                          <span className="text-gray-200 text-xs leading-relaxed font-medium">{impact}</span>
                    </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Key Benefits */}
                {selectedPillar.keyBenefits && selectedPillar.keyBenefits.length > 0 && (
                  <div className="rounded-xl p-4 shadow-sm mb-3 flex-grow relative z-10"
                    style={{
                      background: (() => {
                        const color = selectedPillar.accentColor.includes('orange') ? '#e07742' :
                                      selectedPillar.accentColor.includes('purple') ? '#702594' :
                                      selectedPillar.accentColor.includes('blue') ? '#1406b3' :
                                      '#057210';
                        return `linear-gradient(135deg, ${color}20 0%, rgba(0, 0, 0, 0.4) 100%)`;
                      })(),
                      borderLeft: `4px solid ${selectedPillar.accentColor.includes('orange') ? '#ff9966' :
                                              selectedPillar.accentColor.includes('purple') ? '#9b4ec7' :
                                              selectedPillar.accentColor.includes('blue') ? '#3d28e6' :
                                              '#0aa11d'}`,
                      boxShadow: `0 0 20px ${selectedPillar.accentColor.includes('orange') ? '#e0774220' :
                                            selectedPillar.accentColor.includes('purple') ? '#70259420' :
                                            selectedPillar.accentColor.includes('blue') ? '#1406b320' :
                                            '#05721020'}`
                    }}
                  >
                    <h4 className="text-xs font-black uppercase tracking-wider mb-2"
                      style={{
                        color: selectedPillar.accentColor.includes('orange') ? '#ff9966' :
                               selectedPillar.accentColor.includes('purple') ? '#9b4ec7' :
                               selectedPillar.accentColor.includes('blue') ? '#3d28e6' :
                               '#0aa11d'
                      }}
                    >
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {selectedPillar.keyBenefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div
                            className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                            style={{
                              backgroundColor: selectedPillar.accentColor.includes('orange') ? '#ff9966' :
                                              selectedPillar.accentColor.includes('purple') ? '#9b4ec7' :
                                              selectedPillar.accentColor.includes('blue') ? '#3d28e6' :
                                              selectedPillar.accentColor.includes('green') ? '#0aa11d' : '#9b4ec7',
                              boxShadow: `0 0 10px ${selectedPillar.accentColor.includes('orange') ? '#e07742' :
                                              selectedPillar.accentColor.includes('purple') ? '#702594' :
                                              selectedPillar.accentColor.includes('blue') ? '#1406b3' :
                                              '#057210'}`
                            }}
                          ></div>
                          <span className="text-gray-100 text-xs leading-relaxed font-semibold">{benefit}</span>
                    </li>
                      ))}
                  </ul>
                </div>
                )}

                <div className="pt-3 border-t mt-auto relative z-10"
                  style={{
                    borderColor: selectedPillar.accentColor.includes('orange') ? '#e0774250' :
                                selectedPillar.accentColor.includes('purple') ? '#70259450' :
                                selectedPillar.accentColor.includes('blue') ? '#1406b350' :
                                '#05721050'
                  }}
                >
                  <a
                    href={`/pillar/${selectedPillar.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-black uppercase tracking-widest hover:underline transition-all"
                    style={{
                      color: selectedPillar.accentColor.includes('orange') ? '#ff9966' :
                            selectedPillar.accentColor.includes('purple') ? '#9b4ec7' :
                            selectedPillar.accentColor.includes('blue') ? '#3d28e6' :
                            '#0aa11d',
                      textShadow: `0 0 15px ${selectedPillar.accentColor.includes('orange') ? '#e07742' :
                                             selectedPillar.accentColor.includes('purple') ? '#702594' :
                                             selectedPillar.accentColor.includes('blue') ? '#1406b3' :
                                             '#057210'}50`
                    }}
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .pillar-card {
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .pillar-card:hover {
          transform: translateX(4px);
        }

        .connection-wire {
          animation: wireFlow 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
        }

        @keyframes wireFlow {
          0% {
            stroke-dashoffset: 1000;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0;
          }
        }

        .connection-dot {
          filter: drop-shadow(0 0 10px currentColor);
        }

        .detail-panel {
          will-change: transform, opacity;
          position: sticky;
          top: 6rem;
        }

        @media (min-width: 1024px) {
          .detail-panel-container {
            height: 100%;
            display: flex;
            align-items: stretch;
          }
          
          .detail-panel {
            min-height: 100%;
            height: auto;
            flex: 1;
            display: flex;
            flex-direction: column;
          }

          .detail-panel::-webkit-scrollbar {
            width: 6px;
          }

          .detail-panel::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.3);
            border-radius: 10px;
          }

          .detail-panel::-webkit-scrollbar-thumb {
            background: rgba(112, 37, 148, 0.6);
            border-radius: 10px;
          }

          .detail-panel::-webkit-scrollbar-thumb:hover {
            background: rgba(112, 37, 148, 0.9);
          }
        }

        @media (max-width: 1023px) {
          .detail-panel {
            max-height: 90vh;
            overflow-y: auto;
          }
        }

        .slide-out {
          animation: slideOut 0.3s cubic-bezier(0.4, 0, 1, 1) forwards;
        }

        .slide-in {
          animation: slideIn 0.4s cubic-bezier(0, 0, 0.2, 1) forwards;
        }

        @keyframes slideOut {
          0% {
            transform: translateX(0) scale(1) rotateY(0deg);
            opacity: 1;
          }
          100% {
            transform: translateX(-30px) scale(0.95) rotateY(-5deg);
            opacity: 0;
          }
        }

        @keyframes slideIn {
          0% {
            transform: translateX(30px) scale(0.95) rotateY(5deg);
            opacity: 0;
          }
          100% {
            transform: translateX(0) scale(1) rotateY(0deg);
            opacity: 1;
          }
        }

        .cursor-purple {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="%23702594" d="M5 3l14 9-6.5 1.5L10 20z"/></svg>') 0 0, auto;
        }

        .cursor-purple a,
        .cursor-purple button {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="%23702594" d="M8 6.5v11l6-5.5z"/></svg>') 12 12, pointer;
        }
      `}</style>
    </section>
  );
}

const PillarCard = forwardRef<HTMLDivElement, {
  pillar: typeof pillars[0];
  isActive: boolean;
  onClick: () => void;
}>(({ pillar, isActive, onClick }, ref) => {
  const getBrandColor = () => {
    if (pillar.accentColor.includes('orange')) return '#e07742';
    if (pillar.accentColor.includes('purple')) return '#702594';
    if (pillar.accentColor.includes('blue')) return '#1406b3';
    if (pillar.accentColor.includes('green')) return '#057210';
    return '#702594';
  };

  const brandColor = getBrandColor();

  const getDarkerShade = (color: string) => {
    if (color === '#e07742') return '#c25a2a';
    if (color === '#702594') return '#551c73';
    if (color === '#1406b3') return '#0d0480';
    if (color === '#057210') return '#03540c';
    return '#551c73';
  };

  const getLighterShade = (color: string) => {
    if (color === '#e07742') return '#ff9966';
    if (color === '#702594') return '#9b4ec7';
    if (color === '#1406b3') return '#3d28e6';
    if (color === '#057210') return '#0aa11d';
    return '#9b4ec7';
  };

  const darkerShade = getDarkerShade(brandColor);
  const lighterShade = getLighterShade(brandColor);

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={`pillar-card p-4 sm:p-5 rounded-2xl border-2 transition-all duration-500 cursor-pointer hover:shadow-lg group relative overflow-hidden ${
        isActive
          ? 'shadow-2xl scale-[1.02]'
          : 'shadow-md'
      }`}
      style={{
        background: isActive
          ? `radial-gradient(circle at top right, ${lighterShade}60 0%, ${brandColor}50 25%, ${darkerShade}30 60%, rgba(20, 20, 20, 0.95) 100%)`
          : 'linear-gradient(135deg, rgba(30, 30, 30, 0.9) 0%, rgba(20, 20, 20, 0.95) 100%)',
        borderColor: isActive ? brandColor : 'rgba(255, 255, 255, 0.1)',
        boxShadow: isActive ? `0 0 40px ${brandColor}60, 0 0 80px ${brandColor}30, inset 0 0 60px ${brandColor}15` : undefined
      }}
    >
      {/* Animated background accent */}
      {isActive && (
        <div
          className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-40 animate-pulse"
          style={{
            background: `radial-gradient(circle, ${lighterShade} 0%, transparent 70%)`
          }}
        />
      )}

      <div className="flex justify-between items-start mb-3 relative z-10">
        <span className={`text-sm font-black uppercase transition-colors duration-500 tracking-wider`}
          style={{
            color: isActive ? lighterShade : '#6b7280',
            textShadow: isActive ? `0 0 10px ${brandColor}80` : 'none'
          }}
        >
          {pillar.number}
        </span>
        <ArrowRight
          className={`w-5 h-5 transition-all duration-500 ${
            isActive
              ? 'translate-x-0 opacity-100'
              : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
          }`}
          style={{ color: isActive ? brandColor : '#9ca3af' }}
        />
      </div>

      <h3 className={`text-base sm:text-lg font-black mb-1.5 transition-colors duration-300 tracking-tight`}
        style={{
          color: isActive ? '#ffffff' : '#e5e7eb',
          textShadow: isActive ? `0 0 20px ${brandColor}80` : 'none'
        }}
      >
        {pillar.title}
      </h3>
      <p className={`text-xs sm:text-sm leading-relaxed ${isActive ? 'text-gray-200' : 'text-gray-400'}`}>
        {pillar.description}
      </p>

      <div
        className={`absolute bottom-0 left-0 w-full h-1.5 transition-all duration-500 origin-left ${
          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'
        }`}
        style={{
          background: `linear-gradient(90deg, ${lighterShade} 0%, ${brandColor} 50%, ${darkerShade} 100%)`,
          boxShadow: isActive ? `0 0 20px ${brandColor}, 0 -5px 20px ${brandColor}40` : undefined
        }}
      ></div>
    </div>
  );
});

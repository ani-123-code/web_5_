import { Target, Lightbulb, Users, TrendingUp } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-24 sm:py-32 px-6 bg-gradient-to-br from-white via-purple-50/20 to-orange-50/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-brand-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-brand-purple/10 rounded-full blur-3xl"></div>

      <div ref={ref} className="max-w-7xl mx-auto relative z-10 reveal-on-scroll">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-brand-orange via-brand-purple to-brand-green bg-clip-text text-transparent mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            About Flownetics
          </h2>
          <p className="text-xl md:text-2xl font-bold text-gray-800 max-w-4xl mx-auto mb-8 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Revolutionizing Pharmaceutical and Cosmetic Chemistry Through Innovation
          </p>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Flownetics Engineering was founded in April 2023 after an innovative pre-launch phase. The company, based in Bengaluru, India, is on a mission to revolutionize pharmaceutical and cosmetic chemistry by providing scalable, efficient and sustainable end-to-end flow manufacturing solutions.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              By combining expertise in mechanical engineering, process chemistry, 3D printing, control engineering and artificial intelligence, Flownetics unlocks a unique multidisciplinary approach for its customers that optimizes every aspect of their production. This synergy increases process efficiency, reduces waste and ensures high-quality production that overcomes the limitations of traditional batch production.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              This is especially true for the business model: Flownetics offers Factory-as-a-Service (FaaS) with subscription models that lowers the financial barriers and enable companies of all sizes to revolutionize the future of chemical manufacturing without large upfront investments. By promoting local production, the inherent benefits of the process and improving supply chain resilience, Flownetics lowers costs for companies and promotes environmental sustainability.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="group bg-white/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-purple-200 hover:border-brand-purple hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-purple to-purple-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Our Mission</h3>
            <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Democratize continuous flow chemistry through innovative technology and accessible service models.
            </p>
          </div>

          <div className="group bg-white/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-green-200 hover:border-brand-green hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-green to-green-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Innovation</h3>
            <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              AI-powered process design and optimization delivering 30% cost reduction and 10x faster development.
            </p>
          </div>

          <div className="group bg-white/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-orange-200 hover:border-brand-orange hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-orange to-orange-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Partnership</h3>
            <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Collaborative approach ensuring your success through dedicated support and expertise.
            </p>
          </div>

          <div className="group bg-white/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-blue-200 hover:border-brand-blue hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-blue-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Growth</h3>
            <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Scalable solutions from lab to production, growing with your business needs seamlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

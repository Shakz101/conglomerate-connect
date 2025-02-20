
import { useState, useEffect } from "react";
import { Building2, Globe, Rocket, Target } from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-primary font-semibold text-xl">Devircle</div>
            <div className="hidden md:flex space-x-8">
              {["Vision", "Strategy", "Opportunities", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-primary hover:text-primary-light transition-colors relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary-light after:left-0 after:bottom-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6" id="vision">
        <div className="container mx-auto">
          <div className={`space-y-6 transition-all duration-700 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-gradient text-balance leading-tight">
              Building Tomorrow's
              <br />
              Innovation Empire
            </h1>
            <p className="text-xl text-primary-light max-w-2xl">
              Devircle is an ambitious conglomerate positioned to revolutionize multiple industries through strategic acquisitions, partnerships, and innovative ventures.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Strategy Section */}
      <section className="py-20 bg-secondary/50 backdrop-blur-sm" id="strategy">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Rocket, label: "Innovation Focus", value: "Future-Ready" },
              { icon: Globe, label: "Market Reach", value: "Global Scale" },
              { icon: Target, label: "Strategic Vision", value: "2025 Launch" },
              { icon: Building2, label: "Target Ventures", value: "10+" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`glass hover-glow p-6 rounded-lg text-center transition-all duration-700 ease-out transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-primary-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Opportunities */}
      <section className="py-20 px-6" id="opportunities">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gradient mb-12 text-center">Strategic Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                sector: "AI & Machine Learning",
                description: "Developing cutting-edge AI solutions for enterprise applications."
              },
              {
                sector: "FinTech Innovation",
                description: "Revolutionizing financial services through technology integration."
              },
              {
                sector: "Clean Technology",
                description: "Sustainable solutions for a greener, more efficient future."
              },
              {
                sector: "Digital Health",
                description: "Next-generation healthcare delivery and patient care systems."
              },
              {
                sector: "Smart Infrastructure",
                description: "Intelligent solutions for cities and communities of tomorrow."
              },
              {
                sector: "Enterprise SaaS",
                description: "Cloud-native solutions for business transformation."
              }
            ].map(
              (sector, index) => (
                <div
                  key={sector.sector}
                  className={`glass hover-glow p-8 rounded-lg transition-all duration-700 ease-out transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-xl font-semibold text-gradient mb-4">{sector.sector}</h3>
                  <p className="text-primary-light">
                    {sector.description}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-secondary/50 backdrop-blur-sm" id="contact">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-gradient mb-6 text-center">Partner With Us</h2>
          <p className="text-center text-primary-light mb-12 max-w-2xl mx-auto">
            Whether you're an innovator, investor, or potential partner, we're interested in connecting with forward-thinking individuals and organizations.
          </p>
          <div className="glass hover-glow p-8 rounded-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 rounded-lg bg-white/50 border border-white/30 focus:outline-none focus:border-primary/30 transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-lg bg-white/50 border border-white/30 focus:outline-none focus:border-primary/30 transition-all duration-300"
                />
              </div>
              <select className="w-full p-3 rounded-lg bg-white/50 border border-white/30 focus:outline-none focus:border-primary/30 transition-all duration-300">
                <option value="">Select Interest Area</option>
                <option value="investment">Investment Opportunities</option>
                <option value="partnership">Strategic Partnership</option>
                <option value="innovation">Innovation Collaboration</option>
                <option value="careers">Career Opportunities</option>
              </select>
              <textarea
                placeholder="Tell us about your vision and how we can collaborate"
                rows={4}
                className="w-full p-3 rounded-lg bg-white/50 border border-white/30 focus:outline-none focus:border-primary/30 transition-all duration-300"
              />
              <button className="w-full md:w-auto px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-all duration-300 pulse">
                Start the Conversation
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

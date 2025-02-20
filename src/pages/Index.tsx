
import { useState, useEffect } from "react";
import { Building2, Globe, Network, Users } from "lucide-react";

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
            <div className="text-primary font-semibold text-xl">Conglomerate</div>
            <div className="hidden md:flex space-x-8">
              {["About", "Portfolio", "Subsidiaries", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-primary hover:text-primary-light transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className={`space-y-6 transition-all duration-700 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-primary text-balance leading-tight">
              Shaping Tomorrow's
              <br />
              Global Enterprise
            </h1>
            <p className="text-xl text-primary-light max-w-2xl">
              A diversified portfolio of industry-leading companies working together to drive innovation and sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Building2, label: "Companies", value: "50+" },
              { icon: Globe, label: "Countries", value: "30+" },
              { icon: Users, label: "Employees", value: "100k+" },
              { icon: Network, label: "Partners", value: "200+" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`glass p-6 rounded-lg text-center transition-all duration-700 ease-out transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-primary-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Our Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Technology", "Healthcare", "Energy", "Finance", "Real Estate", "Manufacturing"].map(
              (sector, index) => (
                <div
                  key={sector}
                  className={`glass p-8 rounded-lg transition-all duration-700 ease-out transform hover:translate-y-[-4px] ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-xl font-semibold text-primary mb-4">{sector}</h3>
                  <p className="text-primary-light">
                    Leading the industry with innovative solutions and sustainable practices.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Get in Touch</h2>
          <div className="glass p-8 rounded-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 rounded-lg bg-white/50 border border-white/30 focus:outline-none focus:border-primary/30"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-lg bg-white/50 border border-white/30 focus:outline-none focus:border-primary/30"
                />
              </div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full p-3 rounded-lg bg-white/50 border border-white/30 focus:outline-none focus:border-primary/30"
              />
              <button className="w-full md:w-auto px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

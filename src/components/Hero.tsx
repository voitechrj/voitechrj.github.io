import { motion } from "motion/react";
import { ArrowRight, Star, ExternalLink } from "lucide-react";

export default function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    { 
      title: "Instalação de SSD", 
      desc: "Até 10x mais velocidade",
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=800&auto=format&fit=crop"
    },
    { 
      title: "Limpeza Completa", 
      desc: "Remoção de poeira e sujeira",
      image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?q=80&w=800&auto=format&fit=crop"
    },
    { 
      title: "Troca de Pasta Térmica", 
      desc: "Evite superaquecimento",
      image: "https://images.unsplash.com/photo-1555617778-02518510b9fa?q=80&w=800&auto=format&fit=crop"
    },
    { 
      title: "Formatação", 
      desc: "Sistema limpo e otimizado",
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section 
      id="hero" 
      className="relative pt-8 md:pt-12 pb-32 overflow-hidden bg-[var(--color-background)]"
    >
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black z-0"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-primary)]/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--color-primary)]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-[90%] md:w-[80%] mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 select-none">
          
          {/* Text Content */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-display">
              Sua Solução Rápida e Confiável.
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              Especialistas em upgrade de performance, limpeza e manutenção. Agende a entrega do seu equipamento e deixe o resto conosco.
            </p>
            <div className="flex flex-col items-center lg:items-start gap-3 w-full sm:w-max select-none">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToBooking}
                className="w-full h-[60px] bg-[var(--color-primary)] text-white text-lg font-bold px-8 rounded-full shadow-lg hover:bg-[var(--color-primary-hover)] transition-colors flex items-center justify-center gap-2 focus:outline-none"
              >
                Agendar pelo WhatsApp
                <ArrowRight size={20} />
              </motion.button>

              <div className="flex flex-row gap-3 w-full">
                <motion.a 
                  href="https://www.google.com.br/search?q=Voitechrj&ludocid=11424479023818913990&lsig=AB86z5UapBfcaAyfAOMLey7SV1XN#lkt=LocalPoiReviews&lpg=cid:CgIgAQ%3D%3D&lrd=0x97013146222ed5:0x9e8be72486a0b8c6,1,,,"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-[60px] flex items-center justify-center gap-1.5 bg-[#1e1e1e] border border-white/20 text-white font-medium px-2 rounded-full shadow-sm hover:bg-[#2a2a2a] hover:border-[var(--color-primary)] transition-all text-sm focus:outline-none"
                  whileHover={{ scale: 1.02 }}
                >
                  <ExternalLink size={16} className="flex-shrink-0" />
                  <span className="truncate">Ver Avaliações</span>
                </motion.a>

                <motion.a 
                  href="https://g.page/r/Cca4oIYk54ueEBE/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-[60px] flex items-center justify-center gap-1.5 bg-[#1e1e1e] border border-white/20 text-white font-medium px-2 rounded-full shadow-sm hover:bg-[#2a2a2a] hover:border-[var(--color-primary)] transition-all text-sm focus:outline-none"
                  whileHover={{ scale: 1.02 }}
                >
                  <Star size={16} fill="currentColor" className="text-white-400 flex-shrink-0" />
                  <span className="truncate">Avaliar</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Service Cards Content */}
          <motion.div 
            className="lg:w-1/2 w-full relative mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-lg group cursor-default border border-white/10"
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute inset-0">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 p-3 sm:p-4 w-full">
                    <h3 className="text-white font-bold text-sm sm:text-lg leading-tight mb-1">{service.title}</h3>
                    <p className="text-gray-300 text-xs hidden sm:block">{service.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

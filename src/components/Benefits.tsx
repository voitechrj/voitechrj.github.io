import { motion } from "motion/react";
import { Check } from "lucide-react";

export default function Benefits() {
  const benefits = [
    "Acabe com as dores de cabeça da informática. Deixe a voitechrj cuidar de tudo.",
    "Tenha mais tempo para se concentrar no seu negócio, sem se preocupar com problemas técnicos.",
    "Conte com um parceiro de confiança para manter seus sistemas funcionando sem problemas."
  ];

  return (
    <section className="py-20 bg-[var(--color-primary)] text-white overflow-hidden relative">
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20 z-0"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-[90%] md:w-[80%] mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-8 font-display leading-tight"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Mais do que Manutenção, Oferecemos Tranquilidade
            </motion.h2>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="bg-black/20 p-2 rounded-full mt-1 flex-shrink-0">
                    <Check size={20} className="text-white" />
                  </div>
                  <p className="text-lg md:text-xl font-light opacity-90">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
             <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative"
             >
                <div className="absolute inset-0 bg-black/30 blur-3xl rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" 
                  alt="Tranquilidade no trabalho" 
                  className="relative rounded-2xl shadow-2xl border-4 border-white/10 w-full max-w-md mx-auto grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
             </motion.div>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
    </section>
  );
}

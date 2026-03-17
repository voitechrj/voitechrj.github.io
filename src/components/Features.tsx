import { motion } from "motion/react";
import { Shield, Gauge, Coins, Headset, CheckCircle, Cpu } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Transparência",
    description: "Preços claros, sem surpresas. Orçamentos detalhados e comunicação aberta."
  },
  {
    icon: Gauge,
    title: "Rapidez e Eficiência",
    description: "Atendimento rápido e soluções eficazes para minimizar o tempo de inatividade."
  },
  {
    icon: Coins,
    title: "Custo-Benefício",
    description: "Serviços de alta qualidade com preços acessíveis para o seu orçamento."
  },
  {
    icon: Headset,
    title: "Suporte Dedicado",
    description: "Assistência profissional para resolver suas dúvidas e problemas de informática."
  },
  {
    icon: CheckCircle,
    title: "Garantia de Satisfação",
    description: "Garantimos a qualidade dos nossos serviços. Sua satisfação é nossa prioridade."
  },
  {
    icon: Cpu,
    title: "Peças de Qualidade",
    description: "Trabalhamos apenas com componentes originais e de marcas reconhecidas no mercado."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-[#0a0a0a]">
      <div className="w-[90%] md:w-[80%] mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 select-none">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
            Nossos Diferenciais
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Descubra por que somos a escolha certa para cuidar dos seus equipamentos.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`bg-[#171717] p-4 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-white/5 hover:border-[var(--color-primary)] h-48 sm:h-56 md:h-auto flex-col ${index >= 4 ? 'hidden md:flex' : 'flex'}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="w-10 h-10 md:w-14 md:h-14 bg-[var(--color-primary)]/20 rounded-xl flex items-center justify-center mb-3 md:mb-6 text-[var(--color-primary)] shrink-0">
                <feature.icon className="w-5 h-5 md:w-8 md:h-8" />
              </div>
              <h3 className="text-sm md:text-xl font-bold text-white mb-1.5 md:mb-3 font-display line-clamp-2 shrink-0">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-xs md:text-base leading-snug md:leading-relaxed overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { Shield, Gauge, Coins, Headset, CheckCircle } from "lucide-react";

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
    title: "Suporte Técnico Dedicado",
    description: "Assistência profissional para resolver suas dúvidas e problemas de informática."
  },
  {
    icon: CheckCircle,
    title: "Garantia de Satisfação",
    description: "Garantimos a qualidade dos nossos serviços. Sua satisfação é nossa prioridade."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-[#0a0a0a]">
      <div className="w-[90%] md:w-[80%] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
            Nossos Diferenciais
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Descubra por que somos a escolha certa para cuidar dos seus equipamentos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#171717] p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-white/5 hover:border-[var(--color-primary)]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="w-14 h-14 bg-[var(--color-primary)]/20 rounded-xl flex items-center justify-center mb-6 text-[var(--color-primary)]">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-display">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

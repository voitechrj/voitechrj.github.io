import { useState } from "react";
import { motion } from "motion/react";
import { Star, ChevronRight } from "lucide-react";

const testimonials = [
  {
    author_name: "Maria Silva",
    text: "A voitechrj resolveu meu problema em minutos! Serviço excelente e preço justo.",
    rating: 5,
    relative_time_description: "1 mês atrás"
  },
  {
    author_name: "João Pereira",
    text: "Profissionalismo nota 10. O técnico explicou tudo com clareza e não tentou empurrar serviços desnecessários.",
    rating: 5,
    relative_time_description: "2 meses atrás"
  },
  {
    author_name: "Ana Costa",
    text: "Melhor custo-benefício que encontrei no Rio. Recomendo de olhos fechados!",
    rating: 5,
    relative_time_description: "3 semanas atrás"
  },
  {
    author_name: "Carlos Santos",
    text: "Rápido e eficiente. Meu computador estava travando muito e agora parece novo.",
    rating: 5,
    relative_time_description: "1 semana atrás"
  },
  {
    author_name: "Lucas Fernandes",
    text: "Atendimento impecável! Meu notebook estava superaquecendo e desligando sozinho. Fizeram a limpeza e troca da pasta térmica, agora está perfeito.",
    rating: 5,
    relative_time_description: "2 dias atrás"
  },
  {
    author_name: "Fernanda Lima",
    text: "Colocaram um SSD no meu computador antigo e parece que comprei um novo. Muito atenciosos e entregaram no prazo combinado.",
    rating: 5,
    relative_time_description: "1 mês atrás"
  },
  {
    author_name: "Roberto Alves",
    text: "Preço justo e muita transparência. Explicaram exatamente o que precisava ser feito sem inventar problemas. Ganharam um cliente fiel.",
    rating: 5,
    relative_time_description: "2 semanas atrás"
  },
  {
    author_name: "Juliana Mendes",
    text: "Excelente profissional! Salvou meus arquivos de um HD corrompido e formatou a máquina deixando tudo super rápido. Recomendo muito.",
    rating: 5,
    relative_time_description: "4 meses atrás"
  }
];

function TestimonialCard({ review, index }: { review: any, index: number, key?: any }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 65;
  const needsExpansion = review.text.length > maxLength;
  
  const displayText = !isExpanded && needsExpansion 
    ? review.text.slice(0, maxLength).trim() + "..." 
    : review.text;

  return (
    <motion.div
      className={`h-48 sm:h-56 bg-[#1e1e1e] p-4 md:p-6 rounded-2xl shadow-sm border border-white/5 hover:border-[var(--color-primary)] transition-colors flex-col ${index >= 4 ? 'hidden md:flex' : 'flex'}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
    >
      <div className="flex flex-col xl:flex-row items-start xl:items-center gap-2 xl:gap-3 mb-3 md:mb-4 shrink-0">
        <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm shrink-0">
          {review.author_name.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-white text-xs md:text-sm line-clamp-1">{review.author_name}</p>
          <div className="flex text-white-400 mt-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} fill={i < review.rating ? "currentColor" : "none"} className="w-2.5 h-2.5 md:w-3 md:h-3" />
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex-grow flex flex-col items-start overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <p className="text-gray-300 italic text-xs md:text-sm">"{displayText}"</p>
        {needsExpansion && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[var(--color-primary)] text-[10px] md:text-xs font-medium mt-1 hover:underline focus:outline-none shrink-0"
          >
            {isExpanded ? "Ver menos" : "Veja mais"}
          </button>
        )}
      </div>
      
      <p className="text-[10px] md:text-xs text-gray-500 mt-2 md:mt-4 shrink-0">{review.relative_time_description}</p>
    </motion.div>
  );
}

export default function SocialProof() {
  return (
    <section id="social-proof" className="py-20 bg-[#171717] relative overflow-hidden">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-black z-0"></div>
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[var(--color-primary)]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--color-primary)]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-[90%] md:w-[80%] mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-12 select-none">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
            Por que a voitechrj?
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto">
            Veja o que dizem as pessoas que já utilizaram nossos serviços.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {testimonials.map((review, index) => (
            <TestimonialCard key={index} review={review} index={index} />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center text-center select-none space-y-3">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 shadow-xl bg-black flex items-center justify-center mb-1">
            <img 
              src="/voitechrj-logo.png" 
              alt="voitechrj Logo" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <h3 className="text-white text-4xl font-bold font-display tracking-tight">voitechrj</h3>
          
          <div className="flex items-center justify-center gap-2 text-xl">
            <span className="text-gray-300 font-medium">5,0</span>
            <div className="flex text-white-400 gap-0.5">
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
            </div>
          </div>

          <a 
            href="https://www.google.com.br/search?q=Voitechrj&ludocid=11424479023818913990&lsig=AB86z5UapBfcaAyfAOMLey7SV1XN#lkt=LocalPoiReviews&lpg=cid:CgIgAQ%3D%3D&lrd=0x97013146222ed5:0x9e8be72486a0b8c6,1,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8ab4f8] hover:underline text-xl font-medium focus:outline-none"
          >
            139 avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
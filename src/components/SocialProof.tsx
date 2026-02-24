import { motion } from "motion/react";
import { Star, ExternalLink } from "lucide-react";

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
  }
];

export default function SocialProof() {
  return (
    <section id="social-proof" className="py-20 bg-[#171717]">
      <div className="w-[90%] md:w-[80%] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
            Por que Nossos Clientes Confiam na voitechrj?
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a 
              href="https://www.google.com.br/search?q=Voitechrj&ludocid=11424479023818913990&lsig=AB86z5UapBfcaAyfAOMLey7SV1XN#lkt=LocalPoiReviews&lpg=cid:CgIgAQ%3D%3D&lrd=0x97013146222ed5:0x9e8be72486a0b8c6,1,,,,"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#1e1e1e] border border-white/20 text-white font-bold px-6 py-3 rounded-full shadow-md hover:bg-[#2a2a2a] hover:border-[var(--color-primary)] transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <ExternalLink size={18} />
              Ver Avaliações no Google
            </motion.a>

            <motion.a 
              href="https://g.page/r/Cca4oIYk54ueEBE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] text-white font-bold px-6 py-3 rounded-full shadow-md hover:bg-[var(--color-primary-hover)] transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <Star size={18} fill="currentColor" />
              Avalie-nos no Google
            </motion.a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((review, index) => (
            <motion.div
              key={index}
              className="bg-[#1e1e1e] p-6 rounded-2xl shadow-sm border border-white/5 hover:border-[var(--color-primary)] transition-colors flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {review.author_name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white text-sm line-clamp-1">{review.author_name}</p>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} fill={i < review.rating ? "currentColor" : "none"} size={12} />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 italic mb-4 text-sm flex-grow">"{review.text}"</p>
              
              <p className="text-xs text-gray-500 mt-auto">{review.relative_time_description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

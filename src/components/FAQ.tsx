import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqs } from "../data/faqData";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#121212] relative overflow-hidden">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-black z-0"></div>
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-[var(--color-primary)]/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-[var(--color-primary)]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-[90%] md:w-[80%] mx-auto px-4 max-w-3xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
            Dúvidas Frequentes
          </h2>
          <p className="text-gray-400">
            Tire suas dúvidas sobre nossos serviços.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-white/10 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 bg-[#1e1e1e] hover:bg-[#252525] transition-colors text-left"
              >
                <span className="font-semibold text-gray-200 text-lg">{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="text-[var(--color-primary)]" />
                ) : (
                  <ChevronDown className="text-gray-500" />
                )}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-5 bg-[#1e1e1e] border-t border-white/5 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

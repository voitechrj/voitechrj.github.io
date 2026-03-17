import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, X, ChevronDown, ChevronUp, Minimize2 } from "lucide-react";
import { faqs } from "../data/faqData";

export default function FAQWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* FAQ Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-80 md:w-96 bg-[#1e1e1e] rounded-2xl shadow-2xl overflow-hidden border border-white/10 flex flex-col max-h-[500px]"
          >
            {/* Header */}
            <div className="bg-[var(--color-primary)] p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <HelpCircle size={24} />
                <div>
                  <h3 className="font-bold font-display">Dúvidas Frequentes</h3>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded transition-colors">
                <Minimize2 size={18} />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-[#121212] space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-white/10 rounded-lg overflow-hidden bg-[#1e1e1e]">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center p-3 text-left hover:bg-[#252525] transition-colors"
                  >
                    <span className="font-medium text-gray-200 text-sm">{faq.question}</span>
                    {activeIndex === index ? (
                      <ChevronUp size={16} className="text-[var(--color-primary)] flex-shrink-0 ml-2" />
                    ) : (
                      <ChevronDown size={16} className="text-gray-500 flex-shrink-0 ml-2" />
                    )}
                  </button>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-3 border-t border-white/5 text-gray-400 text-sm leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors ${
          isOpen ? "bg-gray-700 text-white" : "bg-[var(--color-primary)] text-white"
        }`}
      >
        {isOpen ? <X size={24} /> : <HelpCircle size={28} />}
      </motion.button>
    </div>
  );
}

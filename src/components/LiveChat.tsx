import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, ChevronRight, Minimize2, Bot } from "lucide-react";

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [showProactive, setShowProactive] = useState(false);
  
  // Proactive invitation
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowProactive(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    setShowProactive(false);
  };

  const openWhatsApp = (text: string) => {
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/5521994472406?text=${encoded}`, '_blank');
  };

  const options = [
    { label: "Quero agendar uma entrega", message: "Olá, gostaria de agendar a entrega de um equipamento." },
    { label: "Solicitar orçamento", message: "Olá, gostaria de solicitar um orçamento." },
    { label: "Onde fica o endereço?", message: "Olá, gostaria de saber o endereço para entrega." },
    { label: "Falar com atendente", message: "Olá, gostaria de falar com um atendente." }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Proactive Bubble */}
      <AnimatePresence>
        {showProactive && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="mb-4 bg-[#1e1e1e] p-4 rounded-2xl shadow-xl border border-white/10 max-w-xs relative"
          >
            <p className="text-white text-sm font-medium">
              👋 Precisa de ajuda? Fale conosco no WhatsApp!
            </p>
            <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-4 h-4 bg-[#1e1e1e] border-r border-b border-white/10"></div>
            <button 
              onClick={() => setShowProactive(false)}
              className="absolute -top-2 -right-2 bg-gray-700 rounded-full p-1 text-gray-300 hover:bg-gray-600"
            >
              <X size={12} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-80 md:w-96 bg-[#1e1e1e] rounded-2xl shadow-2xl overflow-hidden border border-white/10 flex flex-col"
          >
            {/* Header */}
            <div className="bg-[var(--color-primary)] p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot size={24} />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-[var(--color-primary)]"></div>
                </div>
                <div>
                  <h3 className="font-bold font-display">Suporte voitechrj</h3>
                  <p className="text-xs opacity-80">Online no WhatsApp</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded transition-colors">
                <Minimize2 size={18} />
              </button>
            </div>

            {/* Content Area */}
            <div className="p-6 bg-[#121212] space-y-4">
              <p className="text-gray-300 text-sm mb-4">
                Olá! Como podemos ajudar você hoje? Selecione uma opção para iniciar a conversa no WhatsApp:
              </p>
              
              <div className="space-y-2">
                {options.map((opt, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => openWhatsApp(opt.message)}
                    className="w-full text-left p-3 rounded-xl bg-[#1e1e1e] border border-white/5 hover:border-[var(--color-primary)] hover:bg-[#252525] transition-all flex items-center justify-between group"
                  >
                    <span className="text-gray-200 text-sm font-medium">{opt.label}</span>
                    <ChevronRight size={16} className="text-gray-500 group-hover:text-[var(--color-primary)]" />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-3 bg-[#1e1e1e] border-t border-white/5 text-center">
              <p className="text-xs text-gray-500">Atendimento via WhatsApp (21) 99447-2406</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        onClick={isOpen ? () => setIsOpen(false) : handleOpen}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors ${
          isOpen ? "bg-gray-700 text-white" : "bg-[var(--color-primary)] text-white"
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
      </motion.button>
    </div>
  );
}

import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md shadow-sm border-b border-white/5">
      <div className="w-[90%] md:w-[80%] mx-auto px-4 py-3 flex justify-between items-center">
        <div 
          className="flex items-center gap-3 cursor-pointer select-none"
          onClick={() => scrollToSection("hero")}
        >
          <Logo />
          <span className="text-2xl font-bold text-white font-display tracking-tight">
            voitechrj
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 select-none">
          <button onClick={() => scrollToSection("features")} className="text-gray-300 hover:text-[var(--color-primary)] transition-colors font-medium focus:outline-none">
            Diferenciais
          </button>
          <button onClick={() => scrollToSection("booking")} className="text-gray-300 hover:text-[var(--color-primary)] transition-colors font-medium focus:outline-none">
            Agendar
          </button>
          <button onClick={() => scrollToSection("social-proof")} className="text-gray-300 hover:text-[var(--color-primary)] transition-colors font-medium focus:outline-none">
            Depoimentos
          </button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("faq")}
            className="bg-[var(--color-primary)] text-white text-sm px-4 py-1.5 rounded-full font-semibold shadow-lg hover:bg-[var(--color-primary-hover)] transition-colors focus:outline-none"
          >
            Dúvidas Frequentes
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden select-none">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-[#171717] border-t border-white/10 absolute w-full shadow-2xl select-none"
        >
          <div className="flex flex-col p-4 space-y-4">
            <button onClick={() => scrollToSection("features")} className="text-left text-gray-300 hover:text-[var(--color-primary)] focus:outline-none">
              Diferenciais
            </button>
            <button onClick={() => scrollToSection("booking")} className="text-left text-gray-300 hover:text-[var(--color-primary)] focus:outline-none">
              Agendar
            </button>
            <button onClick={() => scrollToSection("social-proof")} className="text-left text-gray-300 hover:text-[var(--color-primary)] focus:outline-none">
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="bg-[var(--color-primary)] text-white text-sm px-4 py-1.5 rounded-full font-semibold text-center mt-2 focus:outline-none"
            >
              Dúvidas Frequentes
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}

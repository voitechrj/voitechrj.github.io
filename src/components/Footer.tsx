import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-white/10">
      <div className="w-[90%] md:w-[80%] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 font-display">voitechrj</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Sua parceira confiável para soluções de TI. Manutenção rápida, honesta e eficiente para você e sua empresa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-[#1e1e1e] p-2 rounded-full hover:bg-[var(--color-primary)] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-[#1e1e1e] p-2 rounded-full hover:bg-[var(--color-primary)] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-[#1e1e1e] p-2 rounded-full hover:bg-[var(--color-primary)] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 font-display">Entre em Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="text-[var(--color-primary)] mt-1" size={18} />
                <span>(21) 99447-2406</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Mail className="text-[var(--color-primary)] mt-1" size={18} />
                <span>contato@voitechrj.com.br</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-[var(--color-primary)] mt-1" size={18} />
                <span>Rio de Janeiro, RJ</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 font-display">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#hero" className="text-gray-400 hover:text-white transition-colors">Início</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Diferenciais</a></li>
              <li><a href="#social-proof" className="text-gray-400 hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} voitechrj. Todos os direitos reservados.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Serviço</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

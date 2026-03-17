import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

type FooterProps = {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
};

export default function Footer({ onOpenPrivacy, onOpenTerms }: FooterProps) {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-white/10">
      <div className="w-[90%] max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="border border-white/10 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 shadow-lg bg-black flex items-center justify-center">
                <img 
                  src="/voitechrj-logo.png" 
                  alt="voitechrj Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-bold text-white font-display">
                voitechrj
              </h3>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Sua parceira confiável para soluções de TI. Manutenção rápida,
              honesta e eficiente para você e sua empresa.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/voitechrj/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1e1e1e] p-2 rounded-full hover:bg-[var(--color-primary)] transition-colors"
              >
                <Facebook size={20} />
              </a>

              <a
                href="https://www.instagram.com/voitechrj"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1e1e1e] p-2 rounded-full hover:bg-[var(--color-primary)] transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="border border-white/10 rounded-lg p-4">
            <h4 className="text-lg font-bold text-white mb-6 font-display">
              Entre em Contato
            </h4>

            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="text-[var(--color-primary)]" size={18} />
                <a
                  href="tel:+5521994472406"
                  className="hover:text-white transition-colors"
                >
                  (21) 99447-2406
                </a>
              </li>

              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="text-[var(--color-primary)]" size={18} />
                <a
                  href="mailto:voitechrj@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  voitechrj@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-3 text-gray-400">
                <MapPin className="text-[var(--color-primary)]" size={18} />
                <a
                  href="https://www.google.com/maps/@-22.8809748,-43.0936861,3a,75y,25.92h,92.03t/data=!3m7!1e1!3m5!1sa82cTSo-_Ao5nfYSJI9y2w!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-2.0271671015952393%26panoid%3Da82cTSo-_Ao5nfYSJI9y2w%26yaw%3D25.91653893141337!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MDIyMy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Niterói, RJ
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="border border-white/10 rounded-lg p-4">
            <h4 className="text-lg font-bold text-white mb-6 font-display">
              Links Rápidos
            </h4>

            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#social-proof" className="text-gray-400 hover:text-white transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} voitechrj. Todos os direitos reservados.
          </p>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Política de Privacidade
            </button>

            <button
              type="button"
              onClick={onOpenTerms}
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Termos de Serviço
            </button>
          </div>

          <div className="mt-6 text-xs text-gray-600">
            created by{" "}
            <a 
              href="https://voitechrj.github.io/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              voitechrj
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { motion } from "motion/react";
import { MessageCircle, Send } from "lucide-react";
import { useState, type FormEvent, type ChangeEvent } from "react";

export default function BookingForm() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    summary: ""
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const { firstName, lastName, summary } = formState;
    const fullName = `${firstName} ${lastName}`.trim();
    
    // Construct WhatsApp message
    const message = `Olá, meu nome é ${fullName}. ${summary ? `Gostaria de agendar a entrega de um equipamento. Resumo: ${summary}` : 'Gostaria de agendar a entrega de um equipamento.'}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5521994472406?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="booking" className="py-20 bg-[#121212] relative overflow-hidden">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950 z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-primary)]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="w-[90%] md:w-[80%] mx-auto px-4 max-w-3xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
            Agendar
          </h2>
          <p className="text-gray-400">
            Agende a entrega do seu equipamento em nosso endereço para avaliação.
          </p>
        </div>

        <motion.div 
          className="bg-[#1e1e1e] rounded-2xl shadow-2xl overflow-hidden border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">Nome</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formState.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] border border-white/10 text-white focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all placeholder-gray-500"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">Sobrenome</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formState.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] border border-white/10 text-white focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all placeholder-gray-500"
                  placeholder="Seu sobrenome"
                />
              </div>
            </div>

            <div>
              <label htmlFor="summary" className="block text-sm font-medium text-gray-300 mb-2">Resumo do que precisa (Opcional)</label>
              <textarea
                id="summary"
                name="summary"
                rows={4}
                value={formState.summary}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] border border-white/10 text-white focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all resize-none placeholder-gray-500"
                placeholder="Ex: Meu notebook não liga, preciso formatar meu PC..."
              />
            </div>

            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[var(--color-primary)] text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-[var(--color-primary-hover)] transition-colors flex items-center justify-center gap-3"
              >
                <MessageCircle size={22} />
                Agendar via WhatsApp
              </motion.button>
              <p className="text-center text-gray-500 text-sm mt-4">
                Ao clicar, você será redirecionado para o WhatsApp (21 99447-2406)
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

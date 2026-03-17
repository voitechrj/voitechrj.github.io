import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Features from "./components/Features";
import Benefits from "./components/Benefits";
import FAQ from "./components/FAQ";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import FAQWidget from "./components/FAQWidget";
import BackToTop from "./components/BackToTop";

export default function App() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowPrivacy(false);
        setShowTerms(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-background)]">
      <Header />
      <main className="flex-grow">
        <Hero />
        <SocialProof />
        <Features />
        <Benefits />
        <BookingForm />
        <FAQ />
      </main>

      {showPrivacy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={() => setShowPrivacy(false)}
        >
          <div
            className="bg-[#0a0a0a] max-h-[80vh] w-full max-w-3xl rounded-xl border border-white/10 shadow-xl overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <h2 className="text-lg md:text-xl font-bold font-display">
                Política de Privacidade
              </h2>
              <button
                type="button"
                onClick={() => setShowPrivacy(false)}
                className="text-gray-400 hover:text-white transition-colors text-xl leading-none"
                aria-label="Fechar política de privacidade"
              >
                ×
              </button>
            </div>
            <div className="p-6 overflow-y-auto space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">
              <p>
                Na voitechrj levamos a sua privacidade a sério. As informações
                que você compartilha conosco são usadas exclusivamente para
                viabilizar o atendimento e melhorar nossos serviços.
              </p>
              <p className="font-semibold text-white">1. Dados que coletamos</p>
              <p>
                Podemos coletar dados como nome, telefone, e-mail, endereço e
                informações básicas sobre o equipamento ou serviço solicitado.
                Esses dados geralmente são informados por você em formulários,
                mensagens ou ligações.
              </p>
              <p className="font-semibold text-white">2. Como usamos seus dados</p>
              <p>
                Utilizamos seus dados para: entrar em contato sobre orçamentos e
                agendamentos, prestar suporte técnico, enviar informações
                relacionadas ao seu atendimento e, quando você autorizar,
                compartilhar novidades e promoções da voitechrj.
              </p>
              <p className="font-semibold text-white">
                3. Compartilhamento de informações
              </p>
              <p>
                Não vendemos seus dados. Podemos compartilhá-los apenas com
                parceiros estritamente necessários para a prestação do serviço
                (por exemplo, provedores de hospedagem, ferramentas de
                agendamento ou meios de pagamento), sempre seguindo boas
                práticas de segurança.
              </p>
              <p className="font-semibold text-white">
                4. Armazenamento e segurança
              </p>
              <p>
                Adotamos medidas técnicas e organizacionais razoáveis para
                proteger seus dados contra acessos não autorizados, perda ou
                uso indevido. Mantemos suas informações apenas pelo tempo
                necessário para cumprir as finalidades descritas nesta política
                ou obrigações legais.
              </p>
              <p className="font-semibold text-white">
                5. Seus direitos sobre os dados
              </p>
              <p>
                Você pode solicitar a atualização, correção ou exclusão dos
                seus dados pessoais, bem como tirar dúvidas sobre como eles são
                utilizados. Para isso, entre em contato pelo e-mail{" "}
                <a
                  href="mailto:voitechrj@gmail.com"
                  className="text-[var(--color-primary)] hover:underline break-all"
                >
                  voitechrj@gmail.com
                </a>
                .
              </p>
              <p className="font-semibold text-white">
                6. Atualizações desta política
              </p>
              <p>
                Esta Política de Privacidade pode ser atualizada periodicamente
                para refletir melhorias nos nossos serviços ou mudanças legais.
                Sempre que houver alterações relevantes, a nova versão será
                publicada neste site.
              </p>
            </div>
          </div>
        </div>
      )}

      {showTerms && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={() => setShowTerms(false)}
        >
          <div
            className="bg-[#0a0a0a] max-h-[80vh] w-full max-w-3xl rounded-xl border border-white/10 shadow-xl overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <h2 className="text-lg md:text-xl font-bold font-display">
                Termos de Serviço
              </h2>
              <button
                type="button"
                onClick={() => setShowTerms(false)}
                className="text-gray-400 hover:text-white transition-colors text-xl leading-none"
                aria-label="Fechar termos de serviço"
              >
                ×
              </button>
            </div>
            <div className="p-6 overflow-y-auto space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">
              <p>
                Ao solicitar um atendimento ou serviço da voitechrj, você
                concorda com os termos abaixo. Nosso objetivo é sempre oferecer
                um atendimento transparente, ético e profissional.
              </p>
              <p className="font-semibold text-white">1. Objeto do serviço</p>
              <p>
                Prestamos serviços de manutenção e suporte em informática,
                consultoria em TI e outros serviços relacionados, conforme
                descrito em cada orçamento ou proposta enviada a você.
              </p>
              <p className="font-semibold text-white">
                2. Agendamentos e orçamentos
              </p>
              <p>
                Os valores e prazos informados em orçamentos são estimativas
                baseadas nas informações fornecidas e na análise inicial do
                equipamento. Caso sejam identificados problemas adicionais, o
                orçamento poderá ser atualizado mediante sua aprovação.
              </p>
              <p className="font-semibold text-white">
                3. Responsabilidades do cliente
              </p>
              <p>
                É responsabilidade do cliente fornecer informações verdadeiras
                sobre o equipamento e manter cópias de segurança (backup) de
                dados importantes antes da realização de qualquer serviço.
                Sempre que possível, orientaremos sobre a necessidade de backup
                antes de procedimentos mais sensíveis.
              </p>
              <p className="font-semibold text-white">
                4. Limitação de responsabilidade
              </p>
              <p>
                Embora adotemos o máximo cuidado técnico, não podemos garantir
                a recuperação integral de dados ou o funcionamento perfeito de
                equipamentos que já apresentem defeitos graves. A voitechrj não
                se responsabiliza por perdas de dados quando não houver backup
                prévio ou quando o risco tiver sido informado e autorizado.
              </p>
              <p className="font-semibold text-white">5. Garantia dos serviços</p>
              <p>
                Serviços de manutenção podem ter garantia limitada, informada no
                momento do atendimento, cobrindo apenas o trabalho realizado e
                não defeitos novos ou causados por mau uso, quedas, vírus,
                danos físicos ou alterações feitas por terceiros após o serviço.
              </p>
              <p className="font-semibold text-white">
                6. Cancelamentos e remarcações
              </p>
              <p>
                Caso precise remarcar ou cancelar um atendimento, pedimos que
                nos avise com a maior antecedência possível pelos canais de
                contato informados no site, para que possamos reorganizar nossa
                agenda.
              </p>
              <p className="font-semibold text-white">7. Contato</p>
              <p>
                Em caso de dúvidas sobre estes Termos de Serviço, entre em
                contato pelo e-mail{" "}
                <a
                  href="mailto:voitechrj@gmail.com"
                  className="text-[var(--color-primary)] hover:underline break-all"
                >
                  voitechrj@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer
        onOpenPrivacy={() => {
          setShowTerms(false);
          setShowPrivacy(true);
        }}
        onOpenTerms={() => {
          setShowPrivacy(false);
          setShowTerms(true);
        }}
      />
      <FAQWidget />
      <BackToTop />
    </div>
  );
}

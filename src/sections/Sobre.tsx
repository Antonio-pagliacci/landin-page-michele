import Container from '@/components/base/Container'
import Section from '@/components/base/Section'
import Title from '@/components/base/Title'
import WhatsAppIcon from '@/components/icons/WhatsAppIcon'
import { LAWYER, WHATSAPP_URL } from '@/constants'
import lawyerPhoto from '@/assets/images/michelle.jpg'
import logoLight from '@/assets/images/logo-light.png'
import { useFadeIn } from '@/hooks/useFadeIn'

const servicosOferecidos = [
  'Análise e gestão de contratos administrativos',
  'Assessoria em processos licitatórios',
  'Consultoria em conformidade e segurança jurídica',
  'Identificação e mitigação de riscos contratuais',
  'Elaboração de documentos técnicos e administrativos',
  'Suporte na comunicação com órgãos públicos',
]

const diferenciais = [
  'Atuação especializada em Administração Pública',
  'Foco em eficiência e resultados',
  'Redução de riscos e passivos contratuais',
  'Atendimento personalizado conforme a necessidade do cliente',
]

const Sobre = () => {
  const fade1 = useFadeIn(0)
  const fade2 = useFadeIn(150)

  return (
    <Section id="sobre" className="bg-gradient-to-b from-slate-50 to-white">
      <Container>
        <div ref={fade1.ref} className={fade1.className}>
          <Title title="Sobre a advogada" subtitle="Apresentação institucional" />
        </div>

        <div ref={fade2.ref} className={`mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${fade2.className}`}>
          {/* Foto */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg bg-slate-100">
              <img
                src={lawyerPhoto}
                alt={`Foto de ${LAWYER.name}`}
                className="w-full h-full object-cover"
              />

            
            </div>
            {/* Badge decorativo */}
            <div className="absolute -bottom-4 -right-4 bg-orange-600 text-white rounded-xl px-4 py-2 shadow-lg">
              <p className="text-xs font-semibold">Direito Público</p>
              <p className="text-[10px] opacity-80">Especialista</p>
            </div>
          </div>

          {/* Texto + diferenciais */}
          <div>
            <p className="text-lg leading-8 text-slate-700">
              {LAWYER.name} — {LAWYER.oab}. Atua prestando assessoria jurídica com foco em
              contratos administrativos e licitações, com atenção às práticas da Administração Pública.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-base font-semibold text-slate-900">Serviços Oferecidos</h3>
                <ul className="mt-3 space-y-2.5">
                  {servicosOferecidos.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <svg className="h-5 w-5 mt-0.5 flex-shrink-0 text-orange-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold text-slate-900">Diferenciais</h3>
                <ul className="mt-3 space-y-2.5">
                  {diferenciais.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <svg className="h-5 w-5 mt-0.5 flex-shrink-0 text-orange-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA intermediário */}
            <div className="mt-8">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium bg-green-600 text-white shadow-md hover:bg-green-700 hover:shadow-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Agendar uma conversa
              </a>
            </div>

            {/* Assinatura visual da marca */}
            <div className="mt-8 w-full max-w-sm lg:ml-auto rounded-xl bg-[#f2f3f5] p-3 ring-1 ring-slate-200 shadow-sm">
              <img
                src={logoLight}
                alt="Logo Michelle Faria"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Sobre

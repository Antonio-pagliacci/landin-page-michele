import Container from '@/components/base/Container'
import Section from '@/components/base/Section'
import Title from '@/components/base/Title'
import WhatsAppIcon from '@/components/icons/WhatsAppIcon'
import { LAWYER, WHATSAPP_URL } from '@/constants'
import { useFadeIn } from '@/hooks/useFadeIn'

const diferenciais = [
  'Atuação na Administração Pública',
  'Formação de Agente de Contratação — Lei 14.133/2021',
  'Atendimento on-line para todo o Brasil',
  'Presencial com agendamento prévio',
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
          {/* Foto / placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-slate-200 to-slate-100 overflow-hidden shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto h-20 w-20 rounded-full bg-indigo-600/10 flex items-center justify-center mb-4">
                    <svg className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-slate-700">{LAWYER.name}</p>
                  <p className="text-xs text-slate-500 mt-1">{LAWYER.oab}</p>
                </div>
              </div>
            </div>
            {/* Badge decorativo */}
            <div className="absolute -bottom-4 -right-4 bg-indigo-600 text-white rounded-xl px-4 py-2 shadow-lg">
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
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Oferece atendimento on-line para todo o Brasil e atendimento presencial mediante
              agendamento prévio, com abordagem técnica, objetiva e alinhada à segurança jurídica.
            </p>

            {/* Diferenciais inline */}
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {diferenciais.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <svg className="h-5 w-5 mt-0.5 flex-shrink-0 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA intermediário */}
            <div className="mt-8">
              <a
                href={WHATSAPP_URL}
                className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium bg-indigo-600 text-white shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Agendar uma conversa
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Sobre

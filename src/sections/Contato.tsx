import Container from '@/components/base/Container'
import Section from '@/components/base/Section'
import WhatsAppIcon from '@/components/icons/WhatsAppIcon'
import { WHATSAPP_URL, LAWYER } from '@/constants'
import { useFadeIn } from '@/hooks/useFadeIn'

const Contato = () => {
  const fade = useFadeIn(0)

  return (
    <Section id="contato" className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Container>
        <div ref={fade.ref} className={`text-center max-w-2xl mx-auto ${fade.className}`}>
          {/* Eyebrow */}
          <span className="inline-block text-xs sm:text-sm font-medium tracking-widest uppercase text-indigo-300 mb-4">
            Pronta para ajudar
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Vamos conversar sobre o seu caso?
          </h2>

          <p className="mt-5 text-lg text-slate-300 leading-relaxed">
            Primeiro contato sem compromisso. Atendimento on-line para todo o Brasil,
            presencial com agendamento prévio.
          </p>

          {/* CTA principal */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              className="inline-flex items-center gap-2.5 rounded-xl px-8 py-4 text-lg font-semibold bg-indigo-600 text-white shadow-xl shadow-indigo-600/25 hover:bg-indigo-500 hover:shadow-2xl hover:shadow-indigo-600/30 hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:ring-indigo-500"
            >
              <WhatsAppIcon className="h-6 w-6" />
              Falar no WhatsApp
            </a>
            <a
              href={`mailto:${LAWYER.email}`}
              className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-lg font-medium text-white border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:ring-white/60"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Enviar e-mail
            </a>
          </div>

          {/* Infos compactas */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-indigo-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Resposta em até 24h
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-indigo-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              Sigilo profissional
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-indigo-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 9.75c0 .746-.092 1.472-.262 2.166M3.26 11.916A8.959 8.959 0 003 9.75c0-.746.091-1.472.261-2.166" />
              </svg>
              Atendimento nacional
            </span>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Contato

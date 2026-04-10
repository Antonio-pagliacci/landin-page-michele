import Container from '@/components/base/Container'
import WhatsAppIcon from '@/components/icons/WhatsAppIcon'
import { WHATSAPP_URL, LAWYER, AREAS_ATUACAO } from '@/constants'
import heroBg from '@/assets/images/hero-bg.jpg'

const Hero = () => {
  return (
    <section
      id="hero"
      className="scroll-mt-20 relative min-h-[600px] lg:min-h-[720px] flex items-center overflow-hidden"
    >
      {/* Background image */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay com gradiente direcional */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

      {/* Leve camada extra para leitura */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Conteúdo */}
      <div className="relative z-10 w-full py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Coluna esquerda — 3 de 5 colunas */}
            <div className="lg:col-span-3">
              {/* Eyebrow institucional */}
              <span className="inline-block text-xs sm:text-sm font-medium tracking-widest uppercase text-amber-300 mb-4">
                Assessoria Jurídica Especializada
              </span>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                Segurança jurídica em
                <br className="hidden sm:block" />
                <span className="text-amber-300"> contratos públicos</span> e licitações
              </h1>

              {/* Subheadline */}
              <p className="mt-5 text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
                Atuação especializada para a Administração Pública e entidades contratantes.
                Atendimento on-line para todo o Brasil, presencial com agendamento prévio.
              </p>

              {/* Botões */}
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md font-medium
                    px-6 py-3 text-base bg-green-600 text-white shadow-lg
                    hover:bg-green-700 active:bg-green-800 transition-colors
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                >
                  <WhatsAppIcon />
                  Falar no WhatsApp
                </a>

                <a
                  href="#contato"
                  className="inline-flex items-center justify-center rounded-md font-medium
                    px-6 py-3 text-base text-white
                    border border-white/30 bg-white/5 backdrop-blur-sm
                    hover:bg-white/15 hover:border-white/50 transition-colors
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/60"
                >
                  Agendar atendimento
                </a>
              </div>

              {/* Prova institucional */}
              <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 pt-8 border-t border-white/15">
                <div>
                  <p className="text-sm font-semibold text-white">{LAWYER.name}</p>
                  <p className="text-xs text-slate-400 mt-0.5">Advogada &bull; {LAWYER.oab}</p>
                </div>
                <span className="hidden sm:block w-px h-8 bg-white/20" aria-hidden="true" />
                <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
                  Formação de Agente de Contratação (Lei&nbsp;14.133/2021).
                  Atuação na Administração Pública.
                </p>
              </div>
            </div>

            {/* Coluna direita — Card institucional premium */}
            <aside className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-2xl">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-300">
                  Áreas de Atuação
                </h2>

                <ul className="mt-5 space-y-3">
                  {AREAS_ATUACAO.map((area) => (
                    <li key={area} className="flex items-start gap-2.5 text-sm text-slate-100">
                      <svg className="h-4 w-4 mt-0.5 flex-shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {area}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-white/15">
                  <a
                    href="#areas-atuacao"
                    className="text-sm text-amber-300 hover:text-amber-200 font-medium transition-colors"
                  >
                    Ver detalhes &rarr;
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default Hero

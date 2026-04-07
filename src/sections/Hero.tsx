import React from 'react'
import Container from '../components/base/Container'
import heroBg from '@/assets/images/hero-bg.jpg'

const whatsappNumber = '5522981554135'

const areasAtuacao = [
  'Contratos Administrativos',
  'Licitações e Pregões',
  'Direito Administrativo',
  'Consultoria à Administração Pública',
  'Agente de Contratação (Lei 14.133/2021)',
]

const Hero: React.FC = () => {
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
              <span className="inline-block text-xs sm:text-sm font-medium tracking-widest uppercase text-amber-400 mb-4">
                Assessoria Jurídica Especializada
              </span>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                Segurança jurídica em
                <br className="hidden sm:block" />
                <span className="text-amber-400"> contratos públicos</span> e licitações
              </h1>

              {/* Subheadline */}
              <p className="mt-5 text-base sm:text-lg text-gray-200 max-w-2xl leading-relaxed">
                Atuação especializada para a Administração Pública e entidades contratantes.
                Atendimento on-line para todo o Brasil, presencial com agendamento prévio.
              </p>

              {/* Botões */}
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  className="inline-flex items-center justify-center gap-2 rounded-md font-medium
                    px-6 py-3 text-base bg-amber-600 text-white shadow-lg
                    hover:bg-amber-700 active:bg-amber-800 transition-colors
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.126 1.528 5.861L.065 23.576a.5.5 0 00.611.611l5.715-1.463A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.26-1.528l-.378-.227-3.387.867.882-3.387-.246-.392A9.818 9.818 0 1112 21.818z"/>
                  </svg>
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
                  <p className="text-sm font-semibold text-white">Michelle Faria</p>
                  <p className="text-xs text-gray-400 mt-0.5">Advogada &bull; OAB RJ 205.639</p>
                </div>
                <span className="hidden sm:block w-px h-8 bg-white/20" aria-hidden="true" />
                <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
                  Formação de Agente de Contratação (Lei&nbsp;14.133/2021).
                  Atuação na Administração Pública.
                </p>
              </div>
            </div>

            {/* Coluna direita — Card institucional premium */}
            <aside className="hidden lg:block lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 shadow-2xl">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-400">
                  Áreas de Atuação
                </h2>

                <ul className="mt-5 space-y-3">
                  {areasAtuacao.map((area) => (
                    <li key={area} className="flex items-start gap-2.5 text-sm text-gray-100">
                      <svg className="h-4 w-4 mt-0.5 flex-shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {area}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-white/15">
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Atendimento on-line para todo o Brasil.
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Presencial com agendamento prévio.
                  </p>
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

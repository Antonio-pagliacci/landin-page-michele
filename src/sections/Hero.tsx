import React from 'react'
import Container from '../components/base/Container'
import Button from '../components/base/Button'
import heroBg from '@/assets/images/hero-bg.jpg'

const whatsappNumber = '5522981554135'

const Hero: React.FC = () => {
  return (
    <section id="hero" className="scroll-mt-20 relative min-h-[520px] lg:min-h-[600px] flex items-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Lateral gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Texto principal */}
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight">
                Assessoria jurídica em contratos administrativos e licitações
              </h1>

              <p className="mt-4 text-sm sm:text-base text-gray-200 max-w-xl">
                Atuação especializada para a Administração Pública e entidades contratantes. Atendimento
                on-line para todo o Brasil; presencial com agendamento prévio.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-3 gap-3">
                <a href={`https://wa.me/${whatsappNumber}`} aria-label="Falar no WhatsApp">
                  <Button variant="primary" size="lg">Falar no WhatsApp</Button>
                </a>

                <a href="mailto:michellefaria.adv@gmail.com" aria-label="Agendar atendimento">
                  <Button variant="outline" size="lg" className="border-white/80 text-white hover:bg-white/10">Agendar atendimento</Button>
                </a>
              </div>

              <div className="mt-8 text-sm text-gray-300">
                <div>Michelle Faria — OAB RJ 205.639</div>
                <div className="mt-2">Diferenciais: atuação na Administração Pública; formação de Agente de Contratação (Lei 14.133/2021).</div>
              </div>
            </div>

            {/* Respiro visual à direita — bloco de atendimento */}
            <aside className="hidden lg:block">
              <div className="border border-white/20 bg-white/10 backdrop-blur-sm rounded-md p-5">
                <h2 className="text-sm font-medium text-white">Atendimento</h2>
                <ul className="mt-3 text-sm text-gray-200 space-y-2">
                  <li>Região atendida: Brasil</li>
                  <li>Modalidade: On-line</li>
                  <li>Presencial: com agendamento prévio</li>
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default Hero

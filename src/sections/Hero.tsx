import React from 'react'
import Container from '../components/base/Container'
import Section from '../components/base/Section'
import Button from '../components/base/Button'

const whatsappNumber = '5522981554135' // 55 + DDD + number, ready for future substitution

const Hero: React.FC = () => {
  return (
    <Section id="hero" className="bg-white">
      <Container>
        <div className="py-8 sm:py-12">
          <div className="flex flex-col-reverse lg:flex-row items-start gap-6 lg:gap-10">
            {/* Texto principal */}
            <div className="w-full lg:w-2/3">
              <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 leading-tight">
                Assessoria jurídica em contratos administrativos e licitações
              </h1>

              <p className="mt-3 text-sm text-gray-700 max-w-2xl">
                Atuação especializada para a Administração Pública e entidades contratantes. Atendimento
                on-line para todo o Brasil; presencial com agendamento prévio.
              </p>

              <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:gap-3 gap-3">
                <a href={`https://wa.me/${whatsappNumber}`} aria-label="Falar no WhatsApp">
                  <Button variant="primary" size="lg">Falar no WhatsApp</Button>
                </a>

                <a href={`mailto:michellefaria.adv@gmail.com`} aria-label="Agendar atendimento">
                  <Button variant="outline" size="lg">Agendar atendimento</Button>
                </a>
              </div>

              <div className="mt-6 text-sm text-gray-600">
                <div>Michelle Faria — OAB RJ 205.639</div>
                <div className="mt-2">Diferenciais: atuação na Administração Pública; formação de Agente de Contratação (Lei 14.133/2021).</div>
              </div>
            </div>

            {/* Bloco lateral discreto com pontos de atendimento */}
            <aside className="w-full lg:w-1/3">
              <div className="border border-gray-100 bg-gray-50 rounded-md p-4">
                <h3 className="text-sm font-medium text-gray-900">Atendimento</h3>
                <ul className="mt-3 text-sm text-gray-700 space-y-2">
                  <li>Região atendida: Brasil</li>
                  <li>Modalidade: On-line</li>
                  <li>Presencial: com agendamento prévio</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Hero

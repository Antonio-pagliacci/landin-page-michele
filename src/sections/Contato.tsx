import React from 'react'
import Container from '../components/base/Container'
import Section from '../components/base/Section'
import Title from '../components/base/Title'
import Button from '../components/base/Button'

const whatsappNumber = '5522981554135'

const Contato: React.FC = () => {
  return (
    <Section id="contato">
      <Container>
        <div className="py-6">
          <div className="bg-white rounded-md p-6">
            <Title title="Entre em contato" subtitle="Canais de atendimento" />

            <p className="mt-3 text-sm text-gray-700">
              Atendimento on-line para todo o Brasil. Presencial mediante agendamento prévio. Para um primeiro
              contato rápido, utilize o WhatsApp ou envie um e-mail.
            </p>

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="text-sm font-medium text-gray-900">WhatsApp</div>
                  <div className="text-sm text-gray-700">(22) 98155-4135</div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-sm font-medium text-gray-900">E-mail</div>
                  <div className="text-sm text-gray-700">michellefaria.adv@gmail.com</div>
                </div>

                <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:gap-3 gap-3">
                  <a href={`https://wa.me/${whatsappNumber}`} aria-label="Falar no WhatsApp">
                    <Button variant="primary">Falar no WhatsApp</Button>
                  </a>

                  <a href={`mailto:michellefaria.adv@gmail.com`} aria-label="Enviar e-mail">
                    <Button variant="outline">Enviar e-mail</Button>
                  </a>
                </div>
              </div>

              <aside className="text-sm text-gray-600">
                <div className="bg-gray-50 border border-gray-100 rounded-md p-4">
                  <div className="font-medium text-gray-900">Atendimento</div>
                  <ul className="mt-2 space-y-1">
                    <li>Região atendida: Brasil</li>
                    <li>Modalidade: On-line</li>
                    <li>Presencial: com agendamento prévio</li>
                    <li>Resposta inicial organizada e institucional</li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Contato

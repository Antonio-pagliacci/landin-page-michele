import React from 'react'
import Container from '../components/base/Container'
import Section from '../components/base/Section'
import Title from '../components/base/Title'
import ContactForm from '../components/forms/ContactForm'

const whatsappNumber = '5522981554135'

const Contato: React.FC = () => {
  return (
    <Section id="contato">
      <Container>
        <div className="bg-white rounded-md p-6 lg:p-8">
            <Title title="Entre em contato" subtitle="Canais de atendimento" />

            <p className="mt-3 text-sm text-gray-700">
              Atendimento on-line para todo o Brasil. Presencial mediante agendamento prévio. Para um primeiro
              contato rápido, utilize o WhatsApp ou envie um e-mail.
            </p>

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              <div>
                <ContactForm />
              </div>

              <aside className="text-sm text-gray-600">
                <div className="bg-gray-50 border border-gray-100 rounded-md p-4">
                  <h3 className="font-medium text-gray-900">Atendimento</h3>
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
      </Container>
    </Section>
  )
}

export default Contato

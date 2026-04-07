import React from 'react'
import Container from '../components/base/Container'
import Section from '../components/base/Section'
import Title from '../components/base/Title'

const Contato: React.FC = () => {
  return (
    <Section id="contato">
      <Container>
        <div className="py-6 bg-white rounded-md p-6">
          <Title title="Contato" subtitle="Informações para contato" />
          <ul className="mt-3 text-sm text-gray-700 space-y-2">
            <li>WhatsApp: (22) 98155-4135</li>
            <li>E-mail: michellefaria.adv@gmail.com</li>
            <li>Região atendida: Brasil — Atendimento online. Presencial com agendamento prévio.</li>
          </ul>
        </div>
      </Container>
    </Section>
  )
}

export default Contato

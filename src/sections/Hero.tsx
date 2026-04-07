import React from 'react'
import Container from '../components/base/Container'
import Section from '../components/base/Section'
import Title from '../components/base/Title'

const Hero: React.FC = () => {
  return (
    <Section id="hero" className="bg-gradient-to-b from-white to-gray-50">
      <Container>
        <div className="py-8 md:py-12">
          <div className="bg-white rounded-md p-6">
            <Title title="Michelle Faria" subtitle="OAB RJ 205.639" />
            <p className="mt-3 text-sm text-gray-600">Atuação em Assessoria Jurídica em contratos administrativos e licitações. Atendimento online e presencial com agendamento prévio.</p>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Hero

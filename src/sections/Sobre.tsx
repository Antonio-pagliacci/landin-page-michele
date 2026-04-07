import React from 'react'
import Container from '../components/base/Container'
import Section from '../components/base/Section'
import Title from '../components/base/Title'

const Sobre: React.FC = () => {
  return (
    <Section id="sobre">
      <Container>
        <div className="py-6 bg-white rounded-md p-6">
          <Title title="Sobre" subtitle="Assessoria Jurídica em contratos administrativos e licitações" />
          <p className="mt-3 text-sm text-gray-700">
            Michelle Faria (OAB RJ 205.639) presta assessoria jurídica com foco em contratos administrativos e licitações,
            com experiência na Administração Pública. Atendimento online e presencial mediante agendamento.
          </p>
        </div>
      </Container>
    </Section>
  )
}

export default Sobre

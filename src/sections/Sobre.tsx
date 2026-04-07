import React from 'react'
import Container from '../components/base/Container'
import Section from '../components/base/Section'
import Title from '../components/base/Title'

const Sobre: React.FC = () => {
  return (
    <Section id="sobre">
      <Container>
        <div className="py-6 bg-white rounded-md p-6">
          <Title title="Sobre" subtitle="Profissionalismo e atendimento humanizado" />
          <p className="mt-3 text-sm text-gray-700">
            Dra. Michele Almeida atua com foco em atendimento ético e atento às necessidades do cliente.
            Esta seção apresenta a estrutura inicial de apresentação institucional.
          </p>
        </div>
      </Container>
    </Section>
  )
}

export default Sobre

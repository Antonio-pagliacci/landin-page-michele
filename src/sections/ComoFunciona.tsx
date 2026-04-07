import React from 'react'
import Container from '../components/base/Container'
import Section from '../components/base/Section'
import Title from '../components/base/Title'

const ComoFunciona: React.FC = () => {
  return (
    <Section id="como-funciona">
      <Container>
        <div className="py-6 bg-white rounded-md p-6">
          <Title title="Como Funciona" subtitle="Processo simplificado (visão geral)" />
          <p className="mt-3 text-sm text-gray-700">
            Descrição breve dos passos iniciais de contato e atendimento. Esta área é apenas
            uma estrutura inicial sem fluxo implementado.
          </p>
        </div>
      </Container>
    </Section>
  )
}

export default ComoFunciona

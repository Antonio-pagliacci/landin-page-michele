import React from 'react'
import Container from '../components/base/Container'
import Section from '../components/base/Section'
import Title from '../components/base/Title'

const AreasAtuacao: React.FC = () => {
  return (
    <Section id="areas-atuacao">
      <Container>
        <div className="py-6 bg-white rounded-md p-6">
          <Title title="Áreas de Atuação" subtitle="Visão geral" />
          <p className="mt-3 text-sm text-gray-700">
            Assessoria jurídica em contratos administrativos e licitações. Conteúdo apresentado de forma
            sucinta para validação da estrutura visual.
          </p>
        </div>
      </Container>
    </Section>
  )
}

export default AreasAtuacao

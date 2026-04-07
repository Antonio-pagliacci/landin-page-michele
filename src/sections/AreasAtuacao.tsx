import React from 'react'
import Container from '../components/base/Container'
import Section from '../components/base/Section'
import Title from '../components/base/Title'

const AreasAtuacao: React.FC = () => {
  return (
    <Section id="areas-atuacao">
      <Container>
        <div className="py-6 bg-white rounded-md p-6">
          <Title title="Áreas de Atuação" subtitle="Visão geral (mock)" />
          <p className="mt-3 text-sm text-gray-700">
            Espaço destinado à listagem das áreas de atuação de forma sucinta. Conteúdo mockado
            para validação da estrutura visual e hierarquia.
          </p>
        </div>
      </Container>
    </Section>
  )
}

export default AreasAtuacao

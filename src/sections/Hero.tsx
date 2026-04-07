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
            <Title title="Dra. Michele Almeida" subtitle="Advogada — OAB/RJ 000000" />
            <p className="mt-3 text-sm text-gray-600">Atendimento em Rio de Janeiro - RJ. Base institucional preparada para evolução.</p>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Hero

import React from 'react'
import Container from '../components/base/Container'
import Section from '../components/base/Section'
import Title from '../components/base/Title'

const ComoFunciona: React.FC = () => {
  return (
    <Section id="como-funciona">
      <Container>
        <div className="py-6">
          <div className="bg-white rounded-md p-6">
            <Title title="Como funciona o atendimento" subtitle="Fluxo organizado e objetivo" />

            <p className="mt-3 text-sm text-gray-700">
              Processo simples e orientado: contato inicial, análise da demanda e encaminhamento técnico.
              O atendimento é realizado on-line para todo o Brasil; presencial com agendamento prévio.
            </p>

            {/* Etapas serão adicionadas no próximo commit */}
            <div className="mt-6">
              <p className="text-sm text-gray-600">Etapas do atendimento (resumo).</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default ComoFunciona

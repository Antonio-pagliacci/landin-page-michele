import React from 'react'
import Container from '../components/base/Container'
import Section from '../components/base/Section'
import Title from '../components/base/Title'

const Sobre: React.FC = () => {
  return (
    <Section id="sobre">
      <Container>
        <div className="py-6">
          <div className="bg-white rounded-md p-6">
            <Title title="Sobre a advogada" subtitle="Apresentação institucional" />

            <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-700">
                  Michelle Faria — OAB RJ 205.639. Atua prestando assessoria jurídica com foco em contratos
                  administrativos e licitações, com atenção às práticas da Administração Pública. Oferece
                  atendimento on-line para todo o Brasil e atendimento presencial mediante agendamento prévio.
                </p>
              </div>

              <div>
                <div className="bg-gray-50 border border-gray-100 rounded-md p-4">
                  <h4 className="text-sm font-medium text-gray-900">Diferenciais</h4>
                  <ul className="mt-3 text-sm text-gray-700 space-y-2">
                    <li>Atuação na Administração Pública</li>
                    <li>Formação de Agente de Contratação — Lei 14.133/2021</li>
                    <li>Atendimento on-line para todo o Brasil</li>
                    <li>Atendimento presencial com agendamento prévio</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Sobre

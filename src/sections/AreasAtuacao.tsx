import React from 'react'
import Container from '../components/base/Container'
import Section from '../components/base/Section'
import Title from '../components/base/Title'

const AreasAtuacao: React.FC = () => {
  return (
    <Section id="areas-atuacao">
      <Container>
        <div className="py-6">
          <div className="bg-white rounded-md p-6">
            <Title title="Áreas de Atuação" subtitle="Frentes de atuação" />

            <p className="mt-3 text-sm text-gray-700">
              Atuação concentrada em assessoria jurídica para contratos administrativos e licitações.
              Abaixo, frentes principais apresentadas de forma objetiva.
            </p>

            <div className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Cards serão preenchidos no próximo commit */}
                <div className="p-4 border border-gray-100 rounded-md bg-gray-50">
                  <h4 className="text-sm font-semibold text-gray-900">Licitações</h4>
                  <p className="mt-2 text-sm text-gray-700">Orientação em processos licitatórios e análise de editais.</p>
                </div>

                <div className="p-4 border border-gray-100 rounded-md bg-gray-50">
                  <h4 className="text-sm font-semibold text-gray-900">Contratos Administrativos</h4>
                  <p className="mt-2 text-sm text-gray-700">Elaboração, revisão e acompanhamento de contratos administrativos.</p>
                </div>

                <div className="p-4 border border-gray-100 rounded-md bg-gray-50">
                  <h4 className="text-sm font-semibold text-gray-900">Assessoria Preventiva</h4>
                  <p className="mt-2 text-sm text-gray-700">Orientação para prevenção de riscos contratuais e administrativos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default AreasAtuacao

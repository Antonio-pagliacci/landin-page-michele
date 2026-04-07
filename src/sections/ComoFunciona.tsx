import React from 'react'
import Container from '../components/base/Container'
import Section from '../components/base/Section'
import Title from '../components/base/Title'

const ComoFunciona: React.FC = () => {
  return (
    <Section id="como-funciona">
      <Container>
        <div className="bg-white rounded-md p-6 lg:p-8">
            <Title title="Como funciona o atendimento" subtitle="Fluxo organizado e objetivo" />

            <p className="mt-3 text-sm text-gray-700">
              Processo simples e orientado: contato inicial, análise da demanda e encaminhamento técnico.
              O atendimento é realizado on-line para todo o Brasil; presencial com agendamento prévio.
            </p>

            <div className="mt-6">
              <ol className="space-y-4">
                <li className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-indigo-600 text-white flex items-center justify-center">1</div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">Contato inicial</h3>
                    <p className="text-sm text-gray-700">Contato via WhatsApp ou e-mail para expor a demanda e agendar primeira conversa.</p>
                  </div>
                </li>

                <li className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-indigo-600 text-white flex items-center justify-center">2</div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">Análise da demanda</h3>
                    <p className="text-sm text-gray-700">Avaliação preliminar dos documentos e identificação das necessidades do caso.</p>
                  </div>
                </li>

                <li className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-indigo-600 text-white flex items-center justify-center">3</div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">Orientação jurídica</h3>
                    <p className="text-sm text-gray-700">Encaminhamento técnico e opções de atuação, sempre com linguagem clara e objetiva.</p>
                  </div>
                </li>

                <li className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-indigo-600 text-white flex items-center justify-center">4</div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">Atendimento</h3>
                    <p className="text-sm text-gray-700">Atendimento on-line para todo o Brasil; presencial quando necessário, mediante agendamento prévio.</p>
                  </div>
                </li>
              </ol>
            </div>
        </div>
      </Container>
    </Section>
  )
}

export default ComoFunciona

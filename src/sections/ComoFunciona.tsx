import React from 'react'
import Container from '../components/base/Container'
import Section from '../components/base/Section'
import Title from '../components/base/Title'

const ComoFunciona: React.FC = () => {
  return (
    <Section id="como-funciona" className="bg-slate-50">
      <Container>
        <div className="bg-white border border-slate-200 rounded-xl p-6 lg:p-10 shadow-sm">
            <Title title="Como funciona o atendimento" subtitle="Fluxo organizado e objetivo" />

            <p className="mt-4 text-base text-slate-700 max-w-3xl leading-7">
              Processo simples e orientado: contato inicial, análise da demanda e encaminhamento técnico.
              O atendimento é realizado on-line para todo o Brasil; presencial com agendamento prévio.
            </p>

            <div className="mt-8">
              <ol className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                <li className="flex gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50/70">
                  <div className="flex-shrink-0">
                    <div className="h-9 w-9 rounded-full bg-amber-600 text-white text-sm font-semibold flex items-center justify-center">1</div>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">Contato inicial</h3>
                    <p className="mt-1.5 text-sm text-slate-700 leading-6">Contato via WhatsApp ou e-mail para expor a demanda e agendar primeira conversa.</p>
                  </div>
                </li>

                <li className="flex gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50/70">
                  <div className="flex-shrink-0">
                    <div className="h-9 w-9 rounded-full bg-amber-600 text-white text-sm font-semibold flex items-center justify-center">2</div>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">Análise da demanda</h3>
                    <p className="mt-1.5 text-sm text-slate-700 leading-6">Avaliação preliminar dos documentos e identificação das necessidades do caso.</p>
                  </div>
                </li>

                <li className="flex gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50/70">
                  <div className="flex-shrink-0">
                    <div className="h-9 w-9 rounded-full bg-amber-600 text-white text-sm font-semibold flex items-center justify-center">3</div>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">Orientação jurídica</h3>
                    <p className="mt-1.5 text-sm text-slate-700 leading-6">Encaminhamento técnico e opções de atuação, sempre com linguagem clara e objetiva.</p>
                  </div>
                </li>

                <li className="flex gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50/70">
                  <div className="flex-shrink-0">
                    <div className="h-9 w-9 rounded-full bg-amber-600 text-white text-sm font-semibold flex items-center justify-center">4</div>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">Atendimento</h3>
                    <p className="mt-1.5 text-sm text-slate-700 leading-6">Atendimento on-line para todo o Brasil; presencial quando necessário, mediante agendamento prévio.</p>
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

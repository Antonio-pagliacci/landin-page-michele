import React from 'react'
import Container from '../components/base/Container'
import Section from '../components/base/Section'
import Title from '../components/base/Title'

const Sobre: React.FC = () => {
  return (
    <Section id="sobre" className="bg-slate-50">
      <Container>
        <div className="bg-white border border-slate-200 rounded-xl p-6 lg:p-10 shadow-sm">
            <Title title="Sobre a advogada" subtitle="Apresentação institucional" />

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-7">
                <p className="text-base leading-8 text-gray-700">
                  Michelle Faria — OAB RJ 205.639. Atua prestando assessoria jurídica com foco em contratos
                  administrativos e licitações, com atenção às práticas da Administração Pública.
                </p>
                <p className="mt-4 text-base leading-8 text-gray-700">
                  Oferece atendimento on-line para todo o Brasil e atendimento presencial mediante
                  agendamento prévio, com abordagem técnica, objetiva e alinhada à segurança jurídica.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-700">Diferenciais</h3>
                  <ul className="mt-4 space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-600" aria-hidden="true" />
                      Atuação na Administração Pública
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-600" aria-hidden="true" />
                      Formação de Agente de Contratação — Lei 14.133/2021
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-600" aria-hidden="true" />
                      Atendimento on-line para todo o Brasil
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-600" aria-hidden="true" />
                      Presencial com agendamento prévio
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
      </Container>
    </Section>
  )
}

export default Sobre

import React from 'react'
import Container from '../components/base/Container'
import Section from '../components/base/Section'
import Title from '../components/base/Title'

const AreasAtuacao: React.FC = () => {
  return (
    <Section id="areas-atuacao" className="bg-white">
      <Container>
        <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6 lg:p-10">
            <Title title="Áreas de Atuação" subtitle="Frentes de atuação" />

            <p className="mt-4 text-base text-slate-700 max-w-3xl leading-7">
              Atuação concentrada em assessoria jurídica para contratos administrativos e licitações.
              Abaixo, frentes principais apresentadas de forma objetiva.
            </p>

            <div className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                <div className="p-5 lg:p-6 border border-slate-200 rounded-xl bg-white shadow-sm">
                  <h3 className="text-base font-semibold text-slate-900">Licitações</h3>
                  <p className="mt-2.5 text-sm text-slate-700 leading-6">Orientação técnica em processos licitatórios, análise de oportunidades e conformidade com editais.</p>
                </div>

                <div className="p-5 lg:p-6 border border-slate-200 rounded-xl bg-white shadow-sm">
                  <h3 className="text-base font-semibold text-slate-900">Contratos Administrativos</h3>
                  <p className="mt-2.5 text-sm text-slate-700 leading-6">Elaboração, revisão e acompanhamento de contratos administrativos, com foco em mitigação de riscos.</p>
                </div>

                <div className="p-5 lg:p-6 border border-slate-200 rounded-xl bg-white shadow-sm">
                  <h3 className="text-base font-semibold text-slate-900">Assessoria Preventiva</h3>
                  <p className="mt-2.5 text-sm text-slate-700 leading-6">Orientação preventiva para gestão contratual e administrativa, visando segurança jurídica.</p>
                </div>

                <div className="p-5 lg:p-6 border border-slate-200 rounded-xl bg-white shadow-sm">
                  <h3 className="text-base font-semibold text-slate-900">Orientação em Procedimentos</h3>
                  <p className="mt-2.5 text-sm text-slate-700 leading-6">Apoio em procedimentos internos da Administração Pública e orientação quanto às disposições da Lei 14.133/2021.</p>
                </div>
              </div>
            </div>
        </div>
      </Container>
    </Section>
  )
}

export default AreasAtuacao

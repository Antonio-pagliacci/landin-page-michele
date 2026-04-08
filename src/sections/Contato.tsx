import Container from '../components/base/Container'
import Section from '../components/base/Section'
import Title from '../components/base/Title'

const whatsappNumber = '5522981554135'

const Contato = () => {
  return (
    <Section id="contato" className="bg-white">
      <Container>
        <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6 lg:p-10">
            <Title title="Entre em contato" subtitle="Canais de atendimento" />

            <p className="mt-4 text-base text-slate-700 max-w-3xl leading-7">
              Atendimento on-line para todo o Brasil. Presencial mediante agendamento prévio.
              Para um primeiro contato rápido, utilize o WhatsApp.
            </p>

            <div className="mt-8 max-w-xl">
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm text-sm text-slate-700">
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-700">Atendimento</h3>
                <ul className="mt-4 space-y-2.5 leading-6">
                  <li>Região atendida: Brasil</li>
                  <li>Modalidade: On-line</li>
                  <li>Presencial: com agendamento prévio</li>
                  <li>Resposta inicial organizada e institucional</li>
                </ul>

                <div className="mt-6 pt-5 border-t border-slate-200">
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-amber-600 text-white hover:bg-amber-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500"
                  >
                    Falar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
        </div>
      </Container>
    </Section>
  )
}

export default Contato

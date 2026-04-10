import Container from '@/components/base/Container'
import Section from '@/components/base/Section'
import Title from '@/components/base/Title'
import AreaIcon from '@/components/icons/AreaIcon'
import WhatsAppIcon from '@/components/icons/WhatsAppIcon'
import { AREAS_CARDS, WHATSAPP_URL } from '@/constants'
import { useFadeIn } from '@/hooks/useFadeIn'

const AreasAtuacao = () => {
  const fadeTitle = useFadeIn(0)

  return (
    <Section id="areas-atuacao" className="bg-slate-900">
      <Container>
        <div ref={fadeTitle.ref} className={fadeTitle.className}>
          <Title
            title="Áreas de Atuação"
            subtitle="Frentes de atuação"
            align="center"
            className="[&_p]:text-slate-400 [&_h2]:text-white"
          />
          <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto text-center leading-7">
            Atuação concentrada em assessoria jurídica para contratos administrativos e licitações.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {AREAS_CARDS.map((area, i) => {
            const fade = useFadeIn(i * 100)
            return (
              <div
                key={area.title}
                ref={fade.ref}
                className={`group relative p-6 lg:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-orange-400/30 transition-all duration-300 ${fade.className}`}
              >
                <div className="h-12 w-12 rounded-xl bg-orange-500/15 flex items-center justify-center mb-5 group-hover:bg-orange-500/25 transition-colors">
                  <AreaIcon name={area.icon} className="h-6 w-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{area.title}</h3>
                <p className="mt-2.5 text-sm text-slate-300 leading-6">{area.description}</p>
              </div>
            )
          })}
        </div>

        {/* CTA intermediário */}
        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-base font-medium bg-green-600 text-white shadow-lg hover:bg-green-700 hover:shadow-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:ring-green-500"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Consultar sobre sua demanda
          </a>
        </div>
      </Container>
    </Section>
  )
}

export default AreasAtuacao

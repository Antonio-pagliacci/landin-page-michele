import Container from '@/components/base/Container'
import Section from '@/components/base/Section'
import Title from '@/components/base/Title'
import AreaIcon from '@/components/icons/AreaIcon'
import { STEPS } from '@/constants'
import { useFadeIn } from '@/hooks/useFadeIn'

const ComoFunciona = () => {
  const fadeTitle = useFadeIn(0)

  return (
    <Section id="como-funciona" className="bg-gradient-to-b from-white to-slate-50">
      <Container>
        <div ref={fadeTitle.ref} className={`text-center ${fadeTitle.className}`}>
          <Title title="Como funciona o atendimento" subtitle="Processo simples e objetivo" align="center" />
          <p className="mt-4 text-base text-slate-600 max-w-2xl mx-auto leading-7">
            Do contato inicial à solução: um fluxo organizado pensado para atender com agilidade e segurança.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, i) => {
            const fade = useFadeIn(i * 120)
            return (
              <div key={step.number} ref={fade.ref} className={`relative text-center ${fade.className}`}>
                {/* Linha conectora (desktop) */}
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-slate-200" aria-hidden="true" />
                )}

                {/* Ícone */}
                <div className="mx-auto h-16 w-16 rounded-2xl bg-amber-600 text-white flex items-center justify-center shadow-lg shadow-amber-600/20 mb-5">
                  <AreaIcon name={step.icon} className="h-7 w-7" />
                </div>

                {/* Número + texto */}
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-600 mb-2">
                  Etapa {step.number}
                </span>
                <h3 className="text-base font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-6 max-w-xs mx-auto">{step.description}</p>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

export default ComoFunciona

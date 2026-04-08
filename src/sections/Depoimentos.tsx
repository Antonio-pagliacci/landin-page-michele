import Container from '@/components/base/Container'
import Section from '@/components/base/Section'
import Title from '@/components/base/Title'
import { TESTIMONIALS } from '@/constants'
import { useFadeIn } from '@/hooks/useFadeIn'

const Depoimentos = () => {
  const fadeTitle = useFadeIn(0)

  return (
    <Section id="depoimentos" className="bg-slate-50">
      <Container>
        <div ref={fadeTitle.ref} className={`text-center ${fadeTitle.className}`}>
          <Title title="O que dizem nossos clientes" subtitle="Depoimentos" align="center" />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => {
            const fade = useFadeIn<HTMLQuoteElement>(i * 120)
            return (
              <blockquote
                key={i}
                ref={fade.ref}
                className={`relative rounded-2xl bg-white p-6 lg:p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 ${fade.className}`}
              >
                {/* Aspas decorativas */}
                <svg
                  className="absolute top-5 right-5 h-8 w-8 text-indigo-100"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>

                <p className="text-base text-slate-700 leading-7 relative z-10">
                  &ldquo;{t.text}&rdquo;
                </p>

                <footer className="mt-6 pt-4 border-t border-slate-100">
                  <p className="text-xs text-slate-400 italic">Cliente do escritório</p>
                </footer>
              </blockquote>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

export default Depoimentos

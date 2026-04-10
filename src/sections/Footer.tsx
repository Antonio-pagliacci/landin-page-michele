import Container from '@/components/base/Container'
import { WHATSAPP_URL, LAWYER, NAV_LINKS } from '@/constants'

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-200 border-t border-slate-800">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 text-sm">
            {/* Coluna 1: Marca */}
            <div className="space-y-3">
              <div className="text-white font-semibold text-base">{LAWYER.name}</div>
              <div className="text-slate-300">Advogada • {LAWYER.oab}</div>
              <p className="text-slate-400 leading-6">
                Assessoria jurídica em contratos administrativos e licitações.
                Atendimento on-line para todo o Brasil.
              </p>
            </div>

            {/* Coluna 2: Navegação */}
            <nav className="space-y-3" aria-label="Rodapé">
              <div className="font-semibold text-white uppercase tracking-[0.1em] text-xs">Navegação</div>
              <ul className="space-y-1.5 text-sm">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-slate-300 hover:text-orange-400 transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Coluna 3: Contato */}
            <div className="space-y-3">
              <div className="font-semibold text-white uppercase tracking-[0.1em] text-xs">Contato</div>
              <div className="space-y-1.5">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="block text-slate-300 hover:text-green-400 transition-colors">WhatsApp: {LAWYER.phone}</a>
                <a href={`mailto:${LAWYER.email}`} className="block text-slate-300 hover:text-orange-400 transition-colors">{LAWYER.email}</a>
              </div>
              <p className="text-slate-500 text-xs pt-2 leading-5">
                Presencial com agendamento prévio.
              </p>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-slate-800 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} {LAWYER.name} — {LAWYER.oab}
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

import React from 'react'
import Container from '../components/base/Container'

const whatsappNumber = '5522981554135'

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-200 border-t border-slate-800">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 text-sm">
            <div className="space-y-2">
              <div className="text-white font-semibold text-base">Michelle Faria</div>
              <div className="text-slate-300">Advogada • OAB RJ 205.639</div>
              <p className="text-slate-400 mt-3 leading-6">Assessoria jurídica em contratos administrativos e licitações. Atendimento profissional e institucional.</p>
            </div>

            <nav className="space-y-2">
              <div className="font-semibold text-white uppercase tracking-[0.1em] text-xs">Navegação</div>
              <ul className="mt-2 space-y-1 text-sm">
                <li><a href="#hero" className="text-slate-300 hover:text-amber-400 transition-colors">Início</a></li>
                <li><a href="#sobre" className="text-slate-300 hover:text-amber-400 transition-colors">Sobre</a></li>
                <li><a href="#areas-atuacao" className="text-slate-300 hover:text-amber-400 transition-colors">Áreas de atuação</a></li>
                <li><a href="#como-funciona" className="text-slate-300 hover:text-amber-400 transition-colors">Como funciona</a></li>
                <li><a href="#contato" className="text-slate-300 hover:text-amber-400 transition-colors">Contato</a></li>
              </ul>
            </nav>

            <div className="space-y-2">
              <div className="font-semibold text-white uppercase tracking-[0.1em] text-xs">Contato</div>
              <div>
                <a href={`https://wa.me/${whatsappNumber}`} className="text-slate-300 hover:text-amber-400 transition-colors">WhatsApp: (22) 98155-4135</a>
              </div>
              <div>
                <a href="mailto:michellefaria.adv@gmail.com" className="text-slate-300 hover:text-amber-400 transition-colors">michellefaria.adv@gmail.com</a>
              </div>
            </div>

            <div className="space-y-2 text-slate-300">
              <div className="font-semibold text-white uppercase tracking-[0.1em] text-xs">Atendimento</div>
              <div className="leading-6">Brasil · On-line · Presencial com agendamento prévio</div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-slate-800 text-center text-xs text-slate-400">© {new Date().getFullYear()} Michelle Faria — OAB RJ 205.639</div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

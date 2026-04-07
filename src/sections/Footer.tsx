import React from 'react'
import Container from '../components/base/Container'

const whatsappNumber = '5522981554135'

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t mt-8">
      <Container>
        <div className="py-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-6 text-sm text-gray-700">
            <div className="space-y-2">
              <div className="text-gray-900 font-semibold">Michelle Faria</div>
              <div>OAB RJ 205.639</div>
              <p className="text-gray-600 mt-2">Assessoria jurídica em contratos administrativos e licitações. Atendimento profissional e institucional.</p>
            </div>

            <nav className="space-y-2">
              <div className="font-medium text-gray-900">Navegação</div>
              <ul className="mt-2 space-y-1 text-sm">
                <li><a href="#hero" className="text-gray-700 hover:text-indigo-600 hover:underline">Início</a></li>
                <li><a href="#sobre" className="text-gray-700 hover:text-indigo-600 hover:underline">Sobre</a></li>
                <li><a href="#areas-atuacao" className="text-gray-700 hover:text-indigo-600 hover:underline">Áreas de atuação</a></li>
                <li><a href="#como-funciona" className="text-gray-700 hover:text-indigo-600 hover:underline">Como funciona</a></li>
                <li><a href="#contato" className="text-gray-700 hover:text-indigo-600 hover:underline">Contato</a></li>
              </ul>
            </nav>

            <div className="space-y-2">
              <div className="font-medium text-gray-900">Contato</div>
              <div>
                <a href={`https://wa.me/${whatsappNumber}`} className="text-indigo-600 hover:underline">WhatsApp: (22) 98155-4135</a>
              </div>
              <div>
                <a href="mailto:michellefaria.adv@gmail.com" className="text-indigo-600 hover:underline">michellefaria.adv@gmail.com</a>
              </div>
            </div>

            <div className="space-y-2 text-gray-600">
              <div className="font-medium text-gray-900">Atendimento</div>
              <div>Brasil · On-line · Presencial com agendamento prévio</div>
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} Michelle Faria</div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

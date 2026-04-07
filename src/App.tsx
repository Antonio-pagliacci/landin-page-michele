import React from 'react'

type ProfessionalInfo = {
  name: string
  title: string
  oab: string
  city: string
  whatsapp: string
  email: string
}

const info: ProfessionalInfo = {
  name: 'Dra. Michele Almeida',
  title: 'Advogada',
  oab: 'OAB/RJ 000000',
  city: 'Rio de Janeiro - RJ',
  whatsapp: '(21) 99999-0000',
  email: 'contato@dramichele.com.br'
}

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-6">
      <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold">{info.name}</h1>
            <p className="text-sm text-gray-600">{info.title} • <span className="font-mono">{info.oab}</span></p>
            <p className="text-sm text-gray-600 mt-1">{info.city}</p>
          </div>
          <div className="flex gap-3 items-center">
            <a
              href={`https://wa.me/5521999990000`}
              className="inline-block bg-green-600 text-white px-4 py-2 rounded-md text-sm"
              aria-label="WhatsApp"
            >
              WhatsApp
            </a>
            <a
              href={`mailto:${info.email}`}
              className="inline-block border border-gray-200 px-4 py-2 rounded-md text-sm"
              aria-label="Email"
            >
              Email
            </a>
          </div>
        </header>

        <hr className="my-6" />

        <div>
          <p className="text-sm text-gray-700">
            Base inicial do frontend da landing page da <strong>{info.name}</strong>. Esta estrutura
            está pronta para evoluir para um portal de atendimento. Mobile-first e tipada com
            TypeScript.
          </p>

          <div className="mt-6 text-xs text-gray-500">Base iniciada — branch sugerida: feat/setup-inicial-frontend</div>
        </div>
      </section>
    </main>
  )
}

export default App

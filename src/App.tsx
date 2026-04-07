import React from 'react'
import Container from './components/base/Container'
import Section from './components/base/Section'
import Title from './components/base/Title'
import Button from './components/base/Button'

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
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <Container>
        <Section>
          <div className="bg-white rounded-md p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <Title title={info.name} subtitle={`${info.title} • ${info.oab}`} />
                <p className="text-sm text-gray-600 mt-2">{info.city}</p>
              </div>

              <div className="flex gap-3 mt-4 sm:mt-0">
                <Button variant="primary">WhatsApp</Button>
                <Button variant="outline">Email</Button>
              </div>
            </div>

            <hr className="my-6" />

            <p className="text-sm text-gray-700">
              Estrutura de componentes base criada para validação da arquitetura. Componentes
              simples, acessíveis e prontos para evolução.
            </p>
          </div>
        </Section>
      </Container>
    </main>
  )
}

export default App

import React from 'react'
import Hero from './sections/Hero'
import Sobre from './sections/Sobre'
import AreasAtuacao from './sections/AreasAtuacao'
import ComoFunciona from './sections/ComoFunciona'
import Contato from './sections/Contato'
import Footer from './sections/Footer'

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <Hero />
      <Sobre />
      <AreasAtuacao />
      <ComoFunciona />
      <Contato />
      <Footer />
    </main>
  )
}

export default App

import React from 'react'
import Header from './components/layout/Header'
import WhatsAppFloat from './components/ui/WhatsAppFloat'
import Hero from './sections/Hero'
import Sobre from './sections/Sobre'
import AreasAtuacao from './sections/AreasAtuacao'
import ComoFunciona from './sections/ComoFunciona'
import Contato from './sections/Contato'
import Footer from './sections/Footer'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <AreasAtuacao />
        <ComoFunciona />
        <Contato />
        <Footer />
      </main>
      <WhatsAppFloat />
    </div>
  )
}

export default App

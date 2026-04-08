import Header from '@/components/layout/Header'
import WhatsAppFloat from '@/components/ui/WhatsAppFloat'
import Hero from '@/sections/Hero'
import Sobre from '@/sections/Sobre'
import AreasAtuacao from '@/sections/AreasAtuacao'
import ComoFunciona from '@/sections/ComoFunciona'
import Depoimentos from '@/sections/Depoimentos'
import Contato from '@/sections/Contato'
import Footer from '@/sections/Footer'

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-indigo-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-md">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Sobre />
        <AreasAtuacao />
        <ComoFunciona />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App

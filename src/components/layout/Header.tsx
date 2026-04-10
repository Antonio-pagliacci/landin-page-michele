import { useState } from 'react'
import WhatsAppIcon from '@/components/icons/WhatsAppIcon'
import { LAWYER, NAV_LINKS, WHATSAPP_URL } from '@/constants'

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-[4.5rem]">
          {/* Marca */}
          <a href="#hero" className="group flex flex-col leading-none">
            <span className="text-lg font-semibold tracking-[0.04em] text-slate-900">
              {LAWYER.name}
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.32em] text-slate-500 group-hover:text-slate-700 transition-colors">
              Advocacia e Consultoria
            </span>
          </a>

          {/* Navegação desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm text-slate-600 hover:text-slate-900 transition-colors
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
                  after:bg-orange-600 after:transition-all hover:after:w-full
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded"
              >
                {link.label}
              </a>
            ))}

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="ml-2 inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2
                bg-green-600 text-white rounded-md shadow-sm
                hover:bg-green-700 active:bg-green-800 transition-colors
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </nav>

          {/* Botão mobile */}
          <div className="md:hidden">
            <button
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {open ? (
                  <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <div className="px-4 py-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md px-3 py-2.5 text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="block text-center mt-2 text-sm font-medium px-4 py-2.5
                bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

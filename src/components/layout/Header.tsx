import React, { useState } from 'react'

const navLinks = [
  { href: '#hero', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#areas-atuacao', label: 'Áreas de atuação' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#contato', label: 'Contato' },
]

const Header: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-[4.5rem]">
          {/* Marca */}
          <a href="#hero" className="flex flex-col leading-tight">
            <span className="text-base font-semibold tracking-tight text-gray-900">
              Michelle Faria
            </span>
            <span className="text-[11px] text-gray-500 tracking-wide">
              Advogada &bull; OAB RJ 205.639
            </span>
          </a>

          {/* Navegação desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm text-gray-600 hover:text-gray-900 transition-colors
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
                  after:bg-amber-600 after:transition-all hover:after:w-full
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://wa.me/5522981554135"
              className="ml-2 inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2
                bg-amber-600 text-white rounded-md shadow-sm
                hover:bg-amber-700 active:bg-amber-800 transition-colors
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.126 1.528 5.861L.065 23.576a.5.5 0 00.611.611l5.715-1.463A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.26-1.528l-.378-.227-3.387.867.882-3.387-.246-.392A9.818 9.818 0 1112 21.818z"/>
              </svg>
              WhatsApp
            </a>
          </nav>

          {/* Botão mobile */}
          <div className="md:hidden">
            <button
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              onClick={() => setOpen((s) => !s)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
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
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md px-3 py-2.5 text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://wa.me/5522981554135"
              onClick={() => setOpen(false)}
              className="block text-center mt-2 text-sm font-medium px-4 py-2.5
                bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
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

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
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <div className="text-sm font-semibold text-gray-900">Michelle Faria</div>
            <div className="text-xs text-gray-600">OAB RJ 205.639</div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-gray-700 hover:text-indigo-600">
                {link.label}
              </a>
            ))}

            <a href={`https://wa.me/5522981554135`} className="ml-4 text-sm px-3 py-1.5 bg-indigo-600 text-white rounded-md hover:opacity-95">WhatsApp</a>
          </nav>

          <div className="md:hidden">
            <button
              aria-label="Abrir menu"
              onClick={() => setOpen((s) => !s)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
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

      {open && (
        <div className="md:hidden border-t">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block text-gray-700 py-2">
                {link.label}
              </a>
            ))}

            <a href={`https://wa.me/5522981554135`} className="block text-gray-700 py-2">WhatsApp</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

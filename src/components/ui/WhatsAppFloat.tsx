import React from 'react'

const whatsappNumber = '5522981554135'

const WhatsAppFloat: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      aria-label="Abrir WhatsApp"
      className="fixed right-4 bottom-6 z-50 inline-flex items-center gap-3 bg-indigo-600 text-white px-4 py-3 rounded-full shadow-lg hover:opacity-95"
      target="_blank"
      rel="noreferrer"
    >
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.52 3.48A11.87 11.87 0 0012 0C5.373 0 .01 5.373 0 12c0 2.116.55 4.181 1.594 5.997L0 24l6.196-1.605A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12 0-3.209-1.25-6.216-3.48-8.52zM12 21.5c-1.02 0-2.02-.2-2.952-.586l-.212-.101-3.678.955.98-3.586-.136-.237A9.5 9.5 0 1112 21.5z" />
      </svg>
      <span className="text-sm font-medium">WhatsApp</span>
    </a>
  )
}

export default WhatsAppFloat

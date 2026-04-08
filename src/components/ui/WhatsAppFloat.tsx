import WhatsAppIcon from '@/components/icons/WhatsAppIcon'
import { WHATSAPP_URL } from '@/constants'

const WhatsAppFloat = () => {
  return (
    <a
      href={WHATSAPP_URL}
      aria-label="Abrir WhatsApp"
      className="fixed right-4 bottom-6 z-50 inline-flex items-center gap-3 bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      target="_blank"
      rel="noreferrer"
    >
      <WhatsAppIcon />
      <span className="text-sm font-medium">WhatsApp</span>
    </a>
  )
}

export default WhatsAppFloat

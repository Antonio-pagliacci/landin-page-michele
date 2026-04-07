import type { ContactFormData } from '../schemas/contactSchema'

// Placeholder service that simulates sending contact data.
export async function sendContact(data: ContactFormData): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate occasional failure (~12%) for testing error state
      if (Math.random() < 0.12) {
        reject(new Error('Falha simulada ao enviar formulário'))
        return
      }
      resolve()
    }, 1400)
  })
}

export default { sendContact }

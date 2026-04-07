import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, { message: 'Nome deve ter ao menos 2 caracteres' }),
  phone: z.string().min(6, { message: 'Telefone inválido' }),
  message: z.string().min(10, { message: 'Mensagem deve ter ao menos 10 caracteres' }),
})

export type ContactFormData = z.infer<typeof contactSchema>

export default contactSchema

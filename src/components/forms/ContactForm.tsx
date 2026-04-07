import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import contactSchema, { ContactFormData } from '../../schemas/contactSchema'
import { sendContact } from '../../services/contactService'
import Button from '../base/Button'

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) })

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')
    setErrorMessage(null)
    try {
      await sendContact(data)
      setStatus('success')
      reset()
    } catch (err: any) {
      setStatus('error')
      setErrorMessage(err?.message ?? 'Erro ao enviar formulário')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-live="polite">
      <div className="space-y-5">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-[0.12em] text-slate-700">Nome</label>
          <input
            {...register('name')}
            id="contact-name"
            type="text"
            className={`mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm focus:border-amber-500 focus:ring-amber-500 ${errors.name ? 'border-red-500' : ''}`}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            />
          {errors.name && <p id="name-error" className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-[0.12em] text-slate-700">Telefone</label>
          <input
            {...register('phone')}
            id="contact-phone"
            type="tel"
            className={`mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm focus:border-amber-500 focus:ring-amber-500 ${errors.phone ? 'border-red-500' : ''}`}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            />
          {errors.phone && <p id="phone-error" className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-[0.12em] text-slate-700">Mensagem</label>
          <textarea
            {...register('message')}
            id="contact-message"
            rows={5}
            className={`mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm focus:border-amber-500 focus:ring-amber-500 ${errors.message ? 'border-red-500' : ''}`}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && <p id="message-error" className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1">
          <Button type="submit" variant="primary" disabled={isSubmitting || status === 'loading'}>
            {status === 'loading' || isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
          </Button>

          {status === 'success' && (
            <div role="status" className="text-sm text-green-600">Mensagem enviada com sucesso. Entraremos em contato em breve.</div>
          )}

          {status === 'error' && (
            <div role="alert" className="text-sm text-red-600">{errorMessage ?? 'Erro ao enviar. Tente novamente.'}</div>
          )}
        </div>
      </div>
    </form>
  )
}

export default ContactForm

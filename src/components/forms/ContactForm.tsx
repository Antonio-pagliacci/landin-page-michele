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
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nome</label>
          <input
            {...register('name')}
            type="text"
            className={`mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${errors.name ? 'border-red-500' : ''}`}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            />
          {errors.name && <p id="name-error" className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Telefone</label>
          <input
            {...register('phone')}
            type="tel"
            className={`mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${errors.phone ? 'border-red-500' : ''}`}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            />
          {errors.phone && <p id="phone-error" className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Mensagem</label>
          <textarea
            {...register('message')}
            rows={5}
            className={`mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${errors.message ? 'border-red-500' : ''}`}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && <p id="message-error" className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
        </div>

        <div className="flex items-center gap-3">
          <Button type="submit" variant="primary" disabled={isSubmitting || status === 'loading'}>
            {status === 'loading' || isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
          </Button>

          {status === 'success' && (
            <div className="text-sm text-green-600">Mensagem enviada com sucesso. Entraremos em contato em breve.</div>
          )}

          {status === 'error' && (
            <div className="text-sm text-red-600">{errorMessage ?? 'Erro ao enviar. Tente novamente.'}</div>
          )}
        </div>
      </div>
    </form>
  )
}

export default ContactForm

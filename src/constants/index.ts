// ── Constantes globais da landing page ──

export const WHATSAPP_NUMBER = '5522981554135'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

export const LAWYER = {
  name: 'Michelle Faria',
  oab: 'OAB RJ 205.639',
  email: 'michellefaria.adv@gmail.com',
  phone: '(22) 98155-4135',
} as const

export const NAV_LINKS = [
  { href: '#hero', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#areas-atuacao', label: 'Áreas de atuação' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
] as const

export const AREAS_ATUACAO = [
  'Contratos Administrativos',
  'Licitações e Pregões',
  'Direito Administrativo',
  'Consultoria à Administração Pública',
  'Agente de Contratação (Lei 14.133/2021)',
] as const

export const AREAS_CARDS = [
  {
    title: 'Licitações',
    description: 'Orientação técnica em processos licitatórios, análise de oportunidades e conformidade com editais.',
    icon: 'gavel',
  },
  {
    title: 'Contratos Administrativos',
    description: 'Elaboração, revisão e acompanhamento de contratos administrativos, com foco em mitigação de riscos.',
    icon: 'document',
  },
  {
    title: 'Assessoria Preventiva',
    description: 'Orientação preventiva para gestão contratual e administrativa, visando segurança jurídica.',
    icon: 'shield',
  },
  {
    title: 'Orientação em Procedimentos',
    description: 'Apoio em procedimentos internos da Administração Pública e orientação quanto à Lei 14.133/2021.',
    icon: 'clipboard',
  },
] as const

export const STEPS = [
  {
    number: 1,
    title: 'Contato inicial',
    description: 'Contato via WhatsApp ou e-mail para expor a demanda e agendar primeira conversa.',
    icon: 'chat',
  },
  {
    number: 2,
    title: 'Análise da demanda',
    description: 'Avaliação preliminar dos documentos e identificação das necessidades do caso.',
    icon: 'search',
  },
  {
    number: 3,
    title: 'Orientação jurídica',
    description: 'Encaminhamento técnico e opções de atuação, com linguagem clara e objetiva.',
    icon: 'lightbulb',
  },
  {
    number: 4,
    title: 'Atendimento',
    description: 'Atendimento on-line para todo o Brasil; presencial quando necessário, mediante agendamento.',
    icon: 'handshake',
  },
] as const

export const TESTIMONIALS = [
  {
    text: 'Atendimento técnico, objetivo e muito bem organizado. Resolveu nosso processo licitatório com agilidade.',
  },
  {
    text: 'Nos orientou de forma clara sobre os contratos administrativos. Segurança e profissionalismo.',
  },
  {
    text: 'Excelente domínio da Lei 14.133/2021. Recomendo para qualquer questão de contratos públicos.',
  },
] as const

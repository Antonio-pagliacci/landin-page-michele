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
  { href: '#areas-atuacao', label: 'Serviços' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
] as const

export const AREAS_ATUACAO = [
  'Análise e gestão de contratos administrativos',
  'Assessoria em processos licitatórios',
  'Consultoria em conformidade e segurança jurídica',
  'Mitigação de riscos contratuais',
  'Suporte na comunicação com órgãos públicos',
] as const

export const AREAS_CARDS = [
  {
    title: 'Análise e gestão de contratos administrativos',
    description: 'Acompanhamento técnico da contratação pública, com foco em conformidade e eficiência na execução contratual.',
    icon: 'gavel',
  },
  {
    title: 'Assessoria em processos licitatórios',
    description: 'Orientação jurídica em todas as etapas da licitação, da análise de edital ao suporte na condução do processo.',
    icon: 'document',
  },
  {
    title: 'Consultoria em conformidade e segurança jurídica',
    description: 'Estruturação de práticas aderentes à legislação e aos controles internos da Administração Pública.',
    icon: 'shield',
  },
  {
    title: 'Identificação e mitigação de riscos contratuais',
    description: 'Mapeamento preventivo de riscos e recomendações para reduzir passivos e contingências.',
    icon: 'clipboard',
  },
  {
    title: 'Elaboração de documentos técnicos e administrativos',
    description: 'Produção de documentos com linguagem clara e fundamento técnico para apoiar decisões e processos.',
    icon: 'search',
  },
  {
    title: 'Suporte na comunicação com órgãos públicos',
    description: 'Apoio estratégico na formalização de comunicações institucionais e respostas administrativas.',
    icon: 'handshake',
  },
] as const

export const DIFERENCIAIS = [
  'Atuação especializada em Administração Pública',
  'Foco em eficiência e resultados',
  'Redução de riscos e passivos contratuais',
  'Atendimento personalizado conforme a necessidade do cliente',
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

export const site = {
  name: 'Gabriel Lopes',
  role: 'Desenvolvedor Full Stack',
  location: 'Minas Gerais, BR',
  email: 'gabrielllopesabreusilva@gmail.com',
  whatsapp: {
    href: 'https://wa.me/5531972414433',
    label: '+55 31 97241-4433',
  },
  github: {
    href: 'https://github.com/Lopes-abreu',
    label: '@Lopes-abreu',
  },
  linkedin: {
    href: 'https://www.linkedin.com/in/gabriellopesabreu/',
    label: '/in/gabriellopesabreu',
  },
} as const;

export const navLinks = [
  { href: '#trabalhos', label: 'Trabalhos', index: '01' },
  { href: '#sobre', label: 'Sobre', index: '02' },
  { href: '#servicos', label: 'Serviços', index: '03' },
  { href: '#contato', label: 'Contato', index: '04' },
] as const;

export const projects = [
  {
    number: '01',
    title: 'Múltipla Contabilidade & Consultoria',
    description:
      'Landing page institucional com blog e ecossistema do App Múltipla para uma contabilidade consultiva especializada em e-commerce.',
    tags: ['React', 'Vite', 'Blog', 'App Múltipla'],
    year: '2026',
    role: 'Produto web institucional',
    image: '/projects-consultoria-multipla.png',
    theme: 'multipla',
    url: 'https://consultoriamultipla.com/',
  },
  {
    number: '02',
    title: 'NEXO Inteligência Comportamental',
    description:
      'Plataforma SaaS para avaliações comportamentais, dashboards de equipes, recrutamento e gestão de pessoas com perfis DISC.',
    tags: ['React', 'Laravel', 'MySQL', 'DISC'],
    year: '2026',
    role: 'Plataforma SaaS',
    image: '/projects-nexo.png',
    theme: 'nexo',
    url: 'https://nexocomportamental.com.br/',
  },
] as const;

export const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Python',
  'Automação de processos',
  'Inteligência artificial',
  'Tailwind CSS',
  'PostgreSQL',
  'APIs REST',
  'Git',
] as const;

export const services = [
  {
    number: '01',
    title: 'Interfaces e sites',
    description:
      'Landing pages e sites institucionais que carregam rápido, explicam o produto e não disputam a atenção de quem usa.',
  },
  {
    number: '02',
    title: 'Sistemas web',
    description:
      'Painéis, fluxos internos e plataformas SaaS — da interface à API e ao banco, com regras de negócio que outra pessoa consiga manter.',
  },
  {
    number: '03',
    title: 'APIs e automação',
    description:
      'Integrações e automações que ligam o que o produto precisa para funcionar no dia a dia, sem camadas desnecessárias.',
  },
] as const;

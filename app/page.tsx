import Image from 'next/image';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';

const projects = [
  {
    number: '01',
    title: 'Múltipla Contabilidade & Consultoria',
    description: 'Landing page institucional com blog e ecossistema do App Múltipla para uma contabilidade consultiva especializada em e-commerce.',
    tags: ['React', 'Vite', 'Blog', 'App Múltipla'],
    year: '2026',
    image: '/projects-consultoria-multipla.png',
    url: 'https://consultoriamultipla.com/',
  },
  {
    number: '02',
    title: 'NEXO Inteligência Comportamental',
    description: 'Plataforma SaaS para avaliações comportamentais, dashboards de equipes, recrutamento e gestão de pessoas com perfis DISC.',
    tags: ['React', 'Laravel', 'MySQL', 'DISC'],
    year: '2026',
    image: '/projects-nexo.png',
    url: 'https://nexocomportamental.com.br/',
  },
];

const skills = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Automação de processos', 'Tailwind CSS', 'PostgreSQL', 'APIs REST', 'Git'];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir para o início">Gabriel Lopes</a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#trabalhos">Trabalhos</a><a href="#sobre">Sobre</a><a href="#contato">Contato</a>
        </nav>
        <a className="availability" href="#contato"><span aria-hidden="true" /> Disponível para projetos</a>
      </header>

      <section className="hero section-shell" id="inicio">
        <div className="eyebrow reveal-up">PORTFÓLIO / 2026</div>
        <div className="hero-grid">
          <div className="hero-copy reveal-up delay-1">
            <h1>Projeto e construo <em>para a web.</em></h1>
            <div className="hero-bottom">
              <p>Escrevo interfaces, integrações e sistemas web. Gosto do que carrega rápido, explica-se sozinho e continua simples depois de crescer.</p>
              <a className="text-link" href="#trabalhos">Ver projetos <span aria-hidden="true">↘</span></a>
            </div>
          </div>
        </div>
        <div className="hero-index"><span>GABRIEL LOPES</span><span>MINAS GERAIS, BR</span></div>
      </section>

      <section className="projects-section section-shell" id="trabalhos">
        <div className="section-heading"><span>TRABALHOS SELECIONADOS</span><span>02 PROJETOS</span></div>
        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-row" key={project.title}>
              <div className="project-number">{project.number}</div>
              <a
                className="project-visual project-link"
                href={project.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Abrir o site ${project.title}`}
              >
                <Image
                  src={project.image}
                  alt={`Prévia do site ${project.title}`}
                  fill
                  sizes="(max-width: 900px) 100vw, 45vw"
                  className="project-image"
                />
              </a>
              <div className="project-info">
                <div><p>{project.year}</p><h2>{project.title}</h2></div>
                <p className="project-description">{project.description}</p>
                <ul aria-label="Tecnologias utilizadas">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Visitar o site ${project.title}`}>Visitar site <span aria-hidden="true">↗</span></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section section-shell" id="sobre">
        <div className="about-label"><span>02</span><p>SOBRE MIM</p></div>
        <div className="about-content">
          <p className="about-lead">Antes de abrir o editor, eu tento entender onde o produto trava.</p>
          <div className="about-columns">
            <p>Sou <strong>Gabriel Lopes</strong>, desenvolvedor full stack. Trabalho do primeiro rascunho ao deploy: estrutura, interface, API, banco de dados e os detalhes que fazem tudo funcionar junto.</p>
            <p>Prefiro decisões que possam ser explicadas, código que outra pessoa consiga manter e produtos que não precisem disputar a atenção de quem usa.</p>
          </div>
          <div className="skills-block">
            <span>TECNOLOGIAS E FERRAMENTAS</span>
            <ul>{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="contact-section section-shell" id="contato">
        <div className="contact-top"><span>CONTATO</span><span>VAMOS CONVERSAR</span></div>
        <h2>Tem um projeto em mente?</h2>
        <div className="contact-links">
          <a className="contact-link" href="mailto:gabrielllopesabreusilva@gmail.com">
            <span className="contact-channel">E-MAIL</span>
            <strong>Contato E-mail</strong>
            <span aria-hidden="true">↗</span>
          </a>
          <a className="contact-link" href="https://wa.me/5531972414433" target="_blank" rel="noreferrer">
            <span className="contact-channel">WHATSAPP</span>
            <strong>Contato no WhatsApp</strong>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="social-links" aria-label="Redes profissionais">
          <a href="https://github.com/Lopes-abreu" target="_blank" rel="noreferrer" aria-label="Abrir GitHub de Gabriel Lopes">
            <FaGithub aria-hidden="true" />
            <span><small>GITHUB</small><strong>@Lopes-abreu</strong></span>
            <i aria-hidden="true">↗</i>
          </a>
          <a href="https://www.linkedin.com/in/gabriellopesabreu/" target="_blank" rel="noreferrer" aria-label="Abrir LinkedIn de Gabriel Lopes">
            <FaLinkedinIn aria-hidden="true" />
            <span><small>LINKEDIN</small><strong>/in/gabriellopesabreu</strong></span>
            <i aria-hidden="true">↗</i>
          </a>
        </div>
        <footer>
          <p>© 2026 GABRIEL LOPES</p>
          <a href="#inicio">Voltar ao topo ↑</a>
        </footer>
      </section>
    </main>
  );
}

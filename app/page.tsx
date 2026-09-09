import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';

const projects = [
  { number: '01', title: 'Atlas Finance', description: 'Plataforma financeira com visão consolidada de indicadores, automações e relatórios para apoiar decisões em tempo real.', tags: ['React', 'TypeScript', 'Node.js'], year: '2026', tone: 'light' },
  { number: '02', title: 'Nexo Commerce', description: 'Experiência de compra direta e acessível, criada para reduzir atritos do catálogo ao pagamento.', tags: ['Next.js', 'Tailwind CSS', 'PostgreSQL'], year: '2025', tone: 'dark' },
  { number: '03', title: 'Fluxo Workspace', description: 'Ambiente colaborativo para equipes organizarem projetos, conversas e entregas em um único lugar.', tags: ['React', 'API REST', 'Design System'], year: '2025', tone: 'mid' },
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
        <div className="section-heading"><span>TRABALHOS SELECIONADOS</span><span>03 PROJETOS</span></div>
        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-row" key={project.title}>
              <div className="project-number">{project.number}</div>
              <div className={`project-visual ${project.tone}`}>
                <div className="project-poster">
                  <span className="poster-index">CASE / {project.number}</span>
                  <strong>{project.title}</strong>
                  <div className="poster-footer"><span>{project.year}</span><span>WEB DEVELOPMENT</span></div>
                </div>
              </div>
              <div className="project-info">
                <div><p>{project.year}</p><h2>{project.title}</h2></div>
                <p className="project-description">{project.description}</p>
                <ul aria-label="Tecnologias utilizadas">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                <a href="#contato" aria-label={`Conversar sobre ${project.title}`}>Ver detalhes <span aria-hidden="true">↗</span></a>
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
        <div className="contact-top"><span>03 / CONTATO</span><span>VAMOS CONVERSAR</span></div>
        <h2>Tem um projeto em mente?</h2>
        <div className="contact-links">
          <a className="contact-link" href="mailto:gabrielllopesabreusilva@gmail.com">
            <span className="contact-channel">E-MAIL</span>
            <strong>gabrielllopesabreusilva@gmail.com</strong>
            <span aria-hidden="true">↗</span>
          </a>
          <a className="contact-link" href="https://wa.me/5531972414433" target="_blank" rel="noreferrer">
            <span className="contact-channel">WHATSAPP</span>
            <strong>+55 31 97241-4433</strong>
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

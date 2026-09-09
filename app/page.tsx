import Image from 'next/image';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { FaCodeBranch, FaPlug, FaRobot, FaWandMagicSparkles } from 'react-icons/fa6';
import {
  SiGit,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import type { IconType } from 'react-icons';
import Header from '@/app/components/header';
import SocialRail from '@/app/components/social-rail';
import { projects, services, site, skills } from '@/app/lib/site';

const skillIcons: Record<string, IconType> = {
  React: SiReact,
  'Next.js': SiNextdotjs,
  TypeScript: SiTypescript,
  'Node.js': SiNodedotjs,
  Python: SiPython,
  'Automação de processos': FaWandMagicSparkles,
  'Inteligência artificial': FaRobot,
  'Tailwind CSS': SiTailwindcss,
  PostgreSQL: SiPostgresql,
  'APIs REST': FaPlug,
  Git: SiGit,
  Laravel: FaCodeBranch,
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#inicio">Pular para o conteúdo</a>
      <Header />
      <SocialRail />

      <main>
        <section className="hero section-shell" id="inicio">
          <div className="hero-grid">
            <div className="hero-copy reveal-up">
              <p className="eyebrow">Portfólio / 2026</p>
              <p className="hero-role">{site.role}</p>
              <h1>Gabriel<br />Lopes</h1>
              <p className="hero-lead">Projeto e construo <em>para a web.</em></p>
            </div>
            <aside className="hero-about reveal-up delay-1" id="sobre">
              <div className="hero-about-heading">
                <p>Sobre mim</p>
                <span>{site.location}</span>
              </div>
              <p className="hero-about-lead">Transformo problemas de negócio em produtos digitais claros, consistentes e prontos para crescer.</p>
              <div className="hero-about-focus">
                <span>Foco de atuação</span>
                <strong>Produto web · SaaS · Automação</strong>
              </div>
              <div className="hero-about-columns">
                <p>
                  Sou <strong>{site.name}</strong>, desenvolvedor full stack. Construo interfaces,
                  plataformas e integrações para transformar processos complexos em experiências
                  mais simples para quem usa.
                </p>
                <p>
                  Trabalho do primeiro rascunho ao deploy, conectando produto, frontend, APIs e
                  dados. Busco soluções rápidas, acessíveis e fáceis de evoluir — com decisões
                  técnicas que fazem sentido para o negócio.
                </p>
              </div>
              <div className="hero-skills">
                <span className="hero-skills-title">Tecnologias e ferramentas</span>
                <ul>
                  {skills.map((skill) => {
                    const Icon = skillIcons[skill];
                    return (
                      <li key={skill}>
                        <Icon aria-hidden="true" />
                        <span>{skill}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>
          </div>
          <div className="hero-bottom reveal-up delay-2">
            <p>
              Escrevo interfaces, integrações e sistemas web. Gosto do que carrega rápido,
              explica-se sozinho e continua simples depois de crescer.
            </p>
          </div>
          <div className="hero-index">
            <span>{site.name.toUpperCase()}</span>
            <span>{site.location.toUpperCase()}</span>
          </div>
        </section>

        <section className="projects-section section-shell" id="trabalhos">
          <div className="section-heading">
            <h2><span>01</span> Trabalhos selecionados</h2>
            <p>{String(projects.length).padStart(2, '0')} projetos</p>
          </div>
          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-row" key={project.title}>
                <div className="project-meta">
                  <span>{project.number}</span>
                  <span>{project.year}</span>
                </div>
                <a
                  className={`project-visual project-link project-visual--${project.theme}`}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir o site ${project.title}`}
                >
                  <Image
                    src={project.image}
                    alt={`Prévia do site ${project.title}`}
                    fill
                    sizes="(max-width: 900px) 100vw, 48vw"
                    className="project-image"
                  />
                </a>
                <div className="project-info">
                  <p>{project.role}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <ul aria-label="Tecnologias utilizadas">
                    {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    Visitar site <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="services-section section-shell" id="servicos">
          <div className="section-heading">
            <h2><span>03</span> Como posso ajudar</h2>
            <p>Do rascunho ao deploy</p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section section-shell" id="contato">
          <div className="section-heading">
            <h2><span>04</span> Contato</h2>
            <p>Vamos conversar</p>
          </div>
          <p className="contact-lead">Tem um projeto em mente?</p>
          <div className="contact-links">
            <a className="contact-link" href={`mailto:${site.email}`}>
              <span className="contact-channel">E-mail</span>
              <strong>{site.email}</strong>
              <span aria-hidden="true">↗</span>
            </a>
            <a className="contact-link" href={site.whatsapp.href} target="_blank" rel="noopener noreferrer">
              <span className="contact-channel">WhatsApp</span>
              <strong>{site.whatsapp.label}</strong>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="social-links" aria-label="Redes profissionais">
            <a href={site.github.href} target="_blank" rel="noopener noreferrer" aria-label="Abrir GitHub de Gabriel Lopes">
              <FaGithub aria-hidden="true" />
              <span>
                <small>GitHub</small>
                <strong>{site.github.label}</strong>
              </span>
              <i aria-hidden="true">↗</i>
            </a>
            <a href={site.linkedin.href} target="_blank" rel="noopener noreferrer" aria-label="Abrir LinkedIn de Gabriel Lopes">
              <FaLinkedinIn aria-hidden="true" />
              <span>
                <small>LinkedIn</small>
                <strong>{site.linkedin.label}</strong>
              </span>
              <i aria-hidden="true">↗</i>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p>{site.role} · {site.location}</p>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </>
  );
}

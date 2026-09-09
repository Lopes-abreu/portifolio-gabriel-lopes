import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { site } from '@/app/lib/site';

export default function SocialRail() {
  return (
    <>
      <aside className="social-rail social-rail-left" aria-label="Redes profissionais">
        <a href={site.github.href} target="_blank" rel="noopener noreferrer" aria-label="Abrir GitHub de Gabriel Lopes">
          <FaGithub aria-hidden="true" />
        </a>
        <a href={site.linkedin.href} target="_blank" rel="noopener noreferrer" aria-label="Abrir LinkedIn de Gabriel Lopes">
          <FaLinkedinIn aria-hidden="true" />
        </a>
        <span aria-hidden="true" />
      </aside>
      <aside className="social-rail social-rail-right">
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <span aria-hidden="true" />
      </aside>
    </>
  );
}

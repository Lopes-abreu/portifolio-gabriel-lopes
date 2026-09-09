'use client';

import { useEffect, useState } from 'react';
import { navLinks, site } from '@/app/lib/site';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#inicio');

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > lastY && y > 120 && !open && window.matchMedia('(min-width: 761px)').matches);
      lastY = y;
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [open]);

  useEffect(() => {
    const sections = ['inicio', 'trabalhos', 'sobre', 'servicos', 'contato']
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.classList.remove('nav-open');
    };
  }, [open]);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}${hidden ? ' is-hidden' : ''}`}>
      <a className="brand" href="#inicio" aria-label="Ir para o início">
        <span className="brand-mark" aria-hidden="true">GL</span>
        <span>{site.name}</span>
      </a>

      <nav className="desktop-nav" aria-label="Navegação principal">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={active === link.href ? 'is-active' : undefined}
            aria-current={active === link.href ? 'location' : undefined}
            onClick={() => setHidden(false)}
          >
            <span>{link.index}</span>
            {link.label}
          </a>
        ))}
      </nav>

      <a className="availability" href="#contato">
        <span aria-hidden="true" />
        Disponível para projetos
      </a>

      <button
        type="button"
        className={`menu-toggle${open ? ' is-open' : ''}`}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      <div
        id="mobile-nav"
        className={`mobile-nav${open ? ' is-open' : ''}`}
        hidden={!open}
      >
        <nav aria-label="Navegação mobile">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              <span>{link.index}</span>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="mobile-cta" href="#contato" onClick={() => setOpen(false)}>
          Disponível para projetos
        </a>
      </div>
    </header>
  );
}

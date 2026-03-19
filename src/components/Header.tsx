import React, { useState, useEffect } from 'react';
import { LanguagePicker } from './LanguagePicker';
import { useTranslations } from '../i18n/utils';
import type { ui } from '../i18n/ui';

export function Header({ currentLang, currentPath, isHome = false }: { currentLang: keyof typeof ui, currentPath: string, isHome?: boolean }) {
  const t = useTranslations(currentLang);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const basePath = currentLang === 'en' ? '' : `/${currentLang}`;

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${!isHome ? 'bg-zinc-950 py-3 shadow-xl' : scrolled ? 'bg-zinc-900/90 backdrop-blur-md shadow-xl py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 cursor-pointer hover:scale-105 transition-transform z-50 relative">
            <a href={`${basePath}/`} className="text-2xl md:text-3xl font-black tracking-tight text-white drop-shadow-md">
              MAPLE DINE
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href={`${basePath}/`} className="text-sm font-medium text-white hover:text-neon transition-colors drop-shadow-sm">{t('nav.home') as string}</a>
            <a href={`${basePath}/menu`} className="text-sm font-medium text-white hover:text-neon transition-colors drop-shadow-sm">{t('nav.menu') as string}</a>
            <a href={`${basePath}/contact`} className="text-sm font-medium text-white hover:text-neon transition-colors drop-shadow-sm">{t('nav.contact') as string}</a>
          </nav>
          <div className="flex items-center space-x-4 z-50 relative">
            <LanguagePicker currentLang={currentLang as string} currentPath={currentPath} />
            <button
              className="md:hidden text-white hover:text-neon transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-zinc-950/95 backdrop-blur-xl z-40 transition-transform duration-300 flex flex-col items-center justify-center space-y-8 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <a href={`${basePath}/`} onClick={() => setMobileMenuOpen(false)} className="text-2xl font-black text-white hover:text-neon transition-colors">{t('nav.home') as string}</a>
        <a href={`${basePath}/menu`} onClick={() => setMobileMenuOpen(false)} className="text-2xl font-black text-white hover:text-neon transition-colors">{t('nav.menu') as string}</a>
        <a href={`${basePath}/contact`} onClick={() => setMobileMenuOpen(false)} className="text-2xl font-black text-white hover:text-neon transition-colors">{t('nav.contact') as string}</a>
      </div>
    </header>
  );
}

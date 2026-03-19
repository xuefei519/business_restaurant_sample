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

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-zinc-950 shadow-2xl border-t border-zinc-900 transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-64 opacity-100 py-4' : 'max-h-0 opacity-0 py-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          <a href={`${basePath}/`} onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-white hover:text-amber-500 transition-colors">{t('nav.home') as string}</a>
          <a href={`${basePath}/menu`} onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-white hover:text-amber-500 transition-colors">{t('nav.menu') as string}</a>
          <a href={`${basePath}/contact`} onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-white hover:text-amber-500 transition-colors">{t('nav.contact') as string}</a>
        </div>
      </div>
    </header>
  );
}

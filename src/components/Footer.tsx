import React from 'react';
import { useTranslations } from '../i18n/utils';
import type { ui } from '../i18n/ui';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

export function Footer({ currentLang }: { currentLang: keyof typeof ui }) {
  const t = useTranslations(currentLang);
  const basePath = currentLang === 'en' ? '' : `/${currentLang}`;
  
  return (
    <footer className="bg-zinc-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Logo and Contact col */}
          <div className="col-span-1 md:col-span-1 flex flex-col items-start">
            <a href={`${basePath}/`} className="text-3xl font-black tracking-tight text-white mb-6">
              MAPLE DINE
            </a>
            <div className="flex items-center space-x-2 text-zinc-400 mb-2">
              <svg className="w-5 h-5 text-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <span className="text-sm">booking@rstkyg.com</span>
            </div>
            <div className="flex items-center space-x-2 text-zinc-400 mb-8">
              <svg className="w-5 h-5 text-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              <span className="text-sm">+123 456 7890</span>
            </div>
          </div>

          {/* Links cols */}

          {/* Open At col */}
          <div className="col-span-1 flex flex-col space-y-4">
            <h4 className="text-lg font-bold mb-2">{t('footer.openAt') as string}</h4>
            <div className="flex justify-between text-sm text-zinc-400 border-b border-zinc-800 pb-2">
              <span>{t('footer.days.monday') as string}</span>
              <span>10:30 - 21:00</span>
            </div>
            <div className="flex justify-between text-sm text-zinc-400 border-b border-zinc-800 pb-2">
              <span>{t('footer.days.tuesday') as string}</span>
              <span>10:30 - 21:00</span>
            </div>
            <div className="flex justify-between text-sm text-zinc-400 border-b border-zinc-800 pb-2">
              <span>{t('footer.days.wednesday') as string}</span>
              <span>10:30 - 21:00</span>
            </div>
            <div className="flex justify-between text-sm text-zinc-400 border-b border-zinc-800 pb-2">
              <span>{t('footer.days.thursday') as string}</span>
              <span>10:30 - 21:00</span>
            </div>
            <div className="flex justify-between text-sm text-zinc-400 border-b border-zinc-800 pb-2">
              <span>{t('footer.days.friday') as string}</span>
              <span>10:00 - 22:00</span>
            </div>
            <div className="flex justify-between text-sm text-zinc-400 border-b border-zinc-800 pb-2">
              <span>{t('footer.days.saturday') as string}</span>
              <span>10:00 - 22:00</span>
            </div>
            <div className="flex justify-between text-sm text-zinc-400">
              <span>{t('footer.days.sunday') as string}</span>
              <span>10:30 - 21:00</span>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="hover:text-neon p-2 bg-zinc-900 rounded-full transition-colors flex items-center justify-center w-10 h-10"><FaInstagram size={18} /></a>
            <a href="#" className="hover:text-neon p-2 bg-zinc-900 rounded-full transition-colors flex items-center justify-center w-10 h-10"><FaFacebookF size={18} /></a>
            <a href="#" className="hover:text-neon p-2 bg-zinc-900 rounded-full transition-colors flex items-center justify-center w-10 h-10"><FaTwitter size={18} /></a>
            <a href="#" className="hover:text-neon p-2 bg-zinc-900 rounded-full transition-colors flex items-center justify-center w-10 h-10"><FaYoutube size={18} /></a>
          </div>
          <p>
            &copy; {new Date().getFullYear()} Maple Dine. {t('footer.rights') as string}
          </p>
        </div>
      </div>
    </footer>
  );
}

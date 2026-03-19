import React from 'react';
import { languages, defaultLang, ui } from '../i18n/ui';

export function LanguagePicker({ currentLang, currentPath }: { currentLang: string, currentPath: string }) {
  const getPathForLang = (lang: string) => {
    const parts = currentPath.split('/').filter(Boolean);
    const hasLangPrefix = parts.length > 0 && Object.keys(languages).includes(parts[0]);
    
    // If target is default lang, remove prefix
    if (lang === defaultLang) {
      if (hasLangPrefix) parts.shift();
    } else {
      if (hasLangPrefix) parts[0] = lang;
      else parts.unshift(lang);
    }
    
    return '/' + parts.join('/');
  };

  return (
    <div className="flex items-center space-x-1 sm:space-x-3 bg-white/10 p-1 rounded-full backdrop-blur-md border border-white/20 shadow-lg">
      {Object.entries(languages).map(([lang, label]) => {
        const isActive = currentLang === lang;
        return (
          <a 
            key={lang}
            href={getPathForLang(lang)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 ease-in-out ${
              isActive 
                ? 'bg-amber-500 text-white shadow-md transform scale-105' 
                : 'text-zinc-700 hover:bg-zinc-100 hover:text-amber-600 dark:text-zinc-200 dark:hover:bg-zinc-800'
            }`}
          >
            {label}
          </a>
        );
      })}
    </div>
  );
}

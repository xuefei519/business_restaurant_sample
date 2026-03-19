import React from 'react';

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  image?: string;
  badges?: string[];
}

export function MenuItem({ name, description, price, image, badges }: MenuItemProps) {
  return (
    <div className="group relative flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-amber-500/30 transition-all duration-500">
      {image && (
        <div className="w-full md:w-32 h-32 flex-shrink-0 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>
      )}
      <div className="flex-grow flex flex-col justify-center">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{name}</h3>
          <span className="text-lg font-black text-amber-500 tracking-tight">{price}</span>
        </div>
        <div className="flex gap-2 mb-3 flex-wrap">
          {badges?.map(badge => (
            <span key={badge} className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-500">
              {badge}
            </span>
          ))}
        </div>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

import React from 'react';

interface MenuCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  rating?: number;
}

export function MenuCard({ image, title, description, price, rating = 5 }: MenuCardProps) {
  return (
    <div className="flex flex-col">
      <div className="w-full aspect-square mb-4 overflow-hidden rounded-sm bg-zinc-800">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-zinc-400 mb-4 flex-grow">
        {description}
      </p>
      <div className="flex items-center justify-between border-t border-zinc-800 pt-4 mt-auto">
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <svg 
              key={i} 
              className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-neon' : i < rating ? 'text-neon opacity-50' : 'text-zinc-700'}`} 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-white font-bold">{price}</span>
      </div>
    </div>
  );
}

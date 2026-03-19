import React from 'react';

interface ArticleCardProps {
  image: string;
  title: string;
  description: string;
}

export function ArticleCard({ image, title, description }: ArticleCardProps) {
  return (
    <div className="flex flex-col">
      <div className="w-full aspect-square md:aspect-[4/3] mb-6 overflow-hidden bg-zinc-800">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-2xl font-black text-black tracking-tight mb-3 leading-tight">{title}</h3>
      <p className="text-sm text-black/80 font-medium">
        {description}
      </p>
    </div>
  );
}

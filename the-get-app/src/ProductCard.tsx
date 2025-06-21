interface ProductCardProps {
  imageSrc: string;
  title: string;
  category: string;
  price: string;
  href: string;
}

export default function ProductCard({
  imageSrc,
  title,
  category,
  price
}: ProductCardProps) {
 

  return (
    <div
    
      role="button"
      tabIndex={0}
    
    >
      {/* Картинка */}
      <div className="w-full h-[220px] overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 ease-in-out
                     hover:scale-105"
          loading="lazy"
          draggable={false}
        />
      </div>

      {/* Текстовая часть */}
      <div className="p-3 flex flex-col gap-1 text-left">
        <h2 className="text-sm font-semibold text-[#0f0f0f] line-clamp-2">
          {title}
        </h2>
        <p className="text-xs text-[#0f0f0f]">{category}</p>
        <div className="flex items-center justify-between pt-2">
          <p className="text-md font-bold text-[#0f0f0f]">{price}</p>
        </div>
      </div>
    </div>
  );
}

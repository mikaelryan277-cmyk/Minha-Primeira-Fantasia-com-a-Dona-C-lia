import React from 'react';
import { useNavigate } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { COURSE_CONFIG } from '../config';

export const Carousel = () => {
  const navigate = useNavigate();
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'center', 
    slidesToScroll: 1,
    containScroll: 'trimSnaps' 
  });
  const [activeCard, setActiveCard] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setActiveCard(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-4">
        {COURSE_CONFIG.modules.map((m, index) => (
          <motion.div 
            key={m.id}
            animate={{ scale: index === activeCard ? 1 : 0.96 }}
            className="min-w-[85%] bg-white p-2 rounded-3xl shadow-lg flex flex-col select-none"
            onClick={() => navigate(`/lessons/${m.id}`)}
          >
            <img 
              src={m.coverImageUrl} 
              alt={m.title} 
              className="w-full aspect-video object-cover rounded-2xl mb-4 pointer-events-none" 
              draggable="false"
            />
            <div className="p-2">
              <h3 className="font-bold text-[#E91E63] text-sm">MÓDULO {m.id}</h3>
              <p className="font-bold text-[#481B37] text-lg mb-1">{m.title}</p>
              <p className="text-gray-500 text-sm mb-4 line-clamp-2">{m.description}</p>
              <button className="bg-[#E91E63] text-white w-full py-3 rounded-xl font-bold transition-transform active:scale-95">
                ASSISTIR AULA
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

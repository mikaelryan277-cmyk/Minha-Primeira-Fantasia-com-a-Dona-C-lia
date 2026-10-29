import React from 'react';
import { motion } from 'framer-motion';
import { COURSE_CONFIG } from '../config';
import { Layout } from '../components/Layout';
import { Button } from '../components/Button';

export const ContentLibraryPage = () => {
  return (
    <Layout>
      <div className="p-6 space-y-6">
        <header className="space-y-2">
          <h1 className="text-2xl font-bold text-[#481B37]">Mais moldes para você! ❤️</h1>
          <p className="text-gray-600">Descubra novos modelinhos para suas próximas costuras.</p>
          <div className="bg-[#FFF0F5] border border-[#E91E63]/20 text-[#481B37] p-4 rounded-2xl text-sm">
            💗 Já comprou algum desses pacotes? Pode desconsiderar essa oferta e aproveitar seus materiais!
          </div>
        </header>

        <div className="space-y-6">
          {COURSE_CONFIG.libraryOffers.map((offer) => (
            <motion.div 
              key={offer.id} 
              className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100"
              whileHover={{ scale: 1.01 }}
            >
              <img src={offer.imageUrl} alt={offer.title} className="w-full aspect-video object-cover" />
              <div className="p-5 space-y-2">
                <h2 className="font-bold text-[#481B37] text-xl">{offer.title}</h2>
                <p className="text-gray-600 text-sm">{offer.description}</p>
                <div className="text-2xl font-bold text-[#E91E63] py-2">{offer.price}</div>
                <Button onClick={() => offer.checkoutUrl !== '#' && window.open(offer.checkoutUrl, '_blank')}>
                  {offer.buttonText}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

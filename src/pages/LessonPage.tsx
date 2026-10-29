import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { COURSE_CONFIG } from '../config';
import { useProgress } from '../context/AppContext';
import { Button } from '../components/Button';
import { Layout } from '../components/Layout';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

import confetti from 'canvas-confetti';

export const LessonPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const moduleId = parseInt(id || '1');
  const module = COURSE_CONFIG.modules.find(m => m.id === moduleId);
  const { completedModules, toggleModule } = useProgress();

  const handleToggle = () => {
    if (!completedModules.includes(moduleId) && moduleId === 5) {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
    toggleModule(moduleId);
  };

  if (!module) return <div>Aula não encontrada</div>;

  return (
    <Layout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 space-y-6">
        <button onClick={() => navigate('/lessons')} className="flex items-center text-gray-500">
          <ChevronLeft size={20} /> Voltar
        </button>

        <h1 className="text-xl font-bold text-[#481B37]">Módulo {module.id}: {module.title}</h1>
        
        <div className="aspect-video bg-gray-900 rounded-3xl overflow-hidden shadow-lg">
          {module.videoUrl ? (
            <iframe 
              className="w-full h-full"
              src={module.videoUrl.replace('watch?v=', 'embed/')} 
              title={module.title}
              allowFullScreen
            />
          ) : (
            <div className="flex items-center justify-center h-full text-white p-6 text-center">
              Em breve, sua aula estará disponível por aqui! ❤️
            </div>
          )}
        </div>

        <p className="text-gray-700">{module.description}</p>

        <Button onClick={handleToggle} variant={completedModules.includes(moduleId) ? 'secondary' : 'primary'}>
          {completedModules.includes(moduleId) ? 'AULA CONCLUÍDA ✓' : 'MARCAR COMO CONCLUÍDA'}
        </Button>

        <div className="flex gap-4">
          <Button disabled={moduleId === 1} onClick={() => navigate(`/lessons/${moduleId - 1}`)}>
            <ChevronLeft size={20} />
          </Button>
          <Button disabled={moduleId === 5} onClick={() => navigate(`/lessons/${moduleId + 1}`)}>
            <ChevronRight size={20} />
          </Button>
        </div>
      </motion.div>
    </Layout>
  );
};

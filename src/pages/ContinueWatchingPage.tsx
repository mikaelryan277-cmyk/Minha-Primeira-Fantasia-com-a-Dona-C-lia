import React from 'react';
import { motion } from 'framer-motion';
import { COURSE_CONFIG } from '../config';
import { useProgress } from '../context/AppContext';
import { Button } from '../components/Button';
import { Layout } from '../components/Layout';
import { Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ContinueWatchingPage = () => {
  const { completedModules } = useProgress();
  const navigate = useNavigate();
  const nextLessonId = completedModules.length + 1;
  const lastLesson = COURSE_CONFIG.modules.find(m => m.id === nextLessonId) || COURSE_CONFIG.modules[0];

  return (
    <Layout>
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-bold text-[#481B37]">Continuar assistindo</h1>
        {completedModules.length < COURSE_CONFIG.modules.length ? (
          <div className="bg-white p-6 rounded-3xl shadow-sm">
            <h2 className="font-bold text-[#E91E63]">{lastLesson.title}</h2>
            <p className="text-gray-600 mb-4">{lastLesson.description}</p>
            <Button onClick={() => navigate(`/lessons/${lastLesson.id}`)}>CONTINUAR ASSISTINDO</Button>
          </div>
        ) : (
          <div className="text-center p-10">🎉 Parabéns, você concluiu todas as aulas!</div>
        )}
      </div>
    </Layout>
  );
};

import { motion } from 'framer-motion';
import { COURSE_CONFIG } from '../config';
import { useProgress } from '../context/AppContext';
import { Button } from '../components/Button';
import { Layout } from '../components/Layout';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, User, Play, BookOpen } from 'lucide-react';
import { Carousel } from '../components/Carousel';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const DashboardPage = () => {
  const { completedModules, userSettings } = useProgress();
  const navigate = useNavigate();
  const progress = (completedModules.length / COURSE_CONFIG.modules.length) * 100;

  return (
    <Layout>
      <motion.div variants={containerVariants} initial="hidden" animate="show" className="p-6 space-y-8">
        <motion.header variants={itemVariants} className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-[#481B37]">Olá, {userSettings.name}! ❤️</h1>
            <p className="text-gray-600">Que tal dar mais um passo na sua primeira fantasia?</p>
          </div>
          <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-xl">{userSettings.avatar}</div>
        </motion.header>

        <motion.section variants={itemVariants} className="bg-white p-6 rounded-3xl shadow-sm border border-pink-100">
          <h2 className="text-sm font-bold text-[#481B37] mb-2">CONTINUAR APRENDENDO</h2>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-pink-100 rounded-xl flex items-center justify-center"><BookOpen className="text-[#E91E63]" /></div>
            <div className="flex-1">
              <p className="font-bold text-[#481B37]">{COURSE_CONFIG.modules[completedModules.length]?.title || 'Você concluiu tudo!'}</p>
              <p className="text-sm text-gray-500">{progress.toFixed(0)}% concluído</p>
            </div>
          </div>
          <Button onClick={() => navigate(`/lessons/${completedModules.length + 1 || 1}`)}>
            {completedModules.length < COURSE_CONFIG.modules.length ? 'CONTINUAR ASSISTINDO' : 'RECOMEÇAR'}
          </Button>
        </motion.section>

        <motion.section variants={itemVariants}>
          <h2 className="text-xl font-bold text-[#481B37] mb-4 px-2">Sua jornada de costura 🧵</h2>
          <Carousel />
        </motion.section>

        <motion.section variants={itemVariants} className="bg-white p-6 rounded-3xl shadow-sm">
          <h3 className="font-bold text-[#481B37] mb-4">Progresso Geral</h3>
          <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
            <motion.div className="bg-[#E91E63] h-full" initial={{ width: 0 }} animate={{ width: `${progress}%` }} />
          </div>
          <p className="text-sm text-gray-500 mt-2">{completedModules.length} de 5 aulas concluídas</p>
        </motion.section>
      </motion.div>
    </Layout>
  );
};

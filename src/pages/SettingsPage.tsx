import React from 'react';
import { useAuth, useProgress } from '../context/AppContext';
import { Button } from '../components/Button';
import { Layout } from '../components/Layout';

export const SettingsPage = () => {
  const { logout } = useAuth();
  const { resetProgress, userSettings, updateSettings } = useProgress();

  return (
    <Layout>
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-bold text-[#481B37]">Ajustes</h1>
        <div className="bg-white p-6 rounded-3xl shadow-sm space-y-4">
          <div>
            <label className="block text-sm font-bold">Nome</label>
            <input value={userSettings.name} onChange={(e) => updateSettings({ name: e.target.value })} className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-bold">Tema</label>
            <select value={userSettings.theme} onChange={(e) => updateSettings({ theme: e.target.value as any })} className="w-full p-2 border rounded">
              <option value="light">Claro</option>
              <option value="dark">Escuro</option>
            </select>
          </div>
          <Button onClick={resetProgress} variant="secondary">RECOMEÇAR PROGRESSO</Button>
          <Button onClick={logout}>SAIR DA CONTA</Button>
        </div>
      </div>
    </Layout>
  );
};

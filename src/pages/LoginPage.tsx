import React, { useState } from 'react';
import { useAuth } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Eye, EyeOff } from 'lucide-react';

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'costureira' && password === 'costureira@123') {
      login(username);
      navigate('/');
    } else {
      alert('Usuário ou senha incorretos.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#FFF9F5]">
      <h1 className="text-3xl font-bold text-[#481B37] mb-8">Dona Célia</h1>
      <div className="w-full max-w-sm bg-white p-8 rounded-3xl shadow-xl">
        <h2 className="text-xl font-bold text-[#E91E63] mb-2">Seu cantinho de costura está prontinho! ❤️</h2>
        <p className="text-gray-600 mb-6">Entre para continuar sua primeira fantasia.</p>
        <form onSubmit={handleLogin} className="space-y-4">
          <input 
            type="text" 
            placeholder="Usuário" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-4 rounded-xl border border-gray-200"
          />
          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 rounded-xl border border-gray-200"
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4 text-gray-400"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <Button type="submit">ENTRAR NAS MINHAS AULAS</Button>
        </form>
      </div>

      {/* Demo Login Card */}
      <div className="w-full max-w-sm mt-8 bg-[#FFF0F5] p-6 rounded-3xl border-2 border-[#E91E63]/20 shadow-inner">
        <h3 className="text-lg font-bold text-[#E91E63] mb-4 text-center">🔑 Acesso de Demonstração</h3>
        <div className="text-[#481B37] space-y-2 mb-4">
          <p>👤 <strong>Usuário:</strong> costureira</p>
          <p>🔒 <strong>Senha:</strong> costureira@123</p>
        </div>
        <Button 
          variant="secondary" 
          onClick={() => {
            setUsername('costureira');
            setPassword('costureira@123');
          }}
        >
          Preencher automaticamente
        </Button>
      </div>
    </div>
  );
};

import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Play, BookOpen, Library, Settings } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navItems = [
    { to: '/', icon: LayoutDashboard, label: 'Início' },
    { to: '/continue', icon: Play, label: 'Continuar' },
    { to: '/library', icon: Library, label: 'Conteúdos' },
    { to: '/settings', icon: Settings, label: 'Ajustes' },
  ];

  return (
    <div className="min-h-screen bg-[#FFF9F5] pb-20 md:pb-0 md:pl-64">
      {/* Desktop Sidebar */}
      <nav className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 p-6 gap-6">
        <h1 className="text-xl font-bold text-[#481B37]">Dona Célia</h1>
        {navItems.map(item => (
          <NavLink key={item.to} to={item.to} className={({isActive}) => `flex items-center gap-3 ${isActive ? 'text-[#E91E63]' : 'text-gray-500'}`}>
            <item.icon size={20} /> {item.label}
          </NavLink>
        ))}
      </nav>

      <main className="max-w-2xl mx-auto">{children}</main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2 flex justify-around">
        {navItems.map(item => (
          <NavLink key={item.to} to={item.to} className={({isActive}) => `flex flex-col items-center p-2 ${isActive ? 'text-[#E91E63]' : 'text-gray-500'}`}>
            <item.icon size={20} />
            <span className="text-[10px]">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

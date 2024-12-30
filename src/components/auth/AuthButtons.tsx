import React, { useState } from 'react';
import AuthModal from './AuthModal';

export default function AuthButtons() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  const openModal = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => openModal('login')}
          className="px-4 py-2 text-blue-400 hover:text-blue-300 transition-colors"
        >
          Login
        </button>
        <button
          onClick={() => openModal('register')}
          className="px-4 py-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-lg text-blue-400 hover:bg-blue-600/30 transition-all shadow-sm shadow-blue-400/20"
        >
          Register
        </button>
      </div>
      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode={authMode}
        onSwitchMode={(mode) => setAuthMode(mode)}
      />
    </>
  );
}
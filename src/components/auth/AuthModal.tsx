import React, { useState } from 'react';
import { X } from 'lucide-react';
import AuthForm from './AuthForm';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'login' | 'register';
  onSwitchMode: (mode: 'login' | 'register') => void;
}

export default function AuthModal({ isOpen, onClose, mode, onSwitchMode }: AuthModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-gray-900/90 backdrop-blur-md p-8 rounded-lg w-full max-w-md relative border border-blue-500/20 shadow-xl shadow-blue-500/10">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        
        <h2 className="text-2xl font-bold text-blue-400 mb-6 animate-[neonPulse_2s_ease-in-out_infinite]">
          {mode === 'login' ? 'Welcome Back' : 'Create Account'}
        </h2>
        
        <AuthForm mode={mode} onSubmit={onClose} />
        
        <div className="mt-4 text-center text-sm text-gray-400">
          {mode === 'login' ? (
            <>
              Don't have an account?{' '}
              <button
                onClick={() => onSwitchMode('register')}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Register
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                onClick={() => onSwitchMode('login')}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
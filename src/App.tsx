import React, { useState } from 'react';
import { Login } from './components/Login';
import { Pokedex } from './components/Pokedex';
import { PokemonCMS } from './components/PokemonCMS';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [view, setView] = useState<'pokedex' | 'cms'>('pokedex');

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setView('pokedex'); // Reset view on logout
  };

  return (
    <div className="font-sans antialiased text-slate-900">
      {isAuthenticated ? (
        view === 'cms' ? (
          <PokemonCMS onBack={() => setView('pokedex')} />
        ) : (
          <Pokedex 
            onLogout={handleLogout} 
            onOpenCMS={() => setView('cms')}
          />
        )
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

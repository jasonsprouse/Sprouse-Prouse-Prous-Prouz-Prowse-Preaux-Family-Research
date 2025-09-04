'use client'

import { Navigation } from '../Navigation/Navigation';

interface HeaderProps {
  className?: string;
}

export function Header({ className = '' }: HeaderProps) {
  return (
    <header className={`w-full ${className}`}>
      <Navigation className="glass backdrop-blur-md border-b border-white/20" />
    </header>
  );
}

export default Header;

import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center">
      <h1 className="text-5xl md:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-300 to-rose-500">
        Brain Board
      </h1>
      <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
        Welcome to the tech challenge! When you land on a ladder, complete a task to climb.
        Land on a snake, and you must beat the challenge to avoid sliding down. Good luck!
      </p>
    </header>
  );
};

export default Header;

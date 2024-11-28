import React from 'react';
import { Code } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2">
            <Code className="h-6 w-6" />
            <span className="text-xl font-bold">MHM</span>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-sm">
            <span>© {currentYear} MHM. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 
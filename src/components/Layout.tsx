import React from 'react';
import { Link, useLocation } from 'react-router-dom';
export const Layout = ({
  children
}) => {
  const location = useLocation();
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  const navLinkClass = (path: string) => `px-4 py-2 rounded-lg transition-colors ${isActive(path) ? 'bg-blue-800 text-white' : 'text-blue-100 hover:bg-blue-800/50'}`;
  return <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-900 text-white py-6 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <h1 className="text-3xl font-bold">AlphaMole</h1>
              <p className="text-blue-200">
                Neural Network Compound Stability Predictor
              </p>
            </Link>
            <nav>
              <ul className="flex space-x-2">
                <li>
                  <Link to="/blog" className={navLinkClass('/blog')}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/changes" className={navLinkClass('/changes')}>
                    Changes
                  </Link>
                </li>
                <li>
                  <Link to="/checklists" className={navLinkClass('/checklists')}>
                    Checklists
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-gray-100 mt-12 py-6 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>AlphaMole - Neural Network Compound Stability Prediction</p>
        </div>
      </footer>
    </div>;
};
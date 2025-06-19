import React from 'react';
import { Link } from 'react-router-dom';

const changes = [
  {
    id: '009',
    date: 'June 19, 2025',
    title: 'AlphaMole v2 Launch & ChemStability Integration',
    description:
      'Official launch of AlphaMole v2, merging all ChemStability AI React pages, unifying the codebase, and setting a new foundation for future development.',
    filename: 'changelog009.html',
  },
  {
    id: '008',
    date: 'June 12, 2025',
    title: "App Fixes, React Migration, and Styling Enhancements",
    description:
      "Streamlined AlphaMole as a React app, resolved centering issues, standardized styling across changelog and blog entries, and removed duplicate titles for a cleaner presentation.",
    filename: 'changelog008.html',
  },
  {
    id: '007',
    date: 'June 7, 2025',
    title: 'Sprint 2 Launch and Enhanced Analysis',
    description:
      'Launched Sprint 2, implemented table-based stability indicators, enhanced project organization, and improved navigation and documentation.',
    filename: 'changelog007.html',
  },
  {
    id: '006',
    date: 'May 26, 2025',
    title: 'Stability Indicators Enhancement',
    description:
      'Added detailed stability metrics: atom counts, element distribution, valence electron info, and real-time updates for molecular analysis.',
    filename: 'changelog006.html',
  },
  {
    id: '005',
    date: 'May 20, 2025',
    title: 'Standardization and Color Overhaul',
    description:
      'Recreated folder structure, restored elements.json, updated color scheme, and added AlphaMain/AlphaTest containers for better organization.',
    filename: 'changelog005.html',
  },
  {
    id: '004',
    date: 'May 12, 2025',
    title: 'Unified Navigation Bar',
    description:
      'Unified navigation bar with modern glassmorphism, improved mobile responsiveness, and dynamic loading for consistency across all pages.',
    filename: 'changelog004.html',
  },
  {
    id: '003',
    date: 'May 11, 2025',
    title: 'Phase 0 Checklist and Structure',
    description:
      'Created comprehensive Phase 0 checklist, defined project structure, established repo guidelines, and improved code snippet formatting.',
    filename: 'changelog003.html',
  },
  {
    id: '002',
    date: 'May 5, 2025',
    title: 'GitHub Setup and Deployment',
    description:
      'Set up GitHub repository, configured custom domain, enhanced blog system, improved site structure, and streamlined deployment.',
    filename: 'changelog002.html',
  },
  {
    id: '001',
    date: 'May 4, 2025',
    title: 'Initial Setup and Features',
    description:
      'Created initial AlphaMole structure, dynamic periodic table, glassmorphism UI, element selector, bond visualization, and documentation systems.',
    filename: 'changelog001.html',
  },
];

export const Changes = () => {
  return (
    <div className="w-full">
      <div className="bg-gradient-to-br from-emerald-400 to-teal-800 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">AlphaMole Changelog</h1>
          <p className="text-xl">
            Tracking the evolution of our molecular neural network
          </p>
        </div>
      </div>
      <div className="container mx-auto max-w-4xl px-4 py-8 flex flex-col gap-6">
        {changes.map((change) => (
          <Link
            key={change.id}
            to={`/changes/${change.id}`}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="text-emerald-600 mb-2 font-bold">Changelog #{change.id}</div>
            <div className="text-gray-500 text-sm mb-2">{change.date}</div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              {change.title}
            </h2>
            <p className="text-gray-600">{change.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
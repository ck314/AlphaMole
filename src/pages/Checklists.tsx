import React from 'react';
import { Link } from 'react-router-dom';
export const Checklists = () => {
  const checklists = [{
    id: '002',
    date: 'June 7, 2025',
    title: 'Sprint 2 Checklist',
    description: 'Implementation of basic composition features and data pipeline for molecular analysis.',
    link: '/sprint2'
  }, {
    id: '001',
    date: 'May 11, 2025',
    title: 'Sprint 1 Checklist',
    description: 'Comprehensive checklist for setting up the AlphaMole project.',
    link: '/sprint1'
  }];
  return <div className="w-full">
      <div className="bg-gradient-to-br from-emerald-400 to-teal-800 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">
            AlphaMole Sprint Checklists
          </h1>
          <p className="text-xl">
            Detailed Sprint checklists for the AlphaMole Web Showcase
          </p>
        </div>
      </div>
      <div className="container mx-auto max-w-4xl px-4 py-8">
        {checklists.map(checklist => <Link key={checklist.id} to={checklist.link} className="block mb-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-emerald-600 mb-2">
                Checklist #{checklist.id}
              </div>
              <div className="text-gray-500 text-sm mb-2">{checklist.date}</div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                {checklist.title}
              </h2>
              <p className="text-gray-600">{checklist.description}</p>
            </div>
          </Link>)}
      </div>
    </div>;
};
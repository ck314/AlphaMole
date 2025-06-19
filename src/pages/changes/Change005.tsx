import React from 'react';

export default function Change005() {
  return (
    <div className="change-content max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md mt-12 mb-12">
      <h1 className="text-3xl font-bold mb-2">📁 Changelog #005</h1>
      <div className="blog-date text-gray-500 mb-6">May 20, 2025</div>
      <ul className="list-none pl-0 mb-6">
        <li><span className="emoji">📁</span> Recreated standardized folder structure</li>
        <li><span className="emoji">🎨</span> Moved assets to dedicated CSS, JS, and Data directories</li>
        <li><span className="emoji">🔬</span> Re-added elements.json with atomic information</li>
        <li><span className="emoji">🎯</span> Updated main page color scheme</li>
        <li><span className="emoji">📦</span> Added AlphaMain and AlphaTest containers</li>
      </ul>
    </div>
  );
} 
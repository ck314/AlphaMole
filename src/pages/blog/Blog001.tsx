import React from 'react';

export default function Blog001() {
  return (
    <div className="blog-content max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md mt-12 mb-12">
      <h1 className="text-3xl font-bold mb-2">🚀 Alpha Mole Day 1</h1>
      <div className="blog-date text-gray-500 mb-6">May 4, 2025</div>

      <p>Today I started to build Alpha Mole, a neural network project grounded in an exploration of Chemistry.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">🧪 The Project: An Incremental Molecular Stability Predictor</h2>

      <p>The project aims to bridge concepts from Chemistry (molecular formulas, stability), Computer Science (algorithms, data structures), and Neural Networks (classification, pattern recognition) by training models to predict whether a given set of atoms could potentially form a stable molecule.</p>

      <p>My first step was installing Cursor.</p>

      <p>For now, we took step 1 to load in the periodic table of elements and connect any 2-4 random elements, and then randomly give a checkmark or an X. We haven't built the actual Neural Network yet. We're only at the starting gate.</p>
    </div>
  );
} 
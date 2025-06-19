import React from 'react';

export default function Blog008() {
  return (
      <div className="blog-content max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md mt-12 mb-12">
        <h1 className="text-3xl font-bold mb-2">🔬 A Week of Deep Learning and Chemistry: Building Toward Smarter Molecular Models</h1>
        <div className="blog-date text-gray-500 mb-6">June 4, 2025</div>

        <p>This week has been a deep dive into the intersection of machine learning and molecular science. As part of my journey toward building a neural network that predicts molecular stability, I've been laying the groundwork with both theoretical and practical study—combining the languages of math, computer science, and chemistry.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">📘 Deep Learning Illustrated: The Spark</h2>
        <p>My journey started with <em>Deep Learning Illustrated</em>—an accessible and visually engaging book that breaks down the foundations of neural networks. It's given me a better sense of how deep learning architectures mimic the brain, how data flows through networks, and why training matters. The intuition behind backpropagation and activation functions clicked into place, making it easier to see how we can apply these ideas to chemistry.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">➗ Back to Calculus Basics</h2>
        <p>To make sense of optimization techniques in neural networks—especially gradient descent—I reviewed key calculus tools:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Power Rule</strong>: Useful for quickly taking derivatives of polynomials.</li>
          <li><strong>Chain Rule</strong>: Essential for differentiating composite functions, just like backpropagation through layers.</li>
          <li><strong>Quotient Rule</strong>: Handy when dealing with rational functions—especially relevant when normalizing chemical data.</li>
        </ul>
        <p>Understanding these helped demystify how models learn, improve, and generalize.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">⚛️ Chemistry Deep Dive: From Electrons to Stability</h2>
        <p>Neural networks are powerful, but what we feed into them—our <em>features</em>—matters even more. To create meaningful input data about molecules, I explored key chemical concepts that influence atomic and molecular behavior:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Valence & Electrons</strong>: The number of valence electrons determines how atoms bond and interact. It's foundational to understanding reactivity and molecular structure.</li>
          <li><strong>Electronegativity</strong>: A measure of how strongly an atom attracts electrons. It's crucial for predicting bond polarity and molecular stability.</li>
          <li><strong>Atomic Radius</strong>: Tells us how "big" an atom is—affecting bond lengths and molecular shape.</li>
          <li><strong>Group Number</strong>: Reveals an atom's column in the periodic table, which correlates with its properties like valence electron count and typical charge.</li>
        </ul>
        <p>By researching these properties and compiling datasets (including atomic radii and electronegativity on the Pauling scale), I've started creating a structured input space for my model.</p>
      </div>
  );
} 
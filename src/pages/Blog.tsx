import React from 'react';
import { Link } from 'react-router-dom';

// NOTE: Individual blog entry pages are expected at /blog/001, /blog/002, etc. See Blog001.tsx, Blog002.tsx, ...

const blogs = [
  {
    id: '011',
    date: 'June 19, 2025',
    title: '🚀 AlphaMole v2 Launch: A New Era Begins!',
    description:
      'AlphaMole v2 is live! We merged all ChemStability AI React pages, unified both projects, and established a new platform for future molecular AI development.',
  },
  {
    id: '010',
    date: 'June 12, 2025',
    title: 
      "Summary of Today's Work: App Fixes and Styling Enhancements",
    description:
      "Resolved React app startup issues, eliminated unintended centering, standardized blog post styling, and refined date placement for Blog 001. These updates improve stability, maintainability, and user experience, setting the stage for new features.",
  },
  {
    id: '009',
    date: 'June 7, 2025',
    title: 'Progress Update: Sprint 2 and Enhanced Stability Analysis',
    description:
      'A comprehensive update on Sprint 2 launch, enhanced stability analysis features, and improved project organization.',
  },
  {
    id: '008',
    date: 'June 4, 2025',
    title:
      'A Week of Deep Learning and Chemistry: Building Toward Smarter Molecular Models',
    description:
      'Exploring the intersection of deep learning and chemistry, from neural network foundations to molecular properties.',
  },
  {
    id: '007',
    date: 'May 29, 2025',
    title: "Why Some Neurons Don't Belong at the End: A Neural Network Insight",
    description:
      "Exploring why certain activation functions are better suited for hidden layers than output layers in neural networks.",
  },
  {
    id: '006',
    date: 'May 26, 2025',
    title: 'Enhancing Molecular Stability Analysis',
    description:
      'Added detailed stability indicators including atom counts, element distribution, and valence electron information.',
  },
  {
    id: '005',
    date: 'May 20, 2025',
    title: "Standardization and Color: AlphaMole's Structure Reborn",
    description:
      "Recreated folder structure, restored elements.json, updated color scheme, and added AlphaMain/AlphaTest boxes.",
  },
  {
    id: '004',
    date: 'May 12, 2025',
    title: 'Unifying the Navigation Bar Across AlphaMole',
    description:
      'A unified, modern navigation bar now appears on every page and subpage of AlphaMole.',
  },
  {
    id: '003',
    date: 'May 11, 2025',
    title: 'Creating a checklist for the first phase of building',
    description:
      'Exploring the challenges of displaying HTML tags and code snippets within an HTML page.',
  },
  {
    id: '002',
    date: 'May 5, 2025',
    title: 'AlphaMole Finds a New Home',
    description:
      'Setting up GitHub and custom domain for AlphaMole.',
  },
  {
    id: '001',
    date: 'May 4, 2025',
    title: 'The Beginning',
    description: 'Starting the journey of building AlphaMole.',
  },
];

export const Blog = () => {
  return (
    <div className="w-full">
      <div className="bg-gradient-to-br from-emerald-400 to-teal-800 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">AlphaMole Blog</h1>
          <p className="text-xl">
            Chronicling the journey of building a molecular neural network
          </p>
        </div>
      </div>
      <div className="container mx-auto max-w-4xl px-4 py-8 flex flex-col gap-6">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            to={`/blog/${blog.id}`}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow blog-entry"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="blog-number text-emerald-600 mb-2 font-bold">Blog #{blog.id}</div>
            <div className="blog-date text-gray-500 text-sm mb-2">{blog.date}</div>
            <h2 className="blog-title text-2xl font-semibold text-gray-800 mb-3">
              {blog.title}
            </h2>
            <p className="blog-summary text-gray-600">{blog.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

// Reminder: Create the 10 blog entry pages in src/pages/blog/ as Blog001.tsx, Blog002.tsx, ..., Blog010.tsx
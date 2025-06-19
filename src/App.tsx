import React from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { Changes } from './pages/Changes';
import { Checklists } from './pages/Checklists';
import { Sprint1Checklist } from './pages/Sprint1Checklist';
import { Sprint2Checklist } from './pages/Sprint2Checklist';
import { blogComponents } from './pages/blog/index';
import { changeComponents } from './pages/changes/index';

function BlogEntryWrapper() {
  const { id } = useParams();
  const BlogComponent = id && blogComponents[id];
  if (!BlogComponent) {
    return <div className="max-w-2xl mx-auto mt-12 p-8 bg-white rounded shadow text-center text-red-600">Blog entry not found.</div>;
  }
  return <BlogComponent />;
}

function ChangeEntryWrapper() {
  const { id } = useParams();
  const ChangeComponent = id && changeComponents[id];
  if (!ChangeComponent) {
    return <div className="max-w-2xl mx-auto mt-12 p-8 bg-white rounded shadow text-center text-red-600">Changelog entry not found.</div>;
  }
  return <ChangeComponent />;
}

export function App() {
  return <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogEntryWrapper />} />
          <Route path="/changes" element={<Changes />} />
          <Route path="/changes/:id" element={<ChangeEntryWrapper />} />
          <Route path="/checklists" element={<Checklists />} />
          <Route path="/sprint1" element={<Sprint1Checklist />} />
          <Route path="/sprint2" element={<Sprint2Checklist />} />
        </Routes>
      </Layout>
    </BrowserRouter>;
}
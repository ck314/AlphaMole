import React from 'react';

export default function Blog004() {
  return (
    <div className="blog-content max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md mt-12 mb-12">
      <h1 className="text-3xl font-bold mb-2">🧭 Blog #004 - Unifying the Navigation Bar Across AlphaMole</h1>
      <div className="blog-date text-gray-500 mb-6">May 12, 2025</div>

      <p>Today marks a major step forward in the AlphaMole project: the navigation bar is now unified and visible across every major page and subpage of the site. This update brings a consistent, modern look and seamless navigation experience for users, no matter where they are in the project.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">🛠️ What Changed?</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Main Page:</strong> The navbar is now fixed at the top of the main index.html, styled with a modern glassmorphism effect and clear links to Blog, Changes, and Checklist.</li>
        <li><strong>Blog Page:</strong> The blog index and every individual blog entry (blog001.html, blog002.html, blog003.html, etc.) now feature the same navbar, loaded dynamically for consistency and easy updates.</li>
        <li><strong>Changes Page:</strong> The changelog index and all changelog subpages (changelog001.html, changelog002.html, etc.) now include the navbar, ensuring users can always navigate back to other sections.</li>
        <li><strong>Checklist Page:</strong> The checklist index and the detailed Phase 0 Checklist page now display the navbar at the top, matching the look and feel of the rest of the site.</li>
        <li><strong>Consistent Styling:</strong> A dedicated navbar.css file was created to ensure the navbar looks and behaves the same everywhere, regardless of the local page styles.</li>
        <li><strong>Whitespace and Spacing:</strong> Careful adjustments were made to ensure there is always comfortable whitespace between the navbar and the main content, providing a clean and readable layout.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">⚙️ How It Works</h2>
      <p>The navbar is loaded dynamically using JavaScript's <code className="bg-gray-100 px-1 rounded">fetch</code> API. This means any updates to the navigation links or style only need to be made in one place (navbar.html and navbar.css), and the changes will automatically appear across the entire site.</p>
      <pre className="bg-gray-100 rounded p-2 overflow-x-auto mb-4">{`fetch('navbar.html')\n  .then(response => response.text())\n  .then(data => {\n    document.getElementById('navbar').innerHTML = data;\n  });`}</pre>

      <h2 className="text-xl font-semibold mt-8 mb-2">🌟 Why This Matters</h2>
      <p>This unified navigation system makes AlphaMole easier to use, easier to maintain, and more visually appealing. Whether you're reading the latest blog post, checking the changelog, or working through the checklist, you always have quick access to every part of the project.</p>

      <p>Stay tuned for more improvements as AlphaMole continues to evolve!</p>
    </div>
  );
} 
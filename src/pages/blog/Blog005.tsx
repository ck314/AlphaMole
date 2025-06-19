import React from 'react';

export default function Blog005() {
  return (
    <div className="blog-content max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md mt-12 mb-12">
      <h1 className="text-3xl font-bold mb-2">🎨 Standardization and Color: AlphaMole's Structure Reborn</h1>
      <div className="blog-date text-gray-500 mb-6">May 20, 2025</div>

      <p>Note that this blog entry includes work done on two days, May 18 and today. Today's work somehow deleted all the work from Sunday so I had to redo it all.</p>

      <p>Today marked a major organizational update for AlphaMole. After a previous accidental deletion, I recreated the standardized folder structure, ensuring that all assets are now neatly organized into <b>CSS</b>, <b>JS</b>, and <b>Data</b> directories. This not only makes the project easier to navigate, but also sets a strong foundation for future development.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">📦 Re-adding the Elements</h2>
      <p>The <code className="bg-gray-100 px-1 rounded">elements.json</code> file was re-added, now containing structured atomic information and color coding for each element. This enables dynamic color assignment throughout the application, making the interface more visually informative and engaging.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">🌈 A More Colorful Main Page</h2>
      <p>The main page's color scheme was updated to reflect the unique color of each atomic element, providing instant visual feedback and a more immersive experience. Additionally, the main page now features two distinct boxes: <b>AlphaMain</b> and <b>AlphaTest</b>, each serving as a clear entry point for different functionalities.</p>

      <p>With these changes, AlphaMole is more organized, visually appealing, and ready for the next phase of development!</p>
    </div>
  );
} 
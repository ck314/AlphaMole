import React from 'react';

export default function Blog003() {
  return (
    <div className="blog-content max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md mt-12 mb-12">
      <h1 className="text-3xl font-bold mb-2">📋 Blog #003 - Creating a Checklist for Phase 0 of the Project</h1>
      <div className="blog-date text-gray-500 mb-6">May 11, 2025</div>

      <p>Today, I focused on creating a comprehensive checklist for Phase 0 of the AlphaMole project. This phase is crucial as it sets the foundation for the entire application.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">📝 The Checklist Approach</h2>
      <p>The checklist includes tasks such as setting up the project structure, initializing a Git repository, and creating the core file structure. Each task is designed to ensure that the project is well-organized and ready for future development.</p>

      <p>By following this checklist, we can ensure that all necessary components are in place before moving on to more complex features. It's a step-by-step guide that will help us stay on track and avoid common pitfalls.</p>

      <p>As we progress, this checklist will serve as a reference point, reminding us of the essential steps needed to build a robust and scalable application. It's all about laying a solid foundation for the exciting journey ahead.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">💡 Displaying Code in HTML</h2>
      <p>In addition to the checklist, I also encountered a common yet frustrating challenge: displaying HTML tags and code snippets within an HTML page. It's a bit of a paradox—how do you show the very syntax that defines the page itself?</p>

      <p>HTML uses angle brackets (&lt; and &gt;) to define tags, but when you want to display these characters as text, you need to escape them using entities like &amp;lt; and &amp;gt;. This can quickly become cumbersome, especially when dealing with complex code snippets.</p>

      <p>For example, to display the following HTML tag:</p>
      <pre className="bg-gray-100 rounded p-2 overflow-x-auto mb-4">{'<div class="example">Hello, World!</div>'}</pre>
      <p>You need to escape each angle bracket, which can make the code harder to read and maintain.</p>

      <p>There are several approaches to handle this:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Using HTML entities to escape special characters.</li>
        <li>Utilizing the &lt;pre&gt; and &lt;code&gt; tags to preserve formatting and display code snippets.</li>
        <li>Employing syntax highlighting libraries to make code more readable.</li>
      </ul>

      <p>While these methods work, they add an extra layer of complexity to the development process. It's a reminder of the delicate balance between functionality and usability in web development.</p>

      <p>Despite the frustration, mastering these techniques is essential for creating clear and effective documentation and tutorials. It's all part of the journey in becoming a better developer.</p>
    </div>
  );
} 
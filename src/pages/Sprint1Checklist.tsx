import React from 'react';

export const Sprint1Checklist = () => {
  return (
    <div className="w-full">
      <div className="bg-gradient-to-br from-emerald-400 to-teal-800 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">
            AlphaMole Sprint 1: Web Showcase - Detailed Coding Checklist
          </h1>
          <p className="text-xl">
            <strong>Goal:</strong> To build a functional web application as per the Sprint 1 PRD and Project Plan by implementing the client-side code.
          </p>
        </div>
      </div>
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <div className="space-y-8">
          {/* 1. Initial Setup (Local Environment & GitHub) */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">Initial Setup (Local Environment & GitHub)</h2>
            <div className="space-y-6">
              {/* 1.0 Create Project Folder */}
              <div>
                <h3 className="text-lg font-semibold mb-3">1.0 Create Project Folder</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task1.1" className="mr-3" defaultChecked />
                    <label htmlFor="task1.1">1.1 On local machine, create a new folder named alphamole-phase0.</label>
                  </div>
                </div>
              </div>
              {/* 2.0 Initialize Git Repository */}
              <div>
                <h3 className="text-lg font-semibold mb-3">2.0 Initialize Git Repository</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task2.1" className="mr-3" defaultChecked />
                    <label htmlFor="task2.1">2.1 Open a terminal/command prompt.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task2.2" className="mr-3" defaultChecked />
                    <label htmlFor="task2.2">2.2 Navigate into the alphamole-phase0 folder.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task2.3" className="mr-3" defaultChecked />
                    <label htmlFor="task2.3">2.3 Run git init.</label>
                  </div>
                </div>
              </div>
              {/* 3.0 Create GitHub Repository */}
              <div>
                <h3 className="text-lg font-semibold mb-3">3.0 Create GitHub Repository</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task3.1" className="mr-3" defaultChecked />
                    <label htmlFor="task3.1">3.1 Go to GitHub.com.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task3.2" className="mr-3" defaultChecked />
                    <label htmlFor="task3.2">3.2 Create a new public repository named alphamole (or alphamole-phase0).</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task3.3" className="mr-3" defaultChecked />
                    <label htmlFor="task3.3">3.3 Ensure it's initialized without a README, .gitignore, or license.</label>
                  </div>
                </div>
              </div>
              {/* 4.0 Link Local to Remote Repository */}
              <div>
                <h3 className="text-lg font-semibold mb-3">4.0 Link Local to Remote Repository</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task4.1" className="mr-3" defaultChecked />
                    <label htmlFor="task4.1">4.1 In terminal, execute git remote add origin &lt;URL_of_your_GitHub_repo.git&gt;.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task4.2" className="mr-3" defaultChecked />
                    <label htmlFor="task4.2">4.2 In terminal, execute git branch -M main.</label>
                  </div>
                </div>
              </div>
              {/* 5.0 Create Core File Structure */}
              <div>
                <h3 className="text-lg font-semibold mb-3">5.0 Create Core File Structure</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task5.1" className="mr-3" defaultChecked />
                    <label htmlFor="task5.1">5.1 Inside alphamole-phase0, create index.html.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task5.2" className="mr-3" defaultChecked />
                    <label htmlFor="task5.2">5.2 Create subfolder css.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task5.3" className="mr-3" defaultChecked />
                    <label htmlFor="task5.3">5.3 Inside css, create style.css.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task5.4" className="mr-3" defaultChecked />
                    <label htmlFor="task5.4">5.4 Create subfolder js.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task5.5" className="mr-3" defaultChecked />
                    <label htmlFor="task5.5">5.5 Inside js, create script.js.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task5.6" className="mr-3" defaultChecked />
                    <label htmlFor="task5.6">5.6 Create subfolder data.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task5.7" className="mr-3" defaultChecked />
                    <label htmlFor="task5.7">5.7 Inside data, create elements.json.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task5.8" className="mr-3" defaultChecked />
                    <label htmlFor="task5.8">5.8 Inside data, create diatomics.json.</label>
                  </div>
                </div>
              </div>
              {/* 6.0 Populate data/elements.json */}
              <div>
                <h3 className="text-lg font-semibold mb-3">6.0 Populate data/elements.json</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task6.1" className="mr-3" defaultChecked />
                    <label htmlFor="task6.1">6.1 Open data/elements.json.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task6.2" className="mr-3" defaultChecked />
                    <label htmlFor="task6.2">6.2 Add JSON array of element objects (symbol, name, atomic_number, color).</label>
                  </div>
                </div>
              </div>
              {/* 7.0 Populate Initial data/diatomics.json */}
              <div>
                <h3 className="text-lg font-semibold mb-3">7.0 Populate Initial data/diatomics.json</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task7.1" className="mr-3" defaultChecked />
                    <label htmlFor="task7.1">7.1 Open data/diatomics.json.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task7.2" className="mr-3" defaultChecked />
                    <label htmlFor="task7.2">7.2 Add JSON object mapping a few known stable diatomic formulas to their name and isStable: true.</label>
                  </div>
                </div>
              </div>
              {/* 8.0 First Commit & Push */}
              <div>
                <h3 className="text-lg font-semibold mb-3">8.0 First Commit & Push</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task8.1" className="mr-3" defaultChecked />
                    <label htmlFor="task8.1">8.1 In terminal, execute git add ..</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task8.2" className="mr-3" defaultChecked />
                    <label htmlFor="task8.2">8.2 In terminal, execute git commit -m "Initial project structure and data files".</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task8.3" className="mr-3" defaultChecked />
                    <label htmlFor="task8.3">8.3 In terminal, execute git push -u origin main.</label>
                  </div>
                </div>
              </div>
              {/* 9.0 Enable GitHub Pages */}
              <div>
                <h3 className="text-lg font-semibold mb-3">9.0 Enable GitHub Pages</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task9.1" className="mr-3" defaultChecked />
                    <label htmlFor="task9.1">9.1 Go to GitHub repository settings.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task9.2" className="mr-3" defaultChecked />
                    <label htmlFor="task9.2">9.2 Navigate to the "Pages" section.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task9.3" className="mr-3" defaultChecked />
                    <label htmlFor="task9.3">9.3 Select main branch.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task9.4" className="mr-3" defaultChecked />
                    <label htmlFor="task9.4">9.4 Select / (root) folder for source.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task9.5" className="mr-3" defaultChecked />
                    <label htmlFor="task9.5">9.5 Click "Save".</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task9.6" className="mr-3" defaultChecked />
                    <label htmlFor="task9.6">9.6 Note the provided GitHub Pages URL.</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2. HTML Structure (index.html) */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">HTML Structure (index.html)</h2>
            <div className="space-y-6">
              {/* 10.0 Add Basic HTML Boilerplate */}
              <div>
                <h3 className="text-lg font-semibold mb-3">10.0 Add Basic HTML Boilerplate</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task10.1" className="mr-3" defaultChecked />
                    <label htmlFor="task10.1">10.1 Open index.html.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task10.2" className="mr-3" defaultChecked />
                    <label htmlFor="task10.2">10.2 Add &lt;!DOCTYPE html&gt;, &lt;html&gt;, &lt;head&gt;, &lt;body&gt; tags.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task10.3" className="mr-3" defaultChecked />
                    <label htmlFor="task10.3">10.3 Set lang="en".</label>
                  </div>
                </div>
              </div>
              {/* 11.0 Configure <head> */}
              <div>
                <h3 className="text-lg font-semibold mb-3">11.0 Configure &lt;head&gt;</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task11.1" className="mr-3" defaultChecked />
                    <label htmlFor="task11.1">11.1 Add &lt;meta charset="UTF-8"&gt;.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task11.2" className="mr-3" defaultChecked />
                    <label htmlFor="task11.2">11.2 Add &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task11.3" className="mr-3" defaultChecked />
                    <label htmlFor="task11.3">11.3 Add &lt;title&gt;AlphaMole&lt;/title&gt;.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task11.4" className="mr-3" defaultChecked />
                    <label htmlFor="task11.4">11.4 Link to css/style.css using &lt;link rel="stylesheet"&gt;.</label>
                  </div>
                </div>
              </div>
              {/* 12.0 Create Main Container Div */}
              <div>
                <h3 className="text-lg font-semibold mb-3">12.0 Create Main Container Div</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task12.1" className="mr-3" defaultChecked />
                    <label htmlFor="task12.1">12.1 Inside &lt;body&gt;, add &lt;div class="container"&gt;.</label>
                  </div>
                </div>
              </div>
              {/* 13.0 Create Section A (App Name) */}
              <div>
                <h3 className="text-lg font-semibold mb-3">13.0 Create Section A (App Name)</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task13.1" className="mr-3" defaultChecked />
                    <label htmlFor="task13.1">13.1 Inside .container, add &lt;header id="sectionA"&gt;.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task13.2" className="mr-3" defaultChecked />
                    <label htmlFor="task13.2">13.2 Inside #sectionA, add &lt;h1&gt;AlphaMole&lt;/h1&gt;.</label>
                  </div>
                </div>
              </div>
              {/* 14.0 Create Section B (Compound Info) */}
              <div>
                <h3 className="text-lg font-semibold mb-3">14.0 Create Section B (Compound Info)</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task14.1" className="mr-3" defaultChecked />
                    <label htmlFor="task14.1">14.1 Inside .container, add &lt;section id="sectionB"&gt;.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task14.2" className="mr-3" defaultChecked />
                    <label htmlFor="task14.2">14.2 Inside #sectionB, add &lt;h2&gt;Compound Information&lt;/h2&gt;.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task14.3" className="mr-3" defaultChecked />
                    <label htmlFor="task14.3">14.3 Add &lt;p&gt;Selected Atoms: &lt;span id="selectedAtomsText"&gt;-&lt;/span&gt;&lt;/p&gt;.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task14.4" className="mr-3" defaultChecked />
                    <label htmlFor="task14.4">14.4 Add &lt;p&gt;Potential Formula: &lt;span id="formulaText"&gt;-&lt;/span&gt;&lt;/p&gt;.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task14.5" className="mr-3" defaultChecked />
                    <label htmlFor="task14.5">14.5 Add &lt;p&gt;Common Name: &lt;span id="commonNameText"&gt;-&lt;/span&gt;&lt;/p&gt;.</label>
                  </div>
                </div>
              </div>
              {/* 15.0 Create Section C (3D Representation) (To Be Done Later) */}
              <div>
                <h3 className="text-lg font-semibold mb-3">15.0 Create Section C (3D Representation) (To Be Done Later)</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task15.1" className="mr-3" />
                    <label htmlFor="task15.1">15.1 Inside .container, add &lt;section id="sectionC"&gt;.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task15.2" className="mr-3" />
                    <label htmlFor="task15.2">15.2 Inside #sectionC, add &lt;h2&gt;3D Structure&lt;/h2&gt;.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task15.3" className="mr-3" />
                    <label htmlFor="task15.3">15.3 Add &lt;div id="moleculeViewer"&gt;&lt;p&gt;Loading 3D viewer...&lt;/p&gt;&lt;/div&gt;.</label>
                  </div>
                </div>
              </div>
              {/* 16.0 Create Section D (Stability Indicator) */}
              <div>
                <h3 className="text-lg font-semibold mb-3">16.0 Create Section D (Stability Indicator)</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task16.1" className="mr-3" defaultChecked />
                    <label htmlFor="task16.1">16.1 Inside .container, add &lt;section id="sectionD"&gt;.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task16.2" className="mr-3" defaultChecked />
                    <label htmlFor="task16.2">16.2 Inside #sectionD, add &lt;h2&gt;Known Diatomic?&lt;/h2&gt;.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task16.3" className="mr-3" defaultChecked />
                    <label htmlFor="task16.3">16.3 Add &lt;p&gt;&lt;span id="stabilityIndicator"&gt;Checking...&lt;/span&gt;&lt;/p&gt;.</label>
                  </div>
                </div>
              </div>
              {/* 17.0 Create "Next Molecule" Button */}
              <div>
                <h3 className="text-lg font-semibold mb-3">17.0 Create "Next Molecule" Button</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task17.1" className="mr-3" defaultChecked />
                    <label htmlFor="task17.1">17.1 Inside .container (after sections), add &lt;button id="nextButton"&gt;Next Molecule&lt;/button&gt;.</label>
                  </div>
                </div>
              </div>
              {/* 18.0 Include JavaScript Files */}
              <div>
                <h3 className="text-lg font-semibold mb-3">18.0 Include JavaScript Files</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task18.1" className="mr-3" defaultChecked />
                    <label htmlFor="task18.1">18.1 Before closing &lt;/body&gt;, add &lt;script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"&gt;&lt;/script&gt;.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task18.2" className="mr-3" defaultChecked />
                    <label htmlFor="task18.2">18.2 (Placeholder) Add comment for OrbitControls.js script tag.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task18.3" className="mr-3" defaultChecked />
                    <label htmlFor="task18.3">18.3 Add &lt;script src="js/script.js"&gt;&lt;/script&gt;.</label>
                  </div>
                </div>
              </div>
              {/* 19.0 Commit HTML Structure */}
              <div>
                <h3 className="text-lg font-semibold mb-3">19.0 Commit HTML Structure</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task19.1" className="mr-3" defaultChecked />
                    <label htmlFor="task19.1">19.1 git add index.html.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task19.2" className="mr-3" defaultChecked />
                    <label htmlFor="task19.2">19.2 git commit -m "Add complete HTML structure for AlphaMole UI sections".</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task19.3" className="mr-3" defaultChecked />
                    <label htmlFor="task19.3">19.3 git push.</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 3. CSS Styling (css/style.css) */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">CSS Styling (css/style.css)</h2>
            <div className="space-y-6">
              {/* 20.0 Add Basic CSS Reset */}
              <div>
                <h3 className="text-lg font-semibold mb-3">20.0 Add Basic CSS Reset</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task20.1" className="mr-3" defaultChecked />
                    <label htmlFor="task20.1">20.1 Open css/style.css.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task20.2" className="mr-3" defaultChecked />
                    <label htmlFor="task20.2">20.2 Add * &#123; margin: 0; padding: 0; box-sizing: border-box; &#125;.</label>
                  </div>
                </div>
              </div>
              {/* 21.0 Set Global Styles */}
              <div>
                <h3 className="text-lg font-semibold mb-3">21.0 Set Global Styles</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task21.1" className="mr-3" defaultChecked />
                    <label htmlFor="task21.1">21.1 Add body &#123; font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; &#125;.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task21.2" className="mr-3" defaultChecked />
                    <label htmlFor="task21.2">21.2 Add .container &#123; max-width: 1200px; margin: 0 auto; &#125;.</label>
                  </div>
                </div>
              </div>
              {/* 22.0 Style Section A (App Name) */}
              <div>
                <h3 className="text-lg font-semibold mb-3">22.0 Style Section A (App Name)</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task22.1" className="mr-3" defaultChecked />
                    <label htmlFor="task22.1">22.1 Add #sectionA &#123; text-align: center; margin-bottom: 30px; &#125;.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task22.2" className="mr-3" defaultChecked />
                    <label htmlFor="task22.2">22.2 Add #sectionA h1 &#123; font-size: 2.5em; color: #333; &#125;.</label>
                  </div>
                </div>
              </div>
              {/* 23.0 Style Section B (Compound Info) */}
              <div>
                <h3 className="text-lg font-semibold mb-3">23.0 Style Section B (Compound Info)</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task23.1" className="mr-3" defaultChecked />
                    <label htmlFor="task23.1">23.1 Add #sectionB &#123; background: #f9f9f9; padding: 20px; border-radius: 5px; margin-bottom: 20px; &#125;.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task23.2" className="mr-3" defaultChecked />
                    <label htmlFor="task23.2">23.2 Add #sectionB h2 &#123; color: #444; margin-bottom: 15px; &#125;.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task23.3" className="mr-3" defaultChecked />
                    <label htmlFor="task23.3">23.3 Add #sectionB p &#123; margin: 10px 0; &#125;.</label>
                  </div>
                </div>
              </div>
              {/* 24.0 Style Section C (3D Representation) (To Be Done Later) */}
              <div>
                <h3 className="text-lg font-semibold mb-3">24.0 Style Section C (3D Representation) (To Be Done Later)</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task24.1" className="mr-3" />
                    <label htmlFor="task24.1">24.1 Add #sectionC &#123; margin-bottom: 20px; &#125;.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task24.2" className="mr-3" />
                    <label htmlFor="task24.2">24.2 Add #sectionC h2 &#123; color: #444; margin-bottom: 15px; &#125;.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task24.3" className="mr-3" />
                    <label htmlFor="task24.3">24.3 Add #moleculeViewer &#123; width: 100%; height: 400px; background: #eee; border: 1px solid #ddd; &#125;.</label>
                  </div>
                </div>
              </div>
              {/* 25.0 Style Section D (Stability Indicator) */}
              <div>
                <h3 className="text-lg font-semibold mb-3">25.0 Style Section D (Stability Indicator)</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task25.1" className="mr-3" defaultChecked />
                    <label htmlFor="task25.1">25.1 Add #sectionD &#123; background: #f9f9f9; padding: 20px; border-radius: 5px; margin-bottom: 20px; &#125;.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task25.2" className="mr-3" defaultChecked />
                    <label htmlFor="task25.2">25.2 Add #sectionD h2 &#123; color: #444; margin-bottom: 15px; &#125;.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task25.3" className="mr-3" defaultChecked />
                    <label htmlFor="task25.3">25.3 Add #stabilityIndicator &#123; font-weight: bold; &#125;.</label>
                  </div>
                </div>
              </div>
              {/* 26.0 Style "Next Molecule" Button */}
              <div>
                <h3 className="text-lg font-semibold mb-3">26.0 Style "Next Molecule" Button</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task26.1" className="mr-3" defaultChecked />
                    <label htmlFor="task26.1">26.1 Add #nextButton &#123; display: block; width: 200px; margin: 20px auto; padding: 10px; background: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer; &#125;.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task26.2" className="mr-3" defaultChecked />
                    <label htmlFor="task26.2">26.2 Add #nextButton:hover &#123; background: #45a049; &#125;.</label>
                  </div>
                </div>
              </div>
              {/* 27.0 Commit CSS Styling */}
              <div>
                <h3 className="text-lg font-semibold mb-3">27.0 Commit CSS Styling</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task27.1" className="mr-3" defaultChecked />
                    <label htmlFor="task27.1">27.1 git add css/style.css.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task27.2" className="mr-3" defaultChecked />
                    <label htmlFor="task27.2">27.2 git commit -m "Add complete CSS styling for AlphaMole UI sections".</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task27.3" className="mr-3" defaultChecked />
                    <label htmlFor="task27.3">27.3 git push.</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 4. JavaScript Logic (js/script.js) - Part 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">JavaScript Logic (js/script.js)</h2>
            <div className="space-y-6">
              {/* 28.0 Initialize Global Variables */}
              <div>
                <h3 className="text-lg font-semibold mb-3">28.0 Initialize Global Variables</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task28.1" className="mr-3" defaultChecked />
                    <label htmlFor="task28.1">28.1 Open js/script.js.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task28.2" className="mr-3" defaultChecked />
                    <label htmlFor="task28.2">28.2 Add let elements = []; let diatomicMolecules = [];.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task28.3" className="mr-3" defaultChecked />
                    <label htmlFor="task28.3">28.3 Add let selectedAtoms = []; let currentFormula = "".</label>
                  </div>
                </div>
              </div>
              {/* 29.0 Create DOM Element References */}
              <div>
                <h3 className="text-lg font-semibold mb-3">29.0 Create DOM Element References</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task29.1" className="mr-3" defaultChecked />
                    <label htmlFor="task29.1">29.1 Add const selectedAtomsText = document.getElementById("selectedAtomsText");</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task29.2" className="mr-3" defaultChecked />
                    <label htmlFor="task29.2">29.2 Add const formulaText = document.getElementById("formulaText");</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task29.3" className="mr-3" defaultChecked />
                    <label htmlFor="task29.3">29.3 Add const commonNameText = document.getElementById("commonNameText");</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task29.4" className="mr-3" defaultChecked />
                    <label htmlFor="task29.4">29.4 Add const stabilityIndicator = document.getElementById("stabilityIndicator");</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task29.5" className="mr-3" defaultChecked />
                    <label htmlFor="task29.5">29.5 Add const nextButton = document.getElementById("nextButton");</label>
                  </div>
                </div>
              </div>
              {/* 30.0 Create Data Loading Functions */}
              <div>
                <h3 className="text-lg font-semibold mb-3">30.0 Create Data Loading Functions</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task30.1" className="mr-3" defaultChecked />
                    <label htmlFor="task30.1">30.1 Add async function loadElements() &#123; /* Load elements.json */ &#125;.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task30.2" className="mr-3" defaultChecked />
                    <label htmlFor="task30.2">30.2 Add async function loadDiatomics() &#123; /* Load diatomicMolecules.json */ &#125;.</label>
                  </div>
                </div>
              </div>
              {/* 31.0 Create Random Selection Function */}
              <div>
                <h3 className="text-lg font-semibold mb-3">31.0 Create Random Selection Function</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task31.1" className="mr-3" defaultChecked />
                    <label htmlFor="task31.1">31.1 Add function getRandomElements() &#123; /* Select 2 random elements */ &#125;.</label>
                  </div>
                </div>
              </div>
              {/* 32.0 Create Stability Check Function */}
              <div>
                <h3 className="text-lg font-semibold mb-3">32.0 Create Stability Check Function</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task32.1" className="mr-3" defaultChecked />
                    <label htmlFor="task32.1">32.1 Add function checkStability() &#123; /* Check if molecule exists in diatomicMolecules */ &#125;.</label>
                  </div>
                </div>
              </div>
              {/* 33.0 Create UI Update Functions */}
              <div>
                <h3 className="text-lg font-semibold mb-3">33.0 Create UI Update Functions</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task33.1" className="mr-3" defaultChecked />
                    <label htmlFor="task33.1">33.1 Add function updateUI() &#123; /* Update all text elements */ &#125;.</label>
                  </div>
                </div>
              </div>
              {/* 34.0 Add Event Listeners */}
              <div>
                <h3 className="text-lg font-semibold mb-3">34.0 Add Event Listeners</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task34.1" className="mr-3" defaultChecked />
                    <label htmlFor="task34.1">34.1 Add nextButton.addEventListener("click", () =&gt; &#123; /* Handle next button click */ &#125;);</label>
                  </div>
                </div>
              </div>
              {/* 35.0 Add Initialization Code */}
              <div>
                <h3 className="text-lg font-semibold mb-3">35.0 Add Initialization Code</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task35.1" className="mr-3" defaultChecked />
                    <label htmlFor="task35.1">35.1 Add window.addEventListener("load", async () =&gt; &#123; /* Initialize app */ &#125;);</label>
                  </div>
                </div>
              </div>
              {/* 36.0 Commit JavaScript (Part 1) */}
              <div>
                <h3 className="text-lg font-semibold mb-3">36.0 Commit JavaScript (Part 1)</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task37.1" className="mr-3" defaultChecked />
                    <label htmlFor="task37.1">37.1 Define async function loadData().</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task37.2" className="mr-3" defaultChecked />
                    <label htmlFor="task37.2">37.2 Inside try block: ...</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task37.3" className="mr-3" defaultChecked />
                    <label htmlFor="task37.3">37.3 Inside catch (error) block: ...</label>
                  </div>
                </div>
              </div>
              {/* 38.0 Implement getRandomElement() Function */}
              <div>
                <h3 className="text-lg font-semibold mb-3">38.0 Implement getRandomElement() Function</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task38.1" className="mr-3" defaultChecked />
                    <label htmlFor="task38.1">38.1 Define function getRandomElement().</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task38.2" className="mr-3" defaultChecked />
                    <label htmlFor="task38.2">38.2 Check if elementsList is empty; return null if so.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task38.3" className="mr-3" defaultChecked />
                    <label htmlFor="task38.3">38.3 Calculate randomIndex = Math.floor(Math.random() * elementsList.length)</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task38.4" className="mr-3" defaultChecked />
                    <label htmlFor="task38.4">38.4 Return elementsList[randomIndex]</label>
                  </div>
                </div>
              </div>
              {/* 39.0 Implement generateDiatomicInfo() Function */}
              <div>
                <h3 className="text-lg font-semibold mb-3">39.0 Implement generateDiatomicInfo() Function</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task39.1" className="mr-3" defaultChecked />
                    <label htmlFor="task39.1">39.1 Define function generateDiatomicInfo().</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task39.2" className="mr-3" defaultChecked />
                    <label htmlFor="task39.2">39.2 Call getRandomElement() to get atom1.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task39.3" className="mr-3" defaultChecked />
                    <label htmlFor="task39.3">39.3 Call getRandomElement() to get atom2.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task39.4" className="mr-3" defaultChecked />
                    <label htmlFor="task39.4">39.4 Handle !atom1 || !atom2 case by returning a default structure.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task39.5" className="mr-3" defaultChecked />
                    <label htmlFor="task39.5">39.5 Create selectedAtomsDisplay string.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task39.6" className="mr-3" defaultChecked />
                    <label htmlFor="task39.6">39.6 Initialize formulasToTest = [] and displayFormula = "N/A".</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task39.7" className="mr-3" defaultChecked />
                    <label htmlFor="task39.7">39.7 If atom1.symbol === atom2.symbol (A2 type): ...</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task39.8" className="mr-3" defaultChecked />
                    <label htmlFor="task39.8">39.8 Else (AB type): ...</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task39.9" className="mr-3" defaultChecked />
                    <label htmlFor="task39.9">39.9 Return an object with atom1, atom2, selectedAtomsText, formulasToTest, displayFormula.</label>
                  </div>
                </div>
              </div>
              {/* 40.0 Implement checkStabilityAndDisplay() Function (To Be Done Later) */}
              <div>
                <h3 className="text-lg font-semibold mb-3">40.0 Implement checkStabilityAndDisplay() Function (To Be Done Later)</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task40.1" className="mr-3" />
                    <label htmlFor="task40.1">40.1 Define function checkStabilityAndDisplay(diatomicInfo).</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task40.2" className="mr-3" />
                    <label htmlFor="task40.2">40.2 Update selectedAtomsTextElem.textContent.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task40.3" className="mr-3" />
                    <label htmlFor="task40.3">40.3 Set default text for formulaTextElem, commonNameTextElem, stabilityIndicatorElem.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task40.4" className="mr-3" />
                    <label htmlFor="task40.4">40.4 Reset stabilityIndicatorElem.className.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task40.5" className="mr-3" />
                    <label htmlFor="task40.5">40.5 Initialize foundStableMoleculeEntry = null.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task40.6" className="mr-3" />
                    <label htmlFor="task40.6">40.6 Loop through diatomicInfo.formulasToTest: ...</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task40.7" className="mr-3" />
                    <label htmlFor="task40.7">40.7 If foundStableMoleculeEntry exists: ...</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task40.8" className="mr-3" />
                    <label htmlFor="task40.8">40.8 Else (not found stable): ...</label>
                  </div>
                </div>
              </div>
              {/* 41.0 Implement displayNewMolecule() Function */}
              <div>
                <h3 className="text-lg font-semibold mb-3">41.0 Implement displayNewMolecule() Function</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task41.1" className="mr-3" defaultChecked />
                    <label htmlFor="task41.1">41.1 Define function displayNewMolecule()</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task41.2" className="mr-3" defaultChecked />
                    <label htmlFor="task41.2">41.2 Call generateDiatomicInfo().</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task41.3" className="mr-3" defaultChecked />
                    <label htmlFor="task41.3">41.3 If diatomicInfo.atom1 (elements were generated): ...</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task41.4" className="mr-3" defaultChecked />
                    <label htmlFor="task41.4">41.4 Else: ...</label>
                  </div>
                </div>
              </div>
              {/* 42.0 Add Event Listener & Initial Call */}
              <div>
                <h3 className="text-lg font-semibold mb-3">42.0 Add Event Listener & Initial Call</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task42.1" className="mr-3" defaultChecked />
                    <label htmlFor="task42.1">42.1 Add event listener to nextButton for 'click', calling displayNewMolecule.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task42.2" className="mr-3" defaultChecked />
                    <label htmlFor="task42.2">42.2 Add event listener to document for 'DOMContentLoaded', calling loadData.</label>
                  </div>
                </div>
              </div>
              {/* 43.0 Commit JavaScript (Part 1) */}
              <div>
                <h3 className="text-lg font-semibold mb-3">43.0 Commit JavaScript (Part 1)</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task43.1" className="mr-3" defaultChecked />
                    <label htmlFor="task43.1">43.1 git add js/script.js data/elements.json data/diatomics.json</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task43.2" className="mr-3" defaultChecked />
                    <label htmlFor="task43.2">43.2 git commit -m "Implement core JS: data loading, random selection, stability check, basic UI updates"</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task43.3" className="mr-3" defaultChecked />
                    <label htmlFor="task43.3">43.3 git push</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 5. JavaScript Logic (js/script.js) - Part 2: Three.js Integration */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">JavaScript Logic (js/script.js) - Part 2: Three.js Integration</h2>
            <div className="space-y-6">
              {/* 44.0 Declare Three.js Global Variables (To Be Done Later) */}
              <div>
                <h3 className="text-lg font-semibold mb-3">44.0 Declare Three.js Global Variables (To Be Done Later)</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task44.1" className="mr-3" />
                    <label htmlFor="task44.1">44.1 At top of js/script.js, declare scene, camera, renderer, controls.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task44.2" className="mr-3" />
                    <label htmlFor="task44.2">44.2 Declare atomRadius and bondRadius constants.</label>
                  </div>
                </div>
              </div>
              {/* 45.0 Implement initThreeScene() Function (To Be Done Later) */}
              <div>
                <h3 className="text-lg font-semibold mb-3">45.0 Implement initThreeScene() Function (To Be Done Later)</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task45.1" className="mr-3" />
                    <label htmlFor="task45.1">45.1 Define function initThreeScene()</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task45.2" className="mr-3" />
                    <label htmlFor="task45.2">45.2 Check if moleculeViewerElem exists.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task45.3" className="mr-3" />
                    <label htmlFor="task45.3">45.3 Create scene = new THREE.Scene()</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task45.4" className="mr-3" />
                    <label htmlFor="task45.4">45.4 Set scene.background.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task45.5" className="mr-3" />
                    <label htmlFor="task45.5">45.5 Create camera = new THREE.PerspectiveCamera(...)</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task45.6" className="mr-3" />
                    <label htmlFor="task45.6">45.6 Set camera.position.z.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task45.7" className="mr-3" />
                    <label htmlFor="task45.7">45.7 Create renderer = new THREE.WebGLRenderer(&#123; antialias: true &#125;)</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task45.8" className="mr-3" />
                    <label htmlFor="task45.8">45.8 Set renderer.setSize(...)</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task45.9" className="mr-3" />
                    <label htmlFor="task45.9">45.9 Clear moleculeViewerElem.innerHTML.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task45.10" className="mr-3" />
                    <label htmlFor="task45.10">45.10 Append renderer.domElement to moleculeViewerElem.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task45.11" className="mr-3" />
                    <label htmlFor="task45.11">45.11 Create and add THREE.AmbientLight to scene.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task45.12" className="mr-3" />
                    <label htmlFor="task45.12">45.12 Create and add THREE.DirectionalLight to scene, set its position.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task45.13" className="mr-3" />
                    <label htmlFor="task45.13">45.13 (Optional: OrbitControls) If THREE.OrbitControls is defined: ...</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task45.14" className="mr-3" />
                    <label htmlFor="task45.14">45.14 Else (OrbitControls not found): ...</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task45.15" className="mr-3" />
                    <label htmlFor="task45.15">45.15 Define animate() inner function: ...</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task45.16" className="mr-3" />
                    <label htmlFor="task45.16">45.16 Call animate().</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task45.17" className="mr-3" />
                    <label htmlFor="task45.17">45.17 Add window.addEventListener('resize', ...): ...</label>
                  </div>
                </div>
              </div>
              {/* 46.0 Implement clearScene() Function (To Be Done Later) */}
              <div>
                <h3 className="text-lg font-semibold mb-3">46.0 Implement clearScene() Function (To Be Done Later)</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task46.1" className="mr-3" />
                    <label htmlFor="task46.1">46.1 Define function clearScene()</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task46.2" className="mr-3" />
                    <label htmlFor="task46.2">46.2 Check if scene exists.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task46.3" className="mr-3" />
                    <label htmlFor="task46.3">46.3 Loop while (scene.children.length &gt; 0): ...</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task46.4" className="mr-3" />
                    <label htmlFor="task46.4">46.4 Re-add lights to the scene.</label>
                  </div>
                </div>
              </div>
              {/* 47.0 Implement clearAndShowMessageInViewer() Function (To Be Done Later) */}
              <div>
                <h3 className="text-lg font-semibold mb-3">47.0 Implement clearAndShowMessageInViewer() Function (To Be Done Later)</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task47.1" className="mr-3" />
                    <label htmlFor="task47.1">47.1 Define function clearAndShowMessageInViewer(messageHtml)</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task47.2" className="mr-3" />
                    <label htmlFor="task47.2">47.2 If scene, call clearScene().</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task47.3" className="mr-3" />
                    <label htmlFor="task47.3">47.3 Handle display of message: ...</label>
                  </div>
                </div>
              </div>
              {/* 48.0 Implement initAndRenderMolecule() Function (Initial Structure) (To Be Done Later) */}
              <div>
                <h3 className="text-lg font-semibold mb-3">48.0 Implement initAndRenderMolecule() Function (Initial Structure) (To Be Done Later)</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task48.1" className="mr-3" />
                    <label htmlFor="task48.1">48.1 Define async function initAndRenderMolecule(formula)</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task48.2" className="mr-3" />
                    <label htmlFor="task48.2">48.2 Call clearScene().</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task48.3" className="mr-3" />
                    <label htmlFor="task48.3">48.3 Check if scene and renderer are initialized; show error in viewer if not.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task48.4" className="mr-3" />
                    <label htmlFor="task48.4">48.4 Ensure renderer canvas is visible.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task48.5" className="mr-3" />
                    <label htmlFor="task48.5">48.5 (Placeholder for SDF fetch/parse logic)</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task48.6" className="mr-3" />
                    <label htmlFor="task48.6">48.6 (Placeholder for atom/bond rendering logic)</label>
                  </div>
                </div>
              </div>
              {/* 49.0 Commit JavaScript (Three.js Setup) (To Be Done Later) */}
              <div>
                <h3 className="text-lg font-semibold mb-3">49.0 Commit JavaScript (Three.js Setup) (To Be Done Later)</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task49.1" className="mr-3" />
                    <label htmlFor="task49.1">49.1 git add js/script.js</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task49.2" className="mr-3" />
                    <label htmlFor="task49.2">49.2 git commit -m "Integrate Three.js: setup scene, camera, renderer, lights, and basic animation loop"</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task49.3" className="mr-3" />
                    <label htmlFor="task49.3">49.3 git push</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 6. JavaScript Logic (js/script.js) - Part 3: Fetching & Parsing SDF (NCI Cactus) */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">JavaScript Logic (js/script.js) - Part 3: Fetching & Parsing SDF (NCI Cactus)</h2>
            <div className="space-y-6">
              {/* 50.0 Implement fetchSDF() Function (To Be Done Later) */}
              <div>
                <h3 className="text-lg font-semibold mb-3">50.0 Implement fetchSDF() Function (To Be Done Later)</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task50.1" className="mr-3" />
                    <label htmlFor="task50.1">50.1 Define async function fetchSDF(identifier)</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task50.2" className="mr-3" />
                    <label htmlFor="task50.2">50.2 Construct url for NCI Cactus (consider CORS proxy if needed).</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task50.3" className="mr-3" />
                    <label htmlFor="task50.3">50.3 console.log the fetch URL.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task50.4" className="mr-3" />
                    <label htmlFor="task50.4">50.4 Inside try block: ...</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task50.5" className="mr-3" />
                    <label htmlFor="task50.5">50.5 Inside catch (error): ...</label>
                  </div>
                </div>
              </div>
              {/* 51.0 Implement parseSDFForDiatomic() Function (To Be Done Later) */}
              <div>
                <h3 className="text-lg font-semibold mb-3">51.0 Implement parseSDFForDiatomic() Function (To Be Done Later)</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task51.1" className="mr-3" />
                    <label htmlFor="task51.1">51.1 Define function parseSDFForDiatomic(sdfData)</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task51.2" className="mr-3" />
                    <label htmlFor="task51.2">51.2 Initialize atoms = []</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task51.3" className="mr-3" />
                    <label htmlFor="task51.3">51.3 Split sdfData into lines (handle \r\n and \n).</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task51.4" className="mr-3" />
                    <label htmlFor="task51.4">51.4 Initialize atomCount = 0, atomLinesStart = -1.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task51.5" className="mr-3" />
                    <label htmlFor="task51.5">51.5 Loop through lines (starting from index 3, typically where counts line is): ...</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task51.6" className="mr-3" />
                    <label htmlFor="task51.6">51.6 If atomCount === 0 or atomLinesStart === -1, console.warn and return null.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task51.7" className="mr-3" />
                    <label htmlFor="task51.7">51.7 Loop i from 0 to atomCount - 1: ...</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task51.8" className="mr-3" />
                    <label htmlFor="task51.8">51.8 If atoms.length === 0, console.warn and return null.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task51.9" className="mr-3" />
                    <label htmlFor="task51.9">51.9 If atomCount === 2 && atoms.length !== 2, console.warn about mismatch (optional: return null for strictness).</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task51.10" className="mr-3" />
                    <label htmlFor="task51.10">51.10 If atomCount !== 2, console.log it's not a diatomic for this viewer (optional: return null).</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task51.11" className="mr-3" />
                    <label htmlFor="task51.11">51.11 Return atoms.slice(0, 2) (ensure only two atoms for diatomics).</label>
                  </div>
                </div>
              </div>
              {/* 52.0 Update initAndRenderMolecule() to use Fetch & Parse (To Be Done Later) */}
              <div>
                <h3 className="text-lg font-semibold mb-3">52.0 Update initAndRenderMolecule() to use Fetch & Parse (To Be Done Later)</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task52.1" className="mr-3" />
                    <label htmlFor="task52.1">52.1 Inside async function initAndRenderMolecule(formula): ...</label>
                  </div>
                </div>
              </div>
              {/* 53.0 Integrate OrbitControls (Optional) (To Be Done Later) */}
              <div>
                <h3 className="text-lg font-semibold mb-3">53.0 Integrate OrbitControls (Optional) (To Be Done Later)</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task53.1" className="mr-3" />
                    <label htmlFor="task53.1">53.1 (If doing this) Download OrbitControls.js and place in js/ folder.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task53.2" className="mr-3" />
                    <label htmlFor="task53.2">53.2 (If doing this) Add &lt;script src="js/OrbitControls.js"&gt;&lt;/script&gt; to index.html.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task53.3" className="mr-3" />
                    <label htmlFor="task53.3">53.3 (If doing this) Ensure the OrbitControls related code in initThreeScene() and animate() is uncommented and functional.</label>
                  </div>
                </div>
              </div>
              {/* 54.0 Commit JavaScript (SDF Fetch, Parse, Dynamic 3D Rendering) (To Be Done Later) */}
              <div>
                <h3 className="text-lg font-semibold mb-3">54.0 Commit JavaScript (SDF Fetch, Parse, Dynamic 3D Rendering) (To Be Done Later)</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task54.1" className="mr-3" />
                    <label htmlFor="task54.1">54.1 git add js/script.js</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task54.2" className="mr-3" />
                    <label htmlFor="task54.2">54.2 (If added) git add js/OrbitControls.js</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task54.3" className="mr-3" />
                    <label htmlFor="task54.3">54.3 git commit -m "Implement SDF fetch, parse, and dynamic 3D rendering of diatomics"</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task54.4" className="mr-3" />
                    <label htmlFor="task54.4">54.4 git push</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 7. Final Testing & Refinement */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">Final Testing & Refinement</h2>
            <div className="space-y-6">
              {/* 55.0 Perform Thorough Testing on GitHub Pages Site */}
              <div>
                <h3 className="text-lg font-semibold mb-3">55.0 Perform Thorough Testing on GitHub Pages Site</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task55.1" className="mr-3" defaultChecked />
                    <label htmlFor="task55.1">55.1 Click "Next Molecule" repeatedly.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task55.2" className="mr-3" defaultChecked />
                    <label htmlFor="task55.2">55.2 Verify random atom pairs.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task55.3" className="mr-3" defaultChecked />
                    <label htmlFor="task55.3">55.3 Verify correct formula display.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task55.4" className="mr-3" defaultChecked />
                    <label htmlFor="task55.4">55.4 Verify correct stability indication (✔️/❌) against diatomics.json.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task55.5" className="mr-3" defaultChecked />
                    <label htmlFor="task55.5">55.5 For known diatomics:</label>
                  </div>
                  <div className="pl-8 space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="task55.5.1" className="mr-3" defaultChecked />
                      <label htmlFor="task55.5.1">55.5.1 Check if SDF fetch is attempted (see console).</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="task55.5.2" className="mr-3" defaultChecked />
                      <label htmlFor="task55.5.2">55.5.2 Verify 3D model renders (2 spheres, 1 bond).</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="task55.5.3" className="mr-3" defaultChecked />
                      <label htmlFor="task55.5.3">55.5.3 Verify atom colors.</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="task55.5.4" className="mr-3" defaultChecked />
                      <label htmlFor="task55.5.4">55.5.4 Verify model is rotatable (if OrbitControls active).</label>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task55.6" className="mr-3" defaultChecked />
                    <label htmlFor="task55.6">55.6 For unknown/unfetchable:</label>
                  </div>
                  <div className="pl-8 space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="task55.6.1" className="mr-3" defaultChecked />
                      <label htmlFor="task55.6.1">55.6.1 Verify appropriate messages in Section C and D.</label>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task55.7" className="mr-3" defaultChecked />
                    <label htmlFor="task55.7">55.7 Check browser console for critical errors.</label>
                  </div>
                </div>
              </div>
              {/* 56.0 (If needed) Expand data/diatomics.json */}
              <div>
                <h3 className="text-lg font-semibold mb-3">56.0 (If needed) Expand data/diatomics.json</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task56.1" className="mr-3" defaultChecked />
                    <label htmlFor="task56.1">56.1 Add more known stable diatomics from elementsList for more test cases.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task56.2" className="mr-3" defaultChecked />
                    <label htmlFor="task56.2">56.2 Commit and push changes to data/diatomics.json.</label>
                  </div>
                </div>
              </div>
              {/* 57.0 (If needed) Refine SDF Parser */}
              <div>
                <h3 className="text-lg font-semibold mb-3">57.0 (If needed) Refine SDF Parser</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task57.1" className="mr-3" defaultChecked />
                    <label htmlFor="task57.1">57.1 Test with various SDFs. If parser fails, analyze SDF structure and adjust parsing logic in parseSDFForDiatomic().</label>
                  </div>
                </div>
              </div>
              {/* 58.0 (If needed) Refine CSS and UI Messages */}
              <div>
                <h3 className="text-lg font-semibold mb-3">58.0 (If needed) Refine CSS and UI Messages</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task58.1" className="mr-3" defaultChecked />
                    <label htmlFor="task58.1">58.1 Make final CSS adjustments for appearance.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task58.2" className="mr-3" defaultChecked />
                    <label htmlFor="task58.2">58.2 Improve clarity of user messages.</label>
                  </div>
                </div>
              </div>
              {/* 59.0 Create/Update README.md */}
              <div>
                <h3 className="text-lg font-semibold mb-3">59.0 Create/Update README.md</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task59.1" className="mr-3" defaultChecked />
                    <label htmlFor="task59.1">59.1 Create README.md in project root.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task59.2" className="mr-3" defaultChecked />
                    <label htmlFor="task59.2">59.2 Add project description.</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task59.3" className="mr-3" defaultChecked />
                    <label htmlFor="task59.3">59.3 Add setup instructions (if any beyond cloning).</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task59.4" className="mr-3" defaultChecked />
                    <label htmlFor="task59.4">59.4 Add link to the live GitHub Pages site.</label>
                  </div>
                </div>
              </div>
              {/* 60.0 Final Commit & Push */}
              <div>
                <h3 className="text-lg font-semibold mb-3">60.0 Final Commit & Push</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task60.1" className="mr-3" defaultChecked />
                    <label htmlFor="task60.1">60.1 git add .</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task60.2" className="mr-3" defaultChecked />
                    <label htmlFor="task60.2">60.2 git commit -m "Sprint 1: AlphaMole Web Showcase complete. Final testing and refinements."</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task60.3" className="mr-3" defaultChecked />
                    <label htmlFor="task60.3">60.3 git push</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
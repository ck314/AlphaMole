import React from 'react';
export const Sprint2Checklist = () => {
  return (
    <div className="w-full">
      <div className="bg-gradient-to-br from-emerald-400 to-teal-800 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">
            AlphaMole Sprint 2: Basic Composition Features and Data Pipeline
          </h1>
          <p className="text-xl">
            <strong>Goal:</strong> To implement the core data processing pipeline and basic composition features for molecular analysis.
          </p>
        </div>
      </div>
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <div className="space-y-8">
          {/* A. Element Count Vector System */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">A. Element Count Vector System</h2>
            <div className="space-y-6">
              {/* 1.0 Create Element Lookup Table */}
              <div>
                <h3 className="text-lg font-semibold mb-3">1.0 Create Element Lookup Table</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task1.1" className="mr-3" defaultChecked />
                    <label htmlFor="task1.1">1.1 Define JSON structure for element data</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task1.2" className="mr-3" defaultChecked />
                    <label htmlFor="task1.2">1.2 Include atomic number, symbol, name, valence electrons</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task1.3" className="mr-3" defaultChecked />
                    <label htmlFor="task1.3">1.3 Add electronegativity values (Pauling scale)</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task1.4" className="mr-3" defaultChecked />
                    <label htmlFor="task1.4">1.4 Add atomic radii and group numbers</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task1.5" className="mr-3" />
                    <label htmlFor="task1.5">1.5 Create initial set focusing on H, C, N, O (expandable)</label>
                  </div>
                </div>
              </div>
              {/* 2.0 Implement Formula Parser */}
              <div>
                <h3 className="text-lg font-semibold mb-3">2.0 Implement Formula Parser</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task2.1" className="mr-3" />
                    <label htmlFor="task2.1">2.1 Create function to parse chemical formulas (e.g., "H2O" → H:2, O:1)</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task2.2" className="mr-3" />
                    <label htmlFor="task2.2">2.2 Handle multi-character element symbols (e.g., "Cl", "Br")</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task2.3" className="mr-3" />
                    <label htmlFor="task2.3">2.3 Handle implicit counts (e.g., "HO" → H:1, O:1)</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task2.4" className="mr-3" />
                    <label htmlFor="task2.4">2.4 Add validation for formula format</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task2.5" className="mr-3" />
                    <label htmlFor="task2.5">2.5 Create test cases for various formula formats</label>
                  </div>
                </div>
              </div>
              {/* 3.0 Build Vectorization System */}
              <div>
                <h3 className="text-lg font-semibold mb-3">3.0 Build Vectorization System</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task3.1" className="mr-3" />
                    <label htmlFor="task3.1">3.1 Create function to convert parsed formulas to count vectors</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task3.2" className="mr-3" />
                    <label htmlFor="task3.2">3.2 Implement fixed-length vector output (e.g., [H, C, N, O] counts)</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task3.3" className="mr-3" />
                    <label htmlFor="task3.3">3.3 Add total atom count calculation</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task3.4" className="mr-3" />
                    <label htmlFor="task3.4">3.4 Add total valence electron calculation</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task3.5" className="mr-3" />
                    <label htmlFor="task3.5">3.5 Create test suite for vectorization</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* B. Data Preprocessing Pipeline */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">B. Data Preprocessing Pipeline</h2>
            <div className="space-y-6">
              {/* 4.0 Feature Encoding System */}
              <div>
                <h3 className="text-lg font-semibold mb-3">4.0 Feature Encoding System</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task4.1" className="mr-3" />
                    <label htmlFor="task4.1">4.1 Implement consistent feature ordering</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task4.2" className="mr-3" />
                    <label htmlFor="task4.2">4.2 Create feature vector normalization</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task4.3" className="mr-3" />
                    <label htmlFor="task4.3">4.3 Add standardization (zero mean, unit variance)</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task4.4" className="mr-3" />
                    <label htmlFor="task4.4">4.4 Implement min-max scaling</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task4.5" className="mr-3" />
                    <label htmlFor="task4.5">4.5 Create feature scaling pipeline</label>
                  </div>
                </div>
              </div>
              {/* 5.0 Data Balancing System */}
              <div>
                <h3 className="text-lg font-semibold mb-3">5.0 Data Balancing System</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task5.1" className="mr-3" />
                    <label htmlFor="task5.1">5.1 Implement class distribution analysis</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task5.2" className="mr-3" />
                    <label htmlFor="task5.2">5.2 Add random oversampling for minority class</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task5.3" className="mr-3" />
                    <label htmlFor="task5.3">5.3 Add random undersampling for majority class</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task5.4" className="mr-3" />
                    <label htmlFor="task5.4">5.4 Implement SMOTE for synthetic data generation</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task5.5" className="mr-3" />
                    <label htmlFor="task5.5">5.5 Create balanced dataset generator</label>
                  </div>
                </div>
              </div>
              {/* 6.0 Data Splitting System */}
              <div>
                <h3 className="text-lg font-semibold mb-3">6.0 Data Splitting System</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task6.1" className="mr-3" />
                    <label htmlFor="task6.1">6.1 Implement train/validation/test split</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task6.2" className="mr-3" />
                    <label htmlFor="task6.2">6.2 Add stratified sampling</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task6.3" className="mr-3" />
                    <label htmlFor="task6.3">6.3 Create cross-validation setup</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task6.4" className="mr-3" />
                    <label htmlFor="task6.4">6.4 Implement data shuffling</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task6.5" className="mr-3" />
                    <label htmlFor="task6.5">6.5 Add data persistence for splits</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* C. Pipeline Integration */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">C. Pipeline Integration</h2>
            <div className="space-y-6">
              {/* 7.0 Create Main Pipeline Class */}
              <div>
                <h3 className="text-lg font-semibold mb-3">7.0 Create Main Pipeline Class</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task7.1" className="mr-3" />
                    <label htmlFor="task7.1">7.1 Implement pipeline initialization</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task7.2" className="mr-3" />
                    <label htmlFor="task7.2">7.2 Add data loading methods</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task7.3" className="mr-3" />
                    <label htmlFor="task7.3">7.3 Create preprocessing steps</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task7.4" className="mr-3" />
                    <label htmlFor="task7.4">7.4 Add feature generation</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task7.5" className="mr-3" />
                    <label htmlFor="task7.5">7.5 Implement pipeline execution</label>
                  </div>
                </div>
              </div>
              {/* 8.0 Add Data Validation */}
              <div>
                <h3 className="text-lg font-semibold mb-3">8.0 Add Data Validation</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task8.1" className="mr-3" />
                    <label htmlFor="task8.1">8.1 Create input validation</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task8.2" className="mr-3" />
                    <label htmlFor="task8.2">8.2 Add output validation</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task8.3" className="mr-3" />
                    <label htmlFor="task8.3">8.3 Implement error handling</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task8.4" className="mr-3" />
                    <label htmlFor="task8.4">8.4 Add logging system</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task8.5" className="mr-3" />
                    <label htmlFor="task8.5">8.5 Create validation tests</label>
                  </div>
                </div>
              </div>
              {/* 9.0 Create Utility Functions */}
              <div>
                <h3 className="text-lg font-semibold mb-3">9.0 Create Utility Functions</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task9.1" className="mr-3" />
                    <label htmlFor="task9.1">9.1 Add data conversion utilities</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task9.2" className="mr-3" />
                    <label htmlFor="task9.2">9.2 Implement file I/O functions</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task9.3" className="mr-3" />
                    <label htmlFor="task9.3">9.3 Create progress tracking</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task9.4" className="mr-3" />
                    <label htmlFor="task9.4">9.4 Add debugging tools</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task9.5" className="mr-3" />
                    <label htmlFor="task9.5">9.5 Implement performance monitoring</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* D. Testing and Documentation */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">D. Testing and Documentation</h2>
            <div className="space-y-6">
              {/* 10.0 Unit Tests */}
              <div>
                <h3 className="text-lg font-semibold mb-3">10.0 Unit Tests</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task10.1" className="mr-3" />
                    <label htmlFor="task10.1">10.1 Create tests for formula parser</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task10.2" className="mr-3" />
                    <label htmlFor="task10.2">10.2 Add tests for vectorization</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task10.3" className="mr-3" />
                    <label htmlFor="task10.3">10.3 Implement preprocessing tests</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task10.4" className="mr-3" />
                    <label htmlFor="task10.4">10.4 Add pipeline integration tests</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task10.5" className="mr-3" />
                    <label htmlFor="task10.5">10.5 Create performance benchmarks</label>
                  </div>
                </div>
              </div>
              {/* 11.0 Documentation */}
              <div>
                <h3 className="text-lg font-semibold mb-3">11.0 Documentation</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task11.1" className="mr-3" />
                    <label htmlFor="task11.1">11.1 Write function documentation</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task11.2" className="mr-3" />
                    <label htmlFor="task11.2">11.2 Create usage examples</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task11.3" className="mr-3" />
                    <label htmlFor="task11.3">11.3 Add pipeline configuration guide</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task11.4" className="mr-3" />
                    <label htmlFor="task11.4">11.4 Document data formats</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task11.5" className="mr-3" />
                    <label htmlFor="task11.5">11.5 Create troubleshooting guide</label>
                  </div>
                </div>
              </div>
              {/* 12.0 Example Notebooks */}
              <div>
                <h3 className="text-lg font-semibold mb-3">12.0 Example Notebooks</h3>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="task12.1" className="mr-3" />
                    <label htmlFor="task12.1">12.1 Create basic usage example</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task12.2" className="mr-3" />
                    <label htmlFor="task12.2">12.2 Add advanced feature examples</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task12.3" className="mr-3" />
                    <label htmlFor="task12.3">12.3 Implement pipeline demonstration</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task12.4" className="mr-3" />
                    <label htmlFor="task12.4">12.4 Add visualization examples</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="task12.5" className="mr-3" />
                    <label htmlFor="task12.5">12.5 Create performance analysis notebook</label>
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
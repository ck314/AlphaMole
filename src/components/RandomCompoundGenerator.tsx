import React, { useState } from 'react';
import { DicesIcon } from 'lucide-react';
interface RandomCompoundGeneratorProps {
  onGenerate: (numAtoms: number) => void;
}
export const RandomCompoundGenerator: React.FC<RandomCompoundGeneratorProps> = ({
  onGenerate
}) => {
  const [numAtoms, setNumAtoms] = useState(2);
  const handleGenerate = () => {
    onGenerate(numAtoms);
  };
  return <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">Random Compound Generator</h2>
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <label htmlFor="numAtoms" className="block text-sm font-medium text-gray-700 mb-1">
            Number of Atoms
          </label>
          <input type="number" id="numAtoms" min="2" max="8" value={numAtoms} onChange={e => setNumAtoms(Math.max(2, Math.min(8, parseInt(e.target.value))))} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <button onClick={handleGenerate} className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors mt-5">
          <DicesIcon size={18} />
          Generate
        </button>
      </div>
      <p className="text-sm text-gray-500 mt-2">
        Generates a random compound using stable elements (atomic number ≤ 94)
      </p>
    </div>;
};
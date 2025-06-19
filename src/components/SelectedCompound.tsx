import React from 'react';
import { TrashIcon } from 'lucide-react';
const generateChemicalFormula = elements => {
  // Count occurrences of each element
  const elementCounts = elements.reduce((acc, element) => {
    acc[element.symbol] = (acc[element.symbol] || 0) + 1;
    return acc;
  }, {});
  // Sort elements by electronegativity (more electronegative elements go last)
  const uniqueElements = Array.from(new Set(elements.map(e => e.symbol))).sort((a, b) => {
    const elemA = elements.find(e => e.symbol === a);
    const elemB = elements.find(e => e.symbol === b);
    return elemA.electronegativity - elemB.electronegativity;
  });
  // Generate formula with subscript numbers
  return uniqueElements.map(symbol => {
    const count = elementCounts[symbol];
    return <span key={symbol}>
        {symbol}
        {count > 1 && <sub>{count}</sub>}
      </span>;
  });
};
export const SelectedCompound = ({
  selectedElements,
  onClearSelection
}) => {
  if (selectedElements.length === 0) {
    return <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Selected Compound</h2>
        <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
          <p className="text-gray-500">
            Select elements from the periodic table
          </p>
        </div>
      </div>;
  }
  // Calculate average values for compound properties
  const avgElectronegativity = selectedElements.reduce((sum, el) => sum + el.electronegativity, 0) / selectedElements.length;
  const avgAtomicRadius = selectedElements.reduce((sum, el) => sum + el.atomicRadius, 0) / selectedElements.length;
  const totalValence = selectedElements.reduce((sum, el) => sum + el.valenceElectrons, 0);
  // Count occurrences of each element for the table
  const elementCounts = selectedElements.reduce((acc, element) => {
    acc[element.symbol] = (acc[element.symbol] || 0) + 1;
    return acc;
  }, {});
  // Get unique elements for the table
  const uniqueElements = Array.from(new Set(selectedElements.map(e => e)));
  return <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Selected Compound</h2>
        <button onClick={onClearSelection} className="text-red-500 hover:text-red-700 p-1" title="Clear selection">
          <TrashIcon size={18} />
        </button>
      </div>
      <div className="mb-4">
        <div className="flex items-center justify-center p-4 bg-gray-100 rounded-lg">
          <div className="text-2xl font-bold">
            {generateChemicalFormula(selectedElements)}
          </div>
        </div>
      </div>
      <div className="space-y-3 mt-4">
        <h3 className="font-medium text-gray-700">Compound Properties</h3>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-gray-50 p-3 rounded">
            <div className="text-xs text-gray-500">Avg. Electronegativity</div>
            <div className="font-bold">{avgElectronegativity.toFixed(2)}</div>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            <div className="text-xs text-gray-500">Avg. Atomic Radius</div>
            <div className="font-bold">{avgAtomicRadius.toFixed(2)} pm</div>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            <div className="text-xs text-gray-500">Total Valence Electrons</div>
            <div className="font-bold">{totalValence}</div>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            <div className="text-xs text-gray-500">Element Count</div>
            <div className="font-bold">{selectedElements.length}</div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-medium text-gray-700 mb-2">Selected Elements</h3>
        <div className="max-h-48 overflow-y-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-2 px-3 text-left">Element</th>
                <th className="py-2 px-3 text-left">Group</th>
                <th className="py-2 px-3 text-right">Count</th>
              </tr>
            </thead>
            <tbody>
              {uniqueElements.map(element => <tr key={element.symbol} className="border-t">
                  <td className="py-2 px-3">{element.name}</td>
                  <td className="py-2 px-3 text-sm text-gray-600">
                    {element.group}
                  </td>
                  <td className="py-2 px-3 text-right">
                    {elementCounts[element.symbol]}
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};
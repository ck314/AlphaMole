import React, { useState } from 'react';
type Mode = 'select' | 'filter';
export const ElementSelector = ({
  elements,
  selectedElements,
  onElementSelect,
  onFilterChange,
  filteredElements
}) => {
  const [mode, setMode] = useState<Mode>('select');
  // Get color based on element group
  const getElementColor = group => {
    const colors = {
      'Alkali Metals': 'bg-red-100 border-red-300 hover:bg-red-200',
      'Alkaline Earth Metals': 'bg-orange-100 border-orange-300 hover:bg-orange-200',
      'Transition Metals': 'bg-yellow-100 border-yellow-300 hover:bg-yellow-200',
      'Post-Transition Metals': 'bg-green-100 border-green-300 hover:bg-green-200',
      Metalloids: 'bg-teal-100 border-teal-300 hover:bg-teal-200',
      Nonmetals: 'bg-blue-100 border-blue-300 hover:bg-blue-200',
      Halogens: 'bg-indigo-100 border-indigo-300 hover:bg-indigo-200',
      'Noble Gases': 'bg-purple-100 border-purple-300 hover:bg-purple-200',
      Lanthanides: 'bg-pink-100 border-pink-300 hover:bg-pink-200',
      Actinides: 'bg-rose-100 border-rose-300 hover:bg-rose-200',
      Unknown: 'bg-gray-100 border-gray-300 hover:bg-gray-200'
    };
    return colors[group] || colors['Unknown'];
  };
  const isSelected = element => {
    return selectedElements.some(e => e.atomicNumber === element.atomicNumber);
  };
  const isFiltered = element => {
    return filteredElements.some(e => e.atomicNumber === element.atomicNumber);
  };
  const handleElementClick = element => {
    if (mode === 'select') {
      onElementSelect(element);
    } else {
      onFilterChange(element);
    }
  };
  // Create a 18x9 grid (7 main rows + 2 f-block rows)
  const grid = Array(9).fill(null).map(() => Array(18).fill(null));
  // Place elements in their correct positions
  elements.forEach(element => {
    if (element.xPos && element.yPos) {
      grid[element.yPos - 1][element.xPos - 1] = element;
    }
  });
  return <div className="element-selector">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex gap-4">
          <button onClick={() => setMode('select')} className={`px-4 py-2 rounded-lg font-medium transition-colors ${mode === 'select' ? 'bg-blue-700 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
            Select Mode
          </button>
          <button onClick={() => setMode('filter')} className={`px-4 py-2 rounded-lg font-medium transition-colors ${mode === 'filter' ? 'bg-blue-700 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
            Filter Mode
          </button>
        </div>
        <div className="text-sm text-gray-600">
          {mode === 'select' ? 'Click elements to add to compound' : 'Click elements to include in random generation'}
        </div>
      </div>
      <div className="mb-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        <div className="col-span-2 sm:col-span-3 lg:col-span-4">
          <div className="flex flex-wrap gap-2 mb-2">
            {Array.from(new Set(elements.map(e => e.group))).map(group => <div key={group} className="flex items-center">
                <div className={`w-4 h-4 mr-1 ${getElementColor(group).split(' ')[0]} border rounded-sm`}></div>
                <span className="text-xs">{group}</span>
              </div>)}
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="periodic-table min-w-[1100px]">
          {/* Main periodic table (rows 1-7) */}
          {grid.slice(0, 7).map((row, rowIndex) => <div key={rowIndex} className="flex">
              {row.map((element, colIndex) => element ? <button key={colIndex} onClick={() => handleElementClick(element)} className={`element-card w-12 h-12 m-0.5 border rounded flex flex-col items-center justify-center text-center transition-all ${getElementColor(element.group)} ${mode === 'select' ? isSelected(element) ? 'ring-2 ring-blue-500' : '' : isFiltered(element) ? 'ring-2 ring-green-500' : 'opacity-50'}`} title={`${element.name} - ${element.group}`}>
                    <div className="text-[8px] font-semibold">
                      {element.atomicNumber}
                    </div>
                    <div className={`text-sm ${mode === 'filter' && isFiltered(element) ? 'font-bold' : ''}`}>
                      {element.symbol}
                    </div>
                  </button> : <div key={colIndex} className="w-12 h-12 m-0.5" />)}
            </div>)}
          {/* Spacer row */}
          <div className="h-4"></div>
          {/* f-block elements (rows 8-9) */}
          {grid.slice(7).map((row, rowIndex) => <div key={rowIndex + 7} className="flex">
              {/* Indent f-block elements */}
              <div className="w-24"></div>
              {row.map((element, colIndex) => element ? <button key={colIndex} onClick={() => handleElementClick(element)} className={`element-card w-12 h-12 m-0.5 border rounded flex flex-col items-center justify-center text-center transition-all ${getElementColor(element.group)} ${mode === 'select' ? isSelected(element) ? 'ring-2 ring-blue-500' : '' : isFiltered(element) ? 'ring-2 ring-green-500' : 'opacity-50'}`} title={`${element.name} - ${element.group}`}>
                    <div className="text-[8px] font-semibold">
                      {element.atomicNumber}
                    </div>
                    <div className={`text-sm ${mode === 'filter' && isFiltered(element) ? 'font-bold' : ''}`}>
                      {element.symbol}
                    </div>
                  </button> : <div key={colIndex} className="w-12 h-12 m-0.5" />)}
            </div>)}
        </div>
      </div>
    </div>;
};
import React, { useState } from 'react';
import { ElementSelector } from '../components/ElementSelector';
import { SelectedCompound } from '../components/SelectedCompound';
import { PredictionResult } from '../components/PredictionResult';
import { RandomCompoundGenerator } from '../components/RandomCompoundGenerator';
import { elementData } from '../data/elementData';
import { predictStability } from '../utils/predictionLogic';
import { generateRandomCompound } from '../utils/randomCompound';
export const Home = () => {
  const [selectedElements, setSelectedElements] = useState([]);
  const [filteredElements, setFilteredElements] = useState(elementData.filter(e => e.atomicNumber <= 94));
  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleElementSelect = element => {
    setSelectedElements(prev => {
      return [...prev, element];
    });
  };
  const handleFilterChange = element => {
    setFilteredElements(prev => {
      const isCurrentlyFiltered = prev.some(e => e.atomicNumber === element.atomicNumber);
      if (isCurrentlyFiltered) {
        return prev.filter(e => e.atomicNumber !== element.atomicNumber);
      } else {
        return [...prev, element];
      }
    });
  };
  const handleClearSelection = () => {
    setSelectedElements([]);
    setPrediction(null);
  };
  const handleRandomGenerate = numAtoms => {
    const randomElements = generateRandomCompound(numAtoms, filteredElements);
    setSelectedElements(randomElements);
    setIsLoading(true);
    setTimeout(() => {
      const predictionResult = predictStability(randomElements);
      setPrediction(predictionResult);
      setIsLoading(false);
    }, 1500);
  };
  const handlePredict = () => {
    if (selectedElements.length === 0) return;
    setIsLoading(true);
    setTimeout(() => {
      const predictionResult = predictStability(selectedElements);
      setPrediction(predictionResult);
      setIsLoading(false);
    }, 1500);
  };
  return <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <RandomCompoundGenerator onGenerate={handleRandomGenerate} />
          <SelectedCompound selectedElements={selectedElements} onClearSelection={handleClearSelection} />
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Prediction</h2>
            <button onClick={handlePredict} disabled={selectedElements.length === 0 || isLoading} className={`w-full py-3 rounded-lg font-medium ${selectedElements.length === 0 || isLoading ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-700 text-white hover:bg-blue-800'}`}>
              {isLoading ? 'Analyzing...' : 'Predict Stability'}
            </button>
            {prediction && <PredictionResult prediction={prediction} />}
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Select Elements</h2>
            <p className="text-gray-600 mb-4">
              Choose elements to form a compound and the neural network will
              predict its stability.
            </p>
            <ElementSelector elements={elementData} selectedElements={selectedElements} onElementSelect={handleElementSelect} onFilterChange={handleFilterChange} filteredElements={filteredElements} />
          </div>
        </div>
      </div>
    </div>;
};
import { elementData } from '../data/elementData';
export const generateRandomCompound = (numAtoms: number, availableElements = null) => {
  if (numAtoms <= 0) return [];
  // Use filtered elements if provided, otherwise use stable elements
  const elements = availableElements || elementData.filter(element => element.atomicNumber <= 94);
  if (elements.length === 0) return [];
  // Randomly select elements
  const selectedElements = [];
  for (let i = 0; i < numAtoms; i++) {
    const randomIndex = Math.floor(Math.random() * elements.length);
    selectedElements.push(elements[randomIndex]);
  }
  return selectedElements;
};
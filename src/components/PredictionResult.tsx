import React from 'react';
import { CheckCircleIcon, XCircleIcon, AlertCircleIcon } from 'lucide-react';
export const PredictionResult = ({
  prediction
}) => {
  const {
    isStable,
    confidence,
    factors
  } = prediction;
  // Determine status color
  const statusColor = isStable ? 'green' : 'red';
  // Create a visual representation of the confidence level
  const confidencePercentage = (confidence * 100).toFixed(1);
  // Icon based on prediction
  const StatusIcon = isStable ? CheckCircleIcon : XCircleIcon;
  return <div className="mt-4 pt-4 border-t">
      <div className={`p-4 rounded-lg mb-4 bg-${statusColor}-50 border border-${statusColor}-200`}>
        <div className="flex items-center">
          <StatusIcon size={24} className={`text-${statusColor}-500 mr-2`} />
          <div>
            <h3 className="font-bold text-lg">
              {isStable ? 'Likely Stable' : 'Likely Unstable'}
            </h3>
            <p className="text-sm text-gray-600">
              {confidencePercentage}% confidence
            </p>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="font-medium mb-2 flex items-center">
          <AlertCircleIcon size={16} className="mr-1 text-blue-500" />
          Key Factors
        </h3>
        <ul className="space-y-2">
          {factors.map((factor, index) => <li key={index} className="text-sm flex items-start">
              <span className="mr-2">•</span>
              <span>{factor}</span>
            </li>)}
        </ul>
      </div>
      <div className="mt-4">
        <h4 className="text-sm font-medium mb-1">Prediction Confidence</h4>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className={`h-2.5 rounded-full bg-${statusColor}-500`} style={{
          width: `${confidencePercentage}%`
        }}></div>
        </div>
        <div className="flex justify-between text-xs mt-1 text-gray-500">
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
        </div>
      </div>
    </div>;
};
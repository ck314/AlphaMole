import React from 'react';
import { BeakerIcon } from 'lucide-react';
export const ComingSoon = ({
  title
}) => {
  return <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <BeakerIcon className="w-24 h-24 text-blue-600 animate-bounce" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-xl text-gray-600 mb-8">
          Our scientists are still working on this feature. Check back soon!
        </p>
        <div className="p-8 bg-blue-50 rounded-xl">
          <div className="grid grid-cols-3 gap-4">
            {[...Array(3)].map((_, i) => <div key={i} className="aspect-square rounded-lg bg-white shadow-md p-4 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-blue-100 animate-pulse"></div>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};
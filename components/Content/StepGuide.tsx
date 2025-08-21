'use client';

import React from 'react';
import Image from 'next/image';

export interface Step {
  number: number;
  title: string;
  description: string;
  image?: string;
}

interface StepGuideProps {
  steps: Step[];
}

export default function StepGuide({ steps }: StepGuideProps) {
  return (
    <div className="space-y-8 my-8">
      {steps.map((step) => (
        <div key={step.number} className="flex gap-6">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
              {step.number}
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {step.description}
            </p>
            {step.image && (
              <div className="relative w-full h-64 md:h-96 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-contain p-4"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="flex items-center justify-center h-full text-gray-400">
                          <div class="text-center">
                            <svg class="mx-auto h-12 w-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p class="text-sm">画像をアップロード待ち</p>
                          </div>
                        </div>
                      `;
                    }
                  }}
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
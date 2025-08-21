'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link 
            href="/" 
            className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light"
          >
            <Home size={16} />
          </Link>
        </li>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <li className="text-gray-400 dark:text-gray-500">
              <ChevronRight size={16} />
            </li>
            <li>
              {item.href ? (
                <Link 
                  href={item.href} 
                  className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-900 dark:text-white font-medium">
                  {item.label}
                </span>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
}
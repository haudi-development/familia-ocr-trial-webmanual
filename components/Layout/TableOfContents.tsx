'use client';

import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [items, setItems] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const collectHeadings = () => {
      const headings = document.querySelectorAll('h2, h3');
      const tocItems: TOCItem[] = [];
      
      headings.forEach((heading) => {
        const id = heading.id || heading.textContent?.toLowerCase().replace(/\s+/g, '-') || '';
        if (!heading.id) {
          heading.id = id;
        }
        
        tocItems.push({
          id,
          text: heading.textContent || '',
          level: parseInt(heading.tagName[1]),
        });
      });
      
      setItems(tocItems);
    };

    collectHeadings();

    const handleScroll = () => {
      const headings = document.querySelectorAll('h2, h3');
      const scrollPosition = window.scrollY + 100;
      
      let currentActiveId = '';
      headings.forEach((heading) => {
        const element = heading as HTMLElement;
        if (element.offsetTop <= scrollPosition) {
          currentActiveId = element.id;
        }
      });
      
      setActiveId(currentActiveId);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (items.length === 0) {
    return null;
  }

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <aside className="hidden xl:block fixed right-8 top-24 w-64">
      <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
          このページの内容
        </h3>
        <nav>
          <ul className="space-y-1">
            {items.map((item) => (
              <li
                key={item.id}
                style={{ paddingLeft: `${(item.level - 2) * 16}px` }}
              >
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleClick(e, item.id)}
                  className={`
                    flex items-center text-sm py-1 transition-colors
                    ${activeId === item.id
                      ? 'text-primary font-medium'
                      : 'text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light'
                    }
                  `}
                >
                  {activeId === item.id && (
                    <ChevronRight size={14} className="mr-1" />
                  )}
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
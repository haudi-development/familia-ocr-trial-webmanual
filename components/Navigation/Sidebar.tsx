'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LogIn, 
  LayoutDashboard, 
  FileSearch, 
  Bot, 
  FileOutput, 
  Download, 
  Sparkles, 
  HelpCircle, 
  Headphones,
  ChevronRight
} from 'lucide-react';

const menuItems = [
  {
    title: 'はじめに',
    href: '/',
    icon: LayoutDashboard,
  },
  {
    title: '1. ログイン',
    href: '/chapters/login',
    icon: LogIn,
  },
  {
    title: '2. ダッシュボード',
    href: '/chapters/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: '3. 文書解析とアップロード',
    href: '/chapters/document-analysis',
    icon: FileSearch,
  },
  {
    title: '4. AIアシスタント選択',
    href: '/chapters/ai-assistant',
    icon: Bot,
  },
  {
    title: '5. 解析結果の確認',
    href: '/chapters/results',
    icon: FileOutput,
  },
  {
    title: '6. データエクスポート',
    href: '/chapters/export',
    icon: Download,
  },
  {
    title: '7. 便利な機能',
    href: '/chapters/features',
    icon: Sparkles,
  },
  {
    title: '8. トラブルシューティング',
    href: '/chapters/troubleshooting',
    icon: HelpCircle,
  },
  {
    title: '9. サポート',
    href: '/chapters/support',
    icon: Headphones,
  },
];

interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed top-16 left-0 bottom-0 w-64 bg-white border-r border-gray-200 
        dark:bg-gray-900 dark:border-gray-700 z-30 overflow-y-auto
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <nav className="p-4">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 dark:text-gray-400">
            目次
          </h2>
          <ul className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`
                      flex items-center px-3 py-2 text-sm rounded-lg transition-colors
                      ${isActive 
                        ? 'bg-primary text-white' 
                        : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                      }
                    `}
                  >
                    <Icon size={18} className="mr-3 flex-shrink-0" />
                    <span className="flex-1">{item.title}</span>
                    {isActive && <ChevronRight size={16} className="ml-2" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
        {/* Version info */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Version: トライアル版
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            最終更新: 2025年8月21日
          </p>
        </div>
      </aside>
    </>
  );
}
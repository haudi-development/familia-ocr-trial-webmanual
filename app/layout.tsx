'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import Sidebar from '@/components/Navigation/Sidebar';
import BackToTop from '@/components/UI/BackToTop';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <html lang="ja">
      <head>
        <title>Familia OCR トライアル版マニュアル</title>
        <meta name="description" content="Familia OCRトライアル版の操作マニュアル。AI OCRとLLMを融合させた次世代の文書処理ソリューションの使い方を詳しく解説します。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Familia OCR トライアル版マニュアル" />
        <meta property="og:description" content="Familia OCRトライアル版の操作マニュアル" />
        <meta property="og:type" content="website" />
      </head>
      <body className="antialiased">
        <Header 
          onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
          isMenuOpen={isSidebarOpen}
        />
        
        <Sidebar 
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        
        <div className="flex flex-col min-h-screen">
          <main className="pt-16 lg:pl-64 flex-1 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </div>
          </main>
          
          <div className="lg:pl-64">
            <Footer />
          </div>
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
import React from 'react';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Familia OCR
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              AI OCRとLLMを融合させた次世代の文書処理ソリューション
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              クイックリンク
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/chapters/login" className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light">
                  ログイン
                </Link>
              </li>
              <li>
                <Link href="/chapters/document-analysis" className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light">
                  文書解析の実行
                </Link>
              </li>
              <li>
                <Link href="/chapters/troubleshooting" className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light">
                  トラブルシューティング
                </Link>
              </li>
              <li>
                <Link href="/chapters/support" className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light">
                  サポート
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              お問い合わせ
            </h3>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Mail size={16} className="mr-2" />
                <a href="mailto:support@haudi.jp" className="hover:text-primary dark:hover:text-primary-light">
                  support@haudi.jp
                </a>
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Phone size={16} className="mr-2" />
                <a href="tel:03-3527-2080" className="hover:text-primary dark:hover:text-primary-light">
                  03-3527-2080
                </a>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                営業時間: 平日 9:00-18:00
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            © 2025 株式会社ハウディ. All rights reserved. | 本マニュアルは2025年8月版です
          </p>
        </div>
      </div>
    </footer>
  );
}
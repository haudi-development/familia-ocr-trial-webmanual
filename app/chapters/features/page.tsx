'use client';

import React from 'react';
import Breadcrumb from '@/components/Navigation/Breadcrumb';
import InfoBox from '@/components/UI/InfoBox';
import { Zap, Users, Clock, Shield, Globe, Smartphone } from 'lucide-react';

export default function FeaturesPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <Breadcrumb 
        items={[
          { label: '7. 便利な機能' }
        ]} 
      />
      
      <h1 className="text-3xl font-bold mb-6">7. 便利な機能</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="lead text-gray-600 dark:text-gray-400 mb-6">
          Familia OCRには、業務効率を向上させる様々な便利機能が搭載されています。
          これらの機能を活用することで、より効率的な文書処理が可能になります。
        </p>

        <h2 id="batch-processing">7.1 一括処理</h2>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 mb-6">
          <div className="flex items-start">
            <Zap className="text-yellow-500 mr-3 mt-1" size={24} />
            <div>
              <h3 className="font-semibold mb-2">複数ファイルの同時処理</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                最大10ファイルまで同時にアップロードして一括処理が可能です。
              </p>
              <ul className="text-sm space-y-1">
                <li>• 処理時間の大幅短縮</li>
                <li>• 統一されたテンプレートの適用</li>
                <li>• 処理結果の一元管理</li>
              </ul>
            </div>
          </div>
        </div>

        <InfoBox type="tip" title="効率的な一括処理のコツ">
          同じ種類の文書をまとめて処理することで、テンプレート選択の手間を省き、
          処理精度も向上します。
        </InfoBox>

        <h2 id="search">7.2 検索機能</h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
          <h3 className="font-semibold mb-4">文書一覧の検索オプション</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">ファイル名検索</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                部分一致でファイル名を検索
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">日付検索</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                処理日や期間を指定して検索
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">ステータス検索</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                処理完了・処理中などの状態で絞り込み
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">テンプレート検索</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                使用したAIアシスタントで絞り込み
              </p>
            </div>
          </div>
        </div>

        <h2 id="pagination">7.3 ページネーション</h2>
        
        <p>
          大量の文書を扱う場合でも、ページネーション機能により快適に操作できます。
        </p>
        
        <ul className="list-disc pl-6 mb-6">
          <li>1ページあたりの表示件数を変更可能（10/20/50件）</li>
          <li>ページ番号による直接ジャンプ</li>
          <li>前後ページへの簡単な移動</li>
        </ul>

        <h2 id="user-management">7.4 ユーザー管理（本番環境）</h2>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 mb-6">
          <div className="flex items-start">
            <Users className="text-blue-500 mr-3 mt-1" size={24} />
            <div>
              <h3 className="font-semibold mb-2">マルチユーザー対応</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                本番環境では複数ユーザーでの利用が可能です。
              </p>
              <ul className="text-sm space-y-1">
                <li>• ユーザーごとの権限設定</li>
                <li>• 部門別のアクセス制御</li>
                <li>• 操作履歴の記録</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 id="history">7.5 処理履歴</h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
          <div className="flex items-start">
            <Clock className="text-green-500 mr-3 mt-1" size={24} />
            <div>
              <h3 className="font-semibold mb-2">履歴管理機能</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                すべての処理履歴を保存・確認できます。
              </p>
              <table className="text-sm w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">保存項目</th>
                    <th className="text-left py-2">内容</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">処理日時</td>
                    <td className="py-2">アップロードから完了まで</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">使用テンプレート</td>
                    <td className="py-2">選択したAIアシスタント</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">処理結果</td>
                    <td className="py-2">成功/失敗の状態</td>
                  </tr>
                  <tr>
                    <td className="py-2">エクスポート履歴</td>
                    <td className="py-2">ダウンロード日時と形式</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <h2 id="security">7.6 セキュリティ機能</h2>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 mb-6">
          <div className="flex items-start">
            <Shield className="text-purple-500 mr-3 mt-1" size={24} />
            <div>
              <h3 className="font-semibold mb-2">データ保護</h3>
              <ul className="text-sm space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <strong>SSL/TLS暗号化</strong>
                    <p className="text-gray-600 dark:text-gray-400">すべての通信を暗号化</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <strong>自動ログアウト</strong>
                    <p className="text-gray-600 dark:text-gray-400">一定時間操作がない場合に自動ログアウト</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <strong>アクセスログ</strong>
                    <p className="text-gray-600 dark:text-gray-400">すべての操作を記録</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h2 id="future-features">7.7 今後追加予定の機能</h2>
        
        <InfoBox type="info" title="開発中の新機能">
          <ul className="space-y-2">
            <li className="flex items-start">
              <Globe className="text-blue-500 mr-2 mt-0.5" size={16} />
              <div>
                <strong>API連携</strong>
                <p className="text-sm">外部システムとの自動連携</p>
              </div>
            </li>
            <li className="flex items-start">
              <Smartphone className="text-green-500 mr-2 mt-0.5" size={16} />
              <div>
                <strong>モバイルアプリ</strong>
                <p className="text-sm">スマートフォンからの直接アップロード</p>
              </div>
            </li>
            <li className="flex items-start">
              <Zap className="text-yellow-500 mr-2 mt-0.5" size={16} />
              <div>
                <strong>自動処理</strong>
                <p className="text-sm">フォルダ監視による自動アップロード・処理</p>
              </div>
            </li>
          </ul>
        </InfoBox>

        <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h3 className="font-semibold mb-2">次のステップ</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            トラブルシューティングで、よくある問題と解決方法を確認しましょう。
          </p>
          <a href="/chapters/troubleshooting" className="inline-flex items-center text-primary hover:text-primary-dark">
            次へ: 8. トラブルシューティング →
          </a>
        </div>
      </div>
    </div>
  );
}
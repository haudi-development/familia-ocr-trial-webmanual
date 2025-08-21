'use client';

import React from 'react';
import Breadcrumb from '@/components/Navigation/Breadcrumb';
import InfoBox from '@/components/UI/InfoBox';
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react';

const faqItems = [
  {
    category: 'ログイン関連',
    icon: '🔐',
    questions: [
      {
        q: 'ログインできません',
        a: [
          'メールアドレスとパスワードが正しく入力されているか確認',
          '大文字・小文字の区別に注意',
          'コピー&ペーストの際に余分なスペースが入っていないか確認',
          'Caps Lockがオンになっていないか確認',
        ],
      },
      {
        q: 'パスワードを忘れました',
        a: [
          'ログイン画面の「パスワードをお忘れですか？」リンクをクリック',
          '登録メールアドレスを入力',
          'リセット用リンクがメールで送信される',
          'メールの指示に従ってパスワードを再設定',
        ],
      },
    ],
  },
  {
    category: 'ファイルアップロード関連',
    icon: '📁',
    questions: [
      {
        q: 'ファイルがアップロードできません',
        a: [
          'ファイルサイズが10MB以下か確認',
          '対応形式（PDF、JPG、PNG）か確認',
          'ネットワーク接続が安定しているか確認',
          'ブラウザのキャッシュをクリアして再試行',
        ],
      },
      {
        q: '「ファイルサイズが大きすぎます」エラー',
        a: [
          'PDFの場合：PDFの圧縮ツールを使用',
          '画像の場合：解像度を下げる（300dpi程度を推奨）',
          '複数ページのPDFは分割してアップロード',
        ],
      },
    ],
  },
  {
    category: '解析精度関連',
    icon: '🔍',
    questions: [
      {
        q: '文字認識の精度が低い',
        a: [
          '画像の解像度を上げる（300dpi以上推奨）',
          '画像の傾きを補正する',
          '影や汚れがある場合は画像を編集',
          '適切なAIアシスタントテンプレートを選択',
        ],
      },
      {
        q: '特定の文字が認識されない',
        a: [
          '手書き文字の場合は楷書体で明確に記載',
          'かすれた文字は画像編集ソフトで補強',
          '特殊フォントは標準的なフォントに変更',
        ],
      },
    ],
  },
  {
    category: '処理速度関連',
    icon: '⏱️',
    questions: [
      {
        q: '処理時間が長い',
        a: [
          'トライアル版では最大30秒程度かかる場合があります',
          '本番環境では大幅に処理速度が向上します',
          '複数ファイルを同時に処理する場合は順次処理されます',
          'ネットワーク速度も影響する場合があります',
        ],
      },
    ],
  },
];

export default function TroubleshootingPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <Breadcrumb 
        items={[
          { label: '8. トラブルシューティング' }
        ]} 
      />
      
      <h1 className="text-3xl font-bold mb-6">8. トラブルシューティング</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="lead text-gray-600 dark:text-gray-400 mb-6">
          Familia OCRの使用中に発生する可能性のある問題と、その解決方法について説明します。
        </p>

        <InfoBox type="tip" title="問題解決の基本ステップ">
          <ol className="list-decimal pl-4 space-y-1">
            <li>エラーメッセージを確認する</li>
            <li>ブラウザを更新する（F5キー）</li>
            <li>ブラウザのキャッシュをクリアする</li>
            <li>別のブラウザで試す</li>
            <li>それでも解決しない場合はサポートに連絡</li>
          </ol>
        </InfoBox>

        <h2 id="faq">よくある質問と対処法</h2>
        
        {faqItems.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="text-2xl mr-2">{category.icon}</span>
              {category.category}
            </h3>
            
            {category.questions.map((item, itemIndex) => (
              <div key={itemIndex} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 mb-4">
                <h4 className="font-semibold mb-3 flex items-start">
                  <AlertCircle className="text-yellow-500 mr-2 mt-0.5 flex-shrink-0" size={20} />
                  {item.q}
                </h4>
                <div className="pl-7">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">対処法：</p>
                  <ul className="space-y-2">
                    {item.a.map((answer, answerIndex) => (
                      <li key={answerIndex} className="flex items-start text-sm">
                        <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-gray-600 dark:text-gray-400">{answer}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ))}

        <h2 id="error-messages">エラーメッセージ一覧</h2>
        
        <table className="w-full border-collapse mb-6">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-left">エラーメッセージ</th>
              <th className="border border-gray-300 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-left">原因</th>
              <th className="border border-gray-300 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-left">対処法</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                <code className="text-red-600 text-xs">認証エラー</code>
              </td>
              <td className="border border-gray-300 px-4 py-2 text-sm">セッションの有効期限切れ</td>
              <td className="border border-gray-300 px-4 py-2 text-sm">再度ログインする</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                <code className="text-red-600 text-xs">ファイル形式エラー</code>
              </td>
              <td className="border border-gray-300 px-4 py-2 text-sm">対応していないファイル形式</td>
              <td className="border border-gray-300 px-4 py-2 text-sm">PDF、JPG、PNG形式に変換</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                <code className="text-red-600 text-xs">ネットワークエラー</code>
              </td>
              <td className="border border-gray-300 px-4 py-2 text-sm">通信の問題</td>
              <td className="border border-gray-300 px-4 py-2 text-sm">接続を確認して再試行</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                <code className="text-red-600 text-xs">処理タイムアウト</code>
              </td>
              <td className="border border-gray-300 px-4 py-2 text-sm">処理時間の超過</td>
              <td className="border border-gray-300 px-4 py-2 text-sm">ファイルを分割して再試行</td>
            </tr>
          </tbody>
        </table>

        <h2 id="browser-requirements">推奨ブラウザ環境</h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
          <h3 className="font-semibold mb-4">対応ブラウザ</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2 text-green-600">✅ 推奨ブラウザ</h4>
              <ul className="text-sm space-y-1">
                <li>• Google Chrome（最新版）</li>
                <li>• Microsoft Edge（最新版）</li>
                <li>• Mozilla Firefox（最新版）</li>
                <li>• Safari（最新版）</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2 text-red-600">❌ 非対応</h4>
              <ul className="text-sm space-y-1">
                <li>• Internet Explorer</li>
                <li>• 古いバージョンのブラウザ</li>
                <li>• モバイルブラウザ（一部機能制限）</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 id="performance-tips">パフォーマンス改善のヒント</h2>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-start">
            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mr-3 mt-1">
              <span className="text-blue-600 dark:text-blue-400 font-bold">1</span>
            </div>
            <div>
              <h4 className="font-semibold">画像の最適化</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                不要に高解像度の画像は処理時間が長くなります。300dpi程度が最適です。
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mr-3 mt-1">
              <span className="text-blue-600 dark:text-blue-400 font-bold">2</span>
            </div>
            <div>
              <h4 className="font-semibold">ファイルの分割</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                大量ページのPDFは分割してアップロードすることで処理速度が向上します。
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mr-3 mt-1">
              <span className="text-blue-600 dark:text-blue-400 font-bold">3</span>
            </div>
            <div>
              <h4 className="font-semibold">ブラウザキャッシュのクリア</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                定期的にブラウザのキャッシュをクリアすることで、動作が軽快になります。
              </p>
            </div>
          </div>
        </div>

        <InfoBox type="warning" title="それでも解決しない場合">
          上記の対処法を試しても問題が解決しない場合は、サポートまでお問い合わせください。
          お問い合わせの際は、以下の情報をお知らせください：
          <ul className="list-disc pl-4 mt-2">
            <li>エラーメッセージの内容（スクリーンショット推奨）</li>
            <li>使用しているブラウザとバージョン</li>
            <li>問題が発生した操作の手順</li>
            <li>ファイルの種類とサイズ</li>
          </ul>
        </InfoBox>

        <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h3 className="font-semibold mb-2">次のステップ</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            サポート情報とお問い合わせ方法を確認しましょう。
          </p>
          <a href="/chapters/support" className="inline-flex items-center text-primary hover:text-primary-dark">
            次へ: 9. サポート →
          </a>
        </div>
      </div>
    </div>
  );
}
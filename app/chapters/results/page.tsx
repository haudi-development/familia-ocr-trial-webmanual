'use client';

import React from 'react';
import Breadcrumb from '@/components/Navigation/Breadcrumb';
import InfoBox from '@/components/UI/InfoBox';
import { FileText, Image, Search, Copy, Download } from 'lucide-react';

export default function ResultsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <Breadcrumb 
        items={[
          { label: '5. 解析結果の確認' }
        ]} 
      />
      
      <h1 className="text-3xl font-bold mb-6">5. 解析結果の確認</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="lead text-gray-600 dark:text-gray-400 mb-6">
          解析が完了すると、OCR結果とAIによる構造化データを確認できます。
          視覚的な確認と、テキストデータの両方で結果を検証できます。
        </p>

        <h2 id="result-screen">5.1 解析結果画面の構成</h2>
        
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-6">
          <p className="mb-4">解析結果画面は2つのセクションで構成されています：</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <Image className="text-primary mr-2" size={20} />
                <h3 className="font-semibold">左側：ビジュアル確認エリア</h3>
              </div>
              <ul className="text-sm space-y-1 pl-6">
                <li>元の画像に認識された文字がオーバーレイ表示</li>
                <li>赤い枠で認識された文字領域を表示</li>
                <li>画像の拡大・縮小が可能</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <FileText className="text-primary mr-2" size={20} />
                <h3 className="font-semibold">右側：データ確認エリア</h3>
              </div>
              <ul className="text-sm space-y-1 pl-6">
                <li>「Text」タブ：純粋なOCR結果</li>
                <li>「解析結果」タブ：構造化データ</li>
                <li>コピー&ペースト可能</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 id="text-tab">5.2 Textタブ</h2>
        
        <p>
          「Text」タブでは、OCRエンジンが認識した生のテキストデータを確認できます。
        </p>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 mb-6">
          <h4 className="font-semibold mb-2">主な機能</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <Search className="text-gray-400 mr-2 mt-0.5" size={16} />
              <div>
                <strong>テキスト検索</strong>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Ctrl+F（Mac: Cmd+F）で認識されたテキスト内を検索
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <Copy className="text-gray-400 mr-2 mt-0.5" size={16} />
              <div>
                <strong>コピー機能</strong>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  必要な部分を選択してコピー可能
                </p>
              </div>
            </li>
          </ul>
        </div>

        <h2 id="analysis-tab">5.3 解析結果タブ</h2>
        
        <p>
          「解析結果」タブでは、選択したAIアシスタントが抽出した構造化データを確認できます。
        </p>

        <h3>解析結果の項目例（切符解析の場合）</h3>
        
        <table className="w-full border-collapse mb-6">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-left">項目</th>
              <th className="border border-gray-300 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-left">説明</th>
              <th className="border border-gray-300 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-left">例</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">券種</td>
              <td className="border border-gray-300 px-4 py-2">乗車券、特急券などの種別</td>
              <td className="border border-gray-300 px-4 py-2 text-sm font-mono">乗車券</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">発行会社</td>
              <td className="border border-gray-300 px-4 py-2">JR各社など発行元</td>
              <td className="border border-gray-300 px-4 py-2 text-sm font-mono">JR東日本</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">発券番号</td>
              <td className="border border-gray-300 px-4 py-2">切符の管理番号</td>
              <td className="border border-gray-300 px-4 py-2 text-sm font-mono">A12345678</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">発行日</td>
              <td className="border border-gray-300 px-4 py-2">切符の発行日時</td>
              <td className="border border-gray-300 px-4 py-2 text-sm font-mono">2025/01/15 10:30</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">発行駅</td>
              <td className="border border-gray-300 px-4 py-2">切符を発行した駅名</td>
              <td className="border border-gray-300 px-4 py-2 text-sm font-mono">東京駅</td>
            </tr>
          </tbody>
        </table>

        <InfoBox type="tip" title="解析精度を上げるために">
          解析結果の精度は、元画像の品質に大きく依存します。
          鮮明な画像、適切な解像度（300dpi以上）、傾きのない正しい向きの画像を使用することで、
          より正確な解析結果を得ることができます。
        </InfoBox>

        <h2 id="verification">5.4 結果の検証</h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
          <h3 className="font-semibold mb-4">検証のポイント</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong>視覚的確認</strong>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                左側の画像で、赤枠が正しく文字領域を捉えているか確認
              </p>
            </li>
            <li>
              <strong>OCR結果の確認</strong>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Textタブで認識された文字が正しいか確認
              </p>
            </li>
            <li>
              <strong>構造化データの確認</strong>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                解析結果タブで抽出された項目が適切か確認
              </p>
            </li>
          </ol>
        </div>

        <h2 id="editing">5.5 結果の編集</h2>
        
        <InfoBox type="info" title="手動編集機能">
          認識結果に誤りがある場合、エクスポート後にExcelなどで手動編集が可能です。
          将来的には、画面上での直接編集機能も実装予定です。
        </InfoBox>

        <h2 id="actions">5.6 結果画面からのアクション</h2>
        
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <button className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary transition-colors">
            <Download className="text-primary mb-2" size={24} />
            <span className="font-semibold">ダウンロード</span>
            <span className="text-xs text-gray-500">CSV/JSON形式</span>
          </button>
          
          <button className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary transition-colors">
            <Copy className="text-primary mb-2" size={24} />
            <span className="font-semibold">コピー</span>
            <span className="text-xs text-gray-500">クリップボードへ</span>
          </button>
          
          <button className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary transition-colors">
            <FileText className="text-primary mb-2" size={24} />
            <span className="font-semibold">再解析</span>
            <span className="text-xs text-gray-500">別のテンプレートで</span>
          </button>
        </div>

        <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h3 className="font-semibold mb-2">次のステップ</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            解析結果を確認したら、データをエクスポートしましょう。
          </p>
          <a href="/chapters/export" className="inline-flex items-center text-primary hover:text-primary-dark">
            次へ: 6. データエクスポート →
          </a>
        </div>
      </div>
    </div>
  );
}
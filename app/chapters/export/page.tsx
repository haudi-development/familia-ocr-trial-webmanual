'use client';

import React from 'react';
import Breadcrumb from '@/components/Navigation/Breadcrumb';
import InfoBox from '@/components/UI/InfoBox';
import { FileText, FileJson, Table } from 'lucide-react';

export default function ExportPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <Breadcrumb 
        items={[
          { label: '6. データエクスポート' }
        ]} 
      />
      
      <h1 className="text-3xl font-bold mb-6">6. データエクスポート</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="lead text-gray-600 dark:text-gray-400 mb-6">
          解析結果を様々な形式でエクスポートし、他のシステムやツールで活用できます。
        </p>

        <h2 id="formats">6.1 エクスポート形式</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <Table className="text-green-600 mb-4" size={32} />
            <h3 className="font-semibold mb-2">CSV形式</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Excel等で編集可能な表形式
            </p>
            <ul className="text-xs space-y-1">
              <li>✓ Excelで直接開ける</li>
              <li>✓ データ分析に最適</li>
              <li>✓ 軽量で扱いやすい</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <FileJson className="text-blue-600 mb-4" size={32} />
            <h3 className="font-semibold mb-2">JSON形式</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              システム連携用の構造化データ
            </p>
            <ul className="text-xs space-y-1">
              <li>✓ APIとの連携に最適</li>
              <li>✓ 階層構造を保持</li>
              <li>✓ プログラムで処理しやすい</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <FileText className="text-gray-600 mb-4" size={32} />
            <h3 className="font-semibold mb-2">テキスト形式</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              シンプルなテキストファイル
            </p>
            <ul className="text-xs space-y-1">
              <li>✓ どんな環境でも開ける</li>
              <li>✓ 最も軽量</li>
              <li>✓ メモ帳で編集可能</li>
            </ul>
          </div>
        </div>

        <h2 id="export-steps">6.2 エクスポート手順</h2>
        
        <ol className="list-decimal pl-6 space-y-4 mb-6">
          <li>
            <strong>解析結果画面を表示</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              文書一覧から対象ファイルの「詳細」ボタンをクリック
            </p>
          </li>
          <li>
            <strong>ダウンロードアイコンをクリック</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              画面右上の「ダウンロード」アイコンをクリック
            </p>
          </li>
          <li>
            <strong>形式を選択</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              CSV、JSON、テキストから希望の形式を選択
            </p>
          </li>
          <li>
            <strong>ダウンロード開始</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              ファイルが自動的にダウンロードされます
            </p>
          </li>
        </ol>

        <InfoBox type="tip" title="一括エクスポート">
          複数の文書を一度にエクスポートする場合は、文書一覧画面で対象ファイルを選択してから
          「一括ダウンロード」機能を使用します（今後実装予定）。
        </InfoBox>

        <h2 id="csv-usage">6.3 CSV形式の活用</h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
          <h3 className="font-semibold mb-4">Excelでの活用例</h3>
          <ul className="space-y-3">
            <li>
              <strong>データの集計</strong>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                ピボットテーブルを使用して月別・項目別の集計
              </p>
            </li>
            <li>
              <strong>グラフ作成</strong>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                データを視覚化して傾向を分析
              </p>
            </li>
            <li>
              <strong>データ加工</strong>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                関数を使用した計算や文字列処理
              </p>
            </li>
          </ul>
        </div>

        <h2 id="json-usage">6.4 JSON形式の活用</h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
          <h3 className="font-semibold mb-4">システム連携例</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`{
  "document_id": "DOC-2025-001",
  "type": "receipt",
  "date": "2025-01-15",
  "amount": 5000,
  "issuer": "株式会社サンプル",
  "items": [
    {
      "name": "商品A",
      "quantity": 2,
      "price": 2500
    }
  ]
}`}
          </pre>
        </div>

        <h2 id="file-naming">6.5 ファイル命名規則</h2>
        
        <p>エクスポートされるファイルは以下の命名規則に従います：</p>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 mb-6">
          <code className="text-sm">
            [文書名]_[処理日時]_[形式].[拡張子]
          </code>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            例：receipt_20250115_143000_export.csv
          </p>
        </div>

        <InfoBox type="info" title="文字コードについて">
          CSVファイルはUTF-8（BOM付き）で出力されます。
          Excelで文字化けする場合は、データのインポート機能を使用して
          文字コードを指定して開いてください。
        </InfoBox>

        <h2 id="batch-export">6.6 バッチエクスポート（今後実装予定）</h2>
        
        <p>
          将来的には、以下の機能を追加予定です：
        </p>
        
        <ul className="list-disc pl-6 mb-6">
          <li>複数ファイルの一括エクスポート</li>
          <li>定期的な自動エクスポート</li>
          <li>外部システムへの自動送信</li>
          <li>カスタムフォーマットの定義</li>
        </ul>

        <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h3 className="font-semibold mb-2">次のステップ</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Familia OCRの便利な機能について学びましょう。
          </p>
          <a href="/chapters/features" className="inline-flex items-center text-primary hover:text-primary-dark">
            次へ: 7. 便利な機能 →
          </a>
        </div>
      </div>
    </div>
  );
}
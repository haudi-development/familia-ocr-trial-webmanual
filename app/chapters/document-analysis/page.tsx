'use client';

import React from 'react';
import Breadcrumb from '@/components/Navigation/Breadcrumb';
import InfoBox from '@/components/UI/InfoBox';
import StepGuide from '@/components/Content/StepGuide';
import { MousePointer, Folder } from 'lucide-react';

const analysisSteps = [
  {
    number: 1,
    title: '文書一覧画面へアクセス',
    description: '左側メニューから「文書一覧」をクリックして、文書管理画面に移動します。',
    image: '/images/screenshots/03-document-list/document-list-empty.png',
  },
  {
    number: 2,
    title: '新規作成からファイルをアップロード',
    description: '画面右上の「＋ 新規作成」ボタンをクリックし、解析したいファイルをドラッグ&ドロップまたは選択してアップロードします。',
    image: '/images/screenshots/04-upload/new-document-dialog.png',
  },
  {
    number: 3,
    title: 'AIアシスタントを選択',
    description: '文書の種類に応じて適切なAIアシスタントテンプレートを選択します。',
    image: '/images/screenshots/05-ai-assistant/ai-assistant-selection.png',
  },
  {
    number: 4,
    title: '変換を実行',
    description: '「変換」ボタンをクリックして解析を開始します。',
    image: '/images/screenshots/06-processing/conversion-button.png',
  },
];

export default function DocumentAnalysisPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <Breadcrumb 
        items={[
          { label: '3. 文書解析の実行とファイルアップロード' }
        ]} 
      />
      
      <h1 className="text-3xl font-bold mb-6">3. 文書解析の実行とファイルアップロード</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="lead text-gray-600 dark:text-gray-400 mb-6">
          文書解析は、Familia OCRの中核機能です。
          PDFや画像ファイルをアップロードし、AIによる高精度な文字認識と内容解析を実行します。
        </p>

        <h2 id="overview">3.1 文書解析の流れ</h2>
        <p>
          文書解析は以下の流れで実行されます：
        </p>
        <ol className="list-decimal pl-6 mb-6">
          <li>文書一覧画面へのアクセス</li>
          <li>新規作成とファイルのアップロード</li>
          <li>AIアシスタントの選択</li>
          <li>解析の実行</li>
          <li>結果の確認</li>
        </ol>

        <h2 id="step-by-step">3.2 詳細手順</h2>
        <StepGuide steps={analysisSteps} />

        <h2 id="file-requirements">3.3 対応ファイル形式と制限</h2>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 mb-6">
          <h3 className="font-semibold mb-4">対応ファイル形式</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl font-bold text-red-600 dark:text-red-400">PDF</span>
              </div>
              <p className="text-sm">推奨形式</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">JPG</span>
              </div>
              <p className="text-sm">JPEG画像</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">PNG</span>
              </div>
              <p className="text-sm">PNG画像</p>
            </div>
          </div>
        </div>

        <InfoBox type="warning" title="ファイルサイズ制限">
          <ul className="list-disc pl-4">
            <li>最大ファイルサイズ：10MB</li>
            <li>最大画素数：ZIP圧縮で100MB相当まで</li>
            <li>複数ページのPDFにも対応</li>
            <li>一度にアップロード可能なファイル数：10ファイルまで</li>
          </ul>
        </InfoBox>

        <h2 id="upload-methods">3.4 アップロード方法</h2>
        
        <h3 id="drag-drop">方法1：ドラッグ&ドロップ</h3>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
          <div className="flex items-center mb-4">
            <MousePointer className="text-primary mr-2" size={24} />
            <span className="font-semibold">最も簡単な方法</span>
          </div>
          <ol className="list-decimal pl-6">
            <li>デスクトップやフォルダからファイルを選択</li>
            <li>「ファイルをドラッグ&ドロップ」エリアまでドラッグ</li>
            <li>エリア内でマウスボタンを離す</li>
          </ol>
        </div>

        <h3 id="file-select">方法2：ファイル選択</h3>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
          <div className="flex items-center mb-4">
            <Folder className="text-primary mr-2" size={24} />
            <span className="font-semibold">従来の選択方法</span>
          </div>
          <ol className="list-decimal pl-6">
            <li>「アップロード済みファイル」セクションをクリック</li>
            <li>ファイル選択ダイアログが表示される</li>
            <li>ファイルを選択して「開く」をクリック</li>
          </ol>
        </div>

        <InfoBox type="tip" title="複数ファイル選択のコツ">
          <ul className="list-disc pl-4">
            <li>Ctrlキー（Macの場合はCmd）を押しながらクリックで複数選択</li>
            <li>Shiftキーを押しながらクリックで範囲選択</li>
            <li>フォルダ内のすべてのファイルを選択：Ctrl+A（Mac: Cmd+A）</li>
          </ul>
        </InfoBox>

        <h2 id="best-practices">3.5 高精度な解析のためのベストプラクティス</h2>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-start">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
              <span className="text-primary font-bold">1</span>
            </div>
            <div>
              <h4 className="font-semibold">高解像度でスキャン</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                300dpi以上の解像度でスキャンすることで、文字認識精度が向上します。
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
              <span className="text-primary font-bold">2</span>
            </div>
            <div>
              <h4 className="font-semibold">画像の傾きを補正</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                スキャン時の傾きは認識精度に影響します。できるだけまっすぐにスキャンしてください。
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
              <span className="text-primary font-bold">3</span>
            </div>
            <div>
              <h4 className="font-semibold">適切なAIアシスタントを選択</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                文書の種類に応じたテンプレートを選択することで、より精度の高い構造化データを取得できます。
              </p>
            </div>
          </div>
        </div>

        <InfoBox type="tip" title="処理時間について">
          トライアル版では処理速度に制限があり、最大30秒程度かかる場合があります。
          本番環境では大幅に処理時間が短縮されます。
        </InfoBox>

        <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h3 className="font-semibold mb-2">次のステップ</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            AIアシスタントの選択方法について学びましょう。
          </p>
          <a href="/chapters/ai-assistant" className="inline-flex items-center text-primary hover:text-primary-dark">
            次へ: 4. AIアシスタント選択 →
          </a>
        </div>
      </div>
    </div>
  );
}
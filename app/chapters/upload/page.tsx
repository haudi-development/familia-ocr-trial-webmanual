'use client';

import React from 'react';
import Breadcrumb from '@/components/Navigation/Breadcrumb';
import InfoBox from '@/components/UI/InfoBox';
import StepGuide from '@/components/Content/StepGuide';
import { FileText, MousePointer, Folder } from 'lucide-react';

const uploadSteps = [
  {
    number: 1,
    title: '「新規作成」ダイアログを開く',
    description: '文書一覧画面で「＋ 新規作成」ボタンをクリックすると、ファイルアップロード画面が表示されます。',
    image: '/images/screenshots/04-upload/new-document-dialog.png',
  },
  {
    number: 2,
    title: 'ファイルを選択',
    description: 'ドラッグ&ドロップエリアにファイルをドロップするか、クリックしてファイルを選択します。',
  },
  {
    number: 3,
    title: 'アップロード確認',
    description: 'ファイル名が表示されたら、アップロードが完了です。複数ファイルも同時にアップロード可能です。',
  },
];

export default function UploadPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <Breadcrumb 
        items={[
          { label: '4. ファイルアップロード' }
        ]} 
      />
      
      <h1 className="text-3xl font-bold mb-6">4. ファイルアップロード</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="lead text-gray-600 dark:text-gray-400 mb-6">
          解析したい文書をシステムにアップロードする方法について説明します。
          直感的な操作で簡単にファイルをアップロードできます。
        </p>

        <h2 id="supported-formats">4.1 対応ファイル形式</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 text-center">
            <div className="w-20 h-20 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <FileText className="text-red-600 dark:text-red-400" size={40} />
            </div>
            <h3 className="font-semibold mb-2">PDF</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              推奨形式<br />
              複数ページ対応
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 text-center">
            <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <FileText className="text-blue-600 dark:text-blue-400" size={40} />
            </div>
            <h3 className="font-semibold mb-2">JPG/JPEG</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              写真形式<br />
              高圧縮対応
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 text-center">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <FileText className="text-green-600 dark:text-green-400" size={40} />
            </div>
            <h3 className="font-semibold mb-2">PNG</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              高品質画像<br />
              透過対応
            </p>
          </div>
        </div>

        <InfoBox type="warning" title="ファイルサイズ制限">
          <ul className="list-disc pl-4">
            <li>最大ファイルサイズ：10MB</li>
            <li>最大画素数：ZIP圧縮で100MB相当まで</li>
            <li>一度にアップロード可能なファイル数：10ファイルまで</li>
          </ul>
        </InfoBox>

        <h2 id="upload-methods">4.2 アップロード方法</h2>
        
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

        <h2 id="upload-process">4.3 アップロード手順</h2>
        <StepGuide steps={uploadSteps} />

        <h2 id="multiple-files">4.4 複数ファイルの同時アップロード</h2>
        <p>
          Familia OCRでは、複数のファイルを同時にアップロードして一括処理することが可能です。
        </p>
        
        <InfoBox type="tip" title="複数ファイル選択のコツ">
          <ul className="list-disc pl-4">
            <li>Ctrlキー（Macの場合はCmd）を押しながらクリックで複数選択</li>
            <li>Shiftキーを押しながらクリックで範囲選択</li>
            <li>フォルダ内のすべてのファイルを選択：Ctrl+A（Mac: Cmd+A）</li>
          </ul>
        </InfoBox>

        <h2 id="upload-status">4.5 アップロード状態の確認</h2>
        
        <table className="w-full border-collapse mb-6">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 bg-gray-100 dark:bg-gray-800">状態</th>
              <th className="border border-gray-300 px-4 py-2 bg-gray-100 dark:bg-gray-800">説明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  アップロード中
                </span>
              </td>
              <td className="border border-gray-300 px-4 py-2">ファイルを転送中です</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  完了
                </span>
              </td>
              <td className="border border-gray-300 px-4 py-2">アップロードが正常に完了しました</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  エラー
                </span>
              </td>
              <td className="border border-gray-300 px-4 py-2">アップロードに失敗しました</td>
            </tr>
          </tbody>
        </table>

        <h2 id="troubleshooting">4.6 アップロードできない場合</h2>
        
        <InfoBox type="warning" title="よくあるエラーと対処法">
          <dl className="space-y-2">
            <dt className="font-semibold">「ファイルサイズが大きすぎます」</dt>
            <dd className="pl-4 text-sm">→ ファイルを圧縮するか、解像度を下げてください</dd>
            
            <dt className="font-semibold">「対応していないファイル形式です」</dt>
            <dd className="pl-4 text-sm">→ PDF、JPG、PNG形式に変換してください</dd>
            
            <dt className="font-semibold">「ネットワークエラー」</dt>
            <dd className="pl-4 text-sm">→ インターネット接続を確認してください</dd>
          </dl>
        </InfoBox>

        <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h3 className="font-semibold mb-2">次のステップ</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            ファイルのアップロードが完了したら、AIアシスタントを選択します。
          </p>
          <a href="/chapters/ai-assistant" className="inline-flex items-center text-primary hover:text-primary-dark">
            次へ: 5. AIアシスタント選択 →
          </a>
        </div>
      </div>
    </div>
  );
}
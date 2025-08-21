'use client';

import React from 'react';
import Breadcrumb from '@/components/Navigation/Breadcrumb';
import InfoBox from '@/components/UI/InfoBox';
import { Bot, Receipt, FileText, CreditCard, BookOpen } from 'lucide-react';

const assistantTemplates = [
  {
    icon: Receipt,
    title: '切符解析AIアシスタント',
    description: '鉄道切符の情報を自動抽出',
    features: ['券種', '発行会社', '発券番号', '発行日', '発行駅', '発券機番号'],
    color: 'blue',
  },
  {
    icon: CreditCard,
    title: '電力請求書解析AIアシスタント',
    description: '電力会社の請求書から重要項目を抽出',
    features: ['契約者名', '使用量', '請求金額', '使用期間', '支払期限'],
    color: 'yellow',
  },
  {
    icon: BookOpen,
    title: '通帳・入出金明細解析AIアシスタント',
    description: '銀行通帳の取引情報を構造化',
    features: ['取引日', '摘要', '出金額', '入金額', '残高'],
    color: 'green',
  },
  {
    icon: FileText,
    title: '領収書解析AIアシスタント',
    description: '領収書から金額・日付・発行者情報を抽出',
    features: ['発行日', '金額', '但し書き', '発行者', '受領者'],
    color: 'purple',
  },
];

export default function AIAssistantPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <Breadcrumb 
        items={[
          { label: '4. AIアシスタント選択' }
        ]} 
      />
      
      <h1 className="text-3xl font-bold mb-6">4. AIアシスタント選択</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="lead text-gray-600 dark:text-gray-400 mb-6">
          文書の種類に応じて最適なAIアシスタントテンプレートを選択することで、
          より高精度で構造化された解析結果を得ることができます。
        </p>

        <div className="relative w-full mb-6">
          <img 
            src="/images/screenshots/05-ai-assistant/ai-assistant-selection.png"
            alt="AIアシスタント選択画面"
            className="w-full rounded-lg border border-gray-200 dark:border-gray-700"
          />
        </div>

        <h2 id="overview">4.1 AIアシスタントとは</h2>
        <p>
          AIアシスタントは、特定の文書タイプに特化した解析エンジンです。
          文書の種類に応じた専門的な知識を持ち、重要な情報を自動的に抽出・構造化します。
        </p>

        <InfoBox type="tip" title="最適なテンプレートの選び方">
          解析したい文書の種類と完全に一致するテンプレートがない場合でも、
          最も近い形式のテンプレートを選択することで、ある程度の構造化が可能です。
        </InfoBox>

        <h2 id="templates">4.2 利用可能なテンプレート</h2>
        
        <div className="grid gap-6 mb-6">
          {assistantTemplates.map((template, index) => {
            const Icon = template.icon;
            return (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-start">
                  <div className={`w-12 h-12 bg-${template.color}-100 dark:bg-${template.color}-900/20 rounded-lg flex items-center justify-center mr-4`}>
                    <Icon className={`text-${template.color}-600 dark:text-${template.color}-400`} size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{template.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">{template.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {template.features.map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <h2 id="selection-process">4.3 選択手順</h2>
        
        <ol className="list-decimal pl-6 space-y-3 mb-6">
          <li>
            <strong>ファイルアップロード完了後</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              ファイルのアップロードが完了すると、自動的にテンプレート選択画面が表示されます。
            </p>
          </li>
          <li>
            <strong>「テンプレート選択」タブをクリック</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              画面上部のタブから「テンプレート選択」を選びます。
            </p>
          </li>
          <li>
            <strong>適切なテンプレートを選択</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              文書の種類に最も適したAIアシスタントを選択します。
            </p>
          </li>
          <li>
            <strong>選択の確認</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              選択したテンプレートがハイライト表示されます。
            </p>
          </li>
        </ol>

        <h2 id="custom-templates">4.4 カスタムテンプレート（今後実装予定）</h2>
        
        <InfoBox type="info" title="カスタマイズ機能">
          将来的には、お客様の業務に特化したカスタムテンプレートの作成機能を提供予定です。
          特定の帳票や書式に対応した専用テンプレートを作成することで、
          さらに高精度な解析が可能になります。
        </InfoBox>

        <h2 id="best-practices">4.5 テンプレート選択のベストプラクティス</h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
          <h3 className="font-semibold mb-4">効果的な活用のために</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <div>
                <strong>文書の種類を正確に把握</strong>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  解析前に文書の種類を確認し、最適なテンプレートを選択します。
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <div>
                <strong>複数の文書種類がある場合</strong>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  文書の種類ごとに分けてアップロードし、それぞれに適したテンプレートを選択します。
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <div>
                <strong>テンプレートの試用</strong>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  初めての文書タイプの場合は、複数のテンプレートを試して最適なものを見つけます。
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h3 className="font-semibold mb-2">次のステップ</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            AIアシスタントを選択したら、解析結果を確認しましょう。
          </p>
          <a href="/chapters/results" className="inline-flex items-center text-primary hover:text-primary-dark">
            次へ: 5. 解析結果の確認 →
          </a>
        </div>
      </div>
    </div>
  );
}
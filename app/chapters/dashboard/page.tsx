'use client';

import React from 'react';
import Breadcrumb from '@/components/Navigation/Breadcrumb';
import InfoBox from '@/components/UI/InfoBox';
import { BarChart3, FileText, Calendar, TrendingUp } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <Breadcrumb 
        items={[
          { label: '2. ダッシュボード' }
        ]} 
      />
      
      <h1 className="text-3xl font-bold mb-6">2. ダッシュボード</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="lead text-gray-600 dark:text-gray-400 mb-6">
          ダッシュボードは、Familia OCRの利用状況を一目で確認できる管理画面です。
          処理件数の推移や統計情報を視覚的に把握できます。
        </p>

        <div className="relative w-full mb-6">
          <img 
            src="/images/screenshots/02-dashboard/dashboard-overview.png"
            alt="ダッシュボード画面"
            className="w-full rounded-lg border border-gray-200 dark:border-gray-700"
          />
        </div>

        <h2 id="overview">2.1 ダッシュボードの概要</h2>
        <p>
          ログイン後、最初に表示される画面がダッシュボードです。
          ここでは、システムの利用状況を一目で確認できます。
        </p>

        <h2 id="main-features">2.2 ダッシュボードの主要機能</h2>
        
        <h3 id="sidebar-menu">左側メニュー</h3>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>ダッシュボード</strong>：現在の画面（ホーム画面）</li>
          <li><strong>文書一覧</strong>：解析済み文書の管理画面へ移動</li>
          <li><strong>出力レイアウト</strong>：出力形式の設定（今後実装予定）</li>
        </ul>

        <h3 id="central-area">中央エリア</h3>
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 mb-6">
          <h4 className="font-semibold mb-3 flex items-center">
            <BarChart3 className="mr-2" size={20} />
            統計グラフ
          </h4>
          <ul className="list-disc pl-6">
            <li>月別・日別の処理件数を視覚的に表示</li>
            <li>表示期間の切り替えが可能（年・月選択）</li>
            <li>グラフ上にマウスを置くと詳細数値を表示</li>
          </ul>
        </div>

        <h3 id="summary-area">右側サマリー</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
            <FileText className="text-primary mb-2" size={24} />
            <h4 className="font-semibold">全体統計</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">総処理件数の確認</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
            <Calendar className="text-primary mb-2" size={24} />
            <h4 className="font-semibold">月平均</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">月間の平均処理件数</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
            <TrendingUp className="text-primary mb-2" size={24} />
            <h4 className="font-semibold">最大値</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">最も処理が多かった月の件数</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
            <FileText className="text-primary mb-2" size={24} />
            <h4 className="font-semibold">ページ総数</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">処理したページの合計数</p>
          </div>
        </div>

        <InfoBox type="tip" title="ダッシュボードの活用方法">
          定期的にダッシュボードを確認することで、処理量の傾向を把握し、業務の効率化につなげることができます。
          特に月次での処理件数の推移を確認することで、繁忙期の予測が可能になります。
        </InfoBox>

        <h2 id="data-export">2.3 統計データのエクスポート</h2>
        <p>
          統計データはCSV形式でエクスポート可能です（今後実装予定）。
          エクスポートしたデータは、Excelなどで詳細な分析が可能です。
        </p>

        <h2 id="customization">2.4 ダッシュボードのカスタマイズ</h2>
        <InfoBox type="info">
          将来的には、表示する統計情報の種類や期間をカスタマイズできる機能を追加予定です。
          ご要望がございましたら、サポートまでお知らせください。
        </InfoBox>

        <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h3 className="font-semibold mb-2">次のステップ</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            ダッシュボードから「文書一覧」に移動して、文書解析を開始しましょう。
          </p>
          <a href="/chapters/document-analysis" className="inline-flex items-center text-primary hover:text-primary-dark">
            次へ: 3. 文書解析の実行 →
          </a>
        </div>
      </div>
    </div>
  );
}
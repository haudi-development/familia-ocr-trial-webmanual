'use client';

import React from 'react';
import Link from 'next/link';
import Breadcrumb from '@/components/Navigation/Breadcrumb';
import InfoBox from '@/components/UI/InfoBox';
import { Mail, Phone, Clock, MessageCircle, FileText, Star } from 'lucide-react';

export default function SupportPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <Breadcrumb 
        items={[
          { label: '9. サポート' }
        ]} 
      />
      
      <h1 className="text-3xl font-bold mb-6">9. サポート</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="lead text-gray-600 dark:text-gray-400 mb-6">
          Familia OCRに関するお問い合わせ、技術サポート、フィードバックの窓口をご案内します。
        </p>

        <h2 id="contact">お問い合わせ窓口</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center mb-4">
              <Mail className="text-primary mr-3" size={24} />
              <h3 className="font-semibold">メールサポート</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              技術的な質問や操作方法について
            </p>
            <a href="mailto:support@haudi.jp" className="text-primary hover:text-primary-dark font-medium">
              support@haudi.jp
            </a>
            <p className="text-xs text-gray-500 mt-2">
              返信目安：1営業日以内
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center mb-4">
              <Phone className="text-primary mr-3" size={24} />
              <h3 className="font-semibold">電話サポート</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              緊急の問題や直接相談したい場合
            </p>
            <a href="tel:03-3527-2080" className="text-primary hover:text-primary-dark font-medium">
              03-3527-2080
            </a>
            <p className="text-xs text-gray-500 mt-2">
              営業時間：平日 9:00-18:00
            </p>
          </div>
        </div>

        <InfoBox type="tip" title="スムーズなサポートのために">
          お問い合わせの際は、以下の情報をご準備ください：
          <ul className="list-disc pl-4 mt-2">
            <li>アカウント情報（メールアドレス）</li>
            <li>問題が発生した日時</li>
            <li>エラーメッセージやスクリーンショット</li>
            <li>使用環境（OS、ブラウザ）</li>
          </ul>
        </InfoBox>

        <h2 id="support-hours">サポート営業時間</h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
          <div className="flex items-center mb-4">
            <Clock className="text-green-500 mr-3" size={24} />
            <h3 className="font-semibold">営業時間</h3>
          </div>
          
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 font-medium">平日（月〜金）</td>
                <td className="py-2">9:00 - 18:00</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 font-medium">土日祝日</td>
                <td className="py-2 text-red-600">休業</td>
              </tr>
              <tr>
                <td className="py-2 font-medium">年末年始</td>
                <td className="py-2 text-red-600">12/29 - 1/3 休業</td>
              </tr>
            </tbody>
          </table>
          
          <p className="text-xs text-gray-500 mt-4">
            ※緊急の障害対応は営業時間外でも対応する場合があります
          </p>
        </div>

        <h2 id="support-types">サポートの種類</h2>
        
        <div className="space-y-4 mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
            <h3 className="font-semibold mb-2 flex items-center">
              <MessageCircle className="text-blue-500 mr-2" size={20} />
              技術サポート
            </h3>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 pl-7">
              <li>• システムの操作方法</li>
              <li>• エラーの解決方法</li>
              <li>• 機能の使い方</li>
              <li>• トラブルシューティング</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
            <h3 className="font-semibold mb-2 flex items-center">
              <FileText className="text-green-500 mr-2" size={20} />
              導入相談
            </h3>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 pl-7">
              <li>• 本番環境への移行相談</li>
              <li>• ライセンスプランの相談</li>
              <li>• カスタマイズの要望</li>
              <li>• 大規模利用の相談</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
            <h3 className="font-semibold mb-2 flex items-center">
              <Star className="text-yellow-500 mr-2" size={20} />
              フィードバック
            </h3>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 pl-7">
              <li>• 機能改善の要望</li>
              <li>• 新機能のリクエスト</li>
              <li>• 使用感のフィードバック</li>
              <li>• バグ報告</li>
            </ul>
          </div>
        </div>

        <h2 id="faq-link">よくあるご質問</h2>
        
        <p>
          よくいただくご質問と回答は、<a href="/chapters/troubleshooting" className="text-primary hover:text-primary-dark">トラブルシューティング</a>ページにまとめています。
          お問い合わせ前にご確認いただくと、素早く問題を解決できる場合があります。
        </p>

        <h2 id="feedback">フィードバックのお願い</h2>
        
        <InfoBox type="info" title="製品改善にご協力ください">
          Familia OCRをより良い製品にするため、皆様からのフィードバックを大切にしています。
          <ul className="list-disc pl-4 mt-2">
            <li>使いにくい機能や改善点</li>
            <li>追加してほしい機能</li>
            <li>処理精度に関するご意見</li>
            <li>マニュアルの改善点</li>
          </ul>
          どんな小さなことでも構いません。お気軽にご意見をお寄せください。
        </InfoBox>

        <h2 id="company-info">会社情報</h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
          <h3 className="font-semibold mb-4">株式会社ハウディ</h3>
          
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 font-medium w-32">会社名</td>
                <td className="py-2">株式会社ハウディ</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 font-medium">所在地</td>
                <td className="py-2">東京都千代田区</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 font-medium">電話番号</td>
                <td className="py-2">03-3527-2080</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 font-medium">メール</td>
                <td className="py-2">
                  <a href="mailto:support@haudi.jp" className="text-primary hover:text-primary-dark">
                    support@haudi.jp
                  </a>
                </td>
              </tr>
              <tr>
                <td className="py-2 font-medium">Webサイト</td>
                <td className="py-2">
                  <a href="https://haudi.jp" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
                    https://haudi.jp
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="remote-support">リモートサポート</h2>
        
        <p>
          複雑な問題の場合、画面共有によるリモートサポートも提供しています。
          リモートサポートをご希望の場合は、事前にメールまたは電話でご予約ください。
        </p>
        
        <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 mb-6">
          <p className="text-sm text-yellow-800 dark:text-yellow-200">
            <strong>リモートサポートの流れ：</strong>
          </p>
          <ol className="list-decimal pl-6 text-sm text-yellow-700 dark:text-yellow-300 mt-2">
            <li>サポートへ連絡して日時を予約</li>
            <li>指定の時間にWeb会議システムに接続</li>
            <li>画面共有で問題を確認</li>
            <li>リアルタイムで解決方法をご案内</li>
          </ol>
        </div>

        <h2 id="satisfaction">満足度調査</h2>
        
        <p>
          サポート対応後、満足度調査へのご協力をお願いする場合があります。
          いただいたご意見は、サービス品質の向上に活用させていただきます。
        </p>

        <div className="mt-8 p-6 bg-gradient-to-r from-primary to-primary-light text-white rounded-lg">
          <h3 className="font-semibold mb-2">トライアル版をご利用いただきありがとうございます</h3>
          <p className="text-sm mb-4">
            Familia OCRがお客様の業務効率化に貢献できることを願っています。
            ご不明な点がございましたら、お気軽にサポートまでお問い合わせください。
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:support@haudi.jp" className="inline-flex items-center bg-white text-primary px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              <Mail className="mr-2" size={18} />
              メールで問い合わせ
            </a>
            <Link href="/" className="inline-flex items-center bg-primary-dark text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-dark/90 transition-colors">
              トップページへ戻る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
'use client';

import React from 'react';
import Breadcrumb from '@/components/Navigation/Breadcrumb';
import InfoBox from '@/components/UI/InfoBox';
import StepGuide from '@/components/Content/StepGuide';

const loginSteps = [
  {
    number: 1,
    title: 'Webブラウザで指定のURLにアクセス',
    description: '管理者から提供されたURLをWebブラウザのアドレスバーに入力してアクセスします。',
  },
  {
    number: 2,
    title: 'ログイン画面の表示',
    description: 'ログイン画面が表示されます。',
    image: '/images/screenshots/01-login/login-screen.png',
  },
  {
    number: 3,
    title: 'アカウント情報の入力',
    description: '「電子メール」欄にメールアドレス、「パスワード」欄に初期パスワードを入力します。',
  },
  {
    number: 4,
    title: 'サインインボタンをクリック',
    description: '入力内容を確認後、「サインイン」ボタンをクリックしてログインします。',
  },
];

export default function LoginPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <Breadcrumb 
        items={[
          { label: '1. ログイン' }
        ]} 
      />
      
      <h1 className="text-3xl font-bold mb-6">1. ログイン</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="lead text-gray-600 dark:text-gray-400 mb-6">
          Familia OCRトライアル版へのログイン方法について説明します。
          トライアル開始時に発行されたアカウント情報を使用してシステムにアクセスします。
        </p>

        <h2 id="account-info">1.1 アカウント情報の確認</h2>
        <p>
          トライアル開始にあたり、弊社より以下の情報をお送りしています：
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>メールアドレス</strong>：ログイン用のメールアドレス</li>
          <li><strong>パスワード</strong>：初期パスワード</li>
        </ul>

        <InfoBox type="warning" title="初回ログイン時の注意">
          初期パスワードは必ず変更することをお勧めします。セキュリティ向上のため、8文字以上で英数字と記号を組み合わせた強固なパスワードを設定してください。
        </InfoBox>

        <h2 id="login-steps">1.2 ログイン手順</h2>
        <StepGuide steps={loginSteps} />

        <h2 id="troubleshooting">1.3 ログインできない場合</h2>
        
        <InfoBox type="tip" title="パスワードをお忘れの場合">
          ログイン画面の「パスワードをお忘れですか？」リンクをクリックして、パスワードリセットの手続きを行ってください。
          登録されているメールアドレスにリセット用のリンクが送信されます。
        </InfoBox>

        <h3>よくある問題と対処法</h3>
        <table className="w-full border-collapse mb-6">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 bg-gray-100 dark:bg-gray-800">問題</th>
              <th className="border border-gray-300 px-4 py-2 bg-gray-100 dark:bg-gray-800">対処法</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">「メールアドレスまたはパスワードが正しくありません」と表示される</td>
              <td className="border border-gray-300 px-4 py-2">
                <ul className="list-disc pl-4">
                  <li>大文字・小文字の区別を確認</li>
                  <li>余分なスペースが入っていないか確認</li>
                  <li>Caps Lockがオンになっていないか確認</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">ログイン画面が表示されない</td>
              <td className="border border-gray-300 px-4 py-2">
                <ul className="list-disc pl-4">
                  <li>URLが正しいか確認</li>
                  <li>ネットワーク接続を確認</li>
                  <li>ブラウザのキャッシュをクリア</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">ログイン後すぐにログアウトされる</td>
              <td className="border border-gray-300 px-4 py-2">
                <ul className="list-disc pl-4">
                  <li>ブラウザのCookieが有効か確認</li>
                  <li>プライベートブラウジングモードを解除</li>
                  <li>別のブラウザで試す</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>

        <h2 id="security">1.4 セキュリティについて</h2>
        <InfoBox type="info" title="セキュリティのベストプラクティス">
          <ul className="list-disc pl-4">
            <li>パスワードは定期的に変更する</li>
            <li>他のサービスと同じパスワードを使用しない</li>
            <li>ログイン情報を他人と共有しない</li>
            <li>使用後は必ずログアウトする</li>
            <li>公共のコンピュータでの使用は避ける</li>
          </ul>
        </InfoBox>

        <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h3 className="font-semibold mb-2">次のステップ</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            ログインに成功すると、ダッシュボード画面が表示されます。
          </p>
          <a href="/chapters/dashboard" className="inline-flex items-center text-primary hover:text-primary-dark">
            次へ: 2. ダッシュボード →
          </a>
        </div>
      </div>
    </div>
  );
}
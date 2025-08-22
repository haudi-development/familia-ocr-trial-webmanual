import Link from 'next/link';
import { 
  LogIn, 
  LayoutDashboard, 
  FileSearch, 
  Bot, 
  FileOutput, 
  Download, 
  Sparkles,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import InfoBox from '@/components/UI/InfoBox';

const features = [
  {
    icon: FileSearch,
    title: 'AI OCR技術',
    description: '高精度な文字認識で紙文書をデジタル化',
  },
  {
    icon: Bot,
    title: 'LLM統合',
    description: '大規模言語モデルによる文書内容の理解と構造化',
  },
  {
    icon: Sparkles,
    title: 'テンプレート',
    description: '切符、請求書、通帳など用途別の解析テンプレート',
  },
];

const quickLinks = [
  {
    icon: LogIn,
    title: '1. ログイン',
    href: '/chapters/login',
    description: 'アカウントへのログイン方法',
  },
  {
    icon: LayoutDashboard,
    title: '2. ダッシュボード',
    href: '/chapters/dashboard',
    description: '管理画面の見方と使い方',
  },
  {
    icon: FileSearch,
    title: '3. 文書解析とアップロード',
    href: '/chapters/document-analysis',
    description: '文書解析とファイルアップロード',
  },
  {
    icon: Bot,
    title: '4. AIアシスタント',
    href: '/chapters/ai-assistant',
    description: 'AIテンプレートの選択',
  },
  {
    icon: FileOutput,
    title: '5. 結果確認',
    href: '/chapters/results',
    description: '解析結果の確認方法',
  },
  {
    icon: Download,
    title: '6. エクスポート',
    href: '/chapters/export',
    description: 'データのダウンロード',
  },
  {
    icon: Sparkles,
    title: '7. 便利な機能',
    href: '/chapters/features',
    description: '活用のヒント',
  },
];

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary-light text-white rounded-2xl p-8 md:p-12 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Familia OCR トライアル版
        </h1>
        <p className="text-lg mb-6 opacity-95">
          操作マニュアル - AI OCRとLLMを融合させた次世代の文書処理ソリューション
        </p>
        <div className="flex flex-wrap gap-4">
          <Link 
            href="/chapters/login"
            className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            クイックスタート
            <ArrowRight className="ml-2" size={20} />
          </Link>
          <Link 
            href="/chapters/troubleshooting"
            className="inline-flex items-center bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark/90 transition-colors"
          >
            トラブルシューティング
          </Link>
        </div>
      </div>

      {/* About Trial Version */}
      <InfoBox type="info" title="トライアル版について">
        <ul className="space-y-1">
          <li className="flex items-start">
            <CheckCircle size={16} className="mr-2 mt-0.5 flex-shrink-0" />
            <span>トライアル版では処理速度に制限があります（最大30秒程度）</span>
          </li>
          <li className="flex items-start">
            <CheckCircle size={16} className="mr-2 mt-0.5 flex-shrink-0" />
            <span>本番環境では、より高速な処理が可能です</span>
          </li>
          <li className="flex items-start">
            <CheckCircle size={16} className="mr-2 mt-0.5 flex-shrink-0" />
            <span>トライアル期間中は、すべての基本機能をお試しいただけます</span>
          </li>
        </ul>
      </InfoBox>

      {/* Features */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">主な機能</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick Links */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">目次</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {quickLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <Link
                key={index}
                href={link.href}
                className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Icon className="text-primary" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {link.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {link.description}
                  </p>
                </div>
                <ArrowRight className="text-gray-400 flex-shrink-0" size={20} />
              </Link>
            );
          })}
        </div>
      </section>

      {/* Support Info */}
      <section className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">サポート情報</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">技術サポート</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              操作方法や技術的なご質問はこちら
            </p>
            <p className="text-sm">
              <a href="mailto:support@haudi.jp" className="text-primary hover:underline">
                support@haudi.jp
              </a>
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">営業時間</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              平日 9:00-18:00<br />
              電話: 03-3527-2080
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
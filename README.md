# Familia OCR トライアル版マニュアルサイト

株式会社ハウディが開発した文書処理ソリューション「Familia OCR」のトライアル版利用者向けWebマニュアルサイトです。

## 🚀 機能

- **レスポンシブデザイン**: PC、タブレット、スマートフォンに対応
- **ナビゲーション**: サイドバー式の目次とパンくずリスト
- **検索機能**: マニュアル内のキーワード検索
- **画像表示**: クリックで拡大表示（モーダル/ライトボックス）
- **印刷対応**: 印刷用CSS対応
- **ダークモード**: システム設定に応じた表示切り替え

## 📁 プロジェクト構造

```
familia-ocr-trial-webmanual/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # ルートレイアウト
│   ├── page.tsx            # トップページ
│   └── chapters/           # 各章のページ
│       ├── login/
│       ├── dashboard/
│       ├── document-analysis/
│       ├── upload/
│       ├── ai-assistant/
│       ├── results/
│       ├── export/
│       ├── features/
│       ├── troubleshooting/
│       └── support/
├── components/              # Reactコンポーネント
│   ├── Navigation/         # ナビゲーション関連
│   ├── Layout/            # レイアウト関連
│   ├── UI/                # UIコンポーネント
│   └── Content/           # コンテンツ表示用
├── public/                 # 静的ファイル
│   └── images/            # 画像ファイル
│       └── screenshots/   # スクリーンショット用
└── styles/                # スタイルシート
```

## 🛠️ 技術スタック

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animation**: Framer Motion

## 📦 インストール

```bash
# 依存関係のインストール
npm install
```

## 🏃 開発サーバーの起動

```bash
# 開発サーバーを起動（http://localhost:3000）
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ ビルド

```bash
# プロダクションビルド
npm run build

# ビルドしたアプリケーションの起動
npm start
```

## 📸 画像ファイルの追加

スクリーンショット画像は以下のディレクトリに配置してください：

```
public/images/screenshots/
├── 01-login/           # ログイン画面
├── 02-dashboard/       # ダッシュボード
├── 03-document-list/   # 文書一覧
├── 04-upload/          # アップロード
├── 05-ai-assistant/    # AIアシスタント
├── 06-processing/      # 処理中
└── 07-results/         # 結果表示
```

### 必要な画像リスト

1. **01-login/**
   - `login-screen.png`: ログイン画面

2. **02-dashboard/**
   - `dashboard-overview.png`: ダッシュボード全体

3. **03-document-list/**
   - `document-list-empty.png`: 文書未登録時
   - `document-list-with-files.png`: 文書登録済み

4. **04-upload/**
   - `new-document-dialog.png`: 新規作成ダイアログ

5. **05-ai-assistant/**
   - `ai-assistant-selection.png`: AIアシスタント選択

6. **06-processing/**
   - `conversion-button.png`: 変換ボタン
   - `processing-indicator.png`: 処理中表示

7. **07-results/**
   - `result-text-view.png`: Textタブ表示
   - `result-analysis-view.png`: 解析結果タブ

## 🚀 Vercelへのデプロイ

```bash
# Vercel CLIをインストール（初回のみ）
npm i -g vercel

# デプロイ
vercel
```

## 📝 環境変数

現在、特別な環境変数は不要です。

## 🌐 ブラウザ対応

- Chrome（最新版）
- Firefox（最新版）
- Safari（最新版）
- Edge（最新版）

## 📱 レスポンシブ対応

- モバイル: 360px〜
- タブレット: 768px〜
- デスクトップ: 1024px〜

## 🔧 カスタマイズ

### カラーパレットの変更

`tailwind.config.ts` でカラー設定を変更できます：

```typescript
colors: {
  primary: {
    DEFAULT: "#0066CC",  // メインカラー
    light: "#3399FF",
    dark: "#004499",
  },
  // ...
}
```

### フォントの変更

`app/globals.css` でフォント設定を変更できます：

```css
font-family: 'Noto Sans JP', system-ui, sans-serif;
```

## 📄 ライセンス

© 2025 株式会社ハウディ. All rights reserved.

## 📞 サポート

- **メール**: support@haudi.jp
- **電話**: 03-3527-2080
- **営業時間**: 平日 9:00-18:00

---

*本マニュアルサイトは2025年1月版です。*

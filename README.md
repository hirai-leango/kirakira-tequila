# キラキラテキーラ Webサイト

ダイヤモンドを纏ったプレミアムテキーラブランドの公式サイト。

## 技術スタック
- Nuxt 3 / Vue 3 / TypeScript / Tailwind CSS
- Cloudflare Pages (ホスティング)
- Google Analytics 4

## サイト構成
- トップページ・ブランド紹介
- 商品ページ（ボトル・ショットグラス）
- SEOブログ（114記事）
- お問い合わせ・プライバシーポリシー・特定商取引法表記

## 本番ドメイン
https://kirakira-tequila.com

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Cloudflare Pages デプロイ設定

Cloudflare Pages でのデプロイに必要な設定は以下の通りです。

| 項目 | 設定値 |
| --- | --- |
| Framework preset | Nuxt |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | 20（`.node-version` で指定） |

- Nitro のプリセットは `nuxt.config.ts` の `nitro.preset: 'cloudflare-pages'` で設定済みです。ビルドすると `dist/` に `_worker.js`・`_routes.json` などの Cloudflare Pages 用の成果物が生成されます。
- `wrangler.toml` に `compatibility_flags = ["nodejs_compat"]` を設定しています。
- 環境変数: 現時点では不要です。
- ローカルでの動作確認: `npx wrangler pages dev dist`

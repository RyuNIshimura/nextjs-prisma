---
title: "Full-stack Next.js アプリケーション開発"
date: "2021-09-27"
---

# Fullstack App with Next.js Prisma ⚡️

Next.js と Prisma を使用して、フルスタックアプリケーションを構築します。

## 機能 ☕️

- 認証(NextAuth)
  - Google認証
  - 退会機能

## 開発環境 

データベースのみDockerを使用します。

環境変数を設定してください。

```bash
cp .env.example .env.local
```

### PostgreSQL(Docker)

```bash
docker-compose up
docker-compose build
```

### Next.js(ローカル)

```bash
yarn install # 👈 依存関係のインストール
npx prisma generate # 👈 Prismaの設定の読み込み
npx prisma migrate dev # 👈 Migration
npx prisma migrate reset  # ⚠️ DB Reset
yarn dev # 👈 Next.jsアプリケーションの起動
```

## 環境変数

|Key|例|解説|
|---|---|---|
|GOOGLE_CLIENT_ID|xxxxx|Google認証で使用する|
|GOOGLE_CLIENT_SECRET|xxxxx|Google認証で使用する|
|DATABASE_URL|mysql://root:password@localhost:3306/db|Prismaで接続するデータベース|
|NEXTAUTH_URL|http://localhost:3000|NextAuthで使用するURL|

Google認証の設定は、[OAuth 同意画面 – APIとサービス](https://console.cloud.google.com/apis/credentials/consent)からできます。

- 承認済みJavaScriptの生成元: `http://localhost:3000`
- 承認済みのリダイレクトURL: `http://localhost:3000/api/auth/callback/google`

## さらに

このプロジェクトでは、Vercelの[Serverless Functions](https://vercel.com/docs/serverless-functions/introduction)を使用していますが、
APIサーバとして、機能な壁にぶつかった場合は、ExpressやNest.jsへの切り替えを検討してください。

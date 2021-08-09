<p align="center">
<img src="https://img.shields.io/badge/PRS-Welcome-7D83FD" />

<img src="https://img.shields.io/badge/LICENSE-MIT-7D83FD" />
</p>

# Next.js Prisma

- Home
![image](https://user-images.githubusercontent.com/40055484/128654877-d831021a-d6a4-4046-9734-b635b60a62d8.png)

- Login
![image](https://user-images.githubusercontent.com/40055484/128654884-211ad309-d66f-4a13-8f78-fdb609e066ec.png)

## Features
- Google認証(Next-Auth)
- 退会機能
- UI: TailwindCSS

## Setup
Google認証を試す場合は、`.env.example`をコピーして、設定してください

```sh
cp .env.example .env.local
```

```sh
docker-compose up
docker-compose build
```

```sh
npx prisma studio
```

`localhost:5555`で立ち上がります。
設定は、`docker-compose.yml`に記載されています。

# Migrate

MySQLを使用しています。

```sh
npx prisma migrate dev --name init
```

# Hint
このプロジェクトでは、`pages/api`ルートを使用していますが、大きくなった場合、ExpressやRuby on Railsに切り替えることをお勧めします。外部APIも、`getServerProps`で呼び出すことができます。

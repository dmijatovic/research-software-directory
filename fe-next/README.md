# FE NEXT test

## Tailwind CSS

Based on [tailwind documentation](https://tailwindcss.com/docs/guides/nextjs)

```bash
# install deps
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

# init config
npx tailwindcss init -p

# extend config
```

## NextAuth

Using plugin nextauth.

Definition for callback url [is here](https://next-auth.js.org/configuration/providers/oauth-provider)

Basic format is: [origin]/api/auth/callback/[provider]

```env
# define base app url for nextauth
NEXTAUTH_URL=http://localhost:3000
```

Add SessionProvider Context to App

### Github

With next auth we need to define webapp, as in [documentation](https://next-auth.js.org/providers/github)

CallbackUrl: http://localhost:3000/api/auth/callback/github

I did not select any permissions from the list
I did selected that app can be installed with any account/user (at the bottom).

Click save now you have clientId
Generate token and save it

## Next

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

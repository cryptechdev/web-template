## Getting Started

First, bootstrap your new project with this example using [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app):

```bash
npx create-next-app -e https://github.com/cryptechdev/web-template my-cosmwasm-dapp
# or
yarn create next-app -e https://github.com/cryptechdev/web-template my-cosmwasm-dapp
```

Next, setup your `.env` file by copying the example:

```bash
cd my-cosmwasm-dapp
cp .env.example .env.local
```

If your new project doesn't intend to use a wallet, the only environment variables you need to set are ` NEXT_PUBLIC_SITE_TITLE` and `NEXT_PUBLIC_SITE_ICON_URL`.

If you want a Wallet integration, set the `NEXT_PUBLIC_USE_WALLET` to `true`.

By default, Keplr will be used. This can be modified by setting the `NEXT_PUBLIC_WALLET` env to the desired wallet.  
Currently supported wallets:

- `keplr`
- `terra`

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying [index.tsx](pages/index.tsx). The page auto-updates as you edit the file.

## Editing the top navigation

To customize the top navigation, edit [components/MainMenu.tsx](components/MainMenu.tsx).  
This component is loaded in both [components/Nav.tsx](components/Nav.tsx) and [components/WalletNav.tsx](components/WalletNav.tsx).

## Learn More

To learn more about Next.js, CosmJS, Keplr, and Tailwind CSS - take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [CosmJS Repository](https://github.com/cosmos/cosmjs) -JavaScript library for Cosmos ecosystem.
- [@cosmjs/cosmwasm-stargate Documentation](https://cosmos.github.io/cosmjs/latest/cosmwasm-stargate/modules.html) - CosmJS CosmWasm Stargate module documentation.
- [Keplr Wallet Documentation](https://docs.keplr.app/api/cosmjs.html) - using Keplr wallet with CosmJS.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - utility-first CSS framework.
- [DaisyUI Documentation](https://daisyui.com/docs/use) - lightweight component library built on [tailwindcss](https://tailwindcss.com/).
- [FontAwesome](https://fontawesome.com/icons) - icons library.

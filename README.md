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

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying [index.tsx](pages/index.tsx). The page auto-updates as you edit the file.

## Adding Keplr Integration

- Start by adding to you [.env](.env) all of the environment variables found in [.env.example](.env.example).
- Provide context by editing [pages/\_app.tsx](pages/_app.tsx) and comment out the [SigningCosmWasmProvider](contexts/cosmwasm.tsx) component.  
  You can now use the [hooks/cosmwasm.txs](hooks/cosmwasm.txs) hook to interact with the chain.  
  Feel free to read through the [components/KeplrReferencePage.tsx](components/KeplrReferencePage.tsx) page to see how to use the hook.
- To add a `Connect Wallet` button to the navbar, use the [WalletNav](components/WalletNav.tsx) component instead of [Nav](components/Nav.tsx) in [components/Layout.tsx](components/Layout.tsx).

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

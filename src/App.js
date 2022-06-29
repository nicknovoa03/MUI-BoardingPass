import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Page from './components/Page';
import TagManager from 'react-gtm-module';

import '@rainbow-me/rainbowkit/dist/index.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';

import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';


const { chains, provider } = configureChains(
  [chain.mainnet],
  [
    alchemyProvider({ alchemyId: 'bad8cc770bef49dc88683bf2290205c8' }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Black Box Collective',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

const App = () => {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-PZ44STN" });
  });
  return (

    <Page>
      <BrowserRouter>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains} theme={darkTheme()}>
            <Routes />
          </RainbowKitProvider>
        </WagmiConfig>
      </BrowserRouter>
    </Page>

  );
};

export default App;

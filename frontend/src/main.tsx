import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {TonConnectUIProvider} from '@tonconnect/ui-react';
import i18n from './i18n';
import {I18nextProvider} from "react-i18next";
import './styles/app.scss';
import { SDKProvider } from '@telegram-apps/sdk-react';
import {BrowserRouter} from "react-router-dom";

const manifestUrl = 'https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    // todo: поменять манифест
    <TonConnectUIProvider manifestUrl={manifestUrl}>
        <SDKProvider acceptCustomStyles debug>
            <I18nextProvider i18n={i18n} defaultNS={'translation'}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </I18nextProvider>
        </SDKProvider>
    </TonConnectUIProvider>
)
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';
import {retrieveLaunchParams} from "@telegram-apps/sdk";
const { initDataRaw } = retrieveLaunchParams();

console.log(initDataRaw);

const env = import.meta.env.ENV;
function getLanguageCode(queryString: string): string | null {
  const params = new URLSearchParams(queryString);
  const userParam = params.get('user');

  if (userParam) {
    const decodedUser = decodeURIComponent(userParam);
    const userObject = JSON.parse(decodedUser);

    return userObject.language_code || null;
  }

  return null;
}

let languageCode = getLanguageCode(initDataRaw || '');

switch (languageCode) {
    case 'ru':
        languageCode = 'ru-RU'
        break;
    default:
        break;

}

console.log(languageCode)

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: languageCode || 'en',
        debug: env === 'local',
        interpolation: {
            escapeValue: false,
        },
        ns: ['common', 'stub']
    });

export default i18n;
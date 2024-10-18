import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import hebMessages from '../locales/he.json';
import enMessages from '../locales/en.json';

type Message = {
    id: string;
    message: string;
};

type MessagesObject = Record<string, any>;

const convertMessagesToObject = (messagesArray: Message[]): MessagesObject => {
    const result: MessagesObject = {};

    messagesArray.forEach(message => {
        const keyParts = message.id.split('.');
        const lastKey = keyParts.pop();
        const currentLevel = keyParts.reduce((acc: MessagesObject, part: string) => {
            if (!acc[part]) acc[part] = {};
            return acc[part];
        }, result);

        if (lastKey) {
            currentLevel[lastKey] = message.message;
        }
    });

    return result;
}

const resources = {
    en: { translation: convertMessagesToObject(enMessages) },
    he: { translation: convertMessagesToObject(hebMessages) },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "he",
        fallbackLng: "he",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;

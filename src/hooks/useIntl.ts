import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next"

export const useIntl = () => {
    const { t, i18n } = useTranslation();

    const format = useCallback((id: string) => {
        return t(id);
    }, [])

    const setLanguage = useCallback((language: string) => {
        i18n.changeLanguage(language);
    }, [])

    const language = useMemo(() => {
        return i18n.language;
    }, [i18n.language])



    return { language, format, setLanguage };
}
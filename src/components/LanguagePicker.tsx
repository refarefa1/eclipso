import React, { CSSProperties, useState } from 'react';
import { useIntl } from '../hooks/useIntl';
import he from '../icons/flag-israel.png';
import en from '../icons/flag-us.png';
import { theme } from '../theme';

export const LanguagePicker = () => {
  const { language, setLanguage, format } = useIntl();

  type LanguageKey = 'he' | 'en';

  const languages: Record<LanguageKey, { id: string; flagImage: string }> = {
    he: {
      id: 'he',
      flagImage: he,
    },
    en: {
      id: 'en',
      flagImage: en,
    },
  };

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  const selectLanguage = (lang: LanguageKey) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      height: 'fit-content',
      zIndex: 5,
      backgroundColor: 'white',
      border: '1px solid black',
      borderRadius: '50px'
      // boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    }}>
      {Object.values(languages).map((lang,idx) => {
        if (idx !== 0) return<></>
        const { id, flagImage } = lang;
        return <div key={id} style={styles.flagContainer}>
          <img style={styles.flag} src={flagImage} alt="" />
        </div>
      })}
    </section>

  );
};

const styles: { [key: string]: CSSProperties } = {
  flagContainer: {
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flag: {
    height: '40%',
  }
}


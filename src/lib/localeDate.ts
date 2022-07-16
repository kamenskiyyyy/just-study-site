import localeRU from 'date-fns/locale/ru';
import localeES from 'date-fns/locale/es';
import localeEU from 'date-fns/locale/eu';

export const localeDate = (locale: string) => {
    switch (locale) {
        case 'ru':
            return localeRU;
        case 'es':
            return localeES;
        case 'en':
        default:
            return localeEU;
    }
};

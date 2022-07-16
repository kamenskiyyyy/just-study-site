export const currencyText = (locale?: string) => {
    if (locale === 'ru') {
        return '₽';
    }
    return '$';
};

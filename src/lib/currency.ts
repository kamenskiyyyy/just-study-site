import { Currency } from '@shared/enums/currency.enum';

export const getTextCurrency = (currency: Currency | string) => {
    switch (currency) {
        case Currency.RUB:
            return `₽`;
        default:
            return '$';
    }
};

export const mapExtra = (key: string) => {
    switch (key) {
        case 'wifi_price':
            return 'Wi-Fi';

        case 'linens_price':
            return 'сменное белье';

        case 'conditioner':
            return 'кондиционер';

        default:
            return '';
    }
};

export const mapPlaceValue = (key: string) => {
    switch (key) {
        case 'luxe':
            return 'Люкс';

        case 'seatable':
            return 'Сидячее';

        case 'top':
            return 'Верхнее';

        case 'bottom':
            return 'Нижнее';

        case 'side':
            return 'Боковое';

        default:
            return '';
    }
};

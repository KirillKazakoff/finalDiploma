export const mapToName = (value: string) => {
    switch (value) {
        case 'conditioner':
            return 'кондиционер';

        case 'wifi_price':
            return 'беспроводная сеть';

        case 'linens_price':
            return 'постельное белье';

        default:
            return '';
    }
};

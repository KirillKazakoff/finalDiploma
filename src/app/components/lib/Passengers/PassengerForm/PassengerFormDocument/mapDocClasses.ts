export const mapDocClass = (option: string) => {
    switch (option) {
        case 'Паспорт РФ':
            return 'passport';

        case 'Свидетельство о рождении':
            return 'birth-certificate';

        default:
            return '';
    }
};

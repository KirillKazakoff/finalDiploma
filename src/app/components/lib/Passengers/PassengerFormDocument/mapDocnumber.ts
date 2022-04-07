export const mapDocnumber = (doctype: string) => {
    const birthReg = '^[I,V,X,L,C,i,v,x,l,c]{1,4}[А-Яа-я]{2}\\d{6}$';
    const passportReg = '^\\d{6}$';

    switch (doctype) {
        case 'Свидетельство о рождении':
            return {
                reg: birthReg,
                symbols: 12,
            };
        default:
            return {
                reg: passportReg,
                symbols: 6,
            };
    }
};

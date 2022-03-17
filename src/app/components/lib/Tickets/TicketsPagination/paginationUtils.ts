export const getNumbersArr = (startIndex: number, endIndex: number) => {
    const array = [];
    for (let i = startIndex; i <= endIndex; i += 1) {
        array.push(i);
    }

    return array;
};

type GetNextPagesT = (pageAmount: number, activePage: number, maxPage: number) => number;
type GetPrevPagesT = (pageAmount: number, activePage: number) => number;

export const getNextPagesAmount: GetNextPagesT = (amount, active, max) => {
    let newPagesAmount = 0;

    for (let i = 1; i <= amount; i += 1) {
        if (i + active > max) break;
        newPagesAmount += 1;
    }
    return newPagesAmount;
};

export const getPrevPagesAmount: GetPrevPagesT = (amount, active) => {
    let prevPagesAmount = 0;

    for (let i = 1; i <= amount; i += 1) {
        if (active - i < 1) break;
        prevPagesAmount += 1;
    }
    return prevPagesAmount;
};

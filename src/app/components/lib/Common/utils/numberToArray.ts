export const numberToArray = (count: number) => {
    const arr = [];
    for (let i = 0; i < count; i += 1) {
        arr.push(i);
    }
    return arr;
};

export const numberToArrayFrom = (count: number, from: number) => {
    const arr = [];

    for (let i = from; i < count + from; i += 1) {
        arr.push(i);
    }
    return arr;
};

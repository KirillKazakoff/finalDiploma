const formatCost = (cost: number) => {
    const flooredCost = Math.floor(cost);
    if (flooredCost < 1000) return flooredCost.toString();

    const costArr = flooredCost.toString().split('');
    if (flooredCost < 10000) {
        costArr.splice(1, 0, ' ');
    } else {
        costArr.splice(2, 0, ' ');
    }

    const formatted = costArr.join('');
    return formatted;
};

export const formatCarCount = (count: number) => {
    if (count < 10) return `0${count}`;
    return count;
};

export default formatCost;

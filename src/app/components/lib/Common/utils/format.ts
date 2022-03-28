const formatCost = (cost: number) => {
    if (cost < 1000) return cost.toString();
    const costArr = cost.toString().split('');
    costArr.splice(1, 0, ' ');

    const formatted = costArr.join('');
    return formatted;
};

export const formatCarCount = (count: number) => {
    if (count < 10) return `0${count}`;
    return count;
};

export default formatCost;

const formatCost = (cost: number) => {
    if (cost < 1000) return cost.toString();
    const costArr = cost.toString().split('');
    costArr.splice(1, 0, ' ');

    const formatted = costArr.join('');
    return formatted;
};

export default formatCost;

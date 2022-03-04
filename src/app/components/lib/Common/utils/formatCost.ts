const formatCost = (cost: number) => {
    const costArr = cost.toString().split('');
    costArr.splice(1, 0, ' ');

    const formatted = costArr.join('');
    return formatted;
};

export default formatCost;

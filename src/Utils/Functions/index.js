export const randomRangeInteger = (range = [0, 100], isLeftIncluded = true, isRightIncluded = true) => {
    if (range.length !== 2) return -1;

    const isClosed = isLeftIncluded && isRightIncluded;

    let [min, max] = range;

    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
    }

    const length = max - min + (isClosed ? 1 : 0);
    const randomValue = Math.floor(Math.random() * length);

    return randomValue + min + (!isLeftIncluded && isRightIncluded ? 1 : 0);
};

export const genRange = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }
    return arr;
};

export const randomRangeIntegerArray = (
    rangeConfig = {
        range: [0, 100],
        isLeftIncluded: true,
        isRightIncluded: true,
    },
    length = 1
) => {
    const { range, isLeftIncluded, isRightIncluded } = rangeConfig;
    const returnArr = genRange(length).map(e => randomRangeInteger(range, isLeftIncluded, isRightIncluded));

    return returnArr;
};
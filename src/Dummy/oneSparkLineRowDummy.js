function boxMullerRandom() {
    let phase = false,
        x1,
        x2,
        w,
        z;

    return (function () {
        if ((phase = !phase)) {
            do {
                x1 = 2.0 * Math.random() - 1.0;
                x2 = 2.0 * Math.random() - 1.0;
                w = x1 * x1 + x2 * x2;
            } while (w >= 1.0);

            w = Math.sqrt((-2.0 * Math.log(w)) / w);
            return x1 * w;
        } else {
            return x2 * w;
        }
    })();
}

export function randomData(n = 30) {
    return Array.apply(0, Array(n)).map(boxMullerRandom);
}

export const sampleData = randomData(30);

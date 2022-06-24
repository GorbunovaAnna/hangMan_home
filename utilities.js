export function generatorNum (length) {
    let num = Math.floor(Math.random() * length);
    return num;
}

export function generatorWord (arr, randNum) {
    return arr[randNum];
}
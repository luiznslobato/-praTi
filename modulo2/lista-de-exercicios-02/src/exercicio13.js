let seqFibonacci = [1, 1];

for (let i = 2; i < 15; i++) {
    seqFibonacci[i] = seqFibonacci[i - 1] + seqFibonacci[i - 2];
}
console.log(seqFibonacci);
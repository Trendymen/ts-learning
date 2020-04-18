interface Sum {
  (a: number, b: number): number;
}

export const sum = (a: number, b: number): number => a + b;

export const numberOperate = (a: number, b: number, cb: Sum): number => {
  return cb(a, b);
};

numberOperate(1, 2, function (a) {
  return a;
});

const arr: ReadonlyArray<number> = [3, 4, 6];

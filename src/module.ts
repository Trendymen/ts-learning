interface Sum {
  (a: number, b: number): number;
}

export function sum(a: number, b: number): number {
  return a + b;
}

export const numberOperate = (a: number, b: number, cb: Sum): number => {
  return cb(a, b);
};

export class FuckablePerson {
  private _age = 0;
  constructor(public name: string, public gender: "male" | "female" = "male") {}
  set age(value) {
    this._age = value;
  }
  get age(): number {
    return this._age;
  }
}

export let a = "text";

export const setA = (text: string): void => {
  a = text;
};

new FuckablePerson("a").age;

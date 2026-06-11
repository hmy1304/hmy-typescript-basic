interface AddFn {
  (a: number, b: number): number;
}

const add: AddFn = (x, y) => {
  return x + y;
};

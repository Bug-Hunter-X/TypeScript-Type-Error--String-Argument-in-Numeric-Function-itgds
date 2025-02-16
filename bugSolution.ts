function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number | string {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    return "Error: Invalid input.  Expected numbers.";
  }
}

let result1 = addSafe(10, 20); // Output: 30
let result2 = addSafe("hello", 10); // Output: Error: Invalid input. Expected numbers.
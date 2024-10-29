function fibs(n) {
  if (n === 1) {
    return 0;
  }

  if (n === 2) {
    return 1;
  }
  let num1 = 0;
  let num2 = 1;
  let current = 0;
  for (let i = 3; i <= n; i++) {
    current = num1 + num2;
    num1 = num2;
    num2 = current;
  }
  return current;
}

function fibsRec(n) {
  if (n === 1) {
    return 0;
  }

  if (n === 2) {
    return 1;
  }

  return fibsRec(n - 1) + fibsRec(n - 2);
}

console.log(fibs(3));
console.log(fibsRec(10));

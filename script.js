do {
  a = +prompt("Enter A");
} while (isNaN(a) != false || a == "");

do {
  b = +prompt("Enter B, must be bigger than A");
} while (isNaN(b) != false || a >= b);

do {
  h = +prompt("Enter H");
} while (isNaN(b) != false || h == "");

if (b - a < h) {
  fact = 1;
  for (i = 1; i <= a; i++) {
    fact = fact * i;
  }
  alert(`A - B > H, so A! = ${fact}`);
} else {
  sum = 0;
  for (j = a; j <= b; j = j + h) {
    fact = 1;
    for (i = 1; i <= j; i++) {
      fact = fact * i;
    }
    sum = sum + fact;
  }
  alert(`A - B < H, so Sum = ${sum}`);
}

console.log(a);
console.log(b);
console.log(h);
console.log(fact);
console.log(sum);

// REKURSIF :

function cetakAngka(n) {
  // basecase
  if (n === 0) {
    return;
  }

  console.log(n);
  cetakAngka(n - 1);
}

// factorial
function faktorial(n) {
  if (n === 0) return 1;
  return n * faktorial(n - 1);
}

cetakAngka(10);

alert(faktorial(5));

// Function Ekspresion:
var sum = function (a, b) {
  return a + b;
};

sum(10, 5);

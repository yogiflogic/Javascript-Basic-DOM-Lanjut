// FUNCTION
// Function Declaration

// function sum(a , b){
//     var z;
//     z = a + b;

//     return z;
// }

// // Function Expression
// var sum = function (a , b){
//     var z;
//     z = a + b;

//     return z;
// }

// alert(sum(6,3));

// function tambah(){
//     var hasil = 0;

//     for(var i = 0; i < arguments.length; i++){
//         hasil += arguments[i];
//     }

//     return hasil;
// }

// alert(tambah(1,3,5,7,9));

// function dengan standar ES6 / arrow function
let x = () => {
  console.log("Hello Javascript");
};

x();

// CARA LAMA FUNCTION EKSPRESSION karena (Variable masih menggunakan VAR)mengakali agar variable di dalam function /
// perulangan tidak bisa di akses dari luar ,berguna ketika aplikasi semakin besar :
(function tes() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
})();

// lexical scope
// function init(){
//     // local variable
//     let nama = 'Javascript'; // local variable
//     // inner function (closure*)
//     function tampilNama(){ // inner function (closure*)
//         // akses ke parent variable // akses ke parent variable
//         console.log(nama);
//     }
//     tampilNama();
// }

// init();

// cara ke - 1 
// function init(){

//      function tampilNama (nama){
//         console.log(nama);
//     }
//     return tampilNama;
// }

// let panggilNama = init();
// panggilNama('javascript');

// cara ke- 2
function init(){
    return function (nama){
        console.log(nama);
    }

}

let panggilNama = init();
panggilNama('javascript');
panggilNama('Language');

// factories  function
function ucapkanSalam(waktu){
    return function(nama){
        console.log(`halo ${nama}, Selmat ${waktu}, semoga harimu menyenangkan :`);
    }
}

let selamatPagi = ucapkanSalam('pagi');
let selamatSiang = ucapkanSalam('siang');
let selamatMalam = ucapkanSalam('malam');

selamatPagi('Javascript');
selamatMalam('Programming');

// private method / variable
// immediately info function
let add = (function() {
    let counter = 0;
    return function (){
        return ++counter;
}

})();

console.log(add());
console.log(add());
console.log(add());
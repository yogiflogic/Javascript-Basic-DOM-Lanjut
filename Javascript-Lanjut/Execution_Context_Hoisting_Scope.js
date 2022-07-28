// Execution,Context,Hoisting & Scope
// cek flow coding Javascript : https://pythontutor.com/javascript.html#mode=edit

var nama = 'Javascript';
console.log(nama);

// creation phase pada global context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window

// execution

var nama = 'Javascript';
var umur = 25;
function sayJs(){
    console.log(`Halo, This is ${nama}, ${umur} year old`);
    
}

// function membuat local execution context 
// yang di dalamnya terdapat creation dan execution phase
// window 
// arguments
// hoisting

function satu(){
    var nama = 'javascript';
    console.log(nama);
}

function dua(){
    var nama = 'javascript';
    console.log(nama);
}

console.log(nama);
var nama = 'javascript';
satu();
dua('Kotlin');
console.log(nama);


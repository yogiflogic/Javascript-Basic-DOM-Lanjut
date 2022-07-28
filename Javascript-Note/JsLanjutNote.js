// Cek flow code javascript :
// https://pythontutor.com/javascript.html#mode=edit
// - Object Literal
// - Function Declaration
// - Constructor Function
// - Object.create()

// CLOSURE :

// MDN : Closure merupakan kombinasi antara function dan lingkungan leksikal (lexical scope) di dalam function tersebut.
// W3School : Closure adalah sebuah function ketika memiliki akses ke parent scopenya meskipun parent scope-nya sudah selesai di eksekusi
// Code Fellow : Closure adalah sebuah function di kembangkan oleh function yang lain, yang memiliki akses ke lingkungan saat ia diciptakan
// Techsith : Closure adalah sebuah function yang sebelumnya sudah memiliki data, hasil dari function yang lain

// lexical scope :
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

// syarat closure membutuhkan variable dari parentnya

// Kenapa menggunakan closure?
// - Untuk membuat function  factories
// - Untuk membuat seolah-olah kita mempunyai private method

// ARROW FUNCTION (PR):
// MDN : Bentuk lain yang lebih ringkas dari Function Expression

// - Tidak semua function tiba-tiba di ubah menjadi ARROW FUNCTION , TAPI kalau METHOD bisa
// - arrow function tidak memiliki konsep keyword THIS

// FUNCTION HIGHER ORDER :

// ELOQUENTJAVASCRIPT : Function yang beroperasi pada function yang lain, baik yang di gunakan dalam argument maupun sebagai return value

//     First Class Function:
//     - SITEPOINT : Javascript memperlakukan function sebagai object

// function sebagai argument di sebut (callback)

// Kenapa mengggunakan Higher Order Function?
// - Abstraksi = agar kode yang di buat bisa lebih sederhana atau lebih simple, karena dengan menggunakan function itu artinya kita menyembunyikan kerumitan
// - Ketika kita memiliki function di dalam function harusnya akan membuat progammnya semakin simple

//     ELOQUENTJAVASCRIPT: Semakin besar sebuah program , semakin tinggi kompleksitasnya, semakin membingungkan programmernya

// Adu 2 cara untuk merancang sebuah software (C.A.R.Hoare, 1980 ACM Turing Award Lecture):
// - Untuk membuat programnya se-sederhana mungkin , sehingga jelas-jelas tidak ada kekurangannya
// - Cara lainnya adalah Untuk membuat programnya se-kompleks mungkin sehingga tidak ada kekurangan yang jelas

// Dengan membiasakan membuat sesuatu kedalam function, kita akan masuk kedalam suatu pendekatan yang namanya FUNCTIONAL PROGRAMMING,
// dan ketika kita menggunakan paradigma ini dengan benar akan membuat program kita lebih EFEKTIF, LEBIH AMAN dan Lebih EFESIEN

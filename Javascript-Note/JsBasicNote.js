// // Artikel Untuk memilih bahasa pemrograman yang cocok
// // https://www.udacity.com/blog/2015/05/pick-your-first-programming-language.html
// // http://carlcheo.com/startcoding
// // https://www.codepolitan.com/bahasa-pemrograman-apa-cocok-dipelajari-pertama-kali
// // Keyboard Code Javascript : https://keycode.info/
// Javascript = bahasa pemrograman yang untype = interpreted

// untype

// var x = 12345;
// var x = 'hello world';

// type

// int x = 123;
// string = 'hello world';

// // NCSA = penelitian browser = mosaic browser,  browser populer pertama 1992

// TIPE DATA :

// number string boolean object function undefined

// angka tanpa desimal:
// - 10, 100, 1234567
// - akurat sampai 15 digit

// istilah tipe data di java script = floating point tidak ada integer
// mengembalikan bilangan yang sama
// tingkat akurasi untuk pecahan integer = 15 digit akan ada pembulatan bila lebih dari 15 digit

// Angka dengan desimal:
// 3.14 , 0.5 , 100,00
// maksimal bisa menyimpan 17 digit di belakang koma

// Eksponen :
// 123e5 // 12300000

// bilangan negative
// - 25,- 0.52

// urutan bit ppenggunaan:
// 1 bit digunakan untuk penandaan bilang negative
// 11 bit untuk exponent
// 52 fraction angka sebenarrnya

// jangan pernah mengawali dengan angka 0 karna di anggap bilangan oktal (basis 8) / 0xFF di anggap hexa desimal

// angka spesial

// Infinity
// - infinity
// NaN

// angka di dalam string akan di anggap angka oleh js = 100/'10'

// OPERATOR:

// binary:
// - aritmatika (+-*/) urutan atau aturan match pada js kukabataku (kurung */+-)
// - penugasan = assigment (=, += , -= , *= , /=, %=)
// - perbandingan = compasison (== , !=, === (strict sama dengan/cek nilai beserta tipe datanya/operator identitas), !==, >, <, >=, <=)
// - logika (&& , || , !)
// - string = untuk data tekstual  , untuk menulisnya hanya perlu pmembungkusnya dengan tanda kuti 1 atau 2 ('' / "") ('dengan tanda kutip' operator tambah (+) pada js bisa untuk menjumlah kan angka dan penggabung string(a + ' ' + b))
// escape charater untuk menapmpilkan sebuah charater yang di interpetasikan berbeda dalam sebuah bahasa pemrograman (/' atau /") : '" ayo kita belajar pro/'gramming "'
// concatenation (+) operator penggabung satu atau lebih string
// fungsi pada string : "javascript".length (spasi dalam karakter juga di hitung)
// pelajari fungsi pada string yang lainnya
// - boolean (untuk mempresentasikan logika) biasanya untuk statement pengkondisian untuk menentukan aksi yang berbeda dan mengatur alur program
// ternary :
// - kondisional : butuh 3 operand di dalamnya (x % 2 ==0) ? 'genap' : 'ganjil'
// unary:
// - typeof (typeof(isi dengan Angka / String))

// VARIABLE : tempat/wadah penyimpan value (angka string boolean dll)

// var = Menganut FUNCTION SCOPE
// let = Menganut Block Scope

// deklarasi : mendaftarkan variable
// inisialisasi : pemesananan tempat memori untuk variable
// Assigment : menetapkan nilai yang spesifik ke dalam variable

// var x; deklarasi & inisialisasi
// x 20; inisialisasi & assigment

// variable <nama variable>
// variable tidak boleh mengandungs SPASI dan diawali dengan angka

// var namaVariablePanjang -> // camel case huruf pertama kecil

// penulisan varibale shorthand:

// var nama = 'javascript',
//     umur = '25',
//     popularitas = true;

// keyword & reserved word -> tidak boleh menjadi nama variable

// Di JS bisa mengakses variable di dalam perulangan dari luar perulang karena JS tidak mengandung sistem BLOCK SCOPE

// KEYWORD UNTUK DEKLARASI VARIABLE:

// var
// let
// const

// PENULISAN JAVA SCRIPT :
// Javascript bisa di tulis di dalam TAG <head></head> pada html atau di atas TAG penutup body </body>
// <!-- internal -->
// <script></script>
// <!-- eksternal -->
// <script src="script.js"></script>

// POPUP BOX / DIALOG BOX :

// alert() = alert('hello javascript');
// prompt() = prompt('Masukan nama : ');  mengmbalikan nilai , dengan prompt angka yang di inout di anggap string
// jika di beri perbandingan , jika ingin di anggap integer beri method parseInt();
// confirm() = confirm('kamu yakin?') / mengmbalikan nilai boolean

// CONTROL FLOW:
// - Pengulangan (loop/iteration)
//     for
//     while
//     do while

// - Pengkondisian (percabangan)
//     if
//     else if
//     else
//     switch

// shorthand pengkondisian = Conditional (ternary) operator

// infinite loop = pengulangan tanpa batas

// Table Penelusuran (trace table / dry-run test)
// referensi : https://www.101computing.net/using-trace-tables/

// WHILE:
// var x = true;

//     while (x){
//         alert('hello Javascript ');

//         x = confirm('lagi?');
//     }

// FOR :
// nilai awal - kondisi terminasi - nilai increment / decrement
// for(var x = 1; x <= 10; x++){
//     alert('Hello Javascript ' + x);
// }

// IF ELSE IF ELSE:

// if(kondisi){
//     aksi1
// }else if (kondisi 2){
//     aksi2
// }else{
//     aksi3
// }

// SWITCH :
// switch akan mengecek nilai dari kondisinya
// switch(ekspresi){
//     case <nilainya lansung> :
//     nilai1;
//     break; (opsional)

//     case <nilainya lansung>  :
//     nilai2;
//     break; (opsional)

//     case <nilainya lansung>  :
//     nilain;
//     break; (opsional)

//     default:
//     aksi default:
//     break;
// }

// PENGULANGAN DAN PENGONDISIAN BERSARANG :

// FUNCTION :
// Kunci utama pada javascript yang membuat JS sangat powerfull
// Method Class Contrutor Module
// Function adalah sub-program/sub-routine yang dapat di panggil di bagian lain pada programming
// Struktur dasar dari pembentuk JS
// Di sebut juga sebagai prosedur (Kumpulan statement untuk melakukan tugas atau menghitung sebuah nilai)
// Untuk dapat menggunakannya, kita harus membuat terlebih dahulu funtion tersebut, lalu memanggilnya
// Termasuk kedala first class object

// Built-in function (Yang sudah di sediakan oleh JS)
// User-Defined function (Yang di buat user)
// Referensi function pada JS
// https://w3schools.com/jsref/jsref_obj_string.asp

// TANDA Kurung () berfungsi untuk menjalankan JS

// Function Declaration :

// function sum(a , b){
//     var z;
//     z = a + b;

//     return z;
// }

// Function Expression :

// var sum = function (a , b){
//     var z;
//     z = a + b;

//     return z;
// }

// - function yang baik hanya mengerjakan 1 hal saja
// - Blok kode yang di buat untuk melakukan tugas yang spesifik
// - Dapat dipanggil berulang kali
// - Memudahkan penelusuran
// - Reusability

// Parameter -> sebuah variable di dalam tanda () pada saat pembuatan function dan di isi inputan dari luar
// Argument -> Value yang di kirimkan ke parameter saat fungsi di panggil

// REFACTORING (Untuk kode program yang lebih efisien) :
// -> sebuah proses untuk mengubah kode agar menjadi lebih 'BAIK' tanpa mengubah fungsionalitasnya

// Alasanya?
// - Readability : Kemudahan dalam membeca kode program
// - DRY (Don't reapeat yourself)) : erat kaitanya dengan duplikasi kode (penggunaan variable yang berlebihan, efesiensi penggunaan function, mtehod dll)
// - Testability : Penulisan kode agar mudah saat nantinya di lakukan pengujian
// - Performance : Bagaimana kita  menulis kode yang dapat meningkatkan performasi dari programmnya (penggunaan looping yang baik, memilih tipe data yang tepat untuk sebuah nilai, atau pengalokasi memory yang efektif dalam bahasa pemrograman tertentu)
// - Maintainability : Bagaimana nantinya program kita dapat di kelola atau di kembangakan

// TIPS : Setelah membuat programnya agar di analisis kembali sorce codenya untuk sesuatu yang di buat lebih baik lagi

// Block scope (c , java) VS function scope (JS)

// function scope :
// pada JS scope dalam function bisa mengakses variable global (windows variable) tanpa menggunakan keyword global seperti di PHP,
// kecuali di dalam scope variable function memiliki nama variable yang sama dengan variable global dan jika ingin mengakses variable global pada JS,
// baru kita menambahkan keyword window console.log(window.a);

// var a = 1;

// function hitung(){
//     //variable lokal
//     var a = 2;

//     //ini akan mengkakses variable (a) global yang memiliki vale 1
//     console.log(window.a);
// }

// "use strict" = keyword yang berfungsi agar javascript menganggap membuat variable LOCAL ketika di function ada variable yang tidak menggunakan keyword (var,let)

// CARA LAMA FUNCTION EKSPRESSION karena (Variable masih menggunakan VAR) mengakali agar variable di dalam function /
// perulangan tidak bisa di akses dari luar ,berguna ketika aplikasi semakin besar :

// (function tes(){
//     for(let i = 0; i < 10; i++){
//         console.log(i);
//     }
// }());

// REKURSIF :
// Sebuah fungsi yang memanggil dirinya sendiri
// harus berakhir dan menghasilkan sebuah nilai
// Semua looping bisa dibuat REKRUSIFnya, tapi tidak sebaliknya

// Basecase:
// kondisi akhir dari rekursif yang menghasilkan nilai (caranya berikan pengkondisian)

// IMPLEMENTASI REKURSIF :
// - Menggantikan looping
// - Fibonachi
// - Pencarian dan penelusuran pada struktur data list dan tree
// - Programming language yang tidak memiliki pengulangan (Haskel,Erlang, Prolog Dll)

// function cetakAngka(n){
//     // basecase
//     if(n === 0){

//         return;
//     }

//     console.log(n)
//     cetakAngka(n-1)
// }

// function faktorial(n){
//     if (n === 0) return 1;
//     return n * faktorial(n-1);
// }

// cetakAngka(10);

// alert(faktorial(5));

// Function Declaration VS Function Ekspresion :

// Function Declaration :
// - Lebih fleksibel dapat di tulis dimanapun (karena konsep HOISTING (Deklarasi sebuah function di simpan dulu di dalam memori))
// - Mudah di pahami pemula

// function sum(a,b){
//     aksi
// }

// sum(5,10);

// Function Ekspresion:
// - harus di definisikan dulu sebelum di panggil
// - Lebih POWERFULL (Sebagai closure, sebagai argument untuk function yang lain, IIFE (Immediately Invoke Function Ekspresion ))

// var sum = function(a,b){
//     aksi
// }

// sum(10,5);

// ARRAY JS:

// Referensi (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

// Secara umum -> Susunan sistematis dari objeck-object yang serupa
// Dalam Computer science -> Tipe data yang digunakan untuk mendeskripsikan kumpulan element (nilai atau variable)
// yang tiap-tiap elementnya memiliki INDEX
// ARAAY bisa menampung lebih satu nilai

// Kenapa ARRAY?
// Mempermudah pengelolaan value/nilai/data (penelusuran & pencarian)
// Manjemen memori

// ARRAY juga di sebut :
// - Variable jamak, yang mempunyai banyak element dan di acu dengan nama yang sama
// - Kumpulan pasangan KEY & VALUE / key / value pair
// - KEY adalah index pada array dengan tipe data integer yang di mulai dari nol [0]
// - Array pada javascript bertipe OBJECT
// - Array pada javascript memiliki fungsi / method length untuk menghitung jumlah element di dalamnya
// - Element pada Array boleh memiliki tipe data yang BERBEDA

// METHOD pada ARRAY :
// METHOD -> function yang ada di dalam sebuah object

// - length -> Untuk mengetahui jumlah element yang ada pada array
// - join() -> yang menggabungkan semua isi array untuk menjadi sebuah STRING
// - push(menambah beberapa element dan bisa sekali banyak) , pop(hapus element satu persatu), shift (menambah element pertama), unshift (menghilangkan element)
//     -> Menambah atau menghapus element pada array
//         - push & pop = bekerja untuk element terakhir
//         - shift & unshift = bekerja untuk element pertama
// - slice (Untuk mengambil beberapa bagian pada array untuk menjadi array yang baru), splice(menyambung/ kita bisa menyisipkan sebuah elemen di tangah2 menggunakan splice)
// - forEach , map (bisa mengmbailikan array (return) sedangkan forEach tidak) = untuk melakukan looping pada array, kita bisa melakukan sesuatu kepada element yang ada di dalam arraynya secara otomatis
// - sort = Mengurutkan isi array
// -filter(bisa mengmbalikan banyak nilai), find(mengembalikan 1 nilai) = untuk mencari element pada array

// OBJECT JAVASCRIPT:

// Object = kumpulan nilai yang memiliki nama
// -> in JS , object are KING , if you understand object, you understand JS
// Di bahas pemtrograman lain sama seperti :
// - PHP = Array associative
// - python : dictionary
// - c = hash tables
// - java = hash map
// - ruby & perl = Hashes

// Variable di dalam object = property
// Function di dlam object = Method

// Membuat object pada javascript :
// - Object Literal
// - Function Declaration
// - Constructor Function (keyword new)

// keyword THIS :

// This -> Sebuah keyword special yang secara otomatis di definisikan pada setiap function
// - This mengembalikan object global

// TIPE DATA BOOLEAN :
// truthy
// ============
// true
// non-zero number
// "string"
// object
// arrays
// functions

// falsy
// ==========
// false
// 0
// ""
// undefined
// null
// NaN

// escape character
// ============
// \0
// \'
// \"
// \\
// \n
// \t
// \b
// \uXXXX

// hasil
// ==========
// karakter NULL
// '
// "
// \
// new line
// tab
// backspace
// unicode

// var x = 25;
// console.log('Hello Javascript');
// console.log('Ini adalah variable ' + x);

// POPUP BOX / DIALOG BOX :

// var x = prompt('Masukan nama : ');
// alert(x);
// confirm('kamu yakin?');

// WHILE

// di berhentikan program sendiri
// var x = prompt('Masukan Angka : ');

// while (x < 5){
//     alert('hello Javascript' + x);

//     x++;
// }

// di berhentikan user
// var x = true;

// while (x){
//     alert('hello Javascript ');

//     x = confirm('lagi?');
// }

// FOR

// for(var x = 1; x <= 10; x++){
//     alert('Hello Javascript ' + x);
// }

// IF

// var x = parseInt(prompt('Masukan Angka : '));

// if(x <= 10){
//     alert('hello Javascript Kurang dari ' + x);
// }else if(x >= 10){
//     alert('hello Javascript Lebih dari ' + x);
// }else{
//     alert('Yang Anda Masukan Bukan Angka');
// }

// var x = parseInt(prompt('Masukan Angka : '));

// switch(x){
//     case 1:
//         alert('Angka 1');
//         break;
//     case 2:
//         alert('Angka 2');
//         break;
//     case 3:
//         alert('Angka 3');
//         break;
//     default:
//         alert('Default');
//         break;
// }

// PENGULANGAN DAN PENGONDISIAN BERSARANG :

// GAME SUIT JAWA:

//menangkap pilihan player
// var p = prompt('Masukan Semut, Orang , Gajah dengan huruf kecil :');

// // menangkap pilihan computer 
// // membangkitakan bilangan RANDOM
// var comp = Math.random();



// // Rules
// var hasil = '';

// if (p == comp){
//     hasil = 'SERI';
// } else if (p == 'gajah' ){
    // if (comp == 'orang'){
    //     hasil = 'Menang';
    // }else{
    //     hasil = 'Kalah';
    // }

    // Ternary Operator
//     hasil = (comp == 'orang') ? 'Menang' : 'Kalah';
// }else if(p == 'orang'){
//     if (comp == 'gajah'){
//         hasil = 'Kalah';
//     }else{
//         hasil = 'Menang';
//     }
// }else if(p == 'semut'){
//     if (comp == 'gajah'){
//         hasil = 'Menang';
//     }else{
//         hasil = 'Kalah';
//     }

// }else{
//     hasil = 'Masukan salah';
// }

// alert(' Inputan user : ' + p + ' inputan komputer : ' + comp + ' Dan kamu : ' + hasil);

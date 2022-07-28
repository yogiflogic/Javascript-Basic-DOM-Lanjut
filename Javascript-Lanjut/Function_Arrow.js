// // arrow function
// let tampilNama = (nama) => {
//     return `Hallo ${nama}`;
//     // return 'hallo' + nama`;
// }

// console.log(tampilNama(Javascript));

// jika tanpa PARAMETER wajib pakai tanda kurung buka dan tutup biasa ()
// let tampilNama = () =>  `Hallo Javascript`; 

// IMPLISIT RETURN = kalau satu parameter boleh seperti dibawah
// let tampilNama = nama =>  `Hallo ${nama}`;

// console.log(tampilNama(Javascript));
 
// arrow function array
// let rider = ['vale','pecco','morbi','luca','MIR','Taro'];

// mengmbalikan dalam bentuk array
// let jumlahHuruf = rider.map(nama => nama.length);
// console.log(jumlahHuruf);

// mengmbalikan dalam bentuk object
// let jumlahHuruf = rider.map(nama => ({nama: nama, jmlhhuruf : nama.length}));
// console.table(jumlahHuruf);

// konsep keyword THIS pada arrow function
// constructor function

// const Chelsea = function () {
//     this.nama = 'werner';
//     this.umur = 22;
//     this.sayPlayers = function () {
//         console.log(`Hello , Player name is ${nama}, and age ${umur} old year`);
//     }
// }

// const werner = new Chelsea();

// konsep keyword THIS pada arrow function dalam penggunaan nyata
const box = document.querySelector('.box');
box.addEventListener('click', function(){
    this.classList.toggle('size');
    setTimeout( () => {
        this.classList.toggle('caption');
    },600)
});
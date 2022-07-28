// function constructor (keyword new)

function Mahasiswa(nama, energi){
    this.nama = nama;
    this.energi = energi;

    this.makan = function (porsi){
        this.energi += porsi;
        console.log('halo  ${this.nama}, selamat makan');
    }

    this.main = function (jam){
        this.energi += jam;
        console.log('halo  ${this.nama}, selamat makan');
    }
}

let silva = new Mahasiswa('silva', 80)
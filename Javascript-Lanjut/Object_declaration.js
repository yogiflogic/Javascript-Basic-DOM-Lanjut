// function declaration
function Mahasiswa (nama, energi){
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    mahasiswa.makan = function (porsi){
        this.energi += porsi;
        console.log('halo  ${this.nama}, selamat makan');
    }

    mahasiswa.main = function (jam){
        this.energi -= jam;
        console.log('halo  ${this.nama}, selamat bermain');
    }

    return mahasiswa;
}

let ziyech = Mahasiswa('ziy', 85);
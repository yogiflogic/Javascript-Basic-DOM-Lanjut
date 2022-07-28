// function declaration Object.create()

const methodMahasiswa = {
    makan : function(porsi) { 
        this.energi += porsi;
        console.log('halo  ${this.nama}, selamat makan');
    },

    main : function(jam) { 
        this.energi -= jam;
        console.log('halo  ${this.nama}, selamat bermain');
    },

    tidur : function(jam) { 
        this.energi += jam * 2;
        console.log('halo  ${this.nama}, energy bertambah');
    },
};

function Mahasiswa (nama, energi){
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    return mahasiswa;
}

let kai = Mahasiswa('Kai', 99);
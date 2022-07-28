// Object Literal

let mahasiswa1 = {
    nama : 'kai',
    energy: 800,
    makan : function (porsi){
        this.energi = this.energi + porsi;
        console.log('Halo $(this.nama), selamat makan');
    }
}

let mahasiswa2 = {
    nama : 'kova',
    energy: 70,
    makan : function (porsi){
        this.energi = this.energi + porsi;
        console.log('Halo $(this.nama), selamat makan');
    }
}
// Prototype (di belakang layar jika menggunakan class prototype inilah yang terjadi)
// Prototype sama sperti inheritance
function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
}

Mahasiswa.prototype.makan = function (porsi) {
  this.energi += porsi;
  return `Halo ${this.nama}, selamat makan`;
};
Mahasiswa.prototype.main = function (jam) {
  this.energi -= jam;
  return `Halo ${this.nama}, selamat bermain`;
};
Mahasiswa.prototype.tidur = function (jam) {
  this.energi += jam * 2;
  return `Halo ${this.nama}, selamat tidur`;
};

let kai = new Mahasiswa('kai', 20);

// versi class (di belakang layar class sebenarnya seperti prototype lah yang di jalankan)

class Chelsea {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, selamat makan`;
  }
  main(jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, selamat bermain`;
  }
  tidur(jam) {
    this.energi += jam * 2;
    return `Halo ${this.nama}, selamat tidur`;
  }
}

let silva = new Mahasiswa('silva', 80);

// ini cara literal (untuk membuat object yang sedikit karena tidak cocok untuk membuat obejct yang banyak )
var chelseafc = {
    nama  : "ziyech",
    umur  : 25,
    trophy: ["UCL","UEL"],
    alamat: {
        jalan: "jl.stamford bridge",
        kota : "london"
    }
};

// cara function declaration

function objectChelsea(nama, umur, trophy, alamat){
    var cfc = {};

    cfc.nama = nama;
    cfc.umur = umur;
    cfc.trophy = trophy;
    cfc.alamat = alamat;

    return cfc; 
}

// cara panggil function declaration

var objcfc = objectChelsea("silva",36, 25, "london");

// constractor function (khusus membuat object pakai keywrod (this) untuk membuat functionnya dan keyword (new) untuk memanggilnyas) di sarankan awal pemberian nama dengan huruf besar (Chelsea)

function Chelsea(nama, umur, trophy, alamat){
    this.nama = nama;
    this.umur = umur;
    this.trophy = trophy;
    this.alamat = alamat;
}

// cara panggil object jika menggunakan constractor pakai keyword (new)
var cfc = new Chelsea('kai',25,5,"london");

console.log(this);


// LATIHAN OBJECT
// Constractor
function Pesawat(nama, rute, penumpang, kas){
    this.nama = nama;
    this.rute = rute;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang);

        return this.penumpang;
    }

    this.penumpangTurun = function(namaPenumpang, bayar){
        if(this.penumpang.length === 0){
            alert('Penumpang Sedang Kosaong');
            return this.penumpang;
        }

        for(var i = 0; i < this.penumpang.length; i++){
            // ketika penumpang ada set stts dengan undefined
            if(this.penumpang[i] == namaPenumpang){
                this.penumpang[i] = undefined;

                this.kas += bayar;

                return this.penumpang;
            }
        }
    }
}

var pswt = new Pesawat('Capatain',['Jakarta','Padang'],[],0);
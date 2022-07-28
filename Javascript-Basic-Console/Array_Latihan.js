var pesawat = [];

var tambahPenumpang = function(namaPenumpang, pesawat ){
    
    // jika pesawat kosong
    if (pesawat.length == 0){
        
        // tambah penumpang di awal array
        pesawat.push(namaPenumpang);
        
        // kembalkan isi array & keluar dari function
        return pesawat;
        
    }else{

        // telusuri seluruh kursi pesawat dari awal
        for (var i = 0; i < pesawat.length; i++){
            
            // jika ada kursi pesawat kosong
            if(pesawat[i] == undefined){

                // tambah penumpang pesawat di kursi tersebut
                pesawat[i] = namaPenumpang;
                
                // kembalkan isi array & keluar dari function
                return pesawat;
                
                // jika sudah ada nama yang sama
            }else if(pesawat[i] == namaPenumpang){
            
                // tampilkan pesan kesalahanya
                console.log(namaPenumpang + " Sudah ada");
            
                // kembalkan isi array & keluar dari function
                return pesawat;

                // jika seluruh kursi pesawat terisi
            }else if( i == pesawat.length -i) {
                            
                // tambah penumpang di akhir array
                pesawat.push(namaPenumpang);

                // kembalikan isi array dan keluar dari function
                return pesawat;
            }
            
        }
    }
}

var hapusPenumpang = function(namaPenumpang, pesawat ){
    if(pesawat.length == 0){
        console.log("Pesawat Masih Kosong");
    }else{
        for (var i = 0; i < pesawat.length; i++){
            if(pesawat[i] == namaPenumpang){
                pesawat[i] = undefined;
            }else if(pesawat.length-1){
                console.log("tidak ada di dalam pesawat");
            }
        }
    }
    return pesawat;
}

// Mouse Event
document.body.addEventListener('mousemove', function(event) {
    // posisi mouse
    const xpos = Math.round((event.screenX/ window.innerWidth) * 255);
    const ypos = Math.round((event.screenY/ window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb('+ xpos +','+ ypos +','+ 100 +')';

});

function getComp(){

    const comp = Math.random();
    
    if(comp < 0.34) return 'gajah';
    if(comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

function getResult(comp, player){
    
    if (player == comp) return hasil = 'SERI';
    if (player == 'gajah' ) return (comp == 'orang') ? 'Menang' : 'Kalah';
    if (player == 'orang') return (comp == 'gajah') ? 'Kalah' : 'Menang';
    if (player == 'semut') return (comp == 'orang') ? 'Kalah' : 'Menang';

}

function putar(){
    const imgComp = document.querySelector('.img-komputer');
    const gambar = ['gajah','orang','semut'];
    let i = 0;
    const waktuMulai = new Date().getTime();

    setInterval(function(){
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }
        imgComp.setAttribute('src','img/' + gambar[i++] + '.png');
        // jika i sudah mencapai batas maksimal isi array kembali ke nol
        if(i == gambar.length) i = 0;
    },100)
}

const select = document.querySelectorAll('li img');
select.forEach( function (selc) {

    selc.addEventListener('click', function() {
    
        // panggil fungsi comp
        const compOption = getComp();

        // panggil nama class berdasarkan nama atribut class
        const playerOption = selc.className;
        // panggil fungsi hasil
        let hasil = getResult(compOption, playerOption);
        // let total = 0;

        // panggil fungsi acak suit computer
        putar();

        // set waktu tampil score
        setTimeout(function(){
            // panggil class comp
            const imgComp = document.querySelector('.img-komputer');
            // MANIPULSI atau ambil gambar sesuai nama gambar pada folder berdasarkan atribut SRC pada tag IMG 
            imgComp.setAttribute('src','img/'+ compOption + '.png');

            // panggil class info untuk menampilkan hasil suit
            // const info = document.querySelector('.info');
            // // keluarkan hasil pertandingan di info
            // info.innerHTML = hasil;

                if (hasil == "SERI") { hasil = "DRAW " + 100;}
                else if (hasil == "Menang") { hasil = "WIN " + 300;}
                else {hasil = "Lose " + 0;}
                
                // panggil class info untuk menampilkan hasil suit
                const info = document.querySelector('.info');
                // keluarkan hasil pertandingan di info
                info.innerHTML = hasil;

                const audio = document.querySelector(".audio");
                audio.autoplay = true;
                audio.load();
                if(selc){
                    selc = false;
                }
                
        }, 1000);
    });
});

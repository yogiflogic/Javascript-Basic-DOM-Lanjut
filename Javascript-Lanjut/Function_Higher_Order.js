// function sebagai argument di sebut callback

// function kerjakanTugas = Higher Order Function, selesai = callback
function kerjakanTugas(mataKuliah, selesai){
    console.log(`Mulai mengerjakan tugas ${mataKuliah}`);
    selesai();
}

function selesai(){
    alert('Selesai mengerjakan tugas');
}

kerjakanTugas('Pemrograman Web', selesai);


// function sayHello(waktu) = Higher Order Function
function sayHello(waktu){

// return = return value
    return function(nama){
        console.log(`Hellow ${nama}, Selamat ${waktu}, semoga harimu menyenangkan`);
    }
}

let selatmaMalam = sayHello('malam');

console.dir(selatmaMalam('chelsea'));

console.log(range);
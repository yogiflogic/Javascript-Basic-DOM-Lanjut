const tUbahWarna = document.getElementById('tUbahWarna');

tUbahWarna.onclick = function(){
    // document.body.style.backgroundColor = 'aquamarine';
    // document.body.setAttribute('class','bgbody');
    // methon toggle berfungsi memberi dan menghilangkan clas untuk element HTML secara otomatis
    document.body.classList.toggle('bgbody')
}

const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');

tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type','button');

// Menambahakan button setelah button ubah warna 
tUbahWarna.after(tAcakWarna);
tAcakWarna.style.margin = '5px';

tAcakWarna.addEventListener('click',function(){

    const r = Math.round(Math.random() * 255 + 1 );
    const g = Math.round(Math.random() * 255 + 1 );
    const b = Math.round(Math.random() * 255 + 1 );
    // console.log(r);
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b+')';

});

// Slide Range
const rMerah = document.querySelector('input[name=rMerah]');
const rGreen = document.querySelector('input[name=rGreen]');
const rBlue  = document.querySelector('input[name=rBlue]');

rMerah.addEventListener('input', function(){
    // value -> mengambil nilai apapun yang ada di dalam tag HTML
    const r = rMerah.value; 
    const g = rGreen.value; 
    const b = rBlue.value; 

    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

rGreen.addEventListener('input', function(){
    // value -> mengambil nilai apapun yang ada di dalam tag HTML
    const r = rMerah.value; 
    const g = rGreen.value; 
    const b = rBlue.value; 

    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

rBlue.addEventListener('input', function(){
    // value -> mengambil nilai apapun yang ada di dalam tag HTML
    const r = rMerah.value; 
    const g = rGreen.value; 
    const b = rBlue.value; 

    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

// Mouse Event
document.body.addEventListener('mousemove', function(event) {
    // posisi mouse
    const xpos = Math.round((event.screenX/ window.innerWidth) * 255);
    const ypos = Math.round((event.screenY/ window.innerHeight) * 255);
    // const zpos = Math.round(event) * 255 + 1;
    document.body.style.backgroundColor = 'rgb('+ xpos +','+ ypos +','+ 100 +')';
    // console.log(" Lebar "+ window.innerWidth);
    // console.log(" Tinggi " + window.innerWidth);
});
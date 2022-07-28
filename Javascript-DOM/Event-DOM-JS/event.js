// const p1 = document.querySelector('.p1');
// const p2 = document.querySelector('.p2');
// const p3 = document.querySelector('.p3');

// // cara panggil di dalam tag HTML
// function ubahWarnaP1(){
//     p1.style.backgroundColor = 'salmon';
// }

// // cara panggil dengan event pada JS
// function ubahWarnaP2(){
//     p2.style.backgroundColor = 'yellowgreen';
// }

// function ubahWarnaP3(){
//     p3.style.backgroundColor = 'aqua';
// }

// p2.onclick = ubahWarnaP2;
// p3.onclick = ubahWarnaP3;

// const p4 = document.querySelector('section#b p');

// p4.addEventListener('click', function(){
    //     const ulB = document.querySelector('section#b ul')
    //     const liBaru = document.createElement('li');
    //     const teksBaru = document.createTextNode('Teks Li Baru');
    
    //     liBaru.appendChild(teksBaru);
    //     ulB.appendChild(liBaru);
    // });

    // MOUSE Event
const secA = document.getElementById('a');
const secB = document.getElementById('b');

secA.addEventListener('click',function(){
    secA.style.backgroundColor = 'lightgreen';
});

secB.addEventListener('mouseenter',function(){
    secB.style.backgroundColor = 'yellow';
});

secB.addEventListener('mouseleave',function(){
    secB.style.backgroundColor = '#005fff';
    secB.style.border = '5px solid orange';
    secB.style.color = 'white';
});


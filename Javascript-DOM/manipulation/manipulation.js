// const judul = document.getElementById('judul');
// judul.innerHTML = "<em>MANIPULATION</em>";

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = "GANTI PARAGRAF A";

// const judul = document.querySelector('#judul');
// judul.style.color = "aqua";
// judul.style.backgroundColor = "orange";

// menambah attribute
// const judul1 = document.getElementsByTagName('h1');
// judul1[0].setAttribute('name','judul');

// MANIPULASI NODE:

// membuat elment 'P' baru
const pBaru = document.createElement('p');
// membuat Teks Baru
const teksPBaru = document.createTextNode('Ini Adalah Teks Baru');

// memasukan teks ke dalam element P
pBaru.appendChild(teksPBaru);

// simpanPbaru di akhir section
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

const li = document.createElement('li');
const teksLiBaru = document.createTextNode('Ini Item Baru');

li.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(li,li2);
const li3 = ul.querySelector('li:nth-child(2)');
li3.style.backgroundColor = "aquamarine";

// // hapus element
// const linkig = document.getElementsByName('a')[0];
// linkig.removeChild(linkig);

// replace element
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2 = document.createElement('h2');
const judulBaru = document.createTextNode('SECTION B');
h2.appendChild(judulBaru);

sectionB.replaceChild(h2,p4);
/*

2.00
12.00
15.00

DOM TREE:
03.00

Node List vs HTML Collection
5:25

Struktur Hierarki
DOM TREE
8:25

DOM SELECTION :

DOM Selection Method:

- getElementById() = element 
- getElementsByTagName() = HTMLCollection -> ambil index sebagai ARRAY
- getElementByClassName() = HTMLCollection -> ambil index sebagai ARRAY
- querySelector() = element -> mengembalikan 1 value
- querySelectorAll() = NodeList -> mengambalikan banyak value (misalkan ada tag li 5 buah dalam 1 ul , maka semua nya akan di ambil , beda dengan querySelector() hanya mengambil 1 value (li) saya )

Mengubah Node root:

DOM MANIPULATION :
Manipulasi Element :
- element.innerHTML
- element.style.<property>
- element.setAttribute()
- element.classList
    classList.add()
    remove()
    toggle()
    item(3)
    contains('satu')
    replace('satu','dua')

Manipulasi Node:
- document.createElement()
- document.createTextNode()
- node.appendChild()
- node.insertBefore()
- parentNode.removeChild()
- parentNode.replaceChild()

Method DOM JS Dari MOZILA:
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

EVENTS DOM JS :
Events pada JS merepresentasikan sebuah kejadian yang terjadi di dalam DOM,
kejadian tersebut bisa di lakukan oleh user (mouse, event, keyboard event, dll)

atau

Juga bisa dilakukan otomatis oleh API
(animasi selesai di jalankan, halaman selesai di load dll)

Cara menjalan event pada DOM JS :
- Event Handler = cara lama
    - inline HTML attribute (tidak di sarankan)
    - Element method

- addEventListener() = Cara baru

List Event DOM JS :
- Mouse Event
- Keyboard Event
- Resources Event
- Focus Event
- View Event
- Form Event
- CSS Animation & Transation Event
- Drag & Drop Event
- Dll


DOM TRAVERSAL :
Penelusuran DOM

Method :

parentNode = mengembalikan node
parentElement = mengembalikan element
nextSibling = mengembalikan node
nextElmentSibling = mengembalikan element
previousSibling = mengembalikan node
previousElmentSibling = mengembalikan element


PREVENT DEFAULT :

preventDefault(); -> Cegah aksi default

EVENT BUBBLING :

stopPropagation(); -> Stop efect bubbling

setTimeOut(); memiliki 2 paramter = 1.Fungsi yang akan di jalankan , 2. waktu/durasi
clearTimeOut(); untuk memberhentikan setTimeout() jika di perlukan

setInterval(); -> fungsi untuk melakukan sesuatu berulang-ulang,
memiliki 2 parameter = 1.Fungsi yang akan di jalankan , 2. waktu/durasi

clearInterval(); untuk memberhentikan setInterval() jika di perlukan


*/
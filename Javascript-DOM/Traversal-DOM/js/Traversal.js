// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function(){
//     card.style.display = "none";
// });

// CARA TRAVERSAL
// CARA 1
// const close = document.querySelectorAll('.close');

// for (let i = 0; i < close.length; i++){

//     close[i].addEventListener('click', function (e){
//         // close[i].parentElement.style.display = "none";
//         e.target.parentElement.style.display = "none";
//     });

// }

// CARA 2
// const close = document.querySelectorAll('.close');

// close.forEach(function(el){

//     el.addEventListener('click', function (e){
//         // close[i].parentElement.style.display = "none";
//         e.target.parentElement.style.display = "none";
        // Cegah aksi default 
//         e.preventDefault();
//         // Stop even close efect bubbling
//         e.stopPropagation();
//     });

// });

// const cards = document.querySelectorAll('.card');

// cards.forEach(function(card){
//     card.addEventListener('click', function(){
//         alert('Oke');
//     })
// })

// CARA 3

const container = document.querySelector('.container');

container.addEventListener('click',function(cont){
    if(cont.target,className = 'close'){
        cont.target.parentElement.style.display ="none";
              
        // Cegah aksi default
        cont.preventDefault();
    }
})
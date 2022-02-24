let showMapButton = document.querySelectorAll('.showMap');
let hidemapButton = document.querySelectorAll('.hideMap');
let mapBlock = document.querySelectorAll('.mapBlock');


function show(e){
    e.target.style.visibility = 'visible';
  }
  
  showMapButton.forEach(el => el.addEventListener('click', show, false));

function hide(e){
    e.target.style.visibility = 'hidden';
  }
  
  hidemapButton.forEach(el => el.addEventListener('click', hide, false));


// showMapButton.forEach(el => el.addEventListener('click', function() {
//     mapBlock.forEach(e => e.setAttribute('class', 'mapBlockShow')) 
// }));

// hidemapButton.forEach(el => el.addEventListener('click', function() {
//     mapBlock.forEach(e => e.setAttribute('class', 'mapBlock')) 
// }));



// let showMapButton = document.querySelector('.showMap1');
// let hidemapButton = document.querySelector('.hideMap1');
// let mapBlock = document.querySelector('.mapBlock');

// console.log(showMapButton);

// showMapButton.addEventListener('click', function() {
//     mapBlock.setAttribute('class', 'mapBlockShow');
// });

// hidemapButton.addEventListener('click', function() {
//     mapBlock.setAttribute('class', 'mapBlock');
// });
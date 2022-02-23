let showMapButton = document.querySelectorAll('.showMap');
// let showMapButton = document.querySelector('.showMap1');
let hidemapButton = document.querySelector('.hideMap1');
let mapBlock = document.querySelector('.mapBlock');

console.log(mapBlock);

showMapButton.addEventListener('click', function() {
    mapBlock.setAttribute('class', 'mapBlockShow');
});

hidemapButton.addEventListener('click', function() {
    mapBlock.setAttribute('class', 'mapBlock');
});
// let showMapButton = document.querySelectorAll('.showMap');
let showMapButton = document.querySelector('.showMap1');
let mapBlock = document.querySelector('.mapBlock');

console.log(mapBlock);

showMapButton.addEventListener('click', function() {
    mapBlock.setAttribute('class', 'mapBlockShow');
});
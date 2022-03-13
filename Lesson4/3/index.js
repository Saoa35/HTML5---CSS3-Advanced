function createDiagram (data, width, height, color) {
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.style.width = width;
    svg.style.height = height;

    let maxNumber = Math.max(...data);

    let scale = height / maxNumber;
    let itemWidth = Math.floor(width / data.length);

    data.map(el => {
        let item = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        let itemHeight = el * scale;
        
    });
}

// let ss = [2, 4, 6, 8, 12, 10];

// console.log(createDiagram(ss, 300, 300));

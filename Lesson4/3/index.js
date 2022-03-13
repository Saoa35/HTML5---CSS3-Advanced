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
        item.setAttribute("height", itemHeight + "px");
        item.setAttribute("width", itemWidth - 4 + "px");

        item.setAttribute("y", height - itemHeight);
        item.setAttribute("x", itemWidth * el);

        item.style.fill = color;

        item.addEventListener("mouseover", overOn);
        item.addEventListener("mouseout", outOn);

        svg.append(item);
    });

    function overOn() {this.style.fill = "red";}
    function outOn() {this.style.fill = "color";}

    return svg;
}

// let ss = [2, 4, 6, 8, 12, 10];

// console.log(createDiagram(ss, 300, 300));

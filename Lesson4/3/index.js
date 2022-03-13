function createDiagram (data, width, height, color) {
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.style.width = width;
    svg.style.height = height;

    let maxNumber = Math.max(...data);

    let scale = height / maxNumber;
    let itemWidth = Math.floor(width / data.length);

    for(let i = 0; i < data.length; i++) {
        let item = document.createElementNS("http://www.w3.org/2000/svg", "rect");

        let itemHeight = data[i] * scale;
        item.setAttribute("height", itemHeight + "px");
        item.setAttribute("width", itemWidth - 4 + "px");

        item.setAttribute("y", height - itemHeight);
        item.setAttribute("x", itemWidth * i);

        item.style.fill = color;

        item.addEventListener("mouseover", overOn);
        item.addEventListener("mouseout", outOn);

        svg.append(item);
    }

    function overOn() {this.style.fill = "red";}
    function outOn() {this.style.fill = color;}

    return svg;
}

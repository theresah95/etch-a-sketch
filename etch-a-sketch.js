function createRow () {
    //Create Row
    const row = document.createElement('div');
    //Edit Row
    row.style.display = "flex";
    row.style.alignItems = "stretch";
    //Create Grid Boxes
    const boxes = document.createElement('div');
    //Add Boxes to Row
    row.appendChild(boxes);
    //Add Row to Container
    const container = document.getElementById('container');
    container.appendChild(row);
};
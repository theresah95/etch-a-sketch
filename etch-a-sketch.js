function createRow() {

    //Create Row Container
    const row = document.createElement('div');
    row.style.display = "flex";
    row.style.justifyContent = "space-evenly";
    row.style.border = "5px red solid";

    for(i=0; i < 17; i++){

    //Create Grid Boxes for Row
    const box = document.createElement('div');
    box.style.border = "5px green solid";
    box.style.margin = "5px";

    //Append Boxes to Row
    row.appendChild(box);

    }
    //Append Row to Container
    const container = document.getElementById('container');
    container.appendChild(row);
}

createRow();
function createRow() {

    //Create Row Container
    const row = document.createElement('div');
    row.style.display = "flex";
    row.style.justifyContent = "space-evenly";

    for(i=0; i < 16; i++){
        //Create Grid Boxes for Row
        const box = document.createElement('div');
        box.style.border = "1px black solid";
        box.style.height = "50px";
        box.style.width = "50px";

        //Append Boxes to Row
        row.appendChild(box);
    }

    //Append Row to Container
    const container = document.getElementById('container');
    container.appendChild(row);
}

createRow();
function createRow() {

    //Create Row Container
    const row = document.createElement('div');
    row.style.display = "flex";
    row.style.justifyContent = "center";

    for(i=0; i < 16; i++){
        //Create Grid Boxes for Row
        const box = document.createElement('div');
        box.style.border = "1px black solid";
        box.style.backgroundColor = "white";
        box.style.height = "25px";
        box.style.width = "25px";
        
        //Change Color of Box
        box.addEventListener(
            "mouseenter",
            (event) => {
              // highlight the mouseenter target
              event.target.style.backgroundColor = "black";
            }
          );

        //Append Boxes to Row
        row.appendChild(box);
    }

    //Append Row to Container
    const container = document.getElementById('container');
    container.appendChild(row);
}


function createGrid (){

    count = 0;

    //Creates 16 rows
    while (count != 16){
        createRow();
        count++;
    }
};

createGrid();
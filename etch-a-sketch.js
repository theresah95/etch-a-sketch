
function createRow(num) {

    //Get container
    const container = document.getElementById('container');

    //Create Row Container
    const row = document.createElement('div');
    row.style.display = "flex";
    row.style.justifyContent = "center";

    for(i=0; i < num; i++){
        //Create Grid Boxes for Row of num length
        const box = document.createElement('div');
        box.style.border = "1px black solid";
        box.style.backgroundColor = "white";
        box.style.height = "10px";
        box.style.width = "10px";
        
        //Change Color of Box
        box.addEventListener(
            "mouseenter",
            (event) => {
                // highlight the mouseenter target aka turn boxes black when mouse enters
                event.target.style.backgroundColor = "black";
            }
          );

        //Append Boxes to Row
        row.appendChild(box);
    }

    //Append Row to Container
    container.appendChild(row);
};

function createGrid (num){

    count = 0;

    //Creates num rows
    while (count != num){
        createRow(num);
        count++;
    }
};


function getNum () {

    //Variable for boxes per row
    let boxes = 0;

    let num = prompt("Please enter a number from 1 to 100: ");
    if (num < 1 && num > 100){
        getNum();
    } else {
        boxes = num;
    }

    return boxes;
};


function playGame () {

    let boxes = 0;

    const newGame = document.getElementById('newgame');
    newGame.addEventListener('click', () => {
        //Fetch container
        const container = document.getElementById('container');
        //Check if there are any children (previous grids) if so delete all children
        while (container.firstChild){
            container.removeChild(container.firstChild);
        }
        //Prompt for number of rows
        let num = getNum();
        //Creates grid using inputted number
        createGrid(num);

        }
    );
    
};

playGame();

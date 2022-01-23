const board = document.getElementById("board");
const black = document.getElementById("black");
const color = document.getElementById("color");
const random = document.getElementById("random");
const erase = document.getElementById("erase");
const colorpicker = document.getElementById("colorpicker");
const clear = document.getElementById("clear");
const slider = document.getElementById("myslider");
const size_display= document.getElementById("size-display");
const MODE_DEFAULT = "normal";
const COLOR_DEFAULT = "black";

let currentMode = MODE_DEFAULT;
let currentColor = COLOR_DEFAULT;
let currentSize = 16;
let text_display = `Current Size: ${currentSize} x ${currentSize}`;

let rows = document.getElementsByClassName("gridRow");
let square = document.getElementsByClassName("square");

makegrid(currentSize);

function makegrid(row_num){
    board.style.gridTemplateColumns = `repeat(${row_num}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${row_num}, 1fr)`;
    for (i = 0; i < row_num;i++)
    {
        for (j = 0; j < row_num; j++) //column
        {
            let temp_square = document.createElement("div");
            temp_square.addEventListener("mouseover", setcolor);
            board.appendChild(temp_square).className = "square";
        }
    }  
}

function setCurrentMode (mode){
    currentMode = mode;
    setcolor;
}

function setcolor (e){
    console.log(currentMode);
    if (currentMode == MODE_DEFAULT)
    {
        e.target.style.background = COLOR_DEFAULT;
    } else if (currentMode == "eraser")
    {
        
        e.target.style.background = "white";
    } else if (currentMode == "random")
    {
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        e.target.style.background = `rgb(${red}, ${green}, ${blue})`;
    } else if (currentMode = "color"){
        e.target.style.background = currentColor;
    }
}

black.onclick = () => setCurrentMode(MODE_DEFAULT);
random.onclick = () => setCurrentMode("random");
erase.onclick = () => setCurrentMode("eraser");
clear.onclick = () => changesize();

currentSize = slider.value;
slider.oninput = () => changesize();
colorpicker.oninput = () =>{
    currentColor = colorpicker.value;
    currentMode = "color";
    setcolor;
    console.log(currentColor);
}


function changesize(){
    currentSize = slider.value;
    displaysize();
   
    while(board.firstChild)
    {
        board.removeChild(board.lastChild);
    }
    makegrid(currentSize);
    console.log(slider.value);
}

function displaysize(){
    text_display = "Current Size: " + currentSize + " x " + currentSize;
    size_display.innerHTML = text_display;
}


size_display.innerHTML = text_display;


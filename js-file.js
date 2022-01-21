const container = document.getElementById("container");
const black = document.getElementById("black");
const color = document.getElementById("color");
const erase = document.getElementById("erase");
const slider = document.getElementById("myslider");
const MODE_DEFAULT = "normal";
const COLOR_DEFAULT = "black";

let currentMode = MODE_DEFAULT;
let currentColor = COLOR_DEFAULT;
let currentSize = 16;

let rows = document.getElementsByClassName("gridRow");
let square = document.getElementsByClassName("square");

function makegrid(row_num)
{
    for (i = 0; i < row_num;i++)
    {
        let newrow = document.createElement("div");
        for (j = 0; j < row_num; j++)
        {
            let temp_square = document.createElement("div");
            temp_square.addEventListener("mouseover", setcolor);
            newrow.appendChild(temp_square).className = "square";
        }
        container.appendChild(newrow).className = "gridRow";
    }  
}

makegrid(currentSize);

function setCurrentMode (mode)
{
    currentMode = mode;
    setcolor;
    console.log(currentMode);
}


function setcolor (e){
    if (currentMode == MODE_DEFAULT)
    {
        e.target.style.background = COLOR_DEFAULT;
    } else if (currentMode == "eraser")
    {
        console.log(currentMode);
        e.target.style.background = "white";
    }else if (currentMode == "color")
    {
        console.log(currentMode);
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        e.target.style.background = `rgb(${red}, ${green}, ${blue})`;
    }
}

function eraseboard (){
    console.log("abc");
    alert("Hello");
}

black.onclick = () => setCurrentMode(MODE_DEFAULT);
color.onclick = () => setCurrentMode("color");
erase.onclick = () => setCurrentMode("eraser");

currentSize = slider.value;
slider.oninput = () => changesize();

function changesize(){
    currentSize = slider.value;
    let removal = document.getElementsByClassName("gridRow");
    while(container.firstChild)
    {
        container.removeChild(container.lastChild);
    }
    makegrid(currentSize);
    console.log(slider.value);
}

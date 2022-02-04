//Initializing all of the DOM elemenets that will be used
const slider = document.getElementById('slider');
const grid = document.getElementById('grid');
const clear = document.getElementById('clearbtn');
const colorPicker = document.getElementById('colorpicker');
const sliderText = document.getElementById('slidersize');
const pen = document.getElementById('penbtn');
const eraser = document.getElementById('eraserbtn');
const rainbow = document.getElementById('rainbowbtn');
//Pen is on when webpage is loaded
let penOn = true;
let eraserOn = false;
let rainbowOn = false;

//Sets pen to be active when button is clicked 
const penIsClicked = pen.addEventListener('mousedown', function() {
    penOn = true;
    eraserOn = false;
    rainbowOn = false;
    pen.classList.add('active');
    eraser.classList.remove('active');
    rainbow.classList.remove('active');
})
//Sets eraser to be active when eraser is clicked 
const eraserIsClicked = eraser.addEventListener('mousedown', function() {
    penOn = false;
    eraserOn = true;
    rainbowOn = false;
    pen.classList.remove('active');
    eraser.classList.add('active');
    rainbow.classList.remove('active');
})

//Sets rainbow to be active when rainbow is clicked 
const rainbowIsClicked = rainbow.addEventListener('mousedown', function() {
    penOn = false;
    eraserOn = false;
    rainbowOn = true;
    pen.classList.remove('active');
    eraser.classList.remove('active');
    rainbow.classList.add('active');
})

//Randomizes and returns random color combination
const randomColorGenerator = () => {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return ('rgb(' + r + ',' + g +',' + b);
}

//changes the slider text when slider is moved
const changeSlideText = (value) => {
    sliderText.innerText = value + ' x ' + value;
}

//clears the grid 
const clearGrid = () => {
    grid.innerHTML = '';
    createGrid();
}

//clears and creates a new grid to the new selected size when hte slider is moved
let e = slider.addEventListener('mouseup', function() {
    clearGrid();
    createGrid();
    changeSlideText(slider.value);
});

//listens for the clear button to be pressed and then clears the grid
const clearBtn = clear.addEventListener('click',clearGrid);

//creates grid and listens for mouse movement in the grid and changes the color according to which button is active
const createGrid = () => {
    
    document.documentElement.style.setProperty('--columns-row', slider.value);
    for(let i = 0; i<slider.value * slider.value; i++){
        let div = document.createElement('div');
        
        div.addEventListener('mouseenter', function() {
            if(penOn){
                this.style.backgroundColor = colorPicker.value;
            }
            else if(eraserOn){
                this.style.backgroundColor = 'rgb(218, 210, 210)';
            }
            else if(rainbowOn){
                let color= randomColorGenerator();
                this.style.backgroundColor = color;
                
            }
    })
        grid.appendChild(div);
    }
}

//creates grid on website load
let start = window.addEventListener('start',createGrid());
const slider = document.getElementById('slider');
const grid = document.getElementById('grid');
const clear = document.getElementById('clearbtn');
const colorPicker = document.getElementById('colorpicker');
const sliderText = document.getElementById('slidersize');
const sliderValue = () => {
    console.log(slider.value);
}

const changeSlideText = (value) => {
    sliderText.innerText = value + ' x ' + value;
}

const clearGrid = () => {
    grid.innerHTML = '';
    createGrid();
}
let el = slider.addEventListener('mouseup', function() {
    clearGrid();
    createGrid();
    changeSlideText(slider.value);
});
const clearBtn = clear.addEventListener('click',clearGrid);
const createGrid = () => {
    
    document.documentElement.style.setProperty('--columns-row', slider.value);
    for(let i = 0; i<slider.value * slider.value; i++){
        let div = document.createElement('div');
        
        div.addEventListener('mouseenter', function() {
            this.style.backgroundColor = colorPicker.value;
            console.log('doing it');
        })
        grid.appendChild(div);
    }
}

let start = window.addEventListener('start',createGrid());
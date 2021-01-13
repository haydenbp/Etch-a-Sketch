const container = document.querySelector('container');
const cells = document.querySelectorAll('cell');
const slider = document.querySelector('.slider');
const buttons = document.querySelectorAll('.buttons')
const clear = document.querySelector('.clearButton');
const colorPicker = document.querySelector('.color');
let pickColor = colorPicker.value;
let cellColor = 'black';
let colorSetting;
let changeCount = 1;

colorPicker.addEventListener('change',()=>{
    pickColor = colorPicker.value;

})

console.log(clear)

buttons.forEach(item => item.addEventListener('click',()=>{
    colorSetting = item.innerText ;
    console.log(typeof(cellColor));
}))


colorChange =() =>{

    if(changeCount>=10){changeCount = 1;}

    switch (colorSetting) {
       
        case 'black':
            cellColor = 'black'
        break;

        case 'Eraser':
            cellColor = 'white'
        break;

        case 'Grey Scale':
            cellColor = `rgb(0,0,0,${1-(changeCount/10)})`
        break;

        case 'Rainbow':
            cellColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        break;

        case 'Pick:':
            cellColor = `${pickColor}`;
        break;

        default: 
    
            cellColor = 'black'
        break;
    }


};


createGrid = gridNumber =>{ // creates a grid with Height and Width of slider value
  let cellLength = `${100/gridNumber}%`

  let gridArea = gridNumber**2
    while(gridArea>0){  //creates a div with event listener "hover" and appends to container 

        const cell = document.createElement('cell');

        container.appendChild(cell);

        cell.style.flexBasis = cellLength;

        cell.style.height = cellLength;

        cell.addEventListener("mouseover", event => {
            //  cell.className = "hover"
            cell.style.backgroundColor = cellColor;
            colorChange();
            changeCount++;
            console.log(changeCount);
        })

        

        gridArea--;
    }
    
};


createGrid(slider.value); //calls createGrid function using initial slider value


resetGrid = () =>{ //sets grid dimensions to slider value

    let gridPixels = container.querySelectorAll('cell');
    console.log(gridPixels)

    gridPixels.forEach(item =>item.remove());
    
    createGrid(slider.value);

};



slider.addEventListener('change', ()=>{ //calls resetGrid function when slider value is changed
    
    resetGrid();

});



clear.addEventListener('click',()=>{

    let gridPixels = container.querySelectorAll('cell');

    gridPixels.forEach(item => item.style.backgroundColor = 'white');

    changeCount = 0;

});


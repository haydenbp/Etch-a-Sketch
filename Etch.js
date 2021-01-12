const container = document.querySelector('container');
const cells = document.querySelectorAll('cell');
const slider = document.querySelector('input');
const buttons = document.querySelectorAll('.buttons')
const clear = document.querySelector('.clearButton');
let color = 'black';

console.log(clear)

buttons.forEach(item => item.addEventListener('click',

()=>{
    color = item.innerText ;
    console.log(typeof(color));
}))

console.log(color)

/*colorChange(){
    switch (color) {
        case value:
            
            break;

        default: black
            break;
    }


}
*/

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
          cell.style.backgroundColor = color;
          colorChange();
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

});


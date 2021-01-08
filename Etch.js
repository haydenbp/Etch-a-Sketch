

const container = document.querySelector('container');

const cells = document.querySelectorAll('cell');
const slider = document.querySelector('input');



createGrid = gridNumber =>{
  let cellLength = `${100/gridNumber}%`

  let gridArea = gridNumber**2

    while(gridArea>0){
    const cell = document.createElement('cell');
    container.appendChild(cell);
    cell.style.flexBasis = cellLength;
    cell.style.height = cellLength;
    cell.addEventListener("mouseover", event => {
        cell.className = "hover"
    })
    gridArea--;
    }
    
};


createGrid(slider.value);



console.log(cells)



resetGrid = () =>{

    let gridPixels = container.querySelectorAll('cell');
    console.log(gridPixels)
  

gridPixels.forEach(item =>item.remove());
createGrid(slider.value);

};



slider.addEventListener('change', ()=>{

    
    resetGrid();

});






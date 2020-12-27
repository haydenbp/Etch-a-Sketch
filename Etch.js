const div = document.createElement('div');
const cell = document.createElement('cell');

const container = document.createElement('container');

const body = document.querySelector('body');

body.appendChild(container);
container.appendChild(div);
body.appendChild(div)

let i = 3;

while(i>0){
    const cell = document.createElement('cell');
    container.appendChild(cell);
    i--;


}



console.log(body)




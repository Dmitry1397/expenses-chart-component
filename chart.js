var spendings;

fetch('./data.json')
    .then((response) => response.json())
    .then((json) => spendings = json);

console.log(spendings);

const labels = document.querySelectorAll('.chart span');
const blocks = document.querySelectorAll('.data');

labels.forEach((element, index) => {
    //element.textContent = data;
})

blocks.forEach((element, index) => {
    //element.style.height = `${parseInt(data)*1.5}px`;
})

let array = [];

/*data.forEach(element => {
    array.push(element.amount);
})
*/
let max = Math.max(...array);
let maxId = array.indexOf(max);

//blocks[maxId].id = 'higher';


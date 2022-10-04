const labels = document.querySelectorAll('.chart span');
const blocks = document.querySelectorAll('.data');
let array = [];

fetch('./data.json')
    .then((response) => response.json())
    .then((json) => update(json));

function update(data) {
    labels.forEach((element, index) => {
        element.textContent = `$${data[index].amount}`;
    })

    blocks.forEach((element, index) => {
        element.style.height = `${parseInt(data[index].amount)*1.5}px`;
    })

    data.forEach(element => {
        array.push(element.amount);
    })

    let max = Math.max(...array);
    let maxId = array.indexOf(max);

    blocks[maxId].id = 'higher';
}





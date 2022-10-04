const labels = document.querySelectorAll('.chart span');
const blocks = document.querySelectorAll('.data');
const x = window.innerWidth;

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

    blocks[maxId].classList = 'data higher';
}

if (innerWidth < 500) {
    blocks.forEach(element => {
        element.addEventListener('click', () => {
            if (element.id === 'hidden') {
                element.style.opacity = 0.5;
                element.previousElementSibling.style.visibility = 'visible';
                element.id = 'visible';
            } else {
                element.style.opacity = 1;
                element.previousElementSibling.style.visibility = 'hidden';
                element.id = 'hidden';
            }
            
        })
    })
    console.log(x);
}




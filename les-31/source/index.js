let data = {
    animal: ['aap', 'vogel', 'leeuw'],
    color: ['red', 'green', 'blue'],
    food: ['banana', 'hemp seed', 'antilope']
}
let result = '';
let selection = {
    animal: '',
    color: '',
    food: ''
}
function setAnimal(event) {
    selection.animal = event.textContent;
    toggleClass(event);
    console.log('Animal', event.textContent);
}
function setColor(event) {
    selection.color = event.textContent;
    toggleClass(event);
    console.log('Color', event.textContent);
}
function setFood(event) {
    selection.food = event.textContent;
    toggleClass(event);
    console.log('Food', event.textContent);
}
function showSelection(event) {
    if (selection.animal !== '' && selection.food !== '' && selection.color !== '') {
        clearSelection()
        result = `${selection.animal} loves the color ${selection.color} and eats ${selection.food}`;

        alert(result);
        console.log(result);
        selection.animal = '';
    selection.food = '';
    selection.color = ''
        
    } else {
        result = 'Please select one item of each group';
    }
    let resultElements = document.querySelector('#result');
    resultElements.innerHTML = result;
}
function clearSelection() {
    let elements = document.querySelectorAll('td');
    elements.forEach(function (element) {
        element.classList.remove('selected');
    })
}
function toggleClass(element) {
    if (element.classList.contains('selected')) {
        element.classList.remove('selected');
    } else {
        element.classList.add('selected');
    }
}


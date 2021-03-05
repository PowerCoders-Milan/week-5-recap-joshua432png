var button = document.querySelector('button');

var input = document.querySelector('input');

function clickButton(){
    var pTag = document.createElement('p');
    pTag.appendChild(document.createTextNode(input.value));
    document.body.appendChild(pTag);
}

button.addEventListener('click', clickButton)
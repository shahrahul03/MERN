let titleElement = document.getElementById('title');
console.log(titleElement)
console.log(titleElement.textContent)

let contentElements = document.getElementsByClassName('content');
console.log(contentElements);
console.log(contentElements[0].innerHTML);
console.log(contentElements[0].outerHTML);

let listItemElements= document.getElementsByTagName('li');
console.log(listItemElements.length);

let content = titleElement.textContent;
console.log(content);
content="Hello ChatGpt";
console.log(content)

let paragraphElement = document.querySelector('.content');
paragraphElement.innerHTML =  "This is a <strong> modified</strong> paragraph.";
console.log(paragraphElement.innerHTML);

// let inputElement = document.getElementById('myInput');
// console.log(inputElement.type); 
// console.log(inputElement.value);
let inputElement = document.getElementsByClassName('myInput');
console.log(inputElement.type); 
console.log(inputElement.value);

inputElement.value ="new value";
console.log(inputElement.value);

// remove 
// checking if an attribute exits 

let element = document.getElementById('myInput');
if(element.hasAttribute("type")){
    console.log(element);

}else{
    console.log(element);

}

let newElement = document.createElement('div');
newElement.textContent = 'Newly created element';

let bodyElement = document.body;
bodyElement.appendChild(newElement);

// js sibling (Assignment)
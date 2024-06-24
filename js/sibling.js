let current =document.querySelector('.current');
let nextSibling = current.nextElementSibling;
console.log(nextSibling);

let current1 = document.querySelector('.current');
let nextSibling1 = current.nextElementSibling;
while(nextSibling1) {
console.log(nextSibling1);
nextSibling1 = nextSibling1.nextElementSibling;
}
let current2 =document.querySelector('.current');
let preSibling2 = current.previousElementSibling;
console.log(nextSibling);

let current3 = document.querySelector('.current');
let preSibling3 = current3.previousElementSibling;
while(preSibling3) {
console.log(preSibling3);
preSibling3 = preSibling3.previousElementSibling;
}


// sibling all together 

let getSiblings = function (e) {
    // for collecting siblings
    let siblings = [];
    // if no parent, return no sibling
    if (!e.parentNode) {
      return siblings;
    }
    // first child of the parent node
    let sibling = e.parentNode.firstChild;
    // collecting siblings
    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== e) {
        siblings.push(sibling);
      }
      sibling = sibling.nextSibling;
    }
    return siblings;
  };
  
  let siblings = getSiblings(document.querySelector(".current"));
  let siblingText = siblings.map(e => e.innerHTML);
  console.log(siblingText);
  
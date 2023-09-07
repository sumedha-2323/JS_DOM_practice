//createElement()
//createTextNode()
// appendChild() - insert at last  
//inserBefore() - inserts at first
// replaceChild()
// prepend() - to add at first
// remove() - removes entire list
// removeChild() - removes a particular item from list

const list = document.querySelector(".navbar");
console.log(list);

const listItem = document.createElement("li");
const text = document.createTextNode("Dynamic Service");
console.log(listItem);
console.log(text);
listItem.appendChild(text);
listItem.classList.add("nav-item");
console.log(listItem);
// list.appendChild(listItem);
// console.log(list);

const first = document.querySelector(".first");
list.insertBefore(listItem, first);
console.log(list);

// listItem.classList.add("first");
// list.replaceChild(listItem, first);
// console.log(list);

list.prepend(listItem);

const last = document.querySelector(".last");
list.removeChild(last);
// childNodes - gives how may tags or texts in lists(considers the space b/w elements)
//children - gives only the no of items in list...
const list = document.querySelector(".lists");
console.log(list.childNodes);
console.log(list.children);

const body = document.querySelector("body");
console.log(body);
console.log(body.childNodes);
console.log(body.children);

//nextSibling - gives the next item after 1st one - it may a white space...
const listItem = document.querySelector("ul li:nth-child(2)");
console.log(listItem);
console.log(listItem.nextSibling);

//nextElementSibling - gives the next element(without white spaces)
console.log(listItem.nextElementSibling);

//previousSibling and previousElementSibling
console.log(listItem.previousSibling);
console.log(listItem.previousElementSibling);

//parentElement
console.log(listItem.parentElement.parentElement);

//to find first and last child of the list
const lists = document.querySelector("ul");
console.log(lists);
console.log(lists.firstChild);
console.log(lists.firstElementChild);
console.log(lists.lastChild);
console.log(lists.lastElementChild);
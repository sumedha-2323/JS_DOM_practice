//attributes..
const list = document.querySelector(".lists");
console.log(list);
console.log(list.attributes);

//getAttribute()...
console.log(list.getAttribute("class"));

const h1 = document.querySelector("h1");
console.log(h1.getAttribute("id"));

//setAttribute()...
h1.setAttribute("class","heading");

list.setAttribute("class","newList");

//dataset...
console.log(list.dataset);
console.log(list.dataset.name);
// getElementById()
console.log(document.getElementById("text-div"));

//getElementByTagName()
console.log(document.getElementsByTagName("p"));

//getElementByClassName()
const classItems = document.getElementsByClassName("content");
console.log(classItems);
console.log(classItems[0]); // it will give 1st p tag

// if there is no matching id in the html, then it will print null
// if there is no matching tag or class in the html, then it will print an empty html collection

//querySelector()...
// the selector written in css will be used in this querySelectors...
const textDiv = document.querySelector("#text-div");
console.log(textDiv);

console.log(document.querySelector(".content")); // if id are multiple, it will select only 1st one

const byTag = document.querySelector("h1");
console.log(byTag);

//querySelectorAll()....
// to get multiple ids or classes...
const allSelectId = document.querySelectorAll(".content");
console.log(allSelectId);

const selecth5tag = document.querySelector(".text-content h5");
console.log(selecth5tag);

const selectList = document.querySelector(".lists");
console.log(selectList);

const lis = document.querySelectorAll(".lists li");
console.log(lis[1]);
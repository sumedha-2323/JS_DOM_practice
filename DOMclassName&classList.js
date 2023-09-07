// className 
// classList
// classList.add()
//classList.remove()
// classList.contains()
//toggle() - adds a class if it is not present before and removes a class if it is already present in that tag

const list = document.querySelector("ul");
// console.log(list.className);
// list.className = "navbar";

console.log(list.classList);
list.classList.add("normal");
list.classList.remove("navbar");

if (list.classList.contains("normal")) {
    list.classList.add("blue");
     console.log("yes");
}
else {
    list.classList.add("red");
    console.log("No");
}

console.log(list.classList.toggle("navbar"));
console.log(list.classList.toggle("blue"));
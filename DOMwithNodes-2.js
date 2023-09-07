// in easy way...

const list = document.querySelector(".navbar");
const listItem = "<li class='nav-item'>Dynamic </li>";
list.insertAdjacentHTML("afterend",listItem);
console.log(listItem);
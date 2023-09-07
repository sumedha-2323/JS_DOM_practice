// innerHtml
// innerText
// textContent

const para = document.querySelector(".para");
console.log(para);
console.log(para.textContent); // considers the white space..
console.log(para.innerText); // reoves white spaces and consoles it..
console.log(para.innerHTML); // consoles exactly in that tag, with th tags inside the p-tag

// to change the content..
para.textContent = "Hello sumedha";
para.innerHTML = "<h1>Hello <span>everyone </span></h1>";
para.innerText = "welcome";
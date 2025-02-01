const container = document.querySelector(".container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "glorified text in content";
container.appendChild(content);

const para1 = document.createElement("p");
para1.classList.add("red-para");
para1.textContent = "hey i'm red!";
para1.style.cssText = "color: red";
container.appendChild(para1);

const blueHead = document.createElement("h3");
blueHead.classList.add("blue-head");
blueHead.textContent = "i'm a blue h3!";
blueHead.style.cssText = "color: blue";
container.appendChild(blueHead);

const kiddoDiv = document.createElement("div");
kiddoDiv.classList.add("kiddoDiv");
kiddoDiv.setAttribute(
    "style", "background-color: pink; border: 5px solid black;"
);

const kiddoHead = document.createElement("h1");
kiddoHead.classList.add("kiddoHead");
kiddoHead.textContent = "i'm in a div";
kiddoDiv.appendChild(kiddoHead);

const kiddoPara = document.createElement("p");
kiddoPara.classList.add("kiddoPara");
kiddoPara.textContent = "ME TOO !";
kiddoDiv.appendChild(kiddoPara);

container.appendChild(kiddoDiv);


const btn1 = document.querySelector("#btn1");
btn1.onclick = () => alert("hello world 1");

const btn3 = document.createElement("button");
btn3.classList.add("alert-btn");
btn3.textContent = "once more, click!";
btn3.setAttribute(
    "style", "padding: 5px 20px; background-color: coral"
);
btn3.addEventListener("click", () => {
    alert("hello world 3");
})
container.appendChild(btn3)


const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
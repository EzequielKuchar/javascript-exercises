const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);


const content2 = document.createElement("p");
content2.textContent = "Hey I'm red!"
content2.setAttribute("style", "color: red;");
container.appendChild(content2);

const content3 = document.createElement("h3");
content3.textContent = "I'm a blue h3!"
content3.setAttribute("style", "color: blue;");
container.appendChild(content3);

const content4 = document.createElement("div");
content4.setAttribute("style", "border: 1px solid #000; background-color: pink;");
content4.setAttribute("id", "theDiv");
container.appendChild(content4);

const container2 = document.querySelector("#theDiv")

const content5 = document.createElement("h1")
content5.textContent = "I'm in a div"
container2.appendChild(content5);

const content6 = document.createElement("p")
content6.textContent = "ME TOO!"
container2.appendChild(content6)

btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });





/* a <p> with red text that says “Hey I’m red!”
an <h3> with blue text that says “I’m a blue h3!”
a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container. */
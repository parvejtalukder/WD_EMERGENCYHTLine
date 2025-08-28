# What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById is the way to get an only element using an ID as ID can used in only one element, getElementsByClassName can find many elment using Class as Class can  used by many elements of HTML, and querySelector / querySelectorAll  Use CSS selector to find static or first elements. 
# How do you create and insert a new element into the DOM?
To create a div element, i use dom as: let box = document.createElement("div"); 
To add Text or style, i use dom as: document.getElementById("idofelement").innerText = "Hello"; variableName.style.background = "red";
To insert a page into new one i can use appendChild to its parent div, like: document.body.appendChild(box);  

# What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById is the way to get an only element using an ID as ID can used in only one element, getElementsByClassName can find many elment using Class as Class can  used by many elements of HTML, and querySelector / querySelectorAll  Use CSS selector to find static or first elements. 
# How do you create and insert a new element into the DOM?
To create a div element, i use dom as: let box = document.createElement("div"); 
To add Text or style, i use dom as: document.getElementById("idofelement").innerText = "Hello"; variableName.style.background = "red";
To insert a page into new one i can use appendChild to its parent div, like: document.body.appendChild(box);  
# What is Event Bubbling and how does it work?
When i click on a child element into parent one, event goes up step by step from parent to grandparent, then goes to body and finally to the document, and its how the Event bubling works.
# What is Event Delegation in JavaScript? Why is it useful?
Event Delegation means using to put one event on parent and use bubbling to catch which child was clicked instead of putting event on every child. Parent listens, then check event. target to know which child fired.
# What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() block the browser’s built-in behavior and the stopPropagation() block the event from moving up to parents.

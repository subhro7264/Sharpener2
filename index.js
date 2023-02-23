
/**----------Now go head and add HEllo word before Item Lister---------- */
var newDiv=document.createElement("div");

//ADD CLASS
newDiv.className= "hello";

// ADD ID
newDiv.id="hello2";

// ADD ATTRIBUTE

newDiv.setAttribute("title", "helloDiv")

//CREATE TEXT NODE

var newDivText=document.createTextNode("HEllo");

// Add text to div
newDiv.appendChild(newDivText);

var con=document.querySelector("header .container");
var h1= document.querySelector("header h1");

console.log(newDiv);

con.insertBefore(newDiv,h1);



// Now go head and add HEllo word before Item 1 


var parentNode=document.querySelector("#items");
newDiv.className= "hello";

parentNode.innerHTML="<li>HEllo</li>"+parentNode.innerHTML;

// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
//Create a variable for every color
let paletteColor = document.querySelectorAll(".color");

// Create a variable to grab the current color 
let currentColor = document.querySelector("#current-color");

//Used the forEach method to add an event listener to muliple elements
paletteColor.forEach((palette) =>{
 palette.addEventListener("click",()=> {
   // setting the current color to equal the palette color 
 currentColor.style.background = palette.style.background})

});
//Created a variable to select all cells 
let cellblocks = document.querySelectorAll(".cell");
// Created another forEach to add an event listener to multiple elemts 
cellblocks.forEach((onecell)=>{
onecell.addEventListener("click", ()=>{
  onecell.style.background = currentColor.style.background;
})
})

// I still do not understand but I googled foo and used https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/
// As the main reference. 

// Shoutout to debora for giving me her study method ... I will be writing more on my code. 

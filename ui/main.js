console.log('Loaded!');

// Change the Text of the main-text in Div
var element = document.getElementById("main-text");
element.innerHTML = "New Value";

// Move the Image
var img = document.getElementById("madi");
img.onClick = function(){
  img.style.marginLeft = "100px";  
};
// * EVENT EXERCISES

function handleMouseOver() {
    document.getElementById("paragraph").style.color = "Red";
}

// ! The function above is an event handler that changes the color of text when its hovered over.

/**
 * Create an event handler to change the font color to white whenever someone 
 * mouses over the text.
 */
function handleMouseLeave() {
    document.getElementById("paragraph").style.color = "black";
}

/**
 * Create an event handler called handleClick() that changes the screen's  
 * background color when clicked. You may change the background color to a color
 * of your choice.
 * 
 * You can do this by changing the value of document.body.style.backgroundColor.
 */
function handleClick() {
  document.body.style.backgroundColor = 'purple';
}


function setRandomBackgroundColor () {
  let randomRGB;

  // RGBs are made up of three color values between 0 and 255
  let red = Math.floor(Math.random() * 255);  // Random Red
  let green = Math.floor(Math.random() * 255);  // Random Green
  let blue = Math.floor(Math.random() * 255); // Random Blue

  randomRGB = `rgb(${red}, ${green}, ${blue})`;

  document.body.style.backgroundColor = randomRGB;
  // return randomRGB;
}
  
// ! Don't Forget: Add your functions to the event attribute in the HTML doc!

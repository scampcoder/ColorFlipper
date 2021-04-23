//create array of colors to access
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
//grab button element
const btn = document.getElementById("btn");
//grab color class
const color = document.querySelector(".color");

//create event listener to run on click of button
btn.addEventListener("click", function () {
    //get randNum for array index
    const randomNumber = getRandomNumber();

    //change background color to color at random index
    document.body.style.backgroundColor = colors[randomNumber];
    //list the selected color for user
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
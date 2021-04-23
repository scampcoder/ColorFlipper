//create array of all possible hex num/letters
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//grab button
const btn = document.getElementById("btn");
//grab color class
const color = document.querySelector(".color");

//create function to run on button click
btn.addEventListener("click", function () {
  //hold spot for hex code with start hash
  let hexColor = "#";
  //run for loop to get six random values from the hex array
  for (let i = 0; i < 6; i++) {
      //the value of hexColor is equal to itself plus another (random) num from the array
    hexColor += hex[getRandomNumber()];
  }
  //show the num/letter value of the hex color
  color.textContent = hexColor;
  //make page the color of our hexColor
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
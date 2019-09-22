var chrs = [
  { name: "Optimus Prime", class: "leader", afl: "autobot", vehicle: "truck" },
  { name: "Megatron", class: "leader", afl: "decepticon", vehicle: "tank" },
  { name: "Bumblebee", class: "scout", afl: "autobot", vehicle: "car" },
  { name: "Starscream", class: "scout", afl: "decepticon", vehicle: "plane" },
  { name: "Ironhide", class: "soldier", afl: "autobot", vehicle: "truck" },
  { name: "Brawl", class: "soldier", afl: "decepticon", vehicle: "tank" }
];

//var createDiv = document.createElement("div");
//createDiv.setAttribute("id", "wrapper");
var createDiv = document.createElement("div");
createDiv.id = "wrapper";
var body = document.querySelector("body");
body.appendChild(createDiv);
var wrapDiv = document.body.querySelector("#wrapper");


// do not write any elements into your HTML file
for (var i = 0; i < chrs.length; i++) {
  var chrsEle = document.createElement("div"); // where all the info will go
  
  //specific elements
  var nameEle = document.createElement("p");
  var classEle = document.createElement("p");
  var aflEle = document.createElement("p");
  var vehicleEle = document.createElement("p");
  var logoEle = document.createElement("img");

  chrsEle.classList.add("character");

  //name gets proper name
  nameEle.innerHTML = "Name:" + chrs[i].name;

  //class needs capitalization
  classEle.innerHTML = "Class:" + chrs[i].class.toUpperCase();

  //color code affiliation
  if (chrs[i].afl == "autobot") {
    // if it is autobots
    chrsEle.classList.add("autobot");
    logoEle.src =
      "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
  } else {
   chrsEle.classList.add("decepticon");
    logoEle.src =
      " https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";
  }
  aflEle.innerHTML = "Affiliation: " + chrs[i].afl;

  //color code vehicles
  if (chrs[i].vehicle == "truck") {
    vehicleEle.style.color = "blue";
  } else if (chrs[i].vehicle == "tank") {
    vehicleEle.style.color = "green";
  } else if (chrs[i].vehicle == "plane") {
    vehicleEle.style.color = "white";
  } else {
    vehicleEle.style.color = "gold";
  }
  vehicleEle.innerHTML = "Vehicle: " + chrs[i].vehicle;

  logoEle.classList.add("img");

  chrsEle.appendChild(logoEle);
  chrsEle.appendChild(nameEle);
  chrsEle.appendChild(classEle);
  chrsEle.appendChild(aflEle);
  chrsEle.appendChild(vehicleEle);
  wrapDiv.appendChild(chrsEle);
}
// loop through the above array to append a div using .append() into the body tag

// the appended div should always have the ".character" class

// display the characters name, class, and vehicle in the div

// Information should be displayed as "Name: Optimus Prime", with the next information on a different line

// if the character being looped through has an afl of autobot/decepticon, give them either a class of "autobot", or "decepitcon"

// in the top right, based on the top information, insert an img elemnt for either the autobot or decepticon

// link for autobot image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png

// link for decepticon image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png

// in the characters' "class" data, all of those values' letters should be capitalized when displayed in the div (so 'leader' should become 'LEADER')

// in the characters' "vehicle" data, change the color of that value in the div based on its value
// truck=blue
// tank=green
// card=gold
// plane=white
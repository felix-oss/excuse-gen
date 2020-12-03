/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// window.onload = function() {
//   console.log("Hello Rigo from the console!");
// };

const excuseGenerator = () => {
  let who = [
    "The dog",
    "My grandma",
    "His turtle",
    "My bird",
    " his step sister"
  ];
  let action = ["ate", "peed", "crushed", "broke", "annihilated"];
  let what = ["my homework", "the keys", "the car", "the house", "my ears"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  var person = who[Math.floor(Math.random() * (who.length - 1))];
  var bam = action[Math.floor(Math.random() * (who.length - 1))];
  var que = what[Math.floor(Math.random() * (who.length - 1))];
  var time = when[Math.floor(Math.random() * (who.length - 1))];
  return person + " " + bam + " " + que + " " + time;
};
document.querySelector(
  "#the-excuse"
).innerHTML = `<h1> ${excuseGenerator()} </h1>`;

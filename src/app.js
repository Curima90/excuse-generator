/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function frase() {
    let who = ["the dog", "my granma", "his turtle", "my bird"];
    let what = ["eat", "pissed", "crushed", "broked"];
    let when = [
      "before the class",
      "right in time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];

    let posicion = Math.floor(Math.random() * 4);

    return who[posicion] + " " + what[posicion] + " " + when[posicion];
  }

  document.querySelector("#excuse").innerHTML = "Mi excusa:  " + frase();

  console.log("Hello Rigo from the console!");
};

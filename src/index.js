// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
  handlerMouseLeave: theMouseIsGone,
  handlerMouseEnter: theMouseIsHere,
  handlerWindowResized: youJustResized,
  handlerMouseRightClick: thatWasARighcClick
};
const title = document.querySelector("h2");
document.addEventListener(
  "contextmenu",
  superEventHandler["handlerMouseRightClick"]
);
document
  .querySelector("h2")
  .addEventListener("mouseenter", superEventHandler["handlerMouseEnter"]);
document
  .querySelector("h2")
  .addEventListener("mouseleave", superEventHandler["handlerMouseLeave"]);
window.addEventListener("resize", superEventHandler["handlerWindowResized"]);

function theMouseIsHere() {
  title.innerText = "The Mouse is Here!";
  title.style.color = colors[0];
}

function theMouseIsGone() {
  title.innerText = "The Mouse is Gone!";
  title.style.color = colors[1];
}

function youJustResized() {
  title.innerText = "You just resized!";
  title.style.color = colors[2];
}

function thatWasARighcClick() {
  title.innerText = "That was a Right Click!";
  title.style.color = colors[3];
}

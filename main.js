const text = document.getElementById("text");
document.getElementById("bold-btn").addEventListener("click", function () {
  if (text.style.fontWeight === "bold") {
    text.style.fontWeight = "normal";
  } else {
    text.style.fontWeight = "bold";
  }
});
document.getElementById("italic-btn").addEventListener("click", function () {
  if (text.style.fontStyle === "italic") {
    text.style.fontStyle = "normal";
  } else {
    text.style.fontStyle = "italic";
  }
});
document.getElementById("underline-btn").addEventListener("click", function () {
  if (text.style.textDecoration === "underline") {
    text.style.textDecoration = "none";
  } else {
    text.style.textDecoration = "underline";
  }
});
document.getElementById("right-btn").addEventListener("click", function () {
  text.style.textAlign = "right";
});
document.getElementById("center-btn").addEventListener("click", function () {
  text.style.textAlign = "center";
});
document.getElementById("left-btn").addEventListener("click", function () {
  text.style.textAlign = "left";
});
document.getElementById("justify-btn").addEventListener("click", function () {
  text.style.textAlign = "justify";
});
document.getElementById("case").addEventListener("click", function () {
  if (text.style.textTransform === "uppercase") {
    text.style.textTransform = "lowercase";
  } else {
    text.style.textTransform = "uppercase";
  }
});
document.getElementById("font-size").addEventListener("input", function () {
  const fontNumber = document.getElementById("font-size");
  const value = fontNumber.value;
  text.style.fontSize = value + "px";
});
document.getElementById("text-color").addEventListener("input", function () {
  const textColor = document.getElementById("text-color");
  const colorValue = textColor.value;
  text.style.color = colorValue;
});

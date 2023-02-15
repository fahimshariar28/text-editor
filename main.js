// Text Field Variable Declared
const text = document.getElementById("text");

// Bold Button Function
document.getElementById("bold-btn").addEventListener("click", function () {
  if (text.style.fontWeight === "bold") {
    text.style.fontWeight = "normal";
  } else {
    text.style.fontWeight = "bold";
  }
});

// Italic Button Function
document.getElementById("italic-btn").addEventListener("click", function () {
  if (text.style.fontStyle === "italic") {
    text.style.fontStyle = "normal";
  } else {
    text.style.fontStyle = "italic";
  }
});

// Underline Button Function
document.getElementById("underline-btn").addEventListener("click", function () {
  if (text.style.textDecoration === "underline") {
    text.style.textDecoration = "none";
  } else {
    text.style.textDecoration = "underline";
  }
});

// Align Right Button Function
document.getElementById("right-btn").addEventListener("click", function () {
  text.style.textAlign = "right";
});

// Align Center Button Function
document.getElementById("center-btn").addEventListener("click", function () {
  text.style.textAlign = "center";
});

// Align Left Button Function
document.getElementById("left-btn").addEventListener("click", function () {
  text.style.textAlign = "left";
});

// Align Justify Button Function
document.getElementById("justify-btn").addEventListener("click", function () {
  text.style.textAlign = "justify";
});

// Uppercase & Lowercase Button Function
document.getElementById("case").addEventListener("click", function () {
  if (text.style.textTransform === "uppercase") {
    text.style.textTransform = "lowercase";
  } else {
    text.style.textTransform = "uppercase";
  }
});

// Font Size Button Function
document.getElementById("font-size").addEventListener("input", function () {
  const fontNumber = document.getElementById("font-size");
  const fontValue = fontNumber.value;
  text.style.fontSize = fontValue + "px";
});

// Text Color Button Function
document.getElementById("text-color").addEventListener("input", function () {
  const textColor = document.getElementById("text-color");
  const colorValue = textColor.value;
  text.style.color = colorValue;
});

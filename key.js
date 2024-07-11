let bx1 = document.querySelector(".box1");
let bx2 = document.querySelector(".box2");
let bx3 = document.querySelector(".box3");

window.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    bx1.innerText = `Space kottinav ra badaakowwww...`;
    bx1.style.color = "#d4a373";
    // console.log(bx1.innerText);
  } else {
    bx1.innerText = `${e.key}`;
  }
  bx2.innerText = `${e.keyCode}`;
  bx3.innerText = `${e.code}`;

  console.log(e);
});

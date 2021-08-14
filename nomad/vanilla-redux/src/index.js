const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;
number.innerText = count;

const updateText = () => {
  number.innerText = count;
};

const handleAdd = () => {
  count = count + 1;
  updateText();
  console.log(plus);
};
const handleMinus = () => {
  if (count === 0) return;
  count = count - 1;
  updateText();
};

plus.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

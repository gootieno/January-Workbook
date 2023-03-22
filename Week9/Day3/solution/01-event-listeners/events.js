// Your code here
window.addEventListener("DOMContentLoaded", () => {
  // alert('DOM Has Loaded!')

  const redInput = document.getElementById("red-input");

  const changeRed = (event) => {
    console.log("event ", event.target.value);

    if (event.target.value === "red") {
      redInput.style.backgroundColor = "red";
    } else {
      redInput.style.backgroundColor = "initial";
    }
  };
  //   console.log('red input ', redInput)
  redInput.addEventListener("input", changeRed);

  const addItem = document.getElementById("add-item");
  const listAdd = document.getElementById("list-add");

  const addListItem = () => {
    console.log("list add after click", listAdd.value);

    const li = document.createElement("li");
    li.innerText = listAdd.value;

    const ul = document.querySelector("ul");
    ul.appendChild(li);

    listAdd.value = "";
  };

  console.log("list add before click", listAdd.value);
  addItem.addEventListener("click", addListItem);

  // select color input
  const colorSelect = document.getElementById("color-select");
  const changeColor = () => {
    // select color input section
    const colorInputSection = document.getElementById("section-3");
    colorInputSection.style.background = colorSelect.value;
  };
  // listen for change event
  colorSelect.addEventListener("change", changeColor);

  // manipulate color input section

  const removeButton = document.getElementById("remove-listeners");
  removeButton.addEventListener("click", () => {
    redInput.removeEventListener("input", changeRed);
    addItem.removeEventListener("click", addListItem);
    colorSelect.removeEventListener("change", changeColor);
  });
});

// Your code here
window.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add");
  //   const form = document.querySelector("form");
  addButton.addEventListener("click", (event) => {
    event.preventDefault();

    const name = document.getElementById("name");
    const type = document.getElementById("type");

    console.log("name and type ", name, type);

    const li = document.createElement("li");
    li.innerText = name.value;
    li.dataset.type = type.value;
    // li.setAttribute("data-type", type.value);

    console.log("list item ", li);

    const shoppingListContainer = document.getElementById("shopping-list");
    shoppingListContainer.appendChild(li);

    name.value = "";
  });
});

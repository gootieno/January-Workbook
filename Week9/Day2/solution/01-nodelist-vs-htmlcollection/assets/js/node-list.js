export default () => {
  const bodyChildNodes = document.body.childNodes; // NodeList [text, div, text]
  console.log("body Child Nodes ", bodyChildNodes);

  const div = bodyChildNodes[1]; // NOT bodyChildNodes[0]
  console.log("div", div);
  const divChildNodes = div.childNodes; // NodeList [text, span, text]

  console.log("div child nodes ", divChildNodes);
  const helloWorld = divChildNodes[0].textContent; // Hello World!\n


  const span = divChildNodes[1]; // <span>Yes!</span>
  // debugger
};

const parent = document.getElementById("parent");
let childNodes = parent.childNodes;
console.log(childNodes.length); // let's assume "2"
parent.appendChild(document.createElement("div"));
console.log(childNodes.length); // outputs "3"


// using Array.from()
// const parent = document.getElementById("parent");
// let childNodes = Array.from(parent.childNodes);
// console.log(childNodes.length); // let's assume "2"
// parent.appendChild(document.createElement("div"));
// console.log(childNodes.length); // outputs "2"

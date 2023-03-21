export default () => {
  const bodyChildElements = document.body.children; // HTMLCollection [div]
  console.log("body child elements ", bodyChildElements);

  const div = bodyChildElements[0];

  const divChildElements = div.children; // HTMLCollection [span]
  console.log("div child elements ", divChildElements);
  const helloWorld = div.innerText; // Hello World! Yes!    <-- NOT Hello World!

  console.log("div innerText", helloWorld);

  const span = divChildElements[0]; // <span>Yes!</span>
  console.log("span ", span);
  // debugger
};

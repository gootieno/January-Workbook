const select = () => {
  /* Write queries for each of the following */

  // get p tag under section 1
  //   const exampleSelection = document.querySelector("#one > p");
  //   console.log(exampleSelection)
  /* Section 1 */
  // 1. Get all seeded fruit elements
  // Your code here
  //   const seeded = document.getElementsByClassName("seed");
  const seeded = document.querySelectorAll(".seed");
  console.log("seeded ", seeded);

  // 2. Get all seedless fruit elements
  // Your code here
  const seedless = document.getElementsByClassName("seedless");
  console.log("seedless ", seedless);

  // 3. Get first seedless fruit element
  // Your code here
  const firstSeedless = document.querySelector(".seedless");
  console.log("first seedless ", firstSeedless);

  firstSeedless.style.color = "red";
  /* Section 2 */
  // 4. Get inner span with text "you"
  // Your code here
  const span = document.getElementById("wrapper").children[0].children[0];
  console.log("you span ", span);
  // 5. Get all children of element "wrapper"
  // Your code here
  const children = document.getElementById("wrapper").children;
  console.log("wrapper children ", children);
  // 6. Get all odd number list items in the list
  // Your code here
  const e6 = document.querySelectorAll("#two > ol > li.odd");
  console.log("odd nums ", e6);
  // 7. Get all even number list items in the list
  // Your code here
  const evenNumbersArray = Array.from(
    document.querySelector("#two").querySelectorAll("li")
  ).filter((node, idx) => idx % 2 !== 0);

  const evenNums = document.querySelectorAll("ol > li:not(.odd)");
  console.log("even nums ", evenNums);
  console.log("even numbers array ", evenNumbersArray);
  /* Section 3 */
  // 8. Get all tech companies without a class name
  // Your code here
  const noClassTech = document.querySelector("#three > p > a");
  console.log("no class tech ", noClassTech);
  // 9. Get "Amazon" list element
  // Your code here
  const li = document.getElementsByTagName("a");

  for (const el of li) {
    // console.log("el ", el.innerText);
    if (el.innerText === "Amazon") console.log("amazon ", el);
  }

  const amazonElement = document.querySelector("a.shopping");
  console.log("amazon 2 ", amazonElement);
  // 10. Get all unicorn list elements (not the image element)
  // Your code here
  const display9 = document.getElementsByTagName("img");
  const array = [];

  for (let i = 0; i < display9.length; i++) {
    array.push(display9[i].parentElement);
  }

  const unicorn = document.querySelectorAll("#three > ul > li");
  console.log("unicorn ", unicorn);
  console.log("unicorn list element ", array);
  //   const section = document.getElementsByTagName("section");

  //   const sectionArr = Array.from(section);
  //   console.log("section ", sectionArr);

  //   for (let i = 0; i < sectionArr.length; i++) {
  //     console.log(section);
  //     const div = document.createElement("div");
  //     section[0].appendChild(div);
  //     if (i === 50) return;
  //   }
};

window.onload = select;

// window.addEventListener("DOMContentLoaded", () => {
//   const submitButton = document.getElementById("submit-button");
//   submitButton.addEventListener("submit", async (e) => {
//     e.preventDefault();
//     const inputValue = document.getElementById("form-input").value;

//     const response = await fetch("/comments", {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: new URLSearchParams({ comment: inputValue }),
//     });

//     console.log(response);
//   });
// });

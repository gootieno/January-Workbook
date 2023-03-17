// window.addEventListener("DOMContentLoaded", () => {
//   const submitButton = document.getElementById("submit-button");
//   submitButton.addEventListener("click", async () => {
//     const inputValue = document.getElementById("form-input").value;

//     const response = await fetch("/comments", {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: new URLSearchParams({ comment: inputValue }),
//     });

//     console.log(response);
//     window.location.reload();
//   });
// });

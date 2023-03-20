window.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submit-button");
  submitButton.addEventListener("click", async () => {
    const inputValue = document.getElementById("form-input").value;

    const response = await fetch("/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment: inputValue }),
    });

    if (response.ok) {
      const data = await response.json();

      const ul = document.getElementById("comments-list-container");

      const li = document.createElement("li");
      li.innerText = data;
      ul.append(li);
    }
  });
});

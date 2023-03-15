/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

const getAllProducts = async () => {
  //   const response = await fetch("/products");

  //   console.log("response ", response);
  //   console.log("status ", response.status);
  //   console.log("response ok? ", response.ok);
  //   console.log("content type ", response.headers.get("Content-Type"));

  //     const data = await response.text();
  // //   console.log("response text ", await response.text());
  //     console.log("response text from variable ", data);

  fetch("/products")
    .then((response) => {
      console.log("response ", response);
      console.log("status ", response.status);
      console.log("response ok? ", response.ok);
      console.log("content type ", response.headers.get("Content-Type"));

      return response.text();
    })
    .then((data) => console.log("response data", data));
};

getAllProducts();

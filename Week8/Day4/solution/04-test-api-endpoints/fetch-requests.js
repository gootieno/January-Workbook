/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============================== Phase 1 ================================ */
/*
  Make a request with fetch request to GET /posts and print the response
  components to the console.
*/

//  .then chaining
fetch('/posts').then(res => {
  console.log(res.status)
  console.log(res.headers.get('Content-Type'))
  return res.json()
}).then(res => console.log(res));
// Your code here

// async function
const jsonBody = async () => {
  const res = await fetch('/posts');
  console.log(res.status);
  console.log(res.headers.get('content-type'));
  const resJSON = await res.json();
  console.log(resJSON);
}

// IIFE async function
(async function () {
  const res = await fetch('/posts');
  console.log(res.status);
  console.log(res.headers.get('content-type'));
  const resJSON = await res.json();
  console.log(resJSON);

})();

// using .then AND async/await
fetch('/posts')
  .then(async res => {
    console.log(res.status); // 200
    console.log(res.headers.get('content-type'));
    const deserializedBody = await res.json();
    console.log(deserializedBody);
  });

/* =============================== Phase 2 ================================ */
/*
  Make a request with fetch request to POST /posts and print the response
  components to the console.
*/
fetch('/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ "message": "New Post!" })
})
  .then(res => {
    console.log(res.status);
    console.log(res.headers.get('content-type'));
    return res.json();
  })
  .then(resJSON => console.log(resJSON));


(async function () {
  const res = await fetch('/posts', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: "Hola!"
    })
  });
  console.log(res.status);
  console.log(res.headers.get('content-type'));
  const serializedBody = await res.text();
  console.log(JSON.parse(serializedBody));
})();

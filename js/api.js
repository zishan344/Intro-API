function loadData() {
  fetch("https://jsonplaceholder.tyicode.com/todos/1")
    .then((Response) => Response.json())
    .then((data) => console.log(data));
}

function loadUser() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUser(data));
}
function loadPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function displayUser(data) {
  const ul = document.getElementById("users");
  for (const user of data) {
    const li = document.createElement("li");
    // li.innerText = user.name + " " + user.email;
    li.innerText = `name: ${user.name}, email: ${user.email}`;
    ul.appendChild(li);
  }
}

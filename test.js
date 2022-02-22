// function loadData() {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }

// function loadUser() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => displayUser(data));
// }

// function loadPost() {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }
// function displayUser(data) {
//   const ul = document.getElementById("users");
//   for (const user of data) {
//     const li = document.createElement("li");
//     li.innerText = `name: ${user.name}  email: ${user.email}`;
//     ul.appendChild(li);
//     // console.log(user.);
//   }
//   //   console.log(data);
// }

const stuInfo = JSON.stringify({ name: "James", roll: 3 });
console.log(stuInfo.name);

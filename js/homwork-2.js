fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  .then((data) => comment(data));

function comment(data) {
  //   console.log(data);
  const comments = document.getElementById("comments");
  for (const user of data) {
    const div = document.createElement("div");
    div.classList.add("comment-child");
    div.innerHTML = `
    <h1>name: ${user.name}</h1>
    <h2>user Id: ${user.id}</h2>
    <h3>user Emai: ${user.email}</h3>
    <p> <b> comments:<b/> ${user.body}
    `;
    comments.appendChild(div);
    // console.log(user);
  }
}

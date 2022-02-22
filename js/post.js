function loadPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => posts(data));
}
loadPost();

function posts(post) {
  console.log(post);
  const section = document.getElementById("poosts");
  //   console.log(section);
  for (const user of post) {
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `
      <h2>${user.title}</h2>
      <p> ${user.body}</p>
      `;
    section.appendChild(div);
    console.log(user);
  }
}

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())
  .then((data) => album(data));

function album(poots) {
  console.log(poots);
  const PhotoAlbum = document.getElementById("album");
  for (const user of poots) {
    const div = document.createElement("div");
    div.innerHTML = `
  <img src="${user.url}" >

      `;
    PhotoAlbum.appendChild(div);

    // console.log(user.url);
  }
}
album();

const init = () => {
  const inputForm = document.querySelector("form");
  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("input#searchByID");

    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(response => response.json())
    .then(data => {
      const title = document.querySelector("section#movieDetails h4");
      const summary = document.querySelector("section#movieDetails p");

      title.textContent = data.title;
      summary.textContent = data.summary;
    })
    .catch(error => {
        console.log("caught the error",error);
        const errorContainer = document.getElementById("error-container");
        errorContainer.innerHTML = `<p>${error}</p>`;
        errorContainer.style.display = "block";
        errorContainer.style.height = "100px";
        errorContainer.style.width = "100px";
        // this does not work, don't know why...
    });
  })
}

document.addEventListener('DOMContentLoaded', init);
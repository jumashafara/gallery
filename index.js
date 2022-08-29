imageContainer = document.querySelector(".image-container");

image_url = "http://localhost:5000/images";

const displayImages = async () => {
  const res = await fetch(`${image_url}-list`);

  const data = await res.json();

  console.log(data.images[0]);

  let imageCard = "";

  data.images.forEach((image) => {
    imageCard += `
    <a href = "${image_url}/${image}">
        <div class = "image slide-item">
            <img src = "${image_url}/${image}" class = "slide-item"/>
        </div>
    </a>
    `;
  });

  if (imageCard === "") {
    container.innerHTML = "<div>No images to display</div>";
  } else {
    imageContainer.innerHTML = imageCard;
  }
};

window.addEventListener("DOMContentLoaded", () => displayImages());

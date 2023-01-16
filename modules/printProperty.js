export const printCardProperty =  (container, listVideo) => {
    container.innerHTML = '';
    listVideo.forEach(property => {
        const article = document.createElement("article");
        article.setAttribute("class", "targets");
        article.innerHTML = `<figure class="container__cards">
        <img src="${property.img}" alt="" class="thubmnail">
        <div class="type">${property.type}</div>
        <div class="status">${property.status}</div>
        <div class="favoritos">X</div>
        <div class="price">${property.price}</div>
      
      <div class="infoTargets">
        <div class="location__container">
          <div class="location">${property.location}</div>
        </div>
        <div class="direction__container">
          <div class="direction">${property.direction}</div>
        </div>
        <div class="container__manager">
          <div class="name__manager">
            <p class="name"><img src="./material/agent-1-3-60x60.png">${property.owner}</p>
          </div>
          <div class="container__date">
            <div class="date__manager">${property.date}</div>
          </div>
        </div>
        <div class="container__others">
          <div class="area__container">
            <div class="area"><img src="./material/Area Icon.png"> ${property.area}</div>
          </div>
          <div class="info__property">
            <div class="parking"><img src="./material/Garage Icon.png"> ${property.parking}</div>
            <div class="toilets"><img src="./material/Bathroom Icon.png"> ${property.toilets}</div>
            <div class="bedroom"><img src="./material/Bedroom Icon.png"> ${property.bedroom}</div>
          </div>
        </div>
      </div>
    </figure>`;

    container.appendChild(article);
    });
}
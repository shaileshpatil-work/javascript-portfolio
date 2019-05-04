import Unsplash, { toJson } from "unsplash-js";

let counter = 1;
const unsplash = new Unsplash({
    applicationId: "0285e8601d9fc2ec7cf5db9c131cbba22abcd7b6b35d9aeab776a17086a23165",
    secret: "32bdad1355881079ab131836e119ab48db6dc418ef1e545b87865278efa11c23"
});

unsplash.photos.listPhotos(counter, 10, "latest")
    .then(toJson)
    .then(json => {
        list(json)
});

const list = (json) => {
    json.map((image) => {
        const listMenu = `<li><image src="${image.urls.small}"/></li>`;
        document.getElementById("imageList").insertAdjacentHTML("beforeend", listMenu);
    })
}

window.onscroll = function (ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
       counter++;
       console.log(counter);
        unsplash.photos.listPhotos(counter, 10, "latest")
            .then(toJson)
            .then(json => {
                list(json)
            });
    }
};
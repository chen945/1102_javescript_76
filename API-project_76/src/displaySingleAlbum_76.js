import { hideLoading } from "./toggleLoading_76.js";
import get from "./getElement.js";

const displaySingleAlbum = async ({ albums }) => {
    console.log("display drink", albums[0]);
    hideLoading();
    const album = albums[0];
    const {
        strAlbumThumb: image,
        strAlbum: name,
        strDescriptionEN: desc,
    } = album;

    const list = [
        album.strIngredient1,
        album.strIngredient2,
        album.strIngredient3,
        album.strIngredient4,
        album.strIngredient5,
    ];

    const img = get(".album-img");
    img.src = image;
    const albumName = get(".album-name");
    albumName.textContent = name;
    const description = get(".album-desc");
    description.textContent = desc;
    const descriptionEN = get(".album-descriptionEN");
    descriptionEN.innerHTML = list
        .map((item) => {
            if (!item) return;
            return `<li><i class ="far fa-check-square"></i>${item}</li>`;
        })
        .join("");
};

export default displaySingleAlbum;

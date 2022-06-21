import get from "./getElement.js";
import { hideLoading } from "./toggleLoading_76.js";

const displayAlbums = async ({ albums }) => {
    console.log("albums", albums);
    const title = get(".title");
    const section = get(".section-center");
    console.log("title", title);
    console.log("section", section);
    if (!albums) {
        hideLoading();
        title.textContent = "Sorry, no albums matched your search";
        section.innerHTML = null;
        return;
    }
    const newAlbums = albums
        .map((album) => {
            const { idAlbum: id, strAlbum: name, strAlbumThumb: image } = album;
            return `
                <article class="cocktail" data-id="${id}">
                    <img src="${image}" alt="cocktail" />
                    <h3>${name}</h3>
                </article>
            </a>
        `;
        })
        .join("");
    hideLoading();
    title.textContent = "";
    section.innerHTML = newalbums;
    return section;
};

export default displayAlbums;

import fetchAlbums from "./src/fetchAlbums_76.js";
import displaySingleAlbum from "./src/displaySingleAlbum_76.js";

const singleAlbum = async () => {
    const id = localStorage.getItem("albums");
    console.log("album id", id);
    if (!id) {
        window.location.replace("index.html");
    } else {
        const album = await fetchAlbums(
            `https://theaudiodb.com/api/v1/json/2/album.php?m=${id}`
        );
        console.log("single album", album);
        displaySingleAlbum(album);
    }
};
window.addEventListener("DOMContentLoaded", () => {
    singleAlbum();
});

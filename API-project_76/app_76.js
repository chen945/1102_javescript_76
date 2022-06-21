import { LOCAL_URL, hasNetwork, searchItems } from "./api/search/config_76.js";
import presentAlbums from "./src/presentAlbums_76.js";

console.log("config_76.js", { LOCAL_URL, hasNetwork, searchItems });

const URL = "https://theaudiodb.com/api/v1/json/2/album.php?m=2115888";

window.addEventListener("DOMContentLoaded", () => {
    if (hasNetwork) {
        presentAlbums(URL);
    } else {
        presentAlbums(LOCAL_URL);
    }
});

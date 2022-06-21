import { hasNetwork, LOCAL_URL, searchItems } from "../api/search/config_76.js";
import get from "./getElement.js";
import presentAlbums from "./presentAlbums_76.js";
const form = get(".search-form");
const input = get('[name="album"]');

const baseURL = "https://theaudiodb.com/api/v1/json/2/album.php?m=2115888";

form.addEventListener("keyup", (e) => {
    e.preventDefault();
    console.log("input", input.value);
    const value = input.value;
    if (!value) return;
    if (hasNetwork) {
        presentAlbums(`${baseURL}${value}`);
    } else {
        if (searchItems.find((item) => item === value)) {
            presentAlbums(`${LOCAL_URL}${value}.json`);
        }
    }
});

import { LOCAL_URL, hasNetwork } from "./api/search/config_76.js";

console.log("config_76.js", { LOCAL_URL, hasNetwork });

const URL = "https://theaudiodb.com/api/v1/json/2/album.php?m=2115888";

window.addEventListener("DOMContentLoaded", () => {
    if (hasNetwork) {
        presentDrinks(URL);
    } else {
        presentDrinks(LOCAL_URL);
    }
});

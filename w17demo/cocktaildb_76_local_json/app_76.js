import presentDrinks from "./src/presentDrinks_76.js";
import "./src/searchForm_76.js";
import { LOCAL_URL, searchItems, hasNetwork } from "./api/search/config_76.js";

console.log("config_76.js", { LOCAL_URL, searchItems, hasNetwork });

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=h";

window.addEventListener("DOMContentLoaded", () => {
    if (hasNetwork) {
        presentDrinks(URL);
    } else {
        presentDrinks(LOCAL_URL);
    }
});

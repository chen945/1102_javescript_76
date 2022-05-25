import presentDrinks from "./src/presentDrinks_76.js";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=doris";

window.addEventListener("DOMContentLoaded", () => {
    presentDrinks(URL);
});

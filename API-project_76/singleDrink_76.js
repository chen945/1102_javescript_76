import fetchDrinks from "./src/fetchAlbums_76.js";
import displaySingleDrink from "./src/displaySingleAlbum_76.js";

const singleDrink = async () => {
    const id = localStorage.getItem("drink");
    console.log("local id", id);
    if (!id) {
        window.location.replace("index.html");
    } else {
        const drink = await fetchDrinks(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        console.log("single drink", drink);
        displaySingleDrink(drink);
    }
};
window.addEventListener("DOMContentLoaded", () => {
    singleDrink();
});

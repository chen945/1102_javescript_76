import fetchAlbums from "./fetchAlbums_76.js";
import setAlbum from "./setAlbum_76.js";
import displayAlbums from "./displayAlbums_76.js";

const presentAlbums = async (url) => {
    //fetch drinks
    const data = await fetchAlbums(url);
    console.log("Albums data", data);
    const section = await displayAlbums(data);
    if (section) {
        setAlbum(section);
    }
};

export default presentAlbums;

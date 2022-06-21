const fetchAlbums_76 = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export default fetchAlbums_76;

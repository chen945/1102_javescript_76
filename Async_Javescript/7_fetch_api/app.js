const url = "./api/people2.json";

fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log("err", err));

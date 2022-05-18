//轉成JSON
//JSON.parse(xhr.responseText); 把字串處理成陣列
const url = "./api/people.json";
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    getData(url);
});

function getData(url) {
    const xhr = new XMLHttpRequest();
    console.log("xhr0", xhr);

    xhr.open("GET", url);
    xhr.onreadystatechange = function () {
        console.log("xhr", xhr);
        if (xhr.readyState === 4 && xhr.status === 200) {
            // console.log("done");
            const data = JSON.parse(xhr.responseText); //轉陣列
            console.log("data", data);

            //透過data.map產生新陣列並回傳
            //透過join串起來變成字串
            const displayData = data
                .map((item) => {
                    return `<p>${item.name}</p>`;
                })
                .join("");
            console.log("displayData", displayData);
            const element = document.createElement("div");
            element.innerHTML = displayData;
            document.body.appendChild(element);
        } else {
            console.log({
                status: xhr.status,
                text: xhr.statusText,
            });
        }
    };

    xhr.send("");
}

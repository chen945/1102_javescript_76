const url = "./api/dataset.json";
const btn = document.querySelector(".btn");
let data = [];

btn.addEventListener("click", () => {
    fetchDataSet(url);
});

const fetchDataSet = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("data", data);
        updateDOM(data);
    } catch (err) {
        console.log("error", err);
    }
};

const fetchDataAsync = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("data", data);
        displayItems(data);
    } catch (err) {
        console.log("error", err);
    }
};

function fetchData(url) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log("data", data);
            displayItems(data);
        })
        .catch((err) => console.log("error", err));
}

const displayItems = (items) => {
    const displayData = items
        .map((item) => {
            return `<p>${item.name}</p>`;
        })
        .join("");
    console.log("displayData", displayData);
    const element = document.createElement("div");
    element.innerHTML = displayData;
    document.body.appendChild(element);
};

function getData(url) {
    const xhr = new XMLHttpRequest();
    console.log("xhr0", xhr);

    xhr.open("GET", url);
    xhr.onreadystatechange = function () {
        console.log("xhr", xhr);
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            console.log("data", data);
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

const updateDOM = (providedData = data) => {
    let tempData = providedData.map((item) => {
        return `<div class="person"><strong>${item.name}</strong> ${formatMoney(
            item.money
        )}</div>`;
    });
    tempData = tempData.join("");
    //    console.log('tempData', tempData);
    main.innerHTML = `<h2><strong>Person</strong> Wealth</h2> ${tempData}`;
};

const addData = (obj) => {
    data.push(obj);
    // console.log('data', data);
    updateDOM();
};

function formatMoney(number) {
    return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

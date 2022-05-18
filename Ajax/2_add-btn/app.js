//設監聽button 控制click，點選btn顯示下列function資料
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    getData();
});

//建立一個function
function getData() {
    const xhr = new XMLHttpRequest();
    console.log("xhr0", xhr);

    xhr.open("GET", "./api/sample.txt");
    xhr.onreadystatechange = function () {
        console.log("xhr", xhr);
        if (xhr.readyState === 4 && xhr.status === 200) {
            // console.log("done");
            const text = document.createElement("p");
            text.textContent = xhr.responseText;
            document.body.appendChild(text);
        } else {
            console.log({
                status: xhr.status,
                text: xhr.statusText,
            });
        }
    };

    xhr.send("");
}

console.log("hello");

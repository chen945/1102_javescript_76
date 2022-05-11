const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");
const btn = document.querySelector(".btn");
changeColor();

function changeColor() {
    //call-back hell 非同步
    setTimeout(() => {
        heading1.style.color = "red";
        console.log("heading1");
        setTimeout(() => {
            heading2.style.color = "green";
            console.log("heading2");
            setTimeout(() => {
                heading3.style.color = "blue";
                console.log("heading3");
            }, 1000);
        }, 2000);
    }, 3000);
}

btn.addEventListener("click", changeColor);

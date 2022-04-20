const links = document.querySelectorAll("#heading a");
console.log("links", links); //確認是否有抓到link

const heading = document.querySelector("#heading");

const tku60Text = document.querySelector("#main ul"); //id要用#
console.log("tku60Text", tku60Text);

const iframeContainer = document.querySelector(".iframe-container");

const showImages = document.querySelector(".show-images"); //class要用.

const tkuImages = document.querySelector(".tku-images");
console.log("tkuImages", tkuImages);

//變更link-background color
const changeColor = () => {
    heading.style.backgroundColor = "#9AADBF";
    main.style.backgroundColor = "#ACD6FF";
    footer.style.backgroundColor = "#FFB5B5";
};

//點link2時 會顯現出下列的圖片
const showAllImages = () => {
    showImages.innerHTML = `
    <img src="./images/TKU1.png" width="16%" alt=""/>
    <img src="./images/TKU2.png" width="16%" alt=""/>
    <img src="./images/TKU3.png" width="16%" alt=""/>
    <img src="./images/TKU4.png" width="16%" alt=""/>
    <img src="./images/TKU5.png" width="16%" alt=""/>
    `;

    tkuImages.classList.toggle("invisible"); //設定張開關掉
};

//點link3 會出現旁邊的按鈕
const addTku60Text = () => {
    //innerHTML換掉程式碼用的
    tku60Text.innerHTML = `
    <li><a onclick="changeVideo(1)">淡江大戲 1</a></li>
    <li><a onclick="changeVideo(2)">淡江大戲 2</a></li>
    <li><a onclick="changeVideo(3)">淡江大戲 3</a></li>
    <li><a onclick="changeVideo(4)">淡江大戲 4</a></li>
    <li><a onclick="changeVideo(5)">淡江大戲 5</a></li>`;

    console.log("Tku60Link innerHtml", Tku60Text);
};

//點link 3 切換video
const changeVideo = (index) => {
    switch (index) {
        case 1:
            iframeContainer.innerHTML = `<iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/RechrtUxfQc"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>`;
            break;

        case 2:
            iframeContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/MRWX49Furew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            break;

        case 3:
            iframeContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/METhdbL_iMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            break;

        case 4:
            iframeContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/ZyDbq-lEKTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            break;

        case 5:
            iframeContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/NlsrJbVvjaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            break;
    }
};

links[0].addEventListener("click", changeColor); //監聽，換顏色
links[1].addEventListener("click", showAllImages);
links[2].addEventListener("click", addTku60Text);

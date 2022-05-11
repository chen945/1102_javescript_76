//resolve 成功 reject 失敗 (是固定的)
const promise = new Promise((resolve, reject) => {
    let value = false;
    if (value) {
        resolve({ id: 1, name: "john" }); //這裡傳甚麼資料就會傳到後面的data
    } else {
        reject("there is an error");
    }
});
console.log(promise);
promise
    .then((data) => {
        console.log("data", data);
    })
    .catch((err) => console.log("error", err));

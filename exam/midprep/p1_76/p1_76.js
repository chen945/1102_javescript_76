let c, f;

c = Number(prompt("輸入攝氏溫度:")).toFixed(2);
f = (c * (9 / 5) + 32).toFixed(2);
console.log(`${c} C= ${f}F`);

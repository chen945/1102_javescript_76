// Make Soup
// boil water 3 min
// chop carrots
// add carrots boil for 1 min
// chop onion
// add onion boil for 1 min
// BROWSER!!!!! Fetch Data, Get Geolocation, setTimeout, setTimer etc

boilingWater();
console.log(`chop carrots`);

function boilingWater() {
    console.log("boiling...");
    //call-back hell 非同步
    setTimeout(() => {
        console.log("boiling done.");
        console.log("add carrots");
        setTimeout(() => {
            console.log("carrots bolling done");
            console.log("add onion");
            setTimeout(() => {
                console.log("onion bolling done");
            }, 1000);
        }, 1000);
    }, 3000);
}

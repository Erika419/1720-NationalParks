//localStorage.setItem("bear", "Pooh");
//console.log(localStorage.getItem("bear"));
localStorage.removeItem("bear");

if (localStorage.getItem("bear") === null){
    console.log("no bear in the woods")
    
} else{
    console.log(`The name of the bear is $(localStorage.getItem("bear"))`)
}
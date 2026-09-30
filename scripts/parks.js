import { parks } from "../data/parks.mjs";
//console.log(parks);

const destination = document.querySelector("#allparks");
parks.forEach((parks)=>{
    const parkcards = document.createElement("div")

    //park photo and name
    const parksection = document.createElementa("section");
    const parkname = document.createElement("h2");
    const parkphoto = document.createElement("img");
    parkname.innerText = ("test")




    //build each care
    parkcards.appendChild(parksection)
    destination.appendChild(parkcards);
})
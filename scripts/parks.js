import { parks } from "../data/parks.mjs";
//console.log(parks);

const destination = document.querySelector("#allparks");
parks.forEach((parks)=>{
    const parkcards = document.createElement("div")

    //park photo and name
    const parksection = document.createElement("section");
    const parkname = document.createElement("h2");
    const parkphoto = document.createElement("img");
    parkname.innerText = "test"
    parkphoto.src=`images/rocky-mountain.webp`

    parksection.appendChild(parkphoto);
    parksection.appendChild(parkname);


    //build each care
    parkcards.appendChild(parksection)
    destination.appendChild(parkcards);
})
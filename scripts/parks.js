import { parks } from "../data/parks.mjs";
//console.log(parks);

const destination = document.querySelector("#allparks");
parks.forEach((parks)=>{
    const parkcards = document.createElement("div");

    //park photo and name
    const parksection = document.createElement("section");
    const parkname = document.createElement("h2");
    const parkphoto = document.createElement("img");
    parkname.innerText = parks.name;
    parkphoto.src=`images/${parks.image}`;
    parkphoto.width = "600";
    parkphoto.height = "200";
    parkphoto.alt = parkcards.name;
    parkphoto.loading="lazy";

    parksection.appendChild(parkphoto);
    parksection.appendChild(parkname);

    //park description
    const parkdesc=document.createElement("p");
    parkdesc.innerHTML= parks.description;

    //park description
    const parkest=document.createElement("p");
    parkest.innerHTML = `<span>ESTABLISHED:</span> ${parks.established}`;

    //park size
    const parksize = document.createElement("p");
    parksize.innerHTML = `<span>PARK SIZE:</span> ${parks.size_sq_mi} sq miles`;

    //build each care
    parkcards.appendChild(parksection);
    parkcards.appendChild(parkdesc);
    destination.appendChild(parkest);

    destination.appendChild(parkcards);
    
});
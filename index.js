let title = document.getElementById("hello");
title.innerHTML = "Naturalists";

async function getData(){
    const data = await fetch("https://api.inaturalist.org/v1/identifications");
    const json = await convertToJson(data);

    // console.log(json);

    let parent = document.querySelector(".print")

    json.results.forEach(element =>{
        let print = document.createElement("p");
        print.innerHTML = element.observation.species_guess;
        parent.appendChild(print);

        // console.log(element);
    });
}


function convertToJson(response){
    if(response.ok){
        return response.json();
    }
    else{
        throw new Error('bad response');
    }
}

getData();
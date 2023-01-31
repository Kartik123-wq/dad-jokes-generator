const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke")
const apikey = "hMa8o5NDwTIJLuUliH1rsc1ZCa5rbPLRihYYa53P";

const options = {
    methord: " GET ",
    headers: {
        "X-Api-Key": apikey,
    },
};

const apiURL = " https://api.api-ninjas.com/v1/jokes?limit=1";

async function getJoke(){

    try {
        joke.innerText = "Updating....."
    btnEl.disabled = true;
    btnEl.innertext = "loading..."
    const response = await fetch (apiURL, options);   
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innertext = " tell me a joke"

    jokeEl.innerText = data[0].joke;
        
    } catch (error) {
        jokeEl.innertext = "An error happened , try again later";
        console.log(error);
        
    }



    
}
btnEl.addEventListener("click", getJoke);
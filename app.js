// API key 15915ed8

// request to http://www.omdbapi.com/?apikey=[15915ed8]&




async function searchMovie(searchFraze){
    const response = await axios.get("http://www.omdbapi.com/",{
        params: {
            apikey:"15915ed8",
            s: searchFraze
        }
    });

    if (response.data.Error){
        return [];
    }

    return response.data.Search;

}

async function fullMovie(movie){
    const response = await axios.get("http://www.omdbapi.com/",{
        params: {
            apikey:"15915ed8",
            i: movie.imdbID
        }
    });
    document.querySelector("#summary").innerHTML = movieViwe(response.data)
}

function movieViwe(movieAll){
    return `   
 <article class="media">
    <figure class="media-left">
      <p class="image">
        <img src="${movieAll.Poster}" alt="">
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <h1>${movieAll.Title}</h1>
        <h3>${movieAll.Grnre}</h3>
        <p>${movieAll.Plot}</p>
      </div>
    </div>
  </article>`
}




const autocomplete = document.querySelector(".autocomplete");
autocomplete.innerHTML = `
<label for=""><b>Search for a movie!</b></label>    
<input type="text" name="" class="input">
<div class="dropdown">
    <div class="dropdown-menu">
        <div class="dropdown-content results"></div>
    </div>
</div>`
const input = document.querySelector("input");
const dropdown = document.querySelector(".dropdown");
const searchResults = document.querySelector(".dropdown-content");
const body = document.body;


const onInput =  async event => {
    const movies = await searchMovie(event.target.value)
    if(!movies.length){
        dropdown.classList.remove('is-active');
        return;
    }
    searchResults.innerHTML="";
    dropdown.classList.add('is-active')
    for(let movie of movies){
        const anchor = document.createElement('a');
        anchor.classList.add("dropdown-item");
        anchor.innerHTML = `
        <img src="${movie.Poster} alt="sorry no image!"">
        <h3> ${movie.Title}</h3>
        `;
        searchResults.appendChild(anchor);
        anchor.addEventListener('click', event =>{
            dropdown.classList.remove('is-active');
            input.value = movie.Title
            fullMovie(movie);
        })
    }
    
}

input.addEventListener("input", debounce(onInput));
document.addEventListener('click',event => {
    if(!autocomplete.contains(event.target)){
        dropdown.classList.remove('is-active')
    }
    
})


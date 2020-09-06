// API key 15915ed8

// request to http://www.omdbapi.com/?apikey=[15915ed8]&


// old html <div class="dropdown is-active">
    //       <input type="text" name="" id="">
    //       <div class="dropdown-menu">
    //         <div class="dropdown-content">
    //           <a href="" class="dropdown-item">Mocie #1</a>
    //           <a href="" class="dropdown-item">Mocie #1</a>
    //           <a href="" class="dropdown-item">Mocie #1</a>

    //         </div>
    //       </div>
    //   </div>  




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

async function fullMovie(){
    const response = await axios.get("http://www.omdbapi.com/",{
        params: {
            apikey:"15915ed8",
            i: "tt0848228"
        }
    });
    console.log(response.data)
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
    }
    
}

input.addEventListener("input", debounce(onInput));
document.addEventListener('click',event => {
    if(!autocomplete.contains(event.target)){
        dropdown.classList.remove('is-active')
    }
    
})
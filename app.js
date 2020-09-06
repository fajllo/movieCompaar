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
    if (response.data.Response){
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
<input type="text" name="" id="">
<div class="dropdown ">
    <div class="dropdown-menu">
        <div class="dropdown-content results"></div>
    </div>
</div>`
const input = document.querySelector("input");

const onInput =  async event => {
    const movies = await searchMovie(event.target.value)
    for(let movie of movies){
        console.log(movie);
    }
}

input.addEventListener("input", debounce(onInput));
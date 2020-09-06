// API key 15915ed8

// request to http://www.omdbapi.com/?apikey=[15915ed8]&


async function searchMovie(searchFraze){
    const response = await axios.get("http://www.omdbapi.com/",{
        params: {
            apikey:"15915ed8",
            s: searchFraze
        }
    });
    console.log(response.data)

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

function debounce(callback){
    let timeoutId;
    return (...args) => {
        if(timeoutId){
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            callback.apply(null,args);
        },800);
    };
};

const input = document.querySelector("input");
const onInput = debounce(event => {
    searchMovie(event.target.value)
})

input.addEventListener("input",onInput);
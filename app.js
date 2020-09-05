// API key 15915ed8

// request to http://www.omdbapi.com/?apikey=[15915ed8]&

async function searchMovie(){
    const response = await axios.get("http://www.omdbapi.com/",{
        params: {
            apikey:"15915ed8",
            s: "Avengers"
        }
    });
    console.log(response.data)

}

searchMovie()


async function fullMovie(){
    const response = await axios.get("http://www.omdbapi.com/",{
        params: {
            apikey:"15915ed8",
            i: "tt0848228"
        }
    });
    console.log(response.data)
}

fullMovie()
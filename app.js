// API key 15915ed8

// request to http://www.omdbapi.com/?apikey=[15915ed8]&

async function fetchData(){
    const response = await axios.get("http://www.omdbapi.com/",{
        params: {
            apikey:"15915ed8",
            s: "Avengers"
        }
    });
    console.log(response)
}

fetchData()
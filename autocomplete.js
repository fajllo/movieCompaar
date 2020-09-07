function autocomp({root},name) {
    const summary = document.createElement('div');
    summary.classList.add(`${name}`);
    
    root.innerHTML = `
    <label for=""><b>Search for a movie!</b></label>    
    <input type="text" name="" class="input">
    <div class="dropdown">
        <div class="dropdown-menu">
            <div class="dropdown-content results"></div>
        </div>
    </div>`
    root.appendChild(summary);
    const input = root.querySelector("input");
    const dropdown = root.querySelector(".dropdown");
    const searchResults = root.querySelector(".dropdown-content");
    


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
            <h3> ${movie.Title} (${movie.Year})</h3>
            `;
            searchResults.appendChild(anchor);
            anchor.addEventListener('click', event =>{
                dropdown.classList.remove('is-active');
                input.value = movie.Title;
                
                fullMovie(movie,name);
            })
        }
        
    }

    input.addEventListener("input", debounce(onInput));
    document.addEventListener('click',event => {
        if(!root.contains(event.target)){
            dropdown.classList.remove('is-active')
        }
        
    })

};
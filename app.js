// API key 15915ed8

// request to http://www.omdbapi.com/?apikey=[15915ed8]&
btnNew = document.querySelector('.new-compare');
btnNew.addEventListener('click', () => {
  document.querySelector('.sum1').innerHTML = '';
  document.querySelector('.sum2').innerHTML = '';
});

async function searchMovie(searchFraze) {
  const response = await axios.get('https://www.omdbapi.com/', {
    params: {
      apikey: '15915ed8',
      s: searchFraze,
    },
  });

  if (response.data.Error) {
    return [];
  }

  return response.data.Search;
}

async function fullMovie(movie, klasa) {
  tutorial.classList.add('is-hidden');
  const response = await axios.get('https://www.omdbapi.com/', {
    params: {
      apikey: '15915ed8',
      i: movie.imdbID,
    },
  });
  document.querySelector(`.${klasa}`).innerHTML = movieViwe(response.data);
}

function movieViwe(movieAll) {
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
        <h3>${movieAll.Genre}</h3>
        <p>${movieAll.Plot}</p>
      </div>
    </div>
  </article>
  <article class="notification is-dark Awards">
  <p class="title">${movieAll.Awards}</p>
  <p class="subtitle">Awards</p>
</article>
<article class="notification is-dark Box">
  <p class="title">${movieAll.BoxOffice}</p>
  <p class="subtitle">BoxOffice</p>
</article>
<article class="notification is-dark Metascore">
  <p class="title">${movieAll.Metascore}</p>
  <p class="subtitle">Metascore</p>
</article>
<article class="notification is-dark Rating">
  <p class="title">${movieAll.imdbRating}</p>
  <p class="subtitle">imDB Rating</p>
</article>
<article class="notification is-dark Votes">
  <p class="title">${movieAll.imdbVotes}</p>
  <p class="subtitle">imDB Votes</p>
</article>
  `;
}
const tutorial = document.querySelector('.tutorial');
autocomp({root: document.querySelector('#left-autocomplete')}, 'sum1');
autocomp({root: document.querySelector('#right-autocomplete')}, 'sum2');

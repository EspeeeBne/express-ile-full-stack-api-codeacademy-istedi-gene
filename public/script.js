const fetchAllButton = document.getElementById('fetch-quotes');
const fetchRandomButton = document.getElementById('fetch-random');
const fetchByAuthorButton = document.getElementById('fetch-by-author');
const fetchAllBiosButton = document.getElementById('fetch-all-bios');
const fetchBioByNameButton = document.getElementById('fetch-bio-by-name');
const fetchRandomBioButton = document.getElementById('fetch-random-bio');

const quoteContainer = document.getElementById('quote-container');
const bioContainer = document.getElementById('bio-container');

const resetQuotes = () => {
  quoteContainer.innerHTML = '';
}

const resetBios = () => {
  bioContainer.innerHTML = '';
}

const renderError = response => {
  quoteContainer.innerHTML = `<p>Your request returned an error from the server: </p>
<p>Code: ${response.status}</p>
<p>${response.statusText}</p>`;
}

const renderQuotes = (quotes = []) => {
  resetQuotes();
  if (quotes.length > 0) {
    quotes.forEach(quote => {
      const newQuote = document.createElement('div');
      newQuote.className = 'single-quote';
      newQuote.innerHTML = `<div class="quote-text">${quote.quote}</div>
      <div class="attribution">- ${quote.person}</div>`;
      quoteContainer.appendChild(newQuote);
    });
  } else {
    quoteContainer.innerHTML = '<p>Your request returned no quotes.</p>';
  }
}

const renderBios = (bios = []) => {
  resetBios();
  if (bios.length > 0) {
    bios.forEach(bio => {
      const newBio = document.createElement('div');
      newBio.className = 'single-bio';
      newBio.innerHTML = `<div class="bio-text">${bio.bio}</div>
      <div class="attribution">- ${bio.name}</div>`;
      bioContainer.appendChild(newBio);
    });
  } else {
    bioContainer.innerHTML = '<p>Your request returned no bios.</p>';
  }
}

fetchAllButton.addEventListener('click', () => {
  fetch('/api/quotes')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      renderError(response);
    }
  })
  .then(response => {
    renderQuotes(response.quotes);
  });
});

fetchRandomButton.addEventListener('click', () => {
  fetch('/api/quotes/random')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      renderError(response);
    }
  })
  .then(response => {
    renderQuotes([response.quote]);
  });
});

fetchByAuthorButton.addEventListener('click', () => {
  const author = document.getElementById('author').value;
  fetch(`/api/quotes?person=${author}`)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      renderError(response);
    }
  })
  .then(response => {
    renderQuotes(response.quotes);
  });
});

fetchAllBiosButton.addEventListener('click', () => {
  fetch('/api/bios')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      renderError(response);
    }
  })
  .then(response => {
    renderBios(response.bios);
  });
});

fetchBioByNameButton.addEventListener('click', () => {
  const name = document.getElementById('bio-author').value;
  fetch(`/api/bios?name=${name}`)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      renderError(response);
    }
  })
  .then(response => {
    renderBios(response.bios);
  });
});

fetchRandomBioButton.addEventListener('click', () => {
  fetch('/api/bios/random')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      renderError(response);
    }
  })
  .then(response => {
    renderBios([response.bio]);
  });
});

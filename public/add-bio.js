const submitBioButton = document.getElementById('submit-bio');
const newBioContainer = document.getElementById('new-bio-container');

submitBioButton.addEventListener('click', () => {
  const name = document.getElementById('bio-name').value;
  const description = document.getElementById('bio-description').value;

  if (!name || !description) {
    alert('Please fill out both the name and bio description fields.');
    return;
  }

  fetch(`/api/bios?name=${encodeURIComponent(name)}&description=${encodeURIComponent(description)}`, {
    method: 'POST',
  })
    .then(response => response.json())
    .then(({ bio }) => {
      const newBio = document.createElement('div');
      newBio.innerHTML = `
        <h3 class="bio-success-message">Congrats, your bio was added!</h3>
        <div class="bio-text">${bio.description}</div>
        <div class="attribution">- ${bio.name}</div>
        <p class="bio-link-message">Go to the <a href="index.html">home page</a> to request and view all bios.</p>
      `;
      newBioContainer.appendChild(newBio);
    })
    .catch(error => {
      console.error('Error adding bio:', error);
      alert('There was an error adding the bio. Please try again later.');
    });
});

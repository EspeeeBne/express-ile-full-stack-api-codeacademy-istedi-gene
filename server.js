const express = require('express');
const app = express();
const { quotes } = require('./data');
const { getRandomElement } = require('./utils');
const { bios } = require('./data2');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));
app.use(express.json());

const generateId = () => {
  return quotes.length ? Math.max(...quotes.map(quote => quote.id || 0)) + 1 : 1;
};

app.get('/api/quotes/random', (req, res) => {
  const randomQuote = getRandomElement(quotes);
  res.send({ quote: randomQuote });
});

app.get('/api/quotes', (req, res) => {
  const person = req.query.person;
  if (person) {
    const filteredQuotes = quotes.filter(quote => quote.person === person);
    res.send({ quotes: filteredQuotes });
  } else {
    res.send({ quotes: quotes });
  }
});

app.post('/api/quotes', (req, res) => {
  const { quote, person, year } = req.query;
  if (!quote || !person) {
    return res.status(400).send('Please provide both quote and person.');
  }
  const newQuote = { id: generateId(), quote, person, year };
  quotes.push(newQuote);
  res.status(201).send({ quote: newQuote });
});

app.put('/api/quotes/:id', (req, res) => {
  const id = Number(req.params.id);
  const { quote, person, year } = req.body;
  const quoteIndex = quotes.findIndex(q => q.id === id);
  if (quoteIndex === -1) {
    return res.status(404).send('Quote not found.');
  }
  if (quote) quotes[quoteIndex].quote = quote;
  if (person) quotes[quoteIndex].person = person;
  if (year) quotes[quoteIndex].year = year;
  res.send({ quote: quotes[quoteIndex] });
});

app.delete('/api/quotes/:id', (req, res) => {
  const id = Number(req.params.id);
  const quoteIndex = quotes.findIndex(q => q.id === id);
  if (quoteIndex === -1) {
    return res.status(404).send('Quote not found.');
  }
  const deletedQuote = quotes.splice(quoteIndex, 1);
  res.send({ quote: deletedQuote[0] });
});

app.get('/api/bios/random', (req, res) => {
  const randomBio = getRandomElement(bios);
  res.send({ bio: randomBio });
});

app.get('/api/bios', (req, res) => {
  res.send({ bios });
});

app.get('/api/bios/:id', (req, res) => {
  const id = Number(req.params.id);
  const bio = bios.find(b => b.id === id);
  if (!bio) {
    return res.status(404).send('Bio not found.');
  }
  res.send({ bio });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

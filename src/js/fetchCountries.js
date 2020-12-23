import { error } from '@pnotify/core';

const fetchCountries = searchQuery => {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  return fetch(url)
    .then(response => response.json())
    .catch(err => {
      error({text: 'There is no such country.'});
      console.log(err);
    });
};

export default fetchCountries;
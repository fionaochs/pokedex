import request from 'superagent';
// https://alchemy-pokedex.herokuapp.com/pokedex?
const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex?';

export async function getPokemon() {
  // get rid of the first character of the hash (#)

  let queryString = window.location.hash.slice(1);
  //after # sort=id&pokemon=onix&page=1

  // build a url out of the url and querytstring
  const url = `${URL}${queryString}`;

  // send that url along to the fetch
  const data = await request.get(url);
if (data.Response === "False"){
    return {
        Search: [],
        count: 0
    };
}
    return data.body;
}

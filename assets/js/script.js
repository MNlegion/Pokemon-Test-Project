var pokemonList = "https://pokeapi.co/api/v2/pokemon/?limit=151"

fetch(pokemonList).then(function(response) {
  response.json().then(function(data) {
    console.log(data);
  });
});
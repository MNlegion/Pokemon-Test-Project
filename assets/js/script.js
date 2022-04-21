// Form ID
const pokedexEl = document.querySelector('#user-form');
// Input ID
const nameInputEl = document.querySelector('#poke-name');
var pokemonList = "https://pokeapi.co/api/v2/pokemon/?limit=10"

// fetch(pokemonList)
//   .then(function (response) {
//     response.json().then(function (data) {
//       console.log(data.results);
//     });
//   });

  // console.log('here we go again');
  // fetch(pokemonList)
  // .then(response => {
  //   console.log(response);
  //   response.json().then(data => {
  //     console.log(data.results);
  //   })
  //   .then(data => {
  //     document.getElementById('pokemon')
  //   })
  // })

  var formSubmitHandler = function(event) {
    event.preventDefault();
    var pokemonSearch = nameInputEl.value.trim();

    if (pokemonSearch) {
      getPokemon(pokemonSearch);
      nameInputEl.value = "";
    } else {
      alert("Oh my, this Pokemon doesn't seem to exist!")
    }
    console.log(event);
  };

  var getPokemon = function() {
    fetch(pokemonList + name)
    .then(response => {
      console.log(response);
      response.json().then(data => {
        console.log(data);
        displayPokemon(data, name);
      });
    })
  };

  pokedexEl.addEventListener('submit', formSubmitHandler);


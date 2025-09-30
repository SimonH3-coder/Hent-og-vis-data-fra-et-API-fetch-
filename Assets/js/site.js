async function fetchData() {
  try {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if (!response.ok) {
      throw new Error("Kunne ikke finde fetch kilden");
    }

    const data = await response.json();
    const pokemonKraft = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonKraft");

    imgElement.src = pokemonKraft;
    imgElement.style.display = "block";

    // Kald view funktionen med data
    view(data);
  } catch (error) {
    console.error(error);
  }
}

function view(data) {
  const output = document.getElementById("output");
  output.innerHTML = `
    <h2>Navn: ${data.name}</h2>
    <p>Højde: ${data.height}</p>
    <p>Vægt: ${data.weight}</p>
    <p>Type: ${data.types.map((type) => type.type.name).join(", ")}</p>
  `;
}

// fetch("`https://pokeapi.co/api/v2/pokemon/")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Kunne ikke finde fetch kilden");
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error))

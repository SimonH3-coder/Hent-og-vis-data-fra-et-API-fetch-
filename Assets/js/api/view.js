function view(data) {
  const output = document.getElementById("output");
  output.innerHTML = `
    <h2>Navn: ${data.name}</h2>
    <p>Højde: ${data.height}</p>
    <p>Vægt: ${data.weight}</p>
    <p>Type: ${data.types.map((type) => type.type.name).join(", ")}</p>
  `;
}

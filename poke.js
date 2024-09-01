document.querySelector("#search").addEventListener("click", getPoke);

function capLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowName(string) {
  return string.toLowerCase();
}

function getPoke(e) {
  const name = document.querySelector("#pokeName").value;
  const pokeName = lowName(name);

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".pokeBox").innerHTML = `
      <div>
        <img
          src="${data.sprites.other["official-artwork"].front_default}"
          alt="Pokemon name"
        />
      </div>
      <div class="pokeInfo">
        <h1>${capLetter(data.name)}</h3>
        <p><b>Type:</b> ${data.types["0"].type.name}</p>
        <p><b>Ability 1:</b> ${data.abilities["0"].ability.name}; <b>Ability 2:</b> ${data.abilities["1"].ability.name}</p>
        <p><b>Stats 1:</b> ${data.stats["0"].stat.name}; <b>Stats 2:</b> ${data.stats["1"].stat.name}; <b>Stats 3:</b> ${data.stats["2"].stat.name}</p>

      </div>`;
    })
    .catch((err) => {
      document.querySelector(".pokeBox").innerHTML = `
      <h4>Pokemon not found</h4>
      `;
      console.log("Pokemon not found", err);
    });

  e.preventDefault();
}
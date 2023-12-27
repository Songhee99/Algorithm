const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nums, ...pokemons] = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, m] = nums.split(" ");
let quiz = pokemons.splice(n);

let pokemonsNum = new Map();
let pokemonsName = new Map();

pokemons.forEach((pokemon, idx) => {
  pokemonsNum.set(pokemon, idx + 1);
  pokemonsName.set(idx + 1, pokemon);
});

quiz.forEach((ele) => {
  if (isNaN(ele)) return console.log(pokemonsNum.get(ele));
  console.log(pokemonsName.get(+ele));
});

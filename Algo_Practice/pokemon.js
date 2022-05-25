var pokemon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];

function id_divisible_by_3() {
    for (let i = 0; i < pokemon.length; i++) {
        if (pokemon[i].id % 3 == 0) {
            console.log(pokemon[i]);
        }
    }
}
function multiple_types() {
    for (let i = 0; i < pokemon.length; i++) {
        if (pokemon[i].types.length > 1) {
            console.log(pokemon[i]);
        }
    }
}
function poison_type() {
    for (let i = 0; i < pokemon.length; i++) {
        if (pokemon[i].types.length == 1 
            && pokemon[i].types[0] === 'poison') {
            console.log(pokemon[i]);
        }
    }
}
function first_type_of_second_type_flying() {
    for (let i = 0; i < pokemon.length; i++) {
        if (pokemon[i].types.length >= 2 
            && pokemon[i].types[1] === 'flying') {
            console.log(pokemon[i].types[0]);
        }
    }
}
function reverse_name(pokemon_obj) {
    var name = pokemon_obj.name;
    var reverse = '';

    for (let i = name.length - 1; i >= 0; i--) {
        reverse += name[i];
    }
    return reverse;
}
function reverse_name_poison_type() {
    for (let i = 0; i < pokemon.length; i++) {
        if (pokemon[i].types.length == 1 
            && pokemon[i].types[0] === 'poison') {
            console.log(reverse_name(pokemon[i]));
        }
    }
}
//divisible_by_3();
//multiple_types();
//poison_type();
//first_type_of_second_type_flying();
//reverse_name_poison_type();


// console.log the pokémon objects whose id is evenly divisible by 3
// console.log the pokémon objects that have more than one type
// console.log the names of the pokémon whose only type is "poison"
// console.log the first type of all the pokémon whose second type is "flying"
// Bonus Challenge: console.log the reverse of the names of the pokémon whose only type is "poison"


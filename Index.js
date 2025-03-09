// Definir o nome do herói e a quantidade de XP
const nomeHeroi = "Arthur"; // Substitua pelo nome desejado
const xpHeroi = 7500; // Substitua pela XP desejada

// Definir o nível com base na XP
let nivel;

if (xpHeroi < 1000) {
    nivel = "Ferro";
} else if (xpHeroi <= 2000) {
    nivel = "Bronze";
} else if (xpHeroi <= 5000) {
    nivel = "Prata";
} else if (xpHeroi <= 7000) {
    nivel = "Ouro";
} else if (xpHeroi <= 8000) {
    nivel = "Platina";
} else if (xpHeroi <= 9000) {
    nivel = "Ascendente";
} else if (xpHeroi <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Exibir a mensagem
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);

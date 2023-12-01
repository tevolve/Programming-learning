
 // Função para obter o nível do herói com base na quantidade de XP
 function getVictory(victory) {
    switch (true) {
        case victory < 10:
            return "Ferro";
        case victory >= 11 && victory <= 20:
            return "Bronze";
        case victory >= 21 && victory <= 50:
            return "Prata";
        case victory >= 51 && victory <= 80:
            return "Ouro";
        case victory >= 81 && victory <= 90:
            return "Platina";
        case victory >= 91 && victory <= 100:
            return "Diamante";
        default:
             return "Radiante";
    }
}

// Lista de heróis com seus nomes e experiência
const heroes = [
        {"victory": 10},
        {"victory": 20},
        {"victory": 50},
        {"victory": 80},
        {"victory": 8000},
        {"victory": 90},
        {"victory": 100}
    ];
    
// Loop for para processar cada herói na lista
for (let i = 0; i < heroes.length; i++) {
    const hero = heroes[i];
    const victory = hero.victory

    // Chama a função para obter o nível do herói
    const victorys = getVictory(victory);

    // Exibe a mensagem com o nome do herói e o nível alcançado
    console.log(`O Herói tem de saldo de ${victory} está no nível de ${victorys}`);
}

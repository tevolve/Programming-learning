 // Função para obter o nível do herói com base na quantidade de XP
function gteLevel(xp) {
    switch (true) {
        case xp < 1000:
            return "Ferro";
        case xp >= 1001 && xp <= 2000:
            return "Bronze";
        case xp >= 2001 && xp <= 5000:
            return "Prata";
        case xp >= 6001 && xp <= 7000:
            return "Ouro";
        case xp >= 7001 && xp <= 8000:
            return "Platina";
        case xp >= 8001 && xp <= 9000:
            return "Ascendente";
        case xp >= 9001 && xp <= 10000:
            return "Diamante";
        default:
            return "Radiante";
    }
}

// Lista de heróis com seus nomes e experiência
const heroes = [
        {"name": "H1", "xp": 1000},
        {"name": "H2", "xp": 2000},
        {"name": "H3", "xp": 5000},
        {"name": "H4", "xp": 7000},
        {"name": "H5", "xp": 8000},
        {"name": "H6", "xp": 9000},
        {"name": "H7", "xp": 1000},
        {"name": "H8", "xp": 1000}
    ];
    
// Loop for para processar cada herói na lista
for (let i = 0; i < heroes.length; i++) {
    const hero = heroes[i];
    const name = hero.name;
    const xp = hero.xp;

    // Chama a função para obter o nível do herói
    const level = getLevel(xp);

    // Exibe a mensagem com o nome do herói e o nível alcançado
    console.log(`O Herói de nome ${name} está no nível de ${level}`);
}

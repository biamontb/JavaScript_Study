// O QUE DEVE SER UTILIZADO
// 1. Varíaveis
// 2. Operadores
// 3. Laços de Repetição
// 4. Estrutura de decisões.

// OBJETIVO
// 1. Criar uma variável para armazenar o nome do jogador
// 2. Criar uma variável para armazenar a quantidade de experiência (XP) de um herói
// 3. Utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo.
//      Se XP for menor do que 1.000 = Ferro
//      Se XP for entre 1.001 e 2.000 = Bronze
//      Se XP for entre 2.001 e 5.000 = Prata Ouro
//      Se XP for entre 5.001 e 8.000 = Platina Diamante
//      Se XP for entre 8.001 e 9.000 = Ascendente
//      Se XP for entre 9.001 e 10.000 = Imortal
//      Se XP for maior ou igual a 10.001 = Radiante
// 4. Exibir a mensagem "O Herói de nome {nome} está no nível de {nivel}"

let nome = "Fernando";
let xp_heroi = 7067;
let nivel = "";

while (nivel === "") {

    if (xp_heroi < 1000) {
        nivel = "Ferro";
    }
    else if (xp_heroi >= 1001 && xp_heroi <= 2000) {
        nivel = "Bronze";
    }
    else if (xp_heroi >= 2001 && xp_heroi <= 5000) {
        nivel = "Prata Ouro";
    }
    else if (xp_heroi >= 5001 && xp_heroi <= 8000) {
        nivel = "Platina Diamante";
    }
    else if (xp_heroi >= 8001 && xp_heroi <= 9000) {
        nivel = "Ascendente";
    }
    else if (xp_heroi >= 9001 && xp_heroi <= 10000) {
        nivel = "Imortal";
    }
    else if (xp_heroi >= 10001) {
        nivel = "Radiante";
    }
}

console.log(`O Herói de nome ${nome} está no nível de ${nivel}.`);
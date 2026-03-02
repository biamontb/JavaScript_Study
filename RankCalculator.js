//     O que deve ser utilizado: Variáveis, Operadores, Laços de repetição, Estruturas de decisões, Funções
//     Objetivo: Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)
// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100 = Lendário
// Se vitórias for maior ou igual a 101 = Imortal
//    Saída: Ao final deve se exibir uma mensagem: "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

function rankCalculator (wins, loss) {
    let winsBalance = wins - loss;
    let level = "";

    if (vitorias <= 10) {
        level = "Iron";
    } else if (wins >= 11 && wins <= 20) {
        level = "Bronze";
    } else if (wins >= 21 && wins <= 50) {
        level = "Silver";
    } else if (wins >= 51 && wins <= 80) {
        level = "Gold";
    } else if (wins >= 81 && wins <= 90) {
        level = "Diamond";
    } else if (wins >= 91 && wins <= 100) {
        level = "Legendary";
    } else {
        level = "Imortal";
    }

    return `The Hero has the winning balance of ${winsBalance} and it's on the level ${level}`;
}

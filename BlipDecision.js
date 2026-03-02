// 1. As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
//    "gets": lê UMA linha com dados de entrada (inputs) do usuário;
//    "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// 2. Use estruturas condicionais para imprimir a resposta correta de acordo com o comando recebido

// PSEUDOCÓDIGO
// Se entrada = "start" Então Bot started
// Se entrada = "stop" Então Bot stopped
// Se entrada = "pause" Então Bot paused
// Qualquer outro valor Então unknown command

const commando = gets();

if (commando === "start") {
  print("Bot started");
}
else if (commando === "stop") {
  print("Bot stopped");
}
else if (commando === "pause") {
  print("Bot paused");
}
else {
  print("Unknown command");
}

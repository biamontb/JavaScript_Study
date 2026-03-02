// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets": lê UMA linha com dados de entrada (input) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.
// Lê o tipo de mensagem a ser contado ("BOT" ou "USER")
// onst tipoMensagem = gets();
// let contador = 0;
// Leia as mensagens até encontrar a linha "FIM"
// Para cada mensagem, verifique se ela começa com o tipo desejado (por exemplo: "BOT:" ou "USER:")
// Se começar com o tipo desejado, aumente o contador em 1
// Ao final, imprima a quantidade de mensagens do tipo escolhido
// print(contador);
// Entrada 	Saída
// BOT
// BOT: Hello
// USER: Hi
// BOT: How can I help?
// FIM 	2
// USER
// USER: Hi
// BOT: Welcome
// USER: Need help
// FIM 	2
// BOT
// USER: Hello
// USER: Info
// FIM 	0
// USER
// BOT: Hi
// BOT: Anything else?
// FIM 	0

const tipoMensagem = gets();
let contador = 0;

while (true) {
  const mensagem = gets();

  if (mensagem === "FIM") {
    break;
  }

  if (mensagem.startsWith(tipoMensagem + ":")) {
    contador++;
  }
}

print(contador);

// PSEUDOCODIGO
// SE horario ENTÃO	"Atendemos das 8h as 18h"
// SE telefone ENTÃO "Nosso telefone e 4002-8922"
// SE servicos ENTÃO "Oferecemos suporte, vendas e consultoria"
// SE ajuda ENTÃO	"Comando invalido"

const command = gets();

if (command === "time") {
  print("We answer calls and messages by 8am to 6pm.");
}
else if (command === "contact number") {
  print("Our contact number is 4002-8922.");
}
else if (command === "services") {
  print("We offer support, sellings and consultary.");
}
else if (command === "help") {
  print("Invalid Command.");
}
else {
  print("Invalid Command.");
}
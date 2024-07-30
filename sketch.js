// Variáveis para armazenar o tempo e as cores
let startTime;
let colorChangeInterval = 1000; // Intervalo de troca de cor em milissegundos
let currentColor;

function setup() {
  createCanvas(600, 400); // Cria uma tela de 600x400 pixels
  background(255); // Define o fundo como branco
  textSize(64); // Define o tamanho do texto
  textAlign(CENTER, CENTER); // Alinha o texto ao centro
  startTime = millis(); // Captura o tempo inicial
  currentColor = color(random(255), random(255), random(255)); // Define uma cor inicial aleatória
}

function draw() {
  background(255); // Define o fundo como branco a cada quadro
  
  // Verifica se o intervalo de tempo passou
  if (millis() - startTime > colorChangeInterval) {
    startTime = millis(); // Atualiza o tempo inicial
    currentColor = color(random(255), random(255), random(255)); // Escolhe uma nova cor aleatória
  }
  
  fill(currentColor); // Define a cor do texto
  text("nevasca", width / 2, height / 2); // Desenha o texto no centro da tela
}

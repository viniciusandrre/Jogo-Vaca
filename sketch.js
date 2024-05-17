
function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  mostraCarro();
  movimentaAtor();
  movimentaCarro();
  voltaPosicaoInicialDoCarro();
  verificarColisao();  
  mostrarMeusPontos(); 
  marcaPontos();
}


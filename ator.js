// Codigo do Ator 

// Posicoes do Ator 

let posicaoXAtor = 100;
let posicaoYAtor = 367; 

//Colisao 

let colisao = false;

//Pontos 

let meusPontos = 0; 

function mostraAtor() {
  image(imagemAtor, posicaoXAtor, posicaoYAtor, 30, 30);
} 

function movimentaAtor() {
  if(keyIsDown(UP_ARROW)) {
    posicaoYAtor -= 2;
  }
  if(keyIsDown(DOWN_ARROW)) {
    if(podeSeMover()) {
      posicaoYAtor += 2;
    }
  }
} 

function verificarColisao() {
  for(let cont = 0; cont < imagensCarros.length; cont+=1) {
    colisao = collideRectCircle(posicaoXCarros[cont], posicaoYCarros[cont],          comprimentoCarro, alturaCarro, posicaoXAtor, posicaoYAtor, 15);
    if(colisao) {
      somDaColisao.play();
      voltaParaPosicaoInicial(); 
      if(pontosMaiorQueZero()) {
        meusPontos -= 1;
      }
    } 
    
  }
  
} 

function voltaParaPosicaoInicial() {
  posicaoYAtor = 367;
} 

function podeSeMover() {
  return posicaoYAtor < 366;
} 

function mostrarMeusPontos() {
  textAlign(CENTER);
  textSize(30);
  fill(color(173,255,47))
  text(meusPontos, (width / 5) + 13 , 27);
}

function marcaPontos() {
  if(posicaoYAtor < 27) {
    meusPontos +=1;
    somDosPontos.play();
    voltaParaPosicaoInicial();
    
  }
} 

function pontosMaiorQueZero() {
  return meusPontos > 0;
}
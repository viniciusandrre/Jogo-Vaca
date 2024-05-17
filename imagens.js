// Codigo das Imagens e Sons

let imagemEstrada; 
let imagemAtor; 
let imagemCarro; 
let imagemCarro2; 
let imagemCarro3; 

let somDaTrilha; 
let somDaColsiao; 
let somDosPontos;

function preload() {
  imagemEstrada = loadImage("imagens/estrada.png"); 
  imagemAtor = loadImage("imagens/ator-1.png");
  imagemCarro = loadImage("imagens/carro-1.png"); 
  imagemCarro2 = loadImage("imagens/carro-2.png"); 
  imagemCarro3 = loadImage("imagens/carro-3.png"); 
  imagensCarros = [imagemCarro,imagemCarro2,imagemCarro3, imagemCarro2, imagemCarro, imagemCarro3];
  
  somDaTrilha = loadSound("sons/trilha.mp3"); 
  somDaColisao = loadSound("sons/colidiu.mp3"); 
  somDosPontos = loadSound("sons/pontos.wav");
  
} 

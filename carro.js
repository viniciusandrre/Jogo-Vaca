// Codigo do Carro 

//Posicoes do Carro 

let posicaoXCarros = [600,600,600,600,600,600]; 

let posicaoYCarros = [40,96,150,210,270,318]; 

//Velocidade do Carro

let velocidadeXCarros = [6,4,2,4,3,6];

//Tamanhos Carros 

let comprimentoCarro = 50; 
let alturaCarro = 40;


function mostraCarro() {
  for(let cont = 0; cont < imagensCarros.length; cont+=1) {
    image(imagensCarros[cont], posicaoXCarros[cont], posicaoYCarros[cont], comprimentoCarro, alturaCarro);
  }
} 

function movimentaCarro() {
  for(let cont = 0; cont < posicaoXCarros.length; cont+=1) {
    posicaoXCarros[cont] -= velocidadeXCarros[cont];
  }
}

function voltaPosicaoInicialDoCarro() {
  for(let cont = 0; cont < imagensCarros.length; cont+=1) {
    if(passouTodaATela(posicaoXCarros[cont])) {
      posicaoXCarros[cont] = 600;
    }
  }
} 

function passouTodaATela(xCarro) {
  return xCarro < -50;
}
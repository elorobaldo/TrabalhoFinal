let requestURL = "https://www.luizpicolo.com.br/api.json"

let request = new XMLHttpRequest();
request.open("GET", requestURL);

request.responseType = "json";
request.send();

request.onload = function(){
  console.log(123)
    let resposta = request.response;
  console.log(resposta)
   let noticia = new Noticia("https/imagem.if","Em dois dias de greve no metrô em Belo Horizonte, cerca de 70 mil usuários foram prejudicados, afirma CBTU", "23/03/2022", "Nesta quarta, categoria faz uma assembleia geral na Praça da Estação para definir rumos do movimento.", "De acordo com a companhia, o funcionamento das estações entre 10h até as 17h, no cumprimento da escala mínima, não atende a população.")
  console.log(noticia.mostrarNoticia())
}


class Noticia {
    constructor(titulo,dataPubli,resumo,texto){
    this.titulo = titulo;
    this.dataPubli = dataPubli;
    this.resumo = resumo;
    this.texto = texto;
    }

    mostrarNoticia(){
        return this.titulo + "\n" +  this.dataPubli + "\n" + this.resumo + "\n" + "\n" +  this.texto 
    }
}

class NoticiaDestaque extends Noticia{
      constructor(imagem, titulo, dataPubli, resumo, texto){
        super(titulo,dataPubli,resumo,texto);
        this.imagem = imagem; 
      }

  mostrarDestaque(){
     return this.imagem + "\n" +  this.mostrarNoticia()
    } 
}


// console.log(noticia)
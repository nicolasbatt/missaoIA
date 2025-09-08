onst caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector((" .texto-resultado");

const perguntas = [
    {
        enunciado: "Qual sistema é fundamental para a segurança do veículo durante a frenagem?"
        alternativas: {
            "Sistema de freios ABS" ,
            "Sistema de aquecimento de assentos."
        }
    },
    {
        enunciado: "O que é o torque de um motor?
        alternativas: {
            "A força de giro que o motor aplica para mover o veículo" ,
            "A capacidade de armazenamento do porta-malas."
        }
    },
    {  
    enunciado: "Qual o principal objetivo do sistema de suspensão de um carro?"
        alternativas: {  
        "Absorver impactos e manter os pneus em contato com o solo",
        " Controlar o volume do som do rádio."
        }
    }
    {  
        enunciado: "O que é um veículo com transmissão automática??"
        alternativas: { 
        "Um carro que permite a troca de marchas sem a necessidade de um pedal de embreagem",
        "Um carro que desliga o motor automaticamente ao fechar a porta."
        enunciado: "Qual o significado da sigla SUV??"
        }
    },
    {   
        alternativas: {
        "Sport Utility Vehicle" ,
        "Socially Unaware Visitor."
        }
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length)}
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
    function mostraAlternativa( ) {  
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendchild(botaoAlternativas);
        }

        }


    function respostaSelecionada(opcaoSelecionada) {
       const afirmacoes = opcaoSelecionada.afirmacao;
     historiaFinal += afirmacoes + "";  
      atual++;
    mostraPergunta();
    }

    function mostraResultado() {
     caixaPerguntas.textContent = "Em 2049...";   






mostraPergunta();

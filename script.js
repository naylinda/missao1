const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Quando está diante de um problema complexo, o que você faz primeiro?",
    alternativas: [
      {
        texto: "Analiso todas as possibilidades antes de agir.",
        afirmacao: "Você tende a usar a lógica e a razão para tomar decisões importantes."
      },
      {
        texto: "Confio na minha intuição para encontrar o melhor caminho.",
        afirmacao: "Você valoriza seus sentimentos e instintos ao enfrentar situações difíceis."
      }
    ]
  },
  {
    enunciado: "Como você reage a críticas?",
    alternativas: [
      {
        texto: "Reflito e vejo se posso melhorar com base nelas.",
        afirmacao: "Você demonstra maturidade emocional e desejo de crescimento."
      },
      {
        texto: "Fico incomodado(a), mesmo quando sei que são construtivas.",
        afirmacao: "Você é sensível à opinião dos outros e pode se impactar emocionalmente com facilidade."
      }
    ]
  },
  {
    enunciado: "Você prefere atividades em grupo ou individuais?",
    alternativas: [
      {
        texto: "Prefiro fazer as coisas sozinho(a), no meu ritmo.",
        afirmacao: "Você tem traços de introspecção e valoriza seu espaço pessoal."
      },
      {
        texto: "Gosto de compartilhar experiências com os outros.",
        afirmacao: "Você é sociável e se energiza com conexões humanas."
      }
    ]
  },
  {
    enunciado: "Você costuma planejar tudo ou agir por impulso?",
    alternativas: [
      {
        texto: "Planejo tudo com antecedência.",
        afirmacao: "Você tem uma personalidade organizada e gosta de previsibilidade."
      },
      {
        texto: "Sigo o momento e deixo a vida me levar.",
        afirmacao: "Você tem uma mente aberta e prefere viver com flexibilidade."
      }
    ]
  },
  {
    enunciado: "Em situações de conflito, você tende a:",
    alternativas: [
      {
        texto: "Tentar mediar e evitar confronto direto.",
        afirmacao: "Você busca equilíbrio e tende a evitar estresse desnecessário."
      },
      {
        texto: "Enfrentar o problema diretamente, sem rodeios.",
        afirmacao: "Você tem assertividade e coragem para lidar com tensões."
      }
    ]
  }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  const afirmacoes = opcaoSelecionada.afirmacao;
  historiaFinal += afirmacoes + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = "Análise Final do Seu Perfil Psicológico:";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}

mostraPergunta();

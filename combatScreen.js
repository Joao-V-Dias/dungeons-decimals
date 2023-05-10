const button = document.querySelectorAll("button");
const equacao = document.getElementById("equacao");
const enemyBar = document.querySelector(".progressoEnemy");
const playerBar = document.querySelector(".progressoPlayer");
let dano = 10;
let lifePlayer = 100;
let lifeEnemy = 100;
let questaoTela = [];

const perguntas = [
  {
    questao: "2 + 2",
    alternativa: ["1", "2", "3", "4"],
    resposta: "3",
  },
  {
    questao: "4-2",
    alternativa: ["4", "2", "20", "48"],
    resposta: "1",
  },
  {
    questao: "1 + 1",
    alternativa: ["1", "2", "3", "4"],
    resposta: "1",
  },
  {
    questao: "10 x 10",
    alternativa: ["100", "2", "20", "48"],
    resposta: "0",
  },
  {
    questao: "2 + 2",
    alternativa: ["1", "2", "3", "4"],
    resposta: "3",
  },
  {
    questao: "4-2",
    alternativa: ["4", "2", "20", "48"],
    resposta: "1",
  },
  {
    questao: "1 + 1",
    alternativa: ["1", "2", "3", "4"],
    resposta: "1",
  },
  {
    questao: "10 x 10",
    alternativa: ["100", "2", "20", "48"],
    resposta: "0",
  },
  {
    questao: "2 + 2",
    alternativa: ["1", "2", "3", "4"],
    resposta: "3",
  },
  {
    questao: "4-2",
    alternativa: ["4", "2", "20", "48"],
    resposta: "1",
  },
  {
    questao: "1 + 1",
    alternativa: ["1", "2", "3", "4"],
    resposta: "1",
  },
  {
    questao: "10 x 10",
    alternativa: ["100", "2", "20", "48"],
    resposta: "0",
  },
  {
    questao: "2 + 2",
    alternativa: ["1", "2", "3", "4"],
    resposta: "3",
  },
  {
    questao: "4-2",
    alternativa: ["4", "2", "20", "48"],
    resposta: "1",
  },
  {
    questao: "1 + 1",
    alternativa: ["1", "2", "3", "4"],
    resposta: "1",
  },
  {
    questao: "10 x 10",
    alternativa: ["100", "2", "20", "48"],
    resposta: "0",
  },
];

let numQuestion = 0;
let score = 0;

function combat() {
  if (numQuestion != perguntas.length) {
    // carregarquestao();
    console.log(perguntas.length);
    questaoTela = perguntas[numQuestion];
    equacao.innerHTML = questaoTela.questao;

    for (i = 0; i < 4; i++) {
      button[i].innerHTML = questaoTela.alternativa[i];
    }
  } else {
    console.log("Nao tem mais perguntas");
  }
}

function key() {
  const id = event.target.id;

  if (id == questaoTela.resposta) {
    lifeEnemy -= dano;
    console.log(lifeEnemy);
    enemyBar.innerText = lifeEnemy;
    enemyBar.style.width = lifeEnemy + "%";
    numQuestion++;
    //   console.log("True");
  } else {
    lifePlayer -= dano;
    playerBar.innerText = lifePlayer;
    playerBar.style.width = lifePlayer + "%";
  }

  if (lifeEnemy <= 0 || lifePlayer <= 0) {
    if (lifeEnemy <= 0) {
      console.log("Voce ganhou");
    } else {
      console.log("Voce Perdeu");
    }
  }

  combat();
}

const button = document.querySelectorAll("button");
const equacao = document.getElementById("equacao");
const enemyBar = document.querySelector(".progressoEnemy");
const playerBar = document.querySelector(".progressoPlayer");
const dialogo = document.querySelector(".dialogo");
let dano = 10;
let lifePlayer = 100;
let lifeEnemy = 100;
let questaoTela = [];
let numCasa = 0;
let numDialogo = 0;
let inimigoInf;

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

const textoInimigo = {
  inimigo1: [
    "mensagem 1 do primeiro inimigo",
    "mensagem 2 do primeiro inimigo",
  ],
  inimigo2: ["mensagem 1 do segundo inimigo", "mensagem 2 do segundo inimigo"],
};

let numQuestion = 0;
let score = 0;

function combat() {
  console.log(inimigoInf.name + "Nome");

  if (numQuestion != perguntas.length) {
    // carregarquestao();
    // console.log(perguntas.length);
    questaoTela = perguntas[numQuestion];
    equacao.innerHTML = questaoTela.questao;

    for (i = 0; i < 4; i++) {
      button[i].innerHTML = questaoTela.alternativa[i];
    }
  } else {
    console.log("Nao tem mais perguntas");
  }
  if (lifeEnemy <= 0 || lifePlayer <= 0) {
    if (lifeEnemy <= 0) {
      console.log("Voce ganhou");

      inimigoInf.position.y = -1000;
      inimigoInf.position.x = -1000;

      lifeEnemy = 100;
      numDialogo = 0;

      enemyBar.innerText = lifeEnemy;
      enemyBar.style.width = lifeEnemy + "%";

      document.querySelector(".combatModal").style.display = "none";
    } else {
      console.log("Voce Perdeu");
    }
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

  combat();
}

function mensagemdDialogo(numCasa) {
  dialogo.innerHTML = numCasa[numDialogo];
  if (numCasa[numDialogo] == undefined) {
    document.querySelector(".telaConversa").style.display = "none";
    document.querySelector(".combatModal").style.display = "block";
    combat(inimigoInf);
  }
}

function caixaDialogoVerifica(nomeinimigo, inimigo) {
  inimigoInf = inimigo;
  console.log(inimigoInf);
  document.querySelector(".telaConversa").style.display = "block";
  switch (nomeinimigo) {
    case "inimigo1":
      numCasa = textoInimigo.inimigo1;
      // console.log(numCasa);
      mensagemdDialogo(numCasa);
      break;
    case "inimigo2":
      numCasa = textoInimigo.inimigo2;
      // console.log(numCasa);
      mensagemdDialogo(numCasa);
      break;
  }
}

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    numDialogo++;
  }
});

combat();

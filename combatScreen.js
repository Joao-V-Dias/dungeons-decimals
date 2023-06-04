const btnLayer = document.querySelectorAll(".btnLayer");
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
let timerCombat;
let numInimigosMortos = 0;

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

function time() {
  let timeInicio = 3;
  let timeCombat = 10;
  document.querySelector(".boxTimer").style.display = "block";
  let timer = setInterval(function () {
    // console.log(timeInicio);
    document.querySelector(".boxTimer").innerHTML = timeInicio;
    timeInicio--;
    if (timeInicio < 0) {
      clearInterval(timer);
      document.querySelector(".boxTimer").innerHTML = "";
      timerCombat = setInterval(function () {
        // console.log(timeCombat + "Combate");
        document.querySelector(".boxTimer").innerHTML =
          "Tempo Restante: " + timeCombat + "s";

        if (timeCombat < 0) {
          document.querySelector(".boxTimer").style.display = "none";
          document.querySelector(".textoMorte").innerHTML = "O tempo acabou";
          document.querySelector(".playerMorte").style.display = "flex";
          document.querySelector(".combatModal").style.display = "none";
          clearInterval(timerCombat);
        }
        timeCombat--;
      }, 1000);
    }
  }, 500);
}

let numQuestion = 0;
let score = 0;

function combat() {
  // console.log("Tela carregando");
  if (numQuestion != perguntas.length) {
    questaoTela = perguntas[numQuestion];
    equacao.innerHTML = questaoTela.questao;

    for (i = 0; i < 4; i++) {
      btnLayer[i].innerHTML = questaoTela.alternativa[i];
    }
  } else {
    // console.log("Nao tem mais perguntas");
  }
  if (lifeEnemy <= 0 || lifePlayer <= 0) {
    if (lifeEnemy <= 0) {
      // console.log("Voce ganhou");
      document.querySelector(".textoMorteInimigo").innerHTML =
        "Você derrotou " + inimigoInf.name;

      inimigoInf.position.y = -1000;
      inimigoInf.position.x = -1000;

      lifeEnemy = 100;
      numDialogo = 0;
      clearInterval(timerCombat);
      numInimigosMortos++;
      document.querySelector(".inimigosMortos").innerHTML =
        numInimigosMortos + " / 5";

      if (numInimigosMortos == 2) {
        document.querySelector(".inimigosMortos").innerHTML =
          "Chefe desbloqueado!";
      }

      enemyBar.innerText = lifeEnemy;
      enemyBar.style.width = lifeEnemy + "%";
      document.querySelector(".boxTimer").style.display = "none";
      document.querySelector(".combatModal").style.display = "none";
      document.querySelector(".inimigoMorte").style.display = "flex";
    } else {
      document.querySelector(".boxTimer").style.display = "none";
      document.querySelector(".textoMorte").innerHTML =
        "Você morreu por " + inimigoInf.name;
      document.querySelector(".combatModal").style.display = "none";
      document.querySelector(".playerMorte").style.display = "flex";
    }
  }
}

function key() {
  const id = event.target.id;

  if (id == questaoTela.resposta) {
    lifeEnemy -= dano;
    // console.log(lifeEnemy);
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
  if (numCasa[numDialogo] == undefined) {
    // console.log(numDialogo);
    time();
    document.querySelector(".telaConversa").style.display = "none";
    document.querySelector(".combatModal").style.display = "block";
    numDialogo = 0;
    combat(inimigoInf);
  }
  dialogo.innerHTML = numCasa[numDialogo];
}

function caixaDialogoVerifica(inimigo) {
  inimigoInf = inimigo;
  document.querySelector(".telaConversa").style.display = "block";
  switch (inimigoInf.name) {
    case "inimigo1":
      numCasa = textoInimigo.inimigo1;
      mensagemdDialogo(numCasa);
      break;
    case "inimigo2":
      numCasa = textoInimigo.inimigo2;
      mensagemdDialogo(numCasa);
      break;
  }
}

window.addEventListener("keydown", function (event) {
  if (
    event.keyCode === 13 &&
    document.querySelector(".combatModal").style.display != "block"
  ) {
    numDialogo++;
  }
});

function removeTelaInimigo() {
  document.querySelector(".inimigoMorte").style.display = "none";
}

combat();

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

function time() {
  let timeInicio = 3;
  let timeCombat = 50;
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
    const somMorteInimigoPlayer = new Audio();

    if (lifeEnemy <= 0) {
      // console.log("Voce ganhou");
      somMorteInimigoPlayer.src = "./audio/Victory.mp3";
      document.querySelector(".textoMorteInimigo").innerHTML =
        "Você derrotou " + inimigoInf.name;

      inimigoInf.position.y = -1000;
      inimigoInf.position.x = -1000;

      lifeEnemy = 100;
      numDialogo = 0;
      clearInterval(timerCombat);
      numInimigosMortos++;
      document.querySelector(".inimigosDerrotados").innerHTML =
        "Inimigos Derrotados: " + numInimigosMortos + " / 5";

      if (numInimigosMortos == 2) {
        document.querySelector(".inimigosDerrotados").innerHTML =
          "Chefe desbloqueado!";
        inimigos.push(boss);
      }

      enemyBar.innerText = lifeEnemy;
      enemyBar.style.width = lifeEnemy + "%";
      document.querySelector(".boxTimer").style.display = "none";
      document.querySelector(".combatModal").style.display = "none";
      document.querySelector(".inimigoMorte").style.display = "flex";
    } else {
      somMorteInimigoPlayer.src = "./audio/somMorte.mp3";
      document.querySelector(".boxTimer").style.display = "none";
      document.querySelector(".textoMorte").innerHTML =
        "Você morreu por " + inimigoInf.name;
      document.querySelector(".combatModal").style.display = "none";
      document.querySelector(".playerMorte").style.display = "flex";
    }
    somMorteInimigoPlayer.play();
  }
}

function key() {
  const id = event.target.id;

  const somGolpe = new Audio();
  somGolpe.src = "./audio/golpe.wav";

  somGolpe.play();

  if (id == questaoTela.resposta) {
    lifeEnemy -= dano;

    document.querySelector("#inimigoImg").style.animation = "";
    setTimeout(function () {
      document.querySelector("#inimigoImg").style.animation =
        "dano 0.5s linear";
    }, 5);

    // console.log(lifeEnemy);
    enemyBar.innerText = lifeEnemy;
    enemyBar.style.width = lifeEnemy + "%";
    numQuestion++;
    //   console.log("True");
  } else {
    lifePlayer -= dano;
    document.querySelector("#playerImg").style.animation = "";
    setTimeout(function () {
      document.querySelector("#playerImg").style.animation = "dano 0.5s linear";
    }, 5);
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
    case "galileu":
      numCasa = textoInimigo.galileu;
      document.querySelector("#inimigoImg").src = "./img/enemyteste.png";
      mensagemdDialogo(numCasa);
      break;
    case "lobisomen":
      numCasa = textoInimigo.lobisomen;
      document.querySelector("#inimigoImg").src = "./img/inimigo2.png";
      mensagemdDialogo(numCasa);
      break;
    case "bonzyBuddy":
      numCasa = textoInimigo.bonzyBuddy;
      document.querySelector("#inimigoImg").src = "./img/inimigo2.png";
      mensagemdDialogo(numCasa);
      break;
    case "siameses":
      numCasa = textoInimigo.siameses;
      document.querySelector("#inimigoImg").src = "./img/inimigo2.png";
      mensagemdDialogo(numCasa);
      break;
    case "cientista":
      numCasa = textoInimigo.cientista;
      document.querySelector("#inimigoImg").src = "./img/boss.png";
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

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
const squareArea = 88;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.height);

//image player//
const player = new Image();
player.src = "./img/playerDown.png";

//////////////////////////////
//create class for interface//
//////////////////////////////

class Boundary {
  constructor({ position }) {
    this.position = position;
  }

  draw() {
    c.fillStyle = "rgba(0, 0, 0, 0)";
    c.fillRect(this.position.x, this.position.y, squareArea, squareArea);
  }
}

class Player {
  constructor({ position, player, frame }) {
    this.position = position;
    this.player = player;
    this.frame = frame;
  }
  draw() {
    c.drawImage(
      this.player,
      (this.player.width / 4) * this.frame,
      0,
      this.player.width / 4,
      this.player.height,
      this.position.x,
      this.position.y,
      this.player.width / 4,
      this.player.height
    );
  }
}

class Sprite {
  constructor({ position }) {
    this.position = position;
  }

  draw() {
    c.drawImage(image, this.position.x, this.position.y);
  }

  drawWall() {
    c.drawImage(wall, this.position.x, this.position.y);
  }
}

class Enemy {
  constructor({ position, image }) {
    this.position = position;
    this.image = image;
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}

/////////////
//collision//
/////////////

const mapCollision = [];
for (let i = 0; i < collisions.length; i += 70) {
  mapCollision.push(collisions.slice(i, 70 + i));
}

const boundaries = [];
const positionFather = {
  x: -100,
  y: -400,
};

mapCollision.forEach((row, i) => {
  row.forEach((character, j) => {
    if (character == "1864") {
      boundaries.push(
        new Boundary({
          position: {
            x: j * 88 + positionFather.x,
            y: i * 88 + positionFather.y,
          },
        })
      );
    }
  });
});

/*zoom tiled 550%*/
/*bloco tem 12 px tamanho total do bloco = 88px*/

/////////////
//add image//
/////////////
const image = new Image();
image.src = "./img/mapaDungeon.png";

const wall = new Image();
wall.src = "./img/mapaDungeonParedes.png";

const enemy = new Image();
enemy.src = "./img/enemyteste.png";

const enemyteste = new Enemy({
  position: {
    x: positionFather.x + 400,
    y: positionFather.y + 900,
  },
  image: enemy,
});

const background = new Sprite({
  position: {
    x: positionFather.x,
    y: positionFather.y,
  },
});

const playerteste = new Player({
  position: {
    x: canvas.width / 2 - 192 / 4 / 2,
    y: canvas.height / 2 - 68 / 2,
  },
  player: player,
  frame: 0,
});

let lastKey = "";

const keys = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  s: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
};

function verificaEnemy(playerteste, enemyteste) {
  return (
    playerteste.position.x + 48 >= enemyteste.position.x &&
    playerteste.position.x <= enemyteste.position.x + squareArea &&
    playerteste.position.y + 68 >= enemyteste.position.y &&
    playerteste.position.y <= enemyteste.position.y + squareArea
  );
}

function verificaCollision(playerteste, { position }) {
  return (
    playerteste.position.x + 48 >= position.x &&
    playerteste.position.x <= position.x + squareArea &&
    playerteste.position.y + 68 >= position.y &&
    playerteste.position.y <= position.y + squareArea
  );
}

function mudarFrame() {
  if (playerteste.frame < 3) {
    if (background.position.y % 50 == 0 || background.position.x % 50 == 0) {
      playerteste.frame = playerteste.frame + 1;
    }
  } else if (
    background.position.y % 50 == 0 ||
    background.position.x % 50 == 0
  ) {
    playerteste.frame = 0;
  }
}

const movement = [background, enemyteste];

function move() {
  //////////////
  //drae image//
  //////////////
  background.draw();
  boundaries.forEach((boundary) => {
    boundary.draw();
  });
  playerteste.draw();
  enemyteste.draw();
  background.drawWall();

  let check = true;
  if (keys.w.pressed && lastKey === "w") {
    //key = w
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];

      if (
        verificaCollision(playerteste, {
          position: {
            x: boundary.position.x,
            y: boundary.position.y + 5,
          },
        })
      ) {
        check = false;
        break;
      }
    }
    if (verificaEnemy(playerteste, enemyteste)) {
      console.log("Colisao inimigo");
      document.querySelector(".combatModal").style.display = "block";

      combat(enemyteste);
    }
    if (check) {
      movement.forEach((move) => {
        move.position.y += 5;
      });
      boundaries.forEach((boundary) => {
        boundary.position.y += 5;
      });
      mudarFrame();
    }
  } else if (keys.a.pressed && lastKey === "a") {
    //key = a
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];

      if (
        verificaCollision(playerteste, {
          position: {
            x: boundary.position.x + 5,
            y: boundary.position.y,
          },
        })
      ) {
        check = false;
        break;
      }
    }
    if (verificaEnemy(playerteste, enemyteste)) {
      console.log("Colisao inimigo");
    }
    if (check) {
      movement.forEach((move) => {
        move.position.x += 5;
      });
      boundaries.forEach((boundary) => {
        boundary.position.x += 5;
      });
      mudarFrame();
    }
  } else if (keys.s.pressed && lastKey === "s") {
    //key = s
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];

      if (
        verificaCollision(playerteste, {
          position: {
            x: boundary.position.x,
            y: boundary.position.y - 5,
          },
        })
      ) {
        check = false;
        break;
      }
    }
    if (verificaEnemy(playerteste, enemyteste)) {
      console.log("Colisao inimigo");
    }
    if (check) {
      movement.forEach((move) => {
        move.position.y -= 5;
      });
      boundaries.forEach((boundary) => {
        boundary.position.y -= 5;
      });
      ///////////////////////////////
      mudarFrame();
      ///////////////////////////
    }
  } else if (keys.d.pressed && lastKey === "d") {
    //key = d
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];

      if (
        verificaCollision(playerteste, {
          position: {
            x: boundary.position.x - 5,
            y: boundary.position.y,
          },
        })
      ) {
        check = false;
        break;
      }
    }
    if (verificaEnemy(playerteste, enemyteste)) {
      console.log("Colisao inimigo");
    }
    if (check) {
      movement.forEach((move) => {
        move.position.x -= 5;
      });
      boundaries.forEach((boundary) => {
        boundary.position.x -= 5;
      });
      mudarFrame();
    }
  }

  window.requestAnimationFrame(move);
}

move();

////////////
//keyboard//
////////////

window.addEventListener("keydown", (click) => {
  switch (click.key) {
    case "w":
      keys.w.pressed = true;
      player.src = "./img/playerUp.png";
      lastKey = "w";
      break;
    case "a":
      keys.a.pressed = true;
      player.src = "./img/playerLeft.png";
      lastKey = "a";
      break;
    case "s":
      keys.s.pressed = true;
      player.src = "./img/playerDown.png";
      lastKey = "s";
      break;
    case "d":
      keys.d.pressed = true;
      player.src = "./img/playerRight.png";
      lastKey = "d";
      break;
  }
});

window.addEventListener("keyup", (click) => {
  switch (click.key) {
    case "w":
      keys.w.pressed = false;
      break;
    case "a":
      keys.a.pressed = false;
      break;
    case "s":
      keys.s.pressed = false;
      break;
    case "d":
      keys.d.pressed = false;
      break;
  }
});
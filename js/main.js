class Player {
    constructor(){
        this.width = 20;
        this.height = 10;
        this.positionX = 50;
        this.positionY = 0;
        this.domElm = null;

        this.createDomElement();
    }
    createDomElement(){
        // step1: create the element
        this.domElm = document.createElement("div");

        // step2: add content or modify
        this.domElm.setAttribute("id", "player");
        this.domElm.style.width = this.width + "vw"
        this.domElm.style.height = this.height + "vh"
        this.domElm.style.left = this.positionX + "vw";
        this.domElm.style.bottom = this.positionY + "vh";
        
        //step3: append to the dom: `parentElm.appendChild()`
        const boardElm = document.getElementById("board");
        boardElm.appendChild(this.domElm);
    }
    moveLeft() {
        if (this.positionX > 0) {
            this.positionX--;
            this.domElm.style.left = this.positionX + "vw";
        }
    }
    moveRight() {
        if (this.positionX + this.width < 100) {
            this.positionX++;
            this.domElm.style.left = this.positionX + "vw";
        }
    }
}



class Obstacle {
    constructor(){
        this.width = 20;
        this.height = 10;
        this.positionX = Math.floor(Math.random() * (100 - this.width + 1)); // random number between 0 and (100 - this.width)
        this.positionY = 100;
        this.domElm = null;

        this.createDomElement();
    }
    createDomElement() {
        // step1: create the element
        this.domElm = document.createElement("div");

        // step2: add content or modify
        this.domElm.setAttribute("class", "obstacle");
        this.domElm.style.width = this.width + "vw"
        this.domElm.style.height = this.height + "vh"
        this.domElm.style.left = this.positionX + "vw";
        this.domElm.style.bottom = this.positionY + "vh";

        //step3: append to the dom: `parentElm.appendChild()`
        const boardElm = document.getElementById("board");
        boardElm.appendChild(this.domElm);
    }
    moveDown(){
        this.positionY--;
        this.domElm.style.bottom = this.positionY + "vh"; 
    }
}




const player = new Player();
const obstacles = []; // will strore instances of the class Obstacle


// generate obstacles 
setInterval(() => {
    const newObstacle = new Obstacle();
    obstacles.push(newObstacle);
}, 3000);


// move obstacles & detect collision
setInterval(() => {
    obstacles.forEach((obstacleInstance) => {

        // 1. move current obstacle
        obstacleInstance.moveDown();
        
        // 2. detect if there's a collision between the current obstacle and the player
        if (player.positionX < obstacleInstance.positionX + obstacleInstance.width &&
            player.positionX + player.width > obstacleInstance.positionX &&
            player.positionY < obstacleInstance.positionY + obstacleInstance.height &&
            player.positionY + player.height > obstacleInstance.positionY) {
            console.log("game over");
            location.href = "gameover.html";
        }

    });
}, 30);



// add event listeners
document.addEventListener("keydown", (e) => {
    if (e.code === 'ArrowLeft') {
        player.moveLeft();
    } else if (e.code === 'ArrowRight') {
        player.moveRight();
    }
});


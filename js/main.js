class Player {
    constructor(){
        this.positionX = 50;
        this.positionY = 0;
        this.width = 20;
        this.height = 20;
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
    moveLeft(){
        this.positionX--;
        this.domElm.style.left = this.positionX + "vw";
    }
    moveRight(){
        this.positionX++;
        this.domElm.style.left = this.positionX + "vw";
    }
}



class Obstacle {
    constructor(){
        this.positionX = 50;
        this.positionY = 100;
        this.width = 20;
        this.height = 20;
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
        this.positionY = this.positionY - 10;
        this.domElm.style.bottom = this.positionY + "vh"; 
    }
}




const player = new Player();

const newObstacle = new Obstacle();

setInterval(() => {
    newObstacle.moveDown();
}, 500);



// add event listeners
document.addEventListener("keydown", (e) => {
    if (e.code === 'ArrowLeft') {
        player.moveLeft();
    } else if (e.code === 'ArrowRight') {
        player.moveRight();
    }
});


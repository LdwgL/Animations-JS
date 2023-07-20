let ctx = document.getElementById("canvas").getContext("2d")

// indique le début d'un nouveau chemin de dessin
ctx.beginPath();
//dessine un cercle avec un rayon de 50 pixels, centré aux coordonnées (100, 75) 
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
//définit la couleur de remplissage du cercle sur rouge.
ctx.fillStyle = "red";
//remplit le cercle avec la couleur définie précédemment.
ctx.fill();
//trace la bordure du cercle.
ctx.stroke();

document.addEventListener("keydown", event_handler);
document.addEventListener("keyup", () => {
    incrementX = 0;
    incrementY = 0;
});

function event_handler(event){
    switch (event.key) {
//On paramètre les directions assignées aux touches qui correspondent
        case "ArrowUp":
            console.log("up");
             incrementX = 0;
             incrementY = -1;
            break;

    
        case "ArrowDown":
            console.log("down");
             incrementX = 0;
             incrementY = 1;
            break;
    
        case "ArrowLeft":
            console.log("left");
             incrementX = -1;
             incrementY = 0;
            break;
    
        case "ArrowRight":
            console.log("right");
             incrementX = 1;
             incrementY = 0;
            break;
    }
    console.log(event);
}


let x = 100;     
let y = 100;     
let increment = 3;
let rayon = 40;
let incrementX = 5;
let incrementY = 3;

// //class Ball{
//     constructor(x,y,rayon)
//     this.x = x;
//     this.y = y;
//     this.rayon = rayon;
// }//
//On créé une boucle 
function mainLoop() {
    ctx.clearRect(0, 0, 500, 500);
    ctx.fillStyle = "black";
    ctx.fillRect(0 ,0 ,500,500);
    ctx.beginPath();
    ctx.arc(x, y, rayon, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();
    x += incrementX * 4;
    y += incrementY * 4;
    if(x > 500 - rayon){
        x = 500 - rayon;
        incrementX *= -1;
        // incrementX= Math.random() + 0,5;
    }

    if(x < 0 + rayon){
        x = 0 + rayon;
        incrementX *= -1;
        // incrementX= Math.random() + 0,5;
    }


    if(y > 500 - rayon){
        y = 500 - rayon;
        incrementY *= -1;
        // incrementY= Math.random() + 0,5;
    }

    if(y < 0 + rayon){
        y = 0 + rayon;
        incrementY *= -1;
        // incrementY= Math.random() + 0,5;
    }

    window.requestAnimationFrame(mainLoop);
}
window.requestAnimationFrame(mainLoop);
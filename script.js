let no = document.querySelector("#no");
let positions = [0,0];

function move() {
    let vert = Math.floor(Math.random() * (300 - 100 + 1)) + 100;
    if (Math.floor(Math.random() * 1) == 1){vert = vert*-1;}
    let hori = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    if (Math.floor(Math.random() * 1) == 1){hori = hori*-1;}
    no.style.top = vert+"px";
    no.style.left = hori+"px";
    positions[0] = vert;
    positions[1] = hori;
    console.log(no)
}

function remove() {
    no.onclick = "";
    let correct = document.querySelectorAll("p");
    for (let i=0; i < correct.length; i++){
        correct[i].style.display = "block";
    }
}


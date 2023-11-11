let no = document.querySelector("#no");
let positions = [0,0];

function move() {
    let vert = -268;
    while (vert < -267){
        vert = Math.floor(Math.random() * 300);
        let dif = positions[0] - vert;
        if (dif < 0){dif *= -1;}
        if (dif < 50){vert += 30;}
        if (Math.floor(Math.random() * 2) == 0){vert = vert*-1;}
    }
    let hori = Math.floor(Math.random() * 100);
    dif = positions[1] - hori;
    if (dif < 0){dif *= -1;}
    if (dif < 50){hori += 30;}
    if (Math.floor(Math.random() * 2) == 1){hori = hori*-1;}
    console.log("vert: "+vert);
    console.log("hori: "+hori);
    no.style.top = vert+"px";
    no.style.left = hori+"px";
    positions[0] = vert;
    positions[1] = hori;
}

function remove() {
    if (up_p() || up_title() || up_button()){
        no.style.top = 0;
        no.style.left = 0;
    }
    no.onclick = "";
    let correct = document.querySelectorAll("p");
    for (let i=0; i < correct.length; i++){
        correct[i].style.display = "block";
    }
}

function up_p() {
    for (let i=25; i<88; i++){
        for (let l=-220; l<155; l++){
            if (positions[0] == i && positions[1] == l){
                return true;
            }
        }
    }
    return false;
}
function up_title() {
    for (let i=-74; i<-22; i++){
        for (let l=-136; l<70; l++){
            if (positions[0] == i && positions[1] == l){
                return true;
            }
        }
    }
    return false;
}
function up_button() {
    for (let i=-26; i<29; i++){
        for (let l=-122; l<-5; l++){
            if (positions[0] == i && positions[1] == l){
                return true;
            }
        }
    }
    return false;
}

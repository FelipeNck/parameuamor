let no = document.querySelector("#no");
let si = document.querySelector("#si");

no.addEventListener("click", () =>{
    let vert = Math.floor(Math.random() * 300);
    if (Math.floor(Math.random() * 1) == 1){vert = vert*-1;}
    let hori = Math.floor(Math.random() * 100);
    if (Math.floor(Math.random() * 1) == 1){hori = hori*-1;}
    no.style.top = vert+"px";
    no.style.left = hori+"px";
});

si.addEventListener("click", () => {
    let certo = document.querySelectorAll("p");
    console.log(certo);
    for (let i=0; i < certo.length; i++){
        certo[i].style.display = "block";
    }
})
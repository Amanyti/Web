let box = document.querySelector("div");
let cor = document.querySelector("#cor");
let altura = document.querySelector("#altura");
let largura = document.querySelector("#largura");
let borda = document.querySelector("#borda");

cor.addEventListener("input", ()=>{
    box.style.background = cor.value;

} );

largura.addEventListener("input", ()=>{
    box.style.width = largura.value;
} );

altura.addEventListener("input", ()=>{
    box.style.height = altura.value;
} );

borda.addEventListener("input", ()=>{
    box.style.borderRadius = borda.value;
} );
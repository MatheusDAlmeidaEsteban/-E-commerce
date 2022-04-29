const buscar = document.getElementById("buscar");
const pesquisar = document.getElementById("pesquisar");

buscar.addEventListener("click",(e)=>{
    if(pesquisar.style.display ==="flex"){
        pesquisar.style.display ="none";
    }
    else{
        pesquisar.style.display ="flex";
        pesquisar.style.transition =  ".5s";
    }
})
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

//slide 
let time = 3000,
    currentImagemIndex =0 ;
    imagens = document.querySelectorAll("#slide img");
    max = imagens.length;
    navBar = document.getElementById("navBar")
    var coordenadasNavBar = navBar.getBoundingClientRect();
   
function nextImg(){
    imagens[currentImagemIndex]
        .classList.remove("select");

    currentImagemIndex ++

    if(currentImagemIndex >= max){
        currentImagemIndex = 0;
    }

    imagens[currentImagemIndex].classList.add("select");

   


}
function start(){
    setInterval(() =>{
        nextImg();
    },time)
}
window.addEventListener("load", start,);
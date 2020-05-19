// const idArtic1 = document.getElementById("#1");
// const idArtic2 = document.getElementById("#2");
// const idArtic3 = document.getElementById("#3");
// const idArtic4 = document.getElementById("#4");

const btnArtic1 = document.getElementById("#artic1");
const btnArtic2 = document.getElementById("#artic2");
const btnArtic3 = document.getElementById("#artic3");
const btnArtic4 = document.getElementById("#artic4");

const home = document.getElementById("#home");

function clickArticle1(){
    document.getElementById("1").classList.remove('hidden');
    document.getElementById("home").classList.add('hidden');
    document.getElementById("backhome").classList.remove('hidden');
}

function clickArticle2(){
    document.getElementById("2").classList.remove('hidden');
    document.getElementById("home").classList.add('hidden');
    document.getElementById("backhome").classList.remove('hidden');
}

function clickArticle3(){
    document.getElementById("3").classList.remove('hidden');
    document.getElementById("home").classList.add('hidden');
    document.getElementById("backhome").classList.remove('hidden');

}
function clickArticle4(){
    document.getElementById("4").classList.remove('hidden');
    document.getElementById("home").classList.add('hidden');
    document.getElementById("backhome").classList.remove('hidden');
}

function clickNav(){
    document.getElementById("1").classList.add('hidden');
    document.getElementById("2").classList.add('hidden');
    document.getElementById("3").classList.add('hidden');
    document.getElementById("4").classList.add('hidden');
    document.getElementById("backhome").classList.add('hidden')
    
}

function reloadPage(){
    location.reload()
}


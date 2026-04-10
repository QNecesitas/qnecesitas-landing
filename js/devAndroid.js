//php
const phpLink= "https://qnecesitas.nat.cu/QNecesitas/src/php/ObtenerPais.php"
const btnOpenAndroid= document.querySelectorAll('.btnOpenAndroid');
const btnOpenWeb=document.querySelectorAll('.btnOpenWeb');
const btnOpenPc=document.querySelectorAll('.btnOpenPc');



//price zone
const cardSmallBusiness = document.querySelector('#smallBusiness');
const cardCompany = document.querySelector('#company');
const cardforeignBusiness = document.querySelector('#foreignBusiness');

const btnSbusiness = document.querySelector('#btnSbusiness');
const btnCompany = document.querySelector('#btnCompany');
const btnFbusiness = document.querySelector('#btnFbusiness');

const primerInput = document.querySelector('.name1');

//finished work
//const tipoMoneda =document.querySelector('.tipo-moneda');
const btnPricePN = document.querySelector('#price-pn');
const btnPriceE = document.querySelector('#price-e');
const btnPriceNE = document.querySelector('#price-ne');
const primerInput2 = document.querySelector('.name2');

const YaEnCasa = document.querySelector('#YaEnCasa').innerHTML;
let YaEnCasaNum = parseInt(YaEnCasa);

const PuertoShop= document.querySelector('#PuertoShop').innerHTML;
let PuertoShopNum= parseInt(PuertoShop); 

const SandwichGourmet=document.querySelector('#SandwichGourmet').innerHTML;
let SandwichGourmetNum=parseInt(SandwichGourmet); 

const TiendaDCero= document.querySelector('#TiendaDCero').innerHTML;
let TiendaDCeroNum= parseInt(TiendaDCero);

const NovaTaxi= document.querySelector('#NovaTaxi').innerHTML;
let NovaTaxiNum=parseInt(NovaTaxi);

const RetenInventario= document.querySelector('#RetenInventario').innerHTML;
let RetenInventarioNum=parseInt(RetenInventario);

const ControlBombas= document.querySelector('#ControlBombas').innerHTML;
let ControlBombasNum=parseInt(ControlBombas);

const RetenRetenes= document.querySelector('#RetenRetenes').innerHTML;
let RetenRetenesNum=parseInt(RetenRetenes);

const IdiomApp= document.querySelector('#IdiomApp').innerHTML;
let IdiomAppNum=parseInt(IdiomApp);

let YaEnCasaPrecio= document.querySelector('#YaEnCasaPrecio');
let PuertoShopPrecio= document.querySelector('#PuertoShopPrecio');
let SandwichGourmetPrecio=document.querySelector('#SandwichGourmetPrecio');
let TiendaDCeroPrecio= document.querySelector('#TiendaDCeroPrecio');
let NovaTaxiPrecio= document.querySelector('#NovaTaxiPrecio');
let RetenInventarioPrecio= document.querySelector('#RetenInventarioPrecio');
let ControlBombasPrecio= document.querySelector('#ControlBombasPrecio');
let RetenRetenesPrecio= document.querySelector('#RetenRetenesPrecio');
let IdiomAppPrecio= document.querySelector('#IdiomAppPrecio');



//php
//Onclick

btnOpenAndroid.forEach(function(button) {
    button.addEventListener('click', function() {
      obtenerPais("Android");
    });
  });
  
  btnOpenWeb.forEach(function(button) {
    button.addEventListener('click', function() {
      obtenerPais("Web");
    });
  });
  
  btnOpenPc.forEach(function(button) {
    button.addEventListener('click', function() {
      obtenerPais("Pc");
    });
  });


//Function
function obtenerPais(destino){
    const hxr = new XMLHttpRequest();
    hxr.open('GET', phpLink);
    //OnLoad
    hxr.onload = function () {
      if (hxr.status === 200) {
        let json = JSON.parse(hxr.responseText);
        json.pais;
        
        openPag(destino,json.pais);
      } 
      
    };
  hxr.send();
} 


function openPag(destino,pais){
    if(pais==="Cuba"){
        switch(destino){
            case "Android":
                window.open("DevAndroid.html","_self");
            break;

            case "Web":
                window.open("DevWeb.html","_self");
            break;

            case "Pc":
                window.open("DevPC.html","_self");
            break;

        }
    }
    else{
        switch(destino){
            case "Android":
                window.open("DevAndroidExt.html","_self");
            break;

            case "Web":
                window.open("DevWebExt.html","_self");
            break;

            case "Pc":
                window.open("DevPCExt.html","_self");
            break;

        } 
    }
}



//price zone
btnSbusiness.addEventListener('click', ()=>{
    cardSmallBusiness.style.display= "block";
    cardCompany.style.display="none";
    cardforeignBusiness.style.display="none";
    primerInput.style.backgroundColor="white";
})
btnCompany.addEventListener('click', ()=>{
    cardSmallBusiness.style.display= "none";
    cardCompany.style.display="block";
    cardforeignBusiness.style.display="none";
    primerInput.style.backgroundColor="initial";
})
btnFbusiness.addEventListener('click', ()=>{
    cardSmallBusiness.style.display= "none";
    cardCompany.style.display="none";
    cardforeignBusiness.style.display="block";
    primerInput.style.backgroundColor="initial";
})

//finished work
btnPriceE.addEventListener('click', () => {
    let YaEnCasaPrecioNu = YaEnCasaNum * 5000;
    YaEnCasaPrecio.innerHTML = YaEnCasaPrecioNu.toString();

    let PuertoShopPrecioNu = PuertoShopNum * 5000;
    PuertoShopPrecio.innerHTML =PuertoShopPrecioNu.toString();

    let SandwichGourmetPrecioNu = SandwichGourmetNum * 5000;
    SandwichGourmetPrecio.innerHTML = SandwichGourmetPrecioNu.toString();

    let TiendaDCeroPrecioNu = TiendaDCeroNum * 5000;
    TiendaDCeroPrecio.innerHTML = TiendaDCeroPrecioNu.toString();

    let NovaTaxiPrecioNu = NovaTaxiNum * 5000;
    NovaTaxiPrecio.innerHTML = NovaTaxiPrecioNu.toString();

    let RetenInventarioPrecioNu = RetenInventarioNum * 5000;
    RetenInventarioPrecio.innerHTML = RetenInventarioPrecioNu.toString();

    let ControlBombasPrecioNu = ControlBombasNum * 5000;
    ControlBombasPrecio.innerHTML = ControlBombasPrecioNu.toString();

    let RetenRetenesPrecioNu = RetenRetenesNum * 5000;
    RetenRetenesPrecio.innerHTML = RetenRetenesPrecioNu.toString();

    let IdiomAppPrecioNu = IdiomAppNum * 5000;
    IdiomAppPrecio.innerHTML = IdiomAppPrecioNu.toString();

    let tipoMonedas = document.querySelectorAll('.tipo-moneda');
    for (let i=0; i<tipoMonedas.length; i++) {
        tipoMonedas[i].innerHTML= "CUP";
    }
    primerInput2.style.backgroundColor="initial";
})

btnPriceNE.addEventListener('click', ()=>{
    let YaEnCasaPrecioNu = YaEnCasaNum * 80;
    YaEnCasaPrecio.innerHTML = YaEnCasaPrecioNu.toString();

    let PuertoShopPrecioNu = PuertoShopNum * 80;
    PuertoShopPrecio.innerHTML =PuertoShopPrecioNu.toString();

    let SandwichGourmetPrecioNu = SandwichGourmetNum * 80;
    SandwichGourmetPrecio.innerHTML = SandwichGourmetPrecioNu.toString();

    let TiendaDCeroPrecioNu = TiendaDCeroNum * 80;
    TiendaDCeroPrecio.innerHTML = TiendaDCeroPrecioNu.toString();

    let NovaTaxiPrecioNu = NovaTaxiNum * 80;
    NovaTaxiPrecio.innerHTML = NovaTaxiPrecioNu.toString();

    let RetenInventarioPrecioNu = RetenInventarioNum * 80;
    RetenInventarioPrecio.innerHTML = RetenInventarioPrecioNu.toString();

    let ControlBombasPrecioNu = ControlBombasNum * 80;
    ControlBombasPrecio.innerHTML = ControlBombasPrecioNu.toString();

    let RetenRetenesPrecioNu = RetenRetenesNum * 80;
    RetenRetenesPrecio.innerHTML = RetenRetenesPrecioNu.toString();

    let IdiomAppPrecioNu = IdiomAppNum * 80;
    IdiomAppPrecio.innerHTML = IdiomAppPrecioNu.toString();

    let tipoMonedas = document.querySelectorAll('.tipo-moneda');
    for (let i=0; i<tipoMonedas.length; i++) {
        tipoMonedas[i].innerHTML= "USD";
    }
    primerInput2.style.backgroundColor="initial";
})


btnPricePN.addEventListener('click', ()=>{
    let YaEnCasaPrecioNu = YaEnCasaNum * 3000;
    YaEnCasaPrecio.innerHTML = YaEnCasaPrecioNu.toString();

    let PuertoShopPrecioNu = PuertoShopNum * 3000;
    PuertoShopPrecio.innerHTML =PuertoShopPrecioNu.toString();

    let SandwichGourmetPrecioNu = SandwichGourmetNum * 3000;
    SandwichGourmetPrecio.innerHTML = SandwichGourmetPrecioNu.toString();

    let TiendaDCeroPrecioNu = TiendaDCeroNum * 3000;
    TiendaDCeroPrecio.innerHTML = TiendaDCeroPrecioNu.toString();

    let NovaTaxiPrecioNu = NovaTaxiNum * 3000;
    NovaTaxiPrecio.innerHTML = NovaTaxiPrecioNu.toString();

    let RetenInventarioPrecioNu = RetenInventarioNum * 3000;
    RetenInventarioPrecio.innerHTML = RetenInventarioPrecioNu.toString();

    let ControlBombasPrecioNu = ControlBombasNum * 3000;
    ControlBombasPrecio.innerHTML = ControlBombasPrecioNu.toString();

    let RetenRetenesPrecioNu = RetenRetenesNum * 3000;
    RetenRetenesPrecio.innerHTML = RetenRetenesPrecioNu.toString();

    let IdiomAppPrecioNu = IdiomAppNum * 3000;
    IdiomAppPrecio.innerHTML = IdiomAppPrecioNu.toString();

    let tipoMonedas = document.querySelectorAll('.tipo-moneda');
    for (let i=0; i<tipoMonedas.length; i++) {
        tipoMonedas[i].innerHTML= "CUP";
    }
    primerInput2.style.backgroundColor="white";
})

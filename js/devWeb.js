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
//const tipomoneda =document.querySelectorAll('.tipoMoneda');
const btnPricePNW = document.querySelector('#price-pnWeb');
const btnPriceEW = document.querySelector('#price-eWeb');
const btnPriceNEW = document.querySelector('#price-neWeb');
const primerInput2 = document.querySelector('.name2');

const WP=document.querySelector('#WP').innerHTML;
let WPNum=parseInt(WP);

const Pergolas=document.querySelector('#Pergolas').innerHTML;
let PergolasNum=parseInt(Pergolas);

const Transport = document.querySelector('#Transport').innerHTML;
let TransportNum = parseInt(Transport);

const LuisitoClima= document.querySelector('#LuisitoClima').innerHTML;
let LuisitoClimaNum= parseInt(LuisitoClima); 

const NovaTaxiWeb=document.querySelector('#NovaTaxiWeb').innerHTML;
let NovaTaxiWebNum=parseInt(NovaTaxiWeb); 

const xyz= document.querySelector('#xyz').innerHTML;
let xyzNum= parseInt(xyz);

const MAlebrijeWeb= document.querySelector('#MAlebrijeWeb').innerHTML;
let MAlebrijeWebNum=parseInt(MAlebrijeWeb);

let WPPrecio= document.querySelector('#WPPrecio');
let PergolasPrecio= document.querySelector('#PergolasPrecio');
let TransportPrecio= document.querySelector('#TransportPrecio');
let LuisitoClimaPrecio= document.querySelector('#LuisitoClimaPrecio');
let NovaTaxiWebPrecio=document.querySelector('#NovaTaxiWebPrecio');
let xyzPrecio= document.querySelector('#xyzPrecio');
let MAlebrijeWebPrecio= document.querySelector('#MAlebrijeWebPrecio');

btnPriceEW.addEventListener('click', () => {
    let WPPrecioNu=WPNum * 5000;
    WPPrecio.innerHTML=WPPrecioNu.toString();

    let PergolasPrecioNu=PergolasNum * 5000;
    PergolasPrecio.innerHTML=PergolasPrecioNu.toString();

    let TransportPrecioNu = TransportNum * 5000;
    TransportPrecio.innerHTML = TransportPrecioNu.toString();

    let LuisitoClimaPrecioNu = LuisitoClimaNum * 5000;
    LuisitoClimaPrecio.innerHTML =LuisitoClimaPrecioNu.toString();

    let NovaTaxiWebPrecioNu = NovaTaxiWebNum * 5000;
    NovaTaxiWebPrecio.innerHTML = NovaTaxiWebPrecioNu.toString();

    let xyzPrecioNu = xyzNum * 5000;
    xyzPrecio.innerHTML = xyzPrecioNu.toString();
 
    let MAlebrijeWebPrecioNu = MAlebrijeWebNum * 5000;
    MAlebrijeWebPrecio.innerHTML = MAlebrijeWebPrecioNu.toString();

    let tipoMonedas = document.querySelectorAll('.tipoMoneda');
    for (let i=0; i<tipoMonedas.length; i++) {
        tipoMonedas[i].innerHTML= "CUP";
    }
    primerInput2.style.backgroundColor="initial";
});

btnPricePNW.addEventListener('click', () => {
    let WPPrecioNu=WPNum * 3000;
    WPPrecio.innerHTML=WPPrecioNu.toString();

    let PergolasPrecioNu=PergolasNum * 3000;
    PergolasPrecio.innerHTML=PergolasPrecioNu.toString();

    let TransportPrecioNu = TransportNum * 3000;
    TransportPrecio.innerHTML = TransportPrecioNu.toString();

    let LuisitoClimaPrecioNu = LuisitoClimaNum * 3000;
    LuisitoClimaPrecio.innerHTML =LuisitoClimaPrecioNu.toString();

    let NovaTaxiWebPrecioNu = NovaTaxiWebNum * 3000;
    NovaTaxiWebPrecio.innerHTML = NovaTaxiWebPrecioNu.toString();

    let xyzPrecioNu = xyzNum * 3000;
    xyzPrecio.innerHTML = xyzPrecioNu.toString();

    let MAlebrijeWebPrecioNu = MAlebrijeWebNum * 3000;
    MAlebrijeWebPrecio.innerHTML = MAlebrijeWebPrecioNu.toString();

    let tipoMonedas = document.querySelectorAll('.tipoMoneda');
    for (let i=0; i<tipoMonedas.length; i++) {
        tipoMonedas[i].innerHTML= "CUP";
    }
    primerInput2.style.backgroundColor="white";
});

btnPriceNEW.addEventListener('click', () => {
    let WPPrecioNu=WPNum * 100;
    WPPrecio.innerHTML=WPPrecioNu.toString();

    let PergolasPrecioNu=PergolasNum * 100;
    PergolasPrecio.innerHTML=PergolasPrecioNu.toString();

    let TransportPrecioNu = TransportNum * 100;
    TransportPrecio.innerHTML = TransportPrecioNu.toString();

    let LuisitoClimaPrecioNu = LuisitoClimaNum * 100;
    LuisitoClimaPrecio.innerHTML =LuisitoClimaPrecioNu.toString();

    let NovaTaxiWebPrecioNu = NovaTaxiWebNum * 100;
    NovaTaxiWebPrecio.innerHTML = NovaTaxiWebPrecioNu.toString();

    let xyzPrecioNu = xyzNum * 100;
    xyzPrecio.innerHTML = xyzPrecioNu.toString();

    let MAlebrijeWebPrecioNu = MAlebrijeWebNum * 100;
    MAlebrijeWebPrecio.innerHTML = MAlebrijeWebPrecioNu.toString();

    let tipoMonedas = document.querySelectorAll('.tipoMoneda');
    for (let i=0; i<tipoMonedas.length; i++) {
        tipoMonedas[i].innerHTML= "USD";
    }
    primerInput2.style.backgroundColor="initial";
});


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


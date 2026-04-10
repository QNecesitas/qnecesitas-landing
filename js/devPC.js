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


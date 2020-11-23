const color1= document.querySelector(".color1");
const color2= document.querySelector(".color2");
const color3= document.querySelector(".color3");

const slika= document.querySelector(".slika");

color1.addEventListener('click',()=>{
  slika.src="/img/patika.jpg";
 });

 color2.addEventListener('click',()=>{
  slika.src="/img/patika2.jpg";
 });

 color3.addEventListener('click',()=>{
  slika.src="/img/patika3.jpg";
 });


 const options = document.querySelector(".sneakers");

 options.addEventListener('change',(e)=>{
    if(e.target.value == 'Black'){
      slika.src="/img/patika.jpg";
    }else if(e.target.value == 'Purple'){
      slika.src="/img/patika2.jpg";
    }else{
      slika.src="/img/patika3.jpg";
     }
 });





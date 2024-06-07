// generate a random color

const randomcolor = function(){
    const hex = "0123456789ABCDEF";
    let color = '#';
    for(let i= 0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
} 

const startchangingcolor = function(){

   let intervalId = setInterval(changebgcolor, 1000);
    
  
    function changebgcolor(){
        document.body.style.backgroundcolor = randomcolor();
    }
};
const stopchangingcolor = function(){
    clearInterval(intervalId);
};

 document.querySelector("#start").addEventListener
 ('click',startchangingcolor);

 document.querySelector("#stop").addEventListener
 ('click',startchangingcolor);


const nav= document.querySelector('nav');
const menu= document.getElementById("menu");
const close=document.querySelector('#close img');
const menubar= document.getElementById("menubar");

let menuMode=false;

window.addEventListener("scroll",()=>{
    if(window.scrollY>0){
 
    }


    else if(window.scrollY==0){
        nav.style.backgroundImage='';
    }
});

menu.addEventListener("click",()=>{

    document.querySelector('#menu').style.display='none';

menubar.style.display='block';

});


close.addEventListener("click",()=>{
 

menubar.style.display='none';

if(window.innerWidth<975)
 document.querySelector('#menu').style.display='block';

});

window.addEventListener("resize",()=>{
    if(window.innerWidth>975){
        document.querySelector('#menu').style.display='none';

        menubar.style.display='none';

    }
    else{
        document.querySelector('#menu').style.display='block';
    }

});

/*Navigation Bar Ends*/

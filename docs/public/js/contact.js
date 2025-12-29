
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

/*Contact Form*/

const name_=document.getElementById("name");
const email=document.getElementById("email");
const msg=document.getElementById("msg");
const submit=document.getElementById("submit");
const form=document.getElementById("form");

function nameCheck(){
    if(name_.value=="")
    {
        name_.style.border="3px solid red";
        name_.title="Enter a valid name!";
      
        return false;  
    }
    else{
        name_.style.border="none";
       name_.style.borderBottom="4px solid rgb(178, 10, 245)"
          name_.title="Please fill this field.";
          return true;
    }
}

function emailCheck(){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailID= email.value;
    if(regex.test(emailID)){
        email.style.border="3px solid green";
        email.title="Please fill this field."
        return true;
    }
    else
    {
        email.style.border="3px solid red";
        email.title="Enter a Valid Email ID!"
        return false;
    }

}

function msgCheck(){
 if(msg.value=="")
    {
        msg.style.border="3px solid red";
        msg.title="Must have some message!";
      return false;
        
    }
    else{
        msg.style.border="none";
       msg.style.borderBottom="4px solid rgb(178, 10, 245)"
          msg.title="Please fill this field.";
          return true;
    }
}


function submitCheck(e){
   
    if(!(nameCheck() & emailCheck() & msgCheck())){
        e.preventDefault();
        alert("Please kindly enter atleast your name, a valid email id (where I can reach back to you) and some message for me!")
    }
   

}

name_.addEventListener("blur",nameCheck);
msg.addEventListener("blur",msgCheck);
email.addEventListener("blur",emailCheck);
email.addEventListener("input",emailCheck);
submit.addEventListener("click",e=>submitCheck(e));
form.addEventListener("submit",e=>submitCheck(e));
/*Contact Form Ends */
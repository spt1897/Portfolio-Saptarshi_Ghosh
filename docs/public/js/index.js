

/*Navigation Bar */

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

/*Hero Section*/

const phrases = ["Web Development","App Development", "Computer Systems","Competitive Coding","AI-ML"];
const target = document.getElementById("aniSpan");

let phraseIndex = 0;
let letterIndex = 0;
let typing = true;


function typeLoop() {
  const currentPhrase = phrases[phraseIndex];

  if (typing) {
    if (letterIndex < currentPhrase.length) {
      target.textContent += currentPhrase.charAt(letterIndex);
      letterIndex++;
      setTimeout(typeLoop, 100);
    } else {
      typing = false;
      setTimeout(typeLoop, 1000); 
    }
  } else {
    if (letterIndex > 0) {
      target.textContent = currentPhrase.substring(0, letterIndex - 1);
      letterIndex--;
      setTimeout(typeLoop, 50);
    } else {
      typing = true;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(typeLoop, 500);
    }
  }
}

typeLoop();

const name_=document.getElementById('name');

function update(){
 
    if(window.innerWidth<1266){
        name_.innerHTML="Saptarshi Ghosh";
        const righttxt=document.getElementById("righttxt");
        righttxt.style.width="100vw";
       
        righttxt.style.textAlign="center";
        righttxt.style.marginBottom="-5%";
    }

    else{
        name_.innerHTML="Saptarshi Ghosh &nbsp;&nbsp;&nbsp;&nbsp;";
        const righttxt=document.getElementById("righttxt");
        righttxt.style.width="";
         righttxt.style.textAlign="";
         righttxt.style.marginBottom="";
    }

}


window.addEventListener("resize",update);
window.addEventListener("load",update);
/*Hero Section Ends*/


/*skill section */
let skillShow= document.getElementById("skillshow");

let filterSelect= document.getElementById("filter_down");

function skillLoad(){
const filter= filterSelect.value;

skillShow.innerHTML="";

fetch("../../data/skills/skills.json")
.then(res=>res.json())
.then(skills =>{

  skills.forEach(skill=>{

   skill.filter.forEach(cat=>{

    if(cat==filter){
      const newSkill=document.createElement('img');
      newSkill.src=skill.image;
      newSkill.alt=skill.Skill;
      newSkill.title=skill.Skill;
     
        newSkill.style.height=skill.height;
        newSkill.style.width=skill.width;
      

      skillShow.append(newSkill);

    }

   })

  });


  if(skillShow.innerHTML==""){
    skillShow.innerHTML=`<p style="color:white;
    font-size:1.3rem; text-align:center; align-self:center; margin-top:-3.4%;
    font-weight:normal;
    ">&#9888;&nbsp;&nbsp;Sorry! No such skill yet but will learn soon! </p>`;

    skillShow.style.justifyContent="center";
  
  }

  else {
    skillShow.style.justifyContent="flex-start";
  }

});

}

document.addEventListener("DOMContentLoaded",skillLoad);
filterSelect.addEventListener("change",skillLoad);

/*skill section */


/*Download Resume */

const dresume= document.getElementById("dresume");

function downloadResume(){
  alert("Resume will be available soon! Thank you.");
}

dresume.addEventListener("click",downloadResume);
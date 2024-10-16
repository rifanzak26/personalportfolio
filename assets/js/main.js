AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
var sentences = ["An Aspiring IT Support", "A Guru Diniyah Asrama at BP IBS", "A Web Developer"];
var currentSentence = 0;
var currentSentenceChar = 0;
var intervalValue;
var textElement = document.querySelector("#text");
var myCursor = document.querySelector("#cursor");

function TypingEffect()
{
  var text = sentences[currentSentence].substring(0, currentSentenceChar +1);
  textElement.innerHTML = text;
  currentSentenceChar++;
  
  if(text === sentences[currentSentence])
  {
    clearInterval(intervalValue);
    setTimeout(function()
    {
      intervalValue = setInterval(DeletingEffect, 60);
    }, 130);
  }
}

function DeletingEffect()
{
  var text = sentences[currentSentence].substring(0, currentSentenceChar -1);
  textElement.innerHNTML = text;
  currentSentenceChar--;
  
  if(text === '')
  {
    clearInterval(intervalValue);
    if(currentSentence === (sentences.length-1))
       currentSentence = 0;
    else
      currentSentence++;
    
    currentSentenceChar = 0;
    
    setTimeout(function()
    {
      myCursor.style.display = 'inline-block';
      intervalValue = setInterval(TypingEffect,50);
    }, 100);
    
  }
}

intervalValue = setInterval(TypingEffect, 100);
'use strict';

function clicked() {
   let name = prompt("Please enter your name?")
      document.getElementById("name").innerHTML = "Hi " + name + " welcome to my site";
}

    function clickez() {
      let music = prompt('Do I like music?(Yes/No)');
      let MUSIC = music.toUpperCase();
      if
      (MUSIC === "YES" || MUSIC === "NO") {
         console.log("MUSIC");
         alert("Thankyou");
        }
         else{
        alert("Enter YES or NO");
    }

      let guitar = prompt('Do I have enough guitars?(Yes/No)');
      let GUITAR = guitar.toUpperCase();
      if(GUITAR === "YES" || GUITAR === "NO") {
         console.log("GUITAR");   
         alert("Thankyou");
      }
       else{
            alert ("Enter YES or NO");
        }
        

      let instrument = prompt('Do you play an instrument?(Yes/No)');
      let INSTRUMENT = instrument.toUpperCase();
      if(INSTRUMENT === "YES" || INSTRUMENT === "NO") {
        console.log("INSTRUMENT");   
        alert("Thankyou");
     }
      else{
           alert ("Enter YES or NO");
       }

      let buy = prompt("Do you need guitar lessons? (Yes/No)");
      let BUY = buy.toUpperCase();
      if(BUY === "YES" || BUY === "NO") {
        console.log("BUY");   
        alert("Thankyou");
     }
      else{
           alert ("Enter YES or NO");
       }

       let which = prompt('Is Acoustic guitar better than electric Guitar?');
       let WHICH = which.toUpperCase();
       if(WHICH === "YES" || GUITAR === "NO") {
          console.log("GUITAR");   
          alert("Thankyou");
       }
        else{
             alert ("Enter YES or NO");
          
        }
      
      console.log(MUSIC + GUITAR + INSTRUMENT + BUY);

    }

    function sixth() {

        for(let i = 0; i<4; i++){

        let favnum = prompt("Enter a number between 1-100");
        let favnumguess = parseInt(favnum);
        let answer = 67;
    
           if(favnumguess === answer){
            alert("WINNER !!");
           }   

           else if(favnumguess > answer){
            alert("Too High !");
           }

           else{
           alert("Too Low !");}

           document.getElementById("favnum").innerHTML = "My lucky number = " + answer;
        }
        
        }

function getValue() {

   let jacksValue = document.getElementById("typed").value;
   console.log(jacksValue);
   document.getElementById("name").innerHTML = jacksValue;

}                    
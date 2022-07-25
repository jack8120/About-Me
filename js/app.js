

    function clicked() {
      let music = prompt('Do I like music?(Yes/No)');
      let MUSIC = music.toUpperCase();
      if
      (MUSIC === "YES") {
         console.log("MUSIC");
         alert("Thankyou");}
         else {
        alert ("Enter YES or NO");
    }

      let guitar = prompt('Do I have enough guitars?(Yes/No)');
      let GUITAR = guitar.toUpperCase();
      if(GUITAR === "YES") {
         console.log("GUITAR");   
         alert("Thankyou");
      }
       else{
            alert ("Seriously?");
        }
        

      let instrument = prompt('Do you play an instrument?(Yes/No)');
      let INSTRUMENT = instrument.toUpperCase();
      if(INSTRUMENT === "YES") {
        console.log("INSTRUMENT");   
        alert("Thankyou");
     }
      else{
           alert ("Seriously?");
       }

      let buy = prompt("Do you need guitar lessons? (Yes/No)");
      let BUY = buy.toUpperCase();
      if(BUY === "YES") {
        console.log("BUY");   
        alert("Thankyou");
     }
      else{
           alert ("Seriously?");
       }

      
      console.log(MUSIC + GUITAR + INSTRUMENT + BUY);

    }

 
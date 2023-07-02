


function displayCurrentTime() {
    setInterval(function() {
      const now = new Date() ;
      const hours = now.getHours();

      if (hours>12) {
        hours = hours-12;
      }
      const hour2deg =   hours*30;
      const min2deg = (now.getMinutes()*6);
      const sec2deg = (now.getSeconds()*6);

      var secHand = document.getElementById('sechand');


      //seconds hand movement
      secHand.style.transform = `rotate(${sec2deg}deg)` ;
      

      document.getElementById('minhand').style.transform = `rotate(${min2deg}deg)`;
      console.log( now.getMinutes(),"*",min2deg);

      document.getElementById('hourhand').style.transform = `rotate(${hour2deg}deg)`;
      

    }, 1000); // Interval set to 1000 milliseconds (1 second)
  }

  displayCurrentTime();
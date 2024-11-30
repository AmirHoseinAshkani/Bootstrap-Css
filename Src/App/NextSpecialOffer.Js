/* export function TimeForTheNextSpecialOffer() {
    let CountDownDate = new Date("November 25, 2024 12:00 PM").getTime();
  
    let TRUTEOTSO = setInterval(function () {
      let Now = new Date().getTime();
      let distance = CountDownDate - Now;
  
      let Days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let Hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let Seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      document.getElementById("TimeFor-TheNext-SpecialOffer").innerHTML =
        '<span id="day" class="Next-Special-Offer">' +
        Days +
        "</span>" +
        '<span id="hours" class="Next-Special-Offer">' +
        Hours +
        "</span>" +
        '<span id="minutes" class="Next-Special-Offer">' +
        minutes +
        "</span>" +
        '<span id="Seconds" class="Next-Special-Offer">' +
        Seconds +
        "</span>";
  
      if (distance < 0) {
        clearInterval(TRUTEOTSO);
      }
    }, 1000);
  }; */
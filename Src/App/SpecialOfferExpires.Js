export function SpecialOfferExpires() {
  let CountDownDate = new Date("November 30, 2025 4:20 PM").getTime();

  let TRUTEOTSO = setInterval(function () {
    let Now = new Date().getTime();
    let distance = CountDownDate - Now;

    let Days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let Hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let Seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let OfferExpirationT = document.getElementsByClassName(
      "Offer-Expiration-Time"
    );

    for (let i = 0; i < OfferExpirationT.length; i++) {
      OfferExpirationT[i].innerHTML =
        '<span Id="day" class="Special-Offer-Ends">' +
        Days +
        "</span>" +
        '<span id="hours"class="Special-Offer-Ends">' +
        Hours +
        "</span>" +
        '<span id="minutes"class="Special-Offer-Ends">' +
        minutes +
        "</span>" +
        '<span id="Seconds"class="Special-Offer-Ends">' +
        Seconds +
        "</span>";
    }

    if (distance < 0) {
      clearInterval(TRUTEOTSO);
    }
  }, 1000);
}

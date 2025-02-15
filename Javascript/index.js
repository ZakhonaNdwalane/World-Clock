function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Cape Town
  let capetownElement = document.querySelector("#cape-town");
  if (capetownElement) {
    let capetownDateElement = capetownElement.querySelector(".date");
    let capetownTimeElement = capetownElement.querySelector(".time");
    let capetownTime = moment().tz("Africa/Johannesburg");

    capetownDateElement.innerHTML = capetownTime.format("MMMM Do YYYY");
    capetownTimeElement.innerHTML = capetownTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;

  if (cityTimeZone === "Current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.split("/").pop().replace("_", " ");

  if (!cityName) {
    cityName = cityTimeZone;
  }

  let cityTime = moment().tz(cityTimeZone);

  let cityHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
    </div>
  `;

  document.querySelector("#cities").innerHTML = cityHTML;
}

updateTime();

setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

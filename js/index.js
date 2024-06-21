const dayEL = document.querySelector(".dayEL");
const dateEl = document.querySelector(".dateEl");
const btnEl = document.querySelector(".btnSearsh");
const inPutEl = document.querySelector(".inPutFind");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// --------------------day------------------

const day = new Date();
const dayName = days[day.getDay()];
// dayEL.textContent = dayName;

// --------------------Date------------------

const month = day.toLocaleString("default", { month: "long" });
const date = day.getDate();
const year = day.getFullYear();

// dateEl.textContent = date + " " + _month;

// --------------------event------------------
btnEl.addEventListener("click", function () {
  city = inPutEl.value;
  getWeather(city);
});

// -----------------------------------------------------------------------------

let allText = [ ];
let allicon = [ ];
async function getWeather(city) {
  let respons = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${city}&days=3`
  );
  let data = await respons.json();

  // -----------------------------------1------------------------------------------
  allNameCity = data.location.name;
  allText = data.current.condition.text;
  allicon = data.current.condition.icon;
  temperature = data.current.temp_c;

  // --------------------------------------2---------------------------------------
  icon2Day = data.forecast.forecastday[1].day.condition.icon;
  text2Day = data.forecast.forecastday[1].day.condition.text;
  temperature2DayMax = data.forecast.forecastday[1].day.maxtemp_c;
  temperature2DayMin = data.forecast.forecastday[1].day.mintemp_c;

  // -------------------------------------3----------------------------------------
  icon3Day = data.forecast.forecastday[2].day.condition.icon;
  text3Day = data.forecast.forecastday[2].day.condition.text;
  temperature3DayMax = data.forecast.forecastday[2].day.maxtemp_c;
  temperature3DayMin = data.forecast.forecastday[2].day.mintemp_c;

  disblayData();
}

function disblayData() {
  let cartona = `<div class="col-4 p-0">
              <div class="card bg-card-1-3">
                <div class="card-header">
                  <div>
                    <div class="d-flex justify-content-between">
                      <div class="dayEL"><p> </p></div>
                      <div class="dateEl"><p> </p></div>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div>
                    <p>${allNameCity}</p>
                  </div>
                  <div class="d-flex justify-content-around">
                    <div><p class="heat">${temperature}°C</p></div>
                    <div class="">
                      <img
                        src="${allicon}"
                        alt="${allicon}"
                      />
                    </div>
                  </div>
                  <div>
                    <p class="custem">${allText}</p>
                  </div>
                </div>
                <div class="text-body-secondary">
                  <div class="d-flex justify-content-around bg-card">
                    <div>
                      <span>
                        <img src="https://routeweather.netlify.app/images/icon-umberella.png" alt="icon"/>
                      </span>
                      <span class="degree">20%</span>
                    </div>
                    <div>
                      <span>
                        <img src="https://routeweather.netlify.app/images/icon-wind.png" alt="icon"/>
                      </span>
                      <span class="degree">18 km/h</span>
                    </div>
                    <div>
                      <span>
                        <img src="https://routeweather.netlify.app/images/icon-compass.png" alt="icon" />
                      </span>
                      <span class="degree"> East </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- ------------------------------2----------------------- -->

            <div class="col-4 p-0">
              <div class="card text-center bg-card-2">
                <div class="card-header">
                  <div class="d-flex justify-content-center">
                    <p>wednesday</p>
                  </div>
                </div>
                <div class="card-body">
                  <div>
                    <div>
                      <img
                        src="https:${icon2Day}"
                        alt="${text2Day}"
                      />
                    </div>
                    <p class="heat-2">${temperature2DayMax}°C</p>
                    <p class="degree"><span>${temperature2DayMin}°C</span></p>
                    <p class="custem"><span>${text2Day}</span></p>
                  </div>
                </div>
              </div>
            </div>
            <!-- ------------------------------3----------------------- -->

            <div class="col-4 p-0">
              <div class="card text-center bg-card-1-3">
                <div class="card-header">
                  <div class="d-flex justify-content-center">
                    <p>Thursday</p>
                  </div>
                </div>
                <div class="card-body">
                  <div>
                    <div>
                      <img
                        src="https:${icon3Day}"
                        alt="icon"
                      />
                    </div>
                    <p class="heat-2">${temperature3DayMax}°C</p>
                    <p class="degree"><span>${temperature3DayMin}°C</span></p>
                    <p class="custem"><span>${text3Day}</span></p>
                  </div>
                </div>
              </div> 
              </div>`;

  document.getElementById("rowData").innerHTML = cartona;
}

getWeather("sohag");
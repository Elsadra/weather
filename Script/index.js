let City = {
  Tehran: {
    city: "Tehran",
    maxTemp: "13°",
    Temp: "16°",
    minTemp: "9°",
    windSpeed: "2",
    humidity: "38%",
  },
  Arak: {
    city: "Arak",
    maxTemp: "20",
    Temp: "18°",
    minTemp: "15°",
    windSpeed: "18",
    humidity: "22%",
  },
  Kerman: {
    city: "Kerman",
    maxTemp: "20°",
    Temp: "19°",
    minTemp: "16°",
    windSpeed: "6",
    humidity: "50%",
  },
  Isfahan: {
    city: "Isfahan",
    maxTemp: "15°",
    Temp: "14°",
    minTemp: "10°",
    windSpeed: "5",
    humidity: "43%",
  },
  Shiraz: {
    city: "Shiraz",
    maxTemp: "17°",
    Temp: "16°",
    minTemp: "12°",
    windSpeed: "4",
    humidity: "40%",
  },
  Florence: {
    city: "Florence",
    maxTemp: "18°",
    Temp: "17°",
    minTemp: "13°",
    windSpeed: "26",
    humidity: "54%",
  },
  Rome: {
    city: "Rome",
    maxTemp: "16°",
    Temp: "15°",
    minTemp: "13°",
    windSpeed: "14",
    humidity: "84%",
  },
  Venice: {
    city: "Venice",
    maxTemp: "12°",
    Temp: "12°",
    minTemp: "8°",
    windSpeed: "10",
    humidity: "94%",
  },
  Milan: {
    city: "Milan",
    maxTemp: "10°",
    Temp: "9°",
    minTemp: "6°",
    windSpeed: "6",
    humidity: "90%",
  },
};
let Country = {
  iran: ["Tehran", "Arak", "Kerman", "Isfahan", "Shiraz"],
  ایران: ["Tehran", "Arak", "Kerman", "Isfahan", "Shiraz"],
  italy: ["Florence", "Rome", "Venice", "Milan"],
  ایتالیا: ["Florence", "Rome", "Venice", "Milan"],
};
let Countries = ["Iran", "Italy"];
let $ = document;
let themeColor = document.querySelector("#theme-color");
let btnSetting = $.querySelector(".btn-setting");
let setting = $.querySelector(".setting");
let sliderTheme = $.querySelector(".slider-theme");
let defaultTheme = $.querySelector(".default-theme");
let lightTheme = $.querySelector(".light-theme");
let nightTheme = $.querySelector(".night-theme");
let inputSearchCountry = $.querySelector(".input-search-country");
let iconSearchCountry = $.querySelector(".icon-search-country");
let parentErrorMessage = $.querySelector(".parent-error-message");
let parentWeather = $.querySelector(".parent-weather");
let DescErrorMessage = $.querySelector(".item-desc-error-message");
let btnErrorMessage = $.querySelector(".item-btn-error-message");
let selectCity = $.querySelector(".select-city");
let ulCountryMenu = $.querySelector(".ul-country-menu");
let loader = `<div class="loader">
<div class="snow">
    <span style="--i:11"></span>
    <span style="--i:12"></span>
    <span style="--i:15"></span>
    <span style="--i:17"></span>
    <span style="--i:18"></span>
    <span style="--i:13"></span>
    <span style="--i:14"></span>
    <span style="--i:19"></span>
    <span style="--i:20"></span>
    <span style="--i:10"></span>
    <span style="--i:18"></span>
    <span style="--i:13"></span>
    <span style="--i:14"></span>
    <span style="--i:19"></span>
    <span style="--i:20"></span>
    <span style="--i:10"></span>
    <span style="--i:18"></span>
    <span style="--i:13"></span>
    <span style="--i:14"></span>
    <span style="--i:19"></span>
    <span style="--i:20"></span>
    <span style="--i:10"></span>
</div>
</div>`;
let body = document.querySelector("body");
let h1 = document.querySelector("h1");
iconSearchCountry.addEventListener("click", function () {
  let inputSearchCountryValue = inputSearchCountry.value;
  let stringValue = inputSearchCountryValue.toString();
  let stringValueLowerCase = stringValue.toLocaleLowerCase();
  let mainCountry = Country[stringValueLowerCase];
  if (mainCountry) {
    selectCity.innerHTML = "";
    mainCountry.forEach(function (City) {
      selectCity.innerHTML += `
      <option value="${City}" class="option">${City}</option>
      `;
    });
    parentWeather.innerHTML = loader;
    // select City
    selectCity.addEventListener("change", function () {
      let selectCityValue = selectCity.value;
      let mainCity = City[selectCityValue];
      if (selectCityValue === "") {
        alert("error");
      } else {
        parentWeather.innerHTML = `
        <div class="cardContainer">
        <div class="card">
          <p class="city">${mainCity.city}</p>
          <p class="weather">${mainCity.windSpeed}Km/h</p>
          <svg
            class="weather"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            width="50px"
            height="50px"
            viewBox="0 0 100 100"
            xml:space="preserve"
          >
            <image
              id="image0"
              width="100"
              height="100"
              x="0"
              y="0"
              href="data:image/png;base64,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"
            ></image>
          </svg>
          <p class="temp">${mainCity.Temp}</p>
          <div class="minmaxContainer">
            <div class="min">
              <p class="minHeading">Min</p>
              <p class="minTemp">${mainCity.minTemp}</p>
            </div>
            <div class="max">
              <p class="maxHeading">Max</p>
              <p class="maxTemp">${mainCity.maxTemp}</p>
            </div>
          </div>
        </div>
      </div>
        `;
      }
    });
  } else {
    parentErrorMessage.setAttribute("style", "top: 5rem;transition: .7s;");
    DescErrorMessage.innerHTML = "لطفاً نام کشور مدنظر را به درستی وارد کنید. ";
    setTimeout(function () {
      parentErrorMessage.setAttribute("style", "top: -100%;transition: 1.4s;");
    }, 3000);
    btnErrorMessage.addEventListener("click", function () {
      parentErrorMessage.setAttribute("style", "top: -100%;transition: 1.4s;");
    });
    selectCity.innerHTML = `
    <option value="ابتدا کشور را انتخاب کنید" selected disabled>ابتدا کشور را انتخاب کنید</option>
    `;
    parentWeather.innerHTML = loader;
  }
});
window.addEventListener("load", function () {
  Countries.forEach(function (Country) {
    ulCountryMenu.innerHTML += `
    <li class="item-country-menu">${Country}</li>
    `;
  });
});
let openSetting = false;
btnSetting.addEventListener("click", function () {
  if (!openSetting) {
    openSetting = true;
    setting.setAttribute("style", "left:0; transition: .7s;");
    btnSetting.setAttribute("style", "left:0; transition: .7s;");
    sliderTheme.setAttribute("style", "left:0%; transition: .7s;");
  } else {
    openSetting = false;
    setting.setAttribute("style", "left: -60%; transition: .7s;");
    btnSetting.setAttribute("style", "left:-10.5rem; transition: .7s;");
    sliderTheme.setAttribute("style", "left: -100%; transition: .7s;");
  }
});
lightTheme.addEventListener("click", function () {
  shortcutIcon.setAttribute(
    "href",
    "https://icons.getbootstrap.com/assets/icons/brightness-high-fill.svg"
  );
  themeColor.setAttribute("content", "#3c428c");
  body.setAttribute("style", "background-color:#f7f7fa; transition: .7s;");
  h1.setAttribute("style", "color:#3c428c;");
  selectCity.setAttribute(
    "style",
    "box-shadow:0 15px 20px -3px rgba(0,0,0,0),0 10px 10px -5px rgba(0,0,0,.04);"
  );
  inputSearchCountry.setAttribute(
    "style",
    "box-shadow:0 15px 20px -3px rgba(0,0,0,0),0 10px 10px -5px rgba(0,0,0,.04);"
  );
});
nightTheme.addEventListener("click", function () {
  shortcutIcon.setAttribute(
    "href",
    "https://icons.getbootstrap.com/assets/icons/moon-fill.svg"
  );
  themeColor.setAttribute("content", "#17242A");
  body.setAttribute("style", "background-color: #17242A; transition: .7s;");
  h1.setAttribute("style", "color:#7478af;");
});
defaultTheme.addEventListener("click", function () {
  if (hour > 18 || hour < 6) {
    shortcutIcon.setAttribute(
      "href",
      "https://icons.getbootstrap.com/assets/icons/moon-fill.svg"
    );
    themeColor.setAttribute("content", "#17242A");
    body.setAttribute("style", "background-color: #17242A; transition: .7s;");
    h1.setAttribute("style", "color:#7478af; transition: .7s;");
  } else {
    shortcutIcon.setAttribute(
      "href",
      "https://icons.getbootstrap.com/assets/icons/brightness-high-fill.svg"
    );
    themeColor.setAttribute("content", "#3c428c");
    body.setAttribute("style", "background-color: #f7f7fa; transition: .7s;");
    h1.setAttribute("style", "color:#3c428c; transition: .7s;");
    selectCity.setAttribute(
      "style",
      "box-shadow:10px 15px 20px -3px rgba(0,0,0,0.2),0 50px 20px -5px rgba(0,0,0,.04);"
    );
    inputSearchCountry.setAttribute(
      "style",
      "box-shadow:10px 15px 20px -3px rgba(0,0,0,0.2),0 50px 20px -5px rgba(0,0,0,.04);"
    );
  }
});

let shortcutIcon = document.querySelector("#shortcut-icon");
let D = new Date();
let hour = D.getHours();
if (hour > 18 || hour < 6) {
  shortcutIcon.setAttribute(
    "href",
    "https://icons.getbootstrap.com/assets/icons/moon-fill.svg"
  );
  body.setAttribute("style", "background-color: #17242A;");
  themeColor.setAttribute("content", "#17242A");
} else {
  shortcutIcon.setAttribute(
    "href",
    "https://icons.getbootstrap.com/assets/icons/brightness-high-fill.svg"
  );
  themeColor.setAttribute("content", "#3c428c");
  body.setAttribute("style", "background-color: #f7f7fa;");
}

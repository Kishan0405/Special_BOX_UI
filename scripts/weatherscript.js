const apiKey = "3d4873a8ff3de74bfa179951b7a4b04b";
      let recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
      let isCelsius = true;
      const spinner = document.getElementById('spinner');
      const weatherResult = document.getElementById('weather-result');
      const errorMessage = document.getElementById('error-message');
      const cityInput = document.getElementById('city');
  
      window.onload = function() {
        getLocation();
        displayRecentSearches();
      };
  
      // Debounce function for optimized search input
      let debounceTimeout;
      function debounceSearch() {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(getWeather, 500);
      }
  
      function getWeather(cityName = null) {
        const city = cityName || cityInput.value.trim();
        if (!city) {
          showError("Please enter a valid city name.");
          return;
        }
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        showSpinner(true);
        fetchWeather(apiUrl, city);
      }
  
      function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition, showErrorLocation);
        } else {
          showError("Geolocation is not supported by this browser.");
        }
      }
  
      function showPosition(position) {
        const { latitude: lat, longitude: lon } = position.coords;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        fetchWeather(apiUrl);
      }
  
      function fetchWeather(apiUrl, cityName) {
        fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
            if (data.cod === 200) {
              displayWeather(data);
              if (cityName && !recentSearches.includes(cityName)) {
                updateRecentSearches(cityName);
              }
            } else {
              showError("City not found. Please enter a valid city.");
            }
          })
          .catch(() => showError("Error fetching the weather data."))
          .finally(() => showSpinner(false));
      }
  
      function displayWeather(data) {
        const { temp } = data.main;
        const weatherDescription = data.weather[0].description;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const cityName = data.name;
        const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
  
        const weatherHTML = `
          <img src="${icon}" alt="Weather icon" loading="lazy">
          <h2>${cityName}</h2>
          <div class="temperature" onclick="toggleTemperature(${temp})">${temp.toFixed(1)}°C</div>
          <p><strong>Weather:</strong> ${weatherDescription}</p>
          <p><strong>Humidity:</strong> ${humidity}%</p>
          <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
        `;
  
        weatherResult.innerHTML = weatherHTML;
        weatherResult.classList.add('show');
        errorMessage.innerHTML = '';
      }
  
      function toggleTemperature(tempCelsius) {
        const tempElement = document.querySelector('.temperature');
        if (isCelsius) {
          const tempFahrenheit = (tempCelsius * 9/5) + 32;
          tempElement.innerHTML = `${tempFahrenheit.toFixed(1)}°F`;
          isCelsius = false;
        } else {
          tempElement.innerHTML = `${tempCelsius.toFixed(1)}°C`;
          isCelsius = true;
        }
      }
  
      function showError(message) {
        errorMessage.innerHTML = message;
        weatherResult.classList.remove('show');
      }
  
      function showErrorLocation(error) {
        const errorMsg = {
          [error.PERMISSION_DENIED]: "Geolocation permission denied.",
          [error.POSITION_UNAVAILABLE]: "Location information is unavailable.",
          [error.TIMEOUT]: "Geolocation request timed out."
        }[error.code] || "An unknown error occurred.";
        showError(errorMsg);
      }
  
      function showSpinner(visible) {
        spinner.style.display = visible ? 'block' : 'none';
      }
  
      function displayRecentSearches() {
        document.getElementById('recent-searches').innerHTML = recentSearches
          .map(city => `<span onclick="getWeather('${city}')">${city}</span>`)
          .join('');
      }
  
      function updateRecentSearches(cityName) {
        recentSearches = [cityName, ...recentSearches.slice(0, 4)];
        localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
        displayRecentSearches();
      }
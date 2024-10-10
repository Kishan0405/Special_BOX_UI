// Script for Background Image
const unsplashApiUrl = 'https://api.unsplash.com/photos/random';
const apiKeys = [
  'ifSuj0vqKcFawQ_FJyDFdi6uvqHyGbhxsm-WGjNbFB8',
  'AslxgBQoHEZ0M-e3_2q_4uUW49kblr5gNuCCaRe2emE',
  'se9AuhPWYM-0h8T8VKHM0wda33rj6qwCGbPgg5Gp6_8',
  'tCXdOMAjT4XMPZAlBJLCagdKAvYhkq3YxoETtWZfIyI',
  'JgO-n_iMdueu294Yy5x3TbdIR_b7vvabA029POkdwdk',
  'pHTJ6edBPLYg1qJmOoHrVRt37CkVMV6fh86wmtgCyj8',
  'grSrZOvcY0AFbyt6UWZhIIYYajj05x5yPnt39GDNfoo',
  'lGZm0LoZHFpw1JCi9rCCUrqT4bC2LFkGP8sqkL08_ok',
  '9_k0edXZKyyU23YFJ1jygYseHPWne57-VGitwJpzjXs'
];

const queries = ['Nature', 'Climate', 'Weather'];

let images = [];
let currentImageIndex = 0;
let currentApiKeyIndex = 0;

async function fetchImages() {
  for (const query of queries) {
    await fetchImage(query);
  }
  console.log('Images fetched:', images);
  changeBackground();
}

async function fetchImage(query) {
  try {
    const response = await fetch(`${unsplashApiUrl}?client_id=${apiKeys[currentApiKeyIndex]}&query=${query}`);

    if (!response.ok) {
      handleFetchError(query);
      return;
    }

    const data = await response.json();
    images.push(data.urls.regular);
  } catch (error) {
    console.error(`Error fetching image for query "${query}":`, error);
  }
}

function handleFetchError(query) {
  console.warn(`Error fetching image for "${query}" with key index ${currentApiKeyIndex}:`);
  currentApiKeyIndex = (currentApiKeyIndex + 1) % apiKeys.length;
  console.warn(`Switching to API key index ${currentApiKeyIndex}`);
  fetchImage(query);
}

function changeBackground() {
  if (images.length > 0) {
    const imageUrl = images[currentImageIndex];
    const img = new Image();

    img.src = imageUrl;
    img.onload = function () {
      document.body.style.backgroundImage = `url('${imageUrl}')`;
      const loading = document.querySelector('.loading');
      fadeOutLoadingScreen(loading);
    };

    img.onerror = function () {
      console.warn(`Failed to load image at "${imageUrl}". Switching API key and retrying...`);
      currentApiKeyIndex = (currentApiKeyIndex + 1) % apiKeys.length;
      fetchImageForCurrentQuery();
    };

    currentImageIndex = (currentImageIndex + 1) % images.length;
  }
}

function fetchImageForCurrentQuery() {
  const currentQuery = queries[Math.floor(currentImageIndex / queries.length)];
  fetchImage(currentQuery);
}

function handleLoadingScreen() {
  const loading = document.querySelector('.loading');
  document.body.classList.add('no-scroll');
  setTimeout(() => {
    fadeOutLoadingScreen(loading);
  }, 3000);
}

function fadeOutLoadingScreen(loading) {
  loading.style.opacity = '0';
  setTimeout(() => {
    loading.style.display = 'none';
    document.body.classList.remove('no-scroll');
  }, 500);
}

function startBackgroundChange() {
  fetchImages();
  setInterval(changeBackground, 10000);
}

window.addEventListener('load', () => {
  handleLoadingScreen();
  startBackgroundChange();
});

let currentIndex = 0;
const aboutSections = document.querySelectorAll('.about-me');
const totalSections = aboutSections.length;
const indicators = document.querySelectorAll('.indicator');

function updateIndicators() {
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentIndex);
  });
}

function showSection(index) {
  aboutSections.forEach((section) => {
    section.classList.remove('show');
    section.style.display = 'none';
  });
  aboutSections[index].style.display = 'block';
  setTimeout(() => aboutSections[index].classList.add('show'), 10);
  updateIndicators();
}

function showNextSection() {
  currentIndex = (currentIndex + 1) % totalSections;
  showSection(currentIndex);
}

function showPrevSection() {
  currentIndex = (currentIndex - 1 + totalSections) % totalSections;
  showSection(currentIndex);
}

showSection(currentIndex);

const intervalId = setInterval(showNextSection, 3000);

document.getElementById('prevBtn').addEventListener('click', () => {
  clearInterval(intervalId);
  showPrevSection();
});

document.getElementById('nextBtn').addEventListener('click', () => {
  clearInterval(intervalId);
  showNextSection();
});

indicators.forEach((indicator) => {
  indicator.addEventListener('click', () => {
    clearInterval(intervalId);
    currentIndex = parseInt(indicator.dataset.index);
    showSection(currentIndex);
  });
});

let isNavOpen = false;

document.getElementById('nav-toggle').addEventListener('click', function () {
  const navList = document.getElementById('nav-list');
  navList.classList.toggle('show');

  if (isNavOpen) {
    this.style.animation = 'rotate-left 0.5s forwards';
  } else {
    this.style.animation = 'rotate-right 0.5s forwards';
  }

  isNavOpen = !isNavOpen;
});

setTimeout(() => {
  document.querySelector('.notice').style.opacity = '0';
  setTimeout(() => {
    document.querySelector('.notice').style.display = 'none';
  }, 500);
}, 5000);






// Script for Weather

const apiKey = "3d4873a8ff3de74bfa179951b7a4b04b";
let recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
let isCelsius = true;
const spinner = document.getElementById('spinner');
const weatherResult = document.getElementById('weather-result');
const errorMessage = document.getElementById('error-message');
const cityInput = document.getElementById('city');

window.onload = function () {
  getLocation();
  displayRecentSearches();
};

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
    const tempFahrenheit = (tempCelsius * 9 / 5) + 32;
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

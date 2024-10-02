// API endpoint and keys for Unsplash API
const unsplashApiUrl = 'https://api.unsplash.com/photos/random';
const apiKeys = [
    'ifSuj0vqKcFawQ_FJyDFdi6uvqHyGbhxsm-WGjNbFB8',// Key 1
    'AslxgBQoHEZ0M-e3_2q_4uUW49kblr5gNuCCaRe2emE',// Key 2
    'se9AuhPWYM-0h8T8VKHM0wda33rj6qwCGbPgg5Gp6_8',// Key 3
    'tCXdOMAjT4XMPZAlBJLCagdKAvYhkq3YxoETtWZfIyI',// Key 4
    'JgO-n_iMdueu294Yy5x3TbdIR_b7vvabA029POkdwdk',// Key 5
    'pHTJ6edBPLYg1qJmOoHrVRt37CkVMV6fh86wmtgCyj8',// Key 6
    'grSrZOvcY0AFbyt6UWZhIIYYajj05x5yPnt39GDNfoo',// Key 7
    'lGZm0LoZHFpw1JCi9rCCUrqT4bC2LFkGP8sqkL08_ok',// Key 8
    '9_k0edXZKyyU23YFJ1jygYseHPWne57-VGitwJpzjXs'
];

// Array of queries for specific types of images
const queries = ['Nature', 'Vehicle', 'Food', 'Travel', 'Science & Technology', 'Pets', 'Universe', 'Photography', 'Animals'];

let images = []; // Store fetched images
let currentImageIndex = 0; // Start with the first image
let currentApiKeyIndex = 0; // Start with the first API key

// Function to fetch random images based on themes
async function fetchImages() {
    for (const query of queries) {
        await fetchImage(query);
    }
    console.log('Images fetched:', images);
    changeBackground(); // Start background change after fetching
}

// Function to fetch a single image for a specific query
async function fetchImage(query) {
    try {
        const response = await fetch(`${unsplashApiUrl}?client_id=${apiKeys[currentApiKeyIndex]}&query=${query}`);
        
        if (!response.ok) {
            handleFetchError(query);
            return; // Exit the function after handling the error
        }

        const data = await response.json();
        images.push(data.urls.regular); // Store the regular-sized image
    } catch (error) {
        console.error(`Error fetching image for query "${query}":`, error);
    }
}

// Function to handle fetch errors and switch API keys
function handleFetchError(query) {
    console.warn(`Error fetching image for "${query}" with key index ${currentApiKeyIndex}:`);
    
    // Switch to the next API key
    currentApiKeyIndex = (currentApiKeyIndex + 1) % apiKeys.length;
    console.warn(`Switching to API key index ${currentApiKeyIndex}`);
    
    // Retry fetching the image for the same query with the new API key
    fetchImage(query);
}

// Function to change background image
function changeBackground() {
    if (images.length > 0) {
        const imageUrl = images[currentImageIndex]; // Get current image
        const img = new Image();
        
        img.src = imageUrl;
        img.onload = function() {
            // Set the background image only after it's fully loaded
            document.body.style.backgroundImage = `url('${imageUrl}')`; // Set background
            
            // Fade out the loading screen after the background is set
            const loading = document.querySelector('.loading');
            fadeOutLoadingScreen(loading);
        };
        
        img.onerror = function() {
            console.warn(`Failed to load image at "${imageUrl}". Switching API key and retrying...`);
            currentApiKeyIndex = (currentApiKeyIndex + 1) % apiKeys.length; // Switch to the next API key
            fetchImageForCurrentQuery(); // Retry fetching the image
        };
        
        currentImageIndex = (currentImageIndex + 1) % images.length; // Loop through images
    }
}

// Function to fetch image again with the current query
function fetchImageForCurrentQuery() {
    const currentQuery = queries[Math.floor(currentImageIndex / queries.length)];
    fetchImage(currentQuery);
}

// Function to handle loading screen behavior
function handleLoadingScreen() {
    const loading = document.querySelector('.loading'); // Select the loading element
    document.body.classList.add('no-scroll'); // Disable scrolling

    // Show loading for 3 seconds before starting fade out
    setTimeout(() => {
        fadeOutLoadingScreen(loading); // Call the fade-out function
    }, 3000); // Time to show loading (3000ms)
}

// Function to fade out the loading screen
function fadeOutLoadingScreen(loading) {
    loading.style.opacity = '0'; // Start fading out the loading screen

    // Remove loading screen after fade-out transition
    setTimeout(() => {
        loading.style.display = 'none'; // Remove from view
        document.body.classList.remove('no-scroll'); // Enable scrolling
    }, 500); // Duration of fade-out transition (500ms)
}

// Fetch new images and start cycling backgrounds
function startBackgroundChange() {
    fetchImages(); // Initial fetch
    setInterval(changeBackground, 10000); // Change every 10 seconds
}

// Start the process after the page loads
window.addEventListener('load', () => {
    handleLoadingScreen(); // Handle loading screen
    startBackgroundChange(); // Start changing backgrounds
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

// Initial section with animation
showSection(currentIndex);

const intervalId = setInterval(showNextSection, 3000);

// Handle button clicks
document.getElementById('prevBtn').addEventListener('click', () => {
    clearInterval(intervalId);
    showPrevSection();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    clearInterval(intervalId);
    showNextSection();
});

// Handle clicks on indicators
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

    // Apply rotation animation
    if (isNavOpen) {
        this.style.animation = 'rotate-left 0.5s forwards';
    } else {
        this.style.animation = 'rotate-right 0.5s forwards';
    }

    isNavOpen = !isNavOpen;
});

// Simple script to close the notice after a few seconds
setTimeout(() => {
    document.querySelector('.notice').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.notice').style.display = 'none';
    }, 500);
}, 5000);
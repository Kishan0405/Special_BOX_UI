function openNav() {
    document.getElementById("click").checked = true;
    const sidenav = document.querySelector('.sidenav');
    const mainContent = document.querySelector('#main-content');
    sidenav.style.transform = 'translateX(0px)';
    mainContent.style.marginLeft = '241px'; // Update the margin to push the content to the right
}

function closeNav() {
    document.getElementById("click").checked = false;
    const sidenav = document.querySelector('.sidenav');
    const mainContent = document.querySelector('#main-content');
    sidenav.style.transform = 'translateX(-200px)';
    mainContent.style.marginLeft = '0px';
}

document.getElementById('click').addEventListener('click', function () {
    if (this.checked) {
        openNav();
    } else {
        closeNav();
    }
});

document.getElementById('closebtn').addEventListener('click', function () {
    closeNav();
    document.getElementById('click').checked = false;
});

// Close the sidebar when clicking outside of it
document.addEventListener('click', function (event) {
    const sidenav = document.querySelector('.sidenav');
    const checkbox = document.getElementById('click');
    if (checkbox.checked && !sidenav.contains(event.target) && !event.target.matches('#click, #click *')) {
        closeNav();
    }
});

// Close the sidebar when the pageshow event occurs
window.addEventListener('pageshow', function (event) {
    if (event.persisted && document.referrer.includes('https://specialboxui.netlify.app/specialboxuimain/loading') ||
        document.referrer.includes('https://specialboxui.netlify.app/specialboxuimain/ratemysite') ||
        document.referrer.includes('https://tinyurl.com/myloginxregisteredusersonly') ||
        document.referrer.includes('https://specialboxui.netlify.app/specialboxuimain/undermaintainance') ||
        document.referrer.includes('https://specialboxui.netlify.app/specialboxuimain/donate&support') ||
        document.referrer.includes('https://specialboxui.netlify.app/specialboxuimain/about')) {
        window.location.reload();
    }
});

window.addEventListener('load', function() {
    const loading = document.getElementById('loading');
    document.body.classList.add('no-scroll'); // Disable scrolling

    setTimeout(() => {
        loading.style.display = 'none';
        document.body.classList.remove('no-scroll'); // Enable scrolling
    }, 2000); // Adjust the duration (2000ms for 2 seconds)
});

function toggleContent(event) {
    event.preventDefault();
    const link = event.target;
    const moreContent = link.previousElementSibling;

    if (moreContent.style.display === "none" || moreContent.style.display === "") {
        moreContent.style.display = "block";
        link.textContent = "Read less...";
    } else {
        moreContent.style.display = "none";
        link.textContent = "Read more...";
    }
};

// For About and Resume
// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Show/Hide Sections on Click (Optional for Resume/Details Toggle)
document.querySelectorAll('.section h2').forEach(sectionHeader => {
    sectionHeader.addEventListener('click', function () {
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});

// Script for Content Policy with smooth transition and arrow rotation
document.addEventListener("DOMContentLoaded", function () {
    const policySections = document.querySelectorAll(".policy-section");

    policySections.forEach(section => {
        const title = section.querySelector(".policy-title");
        const content = section.querySelector(".policy-content");

        // Add click event to the title
        title.addEventListener("click", () => {
            const isActive = content.classList.contains('active');

            // Collapse other sections by removing 'active' and 'collapsed' from all
            document.querySelectorAll('.policy-content').forEach(c => {
                c.classList.remove('active');
                c.style.maxHeight = null;
            });
            document.querySelectorAll('.policy-title').forEach(t => t.classList.remove('collapsed'));

            // Toggle the current section's active state
            if (!isActive) {
                content.classList.add('active');
                title.classList.add('collapsed');

                // Use max-height for smooth height transition
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.classList.remove('active');
                title.classList.remove('collapsed');
                content.style.maxHeight = null;
            }
        });
    });
});


//Script for Cookie Policy?//
// Function to check if cookies are already accepted
function checkCookieConsent() {
    return document.cookie.split('; ').find(row => row.startsWith('cookieConsent='));
}

// Function to hide the banner and set a cookie for consent
function acceptCookies() {
    document.cookie = "cookieConsent=true; path=/; max-age=" + 60*60*24*365;
    const banner = document.getElementById('cookieBanner');
    banner.classList.remove('show');
}

// Show banner if no cookie consent is given
window.onload = function() {
    const banner = document.getElementById('cookieBanner');
    if (!checkCookieConsent()) {
        banner.classList.add('show');
    }
}

// Event listener for the accept button
document.getElementById('acceptCookies').addEventListener('click', acceptCookies);


document.addEventListener('DOMContentLoaded', () => {
    const cookieBanner = document.getElementById('cookieBanner');
    const cookieOverlay = document.getElementById('cookieOverlay');
    const acceptCookiesBtn = document.getElementById('acceptCookies');
    const closeBannerBtn = document.getElementById('closeBanner');

    // Check if cookies have been accepted before
    if (!getCookie('cookies_accepted')) {
        showBanner();
    }

    // Accept cookies action
    acceptCookiesBtn.addEventListener('click', () => {
        setCookie('cookies_accepted', true, 365);
        hideBanner();
    });

    // Close the banner without accepting cookies
    closeBannerBtn.addEventListener('click', () => {
        hideBanner();
    });

    function showBanner() {
        cookieBanner.classList.add('show');
        cookieOverlay.classList.add('show');
    }

    function hideBanner() {
        cookieBanner.classList.remove('show');
        cookieOverlay.classList.remove('show');
    }

    // Set a cookie
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name}=${value}; ${expires}; path=/`;
    }

    // Get a cookie
    function getCookie(name) {
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookies = decodedCookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.indexOf(name + "=") == 0) {
                return cookie.substring((name + "=").length, cookie.length);
            }
        }
        return null;
    }
});



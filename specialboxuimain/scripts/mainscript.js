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



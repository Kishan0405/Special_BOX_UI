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

window.addEventListener('load', function () {
    const loading = document.getElementById('loading');
    document.body.classList.add('hide-contents'); // Add this line
    setTimeout(() => {
        loading.style.display = 'none';
        document.body.classList.remove('hide-contents'); // Add this line
        document.body.classList.remove('no-scroll');
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
}

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

//For About Me
document.getElementById("content-to-hide").style.display = "none";
document.getElementById("content-to-hide-1").style.display = "none";
document.getElementById("content-to-hide-2").style.display = "none";




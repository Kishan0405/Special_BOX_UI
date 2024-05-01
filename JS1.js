// JavaScript code to add class to the selected link in the navigation
document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navLinks.forEach(function(item) {
                item.classList.remove('selected');
            });
            this.classList.add('selected');
        });
    });
});

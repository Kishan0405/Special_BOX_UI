// Header
const header = document.getElementById("header");
header.innerHTML = `
    <img src="../allimages/mylogo.png" alt="Banner Image" style="align-items: center;">
    <nav>
        <ul id="nav-list">
            ${generateNavLinks()}
        </ul>
        <div class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
        </div>
    </nav>
`;

// Navigation
function generateNavLinks() {
    const navLinks = [
        { href: "../index", label: "Home" },
        { href: "services", label: "My Services" },
        { href: "recents", label: "Recents" },
        { href: "ratemysite", label: "Rate My Site" },
        { href: "https://specialboxui.free.nf/login", label: "Login" }
    ];

    return navLinks.map(link => `<li><a href="${link.href}">${link.label}</a></li>`).join('');
}

// About & Resume section content
const aboutResume = document.getElementById("about-resume");
aboutResume.innerHTML = `
    <h2>About Me</h2>
    <p>
        I am currently pursuing a Bachelor of Technology in Biotechnology at N M A M Institute of Technology, Nitte,
        part of Nitte University. As a passionate web developer, I enjoy creating dynamic websites and working with
        modern technologies.
    </p>
    <p>
        My free time is often spent learning new skills or exploring exciting projects related to web development,
        technology, and gaming. I am always open to collaboration and look forward to new opportunities to innovate
        and grow in the field of technology.
    </p>
`;

// Resume Container content
const resumeContainer = document.getElementById("resume-container");
resumeContainer.innerHTML = `
    <div class="header-resume">
        <img id="profile-photo" src="../allimages/myphoto.jpg" alt="Your Photo" class="profile-photo">
        <h1>Kishan Raj</h1>
        <p>Student | B.Tech Biotechnology</p>
        <label for="photo-select">Choose Profile Photo:</label>
        <select id="photo-select">
            <option value="../allimages/myphoto.jpg">Photo 1</option>
            <option value="../allimages/myphoto2.jpg">Photo 2</option>
        </select>
    </div>

    <div class="content-about-resume">
        <section class="section-about-resume">
            <h2>Contact Information</h2>
            <p>Email: <a href="mailto:kishanbantakal@gmail.com">kishanbantakal@gmail.com</a></p>
            <p>Phone: <a href="tel:+917338323960">+91 7338323960</a></p>
            <p>Address: 1-138 Kishan Nilaya, Podamale, Bantakal, Udupi, Karnataka, India. Zip:574115</p>
        </section>
        ${generateEducationSection()}
        ${generateExperienceSection()}
        <section class="section-about-resume">
            <h2>Skills</h2>
            <ul>
                <li>Microsoft PowerPoint</li>
                <li>HTML, CSS</li>
                <li>Python, MySQL</li>
                <li>PHP, JavaScript</li>
            </ul>
        </section>
    </div>
`;

// Education Section
function generateEducationSection() {
    return `
        <section class="section-about-resume">
            <h2>Education</h2>
            <p><strong>NITTE University</strong> — Mangalore, Karnataka</p>
            <p><strong>NMAM Institute of Technology, Nitte</strong> — Karkala Taluk, Udupi, Karnataka, 574110</p>
            <p>Bachelor of Technology (B.Tech) in Biotechnology</p>
            <p>Expected Graduation: May 2027</p>

             <h2></h2>

            <p><strong>Karnataka School Examination and Assessment Board</strong> — Bangalore, Karnataka</p>
            <p><strong>S V H Pre-University College, Innanje</strong> — Kapu Taluk, Udupi, Karnataka, 574122</p>
            <p>Pre-University (PUC) — Physics, Chemistry, Mathematics, and Biology (PCMB)</p>
            <p>Completed: April 2023</p>

            <h2></h2>

            <p><strong>Karnataka School Examination and Assessment Board</strong> — Bangalore, Karnataka</p>
            <p><strong>S V H High School, Innanje</strong> — Kapu Taluk, Udupi, Karnataka, 574122</p>
            <p>SSLC — English, Hindi, Kannada, Mathematics, Science, Social Studies</p>
            <p>Completed: July 2021</p>
        </section>
    `;
}

// Experience Section
function generateExperienceSection() {
    return `
        <section class="section-about-resume">
            <h2>Experience</h2>
            <p><strong>Developing Personal Website for Resume</strong> — NMAMIT, Nitte</p>
            <p>March 2023 – Present</p>
            <p><a href="https://specialboxui.netlify.app/">Visit My Personal Website</a></p>
            <ul>
                <li>Developing a personal website to gain practical experience in web development and design.</li>
                <li>Utilizing textbooks and AI tools to enhance coding skills and stay updated with modern technologies.</li>
                <li>Continuously refining and optimizing the website for a professional online presence.</li>
            </ul>
        </section>

        <section class="section-about-resume">
            <h2>Internship</h2>

            <p><strong>Internship: "Emerging Trends in Agricultural Technology"</strong> - NMAMIT, Nitte</p>
            <p>October 2023 - April 2024 </p>
            <p>Click on the title to access the final report on <a
                    href="https://tinyurl.com/internshipreport2023-24">'Emerging Trends in Agricultural
                    Technology.'</a></p>
            <ul>
                <li>Gained hands-on experience in modern agricultural technologies.</li>
                <li>Explored advancements in agricultural machinery, biotechnology, and sustainable practices.</li>
                <li>Participated in visit-based learning and achieved industry-relevant objectives.</li>
            </ul>
        </section>

        <section id="about-me" style="display: none;">
    <div class="about-me fade">
        <i id="prevBtn" class="fas fa-chevron-left" aria-label="Previous"></i>
        <i id="nextBtn" class="fas fa-chevron-right" aria-label="Next"></i>
    </div>
</section>
    `;
}

// Footer content
const footer = document.getElementById("footer");
footer.innerHTML = `
    <div class="footer-container">
        <div class="footer-links">
            <a href="https://nmamit.nitte.edu.in">About my Institution</a>
            <a href="careers">Careers</a>
            <a href="blog">Blog</a>
            <a href="donate&support">Donate & Support</a>
        </div>
        <div class="footer-links">
            <a href="userterms">User Terms</a>
            <a href="contentpolicyfaqs">Join My Community</a>
            <a href="communityguidelines">Community Guidelines</a>
            <a href="contentpolicy">Content Policy</a>
        </div>
        <div class="social-icons">
            <a href="https://www.linkedin.com/in/kishanbantakal/"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/Kishan0405/Special_BOX_UI"><i class="fab fa-github"></i></a>
            <a href="http://t.me/kishanbantakal"><i class="fab fa-telegram"></i></a>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy;2024 Special BOX UI || Made by One Person || Kishan Raj</p>
    </div>
`;

// Handle Profile Photo selection
document.getElementById("photo-select").addEventListener("change", function () {
    var selectedPhoto = this.value;
    document.getElementById("profile-photo").src = selectedPhoto;
});

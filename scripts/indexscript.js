// Create the HTML elements
const html = document.createElement('html');
html.setAttribute('lang', 'en');

const head = document.createElement('head');
const body = document.createElement('body');

// Set up the head section
const metaCharset = document.createElement('meta');
metaCharset.setAttribute('charset', 'UTF-8');

const metaViewport = document.createElement('meta');
metaViewport.setAttribute('name', 'viewport');
metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');

const metaIE = document.createElement('meta');
metaIE.setAttribute('http-equiv', 'X-UA-Compatible');
metaIE.setAttribute('content', 'IE=edge');

const title = document.createElement('title');
title.textContent = 'Home';

const linkStylesheet = document.createElement('link');
linkStylesheet.setAttribute('rel', 'stylesheet');
linkStylesheet.setAttribute('href', 'styles/stylesindex.css');

const linkFontAwesome = document.createElement('link');
linkFontAwesome.setAttribute('rel', 'stylesheet');
linkFontAwesome.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

const linkIcon = document.createElement('link');
linkIcon.setAttribute('rel', 'icon');
linkIcon.setAttribute('type', 'image/png');
linkIcon.setAttribute('href', 'allimages/mylogo2.png');

// Append head elements
head.appendChild(metaCharset);
head.appendChild(metaViewport);
head.appendChild(metaIE);
head.appendChild(title);
head.appendChild(linkStylesheet);
head.appendChild(linkFontAwesome);
head.appendChild(linkIcon);

// Set up the body content
const loadingDiv = document.createElement('div');
loadingDiv.className = 'loading';
loadingDiv.innerHTML = `
  <img src="allimages/mylogo2.png" alt="Loading Logo" class="logo">
  <div class="loading-text">Loading, please wait...</div>
`;

const header = document.createElement('header');
header.innerHTML = `
  <img src="allimages/mylogo.png" alt="Banner Image" style="align-items: center;">
  <nav>
      <ul id="nav-list">
          <li><a href="index">Home</a></li>
          <li><a href="specialboxuimain/about">About Me</a></li>
          <li><a href="specialboxuimain/services">My Services</a></li>
          <li><a href="specialboxuimain/ratemysite">Rate My Site</a></li>
          <li><a href="https://specialboxui.free.nf/login">Login</a></li>
      </ul>
      <div class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
      </div>
  </nav>
`;

const containerDiv = document.createElement('div');
containerDiv.className = 'container';
containerDiv.innerHTML = `
  <aside class="sidebar">
      <h2>Note: File directories are as follows:</h2>
      <p>This site's links have been temporarily redirected to Netlify.app for project development purposes, diverging from the original GitHub setup. This configuration will be updated soon. </p>
      <ul>
          <li>Home: index.html</li>
          <li>About Me: specialboxuimain/about.html</li>
          <li>My Services: specialboxuimain/services.html</li>
      </ul>
  </aside>
  <main class="content">
      <h2>Contents/Posts</h2>
      <ol>
          <li><a href="https://specialboxui.netlify.app/specialboxuimain/specialboxai/specialboxai" style="text-decoration: none; color: black;">Special BOX AI</a></li>
          <li><a href="https://specialboxui.free.nf/displayimagesherespecialboxuiforfreeusers.php" style="text-decoration: none; color: black;">Special BOX UI Images</a></li>
          <li><a href="https://specialboxui.free.nf/displayvideosherespecialboxuiforfreeusers.php" style="text-decoration: none; color: black;">Special BOX UI Videos</a></li>
          <li><a href="https://specialboxui.netlify.app/specialboxuimain/specialboxuiquizinstructions/instructionsquizancienthistoryindia" style="text-decoration: none; color: black;">Quiz on Ancient History of India</a></li>
          <li><a href="https://specialboxui.netlify.app/specialboxuimain/specialboxuiquizinstructions/instructionsquizelectronicsandcomputers" style="text-decoration: none; color: black;">Quiz on Electronics and Computers</a></li>
      </ol>
  </main>
`;

const section = document.createElement('section');
section.innerHTML = `
  <div class="about-me fade" id="about-me">
      <h2>About Me</h2>
      <div class="image-container">
          <img src="allimages/myphoto.jpg" alt="A brief description of the image">
      </div>
      <p>Hello! I'm Kishan Raj, a passionate learner and aspiring developer.</p>
      <p>I enjoy creating websites and enhancing my programming skills. My goal is to build a professional online presence.</p>
      <p>Feel free to reach out to me through the contact page!</p>
  </div>

  <div class="about-me fade" style="display: none;">
      <h2>More About Me</h2>
      <div class="image-container">
          <img src="allimages/myphoto.jpg" alt="A brief description of the image">
      </div>
      <p>I have a keen interest in web development, data analysis, and exploring new technologies.</p>
      <p>In my spare time, I enjoy reading books, hiking, and contributing to open-source projects.</p>
      <p>I believe in continuous learning and strive to improve my skills every day.</p>
  </div>

  <div class="about-me fade" style="display: none;">
      <h2>My Future Goals</h2>
      <div class="image-container">
          <img src="allimages/myphoto.jpg" alt="A brief description of the image">
      </div>
      <p>My aim is to work in a dynamic team where I can contribute to impactful projects.</p>
      <p>I want to continue learning and developing my skills in programming and data science.</p>
      <p>Ultimately, I hope to make a positive difference through technology.</p>
  </div>

  <div class="navigation">
      <i id="prevBtn" class="fas fa-chevron-left" aria-label="Previous"></i>
      <i id="nextBtn" class="fas fa-chevron-right" aria-label="Next"></i>
  </div>

  <div class="indicators">
      <span class="indicator" data-index="0">•</span>
      <span class="indicator" data-index="1">•</span>
      <span class="indicator" data-index="2">•</span>
  </div>
`;

const footer = document.createElement('footer');
footer.innerHTML = `
  <style>

  </style>
  <div class="footer-container">
      <div class="footer-links">
          <a href="https://specialboxui.netlify.app/specialboxuimain/about">About Me</a>
          <a href="https://specialboxui.netlify.app/specialboxuimain/careers">Careers</a>
          <a href="https://specialboxui.netlify.app/specialboxuimain/blog">Blog</a>
          <a href="https://specialboxui.netlify.app/specialboxuimain/donate&support">Donate & Support</a>
      </div>
      <div class="footer-links">
          <a href="https://specialboxui.netlify.app/specialboxuimain/userterms">User Terms</a>
          <a href="https://specialboxui.netlify.app/specialboxuimain/communityguidelines">Community Guidelines</a>
          <a href="https://specialboxui.netlify.app/specialboxuimain/contentpolicy">Content Policy</a>
          <a href="https://specialboxui.netlify.app/specialboxuimain/contentpolicyfaqs">Content Policy FAQs</a>
      </div>
      <div class="footer-links">
          <a href="https://specialboxui.netlify.app/specialboxuimain/cookiepolicy">Cookie Policy</a>
          <a href="https://specialboxui.netlify.app/specialboxuimain/privacypolicy">Privacy Policy</a>
          <a href="https://specialboxui.netlify.app/specialboxuimain/dataprotectionagreement">Data Protection Agreement</a>
      </div>
      <div class="social-icons">
          <a href="https://x.com/"><i class="fab fa-twitter"></i></a>
          <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
          <a href="https://www.linkedin.com/in/kishanbantakal/"><i class="fab fa-linkedin-in"></i></a>
          <a href="https://instagram.com/"><i class="fab fa-instagram"></i></a>
      </div>
  </div>
  <div class="footer-bottom">
      <p>&copy;2024 Special BOX UI || Made by One Person || Kishan Raj</p>
  </div>
`;

// Append body elements
body.appendChild(loadingDiv);
body.appendChild(header);
body.appendChild(containerDiv);
body.appendChild(section);
body.appendChild(footer);

// Append scripts
const scriptMain = document.createElement('script');
scriptMain.src = 'scripts/mainscript.js';

const scriptInject = document.createElement('script');

const scriptBPContent = document.createElement('script');

body.appendChild(scriptMain);
body.appendChild(scriptInject);
body.appendChild(scriptBPContent);

// Append head and body to html
html.appendChild(head);
html.appendChild(body);

// Append html to the document
document.body.appendChild(html);
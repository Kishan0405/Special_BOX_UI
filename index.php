<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>My Personal Website</title>

    <!-- Meta Tags for SEO -->
    <meta name="description" content="A personal website showcasing my skills, projects, and contact information.">
    <meta name="keywords" content="Personal website, Projects, Coding, BotpressGPT">
    <meta name="author" content="BotpressGPT">

    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">

    <!-- Stylesheet -->
    <link rel="stylesheet" href="style.css">

    <!-- Styles -->
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Poppins', sans-serif;
            color: #333;
            line-height: 1.6;
            position: relative;
            overflow-x: hidden;
        }

        /* Fullscreen Background Video */
        #bg-video {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: -1;
            filter: brightness(50%);
        }

        /* Header Styles */
        header {
            background-color: rgba(0, 0, 0, 0.7);
            padding: 20px 0;
            color: white;
            position: sticky;
            top: 0;
            width: 100%;
            z-index: 1000;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .container {
            width: 85%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo h1 {
            font-size: 26px;
            font-weight: 700;
        }

        nav ul {
            list-style: none;
            display: flex;
        }

        nav ul li {
            margin-right: 20px;
        }

        nav ul li a {
            color: white;
            text-decoration: none;
            font-size: 18px;
            transition: color 0.3s ease;
        }

        nav ul li a:hover {
            color: #3498db;
        }

        .menu-toggle {
            display: none;
            color: white;
            background-color: #333;
            border: none;
            font-size: 18px;
            cursor: pointer;
        }

        /* Intro Section */
        .intro {
            text-align: center;
            padding: 150px 0;
            color: white;
            z-index: 10;
            position: relative;
        }

        .intro h2 {
            font-size: 48px;
            margin-bottom: 20px;
            letter-spacing: 1.5px;
            text-transform: uppercase;
        }

        .intro p {
            font-size: 20px;
            margin-bottom: 30px;
        }

        /* Projects Section */
        #projects {
            padding: 80px 0;
            background-color: #f9f9f9;
        }

        h2 {
            text-align: center;
            font-size: 30px;
            margin-bottom: 40px;
            letter-spacing: 1.5px;
            text-transform: uppercase;
        }

        .project-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            padding: 0 40px;
        }

        .project {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .project:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .project h3 {
            font-size: 22px;
            margin-bottom: 10px;
        }

        .project p {
            font-size: 16px;
            margin-bottom: 15px;
        }

        .project a {
            text-decoration: none;
            color: #3498db;
            font-weight: bold;
            transition: color 0.3s ease;
        }

        .project a:hover {
            color: #2980b9;
        }

        /* Back to Top Button */
        #backToTop {
            display: none;
            position: fixed;
            bottom: 30px;
            right: 30px;
            background-color: #3498db;
            color: white;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        footer {
            text-align: center;
            padding: 20px;
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            position: relative;
            width: 100%;
        }

        /* Responsive Design */
        @media screen and (max-width: 768px) {
            .menu-toggle {
                display: block;
            }

            nav ul {
                display: none;
                flex-direction: column;
            }

            nav ul.show {
                display: flex;
            }

            .intro {
                padding: 80px 0;
            }
        }
    </style>
</head>

<body>
    <!-- Background Video -->
    <video id="bg-video" autoplay loop muted>
        <source src="your-video.mp4" type="video/mp4">
        <!-- Fallback image if video fails to load -->
        <img src="background.jpg" alt="Background Image">
    </video>

    <?php 
    $today = date('F j, Y');
    $username = 'BotpressGPT';
    ?>
    
    <!-- Header Section -->
    <header>
        <div class="container">
            <div class="logo">
                <h1>Welcome to <?php echo $username; ?>'s Website</h1>
            </div>
            <nav>
                <ul id="navbar">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <button class="menu-toggle" onclick="toggleMenu()">More</button>
            </nav>
        </div>
    </header>

    <!-- Main Content Section -->
    <main id="home">
        <section class="intro">
            <h2>Hi, I'm <?php echo $username; ?></h2>
            <p>Today is <?php echo $today; ?>. I’m passionate about coding, technology, and creating intuitive user experiences.</p>
        </section>

        <!-- Dynamic Projects Section from PHP Array -->
        <section id="projects">
            <h2>My Projects</h2>
            <div class="project-grid">
                <?php
                $projects = [
                    ['title' => 'Project One', 'description' => 'A cool project about tech', 'link' => '#'],
                    ['title' => 'Project Two', 'description' => 'A mobile-first design project', 'link' => '#'],
                    ['title' => 'Project Three', 'description' => 'AI and Data Analysis', 'link' => '#']
                ];
                foreach ($projects as $project) {
                    echo "<div class='project'>
                            <h3>{$project['title']}</h3>
                            <p>{$project['description']}</p>
                            <a href='{$project['link']}'>View Project</a>
                          </div>";
                }
                ?>
            </div>
        </section>
    </main>

    <!-- Back to Top Button -->
    <div id="backToTop" onclick="scrollToTop()">&#8679; Back to Top</div>

    <!-- Footer Section -->
    <footer>
        <p>&copy; <?php echo date('Y'); ?> <?php echo $username; ?>. All rights reserved.</p>
    </footer>

    <script>
        function toggleMenu() {
            const navbar = document.getElementById('navbar');
            navbar.classList.toggle('show');
        }

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Back to Top Button
        window.onscroll = function() {
            const backToTopButton = document.getElementById('backToTop');
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        };

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    </script>
</body>
</html>

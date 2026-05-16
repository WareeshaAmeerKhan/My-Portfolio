// Project Data
const projectsData = {
    stegosec: {
        title: "StegoSec",
        tech: ["React", "Web Crypto API", "JavaScript", "LSB Steganography"],
        desc: "Built a browser-based secure communication system using steganography, deniable encryption, and self-destructing messages. Implemented LSB-based image steganography, Chi-square steganalysis, and forensic watermarking for covert data embedding and detection.",
        role: "Steganography & Digital Forensics Engineer",
        link: "https://github.com/WareeshaAmeerKhan/StegoSec"
    },
    tribase: {
        title: "TriBase",
        tech: ["Node.js", "PostgreSQL", "MongoDB", "JWT", "React"],
        desc: "Interactive learning platform for databases (PostgreSQL, MongoDB, Neo4j) with lessons, quizzes, and query practice. Designed and implemented MongoDB learning module, progress tracking, XP system, and MQL lesson data management.",
        role: "MongoDB Lead & Progress Tracking Engineer",
        link: "https://github.com/WareeshaAmeerKhan/TriBase"
    },
    agentiq: {
        title: "AgentIQ",
        tech: ["Python", "C#", "OOP", "Data Structures", "AI Search"],
        desc: "Interactive simulator for AI search algorithms with real-time visualizations and explanations. Designed and implemented a logical AI agent using knowledge base, inference rules, and context-aware response generation with fallback handling.",
        role: "Logical Agent Developer",
        link: "https://github.com/WareeshaAmeerKhan/AgentIQ"
    },
    logicTrace: {
        title: "Logic Trace",
        tech: ["C#", "MySQL", "WinForms"],
        desc: "A platform for learning Data Structures and Algorithms with interactive features. Implemented admin management system, feedback module, and database integration for system functionality.",
        role: "Desktop Application Developer (Full Stack)",
        link: "https://github.com/WareeshaAmeerKhan/LogicTrace-DSA-Learning-Platform"
    },
    teletell: {
        title: "TeleTell",
        tech: ["C#", "WinForms", "MySQL"],
        desc: "An interactive desktop-based social media application enabling user posts, likes, and comments with an interactive interface. Designed and integrated a MySQL database for efficient storage, retrieval, and management of user data and interactions.",
        role: "Software Developer (Full Stack Systems)",
        link: "https://github.com/WareeshaAmeerKhan/TeleTell-SocialMediaPlatform"
    },
    aerosync: {
        title: "AeroSync",
        tech: ["C#", "WinForms", "MySQL"],
        desc: "A desktop-based airline management system handling flights, bookings, passengers, and payments using a layered architecture. Designed and implemented a relational database with interconnected tables, along with CRUD operations, authentication, and exception handling.",
        role: "Software Developer (Full Stack Systems)",
        link: "https://github.com/WareeshaAmeerKhan/AeroSync_Airline-Management-System"
    },
    pakAnimals: {
        title: "Pak Animals App (Qurbani App)",
        tech: ["C++", "C#", "File Handling", "MySQL"],
        desc: "Developed a console-based application to manage buying and selling of animals with role-based access (admin, seller, buyer). Implemented core functionalities including inventory management, purchasing, and sales tracking using file handling for persistent storage.",
        role: "Full Stack Developer",
        link: "https://github.com/WareeshaAmeerKhan/Pak-Animals-App"
    },
    itecEvent: {
        title: "ITEC Event Management Website",
        tech: ["HTML", "CSS", "Java"],
        desc: "Collaborated in a team of 4 to develop a responsive event management website. Led the design and development of the Contact Us and Our Services pages with intuitive navigation and user-friendly UI.",
        role: "Frontend Developer & Team Lead",
        link: "https://github.com/WareeshaAmeerKhan/ITEC-Event-Management-System"
    },
    pestShooter: {
        title: "Pest Shooter Console Game",
        tech: ["C++", "OOP"],
        desc: "Developed an interactive console-based shooting game using Object-Oriented Programming concepts. Implemented core game mechanics including player movement, collision detection, obstacles, and level progression using inheritance and polymorphism.",
        role: "Game Developer",
        link: "https://github.com/WareeshaAmeerKhan/Pest-Shooter-Game"
    },
    smartNoticeBoard: {
        title: "Smart Digital Notice Board",
        tech: ["HTML", "CSS", "JS", "Node.js", "MySQL", "MQTT", "ESP32"],
        desc: "IoT system integrating ESP32 hardware with web-based admin platform for real-time digital notice display. Developed backend & database system with MySQL, REST APIs, and MQTT-based real-time updates including automated announcement expiry and timetable management.",
        role: "Backend & Database Engineer",
        link: null
    },
    waterLevelSensor: {
        title: "Water Level Sensor with 7 Segment Display",
        tech: ["Hardware", "Embedded Systems", "Arduino"],
        desc: "Hardware-based project implementing water level detection using sensors and displaying output on 7-segment display. Built with embedded systems principles.",
        role: "Hardware Engineer",
        link: null
    }
};

const allProjectsList = [
    "stegosec", "tribase", "agentiq", "logicTrace", "teletell", "aerosync",
    "pakAnimals", "itecEvent", "pestShooter", "smartNoticeBoard", "waterLevelSensor"
];

// Loading Bar
window.addEventListener('beforeunload', () => {
    const loadingBar = document.querySelector('.loading-bar');
    if (loadingBar) loadingBar.style.width = '100%';
});

// Typing Animation 
function startTypingAnimation() {
    const words = [
        "Full-Stack Developer",
        "AI Explorer",
        "Security Enthusiast",
        "Graphic Designer",
        "Problem Solver"
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typedElement = document.querySelector('.typed-text');
    
    if (!typedElement) return;
    
    function type() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            typedElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 50 : 100);
        }
    }
    type();
}

// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

if (cursor && cursorFollower) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
        cursorFollower.style.transform = `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`;
    });
    
    document.querySelectorAll('a, button, .btn-details').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursorFollower.style.transform = 'scale(1.5)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursorFollower.style.transform = 'scale(1)';
        });
    });
}

// Dark/Light Mode
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.documentElement.classList.add('light-mode');
        themeToggle.textContent = '☀️';
    }
    
    themeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('light-mode');
        const isLight = document.documentElement.classList.contains('light-mode');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        themeToggle.textContent = isLight ? '☀️' : '🌙';
    });
}

// Modal Functionality
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalTech = document.getElementById('modalTech');
const modalDesc = document.getElementById('modalDesc');
const modalRole = document.getElementById('modalRole');
const modalLink = document.getElementById('modalLink');

function showModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;
    
    modalTitle.textContent = project.title;
    modalTech.innerHTML = project.tech.map(tech => `<span>${tech}</span>`).join('');
    modalDesc.textContent = project.desc;
    modalRole.innerHTML = `<strong>My Role:</strong> ${project.role}`;
    
    if (project.link) {
        modalLink.href = project.link;
        modalLink.style.display = 'inline-block';
    } else {
        modalLink.style.display = 'none';
    }
    
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

if (modal) {
    document.querySelectorAll('.btn-details').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const projectId = btn.getAttribute('data-project');
            if (projectId && projectsData[projectId]) {
                showModal(projectId);
            }
        });
    });
    
    document.querySelector('.modal-close')?.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

// Magnetic Card Tilt
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        const inner = card.querySelector('.card-inner');
        if (inner) {
            inner.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
        }
    });
    
    card.addEventListener('mouseleave', () => {
        const inner = card.querySelector('.card-inner');
        if (inner) {
            inner.style.transform = 'rotateY(0deg) rotateX(0deg)';
        }
    });
});

// Load projects on projects page
if (window.location.pathname.includes('projects.html')) {
    const grid = document.getElementById('allProjectsGrid');
    if (grid) {
        allProjectsList.forEach(projectId => {
            const project = projectsData[projectId];
            if (project) {
                const card = document.createElement('div');
                card.className = 'project-card';
                card.setAttribute('data-project', projectId);
                card.innerHTML = `
                    <div class="card-inner">
                        <div class="card-front">
                            <div class="card-icon">${getIconForProject(projectId)}</div>
                            <h3>${project.title}</h3>
                            <p class="card-tech">${project.tech.slice(0, 3).join(' · ')}</p>
                            <p class="card-desc">${project.desc.substring(0, 100)}${project.desc.length > 100 ? '...' : ''}</p>
                            <button class="btn-details" data-project="${projectId}">Details →</button>
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            }
        });
        
        document.querySelectorAll('.btn-details').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const projectId = btn.getAttribute('data-project');
                if (projectId && projectsData[projectId]) {
                    showModal(projectId);
                }
            });
        });
        
        // Re-apply tilt effect to dynamically added cards
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                const inner = card.querySelector('.card-inner');
                if (inner) {
                    inner.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
                }
            });
            
            card.addEventListener('mouseleave', () => {
                const inner = card.querySelector('.card-inner');
                if (inner) {
                    inner.style.transform = 'rotateY(0deg) rotateX(0deg)';
                }
            });
        });
    }
}

function getIconForProject(projectId) {
    const icons = {
        stegosec: '🔒', tribase: '🗄️', agentiq: '🤖', logicTrace: '📚',
        teletell: '💬', aerosync: '✈️', pakAnimals: '🐄', itecEvent: '🎪',
        pestShooter: '🎮', smartNoticeBoard: '📢', waterLevelSensor: '💧'
    };
    return icons[projectId] || '📁';
}

// Scroll Reveal Animation for ALL elements on ALL pages
function initScrollReveal() {
    // Select all elements that need animation on all pages
    const revealElements = document.querySelectorAll(
        '.project-card, .stat-circle, .skill-group, .exp-card, ' +
        '.timeline-item, .skill-category, .soft-skills-grid span, ' +
        '.coursework-grid span, .experience-card, .leadership-card, .stat-card-large'
    );
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
            } else {
                // Remove class to allow re-animation when scrolling back up
                entry.target.classList.remove('reveal-active');
                // Force reflow
                void entry.target.offsetHeight;
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    revealElements.forEach(el => {
        observer.observe(el);
    });
}

// Smooth Scroll for Navbar Links on Homepage
function initSmoothScroll() {
    document.querySelectorAll('.nav-link[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                history.pushState(null, null, targetId);
            }
        });
    });
}

// Smooth Page Transitions
function initPageTransitions() {
    document.querySelectorAll('.page-link, .btn-primary[href*=".html"], .btn-outline[href*=".html"], .nav-links a[href*=".html"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && !href.startsWith('http') && !href.startsWith('#') && href !== 'javascript:void(0)') {
                e.preventDefault();
                document.body.classList.add('page-transition-out');
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            }
        });
    });
}

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Active Nav Link on Scroll (for homepage)
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
            const id = section.getAttribute('id');
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Initialize everything on load
window.addEventListener('load', () => {
    const loadingBar = document.querySelector('.loading-bar');
    if (loadingBar) {
        setTimeout(() => {
            loadingBar.style.width = '0%';
        }, 500);
    }
    
    if (document.querySelector('.typed-text')) {
        startTypingAnimation();
    }
    
    document.body.classList.remove('page-transition-out');
    
    initScrollReveal();
    initSmoothScroll();
    initPageTransitions();
    
    // Force a scroll event to trigger any initial animations
    setTimeout(() => {
        window.dispatchEvent(new Event('scroll'));
    }, 100);
});
// 1. Form Validation for Contact Form with Dynamic Error Messages
document.getElementById('contactForm').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    let errorMessages = [];
    if (name === "") errorMessages.push("Name is required.");
    if (email === "") errorMessages.push("Email is required.");
    if (message === "") errorMessages.push("Message is required.");
    
    if (errorMessages.length > 0) {
        event.preventDefault(); // Prevent form submission
        let errorContainer = document.getElementById('errorMessages');
        errorContainer.innerHTML = errorMessages.join('<br>');
        errorContainer.style.display = 'block'; // Show error messages
    } else {
        alert("Thank you for your message! We will get back to you soon.");
    }
});

// 2. Smooth Scroll for Navigation with Highlighting Active Link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav ul li a');

    sections.forEach(section => {
        let rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === section.id) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// 3. Interactive Project Display with Categories and Filter
const projects = [
    {
        title: 'AI-Powered Virtual Keyboard',
        description: 'A keyboard that predicts words in real-time.',
        category: 'AI',
        link: 'https://github.com/your-repo/keyboard'
    },
    {
        title: 'E-Commerce Website',
        description: 'Designed and developed a dynamic e-commerce platform.',
        category: 'Web Development',
        link: 'https://github.com/your-repo/e-commerce'
    },
    {
        title: 'Portfolio Website',
        description: 'Personal portfolio to showcase my skills and projects.',
        category: 'Web Development',
        link: 'https://github.com/your-repo/portfolio'
    },
    {
        title: 'AI Chatbot',
        description: 'An intelligent chatbot that provides assistance.',
        category: 'AI',
        link: 'https://github.com/your-repo/chatbot'
    }
];

function displayProjects(categoryFilter = null) {
    const projectContainer = document.querySelector('.featured');
    projectContainer.innerHTML = ''; // Clear existing projects

    const filteredProjects = categoryFilter 
        ? projects.filter(project => project.category === categoryFilter) 
        : projects;

    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        
        projectCard.addEventListener('click', function() {
            openProjectModal(project);
        });

        projectContainer.appendChild(projectCard);
    });
}

// Event listener to handle project category filter
document.getElementById('categoryFilter').addEventListener('change', function(e) {
    displayProjects(e.target.value);
});

// 4. Project Modal for Detailed View
function openProjectModal(project) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>${project.title}</h2>
            <p><strong>Description:</strong> ${project.description}</p>
            <p><strong>Category:</strong> ${project.category}</p>
            <a href="${project.link}" target="_blank">View Full Project</a>
        </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.close').addEventListener('click', function() {
        document.body.removeChild(modal);
    });
}

// Initial load of all projects
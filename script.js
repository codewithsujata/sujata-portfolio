// Array of professions to display
const professions = ["Freelancer", "Developer", "Designer"];
let professionIndex = 0;
let charIndex = 0;
let currentProfession = "";
let isDeleting = false;
const typingSpeed = 150;
const deleteSpeed = 75;
const delayBetweenProfessions = 2000;

// Function to handle typing effect
function typeProfession() {
    const professionElement = document.getElementById("dynamic-profession");
    
    // If deleting, remove one character at a time
    if (isDeleting) {
        currentProfession = professions[professionIndex].substring(0, charIndex--);
    } else {
        currentProfession = professions[professionIndex].substring(0, charIndex++);
    }
    
    // Update the displayed text
    professionElement.textContent = currentProfession;
    
    // If not deleting and the profession is fully typed
    if (!isDeleting && charIndex === professions[professionIndex].length) {
        // Wait for a while and then start deleting
        setTimeout(() => isDeleting = true, delayBetweenProfessions);
    }
    
    // If deleting and all characters are removed
    if (isDeleting && charIndex === 0) {
        // Move to the next profession
        professionIndex = (professionIndex + 1) % professions.length;
        isDeleting = false;
    }
    
    // Call the function recursively to create the typing effect
    setTimeout(typeProfession, isDeleting ? deleteSpeed : typingSpeed);
}

// Start the typing effect when the page loads
document.addEventListener("DOMContentLoaded", typeProfession);
const hamburger = document.getElementById('hamburger');
const cross = document.getElementById('cross');
const sidebar = document.getElementById('sidebar');

// Show sidebar when hamburger is clicked
hamburger.addEventListener('click', () => {
    sidebar.classList.add('active');
    hamburger.style.display = 'none';
    cross.classList.add('active');
});

// Hide sidebar when cross is clicked
cross.addEventListener('click', () => {
    sidebar.classList.remove('active');
    cross.classList.remove('active');
    hamburger.style.display = 'block';
});


// Wait until the page is fully loaded
window.addEventListener('load', function() {
    // Select the h1 and p elements
    const heading = document.querySelector('.content h1');
    const paragraph = document.querySelector('.content p');
    
    // Add the 'animate' class to both elements for triggering animation
    heading.classList.add('animate');
    paragraph.classList.add('animate');
});



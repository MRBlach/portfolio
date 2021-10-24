
//  Display navigation
document.getElementById('navigation').innerHTML = `
<section id="navbar">
  <div class="brand-name">
    <div class="dropdown">
      <button href="#" class="dropBtn btn" id="brand-name">MRBLACH</button> 
      <div class="dropdown-content">
        <a href="https://www.facebook.com/melody.blachowicz" rel="noopener" target="_blank"><i class="fab fa-facebook-square"></i></a>
        <a href="https://www.linkedin.com/in/mrblach" rel="noopener" target="_blank"><i class="fab fa-linkedin"></i></a>
        <a href="https://www.github.com/mrblach" rel="noopener" target="_blank"><i class="fab fa-github-square"></i></a>
        <a href="https://www.instagram.com/mrblach_" rel="noopener" target="_blank"><i class="fab fa-instagram-square"></i></a>
      </div>
    </div>
  </div>
   
  <div class="navbar">
    <a href="#" class="btn" id="aboutBtn">ABOUT<hr class="underline"></a>
    <a href="#" class="btn" id="projectsBtn">PROJECTS<hr class="underline"></a>
    <a href="#" class="btn" id="resumeBtn">RESUME<hr class="underline"></a>
    <a href="#" class="btn" id="contactBtn">CONTACT<hr class="underline"></a>
  </div>
</section>
  <div id="banner">
    <img id="banner-image" src="https://i.ibb.co/rtJyhKx/banner-min.png" width="1200px" height="803px" alt="Image of a young thirties, androgynous, caucasian woman wearing sun glasses, a beanie, and a button up plaid shirt. She is leaning against a car on a neighborhood street. The image is in black and white with a slight yellow hue."/>
    <h1 id="fed">Front End Developer</h1>
  </div>
`;

// Remove intro name sequence
window.onload = setTimeout(function(){  
  let navbar = document.getElementById('navigation');
  navbar.style.display = 'block'; 
}, 3500);

// Listen for onclick of brand in navbar
let returnHomepage = document.getElementById('brand-name').addEventListener('click', displayHomepage);

function displayHomepage(e) {
  // Display homepage banner
  let banner = document.getElementById('banner');
  banner.style.animation = 'none';
  banner.style.display = 'block';
     // Remove projects page
     let projectsPage = document.getElementById('my-projects');
     projectsPage.style.display = 'none';
     // Remove about page
     let aboutPage = document.getElementById('about-me');
     aboutPage.style.display = 'none';
      // Remove contact page
    let contactPage = document.getElementById('contact-me');
    contactPage.style.display = 'none';
    // Remove resume page
    let resumePage = document.getElementById('my-resume');
    resumePage.style.display = 'none';
  }

// Active navbar  
// Get the container element
let btnContainer = document.querySelector('#navbar');

// Get all buttons with class="btn" inside the container
let btns = btnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < btns.length; i++) { 
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}
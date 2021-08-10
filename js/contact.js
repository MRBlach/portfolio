// Contact page
document.getElementById('contact-me').innerHTML = `
<div id="contact">
 
  <p>contact here</p>
  
  <footer>
    <div class="footer">
      <p>Let's be internet BFFs</p>
      <a href="https://www.facebook.com/melody.blachowicz" target="_blank"><i class="fab fa-facebook-square"></i></a>
      <a href="https://www.linkedin.com/in/mrblach" target="_blank"><i class="fab fa-linkedin"></i></a>
      <a href="https://www.github.com/mrblach" target="_blank"><i class="fab fa-github-square"></i></a>
      <a href="https://www.instagram.com/mrblach_" target="_blank"><i class="fab fa-instagram-square"></i></a>
    </div>
  </footer>
</div>
`;



// Listen for onlick of contact button in navbar
let contactBtn = document.getElementById('contactBtn').addEventListener('click', loadContact);

function loadContact(e) {
  // Remove homepage banner
  let homepage = document.getElementById('banner');
  homepage.style.display = 'none';
   // Remove projects page
   let projectsPage = document.getElementById('my-projects');
   projectsPage.style.display = 'none';
   // Remove resume page
   let resumePage = document.getElementById('my-resume');
   resumePage.style.display = 'none';
    // Remove about page
  let aboutPage = document.getElementById('about-me');
  aboutPage.style.display = 'none';

  // Display contact page
  let contactPage = document.getElementById('contact-me');
  contactPage.style.display = 'block';
}
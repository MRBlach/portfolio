// About page
document.getElementById('about-me').innerHTML = `
<div class="column">

  <div class="row">
    <div class="img-column">
      <img src="https://i.ibb.co/BVVR2Zt/meza.png" height="700px">
    </div>
    
    <div class="text-column">
      <h1>Hey it's me <small>(and Murphy)</small></h1>
      <p>Melody (she/ her)
      <br>
      <p>I grew up in Orlando, FL and spent the majority of my adult life in Portland, OR. My wife and I moved to Phoenix, AZ at the beginning of 2020 to be closer to family.
      </p>
      <p>Formerly, I was a physics and mathematics major with a strong interest in both computer science and astronomy. Now, I'm applying my creativity and problem-solving skills to front-end web development. I'm excited to learn back-end and build my skills up to a full-stack level. I desire to optimize web functionalities to improve UI experience and workflow efficiencies.
      </p>
      <p>I will chase a bug to the gates of hell.
      </p>
    </div>
  </div>
 
  <a href="#down" class="goingDown">
    <div>
      <i class="fas fa-chevron-down"></i>
      <span id="down"></span>
    </div>
  </a>
  <a href="#" class="goingUp">
    <div>
      <i class="fas fa-chevron-up"></i>
    </div>
  </a>

  <div class="row last-row">
    <div class="text-column">
      <h1>We live in Phoenix, AZ</h1>
      <p>Murph and I are living our biggest dreams in a tiny house on a beautiful cactus nursery. I'm currently available for in-office work within the Phoenix metro area. I'm also open to remote work within the USA.
      </p>
      <p>I’m very motivated to begin my professional career in Web Development, as I’m completing
      coding courses and strengthening my skills daily. Though I’m an entry-level applicant, I’m
      passionate about doing a good job and broadening my web dev scope. I believe I’ll make an
      excellent Frontend Web Developer thanks to that passion.
      </p>
    </div>
    <div class="img-column" id="map">
      <img src="https://i.ibb.co/QCS1b8L/phoenix-night-map.png" width="434px"><i class="fas fa-map-marker-alt pin"></i>
    </div>
  </div>
</div>
`;



// Listen for onlick of about button in navbar
let aboutBtn = document.getElementById('aboutBtn').addEventListener('click', loadAbout);

function loadAbout(e) {
  // Remove homepage banner
  let homepage = document.getElementById('banner');
  homepage.style.display = 'none';
   // Remove projects page
   let projectsPage = document.getElementById('my-projects');
   projectsPage.style.display = 'none';
   // Remove resume page
   let resumePage = document.getElementById('my-resume');
   resumePage.style.display = 'none';
    // Remove contact page
  let contactPage = document.getElementById('contact-me');
  contactPage.style.display = 'none';

  // Display about page
  let aboutPage = document.getElementById('about-me');
  aboutPage.style.display = 'block';
  // Remove scroll
  document.body.style.overflow = 'hidden';
}  
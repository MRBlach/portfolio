// About page
document.getElementById('about-me').innerHTML = `
<div class="column">

  <div class="row">
    <div class="img-column">
      <img src="https://i.ibb.co/bmTYFBQ/murph-i-min.png" id="about-page-profile-img" alt="Image of Melody, a young thirties, androgynous, caucasian woman wearing sun glasses and a trucker hat, she is sitting outside under a palm tree with a large fluffy house cat. The image is in black and white with a slight yellow hue.">
    </div>
    
    <div class="text-column">
      <h1>Hey it's me <small>(and Murphy)</small></h1>
      <p>Melody (she/ her)
      <br>
      <p>I grew up in Orlando, FL and spent the majority of my adult life in Portland, OR. My wife and I moved to Phoenix, AZ at the beginning of 2021 to be closer to family.
      </p>
      <p>Formerly, I was a physics and mathematics major with a strong interest in both computer science and astronomy. Now, I'm applying my creativity and problem-solving skills to front end development. I'm excited to learn back end and build my skills up to a full stack level.</p>
      <p>Currently, I run <a href="https://www.media-revive.tech"  rel="noopener" target="_blank" style="color: #fff; font-weight: bold;">media revive</a>, a website I created to exercise my freelance skills. I offer website optimization services for existing websites, with some additional services available based on client needs.</p>
      <p>I also run a <a href="https://www.blog.media-revive.tech"  rel="noopener" target="_blank" style="color: #fff; font-weight: bold;">tech blog</a> where I post articles I create in collaboration with various YouTube channels in an effort to showcase women in tech from around the world.</p>
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
      <p>Please <span id="contact-link" onclick="contactLink()">contact me</span> for more information.
      </p>
    </div>
    <div class="img-column" id="map">
    <img src="https://i.ibb.co/2sZbJqk/phx-night-map-min.png" alt="Image is an aerial view of the Phoenix, Arizona area  as seen from the International Space Station at night." border="0" id="phx-night-map">
    <a href="https://www.nasa.gov/content/super-view-of-glendale-and-phoenix"><p>Nocturnal image of Phoenix, Arizona from the International Space Station.
    </p></a>
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
}  

function contactLink() {
  document.getElementById('aboutBtn').classList.remove('active');
  document.getElementById('contactBtn').classList.add('active');
  loadContact();
}
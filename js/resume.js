// Resume page
document.getElementById('my-resume').innerHTML = `
<button id="printBtn">
  <i class="fas fa-print"></i>
</button>

<div id="resume">
 <div class="left-column">
  <div id="profile-pic">
    <img src="img/camera.png" height="175px">
  </div>
  
  <div id="personal-info">
    <a href="mailto:melodyblachowicz@gmail.com">
    <i class="fas fa-envelope"></i>
    <p>melodyblachowicz@gmail.com</p></a>
    <a href="https://www.google.com/maps/place/Phoenix,+AZ/@33.6050991,-112.4052392,10z/data=!3m1!4b1!4m5!3m4!1s0x872b12ed50a179cb:0x8c69c7f8354a1bac!8m2!3d33.4483771!4d-112.0740373" target="_blank"><i class="fas fa-map-marker-alt"></i>
    <p>Phoenix, AZ</p></a>
    <a href="tel:5033148300"><i class="fas fa-mobile-alt"></i>
    <p>(503) 314-8300</p></a>
    <a href="https://www.github.com/mrblach"><i class="fab fa-github-square"></i>
    <p>github.com/mrblach</p></a>
    <a href="https://www.linkedin.com/in/mrblach"><i class="fab fa-linkedin"></i>
    <p>linkedin.com/in/mrblach</p></a>
    <a href="https://www.instagram.com/mrblach_"><i class="fab fa-instagram-square"></i>
    <p>instagram.com/mrblach_</p></a>
    <a href="https://www.mrblach.github.io/portfolio"><i class="fas fa-folder"></i>
    <p>mrblach.github.io/portfolio</p></a>
  </div>
  
  <div id="progress">
    <span id="toolbelt">
      <h2>Tech Toolbelt</h2>
      <hr>
    </span>
    <p>HTML5</p><br>
    <progress class="progressBar" value="100" max="100"></progress><br><br>
    <p>CSS3</p><br>
    <progress class="progressBar" value="100" max="100"></progress><br><br>
    <p>SASS</p><br>
    <progress class="progressBar" value="100" max="100"></progress><br><br>
    <p>BootStrap4</p><br>
    <progress class="progressBar" value="100" max="100"></progress><br><br>
    <p>JavaScript</p><br>
    <progress class="progressBar" value="80" max="100"></progress><br><br>
    <p>Visual Studio Code</p><br>
    <progress class="progressBar" value="100" max="100"></progress><br><br>
    <p>GIT</p><br>
    <progress class="progressBar" value="100" max="100"></progress><br>
  </div>

  <div id="interests">
    <h2>Interests</h2>
    <hr>
    <i class="fas fa-pizza-slice"></i> Pizza<br>
    <i class="fas fa-atom"></i>  Physics<br>          
    <i class="fas fa-rainbow"></i> My Wife<br>
    <i class="fas fa-cat"></i> All The Cats<br>
    <i class="fas fa-palette"></i> Web Design <br> 
    <i class="fas fa-square-root-alt"></i> Mathematics<br>
    <i class="fas fa-book-reader"></i> Antique Science Books
  </div>
</div>

 <div class="right-column">
  <div class="summary">
    <h2>Melody R Blachowicz</h2>
    <span>(she/ her) Junior Web Developer</span>
    <hr>
    Physics and mathematics major, now applying creativity and problem-solving skills to front-end web development. Excited to learn back-end and build skills up to a full-stack level.  Interested in optimizing web functionalities that improve UI experience and workflow efficiencies. Will chase a bug to the gates of hell.</p>
  </div>
  
  <div class="courses">
      <h2>Courses & Training</h2>
      <hr>
      <span class="col">
        <p>Front End Web Development -
        <em>TeamTreehouse.com</em>
        </p>
        <p>Beginning JavaScript -
          <em>TeamTreehouse.com</em>
        </p>
        <p>Modern JavaScript From The Beginning -
          <em>Udemy.com</em>
        </p>
        <p>Full Stack JavaScript -
          <em>TeamTreehouse.com</em>
        </p>
        <p>BootStrap, SASS, JSON -
          <em>W3Schools.com</em>
        </p>
        <p>Beginning PHP -
          <em>TeamTreehouse.com</em>
        </p>
        <p>Web Design -
          <em>TeamTreehouse.com</em>
        </p>
        <p>Web Programming Skills For Graphic Designers -
          <em>TeamTreehouse.com</em>
        </p>
      </span>
  </div>

  <div class="education">
    <h2>Education</h2>
    <hr>
    <span class="group1">
    <p class="left">BS Physics & Mathematics</p>
    <p class="middle">Portland State University</p>
    <p class="right">08/2016 - on hold</p>
    </span>

    <span class="group1">
    <p class="left">Transfer Degree</p>
    <p class="middle">Portland Community College</p>
    <p class="right">08/2014 - 04/2016</p>
    </span>
  </div>
 

 <div id="work-history">
  <h2>Work History</h2>
  <hr>
  <span class="job present">
    <span class="group1">
      <p class="left">Junior Front End Developer, Freelance</p>
      <p class="middle">Phoenix, AZ</p>
      <p class="right">03/2020 - present</p>
    </span>
    <span class="group2">
      <i class="far fa-star"></i>
      <p class="pros">Learned html, css, and javascript</p>
    </span>
  </span>
  <span class="job">
    <span class="group1">
      <p class="left">Line Cook, Elephants Delicatessen</p>
      <p class="middle">Portland, OR</p>
      <p class="right">04/2019 - 03/2020</p> 
    </span>
    <span class="group2">
      <i class="far fa-star small text-primary"></i>
      <p class="pros">Modified kitchen layout, optimizied workflow efficiency, decreased customer wait time</p>
    </span>
    <span class="group2">
      <i class="far fa-star small text-primary"></i>
      <p class="pros">Created food prep instructions/ employee training guide that became store policy</p>
    </span>
    <span class="group2">
      <i class="far fa-star small text-primary"></i>
      <p class="pros">Appointed Health & Safety Representative</p>
    </span>
    <span class="group2">
      <i class="far fa-star small text-primary"></i>
      <p class="pros">Appointed B Corporation Representative</p>
    </span>
  </span>
  <span class="job">
    <span class="group1">
    <p class="left">Station Chef, New Seasons Market</p>
    <p class="middle">Portland, OR</p>
    <p class="right">04/2014 - 012/2018</p>
    </span>
    <span class="group2">
      <i class="far fa-star small text-primary"></i>
      <p class="pros">Troubleshoot, repaired, fixed UI format of digital scales, increased workflow efficiency, reduced customer wait time, saved company money on third party maintenance</p>
    </span>
    <span class="group2">
      <i class="far fa-star small text-primary"></i>
      <p class="pros">Translated recipes into Spanish, increased accessibility, decreased prep-time and errors</p>
    </span>
    <span class="group2">
      <i class="far fa-star small text-primary"></i>
      <p class="pros">Advanced from Clerk to Station Chef</p>
    </span>
    <span class="group2">
      <i class="far fa-star small text-primary"></i>
      <p class="pros">Appointed Health & Safety Representative</p>
    </span>
    <span class="group2">
      <i class="far fa-star small text-primary"></i>
      <p class="pros">Appointed Green Team Representative</p>
    </span>
    <span class="group2">
      <i class="far fa-star small text-primary"></i>
      <p class="pros">Involved in Community Volunteer Projects facilitated by the company</p>
    </span>
  </span>
 </div>
</div>
</div>
`;

//  Listen for onclick of print button on resume page
let printBtn = document.getElementById('printBtn').addEventListener('click', loadPrinter);

function loadPrinter(e) {
  // Change bg color
  document.querySelector('body').style.backgroundColor = 'white';
  document.querySelector('.main-wrapper').style.backgroundColor = 'white';
  // Remove navbar
  document.getElementById('navigation').style.display = 'none';
  // Remove print button
  document.getElementById('printBtn').style.display = 'none';
  // Remove page margins
  document.getElementById('resume').style.marginTop = '0';
  document.getElementById('resume').style.marginBottom = '0';
  document.getElementById('resume').style.padding = '10px';

  
  // Print page
  window.print();
    // Restore bg color
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.main-wrapper').style.backgroundColor = 'black';
    // Restore navbar
    document.getElementById('navigation').style.display = 'block';
    // Restore print button
    document.getElementById('printBtn').style.display = 'block';
    // Restore page margins
    document.getElementById('resume').style.marginTop = '80px';
    document.getElementById('resume').style.marginBottom = '30px';
    document.getElementById('resume').style.padding = '20px';
}

// Listen for onlick of resume button in navbar
let resumeBtn = document.getElementById('resumeBtn').addEventListener('click', loadResume);

function loadResume(e) {
  // Remove homepage banner
  let homepage = document.getElementById('banner');
  homepage.style.display = 'none';
   // Remove projects page
   let projectsPage = document.getElementById('my-projects');
   projectsPage.style.display = 'none';
   // Remove about page
   let aboutPage = document.getElementById('about-me');
   aboutPage.style.display = 'none';
    // Remove contact page
  let contactPage = document.getElementById('contact-me');
  contactPage.style.display = 'none';

  // Display resume page
  let resumePage = document.getElementById('my-resume');
  resumePage.style.display = 'block';
  // Allow scroll
  document.body.style.overflow = 'scroll';
}




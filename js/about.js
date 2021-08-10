// About page
document.getElementById('about-me').innerHTML = `
<div class="column">

  <div class="row">
    <div class="img-column">
      <img src="img/meza.png" height="700px">
    </div>
    
    <div class="text-column">
      <h1>Hey it's me <small>(and Murphy)</small></h1>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae at architecto ab nihil voluptatem voluptate aspernatur deleniti aliquam neque eaque quas magnam eum ex, doloremque rerum ipsam distinctio iste perspiciatis unde dolorem! Ratione eum, vitae necessitatibus quibusdam exercitationem repellat assumenda vero adipisci expedita distinctio excepturi reprehenderit totam sed, dignissimos corporis inventore! Quam suscipit vitae veritatis! Autem natus quidem tempore, necessitatibus nesciunt dolore fugit illo magni labore tempora totam, ratione consequatur non odit amet impedit libero, maiores nisi culpa expedita maxime quod reprehenderit voluptatum? Ab earum iure est? Qui minus vero, amet eaque iusto enim architecto?</p>
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
      <p>Perspiciatis unde dolorem! Ratione eum, vitae necessitatibus quibusdam exercitationem repellat assumenda vero adipisci expedita distinctio excepturi reprehenderit totam sed, dignissimos corporis inventore! Quam suscipit vitae veritatis! Autem natus quidem tempore, necessitatibus nesciunt dolore fugit illo.</p>
    </div>
    <div class="img-column" id="map">
      <img src="img/phoenix-night-map.png" width="434px"><i class="fas fa-map-marker-alt pin"></i>
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
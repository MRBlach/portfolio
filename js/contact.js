// Contact page
document.getElementById('contact-me').innerHTML = `

<div id="contact">
  <div class="contact-title">
    <h1>You can reach me here</h1>
    <h4>or through the social media links below</h4>
  </div>
  <main class="contact-form">
    <form id="contact-form" action="#">
      <input name="name" type="text" class="fa form-control name-input" placeholder="&#xF007; NAME">
      <br>
      <input name="email" type="email" class="fa form-control" placeholder="&#xf0e0; EMAIL">
      <br>
      <textarea name="message" class="fa form-control message" placeholder="&#xF075; MESSAGE" ></textarea><br>     
      <input type="submit" class="form-control submit" value="SEND MESSAGE">
      <span class="button-area"></span>
    </form>
  </main>

  <footer class="footer">
    <p>Let's be internet BFFs</p>
    <a href="https://www.facebook.com/melody.blachowicz" rel="noopener" target="_blank"><i class="fab fa-facebook-square"></i></a>
    <a href="https://www.linkedin.com/in/mrblach" rel="noopener" target="_blank"><i class="fab fa-linkedin"></i></a>
    <a href="https://www.github.com/mrblach" rel="noopener" target="_blank"><i class="fab fa-github-square"></i></a>
    <a href="https://www.instagram.com/mrblach_" rel="noopener" target="_blank"><i class="fab fa-instagram-square"></i></a>
  </footer>  
</div>
`;

//Contact Form in PHP
const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area");
form.onsubmit = (e)=>{
  e.preventDefault();
  statusTxt.style.color = "#ddc47e";
  statusTxt.style.fontWeight = "bold";
  statusTxt.style.display = "block";
  statusTxt.innerText = "Sending your message...";
  form.classList.add("disabled");

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "message.php", true);
  xhr.onload = ()=>{
    if(xhr.readyState == 4 && xhr.status == 200){
      let response = xhr.response;
      if(response.indexOf("required") != -1 || response.indexOf("valid") != -1 || response.indexOf("failed") != -1){
        statusTxt.style.color = "red";
        statusTxt.style.fontWeight = "bold";
      }else{
        form.reset();
        setTimeout(()=>{
          statusTxt.style.display = "none";
        }, 3000);
      }
      statusTxt.innerText = response;
      form.classList.remove("disabled");
    }
  }
  let formData = new FormData(form);
  xhr.send(formData);
}


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


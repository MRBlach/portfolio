// Contact page
document.getElementById('contact-me').innerHTML = `

<div class="contact-wrapper">
<h1>Send us a Message</h1>
<form action="#">
  <div class="dbl-field">
    <div class="field">
      <input type="text" name="name" placeholder="Enter your name">
      <i class='fas fa-user'></i>
    </div>
    <div class="field">
      <input type="text" name="email" placeholder="Enter your email">
      <i class='fas fa-envelope'></i>
    </div>
  </div>
  <div class="dbl-field">
    <div class="field">
      <input type="text" name="phone" placeholder="Enter your phone">
      <i class='fas fa-phone-alt'></i>
    </div>
    <div class="field">
      <input type="text" name="website" placeholder="Enter your website">
      <i class='fas fa-globe'></i>
    </div>
  </div>
  <div class="message">
    <textarea placeholder="Write your message" name="message"></textarea>
    <i class="material-icons">message</i>
  </div>
  <div class="button-area">
    <button type="submit">Send Message</button>
    <span></span>
  </div>
</form>
</div>


`;
//Contact Form in PHP
const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");
form.onsubmit = (e)=>{
  e.preventDefault();
  statusTxt.style.color = "#0D6EFD";
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
// function validateContactForm() {
//   var valid = true;

//   $(".info").html("");
//   $(".input-field").css('border', '#e0dfdf 1px solid');
//   var userName = $("#userName").val();
//   var userEmail = $("#userEmail").val();
//   var subject = $("#subject").val();
//   var content = $("#content").val();
  
//   if (userName == "") {
//       $("#userName-info").html("Required.");
//       $("#userName").css('border', '#e66262 1px solid');
//       valid = false;
//   }
//   if (userEmail == "") {
//       $("#userEmail-info").html("Required.");
//       $("#userEmail").css('border', '#e66262 1px solid');
//       valid = false;
//   }
//   if (!userEmail.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/))
//   {
//       $("#userEmail-info").html("Invalid Email Address.");
//       $("#userEmail").css('border', '#e66262 1px solid');
//       valid = false;
//   }

//   if (subject == "") {
//       $("#subject-info").html("Required.");
//       $("#subject").css('border', '#e66262 1px solid');
//       valid = false;
//   }
//   if (content == "") {
//       $("#userMessage-info").html("Required.");
//       $("#content").css('border', '#e66262 1px solid');
//       valid = false;
//   }
//   return valid;
// }


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

/* <div id="contact">
  <div class="contact-title">
    <h1>Say Hello</h1>
    <h2>We are always happy to hear from you!</h2>
  </div>
  <main class="contact-form">
    <form id="contact-form" method="post" action="contact-form-handler.php">
      <input name="name" type="text" class="form-control" placeholder="Your Name" required>
      <br>
      <input name="email" type="email" class="form-control" placeholder="Your Email" required>
      <br>
      <textarea name="message" class="form-control" placeholder="Message" row="4" required>
      </textarea>
      <br>
      <input type="submit" class="form-control submit" value="SEND MESSAGE">
    </form>
  </main>

  
  <footer>
    <div class="footer">
      <p>Let's be internet BFFs</p>
      <a href="https://www.facebook.com/melody.blachowicz" target="_blank"><i class="fab fa-facebook-square"></i></a>
      <a href="https://www.linkedin.com/in/mrblach" target="_blank"><i class="fab fa-linkedin"></i></a>
      <a href="https://www.github.com/mrblach" target="_blank"><i class="fab fa-github-square"></i></a>
      <a href="https://www.instagram.com/mrblach_" target="_blank"><i class="fab fa-instagram-square"></i></a>
    </div>
  </footer>
</div> */

// <?php
//   $name = $_POST['name'];
//   $visitor_email = $_POST['email'];
//   $message = $_POST['message'];

//   $email_from = 'melodyblachowicz@gmail.com';

//   $email_subject = 'New Form Submission';

//   $email_body = "User Name: $name.\n"
//                 "User Email: $visitor_email.\n"
//                 "User Message: $message.\n";

//   $to = "melodyblachowicz@gmail.com";

//   $headers = 'From: $email_from \r\n';
  
//   $headers = 'Reply-To: $visitor_email \r\n';

//   mail($to,$email_subject,$email_body,$headers);

//   header('Location: js/contact.js');
// ?>
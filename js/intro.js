
//  Display landing page
//   intro name sequence 
document.getElementById('intro').innerHTML = `
<section id="name-slides">
  <div class="hide-slider">
    <div class="slide-left">
      <span class="name m">M</span>
      <span class="name elodia">elodia </span>
      <span class="name r">R</span>
    </div>
  </div>
   <span class="hide-line"><hr class="line grow-line"></span>
  <div class="hide-slider">
    <div class="slide-right">
      <span class="name blach">Blach</span>
      <span class="name owicz fade-out">owicz</span>
    </div>
  </div>
</section>
`;

// Remove intro name sequence


window.onload = setTimeout(function(){ 
  let intro = document.getElementById('intro');
  intro.style.display = 'none'; 
}, 3500);


document.getElementById('navigation').style.display = 'none';
document.getElementById('about-me').style.display = 'none';
document.getElementById('my-projects').style.display = 'none';
document.getElementById('my-resume').style.display = 'none';
document.getElementById('contact-me').style.display = 'none';
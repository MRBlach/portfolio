// Projects page
document.getElementById('my-projects').innerHTML = `
<div class="column projects-column">

  <div class="row">
    <div class="text-column">
      <h1>API Projects</h1>
        <p>Working with APIs can be both fun and interesting. The amount of data at one's finger tips is staggering. Here are a few examples of the implementation of said data from various open APIs.
        </p>
        <p>Some projects will need CORS AUTHENTICATION, depending on the API. I used a CORS enabling extention for Google. You Can find the extention just by searching CORS Enabler in your web browser.</p>
    </div>

    <div class="img-column gallery gallery1">
      <div class="img-flex-item a" title="An app to view COVID-19 Statistics.">
          <div class="flip-box-x">
            <div class="flip-box-inner">
              <div class="flip box1-front">
              </div>
              <div class="flip box1-back">
                <div class="gitBtns">
                <a href="https://mrblach.github.io/covid-19/" rel="noopener" target="_blank">
                  <button>Demo</button>
                </a>
                <a href="https://github.com/MRBlach/covid19#readme" rel="noopener" target="_blank">
                  <button>READ.ME</button>
                </a>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div class="img-flex-item b" title="An app to fetch random photos of dogs.">
        <div class="flip-box-y">
          <div class="flip-box-inner">
            <div class="flip box2-front">
            </div>
            <div class="flip box2-back">
              <div class="gitBtns">
                <a href="https://github.com/MRBlach/dog-api" rel="noopener" target="_blank">
                  <button>Demo</button>
                </a>
                <a href="https://github.com/MRBlach/dog-api#readme" rel="noopener" target="_blank">
                  <button>READ.ME</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>  
      <div class="img-flex-item c" title="An app that shows the weather forcast.">
          <div class="flip-box-y">
            <div class="flip-box-inner">
              <div class="flip box3-front">
              </div>
              <div class="flip box3-back">
                <div class="gitBtns">
                  <a href="https://mrblach.github.io/weather-api/" rel="noopener" target="_blank">
                    <button>Demo</button>
                  </a>
                  <a href="https://github.com/MRBlach/weather-api#readme" rel="noopener" target="_blank">
                    <button>READ.ME</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>  
      <div class="img-flex-item d" title="An app to search users of Git Hub.">
        <div class="flip-box-x">
          <div class="flip-box-inner">
            <div class="flip box4-front">
            </div>
            <div class="flip box4-back">
              <div class="gitBtns">
                <a href="https://mrblach.github.io/github-finder/" rel="noopener" target="_blank">
                  <button>Demo</button>
                </a>
                <a href="https://github.com/MRBlach/github-finder/#readme" rel="noopener" target="_blank">
                  <button>READ.ME</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>  
      <div class="img-flex-item e" title="An app that demonstrates the use of fetch for comments, user info, and random photos.">
          <div class="flip-box-x">
            <div class="flip-box-inner">
              <div class="flip box5-front">
              </div>
              <div class="flip box5-back">
                <div class="gitBtns">
                  <a href="https://mrblach.github.io/fetch-example-api/" rel="noopener" target="_blank">
                    <button>Demo</button>
                  </a>
                  <a href="https://github.com/MRBlach/fetch-example-api/#readme" rel="noopener" target="_blank">
                    <button>READ.ME</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>  
      <div class="img-flex-item f" title="An app for cat facts.">
        <div class="flip-box-y">
          <div class="flip-box-inner">
            <div class="flip box6-front">
            </div>
            <div class="flip box6-back">
              <div class="gitBtns">
                <a href="https://mrblach.github.io/cat-fact-api/" rel="noopener" target="_blank">
                  <button>Demo</button>
                </a>
                <a href="https://github.com/MRBlach/cat-fact-api/#readme" rel="noopener" target="_blank">
                  <button>READ.ME</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </div>
  </div>

  <a href="#down1" class="goingDown">
    <div id="up1">
      <i class="fas fa-chevron-down"></i>
      <span id="down1"></span>
    </div>
  </a>
  <a href="#" class="goingUp">
    <div>
      <i class="fas fa-chevron-up"></i>
    </div>
  </a>

  <div class="row">
    <div class="img-column gallery gallery2">
      <div class="img-flex-item a" title="Classic snake game.">
          <div class="flip-box-x">
            <div class="flip-box-inner">
              <div class="flip box1-front">
              </div>
              <div class="flip box1-back">
                <div class="gitBtns">
                <a href="https://mrblach.github.io/snake-game/" rel="noopener" target="_blank">
                  <button>Demo</button>
                </a>
                <a href="https://github.com/MRBlach/snake-game#readme" rel="noopener" target="_blank">
                  <button>READ.ME</button>
                </a>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div class="img-flex-item b" title="A number guessing game.">
        <div class="flip-box-y">
          <div class="flip-box-inner">
            <div class="flip box2-front">
            </div>
            <div class="flip box2-back">
              <div class="gitBtns">
                <a href="https://mrblach.github.io/number-guesser/" rel="noopener" target="_blank">
                  <button>Demo</button>
                </a>
                <a href="https://github.com/MRBlach/number-guesser#readme" rel="noopener" target="_blank">
                  <button>READ.ME</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>  
      <div class="img-flex-item c" title="A UFO theme maze game.">
          <div class="flip-box-y">
            <div class="flip-box-inner">
              <div class="flip box3-front">
              </div>
              <div class="flip box3-back">
                <div class="gitBtns">
                  <a href="https://mrblach.github.io/maze-game/" rel="noopener" target="_blank">
                    <button>Demo</button>
                  </a>
                  <a href="https://github.com/MRBlach/maze-game#readme" rel="noopener" target="_blank">
                    <button>READ.ME</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>  
      <div class="img-flex-item d" title="A tetris style game.">
        <div class="flip-box-x">
          <div class="flip-box-inner">
            <div class="flip box4-front">
            </div>
            <div class="flip box4-back">
              <div class="gitBtns">
                <a href="https://mrblach.github.io/tetris/" rel="noopener" target="_blank">
                  <button>Demo</button>
                </a>
                <a href="https://github.com/MRBlach/tetris/#readme" rel="noopener" target="_blank">
                  <button>READ.ME</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>  
      <div class="img-flex-item e" title="A tic tac toe game.">
          <div class="flip-box-x">
            <div class="flip-box-inner">
              <div class="flip box5-front">
              </div>
              <div class="flip box5-back">
                <div class="gitBtns">
                  <a href="https://mrblach.github.io/tic-tac-toe/" rel="noopener" target="_blank">
                    <button>Demo</button>
                  </a>
                  <a href="https://github.com/MRBlach/tic-tac-toe/#readme" rel="noopener" target="_blank">
                    <button>READ.ME</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>  
      <div class="img-flex-item f" title="A pigeon jumping taxi cars game.">
        <div class="flip-box-y">
          <div class="flip-box-inner">
            <div class="flip box6-front">
            </div>
            <div class="flip box6-back">
              <div class="gitBtns">
                <a href="https://mrblach.github.io/pigeon-game/" rel="noopener" target="_blank">
                  <button>Demo</button>
                </a>
                <a href="https://github.com/MRBlach/pigeon-game/#readme" rel="noopener" target="_blank">
                  <button>READ.ME</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </div>

    <div class="text-column">
      <h1>JavaScript Games</h1>
      <p>The games you see here were made possible by following coding tutorials from various sources. Each is credited in the README.md file under "acknowledgements." Following tutorials helped me to understand the code line by line. Previous course study knowledge allowed me to tailor the code to achieve the desired outcome. For example:
      <ul>
        <li>Eliminating redundancies using the DRY approach</li>
        <li>Applying detailed styling for a better UI experience</li>
        <li>Adding detailed comments to improve readability</li>
      </ul>
      </p>
    </div>
  </div>

  <a href="#down2" class="goingDown" id="up2">
    <div>
      <i class="fas fa-chevron-down"></i>
      <span id="down2"></span>
    </div>
    </a>
  <a href="#up1" class="goingUp">
    <div>
      <i class="fas fa-chevron-up"></i>
    </div>
  </a>

  <div class="row">
    <div class="img-column gallery gallery3">
      <div class="img-flex-item a" title="A mock dating site using food instead of people.">
          <div class="flip-box-x">
            <div class="flip-box-inner">
              <div class="flip box1-front">
              </div>
              <div class="flip box1-back">
                <div class="gitBtns">
                <a href="https://mrblach.github.io/eat-up/" rel="noopener" target="_blank">
                  <button>Demo</button>
                </a>
                <a href="https://github.com/MRBlach/eat-up#readme" rel="noopener" target="_blank">
                  <button>READ.ME</button>
                </a>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div class="img-flex-item b" title="An app about he Florida Everglades.">
        <div class="flip-box-y">
          <div class="flip-box-inner">
            <div class="flip box2-front">
            </div>
            <div class="flip box2-back">
              <div class="gitBtns">
                <a href="https://mrblach.github.io/fla-everglades/" rel="noopener" target="_blank">
                  <button>Demo</button>
                </a>
                <a href="https://github.com/MRBlach/fla-everglades#readme" rel="noopener" target="_blank">
                  <button>READ.ME</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>  
      <div class="img-flex-item c" title="A mock tech repair website.">
          <div class="flip-box-y">
            <div class="flip-box-inner">
              <div class="flip box3-front">
              </div>
              <div class="flip box3-back">
                <div class="gitBtns">
                  <a href="https://mrblach.github.io/mock-tech-site/" rel="noopener" target="_blank">
                    <button>Demo</button>
                  </a>
                  <a href="https://github.com/MRBlach/mock-tech-site#readme" rel="noopener" target="_blank">
                    <button>READ.ME</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>  
      <div class="img-flex-item d" title="An app about the solar system.">
        <div class="flip-box-x">
          <div class="flip-box-inner">
            <div class="flip box4-front">
            </div>
            <div class="flip box4-back">
              <div class="gitBtns">
                <a href="https://mrblach.github.io/solar-system/" rel="noopener" target="_blank">
                  <button>Demo</button>
                </a>
                <a href="https://github.com/MRBlach/solar-system/#readme" rel="noopener" target="_blank">
                  <button>READ.ME</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>  
      <div class="img-flex-item e" title="A sample javascript form with input validation.">
          <div class="flip-box-x">
            <div class="flip-box-inner">
              <div class="flip box5-front">
              </div>
              <div class="flip box5-back">
                <div class="gitBtns">
                  <a href="https://mrblach.github.io/js-form/" rel="noopener" target="_blank">
                    <button>Demo</button>
                  </a>
                  <a href="https://github.com/MRBlach/js-form/#readme" rel="noopener" target="_blank">
                    <button>READ.ME</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>  
      <div class="img-flex-item f" title="An app of multiple types of calculators.">
        <div class="flip-box-y">
          <div class="flip-box-inner">
            <div class="flip box6-front">
            </div>
            <div class="flip box6-back">
              <div class="gitBtns">
                <a href="https://mrblach.github.io/multi-calc/" rel="noopener" target="_blank">
                  <button>Demo</button>
                </a>
                <a href="https://github.com/MRBlach/multi-calc#readme" rel="noopener" target="_blank">
                  <button>READ.ME</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </div>

    <div class="text-column">
      <h1>Practice Projects</h1>
      <p>The following projects are an expression of my own creativity. Applying what I've learned thus far from tutorials, online courses, and source documentation, I've created these fun practice projects.
      </p>
      <p>The first one is my favorite. That's a fine slice of pie. Have at it, gain some insight into my brain and maybe let me know which plate you choose.
      </p>
    </div>
  </div>

  <a href="#down3"class="goingDown">
    <div>
      <i class="fas fa-chevron-down"></i>
      <span id="down3"></span>
    </div>
  </a>
  <a href="#up2" class="goingUp">
    <div>
      <i class="fas fa-chevron-up"></i>
    </div>
  </a>

  <div class="row last-row">
    <div class="img-column gallery gallery4">
      <div class="img-flex-item a" title="An example of a success notification email.">
          <div class="flip-box-x">
            <div class="flip-box-inner">
              <div class="flip box1-front">
              </div>
              <div class="flip box1-back">
                <div class="gitBtns">
                <a href="https://mrblach.github.io/email-template-success/" rel="noopener" target="_blank">
                  <button>Demo</button>
                </a>
                <a href="https://github.com/MRBlach/email-template-success#readme" rel="noopener" target="_blank">
                  <button>READ.ME</button>
                </a>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div class="img-flex-item b" title="An example of an e-commerce or mail order promotional email.">
        <div class="flip-box-y">
          <div class="flip-box-inner">
            <div class="flip box2-front">
            </div>
            <div class="flip box2-back">
              <div class="gitBtns">
                <a href="https://mrblach.github.io/email-template-mail-order-service/" rel="noopener" target="_blank">
                  <button>Demo</button>
                </a>
                <a href="https://github.com/MRBlach/email-template-mail-order-service#readme" rel="noopener" target="_blank">
                  <button>READ.ME</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>  
      <div class="img-flex-item c" title="An example of a restaurant promotional email.">
          <div class="flip-box-y">
            <div class="flip-box-inner">
              <div class="flip box3-front">
              </div>
              <div class="flip box3-back">
                <div class="gitBtns">
                  <a href="https://mrblach.github.io/email-template-restaurant-promo/" rel="noopener" target="_blank">
                    <button>Demo</button>
                  </a>
                  <a href="https://github.com/MRBlach/email-template-restaurant-promo#readme" rel="noopener" target="_blank">
                    <button>READ.ME</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>  
      <div class="img-flex-item d" title="An example of a caution notification email.">
        <div class="flip-box-x">
          <div class="flip-box-inner">
            <div class="flip box4-front">
            </div>
            <div class="flip box4-back">
              <div class="gitBtns">
                <a href="https://mrblach.github.io/email-template-caution/" rel="noopener" target="_blank">
                  <button>Demo</button>
                </a>
                <a href="https://github.com/MRBlach/email-template-caution/#readme" rel="noopener" target="_blank">
                  <button>READ.ME</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>  
      <div class="img-flex-item e" title="An example of a dnager notification email.">
          <div class="flip-box-x">
            <div class="flip-box-inner">
              <div class="flip box5-front">
              </div>
              <div class="flip box5-back">
                <div class="gitBtns">
                  <a href="https://mrblach.github.io/email-template-danger/" rel="noopener" target="_blank">
                    <button>Demo</button>
                  </a>
                  <a href="https://github.com/MRBlach/email-template-danger/#readme" rel="noopener" target="_blank">
                    <button>READ.ME</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>  
      <div class="img-flex-item f" title="An example of a company newsletter email.">
        <div class="flip-box-y">
          <div class="flip-box-inner">
            <div class="flip box6-front">
            </div>
            <div class="flip box6-back">
              <div class="gitBtns">
                <a href="https://mrblach.github.io/email-template-company-newsletter/" rel="noopener" target="_blank">
                  <button>Demo</button>
                </a>
                <a href="https://github.com/MRBlach/email-template-company-newsletter/#readme" rel="noopener" target="_blank">
                  <button>READ.ME</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </div>

    <div class="text-column">
      <h1>HTML Email Templates</h1>
      <p>Lastly, here are a few examples of HTML email templates. From simple status notification emails to more eye catching e-commerse templates, all are an exercise in table nesting. 
      </p>
      <p>Each template has been tested using a Responsive Email CSS Inliner, as well as Litmus Email Tester.
      </p>
    </div>
  </div>
</div>
`;



// Listen for onlick of projects button in navbar
let projectsBtn = document.getElementById('projectsBtn').addEventListener('click', loadProjects);

function loadProjects(e) {
  // Remove homepage banner
  let homepage = document.getElementById('banner');
  homepage.style.display = 'none';
   // Remove about page
   let aboutPage = document.getElementById('about-me');
   aboutPage.style.display = 'none';
   // Remove resume page
   let resumePage = document.getElementById('my-resume');
   resumePage.style.display = 'none';
    // Remove contact page
  let contactPage = document.getElementById('contact-me');
  contactPage.style.display = 'none';

  // Display projects page
  let projectsPage = document.getElementById('my-projects');
  projectsPage.style.display = 'block';
}
var body = document.getElementById("body")
console.log(body);
var footer = document.createElement("footer")
footer.id = "connect"




var today = new Date();
var thisYear = today.getFullYear();
// footer = document.querySelectorAll("footer")[0]


var copyright = document.createElement('p');
copyright.innerHTML = "\u00A9 Crystal Hoefener " + thisYear
footer.appendChild(copyright)

var skillsSection = document.getElementById("skills")

var skills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub",
    "Inventory Control Management", "Inventory Audits", "Problem Solver",  "VS Code", "Manhattan Software", "Process Improvment", "SCI Software"
    ] 



for (let i = 0; i < skills.length; i++) {
    var skillsList = document.getElementsByTagName("ul")[1]


var li = document.createElement("li");
li.innerText = skills[i]
skillsList.append(li)
console.log(skillsList);

}

footer.innerHTML = `       <div class="footer-section left">
          <a href="mailto:crystal061410@gmail.com" target="_blank">
            <i class="fa fa-envelope"></i>
          </a>
          <a href="https://www.linkedin.com/in/crystal-hoefener-1b1114114/" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/cah0214">
            <i class="fab fa-github"></i>
          </a>
        </div>
        <div class="footer-section middle" >
            <a href="./assets/Resume.pdf" download="Crystal Hoefener.pdf" target="_blank" id="resume">
                Download Resume
              </a>
        </div>
        <div class="footer-section right">
          <div class="location-info">
            <img src="./assets/locationImg.png" alt="Location Map" class="location-map-img">
            <p>
                Greenwood, IN</p>
          </div>
         
        </div>`

        body.append(footer)
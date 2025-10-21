var body = document.body;

var footer = document.createElement("footer");
footer.id = "connect";
footer.innerHTML = `
	<div class="footer-section left">
		<a href="mailto:crystal061410@gmail.com" target="_blank">
			<i class="fa fa-envelope"></i>
		</a>
		<a href="https://www.linkedin.com/in/crystal-hoefener-1b1114114/" target="_blank">
			<i class="fa brands fa-linkedin"></i>
		</a>
	</div>
	<div class="footer-section middle">
		<a href="./assets/Resume.pdf" download="Crystal Hoefener.pdf" target="_blank" id="resume">
		</a>
	</div>
	<div class="footer-section right">
		<div class="location-info">
			<img src="./assets/locationImg.png" alt="Location Map" class="location-map-img">
			<p>Greenwood, IN</p>
		</div>
	</div>
`;

var today = new Date();
var thisYear = today.getFullYear();
var copyright = document.createElement('p');
copyright.innerHTML = "\u00A9 Crystal Hoefener " + thisYear;
footer.appendChild(copyright);

body.appendChild(footer);

var skillsSection = document.getElementById("skills");

var skills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub", "Inventory Control Management", "Inventory Audits", "Problem Solver", "VS Code", "Manhattan Software", "Process Improvement", "SCI Software"];
var skillsList = document.getElementById("skillsList");
skills.forEach(skill => {
	const li = document.createElement("li");
	li.innerText = skill;
	skillsList.appendChild(li);
});

const messageForm = document.forms["leave_message"];

messageForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = event.target.usersName.value;
    const email = event.target.usersEmail.value;
    const message = event.target.usersMessage.value;

	const messageSection = document.getElementById("messages");
	const messagelist = messageSection.querySelector("ul");

	const newMessage = document.createElement("li");
	newMessage.innerHTML = 
	`<a href="mailto:${email}">${name}</a> 
	<span>wrote: ${message}</span>`;

	const removeButton = document.createElement("button");
	removeButton.innerText = "remove";

	removeButton.type = "button";

	removeButton.addEventListener("click", function() {
		const entry = removeButton.parentNode;
		entry.remove();
	});
	newMessage.appendChild(removeButton);
	messagelist.appendChild(newMessage);
	
    console.log(name, email, message);
    
    messageForm.reset();
});

fetch("https://api.github.com/users/cah0214/repos")
	.then(response => response.json())
	.then(repositories => {
		console.log(repositories);
		const projecSection = document.getElementById("projects");
		const projectList = projecSection.querySelector("#project-list");
		
		for (let i = 0; i < repositories.length; i++) {
			const repo = repositories[i];
			
			const project = document.createElement("li");
			project.innerText = repo["name"];
			projectList.appendChild(project);
		}
	})
	.catch(error => { 
		console.error('Error fetching repositories:', error);	
});
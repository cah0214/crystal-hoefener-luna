// ===== Populate Skills Section =====
const skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "Adobe Photoshop",
  "GitHub",
  "Inventory Control Management",
  "Inventory Audits",
  "Problem Solver",
  "VS Code",
  "Manhattan Software",
  "Process Improvement",
  "SCI Software"
];

const skillsList = document.getElementById("skillsList");
skills.forEach(skill => {
  const li = document.createElement("li");
  li.innerText = skill;
  skillsList.appendChild(li);
});

// ===== Message Form Functionality =====
const messageForm = document.forms["leave_message"];

messageForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = event.target.usersName.value;
  const email = event.target.usersEmail.value;
  const message = event.target.usersMessage.value;

  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");

  const newMessage = document.createElement("li");
  newMessage.innerHTML = `
    <a href="mailto:${email}">${name}</a>
    <span> wrote: ${message}</span>
  `;

  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.type = "button";

  removeButton.addEventListener("click", function () {
    const entry = removeButton.parentNode;
    entry.remove();
  });

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  console.log(name, email, message);

  messageForm.reset();
});

// ===== Fetch GitHub Repositories =====
fetch("https://api.github.com/users/cah0214/repos")
  .then(response => response.json())
  .then(repositories => {
    const projectSection = document.getElementById("projects");
    const projectList = projectSection.querySelector("ul");

    repositories.forEach(repo => {
      const project = document.createElement("li");
      const link = document.createElement("a");
      link.href = repo.html_url;
      link.target = "_blank";
      link.textContent = repo.name;
      project.appendChild(link);
      projectList.appendChild(project);
    });
  })
  .catch(error => {
    console.error("Error fetching repositories:", error);
  });

// ===== Add Copyright Automatically =====
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
const thisYear = new Date().getFullYear();
copyright.textContent = `© Crystal Hoefener ${thisYear}`;
footer.appendChild(copyright);

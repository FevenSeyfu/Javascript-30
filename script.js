const projects = [
  {
    id: 1,
    name: "JS Drum Stick",
    img: "assets/Day_1.png",
    previewLink: "http://fevenseyfu.me/Javascript-30/01-Javascript-drum-kit/",
  },
  {
    id: 2,
    name: "JS+CSS Clock",
    img: "assets/Day_2.png",
    previewLink: "http://fevenseyfu.me/Javascript-30/02-JS-and-CSS-Clock/",
  },
  {
    id: 3,
    name: "CSS Variables",
    img: "assets/Day_3.png",
    previewLink: "http://fevenseyfu.me/Javascript-30/03-CSS-Variables/",
  },
  {
    id: 4,
    name: "Array Cardio Day 1",
    img: "assets/Day_4.png",
    previewLink: "http://fevenseyfu.me/Javascript-30/04-Array-Cardio-day-1/",
  },
  {
    id: 5,
    name: "Flex Panel Gallery",
    img: "assets/Day_5.png",
    previewLink: "http://fevenseyfu.me/Javascript-30/05-Flex-Panel-Gallery/",
  },
  {
    id: 6,
    name: "Array Cardio",
    img: "assets/Day_6.png",
    previewLink: "http://fevenseyfu.me/Javascript-30/06-Type-Ahead/",
  },
  {
    id: 7,
    name: "Array Cardio Day 2",
    img: "assets/Day_7.png",
    previewLink: "http://fevenseyfu.me/Javascript-30/07-Array-Cardio-Day-2/",
  },
  {
    id: 8,
    name: "Fun with HTML5",
    img: "assets/Day_8.png",
    previewLink: "http://fevenseyfu.me/Javascript-30/08-Fun-With-HTML5/",
  },
  {
    id: 9,
    name: "Dev Tools Domination",
    img: "assets/Day_9.png",
    previewLink: "http://fevenseyfu.me/Javascript-30/09-Dev-Tools-Domination/",
  },
  {
    id: 10,
    name: "To Do List",
    img: "assets/Day_10.png",
    previewLink: "http://fevenseyfu.me/Javascript-30/10-ToDo-List/",
  },
  {
    id: 11,
    name: "Custom Video Player",
    img: "assets/Day_11.png",
    previewLink: "http://fevenseyfu.me/Javascript-30/11-Custom-video-player/",
  },
  {
    id: 12,
    name: "Key Sequence Detection",
    img: "assets/Day_12.png",
    previewLink:
      "http://fevenseyfu.me/Javascript-30/12-key-sequence-detection/",
  },
  {
    id: 13,
    name: "Slide In On Scroll",
    img: "assets/Day_13.gif",
    previewLink: "http://fevenseyfu.me/Javascript-30/13-slide-in-on-scroll/",
  },
  {
    id: 14,
    name: "Javascript Reference Vs Copy",
    img: "assets/Day_14.png",
    previewLink: "http://fevenseyfu.me/Javascript-30/14-reference-vs-copy/",
  },
  {
    id: 15,
    name: "Local Storage",
    img: "assets/Day_15.png",
    previewLink: "http://fevenseyfu.me/Javascript-30/15-LocalStorage/",
  },
  {
    id: 16,
    name: "Mouse Shadow",
    img: "assets/Day_16.gif",
    previewLink: "http://fevenseyfu.me/Javascript-30/16-mouse-move-shadow/",
  },
  {
    id: 17,
    name: "sort-without-articles",
    img: "assets/Day_17.gif",
    previewLink: "http://fevenseyfu.me/Javascript-30/17-sort-without-articles/",
  },
  {
    id: 18,
    name: "Adding Up Times with Reduce",
    img: "assets/Day_18.png",
    previewLink: "http://fevenseyfu.me/Javascript-30/18-Adding-Up-Times-with-Reduce/",
  },
  {
    id: 19,
    name: "Adding Up Times with Reduce",
    img: "assets/Day_19.png",
    previewLink: "http://fevenseyfu.me/Javascript-30/19-webcam-fun/",
  },
];
const boxes = document.querySelectorAll(".box");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-link");
const ProjectSection = document.getElementById("projects");

const fixNavbar = () => {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
  const sectionPositions = Array.from(boxes).map((box) => box.offsetTop);
  const scrollPosition = window.scrollY;
  const currentSectionIndex = sectionPositions.findIndex(
    (position) => position > scrollPosition
  );
  navLinks.forEach((link) => link.classList.remove("current"));

  if (currentSectionIndex !== -1) {
    navLinks[currentSectionIndex].classList.add("current");
  }
};

window.addEventListener("scroll", fixNavbar);

// projects
const projectBox =  document.getElementById('box')
projects.forEach(project=>{
    projectCard = document.createElement('div')
    projectCard.classList.add('project-card')
    projectCard.setAttribute('data-id', `${project.id}`)
    projectCard.innerHTML =`
        <img src="${project.img}" />
        <span class="tag">Day ${project.id}</span>
        <div class="overlay">
            <h2 class="project-name">${project.name}</h2>
            <button class="btn">
                <a href="${project.previewLink}">Live Demo</a>
            </button>
        </div>
            `
    ProjectSection.appendChild(projectCard)
})

const heroHeaders = document.querySelectorAll('.hero-text') 

heroHeaders.forEach(heroHeader => {
  heroHeader.innerHTML = heroHeader.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
});
d
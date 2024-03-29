const projects = [
  {
    id: 1,
    name: "JS Drum Stick",
    img: "assets/Day_1.png",
    previewLink:
      "https://fevenseyfu.github.io/Javascript-30/01-Javascript-drum-kit/",
  },
  {
    id: 2,
    name: "JS+CSS Clock",
    img: "assets/Day_2.png",
    previewLink:
      "https://fevenseyfu.github.io/Javascript-30/02-JS-and-CSS-Clock/",
  },
  {
    id: 3,
    name: "CSS Variables",
    img: "assets/Day_3.png",
    previewLink: "https://fevenseyfu.github.io/Javascript-30/03-CSS-Variables/",
  },
  {
    id: 4,
    name: "Array Cardio Day 1",
    img: "assets/Day_4.png",
    previewLink:
      "https://fevenseyfu.github.io/Javascript-30/04-Array-Cardio-day-1/",
  },
  {
    id: 5,
    name: "Flex Panel Gallery",
    img: "assets/Day_5.png",
    previewLink:
      "https://fevenseyfu.github.io/Javascript-30/05-Flex-Panel-Gallery/",
  },
  {
    id: 6,
    name: "Array Cardio",
    img: "assets/Day_6.png",
    previewLink: "https://fevenseyfu.github.io/Javascript-30/06-Type-Ahead/",
  },
  {
    id: 7,
    name: "Array Cardio Day 2",
    img: "assets/Day_7.png",
    previewLink:
      "https://fevenseyfu.github.io/Javascript-30/07-Array-Cardio-Day-2/",
  },
  {
    id: 8,
    name: "Fun with HTML5",
    img: "assets/Day_8.png",
    previewLink:
      "https://fevenseyfu.github.io/Javascript-30/08-Fun-With-HTML5/",
  },
  {
    id: 9,
    name: "Dev Tools Domination",
    img: "assets/Day_9.png",
    previewLink:
      "https://fevenseyfu.github.io/Javascript-30/09-Dev-Tools-Domination/",
  },
  {
    id: 10,
    name: "To Do List",
    img: "assets/Day_10.png",
    previewLink: "https://fevenseyfu.github.io/Javascript-30/10-ToDo-List/",
  },
  {
    id: 11,
    name: "Custom Video Player",
    img: "assets/Day_11.png",
    previewLink:
      "https://fevenseyfu.github.io/Javascript-30/11-Custom-video-player/",
  },
  {
    id: 12,
    name: "Key Sequence Detection",
    img: "assets/Day_12.png",
    previewLink:
      "https://fevenseyfu.github.io/Javascript-30/12-key-sequence-detection/",
  },
  {
    id: 13,
    name: "Slide In On Scroll",
    img: "assets/Day_13.gif",
    previewLink:
      "https://fevenseyfu.github.io/Javascript-30/13-slide-in-on-scroll/",
  },
  {
    id: 14,
    name: "Javascript Reference Vs Copy",
    img: "assets/Day_14.png",
    previewLink:
      "https://fevenseyfu.github.io/Javascript-30/14-reference-vs-copy/",
  },
  {
    id: 15,
    name: "Local Storage",
    img: "assets/Day_15.png",
    previewLink: "https://fevenseyfu.github.io/Javascript-30/15-LocalStorage/",
  },
  {
    id: 16,
    name: "Mouse Shadow",
    img: "assets/Day_16.gif",
    previewLink:
      "https://fevenseyfu.github.io/Javascript-30/16-mouse-move-shadow/",
  },
  {
    id: 17,
    name: "sort-without-articles",
    img: "assets/Day_17.gif",
    previewLink:
      "https://fevenseyfu.github.io/Javascript-30/17-sort-without-articles/",
  },
  {
    id: 18,
    name: "Adding Up Times with Reduce",
    img: "assets/Day_18.png",
    previewLink:
      "https://fevenseyfu.github.io/Javascript-30/18-Adding-Up-Times-with-Reduce/",
  },
  {
    id: 19,
    name: "Adding Up Times with Reduce",
    img: "assets/Day_19.png",
    previewLink: "https://fevenseyfu.github.io/Javascript-30/19-webcam-fun/",
  },
  {
    id: 20,
    name: "Speech Detection",
    img: "assets/Day_20.png",
    previewLink:
      "https://fevenseyfu.github.io/Javascript-30/20-speech-detection/",
  },
  {
    id: 21,
    name: "Geo Location",
    img: "assets/Day_21.png",
    previewLink: "https://fevenseyfu.github.io/Javascript-30/21-Geo-location/",
  },
  {
    id: 22,
    name: "Follow along Nav",
    img: "assets/Day_22.gif",
    previewLink:
      "https://fevenseyfu.github.io/Javascript-30/22-follow-along-link/",
  },
  {
    id: 23,
    name: "Text to Speech converter",
    img: "assets/Day_23.png",
    previewLink:
      "https://fevenseyfu.github.io/Javascript-30/23-speech-syntesis/",
  },
  {
    id: 24,
    name: "Sticky Nav",
    img: "assets/Day_24.gif",
    previewLink: "https://fevenseyfu.github.io/Javascript-30/24-sticky-nav/",
  },
  {
    id: 25,
    name: "Event Capture, bubble and propagation",
    img: "assets/Day_25.png",
    previewLink:
      "https://fevenseyfu.github.io/Javascript-30/25-event-Capture-propagation-bubbling/",
  },
  {
    id: 26,
    name: "Expand Follow along Nav",
    img: "assets/Day_26.gif",
    previewLink:
      "https://fevenseyfu.github.io/Javascript-30/26-stripe-follow-along-nav/",
  },
  {
    id: 27,
    name: "Click and drag Slider",
    img: "assets/Day_27.gif",
    previewLink: "https://fevenseyfu.github.io/Javascript-30/27-Click&Drag/",
  },
  {
    id: 28,
    name: "Video Speed controller",
    img: "assets/Day_28.gif",
    previewLink:
      "https://fevenseyfu.github.io/Javascript-30/28-Video-Speed-Controller/",
  },
  {
    id: 29,
    name: "Count Down Timer",
    img: "assets/Day_29.gif",
    previewLink:
      "https://fevenseyfu.github.io/Javascript-30/29-Countdonw-Timer/",
  },
  {
    id: 30,
    name: "Whack A Mole",
    img: "assets/Day_30.gif",
    previewLink: "https://fevenseyfu.github.io/Javascript-30/30-Whack-a-mole/",
  },
];
const boxes = document.querySelectorAll(".box");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-link");
const ProjectSection = document.getElementById("projects");
const heroSection = document.getElementById('hero');
const jumpTopButton = document.querySelector('.jump-top')
const sections=document.querySelectorAll('section')

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

  // links add or remove current style
  sections.forEach(section=>{
    let scrollPosition = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute('id');
    if(scrollPosition >= offset && scrollPosition < offset + height) {
        navLinks.forEach(links => {
            links.classList.remove('current');
            document.querySelector('ul li a[href*=' + id + ']').classList.add('current');
        });
      }
  })

  if (scrollPosition < heroSection.offsetHeight) {
      jumpTopButton.style.visibility = 'hidden';
  }else{
    jumpTopButton.style.visibility = 'visible';
  }
};

window.addEventListener("scroll", fixNavbar);

// projects
const projectBox = document.getElementById("box");
projects.forEach((project) => {
  projectCard = document.createElement("div");
  projectCard.classList.add("project-card");
  projectCard.setAttribute("data-id", `${project.id}`);
  projectCard.innerHTML = `
        <img src="${project.img}" />
        <span class="tag">Day ${project.id}</span>
        <div class="overlay">
            <h2 class="project-name">${project.name}</h2>
            <button class="btn">
                <a href="${project.previewLink}">Live Demo</a>
            </button>
        </div>
            `;
  ProjectSection.appendChild(projectCard);
});

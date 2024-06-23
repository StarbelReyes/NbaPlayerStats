document.addEventListener("DOMContentLoaded", function () {
  const cutouts = document.querySelectorAll(".cutout, .cutout1, .cutout2");
  const arrows = document.querySelectorAll(".prev, .next");

  cutouts.forEach((cutout) => {
    let fadeTimeout;

    cutout.addEventListener("mouseenter", function () {
      // Clear any existing fade timeout
      clearTimeout(fadeTimeout);

      // Remove existing fade-out class if any
      cutouts.forEach((c) => c.classList.remove("fade-out"));
      arrows.forEach((arrow) => arrow.classList.remove("fade-out"));

      // Set a timeout to add the fade-out class after 3 seconds
      fadeTimeout = setTimeout(() => {
        cutouts.forEach((c) => c.classList.add("fade-out"));
        arrows.forEach((arrow) => arrow.classList.add("fade-out"));
      }, 3000);
    });

    cutout.addEventListener("mouseleave", function () {
      // Clear any existing fade timeout
      clearTimeout(fadeTimeout);

      // Remove the fade-out class when mouse leaves
      cutouts.forEach((c) => c.classList.remove("fade-out"));
      arrows.forEach((arrow) => arrow.classList.remove("fade-out"));
    });
  });
});

// Player Information Functions
function lebronJames() {
  document.getElementById("lebron").innerHTML = `
         <h1><span class="lebron-name">LeBron</span> <span class="james-name">James</span> - NBA Legend</h1>
    <p>
        <strong>LeBron James</strong>, born December 30, 1984, in Akron, Ohio, is an NBA superstar widely regarded as one of the greatest basketball players of all time. A four-time NBA champion and four-time MVP, James has played for the Cleveland Cavaliers, Miami Heat, and Los Angeles Lakers. Known for his versatility, court vision, and scoring ability, he has amassed over 38,000 career points, 10,000 rebounds, and 10,000 assists. James is also a philanthropist, founding the LeBron James Family Foundation to support educational initiatives.
    </p>
    <p>
        <strong>Career Stats (as of June 2024):</strong>
    </p>
    <ul>
        <li>Points: 38,652</li>
        <li>Rebounds: 10,548</li>
        <li>Assists: 10,412</li>
        <li>Championships: 4</li>
        <li>MVPs: 4</li>
    </ul>
    `;
}

function lukaDoncic() {
  document.getElementById("luka").innerHTML = `
           <h1> Luka <span class="luka-name">Dončić</span> - NBA Star</h1>
    <p>
        <strong>Luka Dončić </strong>, born February 28, 1999, in Ljubljana, Slovenia, is a professional basketball player for the Dallas Mavericks in the NBA. A prodigy from a young age, he began his professional career with Real Madrid before being drafted third overall in the 2018 NBA Draft. Known for his exceptional ball-handling, scoring, and playmaking abilities, Dončić has quickly become one of the league's brightest stars, earning multiple All-Star selections and All-NBA Team honors.
    </p>
    <p>
        <strong>Career Stats (as of June 2024):</strong>
    </p>
    <ul>
        <li>Points: 9,870</li>
        <li>Rebounds: 3,487</li>
        <li>Assists: 3,193</li>
        <li>All-Star Selections: 4</li>
        <li>All-NBA Team Honors: 4</li>
    </ul>
    `;
}

function michaelJordan() {
  document.getElementById("michael").innerHTML = `
    <h1><span class="michael-name">Michael</span> <span class="jordan-name">Jordan</span> - Basketball Icon</h1>
    <p>
        <strong>Michael Jordan</strong>, born February 17, 1963, in Brooklyn, New York, is a retired NBA player often considered the greatest of all time. Jordan played the majority of his career with the Chicago Bulls, winning six NBA championships and earning five MVP awards. Known for his scoring prowess, competitive spirit, and defensive skills, he amassed over 32,000 career points. Jordan also had two stints with the Washington Wizards. Post-retirement, he became a successful businessman and owner of the Charlotte Hornets.
    </p>
    <p>
        <strong>Career Stats:</strong>
    </p>
    <ul>
        <li>Points: 32,292</li>
        <li>Rebounds: 6,672</li>
        <li>Assists: 5,633</li>
        <li>Championships: 6</li>
        <li>MVPs: 5</li>
    </ul>
    `;
}

// Clear Information Functions
function clearInfoLuka() {
  document.getElementById("luka").innerText = "";
}

function clearInfoLebron() {
  document.getElementById("lebron").innerText = "";
}

function clearInfoMichael() {
  document.getElementById("michael").innerHTML = "";
}

// Background Image Functions
function changeBckgrnd(imageUrl) {
  document.getElementById("background-image").style.backgroundImage = imageUrl;
}

function resetBckground() {
  if (originalBackground) {
    document.getElementById("background-image").style.backgroundImage =
      originalBackground;
  }
}

function applyBlur() {
  document.getElementById("background-image").style.filter = "blur(4px)";
  document.getElementById("background-image").style.webkitFilter = "blur(4px)"; // For Safari
}

// Video Playback Handlers
const videoPairs = [
  { cutout: ".cutout", video: "#sample" },
  { cutout: ".cutout1", video: "#sample1" },
  { cutout: ".cutout2", video: "#sample2" },
];

videoPairs.forEach((pair) => {
  const cutOutHover = $(pair.cutout);
  const showVideo = $(pair.video);

  function playVideo() {
    showVideo.addClass("show")[0].play();
  }

  function hideVideo() {
    showVideo.removeClass("show")[0].pause();
    showVideo[0].currentTime = 0;
  }

  cutOutHover.hover(playVideo, hideVideo);

  showVideo.on("ended", function () {
    this.currentTime = 0;
    this.play();
  });
});

// Slide Show Functions
let slideIndex = 1;
let originalBackground;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = Array.from(document.getElementsByClassName("mySlides"));
  let dots = Array.from(document.getElementsByClassName("dot"));

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach((slide) => (slide.style.display = "none"));
  dots.forEach((dot) => (dot.className = dot.className.replace(" active", "")));

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  // Set the background image based on the current slide
  let currentSlide = slides[slideIndex - 1];
  let backgroundUrl = currentSlide.getAttribute("data-background");
  changeBckgrnd(backgroundUrl);

  // Store the current background image
  originalBackground = backgroundUrl;
}

function handleMouseOver(imageUrl) {
  changeBckgrnd(imageUrl);
}

function handleMouseLeave() {
  resetBckground();
}

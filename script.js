function lebronJames() {
  document.getElementById("lebron").innerHTML = `
        <strong>LeBron James</strong>, born December 30, 1984, in Akron, Ohio,
        is an NBA superstar widely regarded as one of the greatest basketball players of all time.
        A four-time NBA champion and four-time MVP, James has played for the Cleveland Cavaliers, Miami Heat, and Los Angeles Lakers.
        Known for his versatility, court vision, and scoring ability, he has amassed over 38,000 career points, 10,000 rebounds, and 10,000 assists.
        James is also a philanthropist, founding the LeBron James Family Foundation to support educational initiatives.
        <br><br>
        <strong>Career Stats (as of June 2024):</strong><br>
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
        <strong>Luka Dončić</strong>, born February 28, 1999, in Ljubljana, Slovenia,
        is a professional basketball player for the Dallas Mavericks in the NBA. A prodigy from a young age,
        he began his professional career with Real Madrid before being drafted third overall in the 2018 NBA Draft.
        Known for his exceptional ball-handling, scoring, and playmaking abilities,
        Dončić has quickly become one of the league's brightest stars, earning multiple All-Star selections and All-NBA Team honors.
        <br><br>
        <strong>Career Stats (as of June 2024):</strong><br>
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
        <strong>Michael Jordan</strong>, born February 17, 1963, in Brooklyn, New York, is a retired NBA player often considered the greatest of all time.
        Jordan played the majority of his career with the Chicago Bulls, winning six NBA championships and earning five MVP awards. Known for his scoring prowess,
        competitive spirit, and defensive skills, he amassed over 32,000 career points.
        Jordan also had two stints with the Washington Wizards. Post-retirement, he became a successful businessman and owner of the Charlotte Hornets.
        <br><br>
        <strong>Career Stats:</strong><br>
        <ul>
            <li>Points: 32,292</li>
            <li>Rebounds: 6,672</li>
            <li>Assists: 5,633</li>
            <li>Championships: 6</li>
            <li>MVPs: 5</li>
        </ul>
    `;
}

function clearInfoLuka() {
  document.getElementById("luka").innerText = "";
}

function clearInfoLebron() {
  document.getElementById("lebron").innerText = "";
}

function clearInfoMichael() {
  document.getElementById("michael").innerHTML = "";
}

function changeBckgrnd(imageUrl) {
  document.getElementById("background-image").style.backgroundImage = imageUrl;
}

function applyBlur() {
  document.getElementById("background-image").style.filter = "blur(4px)";
  document.getElementById("background-image").style.webkitFilter = "blur(4px)"; // For Safari
}

$(document).ready(function () {
  $(".cutout").hover(
    function () {
      $(".cutout1, .cutout2").hide();
    },
    function () {
      $(".cutout1, .cutout2").show();
    }
  );

  $(".cutout1").hover(
    function () {
      $(".cutout, .cutout2").hide();
    },
    function () {
      $(".cutout, .cutout2").show();
    }
  );

  $(".cutout2").hover(
    function () {
      $(".cutout, .cutout1").hide();
    },
    function () {
      $(".cutout, .cutout1").show();
    }
  );
});

$(document).ready(function () {
  const showVideo = $("#sample");
  const cutOutHover = $(".cutout");

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

$(document).ready(function () {
  const showVideo1 = $("#sample1");
  const cutOutHover1 = $(".cutout1");

  function playVideo1() {
    showVideo1.addClass("show")[0].play();
  }

  function hideVideo1() {
    showVideo1.removeClass("show")[0].pause();
    showVideo1[0].currentTime = 0;
  }

  cutOutHover1.hover(playVideo1, hideVideo1);

  showVideo1.on("ended", function () {
    this.currentTime = 0;
    this.play();
  });
});

$(document).ready(function () {
  const showVideo2 = $("#sample2");
  const cutOutHover2 = $(".cutout2");

  function playVideo1() {
    showVideo2.addClass("show")[0].play();
  }

  function hideVideo1() {
    showVideo2.removeClass("show")[0].pause();
    showVideo2[0].currentTime = 0;
  }

  cutOutHover2.hover(playVideo1, hideVideo1);

  showVideo2.on("ended", function () {
    this.currentTime = 0;
    this.play();
  });
});

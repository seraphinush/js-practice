const reviews = [
  {
    id: 1,
    name: "Lee Jieun",
    job: "Singer",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl: "./img/1.png"
  },
  {
    id: 2,
    name: "Faker",
    job: "Game Athlete",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl: "./img/2.png"
  },
  {
    id: 3,
    name: "LeBron James",
    job: "Sports Athlete",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl: "./img/3.png"
  },
  {
    id: 4,
    name: "Jeff Bezos",
    job: "Entrepreneur",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl: "./img/4.png"
  }
];

const nameEl = document.getElementById("name");
const jobEl = document.getElementById("job");
const commentEl = document.getElementById("comment");
const imageEl = document.getElementById("image");

const pagination = document.querySelectorAll(".pagination");

let index = 0;

function updateReview(index) {
  let { name, job, comment, imageUrl } = reviews[index];
  nameEl.innerHTML = name;
  jobEl.innerHTML = job;
  commentEl.innerHTML = comment;
  imageEl.src = imageUrl;
}

window.onload = function () {
  updateReview(index);
}


pagination.forEach(action => {
  action.addEventListener("click", function () {
    if (action.classList.contains("prev")) {
      index--;
      if (index <= 0) {
        index = reviews.length - 1;
      }
      updateReview(index);
    }
    else if (action.classList.contains("next")) {
      index++;
      if (index >= reviews.length) {
        index = 0;
      }
      updateReview(index);
    }
  });

});

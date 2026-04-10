console.log("JS funguje");

const races = document.querySelectorAll(".race-card");

const today = new Date();
let nextRace = null;

races.forEach((race) => {
  const dateString = race.dataset.date;
  const raceDate = new Date(dateString);

  if (raceDate > today && nextRace === null) {
    nextRace = race;
  }
});

console.log("Dnes:", today);
console.log("NEXT závod:", nextRace);


races.forEach((race)=> {
 const status = race.querySelector(".race-status");
 const raceDate = new Date (race.dataset.date);

 status.classList.remove("next", "finished", "upcoming");

 if (raceDate < today) {
    status.classList.add("finished");
    status.textContent = "FINISHED";
    } else {
        status.classList.add("upcoming");
        status.textContent = "UPCOMING";
    }
});

if (nextRace) {
  const status = nextRace.querySelector(".race-status");
  status.classList.remove("upcoming");
  status.classList.add("next");
  status.textContent = "NEXT";
}

races.forEach((race, index) => {
if (index >= 5 ) {race.style.display ="none"; 

}

});

document.body.classList.add("loaded");

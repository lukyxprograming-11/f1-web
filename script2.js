console.log("JS běží");




// 1. URL → raceId
const params = new URLSearchParams(window.location.search);
const raceId = params.get("race");

console.log("raceId:", raceId);


// 2. NAJDI DATA
const race = races.find(r => r.id === raceId);

console.log("race:", race);


// 3. VLOŽ DO HTML
if (race) {
  // title
  const title = document.querySelector("#race-title");
  title.textContent = race.name;

  // schedule
  const scheduleList = document.querySelector("#schedule");

scheduleList.innerHTML = ""; // vyčistí list (důležité při reloadu)

race.schedule.forEach(item => {
  const li = document.createElement("li");
  li.classList.add("schedule-item");

  const date = document.createElement("span");
  date.classList.add("date");
  date.textContent = item.date;

  const practice = document.createElement("span");
  practice.classList.add("practice");
  practice.textContent = item.name;

  const time = document.createElement("span");
  time.classList.add("time");
  time.textContent = item.time;

  const result = document.createElement("span");
  result.classList.add("result");
  result.textContent = item.result;

  li.appendChild(date);
  li.appendChild(practice);
  li.appendChild(time);
  li.appendChild(result);

  scheduleList.appendChild(li);

  

});


// circuit
 const circuitcontainer = document.querySelector("#circuit");

  race.circuit.forEach(item => {
    const box = document.createElement("div");
    box.classList.add("box");

    if (item.full) {
        box.classList.add("box--full");

    }

    const label = document.createElement("span");
    label.classList.add("label");
    label.textContent = item.label;

    const value = document.createElement("span");
    value.classList.add("value");
    value.textContent = item.value;

    box.appendChild(label);
    box.appendChild(value);

    if (item.extra) {
      const extra = document.createElement("span");
      extra.classList.add("extra");
      extra.textContent = item.extra;
      box.appendChild(extra);
    }

    circuitcontainer.appendChild(box);
  });


 // info o okruhu
const accordionitem = document.querySelector("#info");

race.info.forEach(item => {
  const details = document.createElement("details");
  details.className = "accordion-item";

  // summary (otázka)
  details.innerHTML = `
    <summary class="accordion-question">${item.question}</summary>
  `;

  // odstavce (loop)
  item.answer.forEach(text => {
    const p = document.createElement("p");
    p.classList.add("accordion-answer");
    p.textContent = text;
    details.appendChild(p);
  });

  // přidání do stránky (jen jednou!)
  accordionitem.appendChild(details);
});

document.body.classList.add("loaded");

} 
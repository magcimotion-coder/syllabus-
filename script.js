const listView = document.getElementById("list-view");
const detailView = document.getElementById("detail-view");
const grid = document.getElementById("subject-grid");
const unitsBox = document.getElementById("units");
const titleEl = document.getElementById("detail-title");

function el(tag, text, cls) {
  const e = document.createElement(tag);
  if (text !== undefined) e.textContent = text;
  if (cls) e.className = cls;
  return e;
}

function topicList(topics) {
  const ul = el("ul");
  topics.forEach(t => ul.appendChild(el("li", t)));
  return ul;
}

function renderList() {
  SYLLABUS_DATA.forEach(subject => {
    const card = el("button", undefined, "card");
    card.type = "button";
    card.appendChild(el("strong", subject.name));
    card.appendChild(el("span", subject.units.length + " units"));
    card.addEventListener("click", () => { location.hash = subject.id; });
    grid.appendChild(card);
  });
}

function renderDetail(subject) {
  titleEl.textContent = subject.name;
  unitsBox.innerHTML = "";
  subject.units.forEach((unit, i) => {
    const d = el("details", undefined, "unit");
    if (i === 0) d.open = true;
    d.appendChild(el("summary", "Unit " + unit.number + ": " + unit.name));
    const body = el("div", undefined, "body");
    if (unit.topics) body.appendChild(topicList(unit.topics));
    if (unit.sections) {
      unit.sections.forEach(s => {
        body.appendChild(el("h4", s.name));
        body.appendChild(topicList(s.topics));
      });
    }
    d.appendChild(body);
    unitsBox.appendChild(d);
  });
}

function route() {
  const id = location.hash.slice(1);
  const subject = SYLLABUS_DATA.find(s => s.id === id);
  if (subject) {
    renderDetail(subject);
    listView.hidden = true;
    detailView.hidden = false;
    document.title = subject.name + " | B.Tech CSE (DS)";
  } else {
    listView.hidden = false;
    detailView.hidden = true;
    document.title = "B.Tech CSE (DS) Syllabus";
  }
  window.scrollTo(0, 0);
}

document.getElementById("back-btn").addEventListener("click", () => { location.hash = ""; });
window.addEventListener("hashchange", route);
renderList();
route();

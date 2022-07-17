const END_PAGE = 6;

const OTHER_FILES = [
  "static/templates/header.html",
  "static/templates/helpful_links.html",

  "static/pages/page_final.html",
];

const SCRIPTS = [
  "js/help_buttons.js",
  "static/templates/helpful_links.js",
];

function addHTMLInBody(file) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        var allText = rawFile.responseText;
        document.body.innerHTML = document.body.innerHTML + "\n\n" + allText;
      }
    }
  };
  rawFile.send(null);
}

SCRIPTS.forEach((value) => {
  script = document.createElement("script");
  script.src = value;

  document.body.appendChild(script);
  console.log({ type: "Loaded script", script: value });
});

OTHER_FILES.forEach((file) => {
  addHTMLInBody(file);

  console.log({ type: "Loaded file", file });
});

for (let i = 0; i <= END_PAGE; i++) {
  let page = `static/pages/page_${i}.html`;

  addHTMLInBody(page);
  console.log({ type: "Loaded page", page });
}

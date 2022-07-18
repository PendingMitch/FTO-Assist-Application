const END_PAGE = 7;

const OTHER_FILES = [
  "static/templates/header.html",
  "static/templates/helpful_links.html",

  "static/pages/page_final.html",
];

const CONCERNS = {
  0: "Initial",
  1: "Discord",
  2: "CAD",
  3: "Uniform",
  4: "Vehicle",
  5: "Radio",
  6: "10-11",
  7: "Traffic Management",
}

const SCRIPTS = ["js/help_buttons.js", "static/templates/helpful_links.js"];

function readText(file) {
  var rawFile = new XMLHttpRequest();
  let allText
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        allText = rawFile.responseText;
      }
    }
  };
  rawFile.send(null);
  return allText;
}

function addHTMLInBody(file) {
  let text = readText(file)
  if (text != undefined) {
    document.body.innerHTML = `${document.body.innerHTML}\n\n ${text} `;
  }
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

  let text = readText(page);
  addHTMLInBody(page);



  // CONCERNS
  let concerns = readText('static/templates/concerns.html')


  document.getElementById("page_" + i).innerHTML = `${document.getElementById("page_" + i).innerHTML} \n\n ${concerns}`
  document.getElementById("concerns_").id = `concerns_${i}`
  document.getElementById("concerns_" + i).setAttribute("head", CONCERNS[Number(i)])
  document.getElementById("continue_").id = `continue_${i}`

}

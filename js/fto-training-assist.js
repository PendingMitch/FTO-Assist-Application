hidepage = (page_number, next_page) => {
  document.getElementById("page_" + page_number).style.display = "none";

  document.getElementById("page_" + next_page).style.display = "block";
};

disable_page_button = (page_number) => {
  button = document.getElementById("continue_" + page_number);
  button.disabled = true;

  if (document.getElementById("concerns_" + page_number).value == "") {
    document.getElementById("concerns_" + page_number).value = "None (N/A)";
  }
  textarea = document.getElementById("concerns_" + page_number);
  textarea.disabled = true;
};

continue_assist = (page) => {
  if (isNaN(page) == true) {
    return;
  }
  disable_page_button(page);
  if (page == 6) {
    
  }

  if (page == END_PAGE) {
    hidepage(page, "final");
  } else {
    hidepage(page, page + 1);
  }

  scrollTo(0, 0);
};

function copyReport() {
  if (document.getElementById("concern_final").value == "") {
    document.getElementById("concern_final").value = "None (N/A)";
  }

  let text =
    "Callsign: " +
    document.getElementById("Callsign_final").value +
    "\nDiscord: " +
    document.getElementById("Discord_final").value +
    "\n";

  concern_0 = document.getElementById("concerns_0");
  text = text + concern_0.getAttribute("head") + concern_0.value + "\n";

  concern_1 = document.getElementById("concerns_1");
  text = text + concern_1.getAttribute("head") + concern_1.value + "\n";

  concern_2 = document.getElementById("concerns_2");
  text = text + concern_2.getAttribute("head") + concern_2.value + "\n";

  concern_3 = document.getElementById("concerns_3");
  text = text + concern_3.getAttribute("head") + concern_3.value + "\n";

  concern_4 = document.getElementById("concerns_4");
  text = text + concern_4.getAttribute("head") + concern_4.value + "\n";

  concern_5 = document.getElementById("concerns_5");
  text = text + concern_5.getAttribute("head") + concern_5.value + "\n";

  concern_final = document.getElementById("concern_final");
  text = text + concern_final.getAttribute("head") + concern_final.value + "\n";

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(text);

  document.getElementById("report").innerHTML =
    "<b><u>COPIED TO CLIPBOARD</u></b> <br><br>" +
    text.replaceAll("\n", "<br>");
}



// hidepage(0, 6)
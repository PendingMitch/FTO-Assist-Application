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
  let NONE_MSG = "None (N/A)";
  if (document.getElementById("concern_final").value == "") {
    document.getElementById("concern_final").value = "None (N/A)";
  }

  let text =
    "Callsign: " +
    document.getElementById("Callsign_final").value +
    "\nDiscord: " +
    document.getElementById("Discord_final").value +
    "\n";

  for (let i = 0; i <= END_PAGE; i++) {
    let concerns = document.getElementById("concerns_" + i);
    if (concerns.value != NONE_MSG) {
      text = `${text}${concerns.getAttribute("head")}${concerns.value} \n`;
    }
  }

  concern_final = document.getElementById("concern_final");
  text = text + concern_final.getAttribute("head") + concern_final.value + "\n";

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(text);

  document.getElementById("report").innerHTML =
    "<b><u>COPIED TO CLIPBOARD</u></b> <br><br>" +
    text.replaceAll("\n", "<br>");
}

// hidepage(0, 6)

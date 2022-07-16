const LIST_OF_COLOURS = {
  0: {
    text: "black",
    background: "#d6cbd3"
  },
  2: {
    text: "black",
    background: "#eca1a6"
  },
  3: {
    text: "black",
    background: "#bdcebe"
  }
}

hidepage = (page_number, next_page) => {
  document.getElementById("page_" + page_number).style.display = "none"

  document.getElementById("page_" + next_page).style.display = "block"
}

disable_page_button = (page_number) => {
  button = document.getElementById("continue_" + page_number)
  button.disabled = true

  if (document.getElementById("concerns_" + page_number).value == "") {
    document.getElementById("concerns_" + page_number).value = "None (N/A)"
  }
  textarea = document.getElementById("concerns_" + page_number)
  textarea.disabled = true
}

createLinkButton = (button_name, button_link, page_number) => {
  a_tag = document.createElement('a')
  a_tag.href = button_link
  a_tag.target = "”_blank2_helpfullinks”"
  
  
  button = document.createElement('button')
  console.log(LIST_OF_COLOURS[page_number])

  button.style.backgroundColor = LIST_OF_COLOURS[page_number]["background"]
  button.style.color = LIST_OF_COLOURS[page_number]["text"]
  
  button.innerHTML = button_name
  a_tag.appendChild(button)

  document.getElementById('helpful_links').appendChild(a_tag)
}


continue_assist = (page) => {
  if (isNaN(page) == true) {return}
  disable_page_button(page)
  if (page == 0) {
    hidepage(page, page+1)
    createLinkButton("【📁】documentation", "https://discord.com/channels/782346927831908390/782635824977149983", page)
    createLinkButton("Document Portal", "https://docs.google.com/document/d/1-sH1XiyuRwVK60EwC5p6e3uE2jp2AQWpjXFVOv_ENXs/edit?usp=sharing", page)
  } else if (page == 1) {
    hidepage(page, page+1)
  } else if (page == 2) {
    hidepage(page, page+1)
    createLinkButton("FivePDRP CAD", "https://sonorancad.com/community/menu",page)
  } else if (page == 3) {
    hidepage(page, page+1)
    createLinkButton("Uniform Guide", "https://drive.google.com/file/d/1LCVDCJ_HDsTkcFAkY8TI-VsvDH9ixH37/view", page)
  } else if (page == 4) {
    hidepage(page, page+1)
  } else if (page == 5) {
    hidepage(page, "final")
  }


  scrollTo(0,0)
}


function copyReport() {

  if (document.getElementById("concern_final").value == "") {
    document.getElementById("concern_final").value = "None (N/A)"
  }

  let text = "Callsign: " + document.getElementById('Callsign_final').value + '\nDiscord: ' + document.getElementById("Discord_final").value + '\n'

  concern_0 = document.getElementById("concerns_0")
  text = text + concern_0.getAttribute("head") + concern_0.value + '\n';
  
  concern_1 = document.getElementById("concerns_1")
  text = text + concern_1.getAttribute("head") + concern_1.value + '\n';
  
  concern_2 = document.getElementById("concerns_2")
  text = text + concern_2.getAttribute("head") + concern_2.value + '\n';
  
  concern_3 = document.getElementById("concerns_3")
  text = text + concern_3.getAttribute("head") + concern_3.value + '\n';
  
  concern_4 = document.getElementById("concerns_4")
  text = text + concern_4.getAttribute("head") + concern_4.value + '\n';
  
  concern_5 = document.getElementById("concerns_5")
  text = text + concern_5.getAttribute("head") + concern_5.value + '\n';

  concern_final = document.getElementById("concern_final")
  text = text + concern_final.getAttribute("head") + concern_final.value + '\n';
  
  /* Copy the text inside the text field */
  navigator.clipboard.writeText(text);
  
  document.getElementById('report').innerHTML = "<b><u>COPIED TO CLIPBOARD</u></b> <br><br>" + text.replaceAll('\n', "<br>");

  
  
}

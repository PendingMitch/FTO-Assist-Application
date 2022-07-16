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
  }


  scrollTo(0,0)
}
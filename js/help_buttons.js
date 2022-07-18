const PURPLE = "#d6cbd3";
const PINK = "#eca1a6";
const GREEN = "#bdcebe";

const LIST_OF_HELPBUTTONS = [
  {
    title: "【📁】documentation",
    link: "https://discord.com/channels/782346927831908390/782635824977149983",
    color: PURPLE,
  },
  {
    title: "Document Portal",
    link: "https://docs.google.com/document/d/1-sH1XiyuRwVK60EwC5p6e3uE2jp2AQWpjXFVOv_ENXs/edit?usp=sharing",
    color: GREEN,
  },
  {
    title: "Training Guide",
    link: "https://drive.google.com/file/d/1_8mBfWPM7JIM6CG7hfAxxWs31W2iFQkg/view",
    color: GREEN,
  },
  {
    title: "FivePDRP CAD",
    link: "https://sonorancad.com/community/menu",
    color: PINK,
  },
  {
    title: "SAHP SOP",
    link: "https://docs.google.com/document/d/15d2zlnKADKGstx3h-WUK5uEhLpz0HPSURWoYmyaKb2M/edit",
    color: GREEN,
  },
  {
    title: "Uniform Guide",
    link: "https://drive.google.com/file/d/1LCVDCJ_HDsTkcFAkY8TI-VsvDH9ixH37/view",
    color: GREEN,
  },
];

createLinkButton = (button_name, button_link, color) => {
  a_tag = document.createElement("a");
  a_tag.href = button_link;
  a_tag.target = "”_blank2_helpfullinks_" + button_name + "”";

  button = document.createElement("button");
  button.classList.add("btn")
  button.classList.add("btn-info")
  

  button.innerHTML = button_name;
  a_tag.appendChild(button);


  document.getElementById("helpful_links").appendChild(a_tag);
};

LIST_OF_HELPBUTTONS.forEach((object) => {
  createLinkButton(object.title, object.link, object.color);
});

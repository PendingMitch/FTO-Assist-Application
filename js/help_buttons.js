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
    title: "Standard Operations Procedure",
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
  button.style.backgroundColor = color;
  button.style.color = "black";

  button.innerHTML = button_name;
  a_tag.appendChild(button);

  copy_icon = document.createElement("img");
  copy_icon.src = "static/images/copy_icon.svg";
  copy_icon.classList.add("copy_icon");
  copy_icon.addEventListener("click", () => {
    navigator.clipboard.writeText(a_tag.href);
  });

  div = document.createElement("div");
  div.appendChild(a_tag);
  div.appendChild(copy_icon);
  document.getElementById("helpful_links").appendChild(div);
};

LIST_OF_HELPBUTTONS.forEach((object) => {
  createLinkButton(object.title, object.link, object.color);
});

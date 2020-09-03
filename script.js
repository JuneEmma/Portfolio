let themeCircle = document.getElementsByClassName("theme-circle");
let theme = localStorage.getItem("theme");

if (theme == null) {
  themeColor("light");
} else {
  themeColor(theme);
}

for (var i = 0; themeCircle.length > i; i++) {
  themeCircle[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    console.log("Option Clicked:", mode);
    themeColor(mode);
  });
}

function themeColor(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "css/light.css";
  }
  if (mode == "dark") {
    document.getElementById("theme-style").href = "css/dark.css";
  }

  //  else if (mode == "dark") {
  //    document.getElementById("theme-style").href = "light.css";
  //  }

  //  else {
  //    document.getElementById("theme-style").href = "light.css";
  //  }

  localStorage.setItem("theme", mode);
}

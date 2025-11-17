console.log('Hello World!');
function dialCode(code) {
  window.location.href = "tel:" + encodeURIComponent(code);
}
function toggleDrawer() {
  const drawer = document.getElementById("drawer");
  drawer.style.right = drawer.style.right === "0px" ? "-200px" : "0px";
}

function showAbout() {
  document.getElementById("aboutBox").style.display = "block";
}

window.onload = function() {
  setTimeout(function() {
    document.getElementById("splash").style.display = "none";
  }, 4000); // 4000ms = 4 seconds
};
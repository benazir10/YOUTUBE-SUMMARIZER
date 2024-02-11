const btn = document.getElementById("summarise");
btn.addEventListener("click", function() {
  btn.disabled = true;
  btn.innerHTML "Summarising...";
  chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
    var url = tabs[0].url;
    var xhr = new XMLHttpRequest();







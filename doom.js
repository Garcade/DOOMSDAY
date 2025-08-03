
window.onload = function() {
  const text = document.getElementById("doom-text");
  const voice = document.getElementById("doom-voice");
  const lines = [
    "Welcome, Operator...",
    "The cyber dimensions are collapsing.",
    "Shall we begin?"
  ];
  let index = 0;
  function showLine() {
    if (index < lines.length) {
      text.innerHTML += lines[index] + "<br/>";
      index++;
      setTimeout(showLine, 2000);
    } else {
      voice.play();
      setTimeout(() => window.location.href = "doomsday.html", 4000);
    }
  }
  showLine();
}

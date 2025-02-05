function changePic() {
  var img = document.getElementById("uri_logo");
  img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Rhode_Island_Rams_logo.svg/1200px-Rhode_Island_Rams_logo.svg.png";
  img.style.width = "200px"; 
}

function changeTags() {
  var paragraphs = document.getElementsByTagName("p");
  for (var i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.color = "blue"; 
  }
}

function removeParagraph() {
  if (confirm("Are you sure you want to remove this paragraph?")) {
      var button = event.target;
      var paragraph = button.closest("p");
      paragraph.remove();
  }
}
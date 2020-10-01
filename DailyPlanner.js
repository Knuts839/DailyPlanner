var image9 = document.getElementById("img9");

image9.onclick = function() {
    // modal.style.display = "block";
    // modalImg.src = this.src;
    // captionText.innerHTML = this.alt;

    var textStr = "";

    textStr = document.getElementById("Text9am").value;
    localStorage.setItem("WorkText9AM", JSON.stringify(textStr));
}

object.onload = function() { myScript };

function Onload() {
    var textStr = "";

    textStr = localStorage.getItem("WorkText9AM");
    document.getElementById("Text9am").value = textStr;

}
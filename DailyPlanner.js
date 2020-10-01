var image9 = document.getElementById("img9");
var image10 = document.getElementById("img10")
var image11 = document.getElementById("img11");
var image12 = document.getElementById("img12");
var image1 = document.getElementById("img1");
var image2 = document.getElementById("img2");
var image3 = document.getElementById("img3");
var image4 = document.getElementById("img4");
var image5 = document.getElementById("img5");


image9.onclick = function() {
    var textStr = "";

    textStr = document.getElementById("Text9am").value;
    localStorage.setItem("WorkText9AM", JSON.stringify(textStr));
}

image10.onclick = function() {
    var textStr = "";

    textStr = document.getElementById("Text10am").value;
    localStorage.setItem("WorkText10AM", JSON.stringify(textStr));
}

image11.onclick = function() {
    var textStr = "";

    textStr = document.getElementById("Text11am").value;
    localStorage.setItem("WorkText11AM", JSON.stringify(textStr));
}

image12.onclick = function() {
    var textStr = "";

    textStr = document.getElementById("Text12pm").value;
    localStorage.setItem("WorkText12PM", JSON.stringify(textStr));
}

image1.onclick = function() {
    var textStr = "";

    textStr = document.getElementById("Text1pm").value;
    localStorage.setItem("WorkText1PM", JSON.stringify(textStr));
}
image2.onclick = function() {
    var textStr = "";

    textStr = document.getElementById("Text2pm").value;
    localStorage.setItem("WorkText2PM", JSON.stringify(textStr));
}
image3.onclick = function() {
    var textStr = "";

    textStr = document.getElementById("Text3pm").value;
    localStorage.setItem("WorkText3PM", JSON.stringify(textStr));
}

image4.onclick = function() {
    var textStr = "";

    textStr = document.getElementById("Text4pm").value;
    localStorage.setItem("WorkText4PM", JSON.stringify(textStr));
}

image5.onclick = function() {
    var textStr = "";

    textStr = document.getElementById("Text5pm").value;
    localStorage.setItem("WorkText5PM", JSON.stringify(textStr));
}


// { myScript };
window.onload = function() {
    var textStr = "";

    textStr = JSON.parse(localStorage.getItem("WorkText9AM"));
    document.getElementById("Text9am").value = textStr;

    textStr = JSON.parse(localStorage.getItem("WorkText10AM"));
    document.getElementById("Text10am").value = textStr;

    textStr = JSON.parse(localStorage.getItem("WorkText11AM"));
    document.getElementById("Text11am").value = textStr;

    textStr = JSON.parse(localStorage.getItem("WorkText12PM"));
    document.getElementById("Text12pm").value = textStr;

    textStr = JSON.parse(localStorage.getItem("WorkText1PM"));
    document.getElementById("Text1pm").value = textStr;

    textStr = JSON.parse(localStorage.getItem("WorkText2PM"));
    document.getElementById("Text2pm").value = textStr;

    textStr = JSON.parse(localStorage.getItem("WorkText3PM"));
    document.getElementById("Text3pm").value = textStr;

    textStr = JSON.parse(localStorage.getItem("WorkText4PM"));
    document.getElementById("Text4pm").value = textStr;

    textStr = JSON.parse(localStorage.getItem("WorkText5PM"));
    document.getElementById("Text5pm").value = textStr;
}
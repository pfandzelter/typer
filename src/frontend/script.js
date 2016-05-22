var conn = new WebSocket('ws://localhost:8080');

var textDiv = document.getElementById('text');

conn.onopen = function(e) {
    console.log("Connection established!");
};

conn.onmessage = function(e) {
    textDiv.innerHTML += e.data;
    checkText();
};

document.onkeydown = function myKeyPress(e){
    var keynum;

    if(window.event) { // IE
      keynum = e.keyCode;
    } else if(e.which){ // Netscape/Firefox/Opera
      keynum = e.which;
    }

    conn.send(String.fromCharCode(keynum).toLowerCase());
};

window.onresize = function(event) {
    checkText();
};

function checkText() {
    while(textDiv.scrollHeight > textDiv.clientHeight) {
        textDiv.innerHTML = textDiv.innerHTML.substring(1);
    }
}

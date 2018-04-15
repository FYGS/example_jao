(function () {
    'use strict';

    function clean() {
        console.log("cleaning");
        document.getElementById("myDiv").innerHTML = "";
    }

    function loadXMLDocAsync() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "content.json", true);
        xmlhttp.send();
    }

    function loadXMLDocSync() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "content.json", false);
        console.log("about to send");
        xmlhttp.send();
        console.log("send finished");
    }

    window.ajax = { clean, loadXMLDocAsync, loadXMLDocSync };

})();
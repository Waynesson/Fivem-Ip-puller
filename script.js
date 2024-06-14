const axios = require('axios');

function getServerIP() {
    const urlInput = document.getElementById('serverUrl').value;
    let url;

    if (urlInput.startsWith("cfx.re/join/")) {
        url = "https://" + urlInput;
    } else if (urlInput.startsWith("https://cfx.re/join/")) {
        url = urlInput;
    } else {
        url = "https://cfx.re/join/" + urlInput;
    }

    axios.get(url)
        .then(response => {
            const serverIP = response.headers["x-citizenfx-url"].replace("http://", "").replace("/", "");
            document.getElementById('result').innerHTML = `
                CFX.re IP: <span style="color: #00ffff">${urlInput}</span><br>
                IP address: <span style="color: #00ffff">${serverIP}</span>
            `;
        })
        .catch(error => {
            document.getElementById('result').innerHTML = `
                Server was not found! Check server's CFX.re IP address or server might be offline!
            `;
        });
}

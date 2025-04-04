window.onload = function () {
    console.log("Tämä kirjoitetaan selaimen konsoliin");
}

function updateMap() {
    let address = document.getElementById("katuname").value;
    let city = document.getElementById("kaupunkiname").value;
    let place = 'https://maps.google.com/maps?q=' + address + city + '&output=embed';
    let iframeElement = document.getElementById('map-frame');
    iframeElement.src = place;
}


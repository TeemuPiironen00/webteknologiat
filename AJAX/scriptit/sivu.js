function init() {
    document.getElementById("gif").style.display = "none";
}
function getNumber() {
    document.getElementById("gif").style.display = "block";
    fetch('http://numbersapi.com/random/math')
        .then(function (response) {
            return response.text();
        })
        .then(function (result) {
            document.getElementById("gif").style.display = "none";
            document.getElementById("result").innerHTML += "<br>" + "<i>" + result + "</i>";
        })
        .catch(function (error) {
            document.getElementById("gif").style.display = "none";
            console.log(error);
        });
}


let count = 0;
function countClick() {
    count++;
    document.getElementById('clickCount').textContent = count;
}
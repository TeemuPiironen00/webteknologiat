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


            let data = `
<div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${count}" aria-expanded="true" aria-controls="collapse${count}">
        Random Math Fact #${count}
      </button>
    </h2>
    <div id="collapse${count}" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        ${result}
      </div>
    </div>
  </div>`;
            document.getElementById("accordionFlushExample").innerHTML += data;



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


let request = $.ajax({
  type: "GET",
  url: "https://jsonplaceholder.typicode.com/todos",
  dataType: "json",
  timeout: 120000, //2 Minutes
  cache: false,
  contentType: false,
  processData: false,
  beforeSend: function () {
    //Code à jouer avant l'appel ajax en lui même
  },
});

request.done(function (response) {
  //Code à jouer en cas d'éxécution sans erreur du script du PHP
  for (let i = 0; i < response.length; i++) {
    $(".grille-card").append(`<div class="col mb-4">
    <div class="card h-100">
        <div class="card-header bg-transparent border-0">
        <button class="btn btn-primary">N° de la tâche : <span class="badge badge-light">${response[i].id}</span></button>
        </div>
        <div class="card-body">
        <p>${response[i].title}</p>
        </div>
        <div class="card-footer bg-transparent border-0">
        <button class="btn ${response[i].completed ? ` btn-success">Terminée` : ` btn-warning">En cours`}</button>
        </div>
    </div>
  </div>`);
  }
});
request.fail(function (http_error) {
  //Code à jouer en cas d'éxécution en erreur du script du PHP

  let server_msg = http_error.responseText;
  let code = http_error.status;
  let code_label = http_error.statusText;
  alert("Erreur " + code + " (" + code_label + ") : " + server_msg);
});
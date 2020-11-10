$(document).ready(function() {

  // Creo un oggetto che descrive uno studente con le seguenti proprietà: nome, cognome e età.
  var studente = {
    "nome": "A",
    "cognome": "B",
    "eta": 0,
  }

  // Stampo tutte le proprietà dell'oggetto studente
  for (var key in studente) {
   console.log(studente[key]);
}

  // Creo un array di oggetti di studenti.
  var studenti = [{
      "nome": "Pinco",
      "cognome": "Pallino",
      "eta": 28,
    },
    {
      "nome": "Tizio",
      "cognome": "Caio",
      "eta": 26,
    },
    {
      "nome": "Asdrubale",
      "cognome": "Asdrubalini",
      "eta": 23,
    },
    {
      "nome": "Tal",
      "cognome": "Dei Tali",
      "eta": 31,
    },
    {
      "nome": "Othman",
      "cognome": "Taik",
      "eta": 23,
    }
  ]



  // Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
  $('button').click(function(){
  var nuovoStudente = {};
  nuovoStudente.nome = prompt("inserisci il tuo nome");
  nuovoStudente.cognome = prompt("inserisci il tuo cognome");
  nuovoStudente.eta = parseInt(prompt("inserisci la tua età"));
  studenti.push(nuovoStudente);
 })

  // Ciclo su tutti gli studenti e stampo per ognuno nome e cognome
  for (var i = 0; i < studenti.length; i++) {
    var studentiLista = studenti[i];
    console.log(studentiLista.nome);
    console.log(studentiLista.cognome);
  }
});

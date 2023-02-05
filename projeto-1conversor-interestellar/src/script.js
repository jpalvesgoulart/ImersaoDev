var user = "João";
var valorAl = 33;
var emKm = 9461000000000000;
var emMts = 9461000000000000000;
var valorMts = (valorAl * emMts).toFixed(2);
var valorKm = (valorAl * emKm).toFixed(2);
alert(
  "Olá, " +
    user +
    "! " +
    valorAl +
    " anos-luz correspondem a " +
    valorMts +
    " metros, que correspondem a " +
    valorKm +
    " quilômetros."
);

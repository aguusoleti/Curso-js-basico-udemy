let nota;
let notaLetra = ' ';
function calcularNota(nota)
{
if (nota <= 100)
{
  if (nota >= 90 ){
  notaLetra = 'A';
  
}else if (nota >= 80 ){
  notaLetra = 'B';
  //console.log(nota + ' es igual a: ' + notaLetra);
}else if (nota >= 70 ){
  notaLetra = 'C';
  //console.log(nota + ' es igual a: ' + notaLetra);
}else if (nota >= 60 ){
  notaLetra = 'D';
  //console.log(nota + ' es igual a: ' + notaLetra);
}else {
  notaLetra = 'F';
 // console.log(nota + ' es igual a: ' + notaLetra);
      }
    }
    console.log(nota + ' es igual a: ' + notaLetra);
  }

  calcularNota(100);
  console.log("\n");
  calcularNota(80);
  console.log("\n");
  calcularNota(59);
  console.log("\n");
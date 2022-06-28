

let tabla = 5;
let limite = 10;


function tablas(tabla, limite)
{
  let a =0;
  resultado = 0 ;

  for(a=0 ; a<=limite ; a++)
    { 
    resultado = tabla * a;
    console.log ("%d x %d=%d", tabla, a, resultado);
    }
}
tablas(5, 10);
console.log("\n");
tablas(7, 10);
console.log("\n");
tablas(3, 10);
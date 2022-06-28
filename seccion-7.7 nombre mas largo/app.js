let heroes =[ 'deadpool', 'ciclope', 'magneto', 'profesor charles xavier'];
let heroeLargo = nombreLargo(heroes)
console.log(heroeLargo);
function nombreLargo(arreglo){

    let nombre = '';
for (i=0; i< arreglo.length; i++)
{
let tamanio = arreglo[i] ;
if(tamanio.length > nombre.length)
nombre = tamanio;
}
console.log(nombre);
return nombre;

}
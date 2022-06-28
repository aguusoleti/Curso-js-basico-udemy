let nota = 48 ;
let falto=0;
if(nota >= 60)
{
  console.log('aprobado');
}else
{
  if(nota < 50)
  {
    falto = 60 - nota;
    console.log('por favor estudie mas')
    console .log('le falto %d porciento, BURRO',falto);
  }else 
  console.log('desaprobado');

 
}
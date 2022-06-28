let numeros = [1,6,8,22,0,7,10,3,5];
let i=0;
let numeroMayor = 0;
for(i=0; i<numeros.length; i++)
{
    let paridad = numeros[i] % 2;
    if(paridad === 0)
    {
        console.log('el numero ' + numeros[i]+ ' es par');
    }else {
    console.log('el numero ' + numeros[i]+ ' es impar');
}
}


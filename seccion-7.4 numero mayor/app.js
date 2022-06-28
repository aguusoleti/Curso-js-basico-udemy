let numeros = [1,6,8,22,2,7,10,3,5];
let i=0;
let numeroMayor = 0;
for(i=0; i<numeros.length; i++)
{
    if(numeros[i]>numeroMayor)
    {
        numeroMayor = numeros[i];
    }

}
console.log(numeroMayor);